(ns mathbox.components)










































(ns mathbox.components.present.play)

"*Play a sequenced animation*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Play delay
:ease `\\\"cosine\\\"` (ease) - Animation ease (linear, cosine, binary, hold)
:from `0` (number) - Play from
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:loop `false` (bool) - Loop
:pace `1` (number) - Play pace
:realtime `false` (bool) - Run on real time, not clock time
:script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
:speed `1` (number) - Play speed
:target `\\\"<\\\"` (select) - Animation target
:to `Infinity` (number) - Play until
:trigger `1` (nullable number) - Trigger on step"

(ns mathbox.components.draw.point)

"*Draw points*

:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:color `\\\"rgb(128, 128, 128)\\\"` (color) - Color
:colors `null` (nullable select) - Colors data source, e.g. `\\\"#colors\\\"`
:depth `1` (number) - Depth scaling
:fill `true` (bool) - Fill shape
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:opacity `1` (positive number) - Opacity
:optical `true` (bool) - Optical or exact sizing
:points `<` (select) - Points data source
:shape `\\\"circle\\\"` (shape) - Point shape (circle, square, diamond, up, down, left, right)
:size `4` (positive number) - Point size
:sizes `null` (nullable select) - Point sizes data source, e.g. `\\\"#sizes\\\"`
:visible `true` (bool) - Visibility for rendering
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `true` (bool) - Test Z buffer
:zWrite `true` (bool) - Write Z buffer"

(ns mathbox.components.view.polar)

"*Apply polar view*

:bend `1` (number) - Amount of polar bend
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:eulerOrder `xyz` (swizzle) - Euler order
:helix `0` (number) - Expand into helix
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale
:visible `true` (bool) - Visibility for rendering"

(ns mathbox.components.present.present)

"*Present a tree of slides*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:directed `true` (bool) - Apply directional transitions
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:index `1` (number) - Present slide number
:length `0` (number) - Presentation length (computed)"

(ns mathbox.components.operator.readback)

"*Read data back to a binary JavaScript array*

:active `true` (bool) - Updates continuously
:channels `4` (number) - Readback channels (read only)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:data `[]` (data) - Readback data buffer (read only)
:depth `1` (nullable number) - Readback depth (read only)
:expr `null` (nullable function) - Readback consume expression, e.g. `function (x, y, z, w, i, j, k, l) { ... }`
:height `1` (nullable number) - Readback height (read only)
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `1` (nullable number) - Readback items (read only)
:source `\\\"<\\\"` (select) - Input source
:type `\\\"float\\\"` (float) - Readback data type (float, unsignedByte)
:width `1` (nullable number) - Readback width (read only)"

(ns mathbox.components.operator.repeat)

"*Repeat data in one or more dimensions*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `1` (number) - Repeat depth
:height `1` (number) - Repeat height
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `1` (number) - Repeat items
:source `\\\"<\\\"` (select) - Input source
:width `1` (number) - Repeat width"

(ns mathbox.components.operator.resample)

"*Resample data to new dimensions with a shader*

:centeredW `false` (bool) - Centered instead of corner sampling
:centeredX `false` (bool) - Centered instead of corner sampling
:centeredY `false` (bool) - Centered instead of corner sampling
:centeredZ `false` (bool) - Centered instead of corner sampling
:channels `4` (number) - Resample channels
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable number) - Resample factor depth, e.g. `10`
:height `null` (nullable number) - Resample factor height, e.g. `10`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:indices `4` (number) - Resample indices
:items `null` (nullable number) - Resample factor items, e.g. `10`
:paddingW `0` (number) - Number of samples padding
:paddingX `0` (number) - Number of samples padding
:paddingY `0` (number) - Number of samples padding
:paddingZ `0` (number) - Number of samples padding
:sample `\\\"relative\\\"` (mapping) - Source sampling (relative, absolute)
:shader `\\\"<\\\"` (select) - Shader to use
:size `\\\"absolute\\\"` (mapping) - Scaling mode (relative, absolute)
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable number) - Resample factor width, e.g. `10`"

(ns mathbox.components.text.retext)

"*Text atlas resampler*

