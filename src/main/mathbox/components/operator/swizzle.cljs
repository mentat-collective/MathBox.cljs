(ns mathbox.components.operator.swizzle
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Swizzle data values*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:order `xyzw` (swizzle) - Swizzle order
:source `\\\"<\\\"` (select) - Input source"}
  Swizzle
  (r/adapt-react-class box/Swizzle))
