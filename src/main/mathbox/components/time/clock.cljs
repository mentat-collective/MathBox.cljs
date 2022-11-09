(ns mathbox.components.time.clock
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Relative clock that starts from zero.*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Play delay
:from `0` (number) - Play from
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:loop `false` (bool) - Loop
:pace `1` (number) - Play pace
:realtime `false` (bool) - Run on real time, not clock time
:seek `null` (nullable number) - Seek to time, e.g. `4`
:speed `1` (number) - Play speed
:to `Infinity` (number) - Play until"}
  Clock
  (r/adapt-react-class box/Clock))
