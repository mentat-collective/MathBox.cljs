(ns mathbox.components.operator.readback
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Read data back to a binary JavaScript array*

:active `true` (bool) - Updates continuously
:channels `4` (number) - Readback channels (read only)
  :classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
  :data `[]` (data) - Readback data buffer (read only)
  :depth `1` (nullable number) - Readback depth (read only)
  :expr `null` (nullable function) - Readback consume expression, e.g. `function (x, y, z, w, i, j, k, l) { ... }`
   :height `1` (nullable number) - Readback height (read only)
   :id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
      :items `1` (nullable number) - Readback items (read only)
      :source `\\\"<\\\"` (select) - Input source
      :type `\\\"float\\\"` (float) - Readback data type (float, unsignedByte)
      :width `1` (nullable number) - Readback width (read only)"}
  Readback
  (r/adapt-react-class box/Readback))
