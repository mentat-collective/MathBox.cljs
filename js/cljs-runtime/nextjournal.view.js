goog.provide('nextjournal.view');
nextjournal.view.memoized_frame_fn = (function nextjournal$view$memoized_frame_fn(component,memo_key,ctx_function){
var val__60705__auto__ = (function (){var obj66354 = component;
if((!((obj66354 == null)))){
return (obj66354[memo_key]);
} else {
return undefined;
}
})();
if((void 0 === val__60705__auto__)){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ctx_function,(function (){var obj66356 = component;
if((!((obj66356 == null)))){
return (obj66356["context"]);
} else {
return undefined;
}
})());
var obj66358_66444 = component;
var obj66360_66445 = (((!((obj66358_66444 == null))))?obj66358_66444:({}));
(obj66360_66445[memo_key] = f);


return f;
} else {
return val__60705__auto__;
}
});
/**
 * Reads a key from `component`
 */
nextjournal.view.get_key = (function nextjournal$view$get_key(component,k,not_found){
var G__66367 = k;
var G__66367__$1 = (((G__66367 instanceof cljs.core.Keyword))?G__66367.fqn:null);
switch (G__66367__$1) {
case "nextjournal.view/props":
return reagent.core.props(component);

break;
case "nextjournal.view/state":
return reagent.core.state_atom(component);

break;
case "nextjournal.view/argv":
return reagent.core.argv(component);

break;
case "re-frame.context/frame":
var obj66369 = component;
if((!((obj66369 == null)))){
return (obj66369["context"]);
} else {
return undefined;
}

break;
case "re-frame.context/subscribe":
return nextjournal.view.memoized_frame_fn(component,"rf_subscribe",re_frame.frame.subscribe);

break;
case "re-frame.context/dispatch":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch",re_frame.frame.dispatch);

break;
case "re-frame.context/dispatch-sync":
return nextjournal.view.memoized_frame_fn(component,"rf_dispatch_sync",re_frame.frame.dispatch_sync);

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(reagent.core.props(component),k,not_found);

}
});
nextjournal.view.wrap_render = (function nextjournal$view$wrap_render(f){
return (function (c){
var argv = reagent.impl.component.get_argv(c);
var props_QMARK_ = (!((reagent.core.props(c) == null)));
var n = cljs.core.count(argv);
var first_child = ((props_QMARK_)?(2):(1));
var extra_children = ((props_QMARK_)?(n - (2)):(n - (1)));
var G__66371 = extra_children;
switch (G__66371) {
case (0):
return f.call(c,c);

break;
case (1):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child));

break;
case (2):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)));

break;
case (3):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)));

