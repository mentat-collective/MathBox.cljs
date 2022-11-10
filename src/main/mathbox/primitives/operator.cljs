(ns mathbox.primitives.operator
  (:refer-clojure :exclude [Repeat])
  (:require [mathbox.primitives.operator.clamp]
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
            [mathbox.primitives.operator.transpose]))

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
