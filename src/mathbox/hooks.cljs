(ns mathbox.hooks
  "Collection of hooks used to configure the [[mathbox/MathBox]] component."
  (:require [mathbox.types :as t]
            ["react" :as react]))

(defn ^:no-doc split-map [m ks]
  (let [with    (select-keys m ks)
        without (apply dissoc m ks)]
    [with without]))

(def hook-keys
  [:renderer :controls :on :ref])

(defn split-config
  "Returns a 2-vector of maps, the first with and the second without
  the [[hook-keys]]."
  [m]
  (split-map m hook-keys))

;; ## Hooks
;;
;; The following hooks are used by [[mathbox/MathBox]] to configure mutable
;; settings on some of the internal properties that can't be configured
;; declaratively.

(defn refHook
  "Hook used in place of the whole `forwardRef` machinery. This seems equivalent
  for the user, without the cost of converting to and from ClojureScript... let
  me know if I'm wrong!"
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
  "Installs a hook that configures background color and opacity for
  the [WebGLRenderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer)
  instance attached to the [[mathbox/MathBox]] component."
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
        (aset k v)))
    js/undefined))

(defn configureControls
  "Installs hooks with the following behavior:

  Sets properties on whatever controls instance is registered. Here is
  OrbitControls, for example:
  https://threejs.org/docs/index.html#examples/en/controls/OrbitControls

  NOTE that this should really support more properties! In the future we should
  set ANY property in the map."
  [box {:keys [max-distance rotate-speed]}]
  (react/useEffect
   (control-effect box "maxDistance" max-distance)
   #js [box max-distance])

  (react/useEffect
   (control-effect box "rotateSpeed" rotate-speed)
   #js [box rotate-speed]))

(defn configureEvents
  "Installs a hook with the following behavior:

  On mount, if an `event-m` of k => event handler is supplied, binds each event
  to its handler using `mathbox.three.on` as described in [the Threestrap
  docs](https://github.com/unconed/threestrap#events).

  On unmount, unbinds them via `mathbox.three.off`."
  [box event-m]
  (react/useEffect
   (fn mount []
     (if (and box (seq event-m))
       (do (doseq [[k f] event-m]
             (.on (.-three box) (name k) f))
           (fn unmount []
             (doseq [[k f] event-m]
               (.off (.-three box) (name k) f))))
       js/undefined))
   #js [box event-m]))

(defn install-hooks [box config]
  (doto box
    (refHook (:ref config))
    (configureRenderer (:renderer config))
    (configureControls (:controls config))
    (configureEvents   (:on config))))
