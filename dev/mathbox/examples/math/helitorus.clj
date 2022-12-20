^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.helitorus
  (:require [nextjournal.clerk :as clerk]
            [mentat.clerk-utils :refer [cljs]]))

;; # Helitorus
;;
;; BOOM this describes what to do! we'll see if we can get rid of the vector4
;; etc and do it more simply, maybe there is some speed we can get from
;; compiling with sicmutils.
;; https://math.stackexchange.com/questions/324527/do-these-equations-create-a-helix-wrapped-into-a-torus
;;
;; https://search.brave.com/search?q=helical+toroid&source=desktop
;;
;; https://mathtourist.blogspot.com/2016/09/airport-helical-toroid.html

;; https://www.laetusinpraesens.org/docs10s/helixtor.php

;; ## UI

(cljs
 (defonce !state
   (reagent/atom
    {:n 16
     :r1 1
     :r2 0.3
     :r3 0.1
     :compiled? true}))

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

(cljs
 (let [vs (mathbox/Vector3)
       cos Math/cos
       sin Math/sin]
   (defn spine [theta {:keys [n r1 r2 r3]}]
     (let [a (* theta n)
           b theta
           s (sin a)
           c (cos a)
           r (+ r2 r3)
           x (+ 1 (* c r))
           z (* s r)

           s (sin b)
           c (cos b)
           r r1
           x2 (* x c r)
           y2 (* x s r)
           z2 (* z r)]
       (.set vs x2 y2 z2)))

   (defn circle [r1 theta]
     (doto vs
       (.set (* r1 (cos theta))
             (* r1 (sin theta))
             0)))

   (let [vo   (mathbox/Vector3)
         vt   (mathbox/Vector3)
         vb   (mathbox/Vector3)
         vn   (mathbox/Vector3)
         mtbn (mathbox/Matrix4)
         e 0.001]
     (defn tbn [theta {:keys [n r1] :as state}]
       (doto vt
         (.copy (.copy vo (spine theta state)))
         (.sub (spine (+ theta e) state))
         (.multiplyScalar (/ 1.0 e))
         (.normalize))
       (if n
         (doto vb
           (.copy (circle r1 theta))
           (.sub (circle r1 (+ theta e)))
           (.multiplyScalar (/ 1 e)))
         (.copy vb vo))
       (.normalize vb)

       (.crossVectors vn vt vb)
       (.normalize vn)

       (.crossVectors vb vt vn)
       (.normalize vb)

       (doto mtbn
         (.set
          (.-x vt) (.-x vb) (.-x vn) (.-x vo)
          (.-y vt) (.-y vb) (.-y vn) (.-y vo)
          (.-z vt) (.-z vb) (.-z vn) (.-z vo)
          0        0        0        1))))

   (defn area-expr [emit theta phi !state]
     (let [{:keys [r3] :as state} (.-state !state)
           m (tbn theta state)]
       (doto vs
         (.set 0
               (* r3 (cos phi))
               (* r3 (sin phi)))
         (.applyMatrix4 m))
       (emit (.-x vs)
             (.-y vs)
             (.-z vs))))))

;; ## Helitorus Component

(cljs
 (defn Helitorus [expr]
   [mathbox/Mathbox
    {:style {:height "500px" :width "100%"}
     :options
     {:plugins ["core", "controls", "cursor", "mathbox" "stats"]
      :controls {:klass mathbox/Trackball}}
     :init {:background-color 0xffffff
            :camera-proxy true
            :camera-position [1 1 3]
            :scale 500 :focus 3}}
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
       :expr expr}]
     ;; // Draw spine curve
     [mb/Surface
      {:shaded true
       :color 0xcc0040
       :lineY true
       :width 1}]

     [mb/Resample {:height 5}]
     [mb/Line
      {:color 0xffffff
       :width 2}]]]))

;; Animation

^{::clerk/width :wide
  ::clerk/visibility {:code :fold}}
(cljs
 [Helitorus
  (if (:compiled? @!state)
    (fn [emit theta phi i j t]
      (mathbox/area-expr emit theta phi !state))
    (fn [emit theta phi i j t]
      (area-expr emit theta phi !state)))])
