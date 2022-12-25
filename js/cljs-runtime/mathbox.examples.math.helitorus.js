import "./cljs_env.js";
goog.provide('mathbox.examples.math.helitorus');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$controls$TrackballControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$TrackballControls", {});
mathbox.examples.math.helitorus.spine = (function mathbox$examples$math$helitorus$spine(out,R,r,n,theta){
var n_STAR_theta = (n * theta);
var xr = (R + (r * Math.cos(n_STAR_theta)));
var G__47502 = out;
G__47502.set((xr * Math.cos(theta)),(xr * Math.sin(theta)),(r * Math.sin(n_STAR_theta)));

return G__47502;
});

mathbox.examples.math.helitorus.circle_tangent = (function mathbox$examples$math$helitorus$circle_tangent(out,theta){
var G__47503 = out;
G__47503.set((- Math.sin(theta)),Math.cos(theta),(0));

return G__47503;
});

var f__47234__auto___47554 = (function (){
var e_47555 = 0.001;
var inv_e_47556 = (1.0 / e_47555);
mathbox.examples.math.helitorus.spine_tangent = (function mathbox$examples$math$helitorus$spine_tangent(out,R,r,n,t){
var G__47504 = out;
G__47504.set(((Math.sin(t) * (- (R + (r * Math.cos((n * t)))))) - (((n * r) * Math.cos(t)) * Math.sin((n * t)))),((Math.cos(t) * (R + (r * Math.cos((n * t))))) - (((n * r) * Math.sin(t)) * Math.sin((n * t)))),((n * r) * Math.cos((n * t))));

return G__47504;
});

var vn_47557 = (new module$node_modules$three$build$three.Vector3());
/**
 * Augmented matrix https://en.wikipedia.org/wiki/Affine_transformation#Representation
 */
mathbox.examples.math.helitorus.__GT_tbn = (function mathbox$examples$math$helitorus$__GT_tbn(out,v,t,translation){
var G__47505_47558 = vn_47557;
G__47505_47558.crossVectors(v,t);

G__47505_47558.normalize();


var G__47506_47559 = t;
G__47506_47559.crossVectors(v,vn_47557);

G__47506_47559.normalize();


var G__47507 = out;
G__47507.set(v.x,t.x,vn_47557.x,translation.x,v.y,t.y,vn_47557.y,translation.y,v.z,t.z,vn_47557.z,translation.z,(0),(0),(0),(1));

return G__47507;
});

var vo = (new module$node_modules$three$build$three.Vector3());
var vt = (new module$node_modules$three$build$three.Vector3());
var vb = (new module$node_modules$three$build$three.Vector3());
var mtbn = (new module$node_modules$three$build$three.Matrix4());
/**
 * Compute tangent, biTangent, normal matrix:
 *   https://learnopengl.com/Advanced-Lighting/Normal-Mapping
 */
mathbox.examples.math.helitorus.tbn = (function mathbox$examples$math$helitorus$tbn(n,R,r,theta){
mathbox.examples.math.helitorus.spine(vo,R,r,n,theta);

mathbox.examples.math.helitorus.spine_tangent(vt,R,r,n,theta);

mathbox.examples.math.helitorus.circle_tangent(vb,theta);

return mathbox.examples.math.helitorus.__GT_tbn(mtbn,vt,vb,vo);
});

var vs_47560 = (new module$node_modules$three$build$three.Vector3());
/**
 * So phi gets you around the smaller circle, and then theta is the big circle.
 */
mathbox.examples.math.helitorus.area_expr = (function mathbox$examples$math$helitorus$area_expr(emit,theta,phi,p__47508){
var map__47509 = p__47508;
var map__47509__$1 = cljs.core.__destructure_map(map__47509);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"n","n",562130025));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47509__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
var r = (r2 + r3);
var m = mathbox.examples.math.helitorus.tbn(n,r1,r,theta);
var G__47510_47561 = vs_47560;
G__47510_47561.set((0),(r3 * Math.cos(phi)),(r3 * Math.sin(phi)));

G__47510_47561.applyMatrix4(m);


var G__47511 = vs_47560.x;
var G__47512 = vs_47560.y;
var G__47513 = vs_47560.z;
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__47511,G__47512,G__47513) : emit.call(null,G__47511,G__47512,G__47513));
});

