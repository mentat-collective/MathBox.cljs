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
   [mentat.clerk-utils.show :refer [show-sci show-cljs]]))

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

#?(:clj
   (clerk/tex
    "\\begin{pmatrix}\\displaystyle{\\left(R + r\\,\\cos\\left(n\\,\\theta\\right)\\right)\\,\\cos\\left(\\theta\\right)} \\cr \\cr \\displaystyle{\\left(R + r\\,\\cos\\left(n\\,\\theta\\right)\\right)\\,\\sin\\left(\\theta\\right)} \\cr \\cr \\displaystyle{r\\,\\sin\\left(n\\,\\theta\\right)}\\end{pmatrix}"))
;; ## UI

^{::clerk/sync true}
(defonce !state
  (atom
   {:n 16
    :r1 1
    :r2 0.3
    :r3 0.1}))

(show-sci
 [:<>
  [leva/PanelOptions {:drag true}]
  [leva/Panel
   {:state mathbox.examples.math.helitorus/!state
    :options
    {:n {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.001}
     :r2 {:min 0.0 :max 0.5 :step 0.01}
     :r3 {:min 0.0 :max 0.2 :step 0.01}}}]])

;; ## Helpers

(show-cljs
 (defn spine [out R r n theta]
   ;; torus https://en.wikipedia.org/wiki/Torus
   ;;
   ;; https://math.stackexchange.com/questions/324527/do-these-equations-create-a-helix-wrapped-into-a-torus
   ;;
   ;; Notes on how to get the next thing going https://stackoverflow.com/questions/13223115/rendering-a-toroidal-helix

   ;; r2+r3 minor radius, r1 major
   ;;
   ;; HECK YES, so I can SIMPLY take the derivative here of this with respect to
   ;; `t`, to theta, to get the tangent along the curve at that point. note that
   ;; x and y wiggle in and out, and z wiggles up and down.
   (let [n*theta (* n theta)
         xr (+ R (* r (Math/cos n*theta)))]
     (doto out
       (.set (* xr (Math/cos theta))
             (* xr (Math/sin theta))
             (* r  (Math/sin n*theta))))))

 (let [e     0.001
       inv-e (/ 1.0 e)]
   ;; TODO we should really be using the derivative here.
   (defn spine-tangent [out R r n t]
     (doto out
       (.set
        ;; sin(t) (-(r cos(n t) + R)) - n r cos(t) sin(n t)
        (- (* (Math/sin t) (- (+ R (* r (Math/cos (* n t))))))
           (* n r (Math/cos t) (Math/sin (* n t))))

        (- (* (Math/cos t) (+ R (* r (Math/cos (* n t)))))
           (* n r (Math/sin t) (Math/sin (* n t))))
        (* n r (Math/cos (* n t)))

        ))
     #_(doto ^js out
         (spine R r n (+ theta e))
         (.sub v)
         (.multiplyScalar inv-e)
         (.normalize))))

 (defn circle-tangent [out theta]
   (doto out
     (.set (- (Math/sin theta))
           (Math/cos theta)
           0)))

 (let [vn (three/Vector3.)]
   (defn ->tbn
     "Augmented matrix https://en.wikipedia.org/wiki/Affine_transformation#Representation"
     [out v t translation]
     (doto vn
       (.crossVectors v t)
       (.normalize))

     ;; keep v, get the other one.
     (doto ^js t
       (.crossVectors v vn)
       (.normalize))

     ;; turn that into a tbn matrix...
     (doto out
       (.set
        (.-x v) (.-x t) (.-x vn) (.-x translation)
        (.-y v) (.-y t) (.-y vn) (.-y translation)
        (.-z v) (.-z t) (.-z vn) (.-z translation)
        0        0        0        1))))

 (let [vo    (three/Vector3.)
       vt    (three/Vector3.)
       vb    (three/Vector3.)
       mtbn (three/Matrix4.)]
   (defn tbn
     "Compute tangent, biTangent, normal matrix:
     https://learnopengl.com/Advanced-Lighting/Normal-Mapping"
     [n R r theta]
     ;; major is r1, r2 is center to the edge of the torus??

     ;; populate vo to point to the spine at this location.

     (spine vo R r n theta)

     ;; vt <- tangent pointing along the spine of the torus.
     (spine-tangent vt R r n theta)

     ;; vb <- tangent to the circular cross section at that point, looking
     ;; down.
     (circle-tangent vb theta)

     ;; get rotate + translate matrix
     (->tbn mtbn vt vb vo))


   (let [vs (three/Vector3.)]
     (defn area-expr
       "So phi gets you around the smaller circle, and then theta is the big circle."
       [emit theta phi {:keys [n r1 r2 r3]}]
       (let [r (+ r2 r3)
             m (tbn n r1 r theta)]
         ;; and then here, rotate the circle around to the spine, pointing in the
         ;; tangent direction.
         (doto vs
           (.set 0
                 (* r3 (Math/cos phi))
                 ;; along circle radius
                 (* r3 (Math/sin phi)))
           (.applyMatrix4 m))
         (emit (.-x vs)
               (.-y vs)
               (.-z vs)))))

   (def big-cake
     (js/Function.
      "emit"
      "x51275"
      "x51276"
      "x51277"
      "x51278"
      "x51279"
      "x51280"
      "let G000000000000009e = Math.pow(x51278, 2.0);\n
 let G000000000000009f = Math.sin(x51279);\n
 let G00000000000000a2 = Math.pow(x51275, 2.0);\n
 let G00000000000000a6 = Math.pow(x51277, 2.0);\n
 let G00000000000000a7 = x51278 * x51279;\n
 let G00000000000000a8 = Math.cos(x51279);\n
 let G00000000000000a9 = Math.sin(x51280);\n
 let G00000000000000aa = Math.pow(x51276, 2.0);\n
 let G00000000000000b0 = Math.cos(x51280);\n
 let G00000000000000b5 = 2.0 * x51276 * x51277 * G000000000000009e;\n
 let G00000000000000b6 = G00000000000000a6 * G000000000000009e;\n
 let G00000000000000ba = Math.sin(G00000000000000a7);\n
 let G00000000000000bc = G00000000000000aa * G000000000000009e;\n
 let G00000000000000be = Math.cos(G00000000000000a7);\n
 let G00000000000000c2 = Math.pow(G00000000000000be, 2.0);\n
 let G00000000000000c5 = 2.0 * x51275 * x51277 * G00000000000000be;\n
 let G00000000000000c6 = 2.0 * x51275 * x51276 * G00000000000000be;\n
 let G00000000000000c9 = 2.0 * x51276 * x51277 * G00000000000000c2;\n
 let G00000000000000ca = G00000000000000a6 * G00000000000000c2;\n
 let G00000000000000cc = G00000000000000aa * G00000000000000c2;\n
 let G00000000000000cf = G00000000000000bc + G00000000000000cc + G00000000000000b5 + G00000000000000c9 + G00000000000000b6 + G00000000000000ca + G00000000000000c6 + G00000000000000c5 + G00000000000000a2;\n
 let G00000000000000d0 = Math.sqrt(G00000000000000cf);\n
emit((-1.0 * x51276 * x51277 * x51278 * G00000000000000be * G00000000000000a8 * G00000000000000a9 -1.0 * G00000000000000a6 * x51278 * G00000000000000be * G00000000000000a8 * G00000000000000a9 + x51276 * G00000000000000be * G00000000000000a8 * G00000000000000d0 + x51277 * G00000000000000be * G00000000000000a8 * G00000000000000d0 -1.0 * x51277 * G000000000000009f * G00000000000000b0 * G00000000000000d0 + x51275 * G00000000000000a8 * G00000000000000d0) / G00000000000000d0, (-1.0 * x51276 * x51277 * x51278 * G00000000000000be * G00000000000000a9 * G000000000000009f -1.0 * G00000000000000a6 * x51278 * G00000000000000be * G00000000000000a9 * G000000000000009f + x51276 * G00000000000000be * G000000000000009f * G00000000000000d0 + x51277 * G00000000000000be * G000000000000009f * G00000000000000d0 + x51277 * G00000000000000a8 * G00000000000000b0 * G00000000000000d0 + x51275 * G000000000000009f * G00000000000000d0) / G00000000000000d0, (-1.0 * x51276 * x51277 * x51278 * G00000000000000a9 * G00000000000000ba -1.0 * G00000000000000a6 * x51278 * G00000000000000a9 * G00000000000000ba + x51276 * G00000000000000ba * G00000000000000d0 + x51277 * G00000000000000ba * G00000000000000d0) / G00000000000000d0);"))

   (defn cake [emit x51275 x51276 x51277 x51278 x51279 x51280]
     (let
         [G000000000000009e
          (Math/pow x51278 2.0)
          G000000000000009f
          (Math/sin x51279)
          G00000000000000a2
          (Math/pow x51275 2.0)
          G00000000000000a6
          (Math/pow x51277 2.0)
          G00000000000000a7
          (* x51278 x51279)
          G00000000000000a8
          (Math/cos x51279)
          G00000000000000a9
          (Math/sin x51280)
          G00000000000000aa
          (Math/pow x51276 2.0)
          G00000000000000b0
          (Math/cos x51280)
          G00000000000000b5
          (* 2.0 x51276 x51277 G000000000000009e)
          G00000000000000b6
          (* G00000000000000a6 G000000000000009e)
          G00000000000000ba
          (Math/sin G00000000000000a7)
          G00000000000000bc
          (* G00000000000000aa G000000000000009e)
          G00000000000000be
          (Math/cos G00000000000000a7)
          G00000000000000c2
          (Math/pow G00000000000000be 2.0)
          G00000000000000c5
          (* 2.0 x51275 x51277 G00000000000000be)
          G00000000000000c6
          (* 2.0 x51275 x51276 G00000000000000be)
          G00000000000000c9
          (* 2.0 x51276 x51277 G00000000000000c2)
          G00000000000000ca
          (* G00000000000000a6 G00000000000000c2)
          G00000000000000cc
          (* G00000000000000aa G00000000000000c2)
          G00000000000000cf
          (+
           G00000000000000bc
           G00000000000000cc
           G00000000000000b5
           G00000000000000c9
           G00000000000000b6
           G00000000000000ca
           G00000000000000c6
           G00000000000000c5
           G00000000000000a2)
          G00000000000000d0
          (Math/sqrt G00000000000000cf)]
       (emit
        (/
         (+
          (*
           -1.0
           x51276
           x51277
           x51278
           G00000000000000be
           G00000000000000a8
           G00000000000000a9)
          (*
           -1.0
           G00000000000000a6
           x51278
           G00000000000000be
           G00000000000000a8
           G00000000000000a9)
          (*
           x51276
           G00000000000000be
           G00000000000000a8
           G00000000000000d0)
          (*
           x51277
           G00000000000000be
           G00000000000000a8
           G00000000000000d0)
          (*
           -1.0
           x51277
           G000000000000009f
           G00000000000000b0
           G00000000000000d0)
          (* x51275 G00000000000000a8 G00000000000000d0))
         G00000000000000d0)
        (/
         (+
          (*
           -1.0
           x51276
           x51277
           x51278
           G00000000000000be
           G00000000000000a9
           G000000000000009f)
          (*
           -1.0
           G00000000000000a6
           x51278
           G00000000000000be
           G00000000000000a9
           G000000000000009f)
          (*
           x51276
           G00000000000000be
           G000000000000009f
           G00000000000000d0)
          (*
           x51277
           G00000000000000be
           G000000000000009f
           G00000000000000d0)
          (*
           x51277
           G00000000000000a8
           G00000000000000b0
           G00000000000000d0)
          (* x51275 G000000000000009f G00000000000000d0))
         G00000000000000d0)
        (/
         (+
          (*
           -1.0
           x51276
           x51277
           x51278
           G00000000000000a9
           G00000000000000ba)
          (*
           -1.0
           G00000000000000a6
           x51278
           G00000000000000a9
           G00000000000000ba)
          (* x51276 G00000000000000ba G00000000000000d0)
          (* x51277 G00000000000000ba G00000000000000d0))
         G00000000000000d0))))))

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
     [:div {:state @!state}
      [mb/Area
       {:rangeX [(- Math/PI) Math/PI]
        :rangeY [(- Math/PI) Math/PI]
        :width 512
        :height 16
        :channels 3
        :live false
        :expr (fn [emit theta phi _i _j _t]
                (let [{:keys [r1 r2 r3 n]} (.-state !state)]
                  (big-cake emit r1 r2 r3 n theta phi))
                ;; 'r1 'r2 'r3 'n 'theta 'phi
                #_(area-expr
                   emit theta phi (.-state !state)))}]]
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

^{::clerk/width :wide
  ::clerk/visibility {:code :fold}}
(show-sci
 [js/mathbox.examples.math.helitorus.Helitorus
  mathbox.examples.math.helitorus/!state])

;; Server state:

@!state
