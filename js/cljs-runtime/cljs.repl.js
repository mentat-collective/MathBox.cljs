goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59923){
var map__59924 = p__59923;
var map__59924__$1 = cljs.core.__destructure_map(map__59924);
var m = map__59924__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59924__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59942_60124 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59943_60125 = null;
var count__59944_60126 = (0);
var i__59945_60127 = (0);
while(true){
if((i__59945_60127 < count__59944_60126)){
var f_60128 = chunk__59943_60125.cljs$core$IIndexed$_nth$arity$2(null,i__59945_60127);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60128], 0));


var G__60129 = seq__59942_60124;
var G__60130 = chunk__59943_60125;
var G__60131 = count__59944_60126;
var G__60132 = (i__59945_60127 + (1));
seq__59942_60124 = G__60129;
chunk__59943_60125 = G__60130;
count__59944_60126 = G__60131;
i__59945_60127 = G__60132;
continue;
} else {
var temp__5753__auto___60133 = cljs.core.seq(seq__59942_60124);
if(temp__5753__auto___60133){
var seq__59942_60134__$1 = temp__5753__auto___60133;
if(cljs.core.chunked_seq_QMARK_(seq__59942_60134__$1)){
var c__4679__auto___60135 = cljs.core.chunk_first(seq__59942_60134__$1);
var G__60136 = cljs.core.chunk_rest(seq__59942_60134__$1);
var G__60137 = c__4679__auto___60135;
var G__60138 = cljs.core.count(c__4679__auto___60135);
var G__60139 = (0);
seq__59942_60124 = G__60136;
chunk__59943_60125 = G__60137;
count__59944_60126 = G__60138;
i__59945_60127 = G__60139;
continue;
} else {
var f_60140 = cljs.core.first(seq__59942_60134__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60140], 0));


var G__60141 = cljs.core.next(seq__59942_60134__$1);
var G__60142 = null;
var G__60143 = (0);
var G__60144 = (0);
seq__59942_60124 = G__60141;
chunk__59943_60125 = G__60142;
count__59944_60126 = G__60143;
i__59945_60127 = G__60144;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60145 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60145], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60145)))?cljs.core.second(arglists_60145):arglists_60145)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60026_60146 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60027_60147 = null;
var count__60028_60148 = (0);
var i__60029_60149 = (0);
while(true){
if((i__60029_60149 < count__60028_60148)){
var vec__60038_60150 = chunk__60027_60147.cljs$core$IIndexed$_nth$arity$2(null,i__60029_60149);
var name_60151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60038_60150,(0),null);
var map__60041_60152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60038_60150,(1),null);
var map__60041_60153__$1 = cljs.core.__destructure_map(map__60041_60152);
var doc_60154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041_60153__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041_60153__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60151], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60155], 0));

if(cljs.core.truth_(doc_60154)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60154], 0));
} else {
}


var G__60156 = seq__60026_60146;
var G__60157 = chunk__60027_60147;
var G__60158 = count__60028_60148;
var G__60159 = (i__60029_60149 + (1));
seq__60026_60146 = G__60156;
chunk__60027_60147 = G__60157;
count__60028_60148 = G__60158;
i__60029_60149 = G__60159;
continue;
} else {
var temp__5753__auto___60160 = cljs.core.seq(seq__60026_60146);
if(temp__5753__auto___60160){
var seq__60026_60161__$1 = temp__5753__auto___60160;
if(cljs.core.chunked_seq_QMARK_(seq__60026_60161__$1)){
var c__4679__auto___60162 = cljs.core.chunk_first(seq__60026_60161__$1);
var G__60163 = cljs.core.chunk_rest(seq__60026_60161__$1);
var G__60164 = c__4679__auto___60162;
var G__60165 = cljs.core.count(c__4679__auto___60162);
var G__60166 = (0);
seq__60026_60146 = G__60163;
chunk__60027_60147 = G__60164;
count__60028_60148 = G__60165;
i__60029_60149 = G__60166;
continue;
} else {
var vec__60042_60167 = cljs.core.first(seq__60026_60161__$1);
var name_60168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60042_60167,(0),null);
var map__60045_60169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60042_60167,(1),null);
var map__60045_60170__$1 = cljs.core.__destructure_map(map__60045_60169);
var doc_60171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045_60170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60045_60170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60168], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60172], 0));

if(cljs.core.truth_(doc_60171)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60171], 0));
} else {
}


var G__60173 = cljs.core.next(seq__60026_60161__$1);
var G__60174 = null;
var G__60175 = (0);
var G__60176 = (0);
seq__60026_60146 = G__60173;
chunk__60027_60147 = G__60174;
count__60028_60148 = G__60175;
i__60029_60149 = G__60176;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__60046 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60047 = null;
var count__60048 = (0);
var i__60049 = (0);
while(true){
if((i__60049 < count__60048)){
var role = chunk__60047.cljs$core$IIndexed$_nth$arity$2(null,i__60049);
var temp__5753__auto___60177__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60177__$1)){
var spec_60178 = temp__5753__auto___60177__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60178)], 0));
} else {
}


