^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.context
  (:require [mentat.clerk-utils.show :refer [show-sci]]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(clerk/eval-cljs
 ;; These aliases only apply inside this namespace.
 '(require '[mathbox.core :as mathbox])
 '(require '[mathbox.primitives :as mb]))

;; # Context

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "500px" :width "100%"}}
   :renderer  {:background-color 0xffffff}}
  [mb/Camera {:proxy true
              :position [-3.5 2.2 -3.3]}]])
