(ns mathbox.primitives.operator.grow
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Scale data relative to reference data point*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable anchor) - Depth alignment
:height `null` (nullable anchor) - Height alignment
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `null` (nullable anchor) - Items alignment
:scale `1` (number) - Scale factor
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable anchor) - Width alignment"}
  Grow
  (r/adapt-react-class box/Grow))
