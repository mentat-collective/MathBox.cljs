(ns mathbox.primitives.view
  (:require [mathbox.primitives.view.cartesian]
            [mathbox.primitives.view.cartesian4]
            [mathbox.primitives.view.polar]
            [mathbox.primitives.view.spherical]
            [mathbox.primitives.view.stereographic]
            [mathbox.primitives.view.stereographic4]
            [mathbox.primitives.view.view]))

(def Cartesian mathbox.primitives.view.cartesian/Cartesian)
(def Cartesian4 mathbox.primitives.view.cartesian4/Cartesian4)
(def Polar mathbox.primitives.view.polar/Polar)
(def Spherical mathbox.primitives.view.spherical/Spherical)
(def Stereographic mathbox.primitives.view.stereographic/Stereographic)
(def Stereographic4 mathbox.primitives.view.stereographic4/Stereographic4)
(def View mathbox.primitives.view.view/View)
