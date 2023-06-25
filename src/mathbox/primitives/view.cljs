(ns mathbox.primitives.view
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def Cartesian
  "*Apply cartesian view*

  * *classes* = `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  * *eulerOrder* = `xyz` (swizzle) - Euler order
  * *id* = `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  * *pass* = `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  * *position* = `[0, 0, 0]` (vec3) - 3D Position
  * *quaternion* = `[0, 0, 0, 1]` (quat) - 3D Quaternion
  * *range* = `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  * *rotation* = `[0, 0, 0]` (vec3) - 3D Euler rotation
  * *scale* = `[1, 1, 1]` (vec3) - 3D Scale
  * *visible* = `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Cartesian))

(def Cartesian4
  "*Apply 4D cartesian view*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Cartesian4))

(def Polar
  "*Apply polar view*

  - `:bend`: `1` (number) - Amount of polar bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:helix`: `0` (number) - Expand into helix
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Polar))

(def Spherical
  "*Apply spherical view*

  - `:bend`: `1` (number) - Amount of spherical bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Spherical))

(def Stereographic
  "*Apply stereographic projection*

  - `:bend`: `1` (number) - Amount of stereographic bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:eulerOrder`: `xyz` (swizzle) - Euler order
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0]` (vec3) - 3D Position
  - `:quaternion`: `[0, 0, 0, 1]` (quat) - 3D Quaternion
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:rotation`: `[0, 0, 0]` (vec3) - 3D Euler rotation
  - `:scale`: `[1, 1, 1]` (vec3) - 3D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Stereographic))

(def Stereographic4
  "*Apply 4D stereographic projection*

  - `:bend`: `1` (number) - Amount of stereographic bend
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:position`: `[0, 0, 0, 0]` (vec4) - 4D Position
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:scale`: `[1, 1, 1, 1]` (vec4) - 4D Scale
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Stereographic4))

(def View
  "*Adjust view range*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:range`: `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/View))
