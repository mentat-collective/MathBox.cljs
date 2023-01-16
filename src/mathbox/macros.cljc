(ns mathbox.macros
  #?(:cljs
     (:require [reagent.core]))
  #?(:cljs
     (:require-macros [mathbox.macros])))

(defmacro defprim
  ([sym]
   `(defprim ~sym nil {}))
  ([sym docstring]
   `(defprim ~sym ~docstring {}))
  ([sym docstring attr]
   {:pre [(string? docstring)
          (map? attr)]}
   (when (:ns &env)
     (let [m (-> (meta sym)
                 (merge (assoc attr :doc docstring)))]
       `(def ~(with-meta (symbol (name sym)) m)
          (reagent.core/adapt-react-class ~sym))))))
