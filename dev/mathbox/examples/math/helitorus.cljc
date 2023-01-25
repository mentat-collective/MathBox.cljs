^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.helitorus
  (:require
   #?@(:cljs [[mathbox]
              [mathbox.primitives :as mb]
              #_["three" :as three]
              ["three/examples/jsm/controls/TrackballControls.js"
               :as TrackballControls]])
   [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
   ;; TODO this only for now, since `show-sci` does not behave well on the cljs
   ;; side.
   [mentat.clerk-utils.show :refer [show-sci show-cljs]]))

;; # Helitorus

;; https://blackpawn.com/texts/pqtorus/
;;
;; https://legacy.cs.indiana.edu/ftp/techreports/TR407.pdf optimal tubes and ribbons from curves

;; woah, Frenet-Serret?? https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas
;;
;; https://www.sciencepublishinggroup.com/journal/paperinfo?journalid=148&doi=10.11648/j.ajam.20140206.12
;;
;; So I kind of think it's cheating to pick the circle normal, and that we
;; should really be taking another derivative here.
;;
;; https://search.brave.com/search?q=Frenet-Serretmovingtrihedro&source=desktop
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

;; TODO that if you are going to export, this will currently break your code...
;; having clerk/sync set to true.

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

;; ## SICMUtils Code

#_
(comment
  (defn make-unit
    "TODO get this over to vectors!!"
    [v]
    (/ v (abs v)))

  (defn spine
    "Parametric equation for a helix with `n` twists wrapped around a torus (donut)
  with major radius `R` and minor radius `r`.

  Given those parameters and an angle `theta` around the torus, returns a
  3-vector of the XYZ coordinates of the helix."
    [R r n theta]
    (let [xr (+ R (* r (cos (* n theta))))]
      [(* xr (cos theta))
       (* xr (sin theta))
       (* r  (sin (* n theta)))]))

  (defn circle
    "Given some radius `r` and `angle`, returns the x-y-z coordinates of a point at
  angle `theta` on the unit circle sitting flat in the x-y plane."
    ([angle] (circle 1 angle))
    ([r angle]
     [(* r (cos angle))
      (* r (sin angle))
      0]))

  (defn helitorus
    "Given:

  `R` - the major radius of a torus
  `r2` - minor radius of a torus
  `r3` - radius of a helitorus cross-section
  `n`  - the number of helitorus windings

  Returns a function that generates the x-y-z coordinates of a point on the
  helitoroidal manifold at angle `theta` around the torus and `phi` around the
  shell of the fattened helix."
    [R r2 r3 n]
    (fn [theta phi]
      (let [;; minor radius of the torus
            r (+ r2 r3)

            ;; normalized vector pointing along the helix
            t (make-unit
               (((partial 3) spine) R r n theta))

            ;; vector tangent to the unit circle
            b (make-unit
               ((D circle) theta))]
        ;; - generate a point along the helitorus cross-section at angle phi
        ;; - rotate it to point along the helical path at this theta
        ;; - translate the circle from the origin to spine
        (+ (spine R r n theta)
           (* (matrix-by-cols b (cross-product t b) t)
              (circle r3 phi)))))))

;; even tighter:

