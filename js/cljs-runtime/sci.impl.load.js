import "./cljs_env.js";
goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__56623){
var vec__56624 = p__56623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56624,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (k instanceof cljs.core.Symbol);
if(and__5043__auto__){
var and__5043__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__56634){
var map__56639 = p__56634;
var map__56639__$1 = cljs.core.__destructure_map(map__56639);
var _parsed_libspec = map__56639__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56639__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__56650 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56650,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56650,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___56989 = (function (){var G__56658 = the_loaded_ns;
var G__56658__$1 = (((G__56658 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__56658));
var G__56658__$2 = (((G__56658__$1 == null))?null:cljs.core.meta(G__56658__$1));
if((G__56658__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__56658__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___56989)){
var on_loaded_56990 = temp__5804__auto___56989;
var G__56662_56991 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_56990.cljs$core$IFn$_invoke$arity$1 ? on_loaded_56990.cljs$core$IFn$_invoke$arity$1(G__56662_56991) : on_loaded_56990.call(null,G__56662_56991));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var temp__5802__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var as_alias = temp__5802__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__56678 = opts;
var map__56678__$1 = cljs.core.__destructure_map(map__56678);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56678__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56678__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = reload_all;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5802__auto___56996__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5802__auto___56996__$1)){
var the_loaded_ns_56997 = temp__5802__auto___56996__$1;
var loading_56998 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5043__auto__ = loading_56998;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_56998.indexOf(lib__$1))));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_56998,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_56997,lib__$1,opts));
}
} else {
var temp__5802__auto___57002__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___57002__$2)){
var load_fn_57003 = temp__5802__auto___57002__$2;
var curr_ns_57004 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5802__auto___57005__$3 = (function (){var G__56686 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_57004),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_57003.cljs$core$IFn$_invoke$arity$1 ? load_fn_57003.cljs$core$IFn$_invoke$arity$1(G__56686) : load_fn_57003.call(null,G__56686));
})();
if(cljs.core.truth_(temp__5802__auto___57005__$3)){
var map__56690_57006 = temp__5802__auto___57005__$3;
var map__56690_57007__$1 = cljs.core.__destructure_map(map__56690_57006);
var file_57008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690_57007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_57009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690_57007__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_57010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690_57007__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_57012__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_57009)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_57004,sci.impl.utils.current_file,file_57008]));

try{var fexpr__56696_57016 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__56696_57016.cljs$core$IFn$_invoke$arity$2 ? fexpr__56696_57016.cljs$core$IFn$_invoke$arity$2(ctx_57012__$1,source_57009) : fexpr__56696_57016.call(null,ctx_57012__$1,source_57009));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e56693){if((e56693 instanceof Error)){
var e_57017 = e56693;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_57017;
} else {
throw e56693;

}
}} else {
}

