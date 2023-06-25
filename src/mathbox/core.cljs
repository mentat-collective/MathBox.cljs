(ns mathbox.core
  "MathBox core components."
  (:require ["mathbox-react" :as box]
            ["react" :as react]
            ["three" :as three]
            ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]
            ["three/examples/jsm/controls/TrackballControls.js" :as TrackballControls]
            [mathbox.hooks :as hooks]))

(defn- update-if-exists
  "Similar to `update-in`, but won't modify the map if the value at `ks` is
  `nil`."
  [m ks f]
  (if-let [v (get-in m ks)]
    (assoc-in m ks (f v))
    m))

(defn- k->control
  "Given a keyword `k`, returns a corresponding threejs controls klass, or `k` if
  not found."
  [k]
  (case k
    :orbit OrbitControls/OrbitControls
    :trackball TrackballControls/TrackballControls
    k))

(defn- update-threestrap
  "Bespoke processing of a few options that are tough to handle without knowing
  specific threejs details."
  [m]
  (-> m
      (update-if-exists [:controls :klass] k->control)
      (update-if-exists [:camera :up] (fn [v]
                                        (if (vector? v)
                                          (let [[x y z] v]
                                            (three/Vector3. x y z))
                                          v)))))

(def threestrap-defaults
  "Default `:threestrap` options for the [[MathBox]] component."
  {:plugins  ["core" "controls" "cursor"]
   :controls {:klass OrbitControls/OrbitControls}})

;; ## Components

(defn ^:no-doc RawBox
  "Light wrapper around the `ContainedMathbox` and `MathBox` components exposed by
  `mathbox-react.`

  The main differences are:

  - This component calls `ContainedMathbox` if the `:container` option is a
    config map (or not present), and `Mathbox` if `:container` references an
    actual `HTMLElement`. Any other value currently errors.

  - This component takes a `:threestrap` option instead of `:options`, as the
  `mathbox-react` components do.

  See [[MathBox]] for a version that installs hooks to allow configuration of
  the renderer, camera and other settings."
  [{:keys [container threestrap] :as props} & children]
  (let [props (-> (dissoc props :container :threestrap)
                  (assoc :options threestrap))]
    (cond (nil? container)
          (into [:> box/ContainedMathbox props] children)

          (map? container)
          (let [props (assoc props
                             :containerId    (:id container)
                             :containerStyle (:style container)
                             :containerClass (:class container))]
            (into [:> box/ContainedMathbox props] children))

          (instance? js/HTMLElement container)
          (into [:> box/Mathbox props] children)

          :else
          (throw
           (ex-info "Unsupported container : "
                    {:container container})))))

(defn ^:no-doc MathBox*
  "Function component that backs [[MathBox]]. See [[MathBox]] for detailed
  documentation."
  [props & children]
  (let [[box set-box]       (react/useState nil)
        [hook-config props] (hooks/split-config props)
        props (-> props
                  (assoc :ref set-box)
                  (update :threestrap
                          (fn [m]
                            (if m
                              (merge threestrap-defaults (update-threestrap m))
                              threestrap-defaults))))]
    (hooks/install-hooks box hook-config)
    (into [RawBox props] children)))

(defn MathBox
  "Component that configures a MathBox-backed canvas and reactively mounts all
  children into the canvas.

  Supports the following options:

  - `:threestrap`: these options are passed directly to the [mathbox
    constructor](https://github.com/unconed/mathbox#basic-usage) on instantiation;
    these are in turn passed along to Threestrap's `Bootstrap` constructor.
    See [this page](https://github.com/unconed/threestrap#plugins) for an example
    of what to pass and why.

  - `:renderer`: optional map with `:background-color` and `:background-opacity`
    keys. Updating these will update the settings without a re-render.

  - `:controls`: optional map with `:max-distance` and `:rotate-speed` keys.
    Updating these will update the settings on the registered controls without a
    re-render.

  - `:on`: optional map of type {<event-name> (fn [event three] ,,,)} On mount,
    each event will be bound via `mathbox.three.on`, as described in [Threestrap's
    docs](https://github.com/unconed/threestrap#events).

  - `:ref`: a 1-arg function that receives the underlying mathbox instance
    whenever it changes. Note that you may receive `nil` and should guard against
    it.

  As well as all options used to configure the [base/root
  component](https://github.com/unconed/mathbox/blob/master/docs/primitives.md#base/root). (The
  format of each following line is <keyword>: <default> (<type>) -
  <description>.)

  - `:camera`: `\"[camera]\"` (select) - Active camera
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`
  - `:speed`: `1` (number) - Global speed"
  [props & children]
  (into [:f> MathBox* props] children))
