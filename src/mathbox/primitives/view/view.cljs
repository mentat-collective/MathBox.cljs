(ns mathbox.primitives.view.view
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Adjust view range*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:visible `true` (bool) - Visibility for rendering"}
  View
  (r/adapt-react-class box/View))
