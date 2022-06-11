# mathbox-cljs

A light ClojureScript wrapper over [mathbox-react][MBR].

[![Build Status](https://github.com/mentat-collective/mathbox-cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mathbox-cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/sicmutils/sicmutils/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/mentat-collective/mathbox-cljs)](https://cljdoc.org/d/mentat-collective/mathbox-cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mathbox-cljs.svg)](https://clojars.org/org.mentat/mathbox-cljs)

- reagent versions of components
- SCI setup
- storybook examples

## Mathbox Examples

- TODO get the examples directory linked

## Storybook

```sh
npm run watch
```

Starts shadow-cljs in a watcher,compiling the stories namespaces.

In a separate terminal:

```sh
npm run start-storybook
```

starts a webserver.

### Publishing to Github Pages

```sh
npm run deploy-storybook
```

## License

[MIT](LICENSE).

[THREEJS]: https://github.com/mrdoob/three.js
[MATHBOX]: https://github.com/unconed/mathbox
[MBR]: https://github.com/ChristopherChudzicki/mathbox-react
