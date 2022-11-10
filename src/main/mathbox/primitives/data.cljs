(ns mathbox.primitives.data
  (:require [mathbox.primitives.data.area]
            [mathbox.primitives.data.array]
            [mathbox.primitives.data.interval]
            [mathbox.primitives.data.matrix]
            [mathbox.primitives.data.scale]
            [mathbox.primitives.data.volume]
            [mathbox.primitives.data.voxel]))

(def Area mathbox.primitives.data.area/Area)
(def Array mathbox.primitives.data.array/Array)
(def Interval mathbox.primitives.data.interval/Interval)
(def Matrix mathbox.primitives.data.matrix/Matrix)
(def Scale mathbox.primitives.data.scale/Scale)
(def Volume mathbox.primitives.data.volume/Volume)
(def Voxel mathbox.primitives.data.voxel/Voxel)