break;
case (4):
return f.call(c,c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((1) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((2) + first_child)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,((3) + first_child)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv).slice((1)));

}
});
});
nextjournal.view.constructor_fn = (function nextjournal$view$constructor_fn(p__66378){
var map__66379 = p__66378;
var map__66379__$1 = cljs.core.__destructure_map(map__66379);
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66379__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66379__$1,new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643));
return (function (this$,p__66381){
var map__66383 = p__66381;
var map__66383__$1 = (((((!((map__66383 == null))))?(((((map__66383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66383):map__66383);
var props = map__66383__$1;
var argv = (function (){var obj66395 = map__66383__$1;
if((!((obj66395 == null)))){
return (obj66395[goog.reflect.objectProperty("argv",obj66395)]);
} else {
return undefined;
}
})();
var x66400_66452 = this$;
(x66400_66452.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(x66400_66452.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,null);
}));

(x66400_66452.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var o__$1 = this;
return nextjournal.view.get_key(o__$1,k,not_found);
}));


var temp__5757__auto___66453 = (function (){var or__4253__auto__ = (function (){var G__66405 = argv;
var G__66405__$1 = (((G__66405 == null))?null:reagent.impl.component.extract_props(G__66405));
if((G__66405__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("nextjournal.view","initial-state","nextjournal.view/initial-state",534929643).cljs$core$IFn$_invoke$arity$1(G__66405__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return initial_state;
}
})();
if((temp__5757__auto___66453 == null)){
} else {
var initial_state_66454__$1 = temp__5757__auto___66453;
var state_66455 = ((cljs.core.fn_QMARK_(initial_state_66454__$1))?(initial_state_66454__$1.cljs$core$IFn$_invoke$arity$1 ? initial_state_66454__$1.cljs$core$IFn$_invoke$arity$1(this$) : initial_state_66454__$1.call(null,this$)):initial_state_66454__$1);
var state_atom_66456 = (function (){var G__66408 = state_66455;
if((!((state_66455 instanceof reagent.ratom.RAtom)))){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__66408);
} else {
return G__66408;
}
})();
(this$.cljsState = state_atom_66456);
}

if(cljs.core.truth_(constructor$)){
(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(this$,props) : constructor$.call(null,this$,props));
} else {
}

return this$;
});
});
nextjournal.view.wrap_methods = (function nextjournal$view$wrap_methods(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),nextjournal.view.constructor_fn(m));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.view !== 'undefined') && (typeof nextjournal.view._STAR_notify_watches_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.view._STAR_notify_watches_QMARK__STAR_ = (function (){
if((typeof window !== 'undefined')){
var obj66414_66458 = window;
var obj66414_66459__$1 = (((!((obj66414_66458 == null))))?obj66414_66458:({}));
var inner_obj__60813__auto___66460 = (function (){var child66416 = (function (){var child66415 = obj66414_66459__$1.reagent;
if((!((child66415 == null)))){
return child66415;
} else {
var new_child__60762__auto__ = ({});
var obj66423_66461 = obj66414_66459__$1;
(obj66423_66461.reagent = new_child__60762__auto__);


return new_child__60762__auto__;
}
})().ratom;
if((!((child66416 == null)))){
return child66416;
} else {
var new_child__60762__auto__ = ({});
var obj66426_66462 = (function (){var child66415 = obj66414_66459__$1.reagent;
if((!((child66415 == null)))){
return child66415;
} else {
var new_child__60762__auto____$1 = ({});
var obj66429_66463 = obj66414_66459__$1;
(obj66429_66463.reagent = new_child__60762__auto____$1);


return new_child__60762__auto____$1;
}
})();
(obj66426_66462.ratom = new_child__60762__auto__);


return new_child__60762__auto__;
}
})();
var o__60807__auto___66464 = inner_obj__60813__auto___66460;
var o__60801__auto___66465 = (((!((o__60807__auto___66464 == null))))?o__60807__auto___66464:({}));
var obj66432_66466 = o__60801__auto___66465;
(obj66432_66466.notify_w = (function (notify_w){
return (function (this$,old,new$){
if(nextjournal.view._STAR_notify_watches_QMARK__STAR_ === true){
return (notify_w.cljs$core$IFn$_invoke$arity$3 ? notify_w.cljs$core$IFn$_invoke$arity$3(this$,old,new$) : notify_w.call(null,this$,old,new$));
} else {
return null;
}
});
})(o__60801__auto___66465.notify_w));


} else {
}

return true;
})()
;
}
/**
 * Swap a reactive atom, without causing dependent components to re-render.
 */
nextjournal.view.swap_silently_BANG_ = (function nextjournal$view$swap_silently_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66467 = arguments.length;
var i__4865__auto___66468 = (0);
while(true){
if((i__4865__auto___66468 < len__4864__auto___66467)){
args__4870__auto__.push((arguments[i__4865__auto___66468]));

var G__66469 = (i__4865__auto___66468 + (1));
i__4865__auto___66468 = G__66469;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.view.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_notify_watches_QMARK__STAR__orig_val__66436 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66437 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66437);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66436);
}}));

(nextjournal.view.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.view.swap_silently_BANG_.cljs$lang$applyTo = (function (seq66434){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66434));
}));

nextjournal.view.reset_silently_BANG_ = (function nextjournal$view$reset_silently_BANG_(ratom,value){
var _STAR_notify_watches_QMARK__STAR__orig_val__66439 = nextjournal.view._STAR_notify_watches_QMARK__STAR_;
var _STAR_notify_watches_QMARK__STAR__temp_val__66440 = false;
(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__temp_val__66440);

try{return cljs.core.reset_BANG_(ratom,value);
}finally {(nextjournal.view._STAR_notify_watches_QMARK__STAR_ = _STAR_notify_watches_QMARK__STAR__orig_val__66439);
}});

//# sourceMappingURL=nextjournal.view.js.map
