import "./cljs_env.js";
goog.provide('leva.core');
goog.scope(function(){
  leva.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$leva$dist$leva_cjs=shadow.js.require("module$node_modules$leva$dist$leva_cjs", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
leva.core.Panel_STAR_ = (function leva$core$Panel_STAR_(opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
throw (new Error("Error: we currently require a :state opt."));
}

var _BANG_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(opts);
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts);
var vec__66059 = module$node_modules$leva$dist$leva_cjs.useControls((function (){
return cljs.core.reduce_kv((function (acc,k,v){
var on_change = (function (value,_,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_BANG_state.state,k,new cljs.core.Keyword("leva.core","not-found","leva.core/not-found",1726960877)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,k,value);
} else {
return null;
}
});
var G__66066 = acc;
leva.core.goog$module$goog$object.set(G__66066,cljs.core.name(k),(function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,k,null);
if(cljs.core.truth_(temp__5802__auto__)){
var k_opts = temp__5802__auto__;
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(k_opts,new cljs.core.Keyword(null,"value","value",305978217),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onChange","onChange",-312891301),on_change], 0)));
} else {
return ({"value": v, "onChange": on_change});
}
})());

return G__66066;
}),({}),cljs.core.deref(_BANG_state));
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66059,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66059,(1),null);
module$node_modules$react$index.useEffect((function leva$core$Panel_STAR__$_mount(){
if((((!((_BANG_state == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _BANG_state.reagent$ratom$IReactiveAtom$))))?true:(((!_BANG_state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,_BANG_state):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,_BANG_state))){
var tracker = reagent.core.track_BANG_((function (){
var G__66088 = cljs.core.clj__GT_js(cljs.core.deref(_BANG_state));
return (set.cljs$core$IFn$_invoke$arity$1 ? set.cljs$core$IFn$_invoke$arity$1(G__66088) : set.call(null,G__66088));
}));
return (function leva$core$Panel_STAR__$_mount_$_unmount(){
return reagent.core.dispose_BANG_(tracker);
});
} else {
return undefined;
}
}));

return null;
});
leva.core.PanelOptions = (function leva$core$PanelOptions(opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$leva$dist$leva_cjs.Leva,opts], null);
});
leva.core.Panel = (function leva$core$Panel(opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),leva.core.Panel_STAR_,opts], null);
});

//# sourceMappingURL=leva.core.js.map
