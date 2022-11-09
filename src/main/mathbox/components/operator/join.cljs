(ns mathbox.components.operator.join
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Join two array dimensions into one by concatenating rows/columns/stacks*

:axis `null` (nullable axis) - Axis to join, e.g. `x`
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:order `\\\"wxyz\\\"` (transpose) - Axis order
:overlap `1` (number) - Tuple overlap
:source `\\\"<\\\"` (select) - Input source"}
  Join
  (r/adapt-react-class box/Join))
