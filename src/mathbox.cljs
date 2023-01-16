(ns mathbox
  (:require ["mathbox-react" :as box]
            ["react" :as react]
            ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]
            [mathbox.hooks :as hooks]))

;; The plan for getting this released:
;;
;; 1. Have some way to do an initial configuration of the mathbox instance, and
;;    ideally re-rerun if the configuration changes at all.
;;
;; 2. port the demo notebook over
;;
;; 3. there are some annoying things like the camera config etc that it would be
;;    great to lock down.
;;
;; Expose some of the basic annoying things like the various controls classes

;; TODO take a key for orbitcontrols, trackballcontrols.

(def threestrap-defaults
  {:plugins  ["core" "controls" "cursor"]
   :controls {:klass OrbitControls/OrbitControls}
   :camera   {}})

;; ## Components

(defn ^:no-doc Rawbox [{:keys [container threestrap] :as props} & children]
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

(defn ^:no-doc Mathbox*
  "If you want something on creation, use :ref."
  [props & children]
  (let [[box set-box]       (react/useState nil)
        [hook-config props] (hooks/split-config props)
        props (-> props
                  (assoc :ref set-box)
                  (update :threestrap (partial merge threestrap-defaults)))]
    (hooks/install-hooks box hook-config)
    (into [Rawbox props] children)))

(defn Mathbox
  "Supports:

  - :renderer
  - :controls
  - :container
  - :ref
  - :threestrap
  -
  - all the remaining options from the base/root component:

  - `:camera`: `\"[camera]\"` (select) - Active camera
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:focus`: `1` (nullable number) - Camera focus distance in world units
  - `:fov`: `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:pass`: `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  - `:scale`: `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`
  - `:speed`: `1` (number) - Global speed"
  [props & children]
  (into [:f> Mathbox* props] children))
