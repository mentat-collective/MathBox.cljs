^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.closed-surface
  (:require [mentat.clerk-utils.show :refer [show-sci]]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(clerk/eval-cljs
 ;; These aliases only apply inside this namespace.
 '(require '[mathbox.core :as mathbox])
 '(require '[mathbox.primitives :as mb]))

;; # Closed Surface

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "500px" :width "100%"}}
   :threestrap
   {:plugins ["core" "controls" "cursor" "stats"]}
   :renderer {:background-color 0xffffff}}
  [mb/Camera {:proxy true :position [-3.5 2.2 -3.3]}]
  [mb/Cartesian
   {:range [[-1 1] [-1 1] [-1 1]]
    :scale [1 1 1]}]

  [mb/Axis {:axis 1}]
  [mb/Axis {:axis 3}]
  [mb/Grid {:width 5
            :opacity 0.5
            :axes [1 3]}]

  ;; // Horizontally closed explicit normals
  [mb/Matrix
   {:id "sphere"
    :bufferWidth 128
    :bufferHeight 64
    :width 64
    :height 32
    :channels 3
    :live false
    :expr (fn [emit i j _time]
            (let [phi   (* 2 Math/PI (/ i 64))
                  theta (* Math/PI (- (/ j 31) 0.5))]
              (emit (* (Math/cos phi) (Math/cos theta))
                    (Math/sin theta)
                    (* (Math/sin phi) (Math/cos theta)))))}]
  [mb/Transform {:scale [0.5 0.5 0.5]}
   [mb/Surface {:points "<"
                :normals "<"
                :color 0x3090ff
                :shaded true
                :closedX true}]]

  ;; Completely closed implicit normals
  [mb/Matrix
   {:id "torus"
    :bufferWidth 128
    :bufferHeight 64
    :width 64
    :height 32
    :channels 3
    :live false
    :expr (fn [emit i j _time]
            (let [phi   (* 2 Math/PI (/ i 64))
                  theta (* 2 Math/PI (/ j 32))
                  x (+ 2 (* 0.5 (Math/cos phi)))
                  y (* 0.5 (Math/sin phi))]
              (emit (* x (Math/cos theta))
                    y
                    (* x (Math/sin theta)))))}]
  [mb/Transform {:scale [0.5 0.5 0.5]}
   [mb/Surface {:points "<"
                :color 0x3090ff
                :shaded true
                :closedX true
                :closedY true}]]])