mathbox.examples.math.helitorus.big_cake = (new Function("emit","x51275","x51276","x51277","x51278","x51279","x51280","let G000000000000009e = Math.pow(x51278, 2.0);\n\n let G000000000000009f = Math.sin(x51279);\n\n let G00000000000000a2 = Math.pow(x51275, 2.0);\n\n let G00000000000000a6 = Math.pow(x51277, 2.0);\n\n let G00000000000000a7 = x51278 * x51279;\n\n let G00000000000000a8 = Math.cos(x51279);\n\n let G00000000000000a9 = Math.sin(x51280);\n\n let G00000000000000aa = Math.pow(x51276, 2.0);\n\n let G00000000000000b0 = Math.cos(x51280);\n\n let G00000000000000b5 = 2.0 * x51276 * x51277 * G000000000000009e;\n\n let G00000000000000b6 = G00000000000000a6 * G000000000000009e;\n\n let G00000000000000ba = Math.sin(G00000000000000a7);\n\n let G00000000000000bc = G00000000000000aa * G000000000000009e;\n\n let G00000000000000be = Math.cos(G00000000000000a7);\n\n let G00000000000000c2 = Math.pow(G00000000000000be, 2.0);\n\n let G00000000000000c5 = 2.0 * x51275 * x51277 * G00000000000000be;\n\n let G00000000000000c6 = 2.0 * x51275 * x51276 * G00000000000000be;\n\n let G00000000000000c9 = 2.0 * x51276 * x51277 * G00000000000000c2;\n\n let G00000000000000ca = G00000000000000a6 * G00000000000000c2;\n\n let G00000000000000cc = G00000000000000aa * G00000000000000c2;\n\n let G00000000000000cf = G00000000000000bc + G00000000000000cc + G00000000000000b5 + G00000000000000c9 + G00000000000000b6 + G00000000000000ca + G00000000000000c6 + G00000000000000c5 + G00000000000000a2;\n\n let G00000000000000d0 = Math.sqrt(G00000000000000cf);\n\nemit((-1.0 * x51276 * x51277 * x51278 * G00000000000000be * G00000000000000a8 * G00000000000000a9 -1.0 * G00000000000000a6 * x51278 * G00000000000000be * G00000000000000a8 * G00000000000000a9 + x51276 * G00000000000000be * G00000000000000a8 * G00000000000000d0 + x51277 * G00000000000000be * G00000000000000a8 * G00000000000000d0 -1.0 * x51277 * G000000000000009f * G00000000000000b0 * G00000000000000d0 + x51275 * G00000000000000a8 * G00000000000000d0) / G00000000000000d0, (-1.0 * x51276 * x51277 * x51278 * G00000000000000be * G00000000000000a9 * G000000000000009f -1.0 * G00000000000000a6 * x51278 * G00000000000000be * G00000000000000a9 * G000000000000009f + x51276 * G00000000000000be * G000000000000009f * G00000000000000d0 + x51277 * G00000000000000be * G000000000000009f * G00000000000000d0 + x51277 * G00000000000000a8 * G00000000000000b0 * G00000000000000d0 + x51275 * G000000000000009f * G00000000000000d0) / G00000000000000d0, (-1.0 * x51276 * x51277 * x51278 * G00000000000000a9 * G00000000000000ba -1.0 * G00000000000000a6 * x51278 * G00000000000000a9 * G00000000000000ba + x51276 * G00000000000000ba * G00000000000000d0 + x51277 * G00000000000000ba * G00000000000000d0) / G00000000000000d0);"));

