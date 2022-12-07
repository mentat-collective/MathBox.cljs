goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__68131 = arguments.length;
switch (G__68131) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__68134 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68135 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68135);

try{var G__68138 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__68138);

return G__68138;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68134);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__68142 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68143 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68143);

try{var G__68151 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__68151);

return G__68151;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68142);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__68153 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68154 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68154);

try{var G__68158 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__68158);

return G__68158;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68153);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__68160 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68161 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68161);

try{var G__68163 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__68163);

return G__68163;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68160);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__68164 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__68165 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__68165);

try{var G__68166 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__68166);

return G__68166;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__68164);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_dup_var = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),cljs.core._STAR_print_dup_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__68168 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__68169 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68169);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68168);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68384 = arguments.length;
var i__4865__auto___68385 = (0);
while(true){
if((i__4865__auto___68385 < len__4864__auto___68384)){
args__4870__auto__.push((arguments[i__4865__auto___68385]));

var G__68387 = (i__4865__auto___68385 + (1));
i__4865__auto___68385 = G__68387;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__68175 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__68176 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68177 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68178 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68179 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68180 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68182 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__68183 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__68184 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68185 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68186 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68187 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68188 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68189 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68190 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68183);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68184);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68185);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68186);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68187);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68188);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68189);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68190);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68181);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68180);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68179);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68178);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68177);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68176);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68175);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq68172){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68172));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__68195 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__68196 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68196);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68195);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68388 = arguments.length;
var i__4865__auto___68389 = (0);
while(true){
if((i__4865__auto___68389 < len__4864__auto___68388)){
args__4870__auto__.push((arguments[i__4865__auto___68389]));

var G__68390 = (i__4865__auto___68389 + (1));
i__4865__auto___68389 = G__68390;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__68198 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68199 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68200 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68201 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68202 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68204 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__68205 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68206 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68207 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68208 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68209 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68210 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68211 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68205);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68206);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68207);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68208);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68209);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68210);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68211);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68204);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68203);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68202);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68201);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68200);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68199);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68198);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq68197){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68197));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68391 = arguments.length;
var i__4865__auto___68392 = (0);
while(true){
if((i__4865__auto___68392 < len__4864__auto___68391)){
args__4870__auto__.push((arguments[i__4865__auto___68392]));

var G__68393 = (i__4865__auto___68392 + (1));
i__4865__auto___68392 = G__68393;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__68216 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__68217 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68218 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68219 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68220 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68221 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68223 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__68224 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__68225 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68226 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68227 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68228 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68229 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68230 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68231 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68224);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68225);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68226);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68227);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68228);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68230);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68231);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68222);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68221);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68220);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68219);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68218);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68217);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68216);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq68213){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68213));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68398 = arguments.length;
var i__4865__auto___68399 = (0);
while(true){
if((i__4865__auto___68399 < len__4864__auto___68398)){
args__4870__auto__.push((arguments[i__4865__auto___68399]));

var G__68400 = (i__4865__auto___68399 + (1));
i__4865__auto___68399 = G__68400;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__68239 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68240 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68241 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68242 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68243 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68245 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__68247 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68248 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68249 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68250 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68251 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68252 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68253 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68247);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68248);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68249);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68250);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68251);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68252);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68253);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68244);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68243);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68242);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68241);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68240);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68239);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq68235){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68235));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68405 = arguments.length;
var i__4865__auto___68406 = (0);
while(true){
if((i__4865__auto___68406 < len__4864__auto___68405)){
args__4870__auto__.push((arguments[i__4865__auto___68406]));

var G__68407 = (i__4865__auto___68406 + (1));
i__4865__auto___68406 = G__68407;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__68263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__68264 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68265 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68266 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68267 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68268 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68269 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__68270 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__68271 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68272 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__68273 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68274 = null;
var _STAR_print_newline_STAR__temp_val__68275 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68276 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68270);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68271);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68272);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68273);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68274);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68275);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68276);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68269);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68268);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68267);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68266);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68265);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68264);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68263);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq68260){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68260));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68408 = arguments.length;
var i__4865__auto___68409 = (0);
while(true){
if((i__4865__auto___68409 < len__4864__auto___68408)){
args__4870__auto__.push((arguments[i__4865__auto___68409]));

var G__68410 = (i__4865__auto___68409 + (1));
i__4865__auto___68409 = G__68410;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__68296 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68297 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68298 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68299 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68300 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68302 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__68303 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68304 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68305 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68306 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68307 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68308 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68310 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68303);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68304);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68305);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68306);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68307);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68308);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68310);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68302);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68301);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68300);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68299);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68298);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68297);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68296);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq68286){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68286));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68412 = arguments.length;
var i__4865__auto___68413 = (0);
while(true){
if((i__4865__auto___68413 < len__4864__auto___68412)){
args__4870__auto__.push((arguments[i__4865__auto___68413]));

var G__68416 = (i__4865__auto___68413 + (1));
i__4865__auto___68413 = G__68416;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__68322 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__68323 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__68324 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__68325 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__68326 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__68327 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__68328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__68329 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__68330 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__68331 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__68332 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__68333 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__68334 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__68335 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__68336 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__68337 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68330);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__68331);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__68332);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__68333);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__68334);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__68335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68336);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__68337);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__68329);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68328);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__68327);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__68326);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__68325);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__68324);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__68323);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68322);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq68318){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68318));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68420 = arguments.length;
var i__4865__auto___68421 = (0);
while(true){
if((i__4865__auto___68421 < len__4864__auto___68420)){
args__4870__auto__.push((arguments[i__4865__auto___68421]));

var G__68422 = (i__4865__auto___68421 + (1));
i__4865__auto___68421 = G__68422;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__68343__auto__","s__68343__auto__",-2015980929,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__68344__auto__","x__68344__auto__",-517471805,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__68343__auto__","s__68343__auto__",-2015980929,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__68344__auto__","x__68344__auto__",-517471805,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__68343__auto__","s__68343__auto__",-2015980929,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq68346){
var G__68347 = cljs.core.first(seq68346);
var seq68346__$1 = cljs.core.next(seq68346);
var G__68348 = cljs.core.first(seq68346__$1);
var seq68346__$2 = cljs.core.next(seq68346__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68347,G__68348,seq68346__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
