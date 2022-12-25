^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.pq-knot
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

;; ## (p, q) Torus Knots

;; https://en.wikipedia.org/wiki/Torus_knot
;;
;; https://sketchesoftopology.wordpress.com/2011/03/28/pqisqp/
;; https://core.ac.uk/download/pdf/82119056.pdf
;;
;; WOAH really cool!!! http://www.jessebett.com/TorusKnotFibration/torusknot.html this has a particle moving around on the surface too.
;;
;; Wow, can I recreate this???? http://www.jessebett.com/TorusKnotFibration/index.html
;;
;; Hell yeah, he used mathbox
;; https://github.com/jessebett/TorusKnotFibration/blob/gh-pages/torusknot.html..
;; we can totally port this!!!

;; more 3d curves, look at this https://rockey-math.github.io/mathbox/graph3d-curve

^{::clerk/sync true}
(defonce !state
  (atom
   {:p 7
    :q 8
    :r1 1.791
    :r2 0.95
    :r3 0.1}))

(show-sci
 [:<>
  [leva/PanelOptions {:drag true}]
  [leva/Panel
   {:state mathbox.examples.math.pq-knot/!state
    :options
    {:p {:min 0 :max 32 :step 1}
     :q {:min 0 :max 32 :step 1}
     :r1 {:min 0 :max 3 :step 0.001}
     :r2 {:min 0.0 :max 2.5 :step 0.01}
     :r3 {:min 0.0 :max 0.2 :step 0.01}}}]])

