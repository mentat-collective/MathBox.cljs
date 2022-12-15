^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.exponential
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils :refer [cljs]]))

;; # Exponential
;;
;; Some helpful state.

^{::clerk/sync true}
(defonce !state
  (atom
   {:projectionAngle 90
    :surface "#ffffff"
    :line "#4169e1"}))

;; This slider CAN update the server side state.

(cljs
 (defn square [x]
   (* x x))

 (let [!state mathbox.examples.math.exponential/!state]
   [:<>
    [:div
     [:input
      {:type :range :min 0 :max 10 :step 1
       :value (:projectionAngle @!state)
       :on-change
       (fn [target]
         (let [v (.. target -target -value)]
           (swap! !state assoc :projectionAngle (js/parseInt v))))}]
     " " (:projectionAngle @!state)]
    [v/inspect
     (v/tex
      (str (:projectionAngle @!state)
           "^2 = "
           (square (:projectionAngle @!state))))]]))

;; UI:

(cljs
 [:<>
  [leva/PanelOptions {:drag true}]
  [leva/Panel
   {:state mathbox.examples.math.exponential/!state
    :options
    {:projectionAngle
     {:label "angle"
      :min 0
      :max 360
      :step 0.5}}}]])

;; ### Animation

^{::clerk/width :wide
  ::clerk/visibility {:code :fold}}
(cljs
 [mathbox/Mathbox
  {:style {:height "500px" :width "100%"}
   :init {:background-color 0xffffff
          :camera-position [3 2 5]
          :scale 500}}
  [mb/Cartesian {}
   [mb/Transform4
    {:ref
     (fn [x]
       (when (and x (not (.-created x)))
         (set! (.-created x) true)
         (.bind
          x (js-obj
             "matrix"
             (fn []
               (let [a (/ (* (:projectionAngle
                              (.-state mathbox.examples.math.exponential/!state)) 2 Math/PI)
                          360.0)]
                 (js/Array 1 0 0 (Math/cos a)
                           0 1 0 0
                           0 0 1 (Math/sin a)
                           0 0 0 1)))))))}
    [mb/Area
     {:rangeX [-3 1]
      :rangeY [(* -2 Math/PI) (* 2 Math/PI)]
      :width 129
      :height 65
      :expr
      (fn [emit, x y _i _j]
        (let [r (Math/exp x)]
          (emit (* r (Math/cos y))
                (* r (Math/sin y))
                x
                y)))
      :channels 4}]
    [mb/Surface
     {:color (:surface @mathbox.examples.math.exponential/!state)
      :zBias -0.25}]
    [mb/Line
     {:color (:line @mathbox.examples.math.exponential/!state)
      :width 4}]
    [mb/Transpose
     {:order "yxzw"}]
    [mb/Line
     {:color (:line @mathbox.examples.math.exponential/!state)
      :width 4}]]]])

(cljs @mathbox.examples.math.exponential/!state)
@!state
