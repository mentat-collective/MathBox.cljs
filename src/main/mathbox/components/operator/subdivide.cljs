(ns mathbox.components.operator.subdivide
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Subdivide data points evenly or with a bevel*

:bevel `1` (number) - Fraction to end outward from vertices
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable positive int) - Divisions of depth, e.g. `5`
:height `null` (nullable positive int) - Divisions of height, e.g. `5`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `null` (nullable positive int) - Divisions of items, e.g. `5`
:lerp `true` (boolean) - Interpolate values with computed indices
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable positive int) - Divisions of width, e.g. `5`"}
  Subdivide
  (r/adapt-react-class box/Subdivide))
