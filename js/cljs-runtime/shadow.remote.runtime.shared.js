import "./cljs_env.js";
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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46099,res){
var map__46100 = p__46099;
var map__46100__$1 = cljs.core.__destructure_map(map__46100);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46100__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46100__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46106 = res;
var G__46106__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46106,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46106);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46106__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46106__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46150 = arguments.length;
switch (G__46150) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46173,msg,handlers,timeout_after_ms){
var map__46174 = p__46173;
var map__46174__$1 = cljs.core.__destructure_map(map__46174);
var runtime = map__46174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46299 = arguments.length;
var i__5770__auto___46300 = (0);
while(true){
if((i__5770__auto___46300 < len__5769__auto___46299)){
args__5775__auto__.push((arguments[i__5770__auto___46300]));

var G__46302 = (i__5770__auto___46300 + (1));
i__5770__auto___46300 = G__46302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46193,ev,args){
var map__46194 = p__46193;
var map__46194__$1 = cljs.core.__destructure_map(map__46194);
var runtime = map__46194__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46194__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46195 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46198 = null;
var count__46199 = (0);
var i__46200 = (0);
while(true){
if((i__46200 < count__46199)){
var ext = chunk__46198.cljs$core$IIndexed$_nth$arity$2(null,i__46200);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46307 = seq__46195;
var G__46308 = chunk__46198;
var G__46309 = count__46199;
var G__46310 = (i__46200 + (1));
seq__46195 = G__46307;
chunk__46198 = G__46308;
count__46199 = G__46309;
i__46200 = G__46310;
continue;
} else {
var G__46311 = seq__46195;
var G__46312 = chunk__46198;
var G__46313 = count__46199;
var G__46314 = (i__46200 + (1));
seq__46195 = G__46311;
chunk__46198 = G__46312;
count__46199 = G__46313;
i__46200 = G__46314;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46195);
if(temp__5804__auto__){
var seq__46195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46195__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46195__$1);
var G__46316 = cljs.core.chunk_rest(seq__46195__$1);
var G__46317 = c__5568__auto__;
var G__46318 = cljs.core.count(c__5568__auto__);
var G__46319 = (0);
seq__46195 = G__46316;
chunk__46198 = G__46317;
count__46199 = G__46318;
i__46200 = G__46319;
continue;
} else {
var ext = cljs.core.first(seq__46195__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46321 = cljs.core.next(seq__46195__$1);
var G__46322 = null;
var G__46323 = (0);
var G__46324 = (0);
seq__46195 = G__46321;
chunk__46198 = G__46322;
count__46199 = G__46323;
i__46200 = G__46324;
continue;
} else {
var G__46325 = cljs.core.next(seq__46195__$1);
var G__46326 = null;
var G__46327 = (0);
var G__46328 = (0);
seq__46195 = G__46325;
chunk__46198 = G__46326;
count__46199 = G__46327;
i__46200 = G__46328;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46189){
var G__46190 = cljs.core.first(seq46189);
var seq46189__$1 = cljs.core.next(seq46189);
var G__46191 = cljs.core.first(seq46189__$1);
var seq46189__$2 = cljs.core.next(seq46189__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46190,G__46191,seq46189__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46207,p__46208){
var map__46209 = p__46207;
var map__46209__$1 = cljs.core.__destructure_map(map__46209);
var runtime = map__46209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46210 = p__46208;
var map__46210__$1 = cljs.core.__destructure_map(map__46210);
var msg = map__46210__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46210__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46211 = cljs.core.deref(state_ref);
var map__46211__$1 = cljs.core.__destructure_map(map__46211);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46211__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46213){
var map__46214 = p__46213;
var map__46214__$1 = cljs.core.__destructure_map(map__46214);
var runtime = map__46214__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46214__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46218,msg){
var map__46220 = p__46218;
var map__46220__$1 = cljs.core.__destructure_map(map__46220);
var runtime = map__46220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46228,key,p__46229){
var map__46230 = p__46228;
var map__46230__$1 = cljs.core.__destructure_map(map__46230);
var state = map__46230__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46230__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46231 = p__46229;
var map__46231__$1 = cljs.core.__destructure_map(map__46231);
var spec = map__46231__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46231__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46234,key,spec){
var map__46235 = p__46234;
var map__46235__$1 = cljs.core.__destructure_map(map__46235);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46235__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46236_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46236_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46237_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46237_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46238_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46238_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46239_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46239_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46240_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46240_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46251,key){
var map__46252 = p__46251;
var map__46252__$1 = cljs.core.__destructure_map(map__46252);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46254,msg){
var map__46255 = p__46254;
var map__46255__$1 = cljs.core.__destructure_map(map__46255);
var runtime = map__46255__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46255__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46261,p__46262){
var map__46263 = p__46261;
var map__46263__$1 = cljs.core.__destructure_map(map__46263);
var runtime = map__46263__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46263__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46264 = p__46262;
var map__46264__$1 = cljs.core.__destructure_map(map__46264);
var msg = map__46264__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46264__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__46271 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46273 = null;
var count__46274 = (0);
var i__46275 = (0);
while(true){
if((i__46275 < count__46274)){
var map__46280 = chunk__46273.cljs$core$IIndexed$_nth$arity$2(null,i__46275);
var map__46280__$1 = cljs.core.__destructure_map(map__46280);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46280__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46357 = seq__46271;
var G__46358 = chunk__46273;
var G__46359 = count__46274;
var G__46360 = (i__46275 + (1));
seq__46271 = G__46357;
chunk__46273 = G__46358;
count__46274 = G__46359;
i__46275 = G__46360;
continue;
} else {
var G__46361 = seq__46271;
var G__46362 = chunk__46273;
var G__46363 = count__46274;
var G__46364 = (i__46275 + (1));
seq__46271 = G__46361;
chunk__46273 = G__46362;
count__46274 = G__46363;
i__46275 = G__46364;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46271);
if(temp__5804__auto__){
var seq__46271__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46271__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46271__$1);
var G__46366 = cljs.core.chunk_rest(seq__46271__$1);
var G__46367 = c__5568__auto__;
var G__46368 = cljs.core.count(c__5568__auto__);
var G__46369 = (0);
seq__46271 = G__46366;
chunk__46273 = G__46367;
count__46274 = G__46368;
i__46275 = G__46369;
continue;
} else {
var map__46284 = cljs.core.first(seq__46271__$1);
var map__46284__$1 = cljs.core.__destructure_map(map__46284);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46284__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46370 = cljs.core.next(seq__46271__$1);
var G__46371 = null;
var G__46372 = (0);
var G__46373 = (0);
seq__46271 = G__46370;
chunk__46273 = G__46371;
count__46274 = G__46372;
i__46275 = G__46373;
continue;
} else {
var G__46374 = cljs.core.next(seq__46271__$1);
var G__46376 = null;
var G__46377 = (0);
var G__46378 = (0);
seq__46271 = G__46374;
chunk__46273 = G__46376;
count__46274 = G__46377;
i__46275 = G__46378;
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
