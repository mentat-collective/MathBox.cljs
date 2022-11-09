(ns mathbox.components.operator.split
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Split one array dimension into two by splitting rows/columns/etc*

:axis `null` (nullable axis) - Axis to split, e.g. `x`
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:length `1` (number) - Tuple length
:order `\\\"wxyz\\\"` (transpose) - Axis order
:overlap `1` (number) - Tuple overlap
:source `\\\"<\\\"` (select) - Input source"}
  Split
  (r/adapt-react-class box/Split))
