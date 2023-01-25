(ns mathbox.primitives.transform
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Fragment
  "*Apply custom fragment shader pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:gamma`: `false` (boolean) - Pass RGBA values in sRGB instead of linear RGB
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"light\"` (fragmentPass) - Fragment pass (color, light, rgba)
  - `:shader`: `\"<\"` (select) - Shader to use")

(defprim box/Layer
  "*Independent 2D layer/overlay*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:depth`: `1` (number) - 3D Depth
  - `:fit`: `y` (fit) - Fit to (contain, cover, x, y)
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)")

(defprim box/Mask
  "*Apply custom mask pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:shader`: `\"<\"` (select) - Shader to use")

(defprim box/Transform
  "*Transform geometry in 3D*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - 3D Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:matrix`: `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 3D Projective Matrix
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale")

(defprim box/Transform4
  "*Transform geometry in 4D*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:matrix`: `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 4D Affine Matrix
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale")

(defprim box/Vertex
  "*Apply custom vertex shader pass*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:shader`: `\"<\"` (select) - Shader to use")
