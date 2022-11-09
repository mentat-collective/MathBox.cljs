(ns mathbox.components.data.scale
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def
  ^{:doc
    "*Human-friendly divisions on an axis, subdivided as needed*

:axis `1` (axis) - Axis
:base `10` (number) - Power base for sub/super units
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:divide `10` (number) - Number of divisions
:end `true` (bool) - Include end
:factor `1` (positive number) - Scale factor
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:mode `\\\"linear\\\"` (scale) - Scale type
:nice `true` (bool) - Snap to nice numbers
:origin `[0, 0, 0, 0]` (vec4) - 4D Origin
:range `[-1, 1]` (vec2) - Range on axis
:start `true` (bool) - Include start
:unit `1` (number) - Reference unit
:zero `true` (bool) - Include zero"}
  Scale
  (r/adapt-react-class box/Scale))