^{::clerk/visibility {:code :fold}}
(show-cljs
 (defn pq-knot
   [emit x69000 x69001 x69002 x69003 x69004 x69005 x69006]
   (let
       [G000000000000025d (* x69003 x69005)
        G0000000000000260 (Math/sin x69006)
        G0000000000000265 (Math/cos x69006)
        G0000000000000270 (+ x69001 x69002)
        G000000000000028a (* x69004 x69005)
        G0000000000000295 (Math/sin G000000000000028a)
        G00000000000002a3
        (Math/cos G000000000000025d)
        G00000000000002aa
        (Math/cos G000000000000028a)
        G00000000000002b5
        (Math/sin G000000000000025d)
        G00000000000002c9
        (* G0000000000000270 G00000000000002a3)
        G00000000000002d0
        (*
         G00000000000002aa
         G0000000000000270
         -1.0
         G00000000000002a3
         x69003
         x69003)
        G00000000000002d2
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G0000000000000270
         G00000000000002a3
         x69003)
        G00000000000002d5
        (- G00000000000002b5)
        G00000000000002da
        (- G0000000000000295)
        G00000000000002e6
        (*
         G0000000000000295
         G0000000000000270
         -1.0
         G00000000000002a3
         x69003
         x69003)
        G00000000000002f2
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G0000000000000270
         G00000000000002d5
         x69003
         x69003)
        G00000000000002fa
        (*
         G00000000000002da
         x69004
         G0000000000000270
         G00000000000002d5
         x69003)
        G0000000000000300
        (*
         G0000000000000270
         G00000000000002d5
         x69003
         G00000000000002aa
         x69004)
        G0000000000000307
        (*
         G00000000000002aa
         x69004
         G0000000000000270
         G00000000000002d5
         x69003)
        G000000000000030b
        (*
         G00000000000002aa
         G0000000000000270
         G00000000000002d5
         x69003)
        G0000000000000310
        (+ x69000 G00000000000002c9)
        G0000000000000313
        (*
         G0000000000000270
         G00000000000002d5
         x69003
         G00000000000002da
         x69004)
        G0000000000000318
        (*
         G0000000000000295
         G0000000000000270
         G00000000000002d5
         x69003)
        G000000000000031c
        (* G0000000000000310 G00000000000002da x69004)
        G000000000000031f
        (* G0000000000000310 -1.0 G00000000000002aa x69004 x69004)
        G0000000000000324
        (* G0000000000000310 G00000000000002da x69004 x69004)
        G0000000000000329
        (* G0000000000000310 G00000000000002aa x69004)
        G000000000000033d
        (+
         G00000000000002e6
         G0000000000000307
         G0000000000000324
         G0000000000000300)
        G0000000000000340
        (+
         G00000000000002d0
         G00000000000002fa
         G000000000000031f
         G0000000000000313)
        G0000000000000343
        (+ G000000000000030b G000000000000031c)
        G0000000000000354
        (+ G0000000000000318 G0000000000000329)
        G0000000000000359
        (* G0000000000000343 G0000000000000340)
        G000000000000035d
        (* G0000000000000354 G000000000000033d)
        G000000000000035f
        (* G0000000000000343 G0000000000000343)
        G0000000000000364
        (* G0000000000000354 G0000000000000354)
        G000000000000037f
        (+ G000000000000035f G0000000000000364 G00000000000002d2)
        G0000000000000387
        (+
         G0000000000000359
         G0000000000000359
         G000000000000035d
         G000000000000035d
         G00000000000002f2
         G00000000000002f2)
        G000000000000038a
        (/ -1.0 G000000000000037f)
        G0000000000000399
        (Math/sqrt G000000000000037f)
        G000000000000039d
        (* G0000000000000399 2.0)
        G00000000000003a2
        (/ 1.0 G0000000000000399)
        G00000000000003af
        (* G00000000000003a2 G0000000000000340)
        G00000000000003b6
        (* G00000000000003a2 G000000000000033d)
        G00000000000003ba
        (/ 1.0 G000000000000039d)
        G00000000000003be
        (*
         G00000000000003a2
         G0000000000000270
         G00000000000002d5
         x69003
         x69003)
        G00000000000003c1
        (*
         G0000000000000343
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003c3
        (*
         G0000000000000270
         G00000000000002a3
         x69003
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003c5
        (*
         G0000000000000354
         G000000000000038a
         G00000000000003ba
         G0000000000000387)
        G00000000000003cf
        (+ G00000000000003b6 G00000000000003c5)
        G00000000000003d2
        (+ G00000000000003af G00000000000003c1)
        G00000000000003d3
        (+ G00000000000003be G00000000000003c3)
        G00000000000003d4
        (* G00000000000003d2 G00000000000003d2)
        G00000000000003d7
        (* G00000000000003cf G00000000000003cf)
        G00000000000003d9
        (* G00000000000003d3 G00000000000003d3)
        G00000000000003db
        (+ G00000000000003d4 G00000000000003d7 G00000000000003d9)
        G00000000000003de
        (Math/sqrt G00000000000003db)
        G00000000000003df
        (/ 1.0 G00000000000003de)]
     (emit
      (+
       (* G0000000000000310 G00000000000002aa)
       (*
        (-
         (*
          G0000000000000354
          G00000000000003a2
          G00000000000003d3
          G00000000000003df)
         (*
          G0000000000000270
          G00000000000002a3
          x69003
          G00000000000003a2
          G00000000000003cf
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003d2
        G00000000000003df
        x69002
        G0000000000000260))
      (+
       (* G0000000000000310 G0000000000000295)
       (*
        (-
         (*
          G0000000000000270
          G00000000000002a3
          x69003
          G00000000000003a2
          G00000000000003d2
          G00000000000003df)
         (*
          G0000000000000343
          G00000000000003a2
          G00000000000003d3
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003cf
        G00000000000003df
        x69002
        G0000000000000260))
      (+
       (* G0000000000000270 G00000000000002b5)
       (*
        (-
         (*
          G0000000000000343
          G00000000000003a2
          G00000000000003cf
          G00000000000003df)
         (*
          G0000000000000354
          G00000000000003a2
          G00000000000003d2
          G00000000000003df))
        x69002
        G0000000000000265)
       (*
        G00000000000003d3
        G00000000000003df
        x69002
        G0000000000000260))))))

(show-cljs
 (defn ^:export PQKnot [!state]
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
        :live true
        :expr (fn [emit theta phi _i _j t]
                (let [{:keys [r1 r2 r3 p q]} (.-state !state)
                      r3 (+ r3 (* r3 0.5 (* (Math/sin (* 2 theta t))
                                            (Math/sin (* 2 theta t)))))]
                  (pq-knot emit r1 r2 r3 q p theta phi)))}]]

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
 [js/mathbox.examples.math.pq_knot.PQKnot
  mathbox.examples.math.pq-knot/!state])
