(ns mathbox.primitives.data
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Area
  "*2D sampled matrix*

  :false `aligned` (bool) - Use (fast) integer lookups
  :axes `[1, 2]` (swizzle(2) axis) - Axis pair
  :bufferHeight `1` (number) - Matrix buffer height
  :bufferWidth `1` (number) - Matrix buffer width
  :centeredX `false` (bool) - Centered instead of corner sampling
  :centeredY `false` (bool) - Centered instead of corner sampling
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, i, j, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :height `1` (nullable number) - Matrix height
  :history `1` (number) - Matrix history
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :paddingX `0` (number) - Number of samples padding
  :paddingY `0` (number) - Number of samples padding
  :rangeX `[-1, 1]` (vec2) - Range on axis
  :rangeY `[-1, 1]` (vec2) - Range on axis
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Matrix width")

(defprim box/Array
  "*1D array*

  :aligned `false` (bool) - Use (fast) integer lookups
  :bufferWidth `1` (number) - Array buffer width
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :history `1` (number) - Array history
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Array width")

(defprim box/Interval
  "*1D sampled array*

  :aligned `false` (bool) - Use (fast) integer lookups
  :axis `1` (axis) - Axis
  :bufferWidth `1` (number) - Array buffer width
  :centered `false` (bool) - Centered instead of corner sampling
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, i, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :history `1` (number) - Array history
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :padding `0` (number) - Number of samples padding
  :range `[-1, 1]` (vec2) - Range on axis
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Array width")

(defprim box/Matrix
  "*2D matrix*

  :aligned `false` (bool) - Use (fast) integer lookups
  :bufferHeight `1` (number) - Matrix buffer height
  :bufferWidth `1` (number) - Matrix buffer width
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :height `1` (nullable number) - Matrix height
  :history `1` (number) - Matrix history
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Matrix width")

(defprim box/Scale
  "*Human-friendly divisions on an axis, subdivided as needed*

  :axis `1` (axis) - Axis
  :base `10` (number) - Power base for sub/super units
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :divide `10` (number) - Number of divisions
  :end `true` (bool) - Include end
  :factor `1` (positive number) - Scale factor
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :mode `\"linear\"` (scale) - Scale type
  :nice `true` (bool) - Snap to nice numbers
  :origin `[0, 0, 0, 0]` (vec4) - 4D Origin
  :range `[-1, 1]` (vec2) - Range on axis
  :start `true` (bool) - Include start
  :unit `1` (number) - Reference unit
  :zero `true` (bool) - Include zero")

(defprim box/Volume
  "*3D sampled voxels*

  :aligned `false` (bool) - Use (fast) integer lookups
  :axes `[1, 2, 3]` (swizzle(3) axis) - Axis triplet
  :bufferDepth `1` (number) - Voxel buffer depth
  :bufferHeight `1` (number) - Voxel buffer height
  :bufferWidth `1` (number) - Voxel buffer width
  :centeredX `false` (bool) - Centered instead of corner sampling
  :centeredY `false` (bool) - Centered instead of corner sampling
  :centeredZ `false` (bool) - Centered instead of corner sampling
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :depth `1` (nullable number) - Voxel depth
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, z, i, j, k, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :height `1` (nullable number) - Voxel height
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :paddingX `0` (number) - Number of samples padding
  :paddingY `0` (number) - Number of samples padding
  :paddingZ `0` (number) - Number of samples padding
  :rangeX `[-1, 1]` (vec2) - Range on axis
  :rangeY `[-1, 1]` (vec2) - Range on axis
  :rangeZ `[-1, 1]` (vec2) - Range on axis
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Voxel width")

(defprim box/Voxel
  "*3D voxels*

  :aligned `false` (bool) - Use (fast) integer lookups
  :bufferDepth `1` (number) - Voxel buffer depth
  :bufferHeight `1` (number) - Voxel buffer height
  :bufferWidth `1` (number) - Voxel buffer width
  :channels `4` (number) - Number of channels
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :data `null` (nullable object) - Data array
  :depth `1` (nullable number) - Voxel depth
  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, k, time, delta) { ... }`
  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
  :height `1` (nullable number) - Voxel height
  :hurry `5` (number) - Maximum frames to hurry per frame
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :items `4` (number) - Number of items
  :limit `60` (number) - Maximum frames to track
  :live `true` (bool) - Update continuously
  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
  :minFilter `\"nearest\"` (filter) - Texture minification filtering
  :observe `false` (bool) - Pass clock time to data
  :realtime `false` (bool) - Run on real time, not clock time
  :type `\"float\"` (type) - Texture data type
  :width `1` (nullable number) - Voxel width")
