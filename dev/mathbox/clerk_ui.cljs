(ns mathbox.clerk-ui
  (:require [leva.core]
            [mathbox]
            [mathbox.primitives]
            [nextjournal.clerk.sci-env]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes    {'Math js/Math}
  :aliases    {'mb    'mathbox.primitives
               'leva 'leva.core}
  :namespaces
  {'mathbox (sci/copy-ns mathbox (sci/create-ns 'mathbox))
   'leva    (sci/copy-ns leva.core (sci/create-ns 'leva.core))
   'mathbox.primitives
   (sci/copy-ns mathbox.primitives (sci/create-ns 'mathbox.primitives))}})
