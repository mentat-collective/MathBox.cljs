(ns mathbox.components.base.unit
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def ^{:doc "*Change unit sizing for drawing ops*

  :classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
  :focus `1` (nullable number) - Camera focus distance in world units
  :fov `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  :id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
  :scale `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`"}
  Unit
  (r/adapt-react-class box/Unit))
