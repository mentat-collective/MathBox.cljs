(ns mathbox.components.data
  (:require [mathbox.components.data.area]
            [mathbox.components.data.array]
            [mathbox.components.data.interval]
            [mathbox.components.data.matrix]
            [mathbox.components.data.scale]
            [mathbox.components.data.volume]
            [mathbox.components.data.voxel]))

(def Area mathbox.components.data.area/Area)
(def Array mathbox.components.data.array/Array)
(def Interval mathbox.components.data.interval/Interval)
(def Matrix mathbox.components.data.matrix/Matrix)
(def Scale mathbox.components.data.scale/Scale)
(def Volume mathbox.components.data.volume/Volume)
(def Voxel mathbox.components.data.voxel/Voxel)
