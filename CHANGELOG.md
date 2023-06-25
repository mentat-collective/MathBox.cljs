# Changelog

## [unreleased]

- #16:

  - Adds support for keywords `:orbit` or `:trackball` in the `[:threestrap
    :controls :klass]` position of the options supplied to
    `mathbox.core/MathBox`, vs having to supply the class yourself.

  - Automatically converts a 3-vector in the `[:threestrap :camera :up]`
    position of the options supplied to `mathbox.core/MathBox` into a proper
    threejs `Vector3`, allowing easier customization of the up direction without
    a threejs import.

  - removes `defprim` in favor of bare `def`, and all supporting clj-kondo
    hooks. This achieves compatibility with Portal and other systems that load
    `MathBox.cljs` namespaces via SCI.

  - Bumps `mathbox-react` to 0.2.2 and adds a version range to the threejs
    dependency to keep it below v163 when WebGL1 support expires.

## [0.2.0]

- #14:

  - Adds a link to the MathBox example index back to README.md.

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
