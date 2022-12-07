goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__67043 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67044 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67044);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__67047 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67048 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67048);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67047);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67043);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__67051 = arguments.length;
switch (G__67051) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__67052 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67052,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67052,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__67060_67082 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__67061_67083 = null;
var count__67062_67084 = (0);
var i__67063_67085 = (0);
while(true){
if((i__67063_67085 < count__67062_67084)){
var vec__67072_67086 = chunk__67061_67083.cljs$core$IIndexed$_nth$arity$2(null,i__67063_67085);
var container_67087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67072_67086,(0),null);
var comp_67088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67072_67086,(1),null);
reagent.dom.re_render_component(comp_67088,container_67087);


var G__67091 = seq__67060_67082;
var G__67092 = chunk__67061_67083;
var G__67093 = count__67062_67084;
var G__67094 = (i__67063_67085 + (1));
seq__67060_67082 = G__67091;
chunk__67061_67083 = G__67092;
count__67062_67084 = G__67093;
i__67063_67085 = G__67094;
continue;
} else {
var temp__5753__auto___67095 = cljs.core.seq(seq__67060_67082);
if(temp__5753__auto___67095){
var seq__67060_67096__$1 = temp__5753__auto___67095;
if(cljs.core.chunked_seq_QMARK_(seq__67060_67096__$1)){
var c__4679__auto___67097 = cljs.core.chunk_first(seq__67060_67096__$1);
var G__67098 = cljs.core.chunk_rest(seq__67060_67096__$1);
var G__67099 = c__4679__auto___67097;
var G__67100 = cljs.core.count(c__4679__auto___67097);
var G__67101 = (0);
seq__67060_67082 = G__67098;
chunk__67061_67083 = G__67099;
count__67062_67084 = G__67100;
i__67063_67085 = G__67101;
continue;
} else {
var vec__67077_67102 = cljs.core.first(seq__67060_67096__$1);
var container_67103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67077_67102,(0),null);
var comp_67104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67077_67102,(1),null);
reagent.dom.re_render_component(comp_67104,container_67103);


var G__67105 = cljs.core.next(seq__67060_67096__$1);
var G__67106 = null;
var G__67107 = (0);
var G__67108 = (0);
seq__67060_67082 = G__67105;
chunk__67061_67083 = G__67106;
count__67062_67084 = G__67107;
i__67063_67085 = G__67108;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