mathbox.examples.math.helitorus.cake2 = (function mathbox$examples$math$helitorus$cake2(emit,x63167,x63168,x63169,x63170,x63171,x63172){
var G00000000000000db = (x63170 * x63171);
var G00000000000000e6 = Math.sin(x63171);
var G00000000000000f1 = Math.sin(x63172);
var G00000000000000f6 = (x63168 + x63169);
var G0000000000000103 = Math.cos(x63172);
var G0000000000000106 = Math.cos(x63171);
var G0000000000000117 = Math.cos(G00000000000000db);
var G000000000000011b = Math.sin(G00000000000000db);
var G0000000000000124 = (- G00000000000000e6);
var G0000000000000139 = (G00000000000000f6 * G0000000000000117);
var G0000000000000140 = (- G000000000000011b);
var G0000000000000150 = (((((G0000000000000106 * G00000000000000f6) * -1.0) * G0000000000000117) * x63170) * x63170);
var G0000000000000156 = (((((G00000000000000f6 * G0000000000000117) * x63170) * G00000000000000f6) * G0000000000000117) * x63170);
var G0000000000000162 = (((((G00000000000000e6 * G00000000000000f6) * -1.0) * G0000000000000117) * x63170) * x63170);
var G0000000000000172 = (((G00000000000000e6 * G00000000000000f6) * G0000000000000140) * x63170);
var G0000000000000174 = (((G00000000000000f6 * G0000000000000140) * x63170) * G0000000000000106);
var G000000000000017a = (((G00000000000000f6 * G0000000000000140) * x63170) * G0000000000000124);
var G000000000000017d = (((G0000000000000106 * G00000000000000f6) * G0000000000000140) * x63170);
var G000000000000017e = ((((((G00000000000000f6 * G0000000000000117) * x63170) * G00000000000000f6) * G0000000000000140) * x63170) * x63170);
var G0000000000000187 = (((G0000000000000124 * G00000000000000f6) * G0000000000000140) * x63170);
var G0000000000000188 = (x63167 + G0000000000000139);
var G000000000000018c = (G0000000000000188 * G0000000000000106);
var G000000000000019e = (G0000000000000188 * G0000000000000124);
var G00000000000001a1 = ((G0000000000000188 * -1.0) * G0000000000000106);
var G00000000000001b8 = (((G0000000000000150 + G0000000000000187) + G00000000000001a1) + G000000000000017a);
var G00000000000001ba = (G000000000000017d + G000000000000019e);
var G00000000000001c1 = (((G0000000000000162 + G000000000000017d) + G000000000000019e) + G0000000000000174);
var G00000000000001c5 = (G0000000000000172 + G000000000000018c);
var G00000000000001cb = (G00000000000001c5 * G00000000000001c1);
var G00000000000001d2 = (G00000000000001ba * G00000000000001b8);
var G00000000000001d7 = (G00000000000001c5 * G00000000000001c5);
var G00000000000001e1 = (G00000000000001ba * G00000000000001ba);
var G00000000000001ed = (((((G00000000000001d2 + G00000000000001d2) + G00000000000001cb) + G00000000000001cb) + G000000000000017e) + G000000000000017e);
var G00000000000001f6 = ((G00000000000001e1 + G00000000000001d7) + G0000000000000156);
var G0000000000000200 = (-1.0 / G00000000000001f6);
var G000000000000020b = Math.sqrt(G00000000000001f6);
var G0000000000000217 = (G000000000000020b * 2.0);
var G0000000000000219 = (1.0 / G000000000000020b);
var G0000000000000224 = (1.0 / G0000000000000217);
var G0000000000000225 = (G0000000000000219 * G00000000000001c1);
var G0000000000000229 = (G0000000000000219 * G00000000000001b8);
var G000000000000022b = ((((G0000000000000219 * G00000000000000f6) * G0000000000000140) * x63170) * x63170);
var G0000000000000231 = (((((G00000000000000f6 * G0000000000000117) * x63170) * G0000000000000200) * G0000000000000224) * G00000000000001ed);
var G0000000000000234 = (((G00000000000001c5 * G0000000000000200) * G0000000000000224) * G00000000000001ed);
var G000000000000023c = (((G00000000000001ba * G0000000000000200) * G0000000000000224) * G00000000000001ed);
var G0000000000000243 = (G000000000000022b + G0000000000000231);
var G0000000000000244 = (G0000000000000225 + G0000000000000234);
var G0000000000000245 = (G0000000000000229 + G000000000000023c);
var G0000000000000246 = (G0000000000000244 * G0000000000000244);
var G0000000000000247 = (G0000000000000245 * G0000000000000245);
var G0000000000000248 = (G0000000000000243 * G0000000000000243);
var G000000000000024c = ((G0000000000000247 + G0000000000000246) + G0000000000000248);
var G0000000000000250 = Math.sqrt(G000000000000024c);
var G0000000000000251 = (1.0 / G0000000000000250);
var G__47514 = ((G000000000000018c + ((((((G00000000000001c5 * G0000000000000219) * G0000000000000243) * G0000000000000251) - (((((G00000000000000f6 * G0000000000000117) * x63170) * G0000000000000219) * G0000000000000244) * G0000000000000251)) * x63169) * G0000000000000103)) + (((G0000000000000245 * G0000000000000251) * x63169) * G00000000000000f1));
var G__47515 = (((G0000000000000188 * G00000000000000e6) + ((((((((G00000000000000f6 * G0000000000000117) * x63170) * G0000000000000219) * G0000000000000245) * G0000000000000251) - (((G00000000000001ba * G0000000000000219) * G0000000000000243) * G0000000000000251)) * x63169) * G0000000000000103)) + (((G0000000000000244 * G0000000000000251) * x63169) * G00000000000000f1));
var G__47516 = (((G00000000000000f6 * G000000000000011b) + ((((((G00000000000001ba * G0000000000000219) * G0000000000000244) * G0000000000000251) - (((G00000000000001c5 * G0000000000000219) * G0000000000000245) * G0000000000000251)) * x63169) * G0000000000000103)) + (((G0000000000000243 * G0000000000000251) * x63169) * G00000000000000f1));
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__47514,G__47515,G__47516) : emit.call(null,G__47514,G__47515,G__47516));
});

