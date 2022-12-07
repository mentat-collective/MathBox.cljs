goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64547){
var map__64548 = p__64547;
var map__64548__$1 = cljs.core.__destructure_map(map__64548);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64548__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64548__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64548__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64548__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64549_64576 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64550_64577 = null;
var count__64551_64578 = (0);
var i__64552_64579 = (0);
while(true){
if((i__64552_64579 < count__64551_64578)){
var vec__64563_64580 = chunk__64550_64577.cljs$core$IIndexed$_nth$arity$2(null,i__64552_64579);
var k_64581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64563_64580,(0),null);
var cb_64582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64563_64580,(1),null);
try{var G__64567_64583 = cljs.core.deref(re_frame.trace.traces);
(cb_64582.cljs$core$IFn$_invoke$arity$1 ? cb_64582.cljs$core$IFn$_invoke$arity$1(G__64567_64583) : cb_64582.call(null,G__64567_64583));
}catch (e64566){var e_64584 = e64566;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64581,"while storing",cljs.core.deref(re_frame.trace.traces),e_64584], 0));
}

var G__64585 = seq__64549_64576;
var G__64586 = chunk__64550_64577;
var G__64587 = count__64551_64578;
var G__64588 = (i__64552_64579 + (1));
seq__64549_64576 = G__64585;
chunk__64550_64577 = G__64586;
count__64551_64578 = G__64587;
i__64552_64579 = G__64588;
continue;
} else {
var temp__5753__auto___64589 = cljs.core.seq(seq__64549_64576);
if(temp__5753__auto___64589){
var seq__64549_64590__$1 = temp__5753__auto___64589;
if(cljs.core.chunked_seq_QMARK_(seq__64549_64590__$1)){
var c__4679__auto___64591 = cljs.core.chunk_first(seq__64549_64590__$1);
var G__64592 = cljs.core.chunk_rest(seq__64549_64590__$1);
var G__64593 = c__4679__auto___64591;
var G__64594 = cljs.core.count(c__4679__auto___64591);
var G__64595 = (0);
seq__64549_64576 = G__64592;
chunk__64550_64577 = G__64593;
count__64551_64578 = G__64594;
i__64552_64579 = G__64595;
continue;
} else {
var vec__64568_64596 = cljs.core.first(seq__64549_64590__$1);
var k_64597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64568_64596,(0),null);
var cb_64598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64568_64596,(1),null);
try{var G__64572_64599 = cljs.core.deref(re_frame.trace.traces);
(cb_64598.cljs$core$IFn$_invoke$arity$1 ? cb_64598.cljs$core$IFn$_invoke$arity$1(G__64572_64599) : cb_64598.call(null,G__64572_64599));
}catch (e64571){var e_64600 = e64571;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64597,"while storing",cljs.core.deref(re_frame.trace.traces),e_64600], 0));
}

var G__64601 = cljs.core.next(seq__64549_64590__$1);
var G__64602 = null;
var G__64603 = (0);
var G__64604 = (0);
seq__64549_64576 = G__64601;
chunk__64550_64577 = G__64602;
count__64551_64578 = G__64603;
i__64552_64579 = G__64604;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
