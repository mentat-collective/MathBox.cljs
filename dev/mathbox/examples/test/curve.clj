^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.curve
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Curve

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/Mathbox
  {:style {:height "500px" :width "100%"}
   :init {:background-color 0xffffff}}
  [mb/Camera {:proxy true
              :position [-3.5 2.2 -3.3]}]])
