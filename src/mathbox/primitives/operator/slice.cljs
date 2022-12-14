(ns mathbox.primitives.operator.slice
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Select one or more rows/columns/stacks*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:depth `null` (nullable vec2) - Slice from, to depth (excluding to), e.g. `[2, 4]`
:height `null` (nullable vec2) - Slice from, to height (excluding to), e.g. `[2, 4]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:items `null` (nullable vec2) - Slice from, to items (excluding to), e.g. `[2, 4]`
:source `\"<\"` (select) - Input source
y:width `null` (nullable vec2) - Slice from, to width (excluding to), e.g. `[2, 4]`"}
  Slice
  (r/adapt-react-class box/Slice))
