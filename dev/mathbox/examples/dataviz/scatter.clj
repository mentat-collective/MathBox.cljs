^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.dataviz.scatter
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Iris Data

^{:nextjournal.clerk/visibility {:code :fold}}
(show-sci
 (def ^{:doc "http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"}
   iris-data
   [[5.1 3.5 1.4 0.2]
    [4.9 3.0 1.4 0.2]
    [4.7 3.2 1.3 0.2]
    [4.6 3.1 1.5 0.2]
    [5.0 3.6 1.4 0.2]
    [5.4 3.9 1.7 0.4]
    [4.6 3.4 1.4 0.3]
    [5.0 3.4 1.5 0.2]
    [4.4 2.9 1.4 0.2]
    [4.9 3.1 1.5 0.1]
    [5.4 3.7 1.5 0.2]
    [4.8 3.4 1.6 0.2]
    [4.8 3.0 1.4 0.1]
    [4.3 3.0 1.1 0.1]
    [5.8 4.0 1.2 0.2]
    [5.7 4.4 1.5 0.4]
    [5.4 3.9 1.3 0.4]
    [5.1 3.5 1.4 0.3]
    [5.7 3.8 1.7 0.3]
    [5.1 3.8 1.5 0.3]
    [5.4 3.4 1.7 0.2]
    [5.1 3.7 1.5 0.4]
    [4.6 3.6 1.0 0.2]
    [5.1 3.3 1.7 0.5]
    [4.8 3.4 1.9 0.2]
    [5.0 3.0 1.6 0.2]
    [5.0 3.4 1.6 0.4]
    [5.2 3.5 1.5 0.2]
    [5.2 3.4 1.4 0.2]
    [4.7 3.2 1.6 0.2]
    [4.8 3.1 1.6 0.2]
    [5.4 3.4 1.5 0.4]
    [5.2 4.1 1.5 0.1]
    [5.5 4.2 1.4 0.2]
    [4.9 3.1 1.5 0.1]
    [5.0 3.2 1.2 0.2]
    [5.5 3.5 1.3 0.2]
    [4.9 3.1 1.5 0.1]
    [4.4 3.0 1.3 0.2]
    [5.1 3.4 1.5 0.2]
    [5.0 3.5 1.3 0.3]
    [4.5 2.3 1.3 0.3]
    [4.4 3.2 1.3 0.2]
    [5.0 3.5 1.6 0.6]
    [5.1 3.8 1.9 0.4]
    [4.8 3.0 1.4 0.3]
    [5.1 3.8 1.6 0.2]
    [4.6 3.2 1.4 0.2]
    [5.3 3.7 1.5 0.2]
    [5.0 3.3 1.4 0.2]
    [7.0 3.2 4.7 1.4]
    [6.4 3.2 4.5 1.5]
    [6.9 3.1 4.9 1.5]
    [5.5 2.3 4.0 1.3]
    [6.5 2.8 4.6 1.5]
    [5.7 2.8 4.5 1.3]
    [6.3 3.3 4.7 1.6]
    [4.9 2.4 3.3 1.0]
    [6.6 2.9 4.6 1.3]
    [5.2 2.7 3.9 1.4]
    [5.0 2.0 3.5 1.0]
    [5.9 3.0 4.2 1.5]
    [6.0 2.2 4.0 1.0]
    [6.1 2.9 4.7 1.4]
    [5.6 2.9 3.6 1.3]
    [6.7 3.1 4.4 1.4]
    [5.6 3.0 4.5 1.5]
    [5.8 2.7 4.1 1.0]
    [6.2 2.2 4.5 1.5]
    [5.6 2.5 3.9 1.1]
    [5.9 3.2 4.8 1.8]
    [6.1 2.8 4.0 1.3]
    [6.3 2.5 4.9 1.5]
    [6.1 2.8 4.7 1.2]
    [6.4 2.9 4.3 1.3]
    [6.6 3.0 4.4 1.4]
    [6.8 2.8 4.8 1.4]
    [6.7 3.0 5.0 1.7]
    [6.0 2.9 4.5 1.5]
    [5.7 2.6 3.5 1.0]
    [5.5 2.4 3.8 1.1]
    [5.5 2.4 3.7 1.0]
    [5.8 2.7 3.9 1.2]
    [6.0 2.7 5.1 1.6]
    [5.4 3.0 4.5 1.5]
    [6.0 3.4 4.5 1.6]
    [6.7 3.1 4.7 1.5]
    [6.3 2.3 4.4 1.3]
    [5.6 3.0 4.1 1.3]
    [5.5 2.5 4.0 1.3]
    [5.5 2.6 4.4 1.2]
    [6.1 3.0 4.6 1.4]
    [5.8 2.6 4.0 1.2]
    [5.0 2.3 3.3 1.0]
    [5.6 2.7 4.2 1.3]
    [5.7 3.0 4.2 1.2]
    [5.7 2.9 4.2 1.3]
    [6.2 2.9 4.3 1.3]
    [5.1 2.5 3.0 1.1]
    [5.7 2.8 4.1 1.3]
    [6.3 3.3 6.0 2.5]
    [5.8 2.7 5.1 1.9]
    [7.1 3.0 5.9 2.1]
    [6.3 2.9 5.6 1.8]
    [6.5 3.0 5.8 2.2]
    [7.6 3.0 6.6 2.1]
    [4.9 2.5 4.5 1.7]
    [7.3 2.9 6.3 1.8]
    [6.7 2.5 5.8 1.8]
    [7.2 3.6 6.1 2.5]
    [6.5 3.2 5.1 2.0]
    [6.4 2.7 5.3 1.9]
    [6.8 3.0 5.5 2.1]
    [5.7 2.5 5.0 2.0]
    [5.8 2.8 5.1 2.4]
    [6.4 3.2 5.3 2.3]
    [6.5 3.0 5.5 1.8]
    [7.7 3.8 6.7 2.2]
    [7.7 2.6 6.9 2.3]
    [6.0 2.2 5.0 1.5]
    [6.9 3.2 5.7 2.3]
    [5.6 2.8 4.9 2.0]
    [7.7 2.8 6.7 2.0]
    [6.3 2.7 4.9 1.8]
    [6.7 3.3 5.7 2.1]
    [7.2 3.2 6.0 1.8]
    [6.2 2.8 4.8 1.8]
    [6.1 3.0 4.9 1.8]
    [6.4 2.8 5.6 2.1]
    [7.2 3.0 5.8 1.6]
    [7.4 2.8 6.1 1.9]
    [7.9 3.8 6.4 2.0]
    [6.4 2.8 5.6 2.2]
    [6.3 2.8 5.1 1.5]
    [6.1 2.6 5.6 1.4]
    [7.7 3.0 6.1 2.3]
    [6.3 3.4 5.6 2.4]
    [6.4 3.1 5.5 1.8]
    [6.0 3.0 4.8 1.8]
    [6.9 3.1 5.4 2.1]
    [6.7 3.1 5.6 2.4]
    [6.9 3.1 5.1 2.3]
    [5.8 2.7 5.1 1.9]
    [6.8 3.2 5.9 2.3]
    [6.7 3.3 5.7 2.5]
    [6.7 3.0 5.2 2.3]
    [6.3 2.5 5.0 1.9]
    [6.5 3.0 5.2 2.0]
    [6.2 3.4 5.4 2.3]
    [5.9 3.0 5.1 1.8]]))

