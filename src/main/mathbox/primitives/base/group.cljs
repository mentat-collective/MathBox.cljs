(ns mathbox.primitives.base.group
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Group elements for visibility and activity*

:active `true` (bool) - Updates continuously
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:visible `true` (bool) - Visibility for rendering"}
  Group
  (r/adapt-react-class box/Group))
