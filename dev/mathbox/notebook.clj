;; # mathbox.cljs
;;
;; _Generated from [this notebook](https://github.com/mentat-collective/mathbox.cljs/blob/$GIT_SHA/dev/mathbox/notebook.clj)!_
;;
;; See the [Github project](https://github.com/mentat-collective/mathbox.cljs)
;; for more details.
;;
;; More detailed examples live
;; at [Storybook](https://mentat-collective.github.io/mathbox.cljs/storybook).
;;
;; ## Usage
;;
;; ```clj
;; ;; deps
;; {org.mentat/mathbox.cljs {:git/sha "$GIT_SHA"}}
;;
;; ;; namespace
;; (ns my-app
;;   (:require [mathbox]
;;             [mathbox.primitives :as mb]
;;             [reagent.core :as reagent]))
;;```
;;
;; Okay, here we go.

^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.notebook
  (:require [mathbox.clerk-ui :refer [cljs]]))

;; ### Color Cube

(cljs
 [mathbox/Mathbox
  {:style {:height "400px" :width "100%"}
   :init {:background-color 0xeeeeee
          :max-distance 4
          :camera-position [2.5 1 2.5]
          :scale 720 :focus 1}}
  [mb/Cartesian {:range [[0 1] [0 1] [0 1]]}
   [mb/Volume
    {:width 8 :height 5 :depth 20
     :items 1
     :channels 4
     :live false
     :expr (fn [emit x y z]
             (emit x y z 1.0))}]
   [mb/Point
    {:points "<"
     :colors "<"
     :color 0xffffff
     :size 20}]]])
