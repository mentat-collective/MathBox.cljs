^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.curvedots
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Curve Dots

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/Mathbox
  {:container {:style {:height "500px" :width "100%"}}
   :renderer  {:background-color 0xffffff}}
  [mb/Camera {:proxy true
              :position [-3.5 2.2 -3.3]}]])
