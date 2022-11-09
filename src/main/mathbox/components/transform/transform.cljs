(ns mathbox.components.transform.transform
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Transform geometry in 3D*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:eulerOrder `xyz` (swizzle) - 3D Euler order
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:matrix `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 3D Projective Matrix
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale"}
  Transform
  (r/adapt-react-class box/Transform))
