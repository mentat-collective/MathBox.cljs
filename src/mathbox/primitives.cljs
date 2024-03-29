(ns mathbox.primitives
  "Imports all components from MathBox as Reagent components."
  (:refer-clojure :exclude [Repeat])
  (:require [mathbox.primitives.base]
            [mathbox.primitives.camera]
            [mathbox.primitives.data]
            [mathbox.primitives.draw]
            [mathbox.primitives.operator]
            [mathbox.primitives.overlay]
            [mathbox.primitives.present]
            [mathbox.primitives.rtt]
            [mathbox.primitives.shader]
            [mathbox.primitives.text]
            [mathbox.primitives.time]
            [mathbox.primitives.transform]
            [mathbox.primitives.view]))

(def Group mathbox.primitives.base/Group)
(def Inherit mathbox.primitives.base/Inherit)
(def Unit mathbox.primitives.base/Unit)
(def Camera mathbox.primitives.camera/Camera)
(def Area mathbox.primitives.data/Area)
(def Array mathbox.primitives.data/Array)
(def Interval mathbox.primitives.data/Interval)
(def Matrix mathbox.primitives.data/Matrix)
(def Scale mathbox.primitives.data/Scale)
(def Volume mathbox.primitives.data/Volume)
(def Voxel mathbox.primitives.data/Voxel)
(def Axis mathbox.primitives.draw/Axis)
(def Face mathbox.primitives.draw/Face)
(def Grid mathbox.primitives.draw/Grid)
(def Line mathbox.primitives.draw/Line)
(def Point mathbox.primitives.draw/Point)
(def Strip mathbox.primitives.draw/Strip)
(def Surface mathbox.primitives.draw/Surface)
(def Ticks mathbox.primitives.draw/Ticks)
(def Vector mathbox.primitives.draw/Vector)
(def Clamp mathbox.primitives.operator/Clamp)
(def Grow mathbox.primitives.operator/Grow)
(def Join mathbox.primitives.operator/Join)
(def Lerp mathbox.primitives.operator/Lerp)
(def Memo mathbox.primitives.operator/Memo)
(def Readback mathbox.primitives.operator/Readback)
(def Repeat mathbox.primitives.operator/Repeat)
(def Resample mathbox.primitives.operator/Resample)
(def Slice mathbox.primitives.operator/Slice)
(def Split mathbox.primitives.operator/Split)
(def Spread mathbox.primitives.operator/Spread)
(def Subdivide mathbox.primitives.operator/Subdivide)
(def Swizzle mathbox.primitives.operator/Swizzle)
(def Transpose mathbox.primitives.operator/Transpose)
(def Dom mathbox.primitives.overlay/Dom)
(def Html mathbox.primitives.overlay/Html)
(def Move mathbox.primitives.present/Move)
(def Play mathbox.primitives.present/Play)
(def Present mathbox.primitives.present/Present)
(def Reveal mathbox.primitives.present/Reveal)
(def Slide mathbox.primitives.present/Slide)
(def Step mathbox.primitives.present/Step)
(def Compose mathbox.primitives.rtt/Compose)
(def Rtt mathbox.primitives.rtt/Rtt)
(def Shader mathbox.primitives.shader/Shader)
(def Format mathbox.primitives.text/Format)
(def Label mathbox.primitives.text/Label)
(def Retext mathbox.primitives.text/Retext)
(def Text mathbox.primitives.text/Text)
(def Clock mathbox.primitives.time/Clock)
(def Now mathbox.primitives.time/Now)
(def Fragment mathbox.primitives.transform/Fragment)
(def Layer mathbox.primitives.transform/Layer)
(def Mask mathbox.primitives.transform/Mask)
(def Transform mathbox.primitives.transform/Transform)
(def Transform4 mathbox.primitives.transform/Transform4)
(def Vertex mathbox.primitives.transform/Vertex)
(def Cartesian mathbox.primitives.view/Cartesian)
(def Cartesian4 mathbox.primitives.view/Cartesian4)
(def Polar mathbox.primitives.view/Polar)
(def Spherical mathbox.primitives.view/Spherical)
(def Stereographic mathbox.primitives.view/Stereographic)
(def Stereographic4 mathbox.primitives.view/Stereographic4)
(def View mathbox.primitives.view/View)
