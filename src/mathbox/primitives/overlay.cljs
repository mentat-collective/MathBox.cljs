(ns mathbox.primitives.overlay
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Dom
  "*HTML DOM injector*

  - `:attributes`: `null` (nullable object) - HTML attributes, e.g. `{\"style\": {\"color\": \"red\"}}`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(255, 255, 255)\"` (color) - Color
  - `:depth`: `0` (number) - Depth scaling
  - `:html`: `\"<\"` (select) - HTML data source
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:offset`: `[0, -20]` (vec2) - 2D offset
  - `:opacity`: `1` (positive number) - Opacity
  - `:outline`: `2` (number) - Outline size
  - `:pointerEvents`: `false` (bool) - Allow pointer events
  - `:points`: `\"<\"` (select) - Points data source
  - `:size`: `16` (number) - Text size
  - `:snap`: `false` (bool) - Snap to pixel
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zoom`: `1` (number) - HTML zoom")

(defprim box/Html
  "*HTML element source*

  - `:aligned`: `false` (bool) - Use (fast) integer lookups
  - `:bufferDepth`: `1` (number) - Voxel buffer depth
  - `:bufferHeight`: `1` (number) - Voxel buffer height
  - `:bufferWidth`: `1` (number) - Voxel buffer width
  - `:channels`: `4` (number) - Number of channels
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `null` (nullable object) - Data array
  - `:depth`: `1` (nullable number) - Voxel depth
  - `:expr`: `null` (nullable emitter) - Data emitter expression
  - `:fps`: `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  - `:height`: `1` (nullable number) - Voxel height
  - `:hurry`: `5` (number) - Maximum frames to hurry per frame
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `4` (number) - Number of items
  - `:limit`: `60` (number) - Maximum frames to track
  - `:live`: `true` (bool) - Update continuously
  - `:observe`: `false` (bool) - Pass clock time to data
  - `:realtime`: `false` (bool) - Run on real time, not clock time
  - `:width`: `1` (nullable number) - Voxel width")
