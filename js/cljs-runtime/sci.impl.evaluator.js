goog.provide('sci.impl.evaluator');
sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
while(true){
if(args__$1){
var x = cljs.core.first(args__$1);
var v = sci.impl.types.eval(x,ctx,bindings);
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$1);
if(xs){
var G__69441 = xs;
args__$1 = G__69441;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
while(true){
if(args__$1){
var x = cljs.core.first(args__$1);
var v = sci.impl.types.eval(x,ctx,bindings);
var or__4253__auto__ = v;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__69442 = cljs.core.next(args__$1);
args__$1 = G__69442;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs,idxs){
var vec__69121 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
var idx = (0);
while(true){
var let_name = cljs.core.first(let_bindings__$1);
if(cljs.core.truth_(let_name)){
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = sci.impl.types.eval(let_val,ctx__$1,bindings__$1);
(bindings__$1[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,idx)] = v);

var G__69443 = ctx__$1;
var G__69444 = bindings__$1;
var G__69445 = rest_let_bindings;
var G__69446 = (idx + (1));
ctx__$1 = G__69443;
bindings__$1 = G__69444;
let_bindings__$1 = G__69445;
idx = G__69446;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$1], null);
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69121,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69121,(1),null);
return sci.impl.types.eval(exprs,ctx__$1,bindings__$1);
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = sci.impl.types.eval(init,ctx,bindings);
var m__$1 = sci.impl.types.eval(m,ctx,bindings);
var cnn = sci.impl.types.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.utils.var_QMARK_(prev))))?(new sci.lang.Var(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false,false)):prev);
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__69133 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69133,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__69133;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__69137 = arguments.length;
switch (G__69137) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__69139 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69139,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69139,(1),null);
return sci.impl.types.eval(found,ctx,bindings);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__69143 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69143,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69143,(1),null);
return sci.impl.types.eval(found,ctx,bindings);
} else {
return sci.impl.types.eval(case_default,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$,sci_error){
try{var _STAR_in_try_STAR__orig_val__69158 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__69159 = (function (){var or__4253__auto__ = ((cljs.core.not(sci_error)) && (cljs.core.seq(catches)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return sci.impl.utils._STAR_in_try_STAR_;
}
})();
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__69159);

try{return sci.impl.types.eval(body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__69158);
}}catch (e69148){var e = e69148;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__4253__auto__){
return or__4253__auto__;
} else {
if((clazz instanceof sci.impl.types.NodeR)){
var c__4284__auto__ = sci.impl.types.eval(clazz,ctx,bindings);
var x__4285__auto__ = e;
return (x__4285__auto__ instanceof c__4284__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

return sci.impl.types.eval(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c),ctx,bindings);
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__69154 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69154,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69154,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
}finally {sci.impl.types.eval(finally$,ctx,bindings);
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69165_SHARP_){
return sci.impl.types.eval(p1__69165_SHARP_,ctx,bindings);
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
if((instance_expr_STAR_ instanceof sci.impl.records.SciRecord)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
if((instance_expr_STAR_ instanceof sci.impl.deftype.SciType)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_.sci$impl$types$IBox$getVal$arity$1(null),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__4253__auto__ = tag_class;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var allowed_QMARK_ = (function (){var or__4253__auto__ = allowed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69168_SHARP_){
return sci.impl.types.eval(p1__69168_SHARP_,ctx,bindings);
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__69176 = arguments.length;
switch (G__69176) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = sci.impl.types.eval(sym,ctx,bindings);
var res = cljs.core.second((function (){var fexpr__69178 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__69178.cljs$core$IFn$_invoke$arity$3 ? fexpr__69178.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__69178.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.NodeR)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69473 = arguments.length;
var i__4865__auto___69474 = (0);
while(true){
if((i__4865__auto___69474 < len__4864__auto___69473)){
args__4870__auto__.push((arguments[i__4865__auto___69474]));

var G__69475 = (i__4865__auto___69474 + (1));
i__4865__auto___69474 = G__69475;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69180_SHARP_){
if(((cljs.core.seq_QMARK_(p1__69180_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__69180_SHARP_))))){
return cljs.core.second(p1__69180_SHARP_);
} else {
return p1__69180_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__69191 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69191,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69191,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5751__auto____$1 = (function (){var rec_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.demunge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)));
var rec_var = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),rec_ns,class$], null));
return rec_var;
})();
if(cljs.core.truth_(temp__5751__auto____$1)){
var rec_var = temp__5751__auto____$1;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refers","refers",158076809),class$], null),rec_var);

return cljs.core.deref(rec_var);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq69184){
var G__69186 = cljs.core.first(seq69184);
var seq69184__$1 = cljs.core.next(seq69184);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69186,seq69184__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = sci.impl.types.eval(cljs.core.first(exprs__$2),ctx,bindings);
var temp__5751__auto__ = cljs.core.next(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__69482 = exprs__$3;
exprs__$2 = G__69482;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__69389 = cljs.core.count(args);
switch (G__69389) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg69199 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg69199) : f.call(null,arg69199));

break;
case (2):
var arg69200 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69201 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg69200,arg69201) : f.call(null,arg69200,arg69201));

break;
case (3):
var arg69202 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69203 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69204 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg69202,arg69203,arg69204) : f.call(null,arg69202,arg69203,arg69204));

break;
case (4):
var arg69205 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69206 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69207 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69208 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg69205,arg69206,arg69207,arg69208) : f.call(null,arg69205,arg69206,arg69207,arg69208));

