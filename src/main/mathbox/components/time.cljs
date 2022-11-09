(ns mathbox.components.time
  (:require [mathbox.components.time.clock]
            [mathbox.components.time.now]))

(def Clock mathbox.components.time.clock/Clock)
(def Now mathbox.components.time.now/Now)
