# MathBox.cljs

A [Reagent][reagent-url] interface to the [MathBox][mathbox-url] mathematical
visualization library.

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

<p align="center">
  <img src=http://acko.net/files/mathbox2/cover1.jpg>
</p>

[MathBox][mathbox-url] is a library for rendering presentation-quality math
diagrams in a browser using WebGL. Built on top of [Three.js][threejs-url],
[Threestrap](https://github.com/unconed/threestrap) and
[ShaderGraph](https://github.com/unconed/shadergraph), it provides a clean API
to visualize mathematical relationships and animate them declaratively.

In simple use cases, it can elegantly draw 2D, 3D or 4D graphs, including
points, vectors, labels, wireframes and shaded surfaces.

In more advanced use, data can be processed inside MathBox, compiled into GPU
programs which can feed back into themselves. By combining shaders and
render-to-texture effects, you can create sophisticated visual effects,
including classic Winamp-style music visualizers.

[MathBox.cljs][github-url] extends MathBox (via
[MathBox-react][mathbox-react-url]) with a [Reagent][reagent-url] component that
makes it easy to define MathBox constructions inside of a user interface built
with ClojureScript.

## Quickstart

Install `MathBox.cljs` into your ClojureScript project using the instructions at
its Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; deps
{io.github.mentat-collective/mathbox.cljs
  {:git/sha "$GIT_SHA"}}
```

Require `mathbox` and `mathbox.primitives` in your ClojureScript namespace:

```clj
(ns my-app
  (:require [mathbox]
            [mathbox.primitives :as mb]
            [reagent.core :as reagent]))
```

Construct a `MathBox` scene by with the `mathbox/MathBox` component
initialization options to the `mathBox()` constructor:

```clj
[mathbox/MathBox
  {:container {:style {:height "400px" :width "100%"}}}]
```

Insert new MathBox nodes into the component tree by nesting components from
`mathbox.primitives` under the `mathbox/MathBox` instance.

> **Note** See [the cljdoc page for
> `mathbox.primitives`](https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT/api/mathbox.primitives)
> for a list of all primitives. Each sub-package has more specific docs listing
> all options supported for each primitive component.

The following code will set up a 3D Cartesian coordinate system with the
specified range and scale for its x, y and z axes, and then insert an `x` and
`y` axis into the scene:

```clj
[mathbox/MathBox
 {:container {:style {:height "400px" :width "100%"}}}
 [mb/Cartesian
  {:range [[-2 2] [-1 1] [-1 1]]
   :scale [2 1 1]}
  [mb/Axis {:axis 1}]
  [mb/Axis {:axis 2}]]]
```

Use your mouse to click and drag the camera's orientation, and zoom in and out:

![2023-01-19 11 32
59](https://user-images.githubusercontent.com/69635/213530497-22cdf2c2-bea6-4ef4-beea-fbebf73c85d4.gif)

See the project's [interactive documentation notebook](https://mathbox.mentat.org)
for more guides and examples.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://mathbox.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command in one terminal window to build and serve
the custom JS required by the notebook:

```
bb dev-notebook
```

In another terminal window, run

```
bb start-clerk
```

This should open a browser window to `http://localhost:7777` with the contents
of the documentation notebook. Any edits you make to `dev/mathbox/notebook.clj`
will be picked up and displayed in the browser on save.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

## License

Copyright © 2022-2023 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[MIT](LICENSE).

[build-status-url]: https://github.com/mentat-collective/mathbox.cljs/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/mathbox.cljs/actions/workflows/kondo.yml/badge.svg?branch=main
[cljdoc-url]: https://cljdoc.org/d/org.mentat/mathbox.cljs/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/mathbox.cljs
[clojars-url]: https://clojars.org/org.mentat/mathbox.cljs
[clojars]: https://img.shields.io/clojars/v/org.mentat/mathbox.cljs.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[mentat-slack-url]: https://clojurians.slack.com/archives/C041G9B1AAK
[github-url]: https://github.com/mentat-collective/mathbox.cljs
[threejs-url]: https://github.com/mrdoob/three.js
[mathbox-url]: https://github.com/unconed/mathbox
[reagent-url]: https://reagent-project.github.io/
[mathbox-react-url]: https://github.com/ChristopherChudzicki/mathbox-react
