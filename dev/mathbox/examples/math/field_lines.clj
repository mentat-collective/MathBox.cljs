^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathbox.examples.math.field-lines
  #_(:require [nextjournal.clerk :as clerk]
              [mentat.clerk-utils :refer [cljs]]))

;; # Field Lines

;; // Number of samples on each 3D axis
;; var SAMPLES = 10;

;; // Accuracy of integration steps
;; var DIVIDE = 8;
;; var STEP = 1 / 32 / DIVIDE;

;; // Jitter range
;; var JITTER = 1 / SAMPLES;

;; // Maximum integration steps drawn
;; var MAX_STEPS = 16;

;; // Bootstrap MathBox
;; var mathbox = MathBox.mathBox({
;;   plugins: ["core", "controls", "cursor", "mathbox"],
;;   controls: {
;;     // Trackball controls, i.e. Free quaternion rotation
;;     klass: THREE.TrackballControls,
;;   },
;; });
;; if (mathbox.fallback) throw "WebGL not supported";

;; var three = mathbox.three;
;; three.renderer.setClearColor(new THREE.Color(0x000000), 1.0);

;; // Dat GUI
;; var gui = new dat.GUI();
;; var props = {
;;   speed: 1,
;;   x: 0,
;;   y: 0,
;;   z: 0,
;;   jitter: 1,
;;   steps: 8,
;;   respawn: 0.0005,
;;   fixed: false,
;;   field1: true,
;;   field2: true,
;;   rotate: true,
;; };
;; gui.add(props, "rotate");
;; gui.add(props, "speed").min(0.5).max(10).step(0.5);
;; gui.add(props, "x").min(-1).max(1).step(0.05);
;; gui.add(props, "y").min(-1).max(1).step(0.05);
;; gui.add(props, "z").min(-1).max(1).step(0.05);
;; gui.add(props, "steps").min(2).max(MAX_STEPS).step(1);
;; gui.add(props, "fixed");
;; gui.add(props, "respawn").min(0).max(0.01).step(0.0005);
;; gui.add(props, "jitter").min(0).max(4).step(0.05);
;; gui.add(props, "field1");
;; gui.add(props, "field2");

;; // DOM
;; mathbox.set("focus", 3);

;; var camera = mathbox.camera({
;;   proxy: true,
;;   position: [0.5, 1, 1],
;; });

;; var view = mathbox
;;   .clock(
;;     {},
;;     {
;;       speed: function () {
;;         return props.rotate ? 1 / 16 : 0;
;;       },
;;     }
;;   )
;;   .cartesian(
;;     {
;;       range: [
;;         [-2, 2],
;;         [-2, 2],
;;         [-2, 2],
;;       ],
;;       scale: [1, 1, 1],
;;     },
;;     {
;;       quaternion: function (t) {
;;         return [Math.cos(t), 0, 0, Math.sin(t)];
;;       },
;;     }
;;   );

;; // Scratch vector
;; var v = new THREE.Vector3();

;; // Vector field 1
;; var field = function (x, y, z) {
;;   x += props.x;
;;   y += props.y;
;;   z += props.z;

;;   var rad = Math.sqrt(x * x + z * z);
;;   var offset = rad - 1;
;;   var torus = 1 / (0.1 + offset * offset + y * y);

;;   v.set(z * torus, 0, -x * torus);
;;   return v;
;; };

;; // Vector field 2
;; var field2 = function (x, y, z) {
;;   x += props.x;
;;   y += props.y;
;;   z += props.z;

;;   var rad = Math.sqrt(x * x + z * z);
;;   var offset = rad - 1;
;;   var torus = 1 / (0.1 + offset * offset + y * y);

;;   v.set(x * y * torus, -offset * torus, z * y * torus);
;;   return v;
;; };

;; // Random deterministic jitter
;; var rand = function (seed) {
;;   var seed =
;;     (Math.abs(
;;       Math.sin(
;;         seed * seed * seed * 319.1981313 +
;;           seed * seed * 131.8455733 +
;;           seed * 473.3914129
;;       )
;;     ) *
;;       10631.1318791821) %
;;     1;
;;   return seed * 2 - 1;
;; };
;; var jitter = function (i) {
;;   v.set(rand(i), rand(i * i), rand(i * i * i));
;;   v.multiplyScalar(props.jitter);
;;   return v;
;; };

;; // RK4 scratch vectors
;; var va = new THREE.Vector3();
;; var vb = new THREE.Vector3();
;; var vc = new THREE.Vector3();
;; var vd = new THREE.Vector3();

