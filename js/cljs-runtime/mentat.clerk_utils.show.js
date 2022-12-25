import "./cljs_env.js";
goog.provide('mentat.clerk_utils.show');
/**
 * Replaces gensyms and regular expressions with stable symbols for consistent
 *   hashing.
 */
mentat.clerk_utils.show.stable_hash_form = (function mentat$clerk_utils$show$stable_hash_form(form){
var _BANG_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var _BANG_syms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return clojure.walk.postwalk((function (x){
if(cljs.core.regexp_QMARK_(x)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["stable-regexp-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_counter,cljs.core.inc))].join(''));
} else {
if((((x instanceof cljs.core.Symbol)) && (cljs.core.not(cljs.core.namespace(x))))){
var or__5045__auto__ = (function (){var fexpr__48407 = cljs.core.deref(_BANG_syms);
return (fexpr__48407.cljs$core$IFn$_invoke$arity$1 ? fexpr__48407.cljs$core$IFn$_invoke$arity$1(x) : fexpr__48407.call(null,x));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var y = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["stable-symbol-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_counter,cljs.core.inc))].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_syms,cljs.core.assoc,x,y);

return y;
}
} else {
return x;

}
}
}),form);
});
mentat.clerk_utils.show.stable_hash = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.hash,mentat.clerk_utils.show.stable_hash_form);

//# sourceMappingURL=mentat.clerk_utils.show.js.map
