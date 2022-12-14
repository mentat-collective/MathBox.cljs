(ns mathbox.primitives.operator.spread
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Spread data values according to array indices*

:alignDepth `0` (anchor) - Depth alignment
:alignHeight `0` (anchor) - Height alignment
:alignItems `0` (anchor) - Items alignment
:alignWidth `0` (anchor) - Width alignment
:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:depth `null` (nullable vec4) - Depth offset, e.g. `[1.5, 0, 0, 0]`
:height `null` (nullable vec4) - Height offset, e.g. `[1.5, 0, 0, 0]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:items `null` (nullable vec4) - Items offset, e.g. `[1.5, 0, 0, 0]`
:source `\"<\"` (select) - Input source
:unit `\"relative\"` (mapping) - Spread per item (absolute) or array (relative)
:width `null` (nullable vec4) - Width offset, e.g. `[1.5, 0, 0, 0]`"}
  Spread
  (r/adapt-react-class box/Spread))