:centeredW `false` (bool) - Centered instead of corner sampling
:centeredX `false` (bool) - Centered instead of corner sampling
:centeredY `false` (bool) - Centered instead of corner sampling
:centeredZ `false` (bool) - Centered instead of corner sampling
:channels `4` (number) - Resample channels
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable number) - Resample factor depth, e.g. `10`
:height `null` (nullable number) - Resample factor height, e.g. `10`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:indices `4` (number) - Resample indices
:items `null` (nullable number) - Resample factor items, e.g. `10`
:paddingW `0` (number) - Number of samples padding
:paddingX `0` (number) - Number of samples padding
:paddingY `0` (number) - Number of samples padding
:paddingZ `0` (number) - Number of samples padding
:sample `\\\"relative\\\"` (mapping) - Source sampling (relative, absolute)
:shader `\\\"<\\\"` (select) - Shader to use
:size `\\\"absolute\\\"` (mapping) - Scaling mode (relative, absolute)
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable number) - Resample factor width, e.g. `10`"

(ns mathbox.components.present.reveal)

"*Reveal/hide elements on transition*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Transition delay
:delayEnter `null` (nullable number) - Transition enter delay, e.g. `0.3`
:delayExit `null` (nullable number) - Transition exit delay, e.g. `0.3`
:duration `0.3` (number) - Transition duration
:durationEnter `0.3` (number) - Transition enter duration
:durationExit `0.3` (number) - Transition exit duration
:enter `null` (nullable number) - Enter state, e.g. `0.5`
:exit `null` (nullable number) - Exit state, e.g. `0.5`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:stagger `[0, 0, 0, 0]` (vec4) - Stagger dimensions, e.g. `[2, 1, 0, 0]`"

(ns mathbox.components.base.root)

"*Tree root*

:camera `\\\"[camera]\\\"` (select) - Active camera
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:focus `1` (nullable number) - Camera focus distance in world units
:fov `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:scale `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`
:speed `1` (number) - Global speed"

(ns mathbox.components.rtt.rtt)

"*Render objects to a texture*

:camera `\\\"[camera]\\\"` (select) - Active camera
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:height `null` (nullable number) - RTT height, e.g. `360`
:history `1` (number) - RTT history
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:magFilter `\\\"linear\\\"` (filter) - Texture magnification filtering
:minFilter `\\\"linear\\\"` (filter) - Texture minification filtering
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:speed `1` (number) - Global speed
:type `\\\"unsignedByte\\\"` (type) - Texture data type
:width `null` (nullable number) - RTT width, e.g. `640`"

(ns mathbox.components.data.scale)

"*Human-friendly divisions on an axis, subdivided as needed*

:axis `1` (axis) - Axis
:base `10` (number) - Power base for sub/super units
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:divide `10` (number) - Number of divisions
:end `true` (bool) - Include end
:factor `1` (positive number) - Scale factor
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:mode `\\\"linear\\\"` (scale) - Scale type
:nice `true` (bool) - Snap to nice numbers
:origin `[0, 0, 0, 0]` (vec4) - 4D Origin
:range `[-1, 1]` (vec2) - Range on axis
:start `true` (bool) - Include start
:unit `1` (number) - Reference unit
:zero `true` (bool) - Include zero"

(ns mathbox.components.shader.shader)

"*Custom shader snippet*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:code `\\\"\\\"` (string) - Shader code
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:language `\\\"glsl\\\"` (string) - Shader language
:sources `null` (nullable select) - Sampler sources, e.g. `[\\\"#pressure\\\", \\\"#divergence\\\"]`
:uniforms `null` (nullable object) - Shader uniform objects (three.js style), e.g. `{ time: { type: 'f', value: 3 }}`"

(ns mathbox.components.operator.slice)

"*Select one or more rows/columns/stacks*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable vec2) - Slice from, to depth (excluding to), e.g. `[2, 4]`
:height `null` (nullable vec2) - Slice from, to height (excluding to), e.g. `[2, 4]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `null` (nullable vec2) - Slice from, to items (excluding to), e.g. `[2, 4]`
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable vec2) - Slice from, to width (excluding to), e.g. `[2, 4]`"

(ns mathbox.components.present.slide)

"*Presentation slide*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:early `0` (number) - Appear early steps
:from `null` (nullable number) - Appear from step, e.g. `2`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:late `0` (number) - Stay late steps
:order `0` (nullable number) - Slide order
:steps `1` (number) - Slide steps
:to `null` (nullable number) - Disappear on step, e.g. `4`"

(ns mathbox.components.view.spherical)

"*Apply spherical view*

:bend `1` (number) - Amount of spherical bend
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:eulerOrder `xyz` (swizzle) - Euler order
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale
:visible `true` (bool) - Visibility for rendering"

(ns mathbox.components.operator.split)

"*Split one array dimension into two by splitting rows/columns/etc*

:axis `null` (nullable axis) - Axis to split, e.g. `x`
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:length `1` (number) - Tuple length
:order `\\\"wxyz\\\"` (transpose) - Axis order
:overlap `1` (number) - Tuple overlap
:source `\\\"<\\\"` (select) - Input source"

