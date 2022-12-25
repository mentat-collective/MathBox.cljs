import "./cljs_env.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49988,p__49989){
var map__49990 = p__49988;
var map__49990__$1 = cljs.core.__destructure_map(map__49990);
var svc = map__49990__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49991 = p__49989;
var map__49991__$1 = cljs.core.__destructure_map(map__49991);
var msg = map__49991__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49991__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49991__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50010,p__50011){
var map__50014 = p__50010;
var map__50014__$1 = cljs.core.__destructure_map(map__50014);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50014__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50015 = p__50011;
var map__50015__$1 = cljs.core.__destructure_map(map__50015);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50015__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50024,p__50025){
var map__50026 = p__50024;
var map__50026__$1 = cljs.core.__destructure_map(map__50026);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50026__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50026__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50027 = p__50025;
var map__50027__$1 = cljs.core.__destructure_map(map__50027);
var msg = map__50027__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50027__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50033,tid){
var map__50034 = p__50033;
var map__50034__$1 = cljs.core.__destructure_map(map__50034);
var svc = map__50034__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50034__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50048 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50049 = null;
var count__50050 = (0);
var i__50051 = (0);
while(true){
if((i__50051 < count__50050)){
var vec__50064 = chunk__50049.cljs$core$IIndexed$_nth$arity$2(null,i__50051);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50077 = seq__50048;
var G__50078 = chunk__50049;
var G__50079 = count__50050;
var G__50080 = (i__50051 + (1));
seq__50048 = G__50077;
chunk__50049 = G__50078;
count__50050 = G__50079;
i__50051 = G__50080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50048);
if(temp__5804__auto__){
var seq__50048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50048__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50048__$1);
var G__50084 = cljs.core.chunk_rest(seq__50048__$1);
var G__50085 = c__5568__auto__;
var G__50086 = cljs.core.count(c__5568__auto__);
var G__50087 = (0);
seq__50048 = G__50084;
chunk__50049 = G__50085;
count__50050 = G__50086;
i__50051 = G__50087;
continue;
} else {
var vec__50067 = cljs.core.first(seq__50048__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50067,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50067,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50088 = cljs.core.next(seq__50048__$1);
var G__50089 = null;
var G__50090 = (0);
var G__50091 = (0);
seq__50048 = G__50088;
chunk__50049 = G__50089;
count__50050 = G__50090;
i__50051 = G__50091;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50036_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50036_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50037_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50037_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50039_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50039_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50040_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50040_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50075){
var map__50076 = p__50075;
var map__50076__$1 = cljs.core.__destructure_map(map__50076);
var svc = map__50076__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50076__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
