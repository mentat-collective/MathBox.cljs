import "./cljs_env.js";
goog.provide('mathbox.examples.math.pq_knot');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$controls$TrackballControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$TrackballControls", {});
if((typeof mathbox !== 'undefined') && (typeof mathbox.examples !== 'undefined') && (typeof mathbox.examples.math !== 'undefined') && (typeof mathbox.examples.math.pq_knot !== 'undefined') && (typeof mathbox.examples.math.pq_knot._BANG_state !== 'undefined')){
} else {
mathbox.examples.math.pq_knot._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"p","p",151049309),(7),new cljs.core.Keyword(null,"q","q",689001697),(8),new cljs.core.Keyword(null,"r1","r1",690974900),1.791,new cljs.core.Keyword(null,"r2","r2",252844174),0.95,new cljs.core.Keyword(null,"r3","r3",-2027148174),0.1], null));
}
mathbox.examples.math.pq_knot.pq_knot = (function mathbox$examples$math$pq_knot$pq_knot(emit,x69000,x69001,x69002,x69003,x69004,x69005,x69006){
var G000000000000025d = (x69003 * x69005);
var G0000000000000260 = Math.sin(x69006);
var G0000000000000265 = Math.cos(x69006);
var G0000000000000270 = (x69001 + x69002);
var G000000000000028a = (x69004 * x69005);
var G0000000000000295 = Math.sin(G000000000000028a);
var G00000000000002a3 = Math.cos(G000000000000025d);
var G00000000000002aa = Math.cos(G000000000000028a);
var G00000000000002b5 = Math.sin(G000000000000025d);
var G00000000000002c9 = (G0000000000000270 * G00000000000002a3);
var G00000000000002d0 = (((((G00000000000002aa * G0000000000000270) * -1.0) * G00000000000002a3) * x69003) * x69003);
var G00000000000002d2 = (((((G0000000000000270 * G00000000000002a3) * x69003) * G0000000000000270) * G00000000000002a3) * x69003);
var G00000000000002d5 = (- G00000000000002b5);
var G00000000000002da = (- G0000000000000295);
var G00000000000002e6 = (((((G0000000000000295 * G0000000000000270) * -1.0) * G00000000000002a3) * x69003) * x69003);
var G00000000000002f2 = ((((((G0000000000000270 * G00000000000002a3) * x69003) * G0000000000000270) * G00000000000002d5) * x69003) * x69003);
var G00000000000002fa = ((((G00000000000002da * x69004) * G0000000000000270) * G00000000000002d5) * x69003);
var G0000000000000300 = ((((G0000000000000270 * G00000000000002d5) * x69003) * G00000000000002aa) * x69004);
var G0000000000000307 = ((((G00000000000002aa * x69004) * G0000000000000270) * G00000000000002d5) * x69003);
var G000000000000030b = (((G00000000000002aa * G0000000000000270) * G00000000000002d5) * x69003);
var G0000000000000310 = (x69000 + G00000000000002c9);
var G0000000000000313 = ((((G0000000000000270 * G00000000000002d5) * x69003) * G00000000000002da) * x69004);
var G0000000000000318 = (((G0000000000000295 * G0000000000000270) * G00000000000002d5) * x69003);
var G000000000000031c = ((G0000000000000310 * G00000000000002da) * x69004);
var G000000000000031f = ((((G0000000000000310 * -1.0) * G00000000000002aa) * x69004) * x69004);
var G0000000000000324 = (((G0000000000000310 * G00000000000002da) * x69004) * x69004);
var G0000000000000329 = ((G0000000000000310 * G00000000000002aa) * x69004);
var G000000000000033d = (((G00000000000002e6 + G0000000000000307) + G0000000000000324) + G0000000000000300);
var G0000000000000340 = (((G00000000000002d0 + G00000000000002fa) + G000000000000031f) + G0000000000000313);
var G0000000000000343 = (G000000000000030b + G000000000000031c);
var G0000000000000354 = (G0000000000000318 + G0000000000000329);
var G0000000000000359 = (G0000000000000343 * G0000000000000340);
var G000000000000035d = (G0000000000000354 * G000000000000033d);
var G000000000000035f = (G0000000000000343 * G0000000000000343);
var G0000000000000364 = (G0000000000000354 * G0000000000000354);
var G000000000000037f = ((G000000000000035f + G0000000000000364) + G00000000000002d2);
var G0000000000000387 = (((((G0000000000000359 + G0000000000000359) + G000000000000035d) + G000000000000035d) + G00000000000002f2) + G00000000000002f2);
var G000000000000038a = (-1.0 / G000000000000037f);
var G0000000000000399 = Math.sqrt(G000000000000037f);
var G000000000000039d = (G0000000000000399 * 2.0);
var G00000000000003a2 = (1.0 / G0000000000000399);
var G00000000000003af = (G00000000000003a2 * G0000000000000340);
var G00000000000003b6 = (G00000000000003a2 * G000000000000033d);
var G00000000000003ba = (1.0 / G000000000000039d);
var G00000000000003be = ((((G00000000000003a2 * G0000000000000270) * G00000000000002d5) * x69003) * x69003);
var G00000000000003c1 = (((G0000000000000343 * G000000000000038a) * G00000000000003ba) * G0000000000000387);
var G00000000000003c3 = (((((G0000000000000270 * G00000000000002a3) * x69003) * G000000000000038a) * G00000000000003ba) * G0000000000000387);
var G00000000000003c5 = (((G0000000000000354 * G000000000000038a) * G00000000000003ba) * G0000000000000387);
var G00000000000003cf = (G00000000000003b6 + G00000000000003c5);
var G00000000000003d2 = (G00000000000003af + G00000000000003c1);
var G00000000000003d3 = (G00000000000003be + G00000000000003c3);
var G00000000000003d4 = (G00000000000003d2 * G00000000000003d2);
var G00000000000003d7 = (G00000000000003cf * G00000000000003cf);
var G00000000000003d9 = (G00000000000003d3 * G00000000000003d3);
var G00000000000003db = ((G00000000000003d4 + G00000000000003d7) + G00000000000003d9);
var G00000000000003de = Math.sqrt(G00000000000003db);
var G00000000000003df = (1.0 / G00000000000003de);
var G__48411 = (((G0000000000000310 * G00000000000002aa) + ((((((G0000000000000354 * G00000000000003a2) * G00000000000003d3) * G00000000000003df) - (((((G0000000000000270 * G00000000000002a3) * x69003) * G00000000000003a2) * G00000000000003cf) * G00000000000003df)) * x69002) * G0000000000000265)) + (((G00000000000003d2 * G00000000000003df) * x69002) * G0000000000000260));
var G__48412 = (((G0000000000000310 * G0000000000000295) + ((((((((G0000000000000270 * G00000000000002a3) * x69003) * G00000000000003a2) * G00000000000003d2) * G00000000000003df) - (((G0000000000000343 * G00000000000003a2) * G00000000000003d3) * G00000000000003df)) * x69002) * G0000000000000265)) + (((G00000000000003cf * G00000000000003df) * x69002) * G0000000000000260));
var G__48413 = (((G0000000000000270 * G00000000000002b5) + ((((((G0000000000000343 * G00000000000003a2) * G00000000000003cf) * G00000000000003df) - (((G0000000000000354 * G00000000000003a2) * G00000000000003d2) * G00000000000003df)) * x69002) * G0000000000000265)) + (((G00000000000003d3 * G00000000000003df) * x69002) * G0000000000000260));
return (emit.cljs$core$IFn$_invoke$arity$3 ? emit.cljs$core$IFn$_invoke$arity$3(G__48411,G__48412,G__48413) : emit.call(null,G__48411,G__48412,G__48413));
});

