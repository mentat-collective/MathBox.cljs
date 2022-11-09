(ns mathbox.components.present.step
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Step through a sequenced animation*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Step delay
:duration `0.3` (number) - Step duration
:ease `\\\"cosine\\\"` (ease) - Animation ease (linear, cosine, binary, hold)
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pace `0` (number) - Step pace
:playback `\\\"linear\\\"` (ease) - Playhead ease (linear, cosine, binary, hold)
:realtime `false` (bool) - Run on real time, not clock time
:rewind `2` (number) - Step rewind factor
:script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
:skip `true` (bool) - Speed up through skips
:speed `1` (number) - Step speed
:stops `null` (nullable number array) - Playhead stops, e.g. `[0, 1, 3, 5]`
:target `\\\"<\\\"` (select) - Animation target
:trigger `1` (nullable number) - Trigger on step"}
  Step
  (r/adapt-react-class box/Step))
