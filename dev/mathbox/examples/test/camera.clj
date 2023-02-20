^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.camera
  (:require [mentat.clerk-utils.show :refer [show-sci]]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(clerk/eval-cljs
 ;; These aliases only apply inside this namespace.
 '(require '[mathbox.core :as mathbox])
 '(require '[mathbox.primitives :as mb])
 '(require '[reagent.core :as reagent]))

;; # Camera

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container  {:style {:height "500px" :width "100%"}}
   :threestrap {:plugins ["core"]}
   :renderer   {:background-color 0xffffff}}
  [mb/Cartesian
   {:range [[-1 1] [-1 1] [-1 1]]
    :scale [1 1 1]}
   [mb/Camera
    {:proxy true
     :lookAt [0 0 0]
     :liveProps
     {:position
      (let [out (js/Array. 0 0 0)]
        (fn [t]
          (doto out
            (aset 0 (+ 1 (* -3 (Math/cos t))))
            (aset 1 (+ 1 (* 0.4 (Math/cos (* t 0.381)))))
            (aset 2 (+ 1 (* -3 (Math/sin t)))))))}}]
   [mb/Transform
    {:position [0 0.5 0]}
    [mb/Grid {:axes [1 3]
              :width 2,
              :color 0xb0b0b0
              :depth 0.5}]]
   [mb/Transform
    {:position [0 -0.5 0]}
    [mb/Grid {:axes [1 3]
              :width 2,
              :color 0x2fff90
              :depth 0.5}]]]])
