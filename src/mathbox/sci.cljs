(ns mathbox.sci
  "Functions and vars for installation of all namespaces into an SCI context."
  (:require [mathbox.core]
            [mathbox.primitives]
            [mathbox.primitives.base]
            [mathbox.primitives.camera]
            [mathbox.primitives.data]
            [mathbox.primitives.draw]
            [mathbox.primitives.operator]
            [mathbox.primitives.overlay]
            [mathbox.primitives.present]
            [mathbox.primitives.rtt]
            [mathbox.primitives.shader]
            [mathbox.primitives.text]
            [mathbox.primitives.time]
            [mathbox.primitives.transform]
            [mathbox.primitives.view]
            [sci.core :as sci]
            [sci.ctx-store]))

(def mathbox-core-namespace
  (sci/copy-ns mathbox.core (sci/create-ns 'mathbox.core)))

(def mathbox-primitives-namespace
  (sci/copy-ns mathbox.primitives (sci/create-ns 'mathbox.primitives)))

(def mathbox-primitives-base-namespace
  (sci/copy-ns mathbox.primitives.base (sci/create-ns 'mathbox.primitives.base)))

(def mathbox-primitives-camera-namespace
  (sci/copy-ns mathbox.primitives.camera (sci/create-ns 'mathbox.primitives.camera)))

(def mathbox-primitives-data-namespace
  (sci/copy-ns mathbox.primitives.data (sci/create-ns 'mathbox.primitives.data)))

(def mathbox-primitives-draw-namespace
  (sci/copy-ns mathbox.primitives.draw (sci/create-ns 'mathbox.primitives.draw)))

(def mathbox-primitives-operator-namespace
  (sci/copy-ns mathbox.primitives.operator (sci/create-ns 'mathbox.primitives.operator)))

(def mathbox-primitives-overlay-namespace
  (sci/copy-ns mathbox.primitives.overlay (sci/create-ns 'mathbox.primitives.overlay)))

(def mathbox-primitives-present-namespace
  (sci/copy-ns mathbox.primitives.present (sci/create-ns 'mathbox.primitives.present)))

(def mathbox-primitives-rtt-namespace
  (sci/copy-ns mathbox.primitives.rtt (sci/create-ns 'mathbox.primitives.rtt)))

(def mathbox-primitives-shader-namespace
  (sci/copy-ns mathbox.primitives.shader (sci/create-ns 'mathbox.primitives.shader)))

(def mathbox-primitives-text-namespace
  (sci/copy-ns mathbox.primitives.text (sci/create-ns 'mathbox.primitives.text)))

(def mathbox-primitives-time-namespace
  (sci/copy-ns mathbox.primitives.time (sci/create-ns 'mathbox.primitives.time)))

(def mathbox-primitives-transform-namespace
  (sci/copy-ns mathbox.primitives.transform (sci/create-ns 'mathbox.primitives.transform)))

(def mathbox-primitives-view-namespace
  (sci/copy-ns mathbox.primitives.view (sci/create-ns 'mathbox.primitives.view)))

(def ^{:doc "Map of symbol to SCI namespace object. This var is usable as the
`:namespaces` entry in an SCI context config."}
  namespaces
  {'mathbox.core mathbox-core-namespace
   'mathbox.primitives mathbox-primitives-namespace
   'mathbox.primitives.base mathbox-primitives-base-namespace
   'mathbox.primitives.camera mathbox-primitives-camera-namespace
   'mathbox.primitives.data mathbox-primitives-data-namespace
   'mathbox.primitives.draw mathbox-primitives-draw-namespace
   'mathbox.primitives.operator mathbox-primitives-operator-namespace
   'mathbox.primitives.overlay mathbox-primitives-overlay-namespace
   'mathbox.primitives.present mathbox-primitives-present-namespace
   'mathbox.primitives.rtt mathbox-primitives-rtt-namespace
   'mathbox.primitives.shader mathbox-primitives-shader-namespace
   'mathbox.primitives.text mathbox-primitives-text-namespace
   'mathbox.primitives.time mathbox-primitives-time-namespace
   'mathbox.primitives.transform mathbox-primitives-transform-namespace
   'mathbox.primitives.view mathbox-primitives-view-namespace})

(def ^{:doc "SCI config that will install all of MathBox.cljs into an SCI context,
  with no aliases registered."}
  config
  {:classes {'Math js/Math}
   :namespaces namespaces})

(defn install!
  "Installs [[config]] into the shared SCI context store."
  []
  (sci.ctx-store/swap-ctx!
   sci/merge-opts
   config))
