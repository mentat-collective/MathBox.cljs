(ns mathbox.primitives.present.present
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Present a tree of slides*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:directed `true` (bool) - Apply directional transitions
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:index `1` (number) - Present slide number
:length `0` (number) - Presentation length (computed)"}
  Present
  (r/adapt-react-class box/Present))
