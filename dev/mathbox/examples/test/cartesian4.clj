^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.cartesian4
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Cartesian4

;; https://andrewharvey4.wordpress.com/2008/09/29/xyzw-in-opengldirect3d-homogeneous-coordinates/
;;
;; homogeneous coordinates https://www.tomdalling.com/blog/modern-opengl/explaining-homogenous-coordinates-and-projective-geometry/

^{:nextjournal.clerk/width :wide}
(show-sci
 (letfn [(expr [emit x y _i _j time]
           (let [theta
                 (* (/ Math/PI 2)
                    (+ (Math/cos
                        (+ (* 0.31 time)
                           (Math/cos (- (* 0.481 time)
                                        (Math/sin (* 0.318 time))))
                           (Math/sin (* 1.179 time))))
                       (Math/cos
                        (+ (* 0.61 time)
                           (Math/sin (- (* 0.305 time)
                                        (Math/cos (* 0.573 time))))
                           (Math/cos (* 0.962 time))))))
                 phi
                 (+ time (Math/sin
                          (- (* 0.51 time)
                             (+ (Math/cos (+ (* 0.527 time)
                                             (Math/sin (* 0.113 time))))
                                (Math/sin (* 1.224 time))))))
                 zeta1 (+ phi (/ y 2))
                 zeta2 x
                 nu    theta
                 sum   (+ zeta1 zeta2)
                 diff  (- zeta1 zeta2)
                 s     (Math/sin nu)
                 c     (Math/cos nu)
                 x     (* s (Math/cos sum))
                 y     (* s (Math/sin sum))
                 z     (* c (Math/cos diff))
                 w     (* c (Math/sin diff))]

             (emit x y z w)))]
   [mathbox/MathBox
    {:container {:style {:height "500px" :width "100%"}}
     :renderer  {:background-color 0xffffff}}
    [mb/Camera {:proxy true
                :position [2.3 1 2]}]
    [mb/Transform4
     ;; I think this will translate?
     {:matrix
      [1 0 0 0.577
       0 1 0 0.577
       0 0 1 0.577
       0 0 0 1]}
     [mb/Cartesian4
      {:range [[-1 1] [-1 1] [-1 1] [-1 1]]
       :scale [1 1 1 1]}
      [mb/Axis {:axis 1}]
      [mb/Grid {:axes [1 3] :width 4}]
      [mb/Axis {:axis 2}]
      [mb/Axis {:axis 3}]
      [mb/Axis {:axis 4}]
      [mb/Area
       {:rangeX [(- Math/PI) Math/PI]
        :rangeY [-1 1]
        :width 32
        :height 8
        :channels 4
        :expr expr}]
      [mb/Line {:color 0x3080ff :width 10}]
      [mb/Area
       {:rangeX [(- Math/PI) Math/PI]
        :rangeY [-1 1]
        :width 96
        :height 8
        :channels 4
        ;; TO show that these are the same.
        :expr (fn [emit x y i j time]
                (expr (fn [x y z w]
                        (let [s  0.577
                              ws (* w s)]
                          (emit (+ x ws)
                                (+ y ws)
                                (+ z ws)
                                0)))
                      x y i j time))}]
      [mb/Point {:color 0xc02050 :size 20}]]]]))
