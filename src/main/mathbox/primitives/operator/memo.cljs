(ns mathbox.primitives.operator.memo
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Memoize data to an array/texture*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:magFilter `\\\"nearest\\\"` (filter) - Texture magnification filtering
:minFilter `\\\"nearest\\\"` (filter) - Texture minification filtering
:source `\\\"<\\\"` (select) - Input source
:type `\\\"float\\\"` (type) - Texture data type"}
  Memo
  (r/adapt-react-class box/Memo))
