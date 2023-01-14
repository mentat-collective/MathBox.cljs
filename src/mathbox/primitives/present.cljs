(ns mathbox.primitives.present
  (:require ["mathbox-react" :as box]
            [mathbox.macros :refer [defprim]]))

(defprim box/Move
  "*Move elements in/out on transition*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :delay `0` (number) - Transition delay
  :delayEnter `null` (nullable number) - Transition enter delay, e.g. `0.3`
  :delayExit `null` (nullable number) - Transition exit delay, e.g. `0.3`
  :duration `0.3` (number) - Transition duration
  :durationEnter `0.3` (number) - Transition enter duration
  :durationExit `0.3` (number) - Transition exit duration
  :enter `null` (nullable number) - Enter state, e.g. `0.5`
  :exit `null` (nullable number) - Exit state, e.g. `0.5`
  :from `[0, 0, 0, 0]` (vec4) - Enter from
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
  :stagger `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`
  :to `[0, 0, 0, 0]` (vec4) - Exit to")

(defprim box/Play
  "*Play a sequenced animation*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :delay `0` (number) - Play delay
  :ease `\"cosine\"` (ease) - Animation ease (linear, cosine, binary, hold)
  :from `0` (number) - Play from
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :loop `false` (bool) - Loop
  :pace `1` (number) - Play pace
  :realtime `false` (bool) - Run on real time, not clock time
  :script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
  :speed `1` (number) - Play speed
  :target `\"<\"` (select) - Animation target
  :to `Infinity` (number) - Play until
  :trigger `1` (nullable number) - Trigger on step")

(defprim box/Present
  "*Present a tree of slides*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :directed `true` (bool) - Apply directional transitions
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :index `1` (number) - Present slide number
  :length `0` (number) - Presentation length (computed)")

(defprim box/Reveal
  "*Reveal/hide elements on transition*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :delay `0` (number) - Transition delay
  :delayEnter `null` (nullable number) - Transition enter delay, e.g. `0.3`
  :delayExit `null` (nullable number) - Transition exit delay, e.g. `0.3`
  :duration `0.3` (number) - Transition duration
  :durationEnter `0.3` (number) - Transition enter duration
  :durationExit `0.3` (number) - Transition exit duration
  :enter `null` (nullable number) - Enter state, e.g. `0.5`
  :exit `null` (nullable number) - Exit state, e.g. `0.5`
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :stagger `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`")

(defprim box/Slide
  "*Presentation slide*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :early `0` (number) - Appear early steps
  :from `null` (nullable number) - Appear from step, e.g. `2`
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :late `0` (number) - Stay late steps
  :order `0` (nullable number) - Slide order
  :steps `1` (number) - Slide steps
  :to `null` (nullable number) - Disappear on step, e.g. `4`")

(defprim box/Step
  "*Step through a sequenced animation*

  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  :delay `0` (number) - Step delay
  :duration `0.3` (number) - Step duration
  :ease `\"cosine\"` (ease) - Animation ease (linear, cosine, binary, hold)
  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  :pace `0` (number) - Step pace
  :playback `\"linear\"` (ease) - Playhead ease (linear, cosine, binary, hold)
  :realtime `false` (bool) - Run on real time, not clock time
  :rewind `2` (number) - Step rewind factor
  :script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
  :skip `true` (bool) - Speed up through skips
  :speed `1` (number) - Step speed
  :stops `null` (nullable number array) - Playhead stops, e.g. `[0, 1, 3, 5]`
  :target `\"<\"` (select) - Animation target
  :trigger `1` (nullable number) - Trigger on step")
