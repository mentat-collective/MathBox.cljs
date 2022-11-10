;; Note that, I THINK, we are following this style:
;; https://github.com/arttuka/reagent-material-ui

(ns mathbox.primitives
  "Imports all components from Mathbox as Reagent components.
   Importing components from their own namespaces is preferred due to bundle size.

   Requiring this namespace causes the whole @mui/material package to be
  included in the final bundle... IN THEORY!"
  (:refer-clojure :exclude [Repeat])
  (:require [mathbox.primitives.base.group]
            [mathbox.primitives.base.inherit]
            [mathbox.primitives.base.root]
            [mathbox.primitives.base.unit]
            [mathbox.primitives.camera.camera]
            [mathbox.primitives.data.area]
            [mathbox.primitives.data.array]
            [mathbox.primitives.data.interval]
            [mathbox.primitives.data.matrix]
            [mathbox.primitives.data.scale]
            [mathbox.primitives.data.volume]
            [mathbox.primitives.data.voxel]
            [mathbox.primitives.draw.axis]
            [mathbox.primitives.draw.face]
            [mathbox.primitives.draw.grid]
            [mathbox.primitives.draw.line]
            [mathbox.primitives.draw.point]
            [mathbox.primitives.draw.strip]
            [mathbox.primitives.draw.surface]
            [mathbox.primitives.draw.ticks]
            [mathbox.primitives.draw.vector]
            [mathbox.primitives.operator.clamp]
            [mathbox.primitives.operator.grow]
            [mathbox.primitives.operator.join]
            [mathbox.primitives.operator.lerp]
            [mathbox.primitives.operator.memo]
            [mathbox.primitives.operator.readback]
            [mathbox.primitives.operator.repeat]
            [mathbox.primitives.operator.resample]
            [mathbox.primitives.operator.slice]
            [mathbox.primitives.operator.split]
            [mathbox.primitives.operator.spread]
            [mathbox.primitives.operator.subdivide]
            [mathbox.primitives.operator.swizzle]
            [mathbox.primitives.operator.transpose]
            [mathbox.primitives.overlay.dom]
            [mathbox.primitives.overlay.html]
            [mathbox.primitives.present.move]
            [mathbox.primitives.present.play]
            [mathbox.primitives.present.present]
            [mathbox.primitives.present.reveal]
            [mathbox.primitives.present.slide]
            [mathbox.primitives.present.step]
            [mathbox.primitives.rtt.compose]
            [mathbox.primitives.rtt.rtt]
            [mathbox.primitives.shader.shader]
            [mathbox.primitives.text.format]
            [mathbox.primitives.text.label]
            [mathbox.primitives.text.retext]
            [mathbox.primitives.text.text]
            [mathbox.primitives.time.clock]
            [mathbox.primitives.time.now]
            [mathbox.primitives.transform.fragment]
            [mathbox.primitives.transform.layer]
            [mathbox.primitives.transform.mask]
            [mathbox.primitives.transform.transform]
            [mathbox.primitives.transform.transform4]
            [mathbox.primitives.transform.vertex]
            [mathbox.primitives.view.cartesian]
            [mathbox.primitives.view.cartesian4]
            [mathbox.primitives.view.polar]
            [mathbox.primitives.view.spherical]
            [mathbox.primitives.view.stereographic]
            [mathbox.primitives.view.stereographic4]
            [mathbox.primitives.view.view]))

(def Group mathbox.primitives.base.group/Group)
(def Inherit mathbox.primitives.base.inherit/Inherit)
(def Root mathbox.primitives.base.root/Root)
(def Unit mathbox.primitives.base.unit/Unit)
(def Camera mathbox.primitives.camera.camera/Camera)
(def Area mathbox.primitives.data.area/Area)
(def Array mathbox.primitives.data.array/Array)
(def Interval mathbox.primitives.data.interval/Interval)
(def Matrix mathbox.primitives.data.matrix/Matrix)
(def Scale mathbox.primitives.data.scale/Scale)
(def Volume mathbox.primitives.data.volume/Volume)
(def Voxel mathbox.primitives.data.voxel/Voxel)
(def Axis mathbox.primitives.draw.axis/Axis)
(def Face mathbox.primitives.draw.face/Face)
(def Grid mathbox.primitives.draw.grid/Grid)
(def Line mathbox.primitives.draw.line/Line)
(def Point mathbox.primitives.draw.point/Point)
(def Strip mathbox.primitives.draw.strip/Strip)
(def Surface mathbox.primitives.draw.surface/Surface)
(def Ticks mathbox.primitives.draw.ticks/Ticks)
(def Vector mathbox.primitives.draw.vector/Vector)
(def Clamp mathbox.primitives.operator.clamp/Clamp)
(def Grow mathbox.primitives.operator.grow/Grow)
(def Join mathbox.primitives.operator.join/Join)
(def Lerp mathbox.primitives.operator.lerp/Lerp)
(def Memo mathbox.primitives.operator.memo/Memo)
(def Readback mathbox.primitives.operator.readback/Readback)
(def Repeat mathbox.primitives.operator.repeat/Repeat)
(def Resample mathbox.primitives.operator.resample/Resample)
(def Slice mathbox.primitives.operator.slice/Slice)
(def Split mathbox.primitives.operator.split/Split)
(def Spread mathbox.primitives.operator.spread/Spread)
(def Subdivide mathbox.primitives.operator.subdivide/Subdivide)
(def Swizzle mathbox.primitives.operator.swizzle/Swizzle)
(def Transpose mathbox.primitives.operator.transpose/Transpose)
(def Dom mathbox.primitives.overlay.dom/Dom)
(def Html mathbox.primitives.overlay.html/Html)
(def Move mathbox.primitives.present.move/Move)
(def Play mathbox.primitives.present.play/Play)
(def Present mathbox.primitives.present.present/Present)
(def Reveal mathbox.primitives.present.reveal/Reveal)
(def Slide mathbox.primitives.present.slide/Slide)
(def Step mathbox.primitives.present.step/Step)
(def Compose mathbox.primitives.rtt.compose/Compose)
(def Rtt mathbox.primitives.rtt.rtt/Rtt)
(def Shader mathbox.primitives.shader.shader/Shader)
(def Format mathbox.primitives.text.format/Format)
(def Label mathbox.primitives.text.label/Label)
(def Retext mathbox.primitives.text.retext/Retext)
(def Text mathbox.primitives.text.text/Text)
(def Clock mathbox.primitives.time.clock/Clock)
(def Now mathbox.primitives.time.now/Now)
(def Fragment mathbox.primitives.transform.fragment/Fragment)
(def Layer mathbox.primitives.transform.layer/Layer)
(def Mask mathbox.primitives.transform.mask/Mask)
(def Transform mathbox.primitives.transform.transform/Transform)
(def Transform4 mathbox.primitives.transform.transform4/Transform4)
(def Vertex mathbox.primitives.transform.vertex/Vertex)
(def Cartesian mathbox.primitives.view.cartesian/Cartesian)
(def Cartesian4 mathbox.primitives.view.cartesian4/Cartesian4)
(def Polar mathbox.primitives.view.polar/Polar)
(def Spherical mathbox.primitives.view.spherical/Spherical)
(def Stereographic mathbox.primitives.view.stereographic/Stereographic)
(def Stereographic4 mathbox.primitives.view.stereographic4/Stereographic4)
(def View mathbox.primitives.view.view/View)