break;
case (5):
var arg69209 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69210 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69211 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69212 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69213 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg69209,arg69210,arg69211,arg69212,arg69213) : f.call(null,arg69209,arg69210,arg69211,arg69212,arg69213));

break;
case (6):
var arg69214 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69215 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69216 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69217 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69218 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69219 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg69214,arg69215,arg69216,arg69217,arg69218,arg69219) : f.call(null,arg69214,arg69215,arg69216,arg69217,arg69218,arg69219));

break;
case (7):
var arg69220 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69221 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69222 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69223 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69224 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69225 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69226 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg69220,arg69221,arg69222,arg69223,arg69224,arg69225,arg69226) : f.call(null,arg69220,arg69221,arg69222,arg69223,arg69224,arg69225,arg69226));

break;
case (8):
var arg69227 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69228 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69229 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69230 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69231 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69232 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69233 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69234 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg69227,arg69228,arg69229,arg69230,arg69231,arg69232,arg69233,arg69234) : f.call(null,arg69227,arg69228,arg69229,arg69230,arg69231,arg69232,arg69233,arg69234));

break;
case (9):
var arg69235 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69236 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69237 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69238 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69239 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69240 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69241 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69242 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69243 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg69235,arg69236,arg69237,arg69238,arg69239,arg69240,arg69241,arg69242,arg69243) : f.call(null,arg69235,arg69236,arg69237,arg69238,arg69239,arg69240,arg69241,arg69242,arg69243));

break;
case (10):
var arg69244 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69245 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69246 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69247 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69248 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69249 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69250 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69251 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69252 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69253 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg69244,arg69245,arg69246,arg69247,arg69248,arg69249,arg69250,arg69251,arg69252,arg69253) : f.call(null,arg69244,arg69245,arg69246,arg69247,arg69248,arg69249,arg69250,arg69251,arg69252,arg69253));

break;
case (11):
var arg69254 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69255 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69256 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69257 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69258 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69259 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69260 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69261 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69262 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69263 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69264 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg69254,arg69255,arg69256,arg69257,arg69258,arg69259,arg69260,arg69261,arg69262,arg69263,arg69264) : f.call(null,arg69254,arg69255,arg69256,arg69257,arg69258,arg69259,arg69260,arg69261,arg69262,arg69263,arg69264));

break;
case (12):
var arg69265 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69266 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69267 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69268 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69269 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69270 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69271 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69272 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69273 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69274 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69275 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69276 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg69265,arg69266,arg69267,arg69268,arg69269,arg69270,arg69271,arg69272,arg69273,arg69274,arg69275,arg69276) : f.call(null,arg69265,arg69266,arg69267,arg69268,arg69269,arg69270,arg69271,arg69272,arg69273,arg69274,arg69275,arg69276));

break;
case (13):
var arg69277 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69278 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69279 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69280 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69281 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69282 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69283 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69284 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69285 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69286 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69287 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69288 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69289 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg69277,arg69278,arg69279,arg69280,arg69281,arg69282,arg69283,arg69284,arg69285,arg69286,arg69287,arg69288,arg69289) : f.call(null,arg69277,arg69278,arg69279,arg69280,arg69281,arg69282,arg69283,arg69284,arg69285,arg69286,arg69287,arg69288,arg69289));

