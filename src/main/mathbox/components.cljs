;; Note that, I THINK, we are following this style:
;; https://github.com/arttuka/reagent-material-ui

(ns mathbox.components
  "Imports all components from Mathbox as Reagent components.
   Importing components from their own namespaces is preferred due to bundle size.

   Requiring this namespace causes the whole @mui/material package to be
  included in the final bundle... IN THEORY!"
  (:refer-clojure :exclude [array vector repeat spread])
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

(def group mathbox.components.base.group)
(def inherit mathbox.components.base.inherit)
(def root mathbox.components.base.root)
(def unit mathbox.components.base.unit)
(def camera mathbox.components.camera.camera)
(def area mathbox.components.data.area)
(def array mathbox.components.data.array)
(def interval mathbox.components.data.interval)
(def matrix mathbox.components.data.matrix)
(def scale mathbox.components.data.scale)
(def volume mathbox.components.data.volume)
(def voxel mathbox.components.data.voxel)
(def axis mathbox.components.draw.axis)
(def face mathbox.components.draw.face)
(def grid mathbox.components.draw.grid)
(def line mathbox.components.draw.line)
(def point mathbox.components.draw.point)
(def strip mathbox.components.draw.strip)
(def surface mathbox.components.draw.surface)
(def ticks mathbox.components.draw.ticks)
(def vector mathbox.components.draw.vector)
(def clamp mathbox.components.operator.clamp)
(def grow mathbox.components.operator.grow)
(def join mathbox.components.operator.join)
(def lerp mathbox.components.operator.lerp)
(def memo mathbox.components.operator.memo)
(def readback mathbox.components.operator.readback)
(def repeat mathbox.components.operator.repeat)
(def resample mathbox.components.operator.resample)
(def slice mathbox.components.operator.slice)
(def split mathbox.components.operator.split)
(def spread mathbox.components.operator.spread)
(def subdivide mathbox.components.operator.subdivide)
(def swizzle mathbox.components.operator.swizzle)
(def transpose mathbox.components.operator.transpose)
(def dom mathbox.components.overlay.dom)
(def html mathbox.components.overlay.html)
(def move mathbox.components.present.move)
(def play mathbox.components.present.play)
(def present mathbox.components.present.present)
(def reveal mathbox.components.present.reveal)
(def slide mathbox.components.present.slide)
(def step mathbox.components.present.step)
(def compose mathbox.components.rtt.compose)
(def rtt mathbox.components.rtt.rtt)
(def shader mathbox.components.shader.shader)
(def format mathbox.components.text.format)
(def label mathbox.components.text.label)
(def retext mathbox.components.text.retext)
(def text mathbox.components.text.text)
(def clock mathbox.components.time.clock)
(def now mathbox.components.time.now)
(def fragment mathbox.components.transform.fragment)
(def layer mathbox.components.transform.layer)
(def mask mathbox.components.transform.mask)
(def transform mathbox.components.transform.transform)
(def transform4 mathbox.components.transform.transform4)
(def vertex mathbox.components.transform.vertex)
(def cartesian mathbox.components.view.cartesian)
(def cartesian4 mathbox.components.view.cartesian4)
(def polar mathbox.components.view.polar)
(def spherical mathbox.components.view.spherical)
(def stereographic mathbox.components.view.stereographic)
(def stereographic4 mathbox.components.view.stereographic4)
(def view mathbox.components.view.view)
