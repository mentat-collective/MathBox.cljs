^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.face
  (:require
   #?@(:cljs [[mathbox.core :as mathbox]
              [mathbox.primitives :as mb]
              [reagent.core :as reagent]])
   [mentat.clerk-utils.show :refer [show-cljs]]))

^{:nextjournal.clerk/width :wide}
(show-cljs
 (defn Face []
   (reagent/with-let
     [!state (reagent/atom
              {:time 0
               :fade 0})]
     [mathbox/MathBox
      {:container {:style {:height "400px" :width "100%"}}
       :renderer  {:background-color 0x000000}
       :scale 720
       :focus 1
       :on {:update
            (fn [_ three]
              (let [clock (.. three -Time -clock)
                    t (/ (Math/max clock 0) 2)
                    t (if (< t 0.5)
                        (* t t)
                        (- t 0.25))
                    o (- 0.5 (* 0.5 (Math/cos (* (Math/min 1 t) Math/PI))))
                    f (/ t 8)]
                (swap! !state assoc
                       :time clock
                       :fade o
                       :cos-f (Math/cos f)
                       :-sin-f (- (Math/sin f)))
                ))}}
      [mb/Camera
       {:position [2.5 1 -1.3]
        :proxy true}]
      [mb/Cartesian (let [{:keys [cos-f -sin-f]} @!state]
                      {:range [[-1 1] [0 1] [-1 1]]
                       :quaternion [0 -sin-f 0 cos-f] })
       [mb/Grid
        {:width 5 :opacity 0.5 :axes [1 3] :blending "add"}]
       [mb/Area
        {:width 101 :height 101 :axes [1 3]
         :items 4 :channels 3
         :expr
         (fn [emit x z i j]
           (let [{:keys [time fade]} (.-state !state)
                 a (* (Math/sin (+ (- (* i 31.718) time)
                                   (Math/cos (+ (* j 12.11) (* i i) time))))
                      (Math/sin (+ (* j 21.131) time))
                      fade
                      0.02)

                 b (* (Math/sin (+ (* j 27.41) time (Math/cos (+ (* i 7.68) (* j j) time))))
                      (Math/sin (+ (* j 11.91) (* 5 (Math/cos (* i 4.1))) time))
                      fade
                      0.02)

                 c (* (Math/sin (+ (* i 15.33) time))
                      (Math/cos (+ (* j 14.91) (* 2 (Math/cos (* i 3.4))) (* time 0.71)))
                      fade
                      0.02)

                 d (* (Math/sin (+ (* x 1.33) time))
                      (Math/cos (+ (* z 1.91) (* 2 (Math/cos (* x 0.4))) (* time 0.71)))
                      fade)

                 e (* (Math/sin (+ (* x 2.42) time))
                      (Math/cos (+ (- (* z 2.36) (* 1.57 (Math/cos (* x 0.63)))) (* time 0.81)))
                      fade)

                 y  (+ 0.5 a b c (* 0.2 (+ (* d e) d e)))

                 fade2 (* fade fade)
                 a (* a fade2)
                 b (* b fade2)
                 c (* c fade2)]
             (emit x y z)
             (emit x (+ y c) (+ z (/ 1 50)))
             (emit (+ x (/ 1 50)) (+ y b) (+ z (/ 1 50)))
             (emit (+ x (/ 1 50)) (+ y a) z)))}]
       [mb/Face
        {:color 0xa0b7ff
         :shaded true}]
       [mb/Point
        {:size 5
         :color 0xb0c7ff
         :zBias 2}]]]))

 [Face])