var G__60179 = seq__60046;
var G__60180 = chunk__60047;
var G__60181 = count__60048;
var G__60182 = (i__60049 + (1));
seq__60046 = G__60179;
chunk__60047 = G__60180;
count__60048 = G__60181;
i__60049 = G__60182;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__60046);
if(temp__5753__auto____$1){
var seq__60046__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60046__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60046__$1);
var G__60183 = cljs.core.chunk_rest(seq__60046__$1);
var G__60184 = c__4679__auto__;
var G__60185 = cljs.core.count(c__4679__auto__);
var G__60186 = (0);
seq__60046 = G__60183;
chunk__60047 = G__60184;
count__60048 = G__60185;
i__60049 = G__60186;
continue;
} else {
var role = cljs.core.first(seq__60046__$1);
var temp__5753__auto___60187__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___60187__$2)){
var spec_60188 = temp__5753__auto___60187__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60188)], 0));
} else {
}


var G__60189 = cljs.core.next(seq__60046__$1);
var G__60190 = null;
var G__60191 = (0);
var G__60192 = (0);
seq__60046 = G__60189;
chunk__60047 = G__60190;
count__60048 = G__60191;
i__60049 = G__60192;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60194 = cljs.core.ex_cause(t);
via = G__60193;
t = G__60194;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__60054 = datafied_throwable;
var map__60054__$1 = cljs.core.__destructure_map(map__60054);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60054__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60054__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60054__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60055 = cljs.core.last(via);
var map__60055__$1 = cljs.core.__destructure_map(map__60055);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60055__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60055__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60056 = data;
var map__60056__$1 = cljs.core.__destructure_map(map__60056);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60056__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60056__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60056__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60057 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60057__$1 = cljs.core.__destructure_map(map__60057);
var top_data = map__60057__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60059 = phase;
var G__60059__$1 = (((G__60059 instanceof cljs.core.Keyword))?G__60059.fqn:null);
switch (G__60059__$1) {
case "read-source":
var map__60060 = data;
var map__60060__$1 = cljs.core.__destructure_map(map__60060);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60061__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60061,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60061);
var G__60061__$2 = (cljs.core.truth_((function (){var fexpr__60062 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60062.cljs$core$IFn$_invoke$arity$1 ? fexpr__60062.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60062.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60061__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60061__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60061__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60061__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60063 = top_data;
var G__60063__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60063,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60063);
var G__60063__$2 = (cljs.core.truth_((function (){var fexpr__60064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60064.cljs$core$IFn$_invoke$arity$1 ? fexpr__60064.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60064.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60063__$1);
var G__60063__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60063__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60063__$2);
var G__60063__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60063__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60063__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60063__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60063__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60065 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(3),null);
var G__60068 = top_data;
var G__60068__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60068,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60068);
var G__60068__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60068__$1);
var G__60068__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60068__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60068__$2);
var G__60068__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60068__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60068__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60068__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60068__$4;
}

break;
case "execution":
var vec__60069 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60053_SHARP_){
var or__4253__auto__ = (p1__60053_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__60072 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60072.cljs$core$IFn$_invoke$arity$1 ? fexpr__60072.cljs$core$IFn$_invoke$arity$1(p1__60053_SHARP_) : fexpr__60072.call(null,p1__60053_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__60073 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60073__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60073,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60073);
var G__60073__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60073__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60073__$1);
var G__60073__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60073__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60073__$2);
var G__60073__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60073__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60073__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60073__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60073__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60059__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60077){
var map__60078 = p__60077;
var map__60078__$1 = cljs.core.__destructure_map(map__60078);
var triage_data = map__60078__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60078__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60079 = phase;
var G__60079__$1 = (((G__60079 instanceof cljs.core.Keyword))?G__60079.fqn:null);
switch (G__60079__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60080 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60081 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60082 = loc;
var G__60083 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60084_60199 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60085_60200 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60086_60201 = true;
var _STAR_print_fn_STAR__temp_val__60087_60202 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60086_60201);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60087_60202);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60074_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60074_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60085_60200);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60084_60199);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60080,G__60081,G__60082,G__60083) : format.call(null,G__60080,G__60081,G__60082,G__60083));

break;
case "macroexpansion":
var G__60088 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60089 = cause_type;
var G__60090 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60091 = loc;
var G__60092 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60088,G__60089,G__60090,G__60091,G__60092) : format.call(null,G__60088,G__60089,G__60090,G__60091,G__60092));

break;
case "compile-syntax-check":
var G__60093 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60094 = cause_type;
var G__60095 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60096 = loc;
var G__60097 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60093,G__60094,G__60095,G__60096,G__60097) : format.call(null,G__60093,G__60094,G__60095,G__60096,G__60097));

break;
case "compilation":
var G__60098 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60099 = cause_type;
var G__60100 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60101 = loc;
var G__60102 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60098,G__60099,G__60100,G__60101,G__60102) : format.call(null,G__60098,G__60099,G__60100,G__60101,G__60102));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60103 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60104 = symbol;
var G__60105 = loc;
var G__60106 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60107_60207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60108_60208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60109_60209 = true;
var _STAR_print_fn_STAR__temp_val__60110_60210 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60109_60209);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60110_60210);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60076_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60076_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60108_60208);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60107_60207);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60103,G__60104,G__60105,G__60106) : format.call(null,G__60103,G__60104,G__60105,G__60106));
} else {
var G__60111 = "Execution error%s at %s(%s).\n%s\n";
var G__60112 = cause_type;
var G__60113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60114 = loc;
var G__60115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60111,G__60112,G__60113,G__60114,G__60115) : format.call(null,G__60111,G__60112,G__60113,G__60114,G__60115));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60079__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
