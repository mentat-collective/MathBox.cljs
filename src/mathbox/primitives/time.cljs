(ns mathbox.primitives.time
  (:require [mathbox.primitives.time.clock]
            [mathbox.primitives.time.now]))

(def Clock mathbox.primitives.time.clock/Clock)
(def Now mathbox.primitives.time.now/Now)
