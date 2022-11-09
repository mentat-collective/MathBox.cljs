(ns mathbox.components.rtt.rtt
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Render objects to a texture*

:camera `\\\"[camera]\\\"` (select) - Active camera
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:height `null` (nullable number) - RTT height, e.g. `360`
:history `1` (number) - RTT history
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:magFilter `\\\"linear\\\"` (filter) - Texture magnification filtering
:minFilter `\\\"linear\\\"` (filter) - Texture minification filtering
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:speed `1` (number) - Global speed
:type `\\\"unsignedByte\\\"` (type) - Texture data type
:width `null` (nullable number) - RTT width, e.g. `640`"}
  Rtt
  (r/adapt-react-class box/Rtt))
