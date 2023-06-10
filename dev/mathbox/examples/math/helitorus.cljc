^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.helitorus
  (:require
   #?@(:cljs [[mathbox.core :as mathbox]
              [mathbox.primitives :as mb]
              #_["three" :as three]
              ["three/examples/jsm/controls/TrackballControls.js"
               :as TrackballControls]])
   [nextjournal.clerk #?(:clj :as :cljs :as-alias) clerk]
   [mentat.clerk-utils.show :refer [show-sci show-cljs]]))

;; # Helitorus

#?(:clj
   (clerk/tex
    "\\begin{pmatrix}\\displaystyle{\\left(R + r\\,\\cos\\left(n\\,\\theta\\right)\\right)\\,\\cos\\left(\\theta\\right)} \\cr \\cr \\displaystyle{\\left(R + r\\,\\cos\\left(n\\,\\theta\\right)\\right)\\,\\sin\\left(\\theta\\right)} \\cr \\cr \\displaystyle{r\\,\\sin\\left(n\\,\\theta\\right)}\\end{pmatrix}"))
;; ## UI

^::clerk/sync
(defonce !state
  (atom
   {:n 16
    :r1 1
    :r2 0.3
    :r3 0.1}))

(show-sci
 [:<>
  [leva.core/Config {:drag true}]
  [leva.core/Controls
   {:atom !state
    :schema
    {:n {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.001}
     :r2 {:min 0.0 :max 0.5 :step 0.01}
     :r3 {:min 0.0 :max 0.2 :step 0.01}}}]])

;; ## Code Emitter

^{::clerk/visibility :fold}
(show-sci
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
        G00000000000000f1))))))

;; ## Helitorus Component

;; NOTE that we have to do `cljs` to get back. Exports do not currently make it
;; through the show-cljs process.

(show-sci
 (defn Helitorus [!state f]
   [mathbox.core/MathBox
    {:container {:style {:height "500px" :width "100%"}}
     :threestrap
     {:plugins ["core", "controls", "cursor", "mathbox" "stats"]}
     :renderer {:background-color 0xffffff}
     :scale 500
     :focus 3}
    [mathbox.primitives/Camera {:proxy true
                                :position [1 1 3]}]
    [mathbox.primitives/Cartesian {:range [[-1 1] [-1 1] [-1 1]]
                                   :scale [1 1 1]
                                   :quaternion [0.7 0 0 0.7]}
     [:div {:state @!state}
      [mathbox.primitives/Area
       {:rangeX [(- Math/PI) Math/PI]
        :rangeY [(- Math/PI) Math/PI]
        :width 512
        :height 16
        :channels 3
        :live true
        :expr (fn [emit theta phi _i _j _t]
                (let [{:keys [r1 r2 r3 n]} (.-state !state)]
                  (f emit r1 r2 r3 n theta phi)))}]]
     [mathbox.primitives/Surface
      {:shaded true
       :color 0xcc0040
       :lineY true
       :width 1}]

     [mathbox.primitives/Resample {:height 5}]
     [mathbox.primitives/Line
      {:color 0xffffff
       :width 2}]]]))

;; ## Animation
;;
;; Note that you can't drop back INTO sci land unless you do some extra work
;; that we can document.

;; Then we can jump back to SCI, to get access to our shared state. Define the
;; full component that you need on the cljs side!

^{::clerk/width :wide}
(show-sci
 [Helitorus !state cake2])
