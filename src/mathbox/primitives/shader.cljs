(ns mathbox.primitives.shader
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def Shader
  "*Custom shader snippet*

  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:code`: `\"\"` (string) - Shader code
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:language`: `\"glsl\"` (string) - Shader language
  - `:sources`: `null` (nullable select) - Sampler sources, e.g. `[\"#pressure\", \"#divergence\"]`
  - `:uniforms`: `null` (nullable object) - Shader uniform objects (three.js style), e.g. `{ time: { type: 'f', value: 3 }}`"
  (r/adapt-react-class box/Shader))
