(ns user
  (:require ["mathbox" :as MathBox]
            ["three" :as THREE]
            ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]))

(defn build-mathbox [opts]
  (MathBox/mathBox
   (clj->js opts)))

(def mathbox
  (build-mathbox
   {:plugins  ["core" "controls" "cursor"]
    :controls {:klass OrbitControls/OrbitControls}
    :camera   {}}))

(def three (.-three mathbox))
(set! (-> three .-controls .-maxDistance) 4)
(-> three .-camera .-position (.set 2.5 1 2.5))
(-> three .-renderer (.setClearColor (THREE/Color. 0xeeeeee) 1.0))

(def view
  (-> mathbox
      (.set (clj->js
             {:scale 720
              :focus 1}))
      (.cartesian
       (clj->js
        {:range [[0 1] [0 1] [0 1]]
         :scale [1 1 1]}))))

(defn add-volume! [id rez size opacity]
  (doto view
    (.volume
     (clj->js
      {:id id
       :width rez
       :height rez
       :depth rez
       :items 1,
       :channels 4
       :live false
       :expr (fn [emit x y z]
               (emit x y z opacity))}))
    (.point
     (clj->js
      {;; The neat trick: use the same data for position and for color! We
       ;; don't actually need to specify the points source since we just
       ;; defined them but it emphasizes what's going on.
       ;;
       ;; The w component 1 is ignored as a position but used as opacity
       ;; as a color.
       :points (str "#" id)
       :colors (str "#" id)
       ;; Multiply every color component in [0..1] by 255
       :color 0xffffff
       :size size}))))

(comment
  (add-volume! "volume2" 4 30 1.0)
  (add-volume! "volume3" 5 80 1.0))
