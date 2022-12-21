^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.helitorus
  (:require
   #?@(:cljs [[mathbox]
              [mathbox.primitives :as mb]
              ["three" :as three]
              ["three/examples/jsm/controls/TrackballControls.js"
               :as TrackballControls]])
   [nextjournal.clerk :as-alias clerk]
   ;; TODO this only for now, since `show-sci` does not behave well on the cljs
   ;; side.
   [mentat.clerk-utils.show :refer [#?(:clj show-sci) show-cljs]]))

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

^{::clerk/sync true}
(defonce !state
  (atom
   {:n 16
    :r1 1
    :r2 0.3
    :r3 0.1}))

#?(:clj
   (show-sci
    [:<>
     [leva/PanelOptions {:drag true}]
     [leva/Panel
      {:state mathbox.examples.math.helitorus/!state
       :options
       {:n {:min 0 :max 32 :step 1}
        :r1 {:min 0 :max 3 :step 0.01}
        :r2 {:min 0.1 :max 0.5 :step 0.01}
        :r3 {:min 0.1 :max 0.2 :step 0.01}}}]]))

;; ## Helpers

(show-cljs
 (def vs (three/Vector3.))

 (defn spine [theta {:keys [n r1 r2 r3]}]
   (let [a (* theta n)
         b theta
         s (Math/sin a)
         c (Math/cos a)
         r (+ r2 r3)
         x (+ 1 (* c r))
         z (* s r)

         s (Math/sin b)
         c (Math/cos b)
         r r1
         x2 (* x c r)
         y2 (* x s r)
         z2 (* z r)]
     (.set vs x2 y2 z2)))

 (defn circle [r1 theta]
   (doto vs
     (.set (* r1 (Math/cos theta))
           (* r1 (Math/sin theta))
           0)))

 (let [vo   (three/Vector3.)
       vt   (three/Vector3.)
       vb   (three/Vector3.)
       vn   (three/Vector3.)
       mtbn (three/Matrix4.)
       e    0.001]
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
        0        0        0        1)))

   (defn area-expr [emit theta phi {:keys [r3] :as state}]
     (let [m (tbn theta state)]
       (doto vs
         (.set 0
               (* r3 (Math/cos phi))
               (* r3 (Math/sin phi)))
         (.applyMatrix4 m))
       (emit (.-x vs)
             (.-y vs)
             (.-z vs))))))

;; ## Helitorus Component

(show-cljs
 (defn ^:export Helitorus [!state]
   [mathbox/Mathbox
    {:style {:height "500px" :width "100%"}
     :options
     {:plugins ["core", "controls", "cursor", "mathbox" "stats"]
      :controls {:klass TrackballControls/TrackballControls}}
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
       :expr (fn [emit theta phi _i _j _t]
               (area-expr emit theta phi (.-state !state)))}]
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

;; ## Animation
;;
;; Note that you can't drop back INTO sci land unless you do some extra work
;; that we can document.

;; Then we can jump back to SCI, to get access to our shared state. Define the
;; full component that you need on the cljs side!

#?(:clj
   ^{::clerk/width :wide
     ::clerk/visibility {:code :fold}}
   (show-sci
    [js/mathbox.examples.math.helitorus.Helitorus
     mathbox.examples.math.helitorus/!state]))

;; Server state:

@!state
