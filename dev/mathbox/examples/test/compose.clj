^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.compose
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Compose

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/Mathbox
  {:container {:style {:height "500px" :width "100%"}}
   :renderer  {:background-color 0xffffff}
   :scale 500
   :focus 3}
  [mb/Camera {:proxy true :position [0 0 3]}]
  [mb/Cartesian {:range [[-2 2] [-1 1] [-1 1]]
                 :scale [2 1 1]}
   [mb/Grid {:color "black"
             :divideX 2
             :divideY 2
             :zBias 10
             :opacity 0.75}]

   [mb/Rtt {:type "unsignedByte"}
    [mb/Camera {:lookAt [0 0 0]
                :liveProps
                {:position
                 (let [out (js/Array. 0 0 0)]
                   (fn [t]
                     (doto out
                       (aset 0 (* 3 (Math/cos t)))
                       (aset 1 (Math/sin (* 0.271 t)))
                       (aset 2 (* 3 (Math/sin t))))))}}]
    [mb/Cartesian
     {:range [[-2 2]
              [-1 1]
              [-1 1]]
      :scale [2 1 1]}
     [mb/Grid {:color "black"
               :divideX 2
               :divideY 2
               :zBias 10
               :opacity 0.75}]]]

   [mb/Compose
    {:color "#fff"
     :opacity 0.5
     :zWrite false}]
   [mb/Area
    {:width 16
     :height 16
     :rangeX [0 1]
     :rangeY [0 1]
     :expr (fn [emit x y _i _j]
             (emit x y 0 1))
     :minFilter "linear"
     :magFilter "linear"}]
   [mb/Interval
    {:width 16
     :range [0 1]
     :expr (fn [emit x _i]
             (emit x 0 0))
     :minFilter "linear"
     :magFilter "linear"}]

   [mb/Compose
    {:color "#fff"
     :opacity 0.333
     :zWrite false}]
   [mb/Area {:width 3 :height 16}]
   [mb/Interval
    {:width 8
     :minFilter "linear"
     :magFilter "linear"
     :expr
     (fn [emit x _i t]
       (let [y (+ 0.5 (* 0.5 (Math/sin (+ x t))))]
         (emit y y y 1)))}]

   [mb/Surface
    {:color 0xffffff
     :points "<<"
     :map "<"
     :zBias -5}]
   [mb/Compose
    {:color "#fff"
     :opacity 0.333
     :zWrite false}]]])
