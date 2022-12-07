goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__56871,res){
var map__56874 = p__56871;
var map__56874__$1 = cljs.core.__destructure_map(map__56874);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56874__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56874__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__56877 = res;
var G__56877__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56877,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__56877);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56877__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__56877__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__56914 = arguments.length;
switch (G__56914) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__56969,msg,handlers,timeout_after_ms){
var map__56971 = p__56969;
var map__56971__$1 = cljs.core.__destructure_map(map__56971);
var runtime = map__56971__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56971__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57487 = arguments.length;
var i__4865__auto___57488 = (0);
while(true){
if((i__4865__auto___57488 < len__4864__auto___57487)){
args__4870__auto__.push((arguments[i__4865__auto___57488]));

var G__57491 = (i__4865__auto___57488 + (1));
i__4865__auto___57488 = G__57491;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__57012,ev,args){
var map__57013 = p__57012;
var map__57013__$1 = cljs.core.__destructure_map(map__57013);
var runtime = map__57013__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57013__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__57016 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57019 = null;
var count__57020 = (0);
var i__57021 = (0);
while(true){
if((i__57021 < count__57020)){
var ext = chunk__57019.cljs$core$IIndexed$_nth$arity$2(null,i__57021);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57541 = seq__57016;
var G__57542 = chunk__57019;
var G__57543 = count__57020;
var G__57544 = (i__57021 + (1));
seq__57016 = G__57541;
chunk__57019 = G__57542;
count__57020 = G__57543;
i__57021 = G__57544;
continue;
} else {
var G__57546 = seq__57016;
var G__57547 = chunk__57019;
var G__57548 = count__57020;
var G__57549 = (i__57021 + (1));
seq__57016 = G__57546;
chunk__57019 = G__57547;
count__57020 = G__57548;
i__57021 = G__57549;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57016);
if(temp__5753__auto__){
var seq__57016__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57016__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57016__$1);
var G__57553 = cljs.core.chunk_rest(seq__57016__$1);
var G__57554 = c__4679__auto__;
var G__57555 = cljs.core.count(c__4679__auto__);
var G__57556 = (0);
seq__57016 = G__57553;
chunk__57019 = G__57554;
count__57020 = G__57555;
i__57021 = G__57556;
continue;
} else {
var ext = cljs.core.first(seq__57016__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57563 = cljs.core.next(seq__57016__$1);
var G__57564 = null;
var G__57565 = (0);
var G__57566 = (0);
seq__57016 = G__57563;
chunk__57019 = G__57564;
count__57020 = G__57565;
i__57021 = G__57566;
continue;
} else {
var G__57567 = cljs.core.next(seq__57016__$1);
var G__57568 = null;
var G__57569 = (0);
var G__57570 = (0);
seq__57016 = G__57567;
chunk__57019 = G__57568;
count__57020 = G__57569;
i__57021 = G__57570;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq56985){
var G__56987 = cljs.core.first(seq56985);
var seq56985__$1 = cljs.core.next(seq56985);
var G__56988 = cljs.core.first(seq56985__$1);
var seq56985__$2 = cljs.core.next(seq56985__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56987,G__56988,seq56985__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57128,p__57129){
var map__57132 = p__57128;
var map__57132__$1 = cljs.core.__destructure_map(map__57132);
var runtime = map__57132__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57132__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57133 = p__57129;
var map__57133__$1 = cljs.core.__destructure_map(map__57133);
var msg = map__57133__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57133__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__57152 = cljs.core.deref(state_ref);
var map__57152__$1 = cljs.core.__destructure_map(map__57152);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57152__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57152__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__57169){
var map__57177 = p__57169;
var map__57177__$1 = cljs.core.__destructure_map(map__57177);
var runtime = map__57177__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57177__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57218,msg){
var map__57220 = p__57218;
var map__57220__$1 = cljs.core.__destructure_map(map__57220);
var runtime = map__57220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57241,key,p__57242){
var map__57243 = p__57241;
var map__57243__$1 = cljs.core.__destructure_map(map__57243);
var state = map__57243__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57243__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57244 = p__57242;
var map__57244__$1 = cljs.core.__destructure_map(map__57244);
var spec = map__57244__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57244__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57266,key,spec){
var map__57271 = p__57266;
var map__57271__$1 = cljs.core.__destructure_map(map__57271);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57272_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57272_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57273_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57273_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57274_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57274_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__57275_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__57275_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57276_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57276_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57297,key){
var map__57298 = p__57297;
var map__57298__$1 = cljs.core.__destructure_map(map__57298);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__57299,msg){
var map__57300 = p__57299;
var map__57300__$1 = cljs.core.__destructure_map(map__57300);
var runtime = map__57300__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57300__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__57301,p__57302){
var map__57303 = p__57301;
var map__57303__$1 = cljs.core.__destructure_map(map__57303);
var runtime = map__57303__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57303__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57304 = p__57302;
var map__57304__$1 = cljs.core.__destructure_map(map__57304);
var msg = map__57304__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57304__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57304__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__57320 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57322 = null;
var count__57323 = (0);
var i__57324 = (0);
while(true){
if((i__57324 < count__57323)){
var map__57348 = chunk__57322.cljs$core$IIndexed$_nth$arity$2(null,i__57324);
var map__57348__$1 = cljs.core.__destructure_map(map__57348);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57348__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57655 = seq__57320;
var G__57656 = chunk__57322;
var G__57657 = count__57323;
var G__57658 = (i__57324 + (1));
seq__57320 = G__57655;
chunk__57322 = G__57656;
count__57323 = G__57657;
i__57324 = G__57658;
continue;
} else {
var G__57659 = seq__57320;
var G__57660 = chunk__57322;
var G__57661 = count__57323;
var G__57662 = (i__57324 + (1));
seq__57320 = G__57659;
chunk__57322 = G__57660;
count__57323 = G__57661;
i__57324 = G__57662;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57320);
if(temp__5753__auto__){
var seq__57320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57320__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57320__$1);
var G__57663 = cljs.core.chunk_rest(seq__57320__$1);
var G__57664 = c__4679__auto__;
var G__57665 = cljs.core.count(c__4679__auto__);
var G__57666 = (0);
seq__57320 = G__57663;
chunk__57322 = G__57664;
count__57323 = G__57665;
i__57324 = G__57666;
continue;
} else {
var map__57357 = cljs.core.first(seq__57320__$1);
var map__57357__$1 = cljs.core.__destructure_map(map__57357);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57357__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57668 = cljs.core.next(seq__57320__$1);
var G__57669 = null;
var G__57670 = (0);
var G__57671 = (0);
seq__57320 = G__57668;
chunk__57322 = G__57669;
count__57323 = G__57670;
i__57324 = G__57671;
continue;
} else {
var G__57673 = cljs.core.next(seq__57320__$1);
var G__57674 = null;
var G__57675 = (0);
var G__57676 = (0);
seq__57320 = G__57673;
chunk__57322 = G__57674;
count__57323 = G__57675;
i__57324 = G__57676;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