return (
mathbox.examples.math.helitorus.cake = (function mathbox$examples$math$helitorus$cake(emit,x51275,x51276,x51277,x51278,x51279,x51280){
var G000000000000009e = Math.pow(x51278,2.0);
var G000000000000009f = Math.sin(x51279);
var G00000000000000a2 = Math.pow(x51275,2.0);
var G00000000000000a6 = Math.pow(x51277,2.0);
var G00000000000000a7 = (x51278 * x51279);
var G00000000000000a8 = Math.cos(x51279);
var G00000000000000a9 = Math.sin(x51280);
var G00000000000000aa = Math.pow(x51276,2.0);
var G00000000000000b0 = Math.cos(x51280);
var G00000000000000b5 = (((2.0 * x51276) * x51277) * G000000000000009e);
var G00000000000000b6 = (G00000000000000a6 * G000000000000009e);
var G00000000000000ba = Math.sin(G00000000000000a7);
var G00000000000000bc = (G00000000000000aa * G000000000000009e);
var G00000000000000be = Math.cos(G00000000000000a7);
var G00000000000000c2 = Math.pow(G00000000000000be,2.0);
var G00000000000000c5 = (((2.0 * x51275) * x51277) * G00000000000000be);
var G00000000000000c6 = (((2.0 * x51275) * x51276) * G00000000000000be);
var G00000000000000c9 = (((2.0 * x51276) * x51277) * G00000000000000c2);
var G00000000000000ca = (G00000000000000a6 * G00000000000000c2);
var G00000000000000cc = (G00000000000000aa * G00000000000000c2);
var G00000000000000cf = ((((((((G00000000000000bc + G00000000000000cc) + G00000000000000b5) + G00000000000000c9) + G00000000000000b6) + G00000000000000ca) + G00000000000000c6) + G00000000000000c5) + G00000000000000a2);
var G00000000000000d0 = Math.sqrt(G00000000000000cf);
var G__47517 = ((((((((((((-1.0 * x51276) * x51277) * x51278) * G00000000000000be) * G00000000000000a8) * G00000000000000a9) + (((((-1.0 * G00000000000000a6) * x51278) * G00000000000000be) * G00000000000000a8) * G00000000000000a9)) + (((x51276 * G00000000000000be) * G00000000000000a8) * G00000000000000d0)) + (((x51277 * G00000000000000be) * G00000000000000a8) * G00000000000000d0)) + ((((-1.0 * x51277) * G000000000000009f) * G00000000000000b0) * G00000000000000d0)) + ((x51275 * G00000000000000a8) * G00000000000000d0)) / G00000000000000d0);
var G__47518 = ((((((((((((-1.0 * x51276) * x51277) * x51278) * G00000000000000be) * G00000000000000a9) * G000000000000009f) + (((((-1.0 * G00000000000000a6) * x51278) * G00000000000000be) * G00000000000000a9) * G000000000000009f)) + (((x51276 * G00000000000000be) * G000000000000009f) * G00000000000000d0)) + (((x51277 * G00000000000000be) * G000000000000009f) * G00000000000000d0)) + (((x51277 * G00000000000000a8) * G00000000000000b0) * G00000000000000d0)) + ((x51275 * G000000000000009f) * G00000000000000d0)) / G00000000000000d0);
var G__47519 = (((((((((-1.0 * x51276) * x51277) * x51278) * G00000000000000a9) * G00000000000000ba) + ((((-1.0 * G00000000000000a6) * x51278) * G00000000000000a9) * G00000000000000ba)) + ((x51276 * G00000000000000ba) * G00000000000000d0)) + ((x51277 * G00000000000000ba) * G00000000000000d0)) / G00000000000000d0);
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__47517,G__47518,G__47519) : emit.call(null,G__47517,G__47518,G__47519));
}))
;
});
var obj47520_47562 = window;
var obj47520_47563__$1 = (((!((obj47520_47562 == null))))?obj47520_47562:({}));
var inner_obj__40440__auto___47564 = (function (){var child47521 = (obj47520_47563__$1["clerk-cljs"]);
if((!((child47521 == null)))){
return child47521;
} else {
var new_child__40389__auto__ = ({});
var obj47526_47565 = obj47520_47563__$1;
(obj47526_47565["clerk-cljs"] = new_child__40389__auto__);


return new_child__40389__auto__;
}
})();
var o__40434__auto___47566 = inner_obj__40440__auto___47564;
var o__40428__auto___47567 = (((!((o__40434__auto___47566 == null))))?o__40434__auto___47566:({}));
var obj47529_47568 = o__40428__auto___47567;
(obj47529_47568["mathbox.examples.math.helitorus--2117555544"] = (function (x__47235__auto__){
if(cljs.core.not(x__47235__auto__)){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47554], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x__47235__auto__)))){
var G__47530 = x__47235__auto__;
cljs.core.reset_BANG_(G__47530,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47554], null));

