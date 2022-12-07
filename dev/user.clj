(ns user
  (:require [hiccup.page :as hiccup]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]))

(defn rebind [^clojure.lang.Var v f]
  (let [old (.getRawRoot v)]
    (.bindRoot v (f old))))

;; my attempt at injecting the CSS for my viewers...
(defonce _ignore
  (rebind
   #'nextjournal.clerk.view/include-viewer-css
   (fn [old]
     (fn []
       (concat
        (list
         (hiccup/include-css "https://unpkg.com/mathbox@2.2.0/build/mathbox.css"))
        (old))))))

(defn start! []
  (swap! config/!resource->url
         merge
         {"/js/viewer.js" "http://localhost:8766/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/mathbox/notebook.clj"))

(defn github-pages! [_]
  (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
  (clerk/build!
   {:paths ["dev/mathbox/notebook.clj"]
    :bundle? false
    :browse? false
    :out-path "public"}))
