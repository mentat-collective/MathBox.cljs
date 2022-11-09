(ns mathbox.components.present.play
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Play a sequenced animation*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Play delay
:ease `\\\"cosine\\\"` (ease) - Animation ease (linear, cosine, binary, hold)
:from `0` (number) - Play from
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:loop `false` (bool) - Loop
:pace `1` (number) - Play pace
:realtime `false` (bool) - Run on real time, not clock time
:script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
:speed `1` (number) - Play speed
:target `\\\"<\\\"` (select) - Animation target
:to `Infinity` (number) - Play until
:trigger `1` (nullable number) - Trigger on step"}
  Play
  (r/adapt-react-class box/Play))