return G__47530;
} else {
return x__47235__auto__;

}
}
})((o__40428__auto___47567["mathbox.examples.math.helitorus--2117555544"])));


mathbox.examples.math.helitorus.square = (function mathbox$examples$math$helitorus$square(x){
return (x * x);
});
goog.exportSymbol('mathbox.examples.math.helitorus.square', mathbox.examples.math.helitorus.square);

mathbox.examples.math.helitorus.face = (function mathbox$examples$math$helitorus$face(x){
return (x * x);
});
goog.exportSymbol('mathbox.examples.math.helitorus.face', mathbox.examples.math.helitorus.face);

mathbox.examples.math.helitorus.donkey = (function mathbox$examples$math$helitorus$donkey(x){
return (x * x);
});
goog.exportSymbol('mathbox.examples.math.helitorus.donkey', mathbox.examples.math.helitorus.donkey);

var f__47234__auto___47569 = (function (){
console.log("doing it");

console.log("doing it again");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mathbox.examples.math.helitorus.donkey((2))], null);
});
var obj47531_47570 = window;
var obj47531_47571__$1 = (((!((obj47531_47570 == null))))?obj47531_47570:({}));
var inner_obj__40440__auto___47572 = (function (){var child47532 = (obj47531_47571__$1["clerk-cljs"]);
if((!((child47532 == null)))){
return child47532;
} else {
var new_child__40389__auto__ = ({});
var obj47537_47573 = obj47531_47571__$1;
(obj47537_47573["clerk-cljs"] = new_child__40389__auto__);


return new_child__40389__auto__;
}
})();
var o__40434__auto___47574 = inner_obj__40440__auto___47572;
var o__40428__auto___47575 = (((!((o__40434__auto___47574 == null))))?o__40434__auto___47574:({}));
var obj47540_47576 = o__40428__auto___47575;
(obj47540_47576["mathbox.examples.math.helitorus-1394795753"] = (function (x__47235__auto__){
if(cljs.core.not(x__47235__auto__)){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47569], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x__47235__auto__)))){
var G__47541 = x__47235__auto__;
cljs.core.reset_BANG_(G__47541,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47569], null));

