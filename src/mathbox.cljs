(ns mathbox
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]
            ["three" :as three]
            ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]))

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

(def default-options
  {:plugins ["core" "controls" "cursor"]
   :controls {:klass OrbitControls/OrbitControls}
   :camera {}})

;; ## Animation

(defn setup
  "Returns a setup function that will only run ONE time. TODO can I recreate
  this with hooks?"
  [f]
  (fn [^js box]
    (when (and box (not (.-created box)))
      (set! (.-created box) true)
      (f box))))


#_#_
(defn doto-controls [box f & xs]
  (let [controls (.. box -three -controls)]
    (apply f controls xs)
    box))

(defn doto-renderer [box f & xs]
  (let [renderer (.. box -three -renderer)]
    (apply f renderer xs)
    box))

(defn opts->setup
  [{:keys [background-color max-distance]}]
  (fn [^js box]
    (let [three (.-three box)]
      (when max-distance
        (-> three .-controls .-maxDistance (set! max-distance)))
      (when background-color
        (let [color (three/Color. background-color)]
          (-> three .-renderer (.setClearColor color 1.0)))))))

(defn opts->ref [init ref]
  (let [f (cond (map? init) (setup (opts->setup init))
                (fn? init)  (setup init)
                (nil? init) nil
                :else       (throw
                             (ex-info
                              "Invalid init." {:init init})))
        double (when (and f ref)
                 (fn [box]
                   (f box)
                   (ref box)))]
    (or double f ref)))

(defn Mathbox
  ":container takes :id, :style, :class. This can do a contained or uncontained
  mathbox."
  [{:keys [init ref container] :as opts} & children]
  (let [ref  (opts->ref init ref)
        opts (-> (dissoc opts :init :container)
                 (assoc :ref ref)
                 (update :options (partial merge default-options)))]
    (cond (nil? container)
          (into [:> box/ContainedMathbox opts] children)

          (map? container)
          (let [opts (-> (dissoc opts :init :container)
                         (assoc
                          :containerId    (:id container)
                          :containerStyle (:style container)
                          :containerClass (:class container)))]
            (into [:> box/ContainedMathbox opts] children))

          (instance? js/HTMLElement container)
          (into [:> box/Mathbox opts] children)

          :else
          (throw
           (ex-info "Unsupported container : "
                    {:container container})))))

(def BareMathbox
  (r/adapt-react-class box/Mathbox))

(def ContainedMathbox
  (r/adapt-react-class box/ContainedMathbox))
