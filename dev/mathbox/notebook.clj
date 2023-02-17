^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.notebook
  (:require [mentat.clerk-utils.docs :as docs]
            [mentat.clerk-utils.show :refer [show-sci]]
            [nextjournal.clerk :as clerk]))

^{::clerk/visibility {:code :hide :result :hide}}
(clerk/eval-cljs
 ;; These aliases only apply inside this namespace.
 '(require '[mathbox.core :as mathbox])
 '(require '[mathbox.primitives :as mb])
 '(require '[reagent.core :as reagent]))

;; # MathBox.cljs

;; A [Reagent](https://reagent-project.github.io/) interface to
;; the [MathBox](https://github.com/unconed/mathbox) mathematical visualization
;; library.
;;
;; [![Build Status](https://github.com/mentat-collective/mathbox.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mathbox.cljs/actions/workflows/kondo.yml)
;; [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/mathbox.cljs/blob/main/LICENSE)
;; [![cljdoc badge](https://cljdoc.org/badge/org.mentat/mathbox.cljs)](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT)
;; [![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mathbox.cljs.svg)](https://clojars.org/org.mentat/mathbox.cljs)
;;
;; > The interactive documentation on this page was generated from [this source
;; > file](https://github.com/mentat-collective/mathbox.cljs/blob/$GIT_SHA/dev/mathbox/notebook.clj)
;; > using [Clerk](https://github.com/nextjournal/clerk). Follow
;; > the [instructions in the
;; > README](https://github.com/mentat-collective/mathbox.cljs/tree/main#interactive-documentation-via-clerk)
;; > to run and modify this notebook on your machine!
;; >
;; > See the [Github
;; > project](https://github.com/mentat-collective/mathbox.cljs) for more
;; > details, and the [cljdoc
;; > page](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/doc/readme) for
;; > detailed API documentation.
;;
;; ## What is MathBox?
;;
;; MathBox is a library for rendering presentation-quality math diagrams in a
;; browser using WebGL. Built on top
;; of [Three.js](https://threejs.org/), [Threestrap](https://github.com/unconed/threestrap)
;; and
;; [ShaderGraph](https://github.com/unconed/shadergraph), it provides a clean
;; API to visualize mathematical relationships and animate them declaratively.

;; In simple use cases, it can elegantly draw 2D, 3D or 4D graphs, including
;; points, vectors, labels, wireframes and shaded surfaces.

;; In more advanced use, data can be processed inside MathBox, compiled into GPU
;; programs which can feed back into themselves. By combining shaders and
;; render-to-texture effects, you can create sophisticated visual effects,
;; including classic Winamp-style music visualizers.
;;
;; For example, here is an example of a dynamically updating surface, monitored
;; by an orbiting camera:

^{:nextjournal.clerk/width :wide
  :nextjournal.clerk/visibility {:code :fold}}
(show-sci
 [mathbox.examples.test.face/Face])

;; > The code for this particular example
;; > lives [here](https://github.com/mentat-collective/mathbox.cljs/tree/main/dev/mathbox/examples/test/face.cljc).
;; > Visit the [Examples
;; > index](https://mathbox.mentat.org/dev/mathbox/examples/index.html) to see
;; > many more.

;; [MathBox.cljs](https://github.com/mentat-collective/mathbox.cljs) extends
;; MathBox (via [MathBox-react](https://github.com/ChristopherChudzicki/mathbox-react))
;; with a [Reagent](https://reagent-project.github.io/) component that makes it
;; easy to define MathBox constructions inside of a user interface built with
;; ClojureScript.

;; ## Quickstart
;;
;; Install `MathBox.cljs` into your ClojureScript project using the instructions
;; at its Clojars page:

;; [![Clojars
;;    Project](https://img.shields.io/clojars/v/org.mentat/mathbox.cljs.svg)](https://clojars.org/org.mentat/mathbox.cljs)
;;
;; Or grab the most recent code using a Git dependency:

^{::clerk/visibility {:code :hide}}
(docs/git-dependency
 "mentat-collective/mathbox.cljs")

;; Require `mathbox.core` and `mathbox.primitives` in your ClojureScript
;; namespace:

;; ```clj
;; (ns my-app
;;   (:require [mathbox.core :as mathbox]
;;             [mathbox.primitives :as mb]
;;             [reagent.core :as reagent]))
;; ```
;;
;; You'll also need to include the stylesheets that ship with `MathBox`. If
;; you're using Clerk
;; and [`clerk-utils`](https://github.com/mentat-collective/clerk-utils), add
;; this form to `dev/user.clj`:

;; ```clj
;; (mentat.clerk-utils.css/set-css!
;;  "https://unpkg.com/mathbox/build/mathbox.css")
;; ```
;;
;; Otherwise find some way to load this CSS file in your project's header.
;;
;; ## Your First Scene

;; You create MathBox.cljs scenes by declaring a MathBox component tree, similar
;; to writing an HTML DOM using a Reagent component tree.

;; To show anything in MathBox, you need to establish four things:

;; 1) A camera that is looking at...
;; 2) A coordinate system which contains...
;; 3) Geometrical data represented via...
;; 4) A choice of shape to draw it as.

;; For this example, we'll build a 2D rectangular view containing an array of
;; points, drawn as a continuous line.

;; ### Start with the camera

;; The default 3D camera starts out at `[0 0 0]` (i.e. X, Y, Z), right in the
;; middle of our diagram. +Z goes out of the screen and -Z into the screen.

;; Declare a scene with `mathbox/MathBox` (along with some options for the
;; container).
;;
;; Insert a `mathbox.primitives/Camera` component and pull back its `:position`
;; 3 units to `[0 0 3]`. We also set `:proxy` to true: this allows interactive
;; camera controls to override our given position.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container
   {:style {:height "400px" :width "100%"}}}
  [mb/Camera
   {:position [0 0 3]
    :proxy true}]])

;; We now have an empty scene with a loading bar and nothing to look at. Our
;; MathBox DOM now looks like:

;; ```jsx
;; <root>
;;   <camera proxy={true} position={[0, 0, 3]} />
;; </root>
;; ```

;; > See [Printing the DOM](#printing-the-dom) below for details on how to
;; > generate this representation at the console.

;; If you pass a one-argument function via the `:ref` argument to any component,
;; you'll receive a MathBox selection that points to the `<camera />` element.

;; ### Add a coordinate system

;; Now we're going to set up a simple 2D cartesian coordinate system. We'll make
;; it twice as wide as high.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}]])

;; The `:range` specifies the area we're looking at as a vector of pairs: `[-2
;; 2]` in the `X` direction, `[-1, 1]` in the `Y` direction.

;; The `scale` specifies the projected size of the view, in this case `[2 1]`,
;; i.e. 2 `X` units and 1 `Y` unit.

;; Add two axes and a grid as children of the `mb/Cartesian` component so we can
;; finally see something:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3}]
   [mb/Axis {:axis 2 :width 3}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]]])

;; You should see gridlines appear in 50% gray, the default color, at the given
;; widths. The DOM now looks like this:

;; ```jsx
;; <root>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} />
;;     <axis axis={2} width={3} />
;;     <grid width={2} divideX={20} divideY={10} />
;;   </cartesian>
;; </root>
;; ```

;; You might make your axes black by passing the `:color "black"` attribute:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]]])

;; As the on-screen size of elements depends on the position of the camera, we
;; can calibrate our units by setting the `focus` on the `<root>` to match the
;; camera distance. Set options on `<root>` by passing them to
;; `mathbox/MathBox`:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]]])

;; Which gives us:

;; ```jsx
;; <root focus={3}>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} color="black" />
;;     <axis axis={2} width={3} color="black" />
;;     <grid width={2} divideX={20} divideY={10} />
;;   </cartesian>
;; </root>
;; ```

;; ### Add some data and draw it

;; Now we'll draw a moving sine wave. First we create an `mb/Interval`. This is
;; a 1D array, sampled over the cartesian view's range. It contains an `:expr`,
;; an expression to generate the data points.

;; We [make a new
;; component](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md)
;; that generates 64 points, each with two `:channels`, i.e. `X` and `Y` values.
;; This value sets the number of items that are emitted with each call to
;; `emit`.

(show-sci
 (defn Data []
   [mb/Interval
    {:expr (fn [emit x _i t]
             (emit x (Math/sin (+ x t))))
     :width 64
     :channels 2}]))

;; Here, `x` is the sampled X coordinate, `_i` is the array index (0-63), and
;; `t` is clock time in seconds, starting from 0. The use of `emit` is similar
;; to `return`ing a value. It is used to allow multiple values to be emitted
;; very efficiently.

;; Once we have the data, we can draw it, by [creating a new
;; component](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md)
;; called `Curve` that adds on an `mb/Line`. The target of the line is, by
;; default, the previous entry in the component tree.
;;
;; > Note the use of [React fragments](https://reactjs.org/docs/fragments.html)
;; here; we can bundle up many components by putting them into a vector starting
;; with `:<>`.

(show-sci
 (defn Curve []
   [:<>
    [Data]
    [mb/Line {:width 5
              :color "#3090FF"}]]))

;; Note that we've used an HTML hex color instead of a named color. CSS syntax
;; like `"rgb(255,128,53)"` works too.

;; Add a `Curve` instance to the component tree:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]
   [Curve]]])

;; The DOM now looks like:

;; ```jsx
;; <root focus={3}>
;;   <camera proxy={true} position={[0, 0, 3]} />
;;   <cartesian range={[[-2, 2], [-1, 1]]} scale={[2, 1]}>
;;     <axis axis={1} width={3} color="black" />
;;     <axis axis={2} width={3} color="black" />
;;     <grid width={2} divideX={20} divideY={10} />
;;     <interval expr={(emit, x, i, t) => {
;;           emit(x, Math.sin(x + t));
;;         }} width={64} channels={2} />
;;     <line width={5} color="#3090FF" />
;;   </cartesian>
;; </root>
;; ```

;; ### Add more shapes

;; The nice thing about separating data from shape is that you can draw the same
;; data multiple ways. For example, add on an `mb/Point` component to draw
;; points as well along them length of the data interval:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]
   [Curve]
   [mb/Point {:size 8 :color "#3090FF"}]]])

;; The different shapes available are documented in
;; the [`mathbox.primitives.draw`
;; namespace](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.primitives.draw)
;; Points, lines and surfaces are pretty obvious and do what they say on the
;; tin. e.g. Fill a 2D `mb/Area` with data and pass it to a `mb/Surface` to draw
;; a solid triangle mesh.

;; For vectors, faces and strips, the situation changes. To draw 64 vectors as
;; arrows, you need 128 points: a start and end for each. Thus the data has to
;; change. We set `items` to 2 and emit two points per iteration. We also add on
;; a green `mb/Vector` to draw the data:

(show-sci
 (defn Vector []
   [:<>
    [mb/Interval
     {:expr (fn [emit x _i t]
              (emit x 0)
              (emit x (- (Math/sin (+ x t)))))
      :width 64
      :channels 2
      :items 2}]
    [mb/Vector
     {:end true
      :width 5
      :color "#50A000"}]]))

;; > As an alternative to `:expr`, you can also supply an array of `:data`,
;; > either constant or changing, flat or nested. MathBox will iterate over it
;; > and emit it for you, picking up any live data. If your data does not
;; > change, you can set `:live false` to optimize.

;; Render the scene again after adding the new `Vector` component to the end:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]
   [Curve]
   [mb/Point {:size 8 :color "#3090FF"}]

   [Vector]]])

;; ### Add some floating labels

;; Finally we'll label our coordinate system. First we need to establish a
;; `mb/Scale`, which will divide our view into nice intervals.

;; ```clj
;; [mb/Scale {:divide 10}]
;; ```

;; We can draw our scale as tick marks with `mb/Ticks`:

;; ```clj
;; [mb/Ticks {:width 5 :size 15 :color "black"}]
;; ```

;; Now we need to format our numbers into rasterized text:

;; ```clj
;; [mb/Format {:digits 2 :weight "bold"}]
;; ```

;; And finally draw the text as floating labels:

;; ```clj
;; [mb/Label {:color "red"
;;            :zIndex 1}]
;; ```

;; Adding all of these components yields the following scene:

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]
   [Curve]
   [mb/Point {:size 8 :color "#3090FF"}]

   [Vector]

   [mb/Scale {:divide 10}]
   [mb/Ticks {:width 5 :size 15 :color "black"}]
   [mb/Format {:digits 2 :weight "bold"}]
   [mb/Label {:color "red"
              :zIndex 1}]]])

;; Here we apply `:zIndex` similar to CSS to ensure the labels overlap in 2D
;; rather than being placed in 3D. It specifies a layer index, with 0 being the
;; default, and layers `1...n` stacking on top. Negative `:zIndex` is not
;; allowed.

;; > Unlike CSS, large `:zIndex` values are not recommended, as the higher the
;; > `:zIndex` the less depth resolution you have.

;; ### Make it move

;; Finally we'll add on a little bit of animation by adding a `mb/Play` block.

^{:nextjournal.clerk/width :wide}
(show-sci
 [mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}
   :focus 3}
  [mb/Camera {:position [0 0 3]
              :proxy true}]
  [mb/Cartesian
   {:range [[-2 2] [-1 1]]
    :scale [2 1]}

   [mb/Axis {:axis 1 :width 3 :color "black"}]
   [mb/Axis {:axis 2 :width 3 :color "black"}]
   [mb/Grid {:width 2 :divideX 20 :divideY 10}]
   [Curve]
   [mb/Point {:size 8 :color "#3090FF"}]

   [Vector]

   [mb/Scale {:divide 10}]
   [mb/Ticks {:width 5 :size 15 :color "black"}]
   [mb/Format {:digits 2 :weight "bold"}]
   [mb/Label {:color "red"
              :zIndex 1}]]
  [mb/Play
   {:target "cartesian"
    :pace 5
    :to 2
    :loop true
    :script
    [{:props {:range [[-2 2] [-1 1]]}}
     {:props {:range [[-4 4] [-2 2]]}}
     {:props {:range [[-2 2] [-1 1]]}}]}]])

;; Here `:script` defines the keyframes we'll be animating through. We specify
;; `:props` will change, namely the `:range`. We pass in the keyframes as an
;; array, which will assign them to evenly spaced keyframes `(0, 1, 2)`.

;; We set the `:pace` of the animation to 5 seconds per step, tell it to play
;; till keyframe time `2` and to `:loop` afterwards.

;; ## MathBox.cljs via SCI
;;
;; `MathBox.cljs` is compatible with [SCI, the Small Clojure
;; Interpreter](https://github.com/babashka/sci).
;;
;; To install `MathBox.cljs` into your SCI context, require
;; the [`mathbox.sci`](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.sci)
;; namespace and call `mathbox.sci/install!`:

;; ```clj
;; (ns myproject.sci-extensions
;;   (:require [mathbox.sci]))

;; (mathbox.sci/install!)
;; ```
;;
;; If you want more granular control, see the [cljdoc page for
;; `mathbox.sci`](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.sci)
;; for an SCI config and distinct SCI namespace objects that you can piece
;; together.
;;
;; > Note that `MathBox.cljs` does not ship with a dependency on SCI, so you'll
;; > need to install your own version.
;;
;; ## MathBox.cljs via Clerk
;;
;; Using `MathBox.cljs` with Nextjournal's [Clerk](https://clerk.vision/) gives
;; you the ability to write notebooks like this one with embedded MathBox
;; constructions.
;;
;; Doing this requires that you generate a custom ClojureScript build for your
;; Clerk project. The easiest way to do this for an existing project is with
;; the [`clerk-utils` project](https://clerk-utils.mentat.org/). Follow the
;; instructions on the [`clerk-utils` guide for custom
;; ClojureScript](https://clerk-utils.mentat.org/#custom-clojurescript-builds).
;;
;; If this is your first time using Clerk, use the [`mathbox/clerk` template
;; described below](#project-template) to generate a new project with all steps
;; described in ["MathBox.cljs via SCI"](#mathbox.cljs-via-sci) already
;; completed.

;; ## Project Template
;;
;; `MathBox.cljs` includes
;; a [`deps-new`](https://github.com/seancorfield/deps-new) template called
;; [`mathbox/clerk`](https://github.com/mentat-collective/mathbox.cljs/tree/main/resources/mathbox/clerk)
;; that makes it easy to configure a new Clerk project with everything described
;; in ["MathBox.cljs via SCI"](#mathbox.cljs-via-sci) already configured.

;; First, install the [`deps-new`](https://github.com/seancorfield/deps-new) tool:

;; ```sh
;; clojure -Ttools install io.github.seancorfield/deps-new '{:git/tag "v0.4.13"}' :as new
;; ```

;; To create a new Clerk project based on
;; [`mathbox/clerk`](https://github.com/mentat-collective/mathbox.cljs/tree/main/resources/mathbox/clerk)
;; in a folder called `my-notebook-project`, run the following command:

^{::clerk/visibility {:code :hide}}
(clerk/md
 (format "
```sh
clojure -Sdeps '{:deps {io.github.mentat-collective/mathbox.cljs {:git/sha \"%s\"}}}' \\
-Tnew create \\
:template mathbox/clerk \\
:name myusername/my-notebook-project
```" (docs/git-sha)))

;; The `README.md` file in the generated project contains information on how to
;; develop within the new project.

;; If you have an existing Clerk notebook project and are considering adding
;; `MathBox.cljs`, you might consider
;; using [`mathbox/clerk`](https://github.com/mentat-collective/mathbox.cljs/tree/main/resources/mathbox/clerk)
;; to get some ideas on how to structure your own project.

;; ## Guides
;;
;; The following sequence of guides is a work in progress. Each section is
;; either filled out, or holds notes on all of the stuff that I'd like to
;; document.

;; ### Configuring MathBox

;; TODO Talk about how to configure the MathBox component etc

;; What is threestrap, how does it all relate?
;;
;; #### Threestrap configuration

;; ### Supported Primitives
;;
;; Link to the examples directory, and to the cljdoc.

;; ### Reactivity

;; ### Examples Directory
;;
;; ### Which components can nest?

;; - "view",
;; - "cartesian",
;; - "cartesian4",
;; - "polar",
;; - "spherical",
;; - "stereographic",
;; - "stereographic4",
;; - "transform",
;; - "transform4",
;; - "vertex",
;; - "fragment",
;; - "layer",
;; - "mask",
;; - "group",
;; - "inherit",
;; - "root",
;; - "unit",
;; - "rtt",
;; - "clock",
;; - "now",
;; - "move",
;; - "present",
;; - "reveal",
;; - "slide",

;; ### Options vs Binds
;;
;; ### Clumping Components with Fragments
;;
;; ### Printing the DOM
;;
;; This is hard to do now because we don't have an obvious hook spot.

;; ### Control Types

;; Talk about orbitcontrols etc...

;; ```clj
;; ["three/examples/jsm/controls/OrbitControls.js" :as OrbitControls]
;; ```

;; ## Glossary

;; ### DOM

;; * DOM - Document Object Model. In general, refers to the HTML on the page. In MathBox, refers to the virtual DOM of nodes and their hierarchical structure.
;; * Node - An instance of a primitive, inserted into the MathBox DOM.
;; * Primitive - One of the basic building blocks of MathBox.
;; * Prop or Property - An individual value set on a node. Collectively *props*.
;; * Selection - A subset of the DOM. Can be the entire DOM or all nodes matching a selector. Selections typically match a CSS-like selector, for example the name of a primitive (`"camera"`), an id (`"#colors"`), or a class (`".points"`).

;; ### Graphics

;; * RTT - Render To Texture. Rather than drawing directly to the screen, renders to an image that can be processed further.
;; * Shader - A program written in GLSL that runs on the GPU. GLSL syntax is similar to C++.
;; * [ShaderGraph](https://github.com/unconed/shadergraph) - A component/dependency of MathBox that dynamically compiles small GLSL functions (snippets) into a single shader.
;; * [Three.js](http://threejs.org/) - A popular library for WebGL. Used by MathBox for cameras and controls.
;; * [Threestrap](https://github.com/unconed/threestrap) - A bootstrapping tool to set options for Three.js.
;; * WebGL - JavaScript API for rendering 3D scenes, used by MathBox.

;; ### Data

;; * `expr` - A prop on data primitives that expects a function, whose arguments are:
;; * `emit` - Another function. When called, its arguments become data.
;; * `x, y, z` - Up to three numbers indicating the location of the current point. Interval (1D), Area (2D), and Volume (3D) will evenly sample the current view for these coordinates. If you don't need them, use Array, Matrix, or Voxel, which omit these arguments.
;; * `i, j, k` - One to three indices of the current point.
;; * `t` - Time elapsed since program start, in seconds.
;; * `d` - Time delta since last frame, in seconds.
;; * Width - The size of the data in the *x* direction, i.e. the number of rows.
;; * Height - The size of the data in the *y* direction, i.e. the number of columns.
;; * Depth - The size of the data in the *z* direction, i.e. the number of stacks.
;; * Items - The size of the data in the *w* direction, i.e. the number of data points per spatial location. The number of times `emit` is called in the `expr` function.
;; * Channels - How many numbers are associated with a data point. The number of arguments passed to `emit`. This is not an array dimension; it is how many numbers make up one array element.
;; * History - The process of storing previous 1D or 2D data in an unused dimension.
;; * Swizzling - The process of isolating, reordering, and/or duplicating elements of a vector, by listing indices. For example, the swizzle `"yxz"` switches x and y. The `swizzle` primitive operates on array elements; the `transpose` primitive operates on the dimensions of the array itself.

;; ## Who is using MathBox / MathBox.cljs?

;; The following sites are using MathBox or MathBox-react:

;; - [Math3D online graphing calculator](https://www.math3d.org/)
;; - [KineticGraphs JS Engine](https://kineticgraphs.org/) ([code](https://github.com/cmakler/kgjs))
;; - [Textbook: "Interactive Linear Algebra"](https://textbooks.math.gatech.edu/ila/) ([code](https://github.com/QBobWatson/ila))
;; - Many visualizations at [Sam Zhang's homepage](https://sam.zhang.fyi/#projects)
;; - Jesse Bettencourt's [Torus Knot Fibration](http://jessebett.com/TorusKnotFibration/) Master's project ([code](https://github.com/jessebett/TorusKnotFibration))
;; - [Interactive knot visualizations](https://rockey-math.github.io/mathbox/graph3d-curve)

;; And the many demos listed on [this
;; thread](https://groups.google.com/g/mathbox/c/Uvyb5fHaLq4) of the [MathBox
;; Google group](https://groups.google.com/forum/#!forum/mathbox).

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!

;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.
;;
;; For more information on me and my work, visit https://samritchie.io.

;; ## License

;; Copyright © 2022 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/mathbox.cljs/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/mathbox.cljs/blob/main/LICENSE).
