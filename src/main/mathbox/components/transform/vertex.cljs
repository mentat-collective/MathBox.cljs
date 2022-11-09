(ns mathbox.components.transform.vertex
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply custom vertex shader pass*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:shader `\\\"<\\\"` (select) - Shader to use"}
  Vertex
  (r/adapt-react-class box/Vertex))
