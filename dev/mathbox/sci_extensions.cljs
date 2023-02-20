(ns mathbox.sci-extensions
  (:require [leva.sci]
            ["three" :as three]
            [mathbox.sci]
            [mathbox.examples.test.face]
            [mathbox.examples.math.helitorus]
            [mathbox.examples.math.pq-knot]
            [sci.ctx-store]
            [sci.core :as sci]))

;; ## SCI Customization

(leva.sci/install!)
(mathbox.sci/install!)

(sci.ctx-store/swap-ctx!
 sci/merge-opts
 {:classes {'Math js/Math}
  :js-libs {"three" three}
  :namespaces
  {'mathbox.examples.test.face
   (sci/copy-ns mathbox.examples.test.face
                (sci/create-ns 'mathbox.examples.test.face))}})