var f__48393__auto___48452 = (function (){
return mathbox.examples.math.pq_knot.pq_knot;
});
var obj48416_48453 = window;
var obj48416_48454__$1 = (((!((obj48416_48453 == null))))?obj48416_48453:({}));
var inner_obj__40440__auto___48455 = (function (){var child48417 = (obj48416_48454__$1["clerk-cljs"]);
if((!((child48417 == null)))){
return child48417;
} else {
var new_child__40389__auto__ = ({});
var obj48423_48456 = obj48416_48454__$1;
(obj48423_48456["clerk-cljs"] = new_child__40389__auto__);


return new_child__40389__auto__;
}
})();
var o__40434__auto___48457 = inner_obj__40440__auto___48455;
var o__40428__auto___48458 = (((!((o__40434__auto___48457 == null))))?o__40434__auto___48457:({}));
var obj48426_48459 = o__40428__auto___48458;
(obj48426_48459["mathbox.examples.math.pq-knot--2017569654"] = (function (x__48394__auto__){
if(cljs.core.not(x__48394__auto__)){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__48393__auto___48452], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x__48394__auto__)))){
var G__48427 = x__48394__auto__;
cljs.core.reset_BANG_(G__48427,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__48393__auto___48452], null));

return G__48427;
} else {
return x__48394__auto__;

}
}
})((o__40428__auto___48458["mathbox.examples.math.pq-knot--2017569654"])));