break;
case (14):
var arg69290 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69291 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69292 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69293 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69294 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69295 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69296 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69297 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69298 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69299 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69300 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69301 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69302 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69303 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg69290,arg69291,arg69292,arg69293,arg69294,arg69295,arg69296,arg69297,arg69298,arg69299,arg69300,arg69301,arg69302,arg69303) : f.call(null,arg69290,arg69291,arg69292,arg69293,arg69294,arg69295,arg69296,arg69297,arg69298,arg69299,arg69300,arg69301,arg69302,arg69303));

break;
case (15):
var arg69304 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69305 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69306 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69307 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69308 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69309 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69310 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69311 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69312 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69313 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69314 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69315 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69316 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69317 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg69318 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg69304,arg69305,arg69306,arg69307,arg69308,arg69309,arg69310,arg69311,arg69312,arg69313,arg69314,arg69315,arg69316,arg69317,arg69318) : f.call(null,arg69304,arg69305,arg69306,arg69307,arg69308,arg69309,arg69310,arg69311,arg69312,arg69313,arg69314,arg69315,arg69316,arg69317,arg69318));

break;
case (16):
var arg69319 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69320 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69321 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69322 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69323 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69324 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69325 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69326 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69327 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69328 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69329 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69330 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69331 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69332 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg69333 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg69334 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg69319,arg69320,arg69321,arg69322,arg69323,arg69324,arg69325,arg69326,arg69327,arg69328,arg69329,arg69330,arg69331,arg69332,arg69333,arg69334) : f.call(null,arg69319,arg69320,arg69321,arg69322,arg69323,arg69324,arg69325,arg69326,arg69327,arg69328,arg69329,arg69330,arg69331,arg69332,arg69333,arg69334));

break;
case (17):
var arg69335 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69336 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69337 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69338 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69339 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69340 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69341 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69342 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69343 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69344 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69345 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69346 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69347 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69348 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg69349 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg69350 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg69351 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg69335,arg69336,arg69337,arg69338,arg69339,arg69340,arg69341,arg69342,arg69343,arg69344,arg69345,arg69346,arg69347,arg69348,arg69349,arg69350,arg69351) : f.call(null,arg69335,arg69336,arg69337,arg69338,arg69339,arg69340,arg69341,arg69342,arg69343,arg69344,arg69345,arg69346,arg69347,arg69348,arg69349,arg69350,arg69351));

break;
case (18):
var arg69352 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69353 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69354 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69355 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69356 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69357 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69358 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69359 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69360 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69361 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69362 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69363 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69364 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69365 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg69366 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg69367 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg69368 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg69369 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg69352,arg69353,arg69354,arg69355,arg69356,arg69357,arg69358,arg69359,arg69360,arg69361,arg69362,arg69363,arg69364,arg69365,arg69366,arg69367,arg69368,arg69369) : f.call(null,arg69352,arg69353,arg69354,arg69355,arg69356,arg69357,arg69358,arg69359,arg69360,arg69361,arg69362,arg69363,arg69364,arg69365,arg69366,arg69367,arg69368,arg69369));

break;
case (19):
var arg69370 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg69371 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg69372 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg69373 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg69374 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg69375 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg69376 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg69377 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg69378 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg69379 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg69380 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg69381 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg69382 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg69383 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg69384 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg69385 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg69386 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg69387 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
var arg69388 = sci.impl.types.eval(cljs.core.first(args__$18),ctx,bindings);
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg69370,arg69371,arg69372,arg69373,arg69374,arg69375,arg69376,arg69377,arg69378,arg69379,arg69380,arg69381,arg69382,arg69383,arg69384,arg69385,arg69386,arg69387,arg69388) : f.call(null,arg69370,arg69371,arg69372,arg69373,arg69374,arg69375,arg69376,arg69377,arg69378,arg69379,arg69380,arg69381,arg69382,arg69383,arg69384,arg69385,arg69386,arg69387,arg69388));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68870_SHARP_){
return sci.impl.types.eval(p1__68870_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});

//# sourceMappingURL=sci.impl.evaluator.js.map
