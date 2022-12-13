(ns mathbox.primitives.view.cartesian4
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply 4D cartesian view*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0, 0]` (vec4) - 4D Position
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:scale `[1, 1, 1, 1]` (vec4) - 4D Scale
:visible `true` (bool) - Visibility for rendering"}
  Cartesian4
  (r/adapt-react-class box/Cartesian4))