(ns mathbox.components.operator.spread)

"*Spread data values according to array indices*

:alignDepth `0` (anchor) - Depth alignment
:alignHeight `0` (anchor) - Height alignment
:alignItems `0` (anchor) - Items alignment
:alignWidth `0` (anchor) - Width alignment
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable vec4) - Depth offset, e.g. `[1.5, 0, 0, 0]`
:height `null` (nullable vec4) - Height offset, e.g. `[1.5, 0, 0, 0]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `null` (nullable vec4) - Items offset, e.g. `[1.5, 0, 0, 0]`
:source `\\\"<\\\"` (select) - Input source
:unit `\\\"relative\\\"` (mapping) - Spread per item (absolute) or array (relative)
:width `null` (nullable vec4) - Width offset, e.g. `[1.5, 0, 0, 0]`"

(ns mathbox.components.present.step)

"*Step through a sequenced animation*

:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:delay `0` (number) - Step delay
:duration `0.3` (number) - Step duration
:ease `\\\"cosine\\\"` (ease) - Animation ease (linear, cosine, binary, hold)
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pace `0` (number) - Step pace
:playback `\\\"linear\\\"` (ease) - Playhead ease (linear, cosine, binary, hold)
:realtime `false` (bool) - Run on real time, not clock time
:rewind `2` (number) - Step rewind factor
:script `{}` (object) - Animation script, e.g. `{ \"0\": { props: { color: \"red\" }, expr: { size: function (t) { return Math.sin(t) + 1; }}}, \"1\": ...}`
:skip `true` (bool) - Speed up through skips
:speed `1` (number) - Step speed
:stops `null` (nullable number array) - Playhead stops, e.g. `[0, 1, 3, 5]`
:target `\\\"<\\\"` (select) - Animation target
:trigger `1` (nullable number) - Trigger on step"

(ns mathbox.components.view.stereographic)

"*Apply stereographic projection*

:bend `1` (number) - Amount of stereographic bend
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:eulerOrder `xyz` (swizzle) - Euler order
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0]` (vec3) - 3D Position
:quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
:scale `[1, 1, 1]` (vec3) - 3D Scale
:visible `true` (bool) - Visibility for rendering"

(ns mathbox.components.view.stereographic4)

"*Apply 4D stereographic projection*

:bend `1` (number) - Amount of stereographic bend
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:pass `\\\"view\\\"` (vertexPass) - Vertex pass (data, view, world, eye)
:position `[0, 0, 0, 0]` (vec4) - 4D Position
:range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
:scale `[1, 1, 1, 1]` (vec4) - 4D Scale
:visible `true` (bool) - Visibility for rendering

                                                 "                                                                 (ns mathbox.components.draw.strip)

"*Draw triangle strips*

:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:closed `false` (bool) - Close line
:color `\\\"rgb(128, 128, 128)\\\"` (color) - Color
:colors `null` (nullable select) - Colors data source, e.g. `\\\"#colors\\\"`
:depth `1` (number) - Depth scaling
:fill `true` (bool) - Fill mesh
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:line `false` (bool) - Draw line
:lineBias `5` (number) - Z-Bias for lines on fill
:map `null` (nullable select) - Texture map source, e.g. `\\\"#map\\\"`
:opacity `1` (positive number) - Opacity
:points `<` (select) - Points data source
:proximity `null` (nullable number) - Proximity threshold, e.g. `10`
:shaded `false` (bool) - Shade mesh
:stroke `\\\"solid\\\"` (stroke) - Line stroke (solid, dotted, dashed)
:visible `true` (bool) - Visibility for rendering
:width `2` (positive number) - Line width
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `true` (bool) - Test Z buffer
:zWrite `true` (bool) - Write Z buffer

                                                 "                                                                 (ns mathbox.components.operator.subdivide)

"*Subdivide data points evenly or with a bevel*

