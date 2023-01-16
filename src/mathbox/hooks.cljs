(ns mathbox.hooks
  (:require [goog.object :as o]
            [mathbox.types :as t]
            ["react" :as react]))

(defn ^:no-doc split-map [m ks]
  (let [with    (select-keys m ks)
        without (apply dissoc m ks)]
    [with without]))

(def hook-keys
  [:renderer :controls :ref])

(defn split-config
  "Returns a 2-vector with and without the hook keys."
  [m]
  (split-map m hook-keys))

;; ## Hooks

(defn refHook
  "Hook"
  [box ref]
  (react/useEffect
   (fn mount []
     (when ref (ref box))
     (if box
       (fn unmount []
         (when ref (ref nil)))
       js/undefined))
   #js [box]))

(defn configureRenderer
  "Options for
  the [WebGLRenderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)."
  [box {color   :background-color
        opacity :background-opacity}]
  (react/useEffect
   (fn []
     (when box
       (let [^js gl (.. box -three -renderer)]
         (cond color
               (doto gl
                 (.setClearColor
                  (t/->color color)
                  (or opacity (.getClearAlpha gl))))

               opacity
               (doto gl (.setClearAlpha opacity))

               :else nil)))
     js/undefined)
   #js [box color opacity]))

;; ### Controls
;;
;; NOTE that these are reactive, but you could easily set them on the
;; `:threestrap` entry instead. For some reason the basic examples in mathbox
;; don't do that.
;;
;; If I want to set a bunch at once, this is probably the way:
;; https://github.com/kentcdodds/use-deep-compare-effect/blob/main/src/index.ts#L32

(defn ^:no-doc control-effect [box k v]
  (fn []
    (when (and box v)
      (doto (.. box -three -controls)
        (o/set k v)))
    js/undefined))

(defn configureControls
  "Sets properties on whatever controls instance is registered. Here is
  OrbitControls, for example:
  https://threejs.org/docs/index.html#examples/en/controls/OrbitControls

  NOTE that this should really support more!"
  [box {:keys [max-distance rotate-speed]}]
  (react/useEffect
   (control-effect box "maxDistance" max-distance)
   #js [box max-distance])

  (react/useEffect
   (control-effect box "rotateSpeed" rotate-speed)
   #js [box rotate-speed]))

(defn install-hooks [box config]
  (doto box
    (refHook (:ref config))
    (configureRenderer (:renderer config))
    (configureControls (:controls config))))
