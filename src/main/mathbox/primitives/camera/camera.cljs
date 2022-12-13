(ns mathbox.primitives.camera.camera
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc
       "*Camera instance or proxy*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:eulerOrder `\"xyz\"` (swizzle) - 3D Euler order
:fov `null` (nullable number) - Field-of-view (degrees), e.g. `60`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:lookAt `null` (nullable vec3) - 3D Look at, e.g. `[2, 3, 4]`
:position `null` (nullable vec3) - 3D Position, e.g. `[1, 2, 3]`
:proxy `false` (bool) - Re-use existing camera
:quaternion `null` (nullable quat) - 3D Quaternion, e.g. `[0.707, 0, 0, 0.707]`
:rotation `null` (nullable vec3) - 3D Euler rotation, e.g. `[π/2, 0, 0]`
:up `null` (nullable vec3) - 3D Up, e.g. `[0, 1, 0]`"}
  Camera
  (r/adapt-react-class box/Camera))
