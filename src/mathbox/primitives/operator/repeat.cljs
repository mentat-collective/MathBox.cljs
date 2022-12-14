(ns mathbox.primitives.operator.repeat
  (:refer-clojure :exclude [Repeat])
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Repeat data in one or more dimensions*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:depth `1` (number) - Repeat depth
:height `1` (number) - Repeat height
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:items `1` (number) - Repeat items
:source `\"<\"` (select) - Input source
:width `1` (number) - Repeat width"}
  Repeat
  (r/adapt-react-class box/Repeat))