^{:nextjournal.clerk/visibility {:code :fold}}
(show-sci
 (defn interpolate [lo hi n]
   (let [n      (dec n)
         spread (- hi lo)]
     (mapv (fn [i]
             (/ (Math/round
                 (* 10 (+ lo (* spread (/ i n))))) 10))
           (range (inc n)))))

 (defn Cartesian [opts & children]
   (let [opts (update opts :range
                      (fn [{:keys [x y z]}]
                        [(or x [0 1])
                         (or y [0 1])
                         (or z [0 1])]))]
     (into [mb/Cartesian opts] children)))

 (defn Scatter [{:keys [data maxes mins ranges scaled-mins colors]}]
   [mathbox/MathBox
    {:container {:style {:height "500px"}}
     :renderer  {:background-color 0xfafaf8}
     :controls  {:max-distance 5}}
    [mb/Camera {:proxy true :position [2.3 1 2]}]
    [Cartesian {:range {:x [0 2] :y [0 1] :z [0 1]}
                :scale [2 1 1]}
     ;; x axis
     [mb/Scale {:divide 5
                :origin [0 0 1 0]
                :axis "x"}]
     [mb/Text {:live false
               :data (interpolate
                      (nth mins 0)
                      (nth maxes 0)
                      5)}]
     [mb/Label {:color (:x colors)}]

     ;; y axis
     [mb/Scale {:divide 3
                :origin [0 0 1 0]
                :axis "y"}]
     [mb/Text {:live false
               :data (interpolate
                      (nth mins 1)
                      (nth maxes 1)
                      3)}]
     [mb/Label {:color (:y colors)
                :offset [-16 0]}]

     ;; z axis
     [mb/Scale {:divide 3
                :origin [2 0 0 0]
                :axis "z"}]
     [mb/Text {:live false
               :data (interpolate
                      (nth mins 2)
                      (nth maxes 2)
                      3)}]
     [mb/Label {:color (:z colors)
                :offset [16 0]}]

     ;; planes
     [mb/Grid {:axes "xy" :divideX 3 :divideY 3}]
     [mb/Grid {:axes "xz" :divideX 3 :divideY 3}]
     [mb/Grid {:axes "yz" :divideX 3 :divideY 3}]

     ;; data
     [mb/Array {:items 1
                :channels 4
                :live false
                :id "data"
                :data data}]
     [mb/Swizzle {:order "xyz"}]
     [mb/Transform
      {:scale (into [] (map-indexed
                        (fn [i d]
                          (if (zero? i)
                            (/ 2 d)
                            (/ 1 d))))
                    (take 3 ranges))
       :position (into [] (map-indexed
                           (fn [i d]
                             (if (zero? i)
                               (* -2 d)
                               (- d))))
                       (take 3 scaled-mins))}
      [mb/Point {:color (:xyz colors) :size 12}]

      ;; these three are the points flattened against the planes.
      [mb/Transform {:scale [1 1 0]
                     :position [0 0 (nth mins 2)]}
       [mb/Point {:color (:xy colors)
                  :size 7}]]

      [mb/Transform {:scale [1 0 1]
                     :position [0 (nth mins 1) 0]}
       [mb/Point {:color (:xz colors)
                  :size 7}]]

      [mb/Transform {:scale [0 1 1]
                     :position [(nth mins 0) 0 0]}
       [mb/Point {:color (:yz colors)
                  :size 7}]]

      ;; Then we have the ticks.
      [mb/Transform
       {:position [0
                   (nth maxes 1)
                   (nth mins 2)]

        :scale [1 0.001 0]}
       [mb/Repeat {:items 2}]
       [mb/Spread {:unit "absolute"
                   :alignItems "first"
                   :items [0 100 0 0]}]
       [mb/Vector {:color (:x colors)}]]

      ;; Y
      [mb/Transform
       {:position [(nth maxes 0)
                   0
                   (nth mins 2)]
        :scale [0.001 1 0]}
       [mb/Repeat {:items 2}]
       [mb/Spread {:unit "absolute"
                   :alignItems "first"
                   :items [100 0 0 0]}]
       [mb/Vector {:color (:y colors)}]]

      ;; Z
      [mb/Transform
       ;; min x, max y
       {:position [(nth mins 0)
                   (nth maxes 1)
                   0]
        :scale [0 0.001 1]}
       [mb/Repeat {:items 2}]
       [mb/Spread {:unit "absolute"
                   :alignItems "first"
                   :items [0 100 0 0]}]
       [mb/Vector {:color (:z colors)}]]
      ]]])

 (def colors
   {:x "#ff4136" ;; red
    :y "#ffdc00" ;; yellow
    :z "#0074d9" ;; blue
    :xy "#ff851b" ;; orange
    :xz "#b10dc9" ;; purple
    :yz "#2ecc40" ;; green
    :xyz "#654321" ;; brown
    })

 (def dataset
   (let [data iris-data
         maxes  (reduce (partial mapv max) data)
         mins   (reduce (partial mapv min) data)
         ranges (map - maxes mins)]
     (assoc {:data data}
            :maxes maxes
            :mins mins
            :ranges ranges
            :scaled-mins
            (map / mins ranges)
            :colors colors))))

^{:nextjournal.clerk/width :wide}
(show-sci
 [Scatter
  (assoc dataset :colors colors)])
