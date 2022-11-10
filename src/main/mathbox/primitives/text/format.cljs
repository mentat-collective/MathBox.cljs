(ns mathbox.primitives.text.format
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Text formatter*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:data `null` (nullable array) - Array of labels, e.g. `[\\\"Grumpy\\\", \\\"Sleepy\\\", \\\"Sneezy\\\"]`
:detail `24` (number) - Font detail
:digits `null` (nullable positive number) - Digits of precision, e.g. `2`
:expr `null` (nullable function) - Label formatter expression, e.g. `function (x, y, z, w, i, j, k, l, time, delta) { ... }`
:font `\\\"sans-serif\\\"` (font) - Font family
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:live `true` (bool) - Update continuously
:magFilter `\\\"linear\\\"` (filter) - Texture magnification filtering
:minFilter `\\\"linear\\\"` (filter) - Texture minification filtering
:sdf `5` (number) - Signed distance field range
:source `\\\"<\\\"` (select) - Input source
:style `\\\"\\\"` (string) - Font style, e.g. `\\\"italic\\\"`
:type `\\\"float\\\"` (type) - Texture data type
:variant `\\\"\\\"` (string) - Font variant, e.g. `\\\"small-caps\\\"`
:weight `\\\"\\\"` (string) - Font weight, e.g. `\\\"bold\\\"`"}
  Format
  (r/adapt-react-class box/Format))
