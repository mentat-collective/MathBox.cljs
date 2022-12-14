(ns mathbox.primitives.operator.clamp
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Clamp out-of-bounds samples to the nearest data point*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:source `\"<\"` (select) - Input source"}
  Clamp
  (r/adapt-react-class box/Clamp))
