(ns mathbox
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]
            ["three" :as THREE]
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

(defn opts->setup
  "Some core options, tidied up."
  [{:keys [background-color max-distance]}]
  (setup
   (fn [^js box]
     (let [three (.-three box)]
       (when max-distance
         (-> three .-controls .-maxDistance (set! max-distance)))
       (when background-color
         (let [color (THREE/Color. background-color)]
           (-> three .-renderer (.setClearColor color 1.0))))))))

(def BareMathbox
  (r/adapt-react-class box/Mathbox))

(def ContainedMathbox
  (r/adapt-react-class box/ContainedMathbox))

(defn Mathbox
  "Same as `ContainedMathBox`, but with setup options.

  TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.

  :style maps to containerStyle."
  [{:keys [init style] :as opts} & children]
  (let [ref (cond (map? init) (opts->setup init)
                  (fn? init)  (setup init)
                  (nil? init) nil
                  :else      (throw
                              (ex-info
                               "Invalid init." {:init init})))
        opts (-> opts
                 (dissoc :init :style)
                 (update :options (partial merge default-options))
                 (assoc :ref ref
                        :containerStyle style))]
    (into [:> box/ContainedMathbox opts] children)))
