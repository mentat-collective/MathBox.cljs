^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.helitorus
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils :refer [cljs]]))

;; # Helitorus

;; ## UI

(cljs
 (defonce !state
   (reagent/atom
    {:n 16
     :r1 1
     :r2 0.3
     :r3 0.1}))

 [:<>
  [leva/PanelOptions {:drag true}]
  [leva/Panel
   {:state !state
    :options
    {:n {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.01}
     :r2 {:min 0.1 :max 0.5 :step 0.01}
     :r3 {:min 0.1 :max 0.2 :step 0.01}}}]])

;; ## Helpers
;;
;; TODO that code is way too slow, so we have to move it over to its own cljs
;; file.

;; ## Animation

^{::clerk/width :wide
  ::clerk/visibility {:code :fold}}
(cljs
 [mathbox/Mathbox
  {:style {:height "500px" :width "100%"}
   :options
   {:plugins ["core", "controls", "cursor", "mathbox" "stats"]
    :controls {:klass mathbox/Trackball}}
   :init {:background-color 0xffffff
          :camera-proxy true
          :camera-position [1 1 3]
          :scale 500 :focus 3}}
  [mb/Clock {:speed (/ 1 16)}]
  [mb/Cartesian {:range [[-1 1] [-1 1] [-1 1]]
                 :scale [1 1 1]
                 :quaternion [0.7 0 0 0.7]}

   ;; Compute helitoroidal surface
   [mb/Area
    {:rangeX [(- Math/PI) Math/PI]
     :rangeY [(- Math/PI) Math/PI]
     :width 512
     :height 16
     :channels 3
     :expr
     (fn [emit theta phi i j t]
       (mathbox/my-expr emit theta phi !state))}]
   ;; // Draw spine curve
   [mb/Surface
    {:shaded true
     :color 0xcc0040
     :lineY true
     :width 1}]

   [mb/Resample {:height 5}]
   [mb/Line
    {:color 0xffffff
     :width 2}]]])
