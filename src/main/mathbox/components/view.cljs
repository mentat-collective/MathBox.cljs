(ns mathbox.components.view
  (:require [mathbox.components.view.cartesian]
            [mathbox.components.view.cartesian4]
            [mathbox.components.view.polar]
            [mathbox.components.view.spherical]
            [mathbox.components.view.stereographic]
            [mathbox.components.view.stereographic4]
            [mathbox.components.view.view]))

(def Cartesian mathbox.components.view.cartesian/Cartesian)
(def Cartesian4 mathbox.components.view.cartesian4/Cartesian4)
(def Polar mathbox.components.view.polar/Polar)
(def Spherical mathbox.components.view.spherical/Spherical)
(def Stereographic mathbox.components.view.stereographic/Stereographic)
(def Stereographic4 mathbox.components.view.stereographic4/Stereographic4)
(def View mathbox.components.view.view/View)
