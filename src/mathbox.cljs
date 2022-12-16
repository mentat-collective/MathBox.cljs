(ns mathbox
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]
            ["three" :as THREE]
            ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]
            ["three/examples/jsm/controls/TrackballControls.js" :as TrackballControls]))

;; TODO take a key for orbitcontrols, trackballcontrols.
(def default-options
  {:plugins ["core" "controls" "cursor" ]
   :controls {:klass OrbitControls/OrbitControls}
   :camera {}})

(def Trackball TrackballControls/TrackballControls)
(defn Vector3 [] (THREE/Vector3.))
(defn Matrix4 [] (THREE/Matrix4.))
(def vs (THREE/Vector3.))

;; TODO document that we are super slow now with sci and ask what they think I
;; should do.
(defn spine [theta {:keys [n r1 r2 r3]}]
  (let [a (* theta n)
        b theta
        s (Math/sin a)
        c (Math/cos a)
        r (+ r2 r3)
        x (+ 1 (* c r))
        z (* s r)

        s (Math/sin b)
        c (Math/cos b)
        r r1
        x2 (* x c r)
        y2 (* x s r)
        z2 (* z r)]
    (.set vs x2 y2 z2)))

(defn circle [r1 theta]
  (doto vs
    (.set (* r1 (Math/cos theta))
          (* r1 (Math/sin theta))
          0)))

(let [vo   (THREE/Vector3.)
      vt   (THREE/Vector3.)
      vb   (THREE/Vector3.)
      vn   (THREE/Vector3.)
      mtbn (THREE/Matrix4.)
      e 0.001]
  (defn tbn [theta {:keys [n r1] :as state}]
    (doto vt
      (.copy (.copy vo (spine theta state)))
      (.sub (spine (+ theta e) state))
      (.multiplyScalar (/ 1.0 e))
      (.normalize))
    (if n
      (doto vb
        (.copy (circle r1 theta))
        (.sub (circle r1 (+ theta e)))
        (.multiplyScalar (/ 1 e)))
      (.copy vb vo))
    (.normalize vb)

    (.crossVectors vn vt vb)
    (.normalize vn)

    (.crossVectors vb vt vn)
    (.normalize vb)

    (doto mtbn
      (.set
       (.-x vt) (.-x vb) (.-x vn) (.-x vo)
       (.-y vt) (.-y vb) (.-y vn) (.-y vo)
       (.-z vt) (.-z vb) (.-z vn) (.-z vo)
       0        0        0        1))))

(defn area-expr [emit theta phi !state]
  (let [{:keys [r3] :as state} (.-state !state)
        m (tbn theta state)]
    (doto vs
      (.set 0
            (* r3 (Math/cos phi))
            (* r3 (Math/sin phi)))
      (.applyMatrix4 m))
    (emit (.-x vs)
          (.-y vs)
          (.-z vs))))

;; ## Animation

(defn setup
  "Returns a setup function that will only run ONE time."
  [f]
  (fn [^js box]
    (when (and box (not (.-created box)))
      (set! (.-created box) true)
      (f box))))

(defn opts->setup
  "Some core options, tidied up."
  [{:keys [background-color
           camera-position
           camera-proxy
           max-distance
           scale focus]}]
  (setup
   (fn [^js box]
     (when scale (.set box #js {:scale scale}))
     (when focus (.set box #js {:focus focus}))
     (let [three (.-three box)]
       (when max-distance
         (-> three .-controls .-maxDistance (set! max-distance)))
       (when-let [[x y z] camera-position]
         (-> three .-camera .-position (.set x y z)))
       (when camera-proxy
         (-> three .-camera .-proxy (set! true)))
       (when background-color
         (let [color (THREE/Color. background-color)]
           (-> three .-renderer (.setClearColor color 1.0))))))))

(def BareMathbox
  (r/adapt-react-class box/Mathbox))

(def ContainedMathbox
  (r/adapt-react-class box/ContainedMathbox))

(defn Mathbox
  "Same as `ContainedMathBox`, but with setup options.

  TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.

  :style maps to containerStyle."
  [{:keys [init style] :as opts} & children]
  (let [ref (cond (map? init) (opts->setup init)
                  (fn? init)  (setup init)
                  :else      (throw
                              (ex-info
                               "Invalid init." {:init init})))
        opts (-> opts
                 (dissoc :init :style)
                 (update :options (partial merge default-options))
                 (assoc :ref ref
                        :containerStyle style))]
    (into [:> box/ContainedMathbox opts] children)))
