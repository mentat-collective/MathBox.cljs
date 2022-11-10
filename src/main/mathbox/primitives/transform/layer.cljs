(ns mathbox.primitives.transform.layer
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Independent 2D layer/overlay*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `1` (number) - 3D Depth
:fit `y` (fit) - Fit to (contain, cover, x, y)
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)"}
  Layer
  (r/adapt-react-class box/Layer))
