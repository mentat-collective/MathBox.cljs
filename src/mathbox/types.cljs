(ns mathbox.types
  "This might end up being a home for aliases for things like `three/Color`; for
  now we have simple utility functions used by hooks and components."
  (:require ["three" :as three]))

(defn ->color [color]
  (if (.-isColor color)
    color
    (three/Color. color)))
