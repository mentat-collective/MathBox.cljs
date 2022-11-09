(ns mathbox.components.text.label
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Draw GL labels*

:background `\\\"rgb(255, 255, 255)\\\"` (color) - Outline background
:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:color `\\\"rgb(128, 128, 128)\\\"` (color) - Color
:colors `null` (nullable select) - Colors data source, e.g. `\\\"#colors\\\"`
:depth `0` (number) - Depth scaling
:expand `0` (number) - Expand glyphs
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:offset `[0, -20]` (vec2) - 2D offset
:opacity `1` (positive number) - Opacity
:outline `2` (number) - Outline size
:points `<` (select) - Points data source
:size `16` (number) - Text size
:snap `false` (bool) - Snap to pixel
:text `\\\"<\\\"` (select) - Text source
:visible `true` (bool) - Visibility for rendering
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `true` (bool) - Test Z buffer
:zWrite `true` (bool) - Write Z buffer"}
  Label
  (r/adapt-react-class box/Label))
