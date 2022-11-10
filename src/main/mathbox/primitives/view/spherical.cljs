(ns mathbox.primitives.view.spherical
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply spherical view*

:bend `1` (number) - Amount of spherical bend
:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:eulerOrder `xyz` (swizzle) - Euler order
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale
:visible `true` (bool) - Visibility for rendering"}
  Spherical
  (r/adapt-react-class box/Spherical))
