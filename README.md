# mathbox-cljs

A light ClojureScript wrapper over [mathbox-react][MBR].

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
