(ns mathbox.components.operator.transpose
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Transpose array dimensions*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:order `xyzw` (transpose) - Transpose order
:source `\\\"<\\\"` (select) - Input source"}
  Transpose
  (r/adapt-react-class box/Transpose))
