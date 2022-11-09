(ns mathbox.components.transform.fragment
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply custom fragment shader pass*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:gamma `false` (boolean) - Pass RGBA values in sRGB instead of linear RGB
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"light\\\"` (fragmentPass) - Fragment pass (color, light, rgba)
:shader `\\\"<\\\"` (select) - Shader to use"}
  Fragment
  (r/adapt-react-class box/Fragment))
