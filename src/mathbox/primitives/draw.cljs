(ns mathbox.primitives.draw
  (:require ["mathbox-react" :as box]
            [reagent.core :as r]))

(def Axis
  "*Draw an axis*

  - `:axis`: `1` (axis) - Axis
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:crossed`: `true` (bool) - UVWO map on matching axis
  - `:depth`: `1` (number) - Depth scaling
  - `:detail`: `1` (number) - Geometric detail
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:origin`: `[0, 0, 0, 0]` (vec4) - 4D Origin
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:range`: `[-1, 1]` (vec2) - Range on axis
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `-1` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Axis))

(def Face
  "*Draw polygon faces*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:line`: `false` (bool) - Draw line
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Face))

(def Grid
  "*Draw a 2D line grid*

  - `:axes`: `[1, 2]` (swizzle(2) axis) - Axis pair
  - `:baseX`: `10` (number) - Power base for sub/super units
  - `:baseY`: `10` (number) - Power base for sub/super units
  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:closedX`: `false` (bool) - Close X lines
  - `:closedY`: `false` (bool) - Close Y lines
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:crossed`: `true` (bool) - UVWO map on matching axes
  - `:crossedX`: `true` (bool) - UVWO map on matching axis
  - `:crossedY`: `true` (bool) - UVWO map on matching axis
  - `:depth`: `1` (number) - Depth scaling
  - `:detailX`: `1` (number) - Geometric detail
  - `:detailY`: `1` (number) - Geometric detail
  - `:divideX`: `10` (number) - Number of divisions
  - `:divideY`: `10` (number) - Number of divisions
  - `:endX`: `true` (bool) - Include end
  - `:endY`: `true` (bool) - Include end
  - `:factorX`: `1` (positive number) - Scale factor
  - `:factorY`: `1` (positive number) - Scale factor
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:lineX`: `true` (bool) - Draw X lines
  - `:lineY`: `true` (bool) - Draw Y lines
  - `:modeX`: `\"linear\"` (scale) - Scale type
  - `:modeY`: `\"linear\"` (scale) - Scale type
  - `:niceX`: `true` (bool) - Snap to nice numbers
  - `:niceY`: `true` (bool) - Snap to nice numbers
  - `:opacity`: `1` (positive number) - Opacity
  - `:origin`: `[0, 0, 0, 0]` (vec4) - 4D Origin
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:rangeX`: `[-1, 1]` (vec2) - Range on axis
  - `:rangeY`: `[-1, 1]` (vec2) - Range on axis
  - `:startX`: `true` (bool) - Include start
  - `:startY`: `true` (bool) - Include start
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:unitX`: `1` (number) - Reference unit
  - `:unitY`: `1` (number) - Reference unit
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `1` (positive number) - Line width
  - `:zBias`: `-2` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer
  - `:zeroX`: `true` (bool) - Include zero
  - `:zeroY`: `true` (bool) - Include zero"
  (r/adapt-react-class box/Grid))

(def Line
  "*Draw lines*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Line))

(def Point
  "*Draw points*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill shape
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:optical`: `true` (bool) - Optical or exact sizing
  - `:points`: `<` (select) - Points data source
  - `:shape`: `\"circle\"` (shape) - Point shape (circle, square, diamond, up, down, left, right)
  - `:size`: `4` (positive number) - Point size
  - `:sizes`: `null` (nullable select) - Point sizes data source, e.g. `\"#sizes\"`
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Point))

(def Strip
  "*Draw triangle strips*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:line`: `false` (bool) - Draw line
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Strip))

(def Surface
  "*Draw surfaces*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:closedX`: `false` (bool) - Close X lines
  - `:closedY`: `false` (bool) - Close Y lines
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:crossed`: `true` (bool) - UVWO map on matching axes
  - `:depth`: `1` (number) - Depth scaling
  - `:fill`: `true` (bool) - Fill mesh
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:lineBias`: `5` (number) - Z-Bias for lines on fill
  - `:lineX`: `false` (bool) - Draw X lines
  - `:lineY`: `false` (bool) - Draw Y lines
  - `:map`: `null` (nullable select) - Texture map source, e.g. `\"#map\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:shaded`: `false` (bool) - Shade mesh
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Surface))

(def Ticks
  "*Draw ticks*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:epsilon`: `0.0001` (number) - Tick epsilon
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:normal`: `true` (bool) - Normal for reference plane
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `10` (number) - Tick size
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Ticks))

(def Vector
  "*Draw vectors*

  - `:blending`: `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
  - `:classes`: `[]` (string array) - Custom classes, e.g. `[\"big\"]`
  - `:closed`: `false` (bool) - Close line
  - `:color`: `\"rgb(128, 128, 128)\"` (color) - Color
  - `:colors`: `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
  - `:depth`: `1` (number) - Depth scaling
  - `:end`: `true` (bool) - Draw end arrow
  - `:id`: `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
  - `:opacity`: `1` (positive number) - Opacity
  - `:points`: `<` (select) - Points data source
  - `:proximity`: `null` (nullable number) - Proximity threshold, e.g. `10`
  - `:size`: `3` (number) - Arrow size
  - `:start`: `true` (bool) - Draw start arrow
  - `:stroke`: `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
  - `:visible`: `true` (bool) - Visibility for rendering
  - `:width`: `2` (positive number) - Line width
  - `:zBias`: `0` (positive number) - Z-Bias (3D stacking)
  - `:zIndex`: `0` (positive int) - Z-Index (2D stacking)
  - `:zOrder`: `null` (nullable number) - Z-Order (drawing order), e.g. `2`
  - `:zTest`: `true` (bool) - Test Z buffer
  - `:zWrite`: `true` (bool) - Write Z buffer"
  (r/adapt-react-class box/Vector))
