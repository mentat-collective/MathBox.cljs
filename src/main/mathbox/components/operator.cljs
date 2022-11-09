(ns mathbox.components.operator
  (:refer-clojure :exclude [Repeat])
  (:require [mathbox.components.operator.clamp]
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
            [mathbox.components.operator.transpose]))

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
