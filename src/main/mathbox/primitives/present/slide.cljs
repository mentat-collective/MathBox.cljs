(ns mathbox.primitives.present.slide
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Presentation slide*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:early `0` (number) - Appear early steps
:from `null` (nullable number) - Appear from step, e.g. `2`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:late `0` (number) - Stay late steps
:order `0` (nullable number) - Slide order
:steps `1` (number) - Slide steps
:to `null` (nullable number) - Disappear on step, e.g. `4`"}
  Slide
  (r/adapt-react-class box/Slide))
