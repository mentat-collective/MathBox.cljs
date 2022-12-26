(ns mathbox.clerk-ui
  (:require [leva.core]
            ["three" :as three]
            [mathbox]
            [mathbox.primitives]
            [mathbox.examples.math.helitorus]
            [mathbox.examples.math.pq-knot]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization
;;
;; Note how to get `threejs` in:
(def three-ns
  (-> (into {}
            (map (fn [[k v]] [(symbol k) v]))
            (.entries js/Object three))))

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes    {'Math js/Math}
  :aliases {'mb    'mathbox.primitives
            'leva 'leva.core}
  :namespaces
  {'three     three-ns
   'mathbox   (sci/copy-ns mathbox   (sci/create-ns 'mathbox))
   'leva.core (sci/copy-ns leva.core (sci/create-ns 'leva.core))
   'mathbox.primitives
   (sci/copy-ns mathbox.primitives (sci/create-ns 'mathbox.primitives))}})