;; // Compute a 3D volume of integrated field lines
;; var previous = new Float32Array(SAMPLES * SAMPLES * SAMPLES * 3);
;; var data = view.volume({
;;   expr: function (emit, x, y, z, i, j, k, t) {
;;     var f;

;;     var x1, y1, z1, x2, y2, z2, x3, y3, z3;
;;     var delta = STEP * props.speed;

;;     // Point index
;;     var l = (i + (j + k * SAMPLES) * SAMPLES) * 3;

;;     if (!props.fixed && Math.random() > props.respawn) {
;;       // Keep integrating along same field line with X% probability.
;;       x = previous[l] || x;
;;       y = previous[l + 1] || y;
;;       z = previous[l + 2] || z;

;;       // Take 1 step (Runge-Kutta 4)
;;       f = field(x, y, z);
;;       va.copy(f);

;;       x1 = x + f.x * delta * 0.5;
;;       y1 = y + f.y * delta * 0.5;
;;       z1 = z + f.z * delta * 0.5;

;;       f = field(x1, y1, z1);
;;       vb.copy(f);

;;       x2 = x + f.x * delta * 0.5;
;;       y2 = y + f.y * delta * 0.5;
;;       z2 = z + f.z * delta * 0.5;

;;       f = field(x2, y2, z2);
;;       vc.copy(f);

;;       x3 = x + f.x * delta;
;;       y3 = y + f.y * delta;
;;       z3 = z + f.z * delta;

;;       f = field(x3, y3, z3);
;;       vd.copy(f);

;;       va.multiplyScalar(1 / 6);
;;       vb.multiplyScalar(2 / 6);
;;       vc.multiplyScalar(2 / 6);
;;       vd.multiplyScalar(1 / 6);

;;       va.add(vb);
;;       vc.add(vd);
;;       f.addVectors(va, vc);

;;       x += f.x * delta;
;;       y += f.y * delta;
;;       z += f.z * delta;
;;     } else {
;;       if (props.fixed) t = 0;

;;       // Start at jittered home position
;;       f = jitter(l + t);
;;       x += f.x * JITTER;
;;       y += f.y * JITTER;
;;       z += f.z * JITTER;
;;     }

;;     previous[l] = x;
;;     previous[l + 1] = y;
;;     previous[l + 2] = z;

;;     // Emit MAX_STEPS points ahead
;;     for (var i = 0; i < MAX_STEPS; ++i) {
;;       emit(x, y, z);

;;       // Only take selected number of steps
;;       delta = i >= MAX_STEPS - props.steps ? STEP : 0.0001;

;;       // Take DIVIDE steps (Euler)
;;       for (var j = 0; j < DIVIDE; ++j) {
;;         f = field(x, y, z);
;;         x += f.x * delta;
;;         y += f.y * delta;
;;         z += f.z * delta;
;;       }
;;     }
;;   },
;;   width: SAMPLES,
;;   height: SAMPLES,
;;   depth: SAMPLES,
;;   items: MAX_STEPS,
;;   channels: 3,
;; });

;; // Draw polyarrows
;; var vectors = view.vector(
;;   {
;;     color: 0x4098ff,
;;     width: 1,
;;     zBias: 3,
;;     end: true,
;;   },
;;   {
;;     visible: function () {
;;       return props.field1;
;;     },
;;   }
;; );

;; // Compute a 3D volume of integrated field lines
;; var previous2 = new Float32Array(SAMPLES * SAMPLES * SAMPLES * 3);
;; var data2 = view.volume({
;;   expr: function (emit, x, y, z, i, j, k, t) {
;;     var f;

;;     var x1, y1, z1, x2, y2, z2, x3, y3, z3;
;;     var delta = STEP * props.speed;

;;     // Point index
;;     var l = (i + (j + k * SAMPLES) * SAMPLES) * 3;

;;     if (!props.fixed && Math.random() > props.respawn) {
;;       // Keep integrating along same field line with X% probability.
;;       x = previous2[l] || x;
;;       y = previous2[l + 1] || y;
;;       z = previous2[l + 2] || z;

;;       // Take 1 step (Runge-Kutta 4)
;;       f = field2(x, y, z);
;;       va.copy(f);

;;       x1 = x + f.x * delta * 0.5;
;;       y1 = y + f.y * delta * 0.5;
;;       z1 = z + f.z * delta * 0.5;

;;       f = field2(x1, y1, z1);
;;       vb.copy(f);

;;       x2 = x + f.x * delta * 0.5;
;;       y2 = y + f.y * delta * 0.5;
;;       z2 = z + f.z * delta * 0.5;

;;       f = field2(x2, y2, z2);
;;       vc.copy(f);

;;       x3 = x + f.x * delta;
;;       y3 = y + f.y * delta;
;;       z3 = z + f.z * delta;

;;       f = field2(x3, y3, z3);
;;       vd.copy(f);

;;       va.multiplyScalar(1 / 6);
;;       vb.multiplyScalar(2 / 6);
;;       vc.multiplyScalar(2 / 6);
;;       vd.multiplyScalar(1 / 6);

;;       va.add(vb);
;;       vc.add(vd);
;;       f.addVectors(va, vc);

;;       x += f.x * delta;
;;       y += f.y * delta;
;;       z += f.z * delta;
;;     } else {
;;       if (props.fixed) t = 0;

;;       // Start at jittered home position
;;       f = jitter(l + t);
;;       x += f.x * JITTER;
;;       y += f.y * JITTER;
;;       z += f.z * JITTER;
;;     }

;;     previous2[l] = x;
;;     previous2[l + 1] = y;
;;     previous2[l + 2] = z;

;;     // Emit MAX_STEPS points ahead
;;     for (var i = 0; i < MAX_STEPS; ++i) {
;;       emit(x, y, z);

;;       // Only take selected number of steps
;;       delta = i >= MAX_STEPS - props.steps ? STEP : 0.0001;

;;       // Take DIVIDE steps (Euler)
;;       for (var j = 0; j < DIVIDE; ++j) {
;;         f = field2(x, y, z);
;;         x += f.x * delta;
;;         y += f.y * delta;
;;         z += f.z * delta;
;;       }
;;     }
;;   },
;;   width: SAMPLES,
;;   height: SAMPLES,
;;   depth: SAMPLES,
;;   items: MAX_STEPS,
;;   channels: 3,
;; });

;; // Draw polyarrows
;; var vectors2 = view.vector(
;;   {
;;     color: 0xa00040,
;;     width: 1,
;;     zBias: 3,
;;     end: true,
;;   },
;;   {
;;     visible: function () {
;;       return props.field2;
;;     },
;;   }
;; );