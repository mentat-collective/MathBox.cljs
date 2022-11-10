(ns mathbox.clerk-ui
  (:require #?(:cljs [mathbox])
            #?(:cljs [mathbox.primitives])
            #?(:clj  [nextjournal.clerk :as clerk])
            #?(:cljs [nextjournal.clerk.sci-viewer :as sv])
            #?(:cljs [sci.core :as sci]))
  #?(:cljs
     (:require-macros [mathbox.clerk-ui])))

;; ## SCI Customization
;;
;; The mathbox.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

#?(:cljs
   (swap! sv/!sci-ctx
          sci/merge-opts
          {:classes    {'Math js/Math}
           :aliases    {'mb 'mathbox.primitives}
           :namespaces
           {'mathbox (sci/copy-ns mathbox (sci/create-ns 'mathbox))
            'mathbox.primitives
            (sci/copy-ns mathbox.primitives (sci/create-ns 'mathbox.primitives))}}))

;; ## Example Macro

#?(:clj
   (defmacro cljs [& exprs]
     `(nextjournal.clerk/with-viewer
        {:transform-fn nextjournal.clerk/mark-presented
         :render-fn '(fn [_#]
                       (let [result# (do ~@exprs)]
                         (v/html
                          (if (vector? result#)
                            result#
                            [v/inspect result#]))))}
        {})))
