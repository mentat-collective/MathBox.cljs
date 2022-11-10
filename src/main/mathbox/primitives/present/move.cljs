(ns mathbox.primitives.present.move
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Move elements in/out on transition*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Transition delay
:delayEnter `null` (nullable number) - Transition enter delay, e.g. `0.3`
:delayExit `null` (nullable number) - Transition exit delay, e.g. `0.3`
:duration `0.3` (number) - Transition duration
:durationEnter `0.3` (number) - Transition enter duration
:durationExit `0.3` (number) - Transition exit duration
:enter `null` (nullable number) - Enter state, e.g. `0.5`
:exit `null` (nullable number) - Exit state, e.g. `0.5`
:from `[0, 0, 0, 0]` (vec4) - Enter from
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:stagger `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`
:to `[0, 0, 0, 0]` (vec4) - Exit to"}
  Move
  (r/adapt-react-class box/Move))