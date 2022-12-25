(ns user
  (:require [babashka.fs :as fs]
            [clojure.java.shell :refer [sh]]
            [clojure.string]
            [hiccup.page :as hiccup]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]
            [nextjournal.clerk.viewer :as cv]
            [shadow.cljs.devtools.api :as shadow]))

(def index
  "dev/mathbox/notebook.clj")

(def build-target
  {:index index
   :paths
   ["dev/mathbox/examples/**"]})

(def ^{:doc "static site defaults for local and github-pages modes."}
  defaults
  {:out-path   "public"
   :cas-prefix "/"})

(def ^{:doc "static site defaults for Clerk's Garden CDN."}
  garden-defaults
  {:cas-prefix "/mentat-collective/mathbox.cljs/commit/$GIT_SHA/"})

(defn rebind [^clojure.lang.Var v f]
  (let [old (.getRawRoot v)]
    (.bindRoot v (f old))))

;; my attempt at injecting the CSS for my viewers...
(defonce _ignore
  (rebind
   #'nextjournal.clerk.view/include-viewer-css
   (fn [old]
     (fn [& xs]
       (concat
        (list
         (hiccup/include-css "https://unpkg.com/mathbox@2.2.0/build/mathbox.css"))
        (apply old xs))))))

(defn start! []
  (swap! config/!resource->url
         merge
         {"/js/viewer.js" "http://localhost:8766/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! index))

(defn replace-sha-template!
  "Given some `path`, modifies the file at `path` replaces any occurence of the
  string `$GIT_SHA` with the actual current sha of the repo."
  [path]
  (let [sha (-> (sh "git" "rev-parse" "HEAD")
                (:out)
                (clojure.string/trim))]
    (-> (slurp path)
        (clojure.string/replace "$GIT_SHA" sha)
        (->> (spit path)))))

(defn static-build!
  "This task is used to generate static sites for local use, github pages
  deployment and Clerk's Garden CDN.

  Accepts a map of options `opts` and runs the following tasks:

  - Slurps the output of the shadow-cljs `:clerk` build from `public/js/main.js`
    and pushes it into a CAS located at `(str (:out-path opts) \"/js/_data\")`.

  - Configures Clerk to generate files that load the js from the generated name
    above, stored in `(str (:cas-prefix opts) \"/js/_data\")`

  - Creates a static build of the single namespace [[index]] at `(str (:out-path
    opts) \"/index.html\")`

  - Replaces all instances of the string $GIT_SHA in `index.html` with the
    actual sha of the library.

  All `opts` are forwarded to [[nextjournal.clerk/build!]]."
  [opts]
  (let [{:keys [out-path cas-prefix]} (merge defaults opts)
        cas (cv/store+get-cas-url!
             {:out-path (str out-path "/js") :ext "js"}
             (fs/read-all-bytes "public/js/main.js"))]
    (swap! config/!resource->url assoc
           "/js/viewer.js"
           (str cas-prefix "js/" cas))
    (clerk/build!
     (merge build-target
            (assoc opts :out-path out-path)))
    (replace-sha-template!
     (str out-path "/index.html"))))

(defn garden!
  "Standalone executable function that runs [[static-build!]] configured for
  Clerk's Garden. See [[garden-defaults]] for customizations
  to [[static-build!]]."
  [opts]
  (println "Running npm install...")
  (println
   (sh "npm" "install"))
  (shadow/release! :clerk)
  (static-build!
   (merge garden-defaults opts)))
