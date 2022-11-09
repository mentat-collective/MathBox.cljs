(ns mathbox.components.view.cartesian
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Apply cartesian view*

* *classes* = `[]` (string array) - Custom classes, e.g. `[\"big\"]`
* *eulerOrder* = `xyz` (swizzle) - Euler order
* *id* = `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
* *pass* = `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
* *position* = `[0, 0, 0]` (vec3) - 3D Position
* *quaternion* = `[0, 0, 0, 1]` (quat) - 3D Quaternion
* *range* = `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
* *rotation* = `[0, 0, 0]` (vec3) - 3D Euler rotation
* *scale* = `[1, 1, 1]` (vec3) - 3D Scale
* *visible* = `true` (bool) - Visibility for rendering"}
  Cartesian
  (r/adapt-react-class box/Cartesian))
