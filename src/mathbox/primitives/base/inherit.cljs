(ns mathbox.primitives.base.inherit
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Inherit and inject a trait from another element*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`"}
  Inherit
  (r/adapt-react-class box/Inherit))
