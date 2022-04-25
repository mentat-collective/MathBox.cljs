(ns mathbox-cljs.stories.dataviz.scatter-stories
  (:require [mathbox-cljs.examples.dataviz.scatter :as scatter]
            [mathbox-cljs.stories.helper :as helper :refer [color]]
            [reagent.core :as r]))

;; docs on how to write these: https://storybook.js.org/docs/react/api/csf
(def ^:export default
  (helper/->default
   {:title "mathbox-cljs/examples/dataviz/Scatter"
    :parameters
    {:component scatter/Scatter
     :componentSubtitle "3D Scatterplot"
     :docs
     {:description
      {:component "
Some description that lives above the rendering.

- Markdown
- works!"}}}

    ;; https://storybook.js.org/docs/react/api/argtypes
    :argTypes
    {:x (color
         {:name ":color :x"
          :description "Color of `x`-axis labels and ticks."
          :default (:x scatter/colors)})
     :y (color
         {:name ":color :y"
          :description "Color of `y`-axis labels and ticks."
          :default (:y scatter/colors)})
     :z (color
         {:name ":color :z"
          :description "Color of `z`-axis labels and ticks."
          :default (:z scatter/colors)})
     :xy (color
          {:name ":color :xy"
           :description "Color of points on `xy` plane."
           :default (:xy scatter/colors)})
     :xz (color
          {:name ":color :xz"
           :description "Color of points on `xz` plane."
           :default (:xz scatter/colors)})
     :yz (color
          {:name ":color :yz"
           :description "Color of points on `yz` plane."
           :default (:yz scatter/colors)})
     :xyz (color
           {:name ":color :xyz"
            :description "Color of 3d points."
            :default (:xyz scatter/colors)})}}))

(js/console.log (pr-str {:x (color
                             {:name ":color :x"
                              :description "Color of `x`-axis labels and ticks."
                              :default (:x scatter/colors)})
                         :y (color
                             {:name ":color :y"
                              :description "Color of `y`-axis labels and ticks."
                              :default (:y scatter/colors)})
                         :z (color
                             {:name ":color :z"
                              :description "Color of `z`-axis labels and ticks."
                              :default (:z scatter/colors)})
                         :xy (color
                              {:name ":color :xy"
                               :description "Color of points on `xy` plane."
                               :default (:xy scatter/colors)})
                         :xz (color
                              {:name ":color :xz"
                               :description "Color of points on `xz` plane."
                               :default (:xz scatter/colors)})
                         :yz (color
                              {:name ":color :yz"
                               :description "Color of points on `yz` plane."
                               :default (:yz scatter/colors)})
                         :xyz (color
                               {:name ":color :xyz"
                                :description "Color of 3d points."
                                :default (:xyz scatter/colors)})}))

(defn ^:export scatter [m]
  (let [colors (helper/->params m)]
    (r/as-element
     [scatter/Scatter
      (assoc scatter/dataset :colors colors)])))
