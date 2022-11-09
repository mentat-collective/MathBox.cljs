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