#_
(comment
  ;; This needed to be compiled WITHOUT running the simplifier. We need to put a
  ;; short budget on the simplifier here.
  (defn make-unit
    "Given a vector, returns a vector of unit length pointing in the same direction
  as `v`."
    [v]
    (/ v (abs v)))

  (defn ->TNB
    "Given a parametric function `f` of a single variable `t`, generates a function
  of `t` that returns a matrix with columns B, N, T of the Frenet-Serret frame
  at point `(f t)`.

  See the section on 'other expressions' here:
  https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas#Other_expressions_of_the_frame"
    [f]
    (let [T (fn [t]
              (make-unit ((D f) t)))
          N (fn [theta]
              (make-unit ((D T) theta)))]
      (fn [t]
        (let [T-t (T t)
              N-t (N t)
              B-t (cross-product T-t N-t)]
          (matrix-by-cols B-t N-t T-t)))))

  (defn spine
    "Returns a function of `theta` that produces a 3-vector of the XYZ coordinates
  of a helix with `n` twists wrapped around a torus (donut) with major radius
  `R` and minor radius `r`."
    [R r n]
    (fn [theta]
      (let [xr (+ R (* r (cos (* n theta))))]
        [(* xr (cos theta))
         (* xr (sin theta))
         (* r  (sin (* n theta)))])))

  (defn circle
    "Given some radius `r` and `angle`, returns the x-y-z coordinates of a point at
  angle `theta` on the unit circle sitting flat in the x-y plane."
    [r angle]
    [(* r (cos angle))
     (* r (sin angle))
     0])

  (defn helitorus
    "Given:

  `R` - the major radius of a torus
  `r2` - minor radius of a torus
  `r3` - radius of a helitorus cross-section
  `n`  - the number of helitorus windings

  Returns a function that generates the x-y-z coordinates of a point on the
  helitoroidal manifold at angle `theta` around the torus and `phi` around the
  shell of the fattened helix."
    [R r2 r3 n]
    (fn [theta phi]
      (let [spine-f (spine R (+ r2 r3) n)
            M       (->TNB spine-f)]
        (+ (spine-f theta)
           (* (M theta)
              (circle r3 phi)))))))

;; ## Helpers

#_
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
       _inv-e (/ 1.0 e)]
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
               (.-z vs)))))))

