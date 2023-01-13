(ns mathbox.types
  (:require ["three" :as three]))

(defn ->color [color]
  (if (.-isColor color)
    color
    (three/Color. color)))