return G__47541;
} else {
return x__47235__auto__;

}
}
})((o__40428__auto___47575["mathbox.examples.math.helitorus-1394795753"])));


mathbox.examples.math.helitorus.Helitorus = (function mathbox$examples$math$helitorus$Helitorus(_BANG_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.Mathbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor","mathbox","stats"], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"klass","klass",-1386752349),module$node_modules$three$examples$jsm$controls$TrackballControls.TrackballControls], null)], null),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(16777215),new cljs.core.Keyword(null,"camera-proxy","camera-proxy",-697165859),true,new cljs.core.Keyword(null,"camera-position","camera-position",-2111361558),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(3)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(500),new cljs.core.Keyword(null,"focus","focus",234677911),(3)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,(0),(0),0.7], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(_BANG_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rangeX","rangeX",1415483689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),Math.PI], null),new cljs.core.Keyword(null,"rangeY","rangeY",777743115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),Math.PI], null),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"channels","channels",1132759174),(3),new cljs.core.Keyword(null,"live","live",-1610148039),false,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta,phi,_i,_j,_t){
var map__47542 = _BANG_state.state;
var map__47542__$1 = cljs.core.__destructure_map(map__47542);
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47542__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47542__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47542__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47542__$1,new cljs.core.Keyword(null,"n","n",562130025));
return mathbox.examples.math.helitorus.cake2(emit,r1,r2,r3,n,theta,phi);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Surface,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shaded","shaded",561405058),true,new cljs.core.Keyword(null,"color","color",1011675173),(13369408),new cljs.core.Keyword(null,"lineY","lineY",-800534367),true,new cljs.core.Keyword(null,"width","width",-384071477),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Resample,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null)], null)], null);
});
goog.exportSymbol('mathbox.examples.math.helitorus.Helitorus', mathbox.examples.math.helitorus.Helitorus);

var f__47234__auto___47577 = (function (){
return mathbox.examples.math.helitorus.Helitorus;
});
var obj47543_47578 = window;
var obj47543_47579__$1 = (((!((obj47543_47578 == null))))?obj47543_47578:({}));
var inner_obj__40440__auto___47580 = (function (){var child47544 = (obj47543_47579__$1["clerk-cljs"]);
if((!((child47544 == null)))){
return child47544;
} else {
var new_child__40389__auto__ = ({});
var obj47549_47581 = obj47543_47579__$1;
(obj47549_47581["clerk-cljs"] = new_child__40389__auto__);


return new_child__40389__auto__;
}
})();
var o__40434__auto___47582 = inner_obj__40440__auto___47580;
var o__40428__auto___47583 = (((!((o__40434__auto___47582 == null))))?o__40434__auto___47582:({}));
var obj47552_47584 = o__40428__auto___47583;
(obj47552_47584["mathbox.examples.math.helitorus--2017569654"] = (function (x__47235__auto__){
if(cljs.core.not(x__47235__auto__)){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47577], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x__47235__auto__)))){
var G__47553 = x__47235__auto__;
cljs.core.reset_BANG_(G__47553,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__47234__auto___47577], null));

return G__47553;
} else {
return x__47235__auto__;

}
}
})((o__40428__auto___47583["mathbox.examples.math.helitorus--2017569654"])));



//# sourceMappingURL=mathbox.examples.math.helitorus.js.map
