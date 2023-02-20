(ns user
  (:require [mentat.clerk-utils.build :as b]
            [mentat.clerk-utils.css :as css]))

(css/set-css!
 "https://unpkg.com/mathbox@2.3.1/build/mathbox.css")

(def index
  "dev/mathbox/notebook.clj")

(def defaults
  {:index index
   :browse? true
   :watch-paths ["dev"]
   :cljs-namespaces '[mathbox.sci-extensions]})

(def static-defaults
  (assoc defaults
         :browse? false
         :paths ["dev/mathbox/examples/**"]
         :cname "mathbox.mentat.org"
         :git/url "https://github.com/mentat-collective/mathbox.cljs"))

(defn serve!
  "Alias of [[mentat.clerk-utils.build/serve!]] with [[defaults]] supplied as
  default arguments.

  Any supplied `opts` overrides the defaults."
  ([] (serve! {}))
  ([opts]
   (b/serve!
    (merge defaults opts))))

(def ^{:doc "Alias for [[mentat.clerk-utils.build/halt!]]."}
  halt!
  b/halt!)

(defn build!
  "Alias of [[mentat.clerk-utils.build/build!]] with [[static-defaults]] supplied as
  default arguments.

  Any supplied `opts` overrides the defaults."
  [opts]
  (b/build!
   (merge static-defaults opts)))
