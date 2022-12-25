import "./cljs_env.js";
goog.provide('mathbox');
var module$node_modules$mathbox_react$build$cjs$index=shadow.js.require("module$node_modules$mathbox_react$build$cjs$index", {});
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three$examples$jsm$controls$OrbitControls=shadow.js.require("module$node_modules$three$examples$jsm$controls$OrbitControls", {});
mathbox.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["core","controls","cursor"], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"klass","klass",-1386752349),module$node_modules$three$examples$jsm$controls$OrbitControls.OrbitControls], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Returns a setup function that will only run ONE time.
 */
mathbox.setup = (function mathbox$setup(f){
return (function (box){
if(cljs.core.truth_((function (){var and__5043__auto__ = box;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(box.created);
} else {
return and__5043__auto__;
}
})())){
(box.created = true);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(box) : f.call(null,box));
} else {
return null;
}
});
});
/**
 * Some core options, tidied up.
 */
mathbox.opts__GT_setup = (function mathbox$opts__GT_setup(p__66152){
var map__66153 = p__66152;
var map__66153__$1 = cljs.core.__destructure_map(map__66153);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var camera_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"camera-position","camera-position",-2111361558));
var camera_proxy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"camera-proxy","camera-proxy",-697165859));
var max_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"max-distance","max-distance",848042358));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66153__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
return mathbox.setup((function (box){
if(cljs.core.truth_(scale)){
box.set(({"scale": scale}));
} else {
}

if(cljs.core.truth_(focus)){
box.set(({"focus": focus}));
} else {
}

var three = box.three;
if(cljs.core.truth_(max_distance)){
(three.controls.maxDistance = max_distance);
} else {
}

var temp__5804__auto___66172 = camera_position;
if(cljs.core.truth_(temp__5804__auto___66172)){
var vec__66155_66173 = temp__5804__auto___66172;
var x_66174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155_66173,(0),null);
var y_66175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155_66173,(1),null);
var z_66176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155_66173,(2),null);
three.camera.position.set(x_66174,y_66175,z_66176);
} else {
}

if(cljs.core.truth_(camera_proxy)){
(three.camera.proxy = true);
} else {
}

if(cljs.core.truth_(background_color)){
var color = (new module$node_modules$three$build$three.Color(background_color));
return three.renderer.setClearColor(color,1.0);
} else {
return null;
}
}));
});
mathbox.BareMathbox = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.Mathbox);
mathbox.ContainedMathbox = reagent.core.adapt_react_class(module$node_modules$mathbox_react$build$cjs$index.ContainedMathbox);
/**
 * Same as `ContainedMathBox`, but with setup options.
 * 
 *   TODO for NOW, don't supply `:ref`. But obviously we want to allow that too.
 * 
 *   :style maps to containerStyle.
 */
mathbox.Mathbox = (function mathbox$Mathbox(var_args){
var args__5775__auto__ = [];
var len__5769__auto___66177 = arguments.length;
var i__5770__auto___66178 = (0);
while(true){
if((i__5770__auto___66178 < len__5769__auto___66177)){
args__5775__auto__.push((arguments[i__5770__auto___66178]));

var G__66179 = (i__5770__auto___66178 + (1));
i__5770__auto___66178 = G__66179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(mathbox.Mathbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__66165,children){
var map__66166 = p__66165;
var map__66166__$1 = cljs.core.__destructure_map(map__66166);
var opts = map__66166__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66166__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66166__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var ref = ((cljs.core.map_QMARK_(init))?mathbox.opts__GT_setup(init):((cljs.core.fn_QMARK_(init))?mathbox.setup(init):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid init.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),init], null))})()
));
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736)], 0)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,mathbox.default_options)),new cljs.core.Keyword(null,"ref","ref",1289896967),ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"containerStyle","containerStyle",-1828381609),style], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$mathbox_react$build$cjs$index.ContainedMathbox,opts__$1], null),children);
}));

(mathbox.Mathbox.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(mathbox.Mathbox.cljs$lang$applyTo = (function (seq66160){
var G__66163 = cljs.core.first(seq66160);
var seq66160__$1 = cljs.core.next(seq66160);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66163,seq66160__$1);
}));


//# sourceMappingURL=mathbox.js.map
