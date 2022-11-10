(ns mathbox.primitives.view.polar
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply polar view*

:bend `1` (number) - Amount of polar bend
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:eulerOrder `xyz` (swizzle) - Euler order
:helix `0` (number) - Expand into helix
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale
:visible `true` (bool) - Visibility for rendering"}
  Polar
  (r/adapt-react-class box/Polar))
