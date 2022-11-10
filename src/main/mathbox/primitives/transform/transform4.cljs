(ns mathbox.primitives.transform.transform4
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Transform geometry in 4D*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:matrix `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 4D Affine Matrix
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0, 0]` (vec4) - 4D Position
:scale `[1, 1, 1, 1]` (vec4) - 4D Scale"}
  Transform4
  (r/adapt-react-class box/Transform4))
