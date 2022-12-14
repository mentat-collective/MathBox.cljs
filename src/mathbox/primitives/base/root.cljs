(ns mathbox.primitives.base.root)

(def ^{:doc "*Tree root*

  :camera `\"[camera]\"` (select) - Active camera
  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :focus `1` (nullable number) - Camera focus distance in world units
  :fov `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  :scale `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`
  :speed `1` (number) - Global speed"}
  Root
  nil
  ;; TODO enable once this appears in mathbox-react.
  #_(r/adapt-react-class box/Root))
