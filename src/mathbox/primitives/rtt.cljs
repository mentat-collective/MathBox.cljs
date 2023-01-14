(ns mathbox.primitives.rtt
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Compose
  "*Full-screen render pass*

  :alpha `false` (bool) - Compose with alpha transparency
  :blending `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :color `\"white\"` (color) - Color
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :opacity `1` (positive number) - Opacity
  :source `\"<\"` (select) - Input source
  :visible `true` (bool) - Visibility for rendering
  :zBias `0` (positive number) - Z-Bias (3D stacking)
  :zIndex `0` (positive int) - Z-Index (2D stacking)
  :zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  :zTest `false` (bool) - Test Z buffer
  :zWrite `false` (bool) - Write Z buffer")

(defprim box/Rtt
  "*Render objects to a texture*

  :camera `\"[camera]\"` (select) - Active camera
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :height `null` (nullable number) - RTT height, e.g. `360`
  :history `1` (number) - RTT history
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :magFilter `\"linear\"` (filter) - Texture magnification filtering
  :minFilter `\"linear\"` (filter) - Texture minification filtering
  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  :speed `1` (number) - Global speed
  :type `\"unsignedByte\"` (type) - Texture data type
  :width `null` (nullable number) - RTT width, e.g. `640`")
