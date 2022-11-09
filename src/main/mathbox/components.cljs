;; Note that, I THINK, we are following this style:
;; https://github.com/arttuka/reagent-material-ui

(ns mathbox.components
  "Imports all components from Mathbox as Reagent components.
   Importing components from their own namespaces is preferred due to bundle size.

   Requiring this namespace causes the whole @mui/material package to be
  included in the final bundle... IN THEORY!"
  (:refer-clojure :exclude [Repeat])
  (:require [mathbox.components.base.group]
            [mathbox.components.base.inherit]
            [mathbox.components.base.root]
            [mathbox.components.base.unit]
            [mathbox.components.camera.camera]
            [mathbox.components.data.area]
            [mathbox.components.data.array]
            [mathbox.components.data.interval]
            [mathbox.components.data.matrix]
            [mathbox.components.data.scale]
            [mathbox.components.data.volume]
            [mathbox.components.data.voxel]
            [mathbox.components.draw.axis]
            [mathbox.components.draw.face]
            [mathbox.components.draw.grid]
            [mathbox.components.draw.line]
            [mathbox.components.draw.point]
            [mathbox.components.draw.strip]
            [mathbox.components.draw.surface]
            [mathbox.components.draw.ticks]
            [mathbox.components.draw.vector]
            [mathbox.components.operator.clamp]
            [mathbox.components.operator.grow]
            [mathbox.components.operator.join]
            [mathbox.components.operator.lerp]
            [mathbox.components.operator.memo]
            [mathbox.components.operator.readback]
            [mathbox.components.operator.repeat]
            [mathbox.components.operator.resample]
            [mathbox.components.operator.slice]
            [mathbox.components.operator.split]
            [mathbox.components.operator.spread]
            [mathbox.components.operator.subdivide]
            [mathbox.components.operator.swizzle]
            [mathbox.components.operator.transpose]
            [mathbox.components.overlay.dom]
            [mathbox.components.overlay.html]
            [mathbox.components.present.move]
            [mathbox.components.present.play]
            [mathbox.components.present.present]
            [mathbox.components.present.reveal]
            [mathbox.components.present.slide]
            [mathbox.components.present.step]
            [mathbox.components.rtt.compose]
            [mathbox.components.rtt.rtt]
            [mathbox.components.shader.shader]
            [mathbox.components.text.format]
            [mathbox.components.text.label]
            [mathbox.components.text.retext]
            [mathbox.components.text.text]
            [mathbox.components.time.clock]
            [mathbox.components.time.now]
            [mathbox.components.transform.fragment]
            [mathbox.components.transform.layer]
            [mathbox.components.transform.mask]
            [mathbox.components.transform.transform]
            [mathbox.components.transform.transform4]
            [mathbox.components.transform.vertex]
            [mathbox.components.view.cartesian]
            [mathbox.components.view.cartesian4]
            [mathbox.components.view.polar]
            [mathbox.components.view.spherical]
            [mathbox.components.view.stereographic]
            [mathbox.components.view.stereographic4]
            [mathbox.components.view.view]))

(def Group mathbox.components.base.group/Group)
(def Inherit mathbox.components.base.inherit/Inherit)
(def Root mathbox.components.base.root/Root)
(def Unit mathbox.components.base.unit/Unit)
(def Camera mathbox.components.camera.camera/Camera)
(def Area mathbox.components.data.area/Area)
(def Array mathbox.components.data.array/Array)
(def Interval mathbox.components.data.interval/Interval)
(def Matrix mathbox.components.data.matrix/Matrix)
(def Scale mathbox.components.data.scale/Scale)
(def Volume mathbox.components.data.volume/Volume)
(def Voxel mathbox.components.data.voxel/Voxel)
(def Axis mathbox.components.draw.axis/Axis)
(def Face mathbox.components.draw.face/Face)
(def Grid mathbox.components.draw.grid/Grid)
(def Line mathbox.components.draw.line/Line)
(def Point mathbox.components.draw.point/Point)
(def Strip mathbox.components.draw.strip/Strip)
(def Surface mathbox.components.draw.surface/Surface)
(def Ticks mathbox.components.draw.ticks/Ticks)
(def Vector mathbox.components.draw.vector/Vector)
(def Clamp mathbox.components.operator.clamp/Clamp)
(def Grow mathbox.components.operator.grow/Grow)
(def Join mathbox.components.operator.join/Join)
(def Lerp mathbox.components.operator.lerp/Lerp)
(def Memo mathbox.components.operator.memo/Memo)
(def Readback mathbox.components.operator.readback/Readback)
(def Repeat mathbox.components.operator.repeat/Repeat)
(def Resample mathbox.components.operator.resample/Resample)
(def Slice mathbox.components.operator.slice/Slice)
(def Split mathbox.components.operator.split/Split)
(def Spread mathbox.components.operator.spread/Spread)
(def Subdivide mathbox.components.operator.subdivide/Subdivide)
(def Swizzle mathbox.components.operator.swizzle/Swizzle)
(def Transpose mathbox.components.operator.transpose/Transpose)
(def Dom mathbox.components.overlay.dom/Dom)
(def Html mathbox.components.overlay.html/Html)
(def Move mathbox.components.present.move/Move)
(def Play mathbox.components.present.play/Play)
(def Present mathbox.components.present.present/Present)
(def Reveal mathbox.components.present.reveal/Reveal)
(def Slide mathbox.components.present.slide/Slide)
(def Step mathbox.components.present.step/Step)
(def Compose mathbox.components.rtt.compose/Compose)
(def Rtt mathbox.components.rtt.rtt/Rtt)
(def Shader mathbox.components.shader.shader/Shader)
(def Format mathbox.components.text.format/Format)
(def Label mathbox.components.text.label/Label)
(def Retext mathbox.components.text.retext/Retext)
(def Text mathbox.components.text.text/Text)
(def Clock mathbox.components.time.clock/Clock)
(def Now mathbox.components.time.now/Now)
(def Fragment mathbox.components.transform.fragment/Fragment)
(def Layer mathbox.components.transform.layer/Layer)
(def Mask mathbox.components.transform.mask/Mask)
(def Transform mathbox.components.transform.transform/Transform)
(def Transform4 mathbox.components.transform.transform4/Transform4)
(def Vertex mathbox.components.transform.vertex/Vertex)
(def Cartesian mathbox.components.view.cartesian/Cartesian)
(def Cartesian4 mathbox.components.view.cartesian4/Cartesian4)
(def Polar mathbox.components.view.polar/Polar)
(def Spherical mathbox.components.view.spherical/Spherical)
(def Stereographic mathbox.components.view.stereographic/Stereographic)
(def Stereographic4 mathbox.components.view.stereographic4/Stereographic4)
(def View mathbox.components.view.view/View)
