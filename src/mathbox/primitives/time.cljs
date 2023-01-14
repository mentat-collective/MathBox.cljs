(ns mathbox.primitives.time
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Clock
  "*Relative clock that starts from zero.*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :delay `0` (number) - Play delay
  :from `0` (number) - Play from
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :loop `false` (bool) - Loop
  :pace `1` (number) - Play pace
  :realtime `false` (bool) - Run on real time, not clock time
  :seek `null` (nullable number) - Seek to time, e.g. `4`
  :speed `1` (number) - Play speed
  :to `Infinity` (number) - Play until")

(defprim box/Now
  "*Absolute UNIX time in seconds since 01/01/1970*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :now `null` (nullable timestamp) - Current moment, e.g. `1444094929.619`
  :pace `1` (number) - Time pace
  :seek `null` (nullable number) - Seek to time
  :speed `1` (number) - Time speed")
