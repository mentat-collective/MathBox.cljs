^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.test.closed-line
  (:require [mentat.clerk-utils.show :refer [show-sci]]))

;; # Closed Line

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/Mathbox
  {:style {:height "500px" :width "100%"}
   :init {:background-color 0xffffff
          :camera-position [0 0 3]
          :scale 720 :focus 3}}
  [mb/Cartesian
   {:range [[-1 1] [-1 1] [-1 1]]
    :scale [1 1 1]}
   [mb/Array
    {:bufferWidth 20
     :width 12
     :channels 3
     :expr (fn [emit i]
             (let [angle (* 2 Math/PI (/ i 12))]
               (emit (Math/cos angle)
                     0
                     (Math/sin angle))))}]
   [mb/Transform
    {:position [0 1 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:closed true
      :color 0x3090ff
      :width 15
      :join "miter"}]]
   [mb/Transform
    {:position [0 0.8 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:color 0x3090ff
      :width 15
      :join "miter"}]]
   [mb/Transform
    {:position [0 0.1 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:closed true
      :color 0x50bf30
      :width 15
      :join "round"}]]
   [mb/Transform
    {:position [0 -0.1 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:color 0x50bf30
      :width 15
      :join "round"}]]
   [mb/Transform
    {:position [0 -0.8 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:closed true
      :color 0xbf2060
      :width 15
      :join "bevel"}]]
   [mb/Transform
    {:position [0 -1 0]
     :scale [0.5 0.5 0.5]}
    [mb/Line
     {:color 0xbf2060
      :width 15
      :join "bevel"}]]
   [mb/Transform
    {:position [0 1 0]}
    [mb/Line
     {:closed true
      :color 0x3090ff
      :width 15
      :join "miter"
      :start true
      :end true}]]
   [mb/Transform
    {:position [0 0.8 0]}
    [mb/Line
     {:color 0x3090ff
      :width 15
      :join "miter"
      :start true
      :end true}]]
   [mb/Transform
    {:position [0 0.1 0]}
    [mb/Line
     {:closed true
      :color 0x50bf30
      :width 15
      :join "round"
      :start true
      :end true}]]
   [mb/Transform
    {:position [0 -0.1 0]}
    [mb/Line
     {:color 0x50bf30
      :width 15
      :join "round"
      :start true
      :end true}]]
   [mb/Transform
    {:position [0 -0.8 0]}
    [mb/Line
     {:closed true
      :color 0xbf2060
      :width 15
      :join "bevel"
      :start true
      :end true}]]
   [mb/Transform
    {:position [0 -1 0]}
    [mb/Line
     {:color 0xbf2060
      :width 15
      :join "bevel"
      :start true
      :end true}]]]])
