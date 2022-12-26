^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.axis
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Axis

^{:nextjournal.clerk/width :wide}
(show-sci
 (js/console.log (type (new three/Color 0xff4136)))
 (let [colors {:x (new three/Color 0xff4136)
               :y (new three/Color 0x2ecc40)
               :z (new three/Color 0x0074d9)}
       axis (fn [m]
              [mb/Axis
               (merge {:end true
                       :width 5
                       :liveProps
                       ;; TODO ask Chris, what is this doing?? send mathbox
                       ;; example.
                       {:depth
                        (fn [t]
                          (+ 0.5 (* 0.5 (Math/sin (* t 0.5)))))}
                       :color (:y colors)}
                      m)])]
   [mathbox/Mathbox
    {:style {:height "500px" :width "100%"}
     :init {:background-color 0xffffff
            :camera-fov 45
            :camera-position [-0.15 0.15 3.6]
            :scale 720 :focus 1}}
    [mb/Cartesian {:range [[-2 2] [-1 1] [-1 1]]
                   :scale [2 1 1]}
     ;; TODO why is the threejs color object not working? Look in Mathbox, see
     ;; what the deal is.
     [axis {:color (.getHex (:x colors))}]
     [axis {:axis 2 ;; "y" also works
            :color (.getHex (:y colors))}]
     [axis {:axis 3
            :color (.getHex (:z colors))}]
     [mb/Array
      {:id "colors"
       :live false
       :data
       (mapv (fn [color]
               [(.-r color) (.-g color) (.-b color) 1])
             [(:x colors) (:y colors) (:z colors)])}]
     [mb/Array {:channels 3
                :live false
                :data [[2 0 0]
                       [0 1.11 0]
                       [0 0 1]]}]
     [mb/Text {:data ["x" "y" "z"]}]
     [mb/Label {:color 0xffffff
                :colors "#colors"}]]]))
