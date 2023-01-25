(ns mathbox.primitives.base
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Group
  "*Group elements for visibility and activity*

- `:active`: `true` (bool) - Updates continuously
- `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
- `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
- `:visible`: `true` (bool) - Visibility for rendering")

(defprim box/Inherit
  "*Inherit and inject a trait from another element*

- `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
- `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`")

(defprim box/Unit
  "*Change unit sizing for drawing ops*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`")
