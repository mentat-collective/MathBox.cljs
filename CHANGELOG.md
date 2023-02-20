# Changelog

## [unreleased]

## [0.2.0]

- #14:

  - Renames the `mathbox` namespace to `mathbox.core` to prevent collisions with
    the `"mathbox"` package import. I was hesitant to do this, but of course you
    can always alias `mathbox.core` to `mathbox` when you require it.

  - Adds a `deps-new` template that sets up a basic Clerk project with
    `MathBox.cljs` installed as a dependency. [The template lives
    here](https://github.com/mentat-collective/MathBox.cljs/tree/main/resources/mathbox/clerk).

  - Adds a `provided` dependency on SCI to `pom.xml`, so that cljdoc builds
    succeed.

  - Adds `mathbox.sci` with SCI namespace objects for all namespaces, plus a
    `namespaces` map and a `config` for easy installation into SCI. The
    namespaces follows the patterns set by the
    https://github.com/babashka/sci.configs repo.

    - `mathbox.sci/install!` allows the user to install `MathBox.cljs` into
      SCI's shared context with one mutating call.

  - Migrates the project over to `clerk-utils` and all of its new custom build
    stuff. This let me simplify development, update the README and DEVELOPING
    pages and kill my shadow-cljs.edn file. `user.clj` gets quite a bit simpler
    too.

  - Adds notes to the interactive docs guide about using the library with SCI
    and with Clerk

  - Upgrades to Clerk version `fad499407d979916d21b33cc7e46e73f7a485e37` for the
    template and project docs notebook

## 0.1.0

First real release!

- Added full complement of components
- Published fleshed-out documentation notebook at https://mathbox.mentat.org
