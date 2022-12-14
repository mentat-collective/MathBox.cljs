(ns mathbox.primitives.time.now
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Absolute UNIX time in seconds since 01/01/1970*

:classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
:id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
:now `null` (nullable timestamp) - Current moment, e.g. `1444094929.619`
:pace `1` (number) - Time pace
:seek `null` (nullable number) - Seek to time
:speed `1` (number) - Time speed"}
  Now
  (r/adapt-react-class box/Now))
