(ns mathbox.primitives.text
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Format
  "*Text formatter*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable array) - Array of labels, e.g. `[\"Grumpy\", \"Sleepy\", \"Sneezy\"]`
  - `:detail`: `24` (number) - Font detail
  - `:digits`: `null` (nullable positive number) - Digits of precision, e.g. `2`
  - `:expr`: `null` (nullable function) - Label formatter expression, e.g. `function (x, y, z, w, i, j, k, l, time, delta) { ... }`
  - `:font`: `\"sans-serif\"` (font) - Font family
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"linear\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"linear\"` (filter) - Texture minification filtering
  - `:sdf`: `5` (number) - Signed distance field range
  - `:source`: `\"<\"` (select) - Input source
  - `:style`: `\"\"` (string) - Font style, e.g. `\"italic\"`
  - `:type`: `\"float\"` (type) - Texture data type
  - `:variant`: `\"\"` (string) - Font variant, e.g. `\"small-caps\"`
  - `:weight`: `\"\"` (string) - Font weight, e.g. `\"bold\"`")

(defprim box/Label
  "*Draw GL labels*

  - `:background`: `\"rgb(255, 255, 255)\"` (color) - Outline background
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `0` (number) - Depth scaling
  - `:expand`: `0` (number) - Expand glyphs
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:offset`: `[0, -20]` (vec2) - 2D offset
  - `:opacity`: `1` (positive number) - Opacity
  - `:outline`: `2` (number) - Outline size
  - `:points`: `<` (select) - Points data source
  - `:size`: `16` (number) - Text size
  - `:snap`: `false` (bool) - Snap to pixel
  - `:text`: `\"<\"` (select) - Text source
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer")

(defprim box/Retext
  "*Text atlas resampler*

  - `:centeredW`: `false` (bool) - Centered instead of corner sampling
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:channels`: `4` (number) - Resample channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable number) - Resample factor depth, e.g. `10`
  - `:height`: `null` (nullable number) - Resample factor height, e.g. `10`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:indices`: `4` (number) - Resample indices
  - `:items`: `null` (nullable number) - Resample factor items, e.g. `10`
  - `:paddingW`: `0` (number) - Number of samples padding
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:sample`: `\"relative\"` (mapping) - Source sampling (relative, absolute)
  - `:shader`: `\"<\"` (select) - Shader to use
  - `:size`: `\"absolute\"` (mapping) - Scaling mode (relative, absolute)
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable number) - Resample factor width, e.g. `10`")

(defprim box/Text
  "*GL text source*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:detail`: `24` (number) - Font detail
  - `:expr`: `null` (nullable emitter) - Data emitter expression
  - `:font`: `\"sans-serif\"` (font) - Font family
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:magFilter`: `\"linear\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"linear\"` (filter) - Texture minification filtering
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:sdf`: `5` (number) - Signed distance field range
  - `:style`: `\"\"` (string) - Font style, e.g. `\"italic\"`
  - `:type`: `\"float\"` (type) - Texture data type
  - `:variant`: `\"\"` (string) - Font variant, e.g. `\"small-caps\"`
  - `:weight`: `\"\"` (string) - Font weight, e.g. `\"bold\"`
  - `:width`: `1` (nullable number) - Voxel width")
