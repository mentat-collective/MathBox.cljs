(ns mathbox.components.draw.point
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Draw points*

:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:color `\\\"rgb(128, 128, 128)\\\"` (color) - Color
:colors `null` (nullable select) - Colors data source, e.g. `\\\"#colors\\\"`
:depth `1` (number) - Depth scaling
:fill `true` (bool) - Fill shape
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:opacity `1` (positive number) - Opacity
:optical `true` (bool) - Optical or exact sizing
:points `<` (select) - Points data source
:shape `\\\"circle\\\"` (shape) - Point shape (circle, square, diamond, up, down, left, right)
:size `4` (positive number) - Point size
:sizes `null` (nullable select) - Point sizes data source, e.g. `\\\"#sizes\\\"`
:visible `true` (bool) - Visibility for rendering
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `true` (bool) - Test Z buffer
:zWrite `true` (bool) - Write Z buffer"}
  Point
  (r/adapt-react-class box/Point))
