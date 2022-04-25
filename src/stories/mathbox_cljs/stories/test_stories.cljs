(ns mathbox-cljs.stories.test-stories
  (:require ["@storybook/addon-actions" :refer [action]]
            [mathbox-cljs.examples.dataviz.scatter :as scatter]
            [mathbox-cljs.stories.helper :as helper]
            [reagent.core :as r]))

;; TODO
;;
;; - get argtypes to actually set
;; - get the docs written

;; docs on how to write these: https://storybook.js.org/docs/react/api/csf
(def ^:export default
  (helper/->default
   {:title     "A Scatterplot Component"
    :parameters
    {:component scatter/Scatter
     :componentSubtitle
     "3D Scatterplot"
     :docs
     {:description
      {:component
       "
Some description that lives above the rendering.

- Markdown
- works

"
       :store
       "
Some description that lives...

- Markdown
- works

"}}}

    ;; https://storybook.js.org/docs/react/api/argtypes
    :argTypes
    {:x {:name ":color :x"
         :description "Color of x."
         :defaultValue "#ff4136"
         :control "color"
         :table
         {:type {:summary "STRING"}
          :defaultValue {:summary "HI!"}}}
     :y {:description "face"
         :defaultValue "#ffdc00"
         :control "color"}
     :z {:description "face"
         :defaultValue "#0074d9"
         :control "color"}
     :xy {:description "face"
          :defaultValue "#ff851b"
          :control "color"}
     :xz {:description "face"
          :defaultValue "#b10dc9"
          :control "color"}
     :yz {:description "face"
          :defaultValue "#654321"
          :control "color"}}}))

(defn ^:export scatter [m]
  (let [colors (helper/->params m)]
    (r/as-element
     [scatter/Scatter (assoc scatter/dataset :colors colors)])))