mathbox.examples.math.pq_knot.PQKnot = (function mathbox$examples$math$pq_knot$PQKnot(_BANG_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.Mathbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor","mathbox","stats"], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"klass","klass",-1386752349),module$node_modules$three$examples$jsm$controls$TrackballControls.TrackballControls], null)], null),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(16777215),new cljs.core.Keyword(null,"camera-proxy","camera-proxy",-697165859),true,new cljs.core.Keyword(null,"camera-position","camera-position",-2111361558),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(3)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(500),new cljs.core.Keyword(null,"focus","focus",234677911),(3)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Cartesian,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,(0),(0),0.7], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(_BANG_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Area,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"rangeX","rangeX",1415483689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),Math.PI], null),new cljs.core.Keyword(null,"rangeY","rangeY",777743115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- Math.PI),Math.PI], null),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"channels","channels",1132759174),(3),new cljs.core.Keyword(null,"live","live",-1610148039),true,new cljs.core.Keyword(null,"expr","expr",745722291),(function (emit,theta,phi,_i,_j,t){
var map__48431 = _BANG_state.state;
var map__48431__$1 = cljs.core.__destructure_map(map__48431);
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48431__$1,new cljs.core.Keyword(null,"r1","r1",690974900));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48431__$1,new cljs.core.Keyword(null,"r2","r2",252844174));
var r3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48431__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48431__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48431__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r3__$1 = (r3 + ((r3 * 0.5) * (Math.sin((((2) * theta) * t)) * Math.sin((((2) * theta) * t)))));
return mathbox.examples.math.pq_knot.pq_knot(emit,r1,r2,r3__$1,q,p,theta,phi);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Surface,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shaded","shaded",561405058),true,new cljs.core.Keyword(null,"color","color",1011675173),(13369408),new cljs.core.Keyword(null,"lineY","lineY",-800534367),true,new cljs.core.Keyword(null,"width","width",-384071477),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Resample,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mathbox.primitives.Line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null)], null)], null)], null);
});
goog.exportSymbol('mathbox.examples.math.pq_knot.PQKnot', mathbox.examples.math.pq_knot.PQKnot);

var f__48393__auto___48463 = (function (){
return mathbox.examples.math.pq_knot.PQKnot;
});
var obj48432_48464 = window;
var obj48432_48465__$1 = (((!((obj48432_48464 == null))))?obj48432_48464:({}));
var inner_obj__40440__auto___48466 = (function (){var child48433 = (obj48432_48465__$1["clerk-cljs"]);
if((!((child48433 == null)))){
return child48433;
} else {
var new_child__40389__auto__ = ({});
var obj48438_48467 = obj48432_48465__$1;
(obj48438_48467["clerk-cljs"] = new_child__40389__auto__);


return new_child__40389__auto__;
}
})();
var o__40434__auto___48468 = inner_obj__40440__auto___48466;
var o__40428__auto___48469 = (((!((o__40434__auto___48468 == null))))?o__40434__auto___48468:({}));
var obj48441_48470 = o__40428__auto___48469;
(obj48441_48470["mathbox.examples.math.pq-knot--2017569654"] = (function (x__48394__auto__){
if(cljs.core.not(x__48394__auto__)){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__48393__auto___48463], null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x__48394__auto__)))){
var G__48444 = x__48394__auto__;
cljs.core.reset_BANG_(G__48444,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f__48393__auto___48463], null));

return G__48444;
} else {
return x__48394__auto__;

}
}
})((o__40428__auto___48469["mathbox.examples.math.pq-knot--2017569654"])));



//# sourceMappingURL=mathbox.examples.math.pq_knot.js.map