(show-cljs
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

 (defn cake2
   [emit x63167 x63168 x63169 x63170 x63171 x63172]
   (let
       [G00000000000000db
        (* x63170 x63171)
        G00000000000000e6
        (Math/sin x63171)
        G00000000000000f1
        (Math/sin x63172)
        G00000000000000f6
        (+ x63168 x63169)
        G0000000000000103
        (Math/cos x63172)
        G0000000000000106
        (Math/cos x63171)
        G0000000000000117
        (Math/cos G00000000000000db)
        G000000000000011b
        (Math/sin G00000000000000db)
        G0000000000000124
        (- G00000000000000e6)
        G0000000000000139
        (* G00000000000000f6 G0000000000000117)
        G0000000000000140
        (- G000000000000011b)
        G0000000000000150
        (*
         G0000000000000106
         G00000000000000f6
         -1.0
         G0000000000000117
         x63170
         x63170)
        G0000000000000156
        (*
         G00000000000000f6
         G0000000000000117
         x63170
         G00000000000000f6
         G0000000000000117
         x63170)
        G0000000000000162
        (*
         G00000000000000e6
         G00000000000000f6
         -1.0
         G0000000000000117
         x63170
         x63170)
        G0000000000000172
        (*
         G00000000000000e6
         G00000000000000f6
         G0000000000000140
         x63170)
        G0000000000000174
        (*
         G00000000000000f6
         G0000000000000140
         x63170
         G0000000000000106)
        G000000000000017a
        (*
         G00000000000000f6
         G0000000000000140
         x63170
         G0000000000000124)
        G000000000000017d
        (*
         G0000000000000106
         G00000000000000f6
         G0000000000000140
         x63170)
        G000000000000017e
        (*
         G00000000000000f6
         G0000000000000117
         x63170
         G00000000000000f6
         G0000000000000140
         x63170
         x63170)
        G0000000000000187
        (*
         G0000000000000124
         G00000000000000f6
         G0000000000000140
         x63170)
        G0000000000000188
        (+ x63167 G0000000000000139)
        G000000000000018c
        (* G0000000000000188 G0000000000000106)
        G000000000000019e
        (* G0000000000000188 G0000000000000124)
        G00000000000001a1
        (* G0000000000000188 -1.0 G0000000000000106)
        G00000000000001b8
        (+
         G0000000000000150
         G0000000000000187
         G00000000000001a1
         G000000000000017a)
        G00000000000001ba
        (+ G000000000000017d G000000000000019e)
        G00000000000001c1
        (+
         G0000000000000162
         G000000000000017d
         G000000000000019e
         G0000000000000174)
        G00000000000001c5
        (+ G0000000000000172 G000000000000018c)
        G00000000000001cb
        (* G00000000000001c5 G00000000000001c1)
        G00000000000001d2
        (* G00000000000001ba G00000000000001b8)
        G00000000000001d7
        (* G00000000000001c5 G00000000000001c5)
        G00000000000001e1
        (* G00000000000001ba G00000000000001ba)
        G00000000000001ed
        (+
         G00000000000001d2
         G00000000000001d2
         G00000000000001cb
         G00000000000001cb
         G000000000000017e
         G000000000000017e)
        G00000000000001f6
        (+ G00000000000001e1 G00000000000001d7 G0000000000000156)
        G0000000000000200
        (/ -1.0 G00000000000001f6)
        G000000000000020b
        (Math/sqrt G00000000000001f6)
        G0000000000000217
        (* G000000000000020b 2.0)
        G0000000000000219
        (/ 1.0 G000000000000020b)
        G0000000000000224
        (/ 1.0 G0000000000000217)
        G0000000000000225
        (* G0000000000000219 G00000000000001c1)
        G0000000000000229
        (* G0000000000000219 G00000000000001b8)
        G000000000000022b
        (*
         G0000000000000219
         G00000000000000f6
         G0000000000000140
         x63170
         x63170)
        G0000000000000231
        (*
         G00000000000000f6
         G0000000000000117
         x63170
         G0000000000000200
         G0000000000000224
         G00000000000001ed)
        G0000000000000234
        (*
         G00000000000001c5
         G0000000000000200
         G0000000000000224
         G00000000000001ed)
        G000000000000023c
        (*
         G00000000000001ba
         G0000000000000200
         G0000000000000224
         G00000000000001ed)
        G0000000000000243
        (+ G000000000000022b G0000000000000231)
        G0000000000000244
        (+ G0000000000000225 G0000000000000234)
        G0000000000000245
        (+ G0000000000000229 G000000000000023c)
        G0000000000000246
        (* G0000000000000244 G0000000000000244)
        G0000000000000247
        (* G0000000000000245 G0000000000000245)
        G0000000000000248
        (* G0000000000000243 G0000000000000243)
        G000000000000024c
        (+ G0000000000000247 G0000000000000246 G0000000000000248)
        G0000000000000250
        (Math/sqrt G000000000000024c)
        G0000000000000251
        (/ 1.0 G0000000000000250)]
     (emit
      (+
       G000000000000018c
       (*
        (-
         (*
          G00000000000001c5
          G0000000000000219
          G0000000000000243
          G0000000000000251)
         (*
          G00000000000000f6
          G0000000000000117
          x63170
          G0000000000000219
          G0000000000000244
          G0000000000000251))
        x63169
        G0000000000000103)
       (*
        G0000000000000245
        G0000000000000251
        x63169
        G00000000000000f1))
      (+
       (* G0000000000000188 G00000000000000e6)
       (*
        (-
         (*
          G00000000000000f6
          G0000000000000117
          x63170
          G0000000000000219
          G0000000000000245
          G0000000000000251)
         (*
          G00000000000001ba
          G0000000000000219
          G0000000000000243
          G0000000000000251))
        x63169
        G0000000000000103)
       (*
        G0000000000000244
        G0000000000000251
        x63169
        G00000000000000f1))
      (+
       (* G00000000000000f6 G000000000000011b)
       (*
        (-
         (*
          G00000000000001ba
          G0000000000000219
          G0000000000000244
          G0000000000000251)
         (*
          G00000000000001c5
          G0000000000000219
          G0000000000000245
          G0000000000000251))
        x63169
        G0000000000000103)
       (*
        G0000000000000243
        G0000000000000251
        x63169
        G00000000000000f1)))))

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
       G00000000000000d0)))))

;; ## Helitorus Component

;; NOTE that we have to do `cljs` to get back. Exports do not currently make it
;; through the show-cljs process.

(show-cljs
 (defn ^:export Helitorus [!state]
   [mathbox/MathBox
    {:container {:style {:height "500px" :width "100%"}}
     :threestrap
     {:plugins ["core", "controls", "cursor", "mathbox" "stats"]
      :controls {:klass TrackballControls/TrackballControls}}
     :renderer {:background-color 0xffffff}
     :scale 500
     :focus 3}
    [mb/Camera {:proxy true
                :position [1 1 3]}]
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
                  #_(big-cake emit r1 r2 r3 n theta phi)
                  (cake2 emit r1 r2 r3 n theta phi))
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
