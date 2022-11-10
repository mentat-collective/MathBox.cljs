(ns mathbox.primitives.rtt.compose
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Full-screen render pass*

:alpha `false` (bool) - Compose with alpha transparency
:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:color `\\\"white\\\"` (color) - Color
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:opacity `1` (positive number) - Opacity
:source `\\\"<\\\"` (select) - Input source
:visible `true` (bool) - Visibility for rendering
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `false` (bool) - Test Z buffer
:zWrite `false` (bool) - Write Z buffer"}
  Compose
  (r/adapt-react-class box/Compose))
