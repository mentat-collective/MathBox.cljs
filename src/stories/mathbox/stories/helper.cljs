(ns mathbox.stories.helper
  (:require [reagent.core :as reagent]))

(defn ->params [^js args]
  (js->clj args :keywordize-keys true))

(defn ->reactified [options path]
  (if (get-in options path)
    (update-in options path reagent/reactify-component)
    options))

(defn ->default [options]
  (-> options
      (->reactified [:component])
      (->reactified [:parameters :docs :page])
      clj->js))

(defn color [{:keys [name description default]}]
  {:name name
   :description description
   :default "cake"
   :defaultValue default
   :control "color"
   :table {:type {:summary "string"
                  :detail "Any argument to THREE.Color: https://threejs.org/docs/#api/en/math/Color"}
           :defaultValue {:summary default}}})
