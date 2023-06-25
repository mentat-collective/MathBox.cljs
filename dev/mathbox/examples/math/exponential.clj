^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.exponential
  (:require [mentat.clerk-utils.show :refer [show-sci]]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(clerk/eval-cljs
 ;; These aliases only apply inside this namespace.
 '(do (require '[mathbox.core :as mathbox])
      (require '[mathbox.primitives :as mb])
      (require '[reagent.core :as reagent])
      (require '[leva.core :as leva])))

;; # Exponential
;;
;; ### UI

(show-sci
 (defonce !state
   (reagent/atom
    {:projectionAngle 90
     :surface "#ffffff"
     :line "#4169e1"}))

 [:<>
  [leva/Config {:drag true}]
  [leva/Controls
   {:atom !state
    :schema
    {:projectionAngle
     {:label "angle"
      :min 0
      :max 360
      :step 0.5}}}]])

;; ### Animation

^{::clerk/width :wide
  ::clerk/visibility {:code :fold}}

(show-sci
 [mathbox/MathBox
  {:container {:style {:height "500px" :width "100%"}}
   :renderer  {:background-color 0xffffff}
   :scale     500}
  [mb/Camera {:proxy true :position [3 2 5]}]
  [mb/Cartesian {}
   [mb/Transform4
    {:matrix
     (let [a (/ (* (:projectionAngle @!state) 2 Math/PI)
                360.0)]
       [1 0 0 (Math/cos a)
        0 1 0 0
        0 0 1 (Math/sin a)
        0 0 0 1])}
    [mb/Area
     {:rangeX [-3 1]
      :rangeY [(* -2 Math/PI) (* 2 Math/PI)]
      :width 129
      :height 65
      :channels 4
      :expr
      (fn [emit, x y _i _j]
        (let [r (Math/exp x)]
          (emit (* r (Math/cos y))
                (* r (Math/sin y))
                x
                y)))}]
    [mb/Surface
     {:color (:surface @!state)
      :zBias -0.25}]
    [mb/Line
     {:color (:line @!state)
      :width 4}]
    [mb/Transpose
     {:order "yxzw"}]
    [mb/Line
     {:color (:line @!state)
      :width 4}]]]])