:bevel `1` (number) - Fraction to end outward from vertices
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:depth `null` (nullable positive int) - Divisions of depth, e.g. `5`
:height `null` (nullable positive int) - Divisions of height, e.g. `5`
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:items `null` (nullable positive int) - Divisions of items, e.g. `5`
:lerp `true` (boolean) - Interpolate values with computed indices
:source `\\\"<\\\"` (select) - Input source
:width `null` (nullable positive int) - Divisions of width, e.g. `5`

                                                 "                                                                 (ns mathbox.components.draw.surface)

                                                                                                                  "*Draw surfaces*

:blending `\\\"normal\\\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
:classes `[]` (string array) - Custom classes, e.g. `[\\\"big\\\"]`
:closed `false` (bool) - Close line
:closedX `false` (bool) - Close X lines
:closedY `false` (bool) - Close Y lines
:color `\\\"rgb(128, 128, 128)\\\"` (color) - Color
:colors `null` (nullable select) - Colors data source, e.g. `\\\"#colors\\\"`
:crossed `true` (bool) - UVWO map on matching axes
:depth `1` (number) - Depth scaling
:fill `true` (bool) - Fill mesh
:id `null` (nullable string) - Unique ID, e.g. `\\\"sampler\\\"`
:lineBias `5` (number) - Z-Bias for lines on fill
:lineX `false` (bool) - Draw X lines
:lineY `false` (bool) - Draw Y lines
:map `null` (nullable select) - Texture map source, e.g. `\\\"#map\\\"`
:opacity `1` (positive number) - Opacity
:points `<` (select) - Points data source
:proximity `null` (nullable number) - Proximity threshold, e.g. `10`
:shaded `false` (bool) - Shade mesh
:stroke `\\\"solid\\\"` (stroke) - Line stroke (solid, dotted, dashed)
:visible `true` (bool) - Visibility for rendering
:width `2` (positive number) - Line width
:zBias `0` (positive number) - Z-Bias (3D stacking)
:zIndex `0` (positive int) - Z-Index (2D stacking)
:zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
:zTest `true` (bool) - Test Z buffer
:zWrite `true` (bool) - Write Z buffer

                                                 "                                                                 (ns mathbox.components.operator.swizzle)

                                                                                                                  *Swizzle data values*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :order `xyzw` (swizzle) - Swizzle order
                                                                                                                  :source `\"<\"` (select) - Input source

                                                                                                                  (ns mathbox.components.text.text)

                                                                                                                  *GL text source*

                                                                                                                  :aligned `false` (bool) - Use (fast) integer lookups
                                                                                                                  :bufferDepth `1` (number) - Voxel buffer depth
                                                                                                                  :bufferHeight `1` (number) - Voxel buffer height
                                                                                                                  :bufferWidth `1` (number) - Voxel buffer width
                                                                                                                  :channels `4` (number) - Number of channels
                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :data `null` (nullable object) - Data array
                                                                                                                  :depth `1` (nullable number) - Voxel depth
                                                                                                                  :detail `24` (number) - Font detail
                                                                                                                  :expr `null` (nullable emitter) - Data emitter expression
                                                                                                                  :font `\"sans-serif\"` (font) - Font family
                                                                                                                  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
                                                                                                                  :height `1` (nullable number) - Voxel height
                                                                                                                  :hurry `5` (number) - Maximum frames to hurry per frame
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :items `4` (number) - Number of items
                                                                                                                  :limit `60` (number) - Maximum frames to track
                                                                                                                  :live `true` (bool) - Update continuously
                                                                                                                  :magFilter `\"linear\"` (filter) - Texture magnification filtering
                                                                                                                  :minFilter `\"linear\"` (filter) - Texture minification filtering
                                                                                                                  :observe `false` (bool) - Pass clock time to data
                                                                                                                  :realtime `false` (bool) - Run on real time, not clock time
                                                                                                                  :sdf `5` (number) - Signed distance field range
                                                                                                                  :style `\"\"` (string) - Font style, e.g. `\"italic\"`
                                                                                                                  :type `\"float\"` (type) - Texture data type
                                                                                                                  :variant `\"\"` (string) - Font variant, e.g. `\"small-caps\"`
                                                                                                                  :weight `\"\"` (string) - Font weight, e.g. `\"bold\"`
                                                                                                                  :width `1` (nullable number) - Voxel width

                                                                                                                  (ns mathbox.components.draw.ticks)

                                                                                                                  *Draw ticks*

                                                                                                                  :blending `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :closed `false` (bool) - Close line
                                                                                                                  :color `\"rgb(128, 128, 128)\"` (color) - Color
                                                                                                                  :colors `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
                                                                                                                  :depth `1` (number) - Depth scaling
                                                                                                                  :epsilon `0.0001` (number) - Tick epsilon
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :normal `true` (bool) - Normal for reference plane
                                                                                                                  :opacity `1` (positive number) - Opacity
                                                                                                                  :points `<` (select) - Points data source
                                                                                                                  :proximity `null` (nullable number) - Proximity threshold, e.g. `10`
                                                                                                                  :size `10` (number) - Tick size
                                                                                                                  :stroke `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
                                                                                                                  :visible `true` (bool) - Visibility for rendering
                                                                                                                  :width `2` (positive number) - Line width
                                                                                                                  :zBias `0` (positive number) - Z-Bias (3D stacking)
                                                                                                                  :zIndex `0` (positive int) - Z-Index (2D stacking)
                                                                                                                  :zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
                                                                                                                  :zTest `true` (bool) - Test Z buffer
                                                                                                                  :zWrite `true` (bool) - Write Z buffer

                                                                                                                  (ns mathbox.components.transform.transform)

                                                                                                                  *Transform geometry in 3D*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :eulerOrder `xyz` (swizzle) - 3D Euler order
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :matrix `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 3D Projective Matrix
                                                                                                                  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
                                                                                                                  :position `[0, 0, 0]` (vec3) - 3D Position
                                                                                                                  :quaternion `[0, 0, 0, 1]` (quat) - 3D Quaternion
                                                                                                                  :rotation `[0, 0, 0]` (vec3) - 3D Euler rotation
                                                                                                                  :scale `[1, 1, 1]` (vec3) - 3D Scale

                                                                                                                  (ns mathbox.components.transform.transform4)

                                                                                                                  *Transform geometry in 4D*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :matrix `[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]` (mat4) - 4D Affine Matrix
                                                                                                                  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
                                                                                                                  :position `[0, 0, 0, 0]` (vec4) - 4D Position
                                                                                                                  :scale `[1, 1, 1, 1]` (vec4) - 4D Scale

                                                                                                                  (ns mathbox.components.operator.transpose)

                                                                                                                  *Transpose array dimensions*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :order `xyzw` (transpose) - Transpose order
                                                                                                                  :source `\"<\"` (select) - Input source

                                                                                                                  (ns mathbox.components.base.unit)

                                                                                                                  *Change unit sizing for drawing ops*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :focus `1` (nullable number) - Camera focus distance in world units
                                                                                                                  :fov `null` (nullable number) - (Vertical) Field-of-view to calibrate units for (degrees), e.g. `60`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :scale `null` (nullable number) - (Vertical) Reference scale of viewport in pixels, e.g. `720`

                                                                                                                  (ns mathbox.components.draw.vector)

                                                                                                                  *Draw vectors*

                                                                                                                  :blending `\"normal\"` (blending) - Blending mode ('no, normal, add, subtract, multiply)
                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :closed `false` (bool) - Close line
                                                                                                                  :color `\"rgb(128, 128, 128)\"` (color) - Color
                                                                                                                  :colors `null` (nullable select) - Colors data source, e.g. `\"#colors\"`
                                                                                                                  :depth `1` (number) - Depth scaling
                                                                                                                  :end `true` (bool) - Draw end arrow
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :opacity `1` (positive number) - Opacity
                                                                                                                  :points `<` (select) - Points data source
                                                                                                                  :proximity `null` (nullable number) - Proximity threshold, e.g. `10`
                                                                                                                  :size `3` (number) - Arrow size
                                                                                                                  :start `true` (bool) - Draw start arrow
                                                                                                                  :stroke `\"solid\"` (stroke) - Line stroke (solid, dotted, dashed)
                                                                                                                  :visible `true` (bool) - Visibility for rendering
                                                                                                                  :width `2` (positive number) - Line width
                                                                                                                  :zBias `0` (positive number) - Z-Bias (3D stacking)
                                                                                                                  :zIndex `0` (positive int) - Z-Index (2D stacking)
                                                                                                                  :zOrder `null` (nullable number) - Z-Order (drawing order), e.g. `2`
                                                                                                                  :zTest `true` (bool) - Test Z buffer
                                                                                                                  :zWrite `true` (bool) - Write Z buffer

                                                                                                                  (ns mathbox.components.transform.vertex)

                                                                                                                  *Apply custom vertex shader pass*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
                                                                                                                  :shader `\"<\"` (select) - Shader to use

                                                                                                                  (ns mathbox.components.view.view)

                                                                                                                  *Adjust view range*

                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :pass `\"view\"` (vertexPass) - Vertex pass (data, view, world, eye)
                                                                                                                  :range `[[-1, 1], [-1, 1], [-1, 1], [-1, 1]]` (array vec2) - 4D range in view
                                                                                                                  :visible `true` (bool) - Visibility for rendering

                                                                                                                  (ns mathbox.components.data.volume)

                                                                                                                  *3D sampled voxels*

                                                                                                                  :aligned `false` (bool) - Use (fast) integer lookups
                                                                                                                  :axes `[1, 2, 3]` (swizzle(3) axis) - Axis triplet
                                                                                                                  :bufferDepth `1` (number) - Voxel buffer depth
                                                                                                                  :bufferHeight `1` (number) - Voxel buffer height
                                                                                                                  :bufferWidth `1` (number) - Voxel buffer width
                                                                                                                  :centeredX `false` (bool) - Centered instead of corner sampling
                                                                                                                  :centeredY `false` (bool) - Centered instead of corner sampling
                                                                                                                  :centeredZ `false` (bool) - Centered instead of corner sampling
                                                                                                                  :channels `4` (number) - Number of channels
                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :data `null` (nullable object) - Data array
                                                                                                                  :depth `1` (nullable number) - Voxel depth
                                                                                                                  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, x, y, z, i, j, k, time, delta) { ... }`
                                                                                                                  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
                                                                                                                  :height `1` (nullable number) - Voxel height
                                                                                                                  :hurry `5` (number) - Maximum frames to hurry per frame
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :items `4` (number) - Number of items
                                                                                                                  :limit `60` (number) - Maximum frames to track
                                                                                                                  :live `true` (bool) - Update continuously
                                                                                                                  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
                                                                                                                  :minFilter `\"nearest\"` (filter) - Texture minification filtering
                                                                                                                  :observe `false` (bool) - Pass clock time to data
                                                                                                                  :paddingX `0` (number) - Number of samples padding
                                                                                                                  :paddingY `0` (number) - Number of samples padding
                                                                                                                  :paddingZ `0` (number) - Number of samples padding
                                                                                                                  :rangeX `[-1, 1]` (vec2) - Range on axis
                                                                                                                  :rangeY `[-1, 1]` (vec2) - Range on axis
                                                                                                                  :rangeZ `[-1, 1]` (vec2) - Range on axis
                                                                                                                  :realtime `false` (bool) - Run on real time, not clock time
                                                                                                                  :type `\"float\"` (type) - Texture data type
                                                                                                                  :width `1` (nullable number) - Voxel width

                                                                                                                  (ns mathbox.components.data.voxel)

                                                                                                                  *3D voxels*

                                                                                                                  :aligned `false` (bool) - Use (fast) integer lookups
                                                                                                                  :bufferDepth `1` (number) - Voxel buffer depth
                                                                                                                  :bufferHeight `1` (number) - Voxel buffer height
                                                                                                                  :bufferWidth `1` (number) - Voxel buffer width
                                                                                                                  :channels `4` (number) - Number of channels
                                                                                                                  :classes `[]` (string array) - Custom classes, e.g. `[\"big\"]`
                                                                                                                  :data `null` (nullable object) - Data array
                                                                                                                  :depth `1` (nullable number) - Voxel depth
                                                                                                                  :expr `null` (nullable emitter) - Data emitter expression, e.g. `function (emit, i, j, k, time, delta) { ... }`
                                                                                                                  :fps `null` (nullable number) - Frames-per-second update rate, e.g. `60`
                                                                                                                  :height `1` (nullable number) - Voxel height
                                                                                                                  :hurry `5` (number) - Maximum frames to hurry per frame
                                                                                                                  :id `null` (nullable string) - Unique ID, e.g. `\"sampler\"`
                                                                                                                  :items `4` (number) - Number of items
                                                                                                                  :limit `60` (number) - Maximum frames to track
                                                                                                                  :live `true` (bool) - Update continuously
                                                                                                                  :magFilter `\"nearest\"` (filter) - Texture magnification filtering
                                                                                                                  :minFilter `\"nearest\"` (filter) - Texture minification filtering
                                                                                                                  :observe `false` (bool) - Pass clock time to data
                                                                                                                  :realtime `false` (bool) - Run on real time, not clock time
                                                                                                                  :type `\"float\"` (type) - Texture data type
                                                                                                                  :width `1` (nullable number) - Voxel width
