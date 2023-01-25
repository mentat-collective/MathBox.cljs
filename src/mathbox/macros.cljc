(ns mathbox.macros
  "Code for easy aliasing of mathbox-react primitives."
  #?(:cljs
     (:require [reagent.core]))
  #?(:cljs
     (:require-macros [mathbox.macros])))

(defmacro defprim
  "Call this like

  ```clj
  (defprim some.ns/Symbol
    \"optional docstring\"
    <optional metadata map>)
  ```

  Transforms to

  ```clj
  (def Symbol (r/adapt-react-class some.ns/Symbol))
  ```

  with metadata attached."
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
