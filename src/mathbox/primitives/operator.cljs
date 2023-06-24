(ns mathbox.primitives.operator
  (:refer-clojure :exclude [Repeat])
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def Clamp
  "*Clamp out-of-bounds samples to the nearest data point*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:source`: `\"<\"` (select) - Input source"
  (r/adapt-react-class box/Clamp))

(def Grow
  "*Scale data relative to reference data point*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable anchor) - Depth alignment
  - `:height`: `null` (nullable anchor) - Height alignment
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable anchor) - Items alignment
  - `:scale`: `1` (number) - Scale factor
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable anchor) - Width alignment"
  (r/adapt-react-class box/Grow))

(def Join
  "*Join two array dimensions into one by concatenating rows/columns/stacks*

  - `:axis`: `null` (nullable axis) - Axis to join, e.g. `x`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `\"wxyz\"` (transpose) - Axis order
  - `:overlap`: `1` (number) - Tuple overlap
  - `:source`: `\"<\"` (select) - Input source"
  (r/adapt-react-class box/Join))

(def Lerp
  "*Linear interpolation of data*

  - `:centeredW`: `false` (bool) - Centered instead of corner sampling
  - `:centeredX`: `false` (bool) - Centered instead of corner sampling
  - `:centeredY`: `false` (bool) - Centered instead of corner sampling
  - `:centeredZ`: `false` (bool) - Centered instead of corner sampling
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable number) - Lerp to depth, e.g. `5`
  - `:height`: `null` (nullable number) - Lerp to height, e.g. `5`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable number) - Lerp to items, e.g. `5`
  - `:paddingW`: `0` (number) - Number of samples padding
  - `:paddingX`: `0` (number) - Number of samples padding
  - `:paddingY`: `0` (number) - Number of samples padding
  - `:paddingZ`: `0` (number) - Number of samples padding
  - `:size`: `\"absolute\"` (mapping) - Scaling mode (relative, absolute)
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable number) - Lerp to width, e.g. `5`"
  (r/adapt-react-class box/Lerp))

(def Memo
  "*Memoize data to an array/texture*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:magFilter`: `\"nearest\"` (filter) - Texture magnification filtering
  - `:minFilter`: `\"nearest\"` (filter) - Texture minification filtering
  - `:source`: `\"<\"` (select) - Input source
  - `:type`: `\"float\"` (type) - Texture data type"
  (r/adapt-react-class box/Memo))

(def Readback
  "*Read data back to a binary JavaScript array*

  - `:active`: `true` (bool) - Updates continuously
  - `:channels`: `4` (number) - Readback channels (read only)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:data`: `[]` (data) - Readback data buffer (read only)
  - `:depth`: `1` (nullable number) - Readback depth (read only)
  - `:expr`: `null` (nullable function) - Readback consume expression, e.g. `function (x, y, z, w, i, j, k, l) { ... }`
  - `:height`: `1` (nullable number) - Readback height (read only)
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `1` (nullable number) - Readback items (read only)
  - `:source`: `\"<\"` (select) - Input source
  - `:type`: `\"float\"` (float) - Readback data type (float, unsignedByte)
  - `:width`: `1` (nullable number) - Readback width (read only)"
  (r/adapt-react-class box/Readback))

(def Repeat
  "*Repeat data in one or more dimensions*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `1` (number) - Repeat depth
  - `:height`: `1` (number) - Repeat height
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `1` (number) - Repeat items
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `1` (number) - Repeat width"
  (r/adapt-react-class box/Repeat))

(def Resample
  "*Resample data to new dimensions with a shader*

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
  - `:width`: `null` (nullable number) - Resample factor width, e.g. `10`"
  (r/adapt-react-class box/Resample))

(def Slice
  "*Select one or more rows/columns/stacks*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable vec2) - Slice from, to depth (excluding to), e.g. `[2, 4]`
  - `:height`: `null` (nullable vec2) - Slice from, to height (excluding to), e.g. `[2, 4]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable vec2) - Slice from, to items (excluding to), e.g. `[2, 4]`
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable vec2) - Slice from, to width (excluding to), e.g. `[2, 4]`"
  (r/adapt-react-class box/Slice))

(def Split
  "*Split one array dimension into two by splitting rows/columns/etc*

  - `:axis`: `null` (nullable axis) - Axis to split, e.g. `x`
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:length`: `1` (number) - Tuple length
  - `:order`: `\"wxyz\"` (transpose) - Axis order
  - `:overlap`: `1` (number) - Tuple overlap
  - `:source`: `\"<\"` (select) - Input source"
  (r/adapt-react-class box/Split))

(def Spread
  "*Spread data values according to array indices*

  - `:alignDepth`: `0` (anchor) - Depth alignment
  - `:alignHeight`: `0` (anchor) - Height alignment
  - `:alignItems`: `0` (anchor) - Items alignment
  - `:alignWidth`: `0` (anchor) - Width alignment
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable vec4) - Depth offset, e.g. `[1.5, 0, 0, 0]`
  - `:height`: `null` (nullable vec4) - Height offset, e.g. `[1.5, 0, 0, 0]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable vec4) - Items offset, e.g. `[1.5, 0, 0, 0]`
  - `:source`: `\"<\"` (select) - Input source
  - `:unit`: `\"relative\"` (mapping) - Spread per item (absolute) or array (relative)
  - `:width`: `null` (nullable vec4) - Width offset, e.g. `[1.5, 0, 0, 0]`"
  (r/adapt-react-class box/Spread))

(def Subdivide
  "*Subdivide data points evenly or with a bevel*

  - `:bevel`: `1` (number) - Fraction to end outward from vertices
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `null` (nullable positive int) - Divisions of depth, e.g. `5`
  - `:height`: `null` (nullable positive int) - Divisions of height, e.g. `5`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:items`: `null` (nullable positive int) - Divisions of items, e.g. `5`
  - `:lerp`: `true` (boolean) - Interpolate values with computed indices
  - `:source`: `\"<\"` (select) - Input source
  - `:width`: `null` (nullable positive int) - Divisions of width, e.g. `5`"
  (r/adapt-react-class box/Subdivide))

(def Swizzle
  "*Swizzle data values*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `xyzw` (swizzle) - Swizzle order
  - `:source`: `\"<\"` (select) - Input source"
  (r/adapt-react-class box/Swizzle))

(def Transpose
  "*Transpose array dimensions*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:order`: `xyzw` (transpose) - Transpose order
  - `:source`: `\"<\"` (select) - Input source"
  (r/adapt-react-class box/Transpose))
