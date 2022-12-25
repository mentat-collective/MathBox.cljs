import "./cljs_env.js";
goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__60732 = arguments.length;
switch (G__60732) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__60744 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__60745 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__60745);

try{var G__60746 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__60746);

return G__60746;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__60744);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__60747 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__60748 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__60748);

try{var G__60749 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__60749);

return G__60749;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__60747);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__60750 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__60751 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__60751);

try{var G__60752 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__60752);

return G__60752;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__60750);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__60753 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__60754 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__60754);

try{var G__60755 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__60755);

return G__60755;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__60753);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__60756 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__60757 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__60757);

try{var G__60758 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__60758);

return G__60758;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__60756);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__60816 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__60817 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60817);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60816);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60989 = arguments.length;
var i__5770__auto___60990 = (0);
while(true){
if((i__5770__auto___60990 < len__5769__auto___60989)){
args__5775__auto__.push((arguments[i__5770__auto___60990]));

var G__60991 = (i__5770__auto___60990 + (1));
i__5770__auto___60990 = G__60991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__60847 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__60848 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60849 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60850 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60851 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60852 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60853 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60854 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__60855 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__60856 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60857 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60858 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60859 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60860 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60861 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60862 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60855);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60856);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60857);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60858);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60859);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60860);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60861);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60862);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60854);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60853);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60852);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60851);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60850);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60849);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60848);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60847);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq60827){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60827));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__60863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__60864 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60864);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60863);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60992 = arguments.length;
var i__5770__auto___60993 = (0);
while(true){
if((i__5770__auto___60993 < len__5769__auto___60992)){
args__5775__auto__.push((arguments[i__5770__auto___60993]));

var G__60994 = (i__5770__auto___60993 + (1));
i__5770__auto___60993 = G__60994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__60874 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60875 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60876 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60877 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60878 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60879 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60880 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__60881 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60882 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60883 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60884 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60885 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60886 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60887 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60881);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60882);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60883);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60884);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60885);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60886);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60887);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60880);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60879);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60878);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60877);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60876);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60875);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60874);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq60865){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60865));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60995 = arguments.length;
var i__5770__auto___60996 = (0);
while(true){
if((i__5770__auto___60996 < len__5769__auto___60995)){
args__5775__auto__.push((arguments[i__5770__auto___60996]));

var G__60997 = (i__5770__auto___60996 + (1));
i__5770__auto___60996 = G__60997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__60891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__60892 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60893 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60894 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60895 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60896 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60897 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60898 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__60899 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__60900 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60901 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60902 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60903 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60904 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60905 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60906 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60899);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60900);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60901);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60902);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60903);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60904);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60905);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60906);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60898);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60897);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60896);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60895);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60894);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60893);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60892);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60891);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq60890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60890));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60999 = arguments.length;
var i__5770__auto___61001 = (0);
while(true){
if((i__5770__auto___61001 < len__5769__auto___60999)){
args__5775__auto__.push((arguments[i__5770__auto___61001]));

var G__61002 = (i__5770__auto___61001 + (1));
i__5770__auto___61001 = G__61002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__60909 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60910 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60911 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60912 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60913 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60914 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60915 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__60916 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60917 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60918 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60919 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60920 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60922 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60923 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60916);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60917);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60918);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60919);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60920);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60922);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60923);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60915);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60914);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60913);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60912);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60911);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60910);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60909);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq60908){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60908));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61003 = arguments.length;
var i__5770__auto___61004 = (0);
while(true){
if((i__5770__auto___61004 < len__5769__auto___61003)){
args__5775__auto__.push((arguments[i__5770__auto___61004]));

var G__61005 = (i__5770__auto___61004 + (1));
i__5770__auto___61004 = G__61005;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__60933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__60934 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60935 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60936 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60937 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60938 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60939 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__60940 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__60941 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60942 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__60943 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60944 = null;
var _STAR_print_newline_STAR__temp_val__60945 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60946 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60940);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60941);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60942);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60943);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60944);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60945);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60946);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60939);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60938);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60937);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60936);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60935);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60934);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60933);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq60926){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60926));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61006 = arguments.length;
var i__5770__auto___61007 = (0);
while(true){
if((i__5770__auto___61007 < len__5769__auto___61006)){
args__5775__auto__.push((arguments[i__5770__auto___61007]));

var G__61008 = (i__5770__auto___61007 + (1));
i__5770__auto___61007 = G__61008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__60949 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60950 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60951 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60952 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60953 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60955 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__60956 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60957 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60958 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60959 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60960 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60961 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60962 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60956);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60957);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60958);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60959);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60960);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60961);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60962);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60954);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60953);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60952);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60951);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60950);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60949);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq60948){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60948));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61011 = arguments.length;
var i__5770__auto___61012 = (0);
while(true){
if((i__5770__auto___61012 < len__5769__auto___61011)){
args__5775__auto__.push((arguments[i__5770__auto___61012]));

var G__61013 = (i__5770__auto___61012 + (1));
i__5770__auto___61012 = G__61013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__60965 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__60966 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__60967 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__60968 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__60969 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__60970 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__60971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__60972 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__60973 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__60974 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__60975 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__60976 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__60977 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__60978 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__60979 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__60980 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60973);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__60974);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__60975);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__60976);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__60977);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__60978);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60979);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__60980);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__60972);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60971);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__60970);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__60969);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__60968);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__60967);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__60966);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60965);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq60963){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60963));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___61014 = arguments.length;
var i__5770__auto___61015 = (0);
while(true){
if((i__5770__auto___61015 < len__5769__auto___61014)){
args__5775__auto__.push((arguments[i__5770__auto___61015]));

var G__61016 = (i__5770__auto___61015 + (1));
i__5770__auto___61015 = G__61016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__60981__auto__","s__60981__auto__",-1661972374,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__60982__auto__","x__60982__auto__",1847174509,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__60981__auto__","s__60981__auto__",-1661972374,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__60982__auto__","x__60982__auto__",1847174509,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__60981__auto__","s__60981__auto__",-1661972374,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq60983){
var G__60984 = cljs.core.first(seq60983);
var seq60983__$1 = cljs.core.next(seq60983);
var G__60985 = cljs.core.first(seq60983__$1);
var seq60983__$2 = cljs.core.next(seq60983__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60984,G__60985,seq60983__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
