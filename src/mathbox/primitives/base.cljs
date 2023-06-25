(ns mathbox.primitives.base
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def Group
  "*Group elements for visibility and activity*

  - `:active`: `true` (bool) - Updates continuously
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:visible`: `true` (bool) - Visibility for rendering"
  (r/adapt-react-class box/Group))

(def Inherit
  "*Inherit and inject a trait from another element*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`"
  (r/adapt-react-class box/Inherit))

(def Unit
  "*Change unit sizing for drawing ops*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`"
  (r/adapt-react-class box/Unit))
