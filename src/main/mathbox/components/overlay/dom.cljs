(ns mathbox.components.overlay.dom
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*HTML DOM injector*

:attributes `null` (nullable object) - HTML attributes, e.g. `{\\\"style\\\": {\\\"color\\\": \\\"red\\\"}}`
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:color `\\\"rgb(255, 255, 255)\\\"` (color) - Color
:depth `0` (number) - Depth scaling
:html `\\\"<\\\"` (select) - HTML data source
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:offset `[0, -20]` (vec2) - 2D offset
:opacity `1` (positive number) - Opacity
:outline `2` (number) - Outline size
:pointerEvents `false` (bool) - Allow pointer events
:points `\\\"<\\\"` (select) - Points data source
:size `16` (number) - Text size
:snap `false` (bool) - Snap to pixel
:visible `true` (bool) - Visibility for rendering
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zoom `1` (number) - HTML zoom"}
  Dom
  (r/adapt-react-class box/Dom))
