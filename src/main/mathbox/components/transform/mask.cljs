(ns mathbox.components.transform.mask
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply custom mask pass*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:shader `\\\"<\\\"` (select) - Shader to use"}
  Mask
  (r/adapt-react-class box/Mask))