if(cljs.core.truth_(handled_57010)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__5045__auto___57019 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5045__auto___57019)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57020 = arguments.length;
var i__5770__auto___57021 = (0);
while(true){
if((i__5770__auto___57021 < len__5769__auto___57020)){
args__5775__auto__.push((arguments[i__5770__auto___57021]));

var G__57022 = (i__5770__auto___57021 + (1));
i__5770__auto___57021 = G__57022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5043__auto__ = prefix;
if(cljs.core.truth_(and__5043__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5043__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq56722){
var G__56723 = cljs.core.first(seq56722);
var seq56722__$1 = cljs.core.next(seq56722);
var G__56724 = cljs.core.first(seq56722__$1);
var seq56722__$2 = cljs.core.next(seq56722__$1);
var G__56725 = cljs.core.first(seq56722__$2);
var seq56722__$3 = cljs.core.next(seq56722__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56723,G__56724,G__56725,seq56722__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_57043 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_57044 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_57043,flags));
if(unsupported_57044){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_57044)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__56743 = cljs.core.seq(args_STAR___$1);
var chunk__56744 = null;
var count__56745 = (0);
var i__56746 = (0);
while(true){
if((i__56746 < count__56745)){
var arg = chunk__56744.cljs$core$IIndexed$_nth$arity$2(null,i__56746);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__56802_57050 = arg;
var seq__56803_57051 = cljs.core.seq(vec__56802_57050);
var first__56804_57052 = cljs.core.first(seq__56803_57051);
var seq__56803_57053__$1 = cljs.core.next(seq__56803_57051);
var prefix_57054 = first__56804_57052;
var args_STAR__57055__$2 = seq__56803_57053__$1;
if((prefix_57054 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__56805_57057 = cljs.core.seq(args_STAR__57055__$2);
var chunk__56806_57058 = null;
var count__56807_57059 = (0);
var i__56808_57060 = (0);
while(true){
if((i__56808_57060 < count__56807_57059)){
var arg_57064__$1 = chunk__56806_57058.cljs$core$IIndexed$_nth$arity$2(null,i__56808_57060);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_57054,sci.impl.load.prependss(arg_57064__$1,opts));


var G__57065 = seq__56805_57057;
var G__57066 = chunk__56806_57058;
var G__57067 = count__56807_57059;
var G__57068 = (i__56808_57060 + (1));
seq__56805_57057 = G__57065;
chunk__56806_57058 = G__57066;
count__56807_57059 = G__57067;
i__56808_57060 = G__57068;
continue;
} else {
var temp__5804__auto___57069 = cljs.core.seq(seq__56805_57057);
if(temp__5804__auto___57069){
var seq__56805_57070__$1 = temp__5804__auto___57069;
if(cljs.core.chunked_seq_QMARK_(seq__56805_57070__$1)){
var c__5568__auto___57072 = cljs.core.chunk_first(seq__56805_57070__$1);
var G__57073 = cljs.core.chunk_rest(seq__56805_57070__$1);
var G__57074 = c__5568__auto___57072;
var G__57075 = cljs.core.count(c__5568__auto___57072);
var G__57076 = (0);
seq__56805_57057 = G__57073;
chunk__56806_57058 = G__57074;
count__56807_57059 = G__57075;
i__56808_57060 = G__57076;
continue;
} else {
var arg_57077__$1 = cljs.core.first(seq__56805_57070__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_57054,sci.impl.load.prependss(arg_57077__$1,opts));


var G__57078 = cljs.core.next(seq__56805_57070__$1);
var G__57079 = null;
var G__57080 = (0);
var G__57081 = (0);
seq__56805_57057 = G__57078;
chunk__56806_57058 = G__57079;
count__56807_57059 = G__57080;
i__56808_57060 = G__57081;
continue;
}
} else {
}
}
break;
}
}


var G__57083 = seq__56743;
var G__57084 = chunk__56744;
var G__57085 = count__56745;
var G__57086 = (i__56746 + (1));
seq__56743 = G__57083;
chunk__56744 = G__57084;
count__56745 = G__57085;
i__56746 = G__57086;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56743);
if(temp__5804__auto__){
var seq__56743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56743__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56743__$1);
var G__57088 = cljs.core.chunk_rest(seq__56743__$1);
var G__57089 = c__5568__auto__;
var G__57090 = cljs.core.count(c__5568__auto__);
var G__57091 = (0);
seq__56743 = G__57088;
chunk__56744 = G__57089;
count__56745 = G__57090;
i__56746 = G__57091;
continue;
} else {
var arg = cljs.core.first(seq__56743__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__56819_57092 = arg;
var seq__56820_57093 = cljs.core.seq(vec__56819_57092);
var first__56821_57094 = cljs.core.first(seq__56820_57093);
var seq__56820_57095__$1 = cljs.core.next(seq__56820_57093);
var prefix_57096 = first__56821_57094;
var args_STAR__57097__$2 = seq__56820_57095__$1;
if((prefix_57096 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__56822_57098 = cljs.core.seq(args_STAR__57097__$2);
var chunk__56823_57099 = null;
var count__56824_57100 = (0);
var i__56825_57101 = (0);
while(true){
if((i__56825_57101 < count__56824_57100)){
var arg_57102__$1 = chunk__56823_57099.cljs$core$IIndexed$_nth$arity$2(null,i__56825_57101);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_57096,sci.impl.load.prependss(arg_57102__$1,opts));


var G__57103 = seq__56822_57098;
var G__57104 = chunk__56823_57099;
var G__57105 = count__56824_57100;
var G__57106 = (i__56825_57101 + (1));
seq__56822_57098 = G__57103;
chunk__56823_57099 = G__57104;
count__56824_57100 = G__57105;
i__56825_57101 = G__57106;
continue;
} else {
var temp__5804__auto___57107__$1 = cljs.core.seq(seq__56822_57098);
if(temp__5804__auto___57107__$1){
var seq__56822_57108__$1 = temp__5804__auto___57107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56822_57108__$1)){
var c__5568__auto___57109 = cljs.core.chunk_first(seq__56822_57108__$1);
var G__57110 = cljs.core.chunk_rest(seq__56822_57108__$1);
var G__57111 = c__5568__auto___57109;
var G__57112 = cljs.core.count(c__5568__auto___57109);
var G__57113 = (0);
seq__56822_57098 = G__57110;
chunk__56823_57099 = G__57111;
count__56824_57100 = G__57112;
i__56825_57101 = G__57113;
continue;
} else {
var arg_57114__$1 = cljs.core.first(seq__56822_57108__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_57096,sci.impl.load.prependss(arg_57114__$1,opts));


var G__57115 = cljs.core.next(seq__56822_57108__$1);
var G__57116 = null;
var G__57117 = (0);
var G__57118 = (0);
seq__56822_57098 = G__57115;
chunk__56823_57099 = G__57116;
count__56824_57100 = G__57117;
i__56825_57101 = G__57118;
continue;
}
} else {
}
}
break;
}
}


var G__57119 = cljs.core.next(seq__56743__$1);
var G__57120 = null;
var G__57121 = (0);
var G__57122 = (0);
seq__56743 = G__57119;
chunk__56744 = G__57120;
count__56745 = G__57121;
i__56746 = G__57122;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57123 = arguments.length;
var i__5770__auto___57124 = (0);
while(true){
if((i__5770__auto___57124 < len__5769__auto___57123)){
args__5775__auto__.push((arguments[i__5770__auto___57124]));

var G__57141 = (i__5770__auto___57124 + (1));
i__5770__auto___57124 = G__57141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq56860){
var G__56861 = cljs.core.first(seq56860);
var seq56860__$1 = cljs.core.next(seq56860);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56861,seq56860__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57143 = arguments.length;
var i__5770__auto___57144 = (0);
while(true){
if((i__5770__auto___57144 < len__5769__auto___57143)){
args__5775__auto__.push((arguments[i__5770__auto___57144]));

var G__57145 = (i__5770__auto___57144 + (1));
i__5770__auto___57144 = G__57145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq56884){
var G__56885 = cljs.core.first(seq56884);
var seq56884__$1 = cljs.core.next(seq56884);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56885,seq56884__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__56902 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(1),null);
var G__56905_57147 = k;
var G__56905_57148__$1 = (((G__56905_57147 instanceof cljs.core.Keyword))?G__56905_57147.fqn:null);
switch (G__56905_57148__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym){
return (function (acc,p__56916){
var vec__56917 = p__56916;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56917,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56917,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__56905_57147,G__56905_57148__$1,vec__56902,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56905_57148__$1)].join('')));

}

var G__57153 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__57153;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5043__auto__ = to_do;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5043__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5045__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57175 = arguments.length;
var i__5770__auto___57176 = (0);
while(true){
if((i__5770__auto___57176 < len__5769__auto___57175)){
args__5775__auto__.push((arguments[i__5770__auto___57176]));

var G__57177 = (i__5770__auto___57176 + (1));
i__5770__auto___57176 = G__57177;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq56935){
var G__56936 = cljs.core.first(seq56935);
var seq56935__$1 = cljs.core.next(seq56935);
var G__56937 = cljs.core.first(seq56935__$1);
var seq56935__$2 = cljs.core.next(seq56935__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56936,G__56937,seq56935__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
