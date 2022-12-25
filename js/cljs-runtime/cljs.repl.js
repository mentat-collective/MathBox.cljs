import "./cljs_env.js";
goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49349){
var map__49350 = p__49349;
var map__49350__$1 = cljs.core.__destructure_map(map__49350);
var m = map__49350__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__49355_49721 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49356_49722 = null;
var count__49357_49723 = (0);
var i__49358_49724 = (0);
while(true){
if((i__49358_49724 < count__49357_49723)){
var f_49725 = chunk__49356_49722.cljs$core$IIndexed$_nth$arity$2(null,i__49358_49724);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49725], 0));


var G__49730 = seq__49355_49721;
var G__49731 = chunk__49356_49722;
var G__49732 = count__49357_49723;
var G__49733 = (i__49358_49724 + (1));
seq__49355_49721 = G__49730;
chunk__49356_49722 = G__49731;
count__49357_49723 = G__49732;
i__49358_49724 = G__49733;
continue;
} else {
var temp__5804__auto___49734 = cljs.core.seq(seq__49355_49721);
if(temp__5804__auto___49734){
var seq__49355_49735__$1 = temp__5804__auto___49734;
if(cljs.core.chunked_seq_QMARK_(seq__49355_49735__$1)){
var c__5568__auto___49736 = cljs.core.chunk_first(seq__49355_49735__$1);
var G__49737 = cljs.core.chunk_rest(seq__49355_49735__$1);
var G__49738 = c__5568__auto___49736;
var G__49739 = cljs.core.count(c__5568__auto___49736);
var G__49740 = (0);
seq__49355_49721 = G__49737;
chunk__49356_49722 = G__49738;
count__49357_49723 = G__49739;
i__49358_49724 = G__49740;
continue;
} else {
var f_49741 = cljs.core.first(seq__49355_49735__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49741], 0));


var G__49742 = cljs.core.next(seq__49355_49735__$1);
var G__49743 = null;
var G__49744 = (0);
var G__49745 = (0);
seq__49355_49721 = G__49742;
chunk__49356_49722 = G__49743;
count__49357_49723 = G__49744;
i__49358_49724 = G__49745;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49746 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49746], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49746)))?cljs.core.second(arglists_49746):arglists_49746)], 0));
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
var seq__49462_49750 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49463_49751 = null;
var count__49464_49752 = (0);
var i__49465_49753 = (0);
while(true){
if((i__49465_49753 < count__49464_49752)){
var vec__49478_49754 = chunk__49463_49751.cljs$core$IIndexed$_nth$arity$2(null,i__49465_49753);
var name_49755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478_49754,(0),null);
var map__49481_49756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478_49754,(1),null);
var map__49481_49757__$1 = cljs.core.__destructure_map(map__49481_49756);
var doc_49758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481_49757__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49481_49757__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49755], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49759], 0));

if(cljs.core.truth_(doc_49758)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49758], 0));
} else {
}


var G__49760 = seq__49462_49750;
var G__49761 = chunk__49463_49751;
var G__49762 = count__49464_49752;
var G__49763 = (i__49465_49753 + (1));
seq__49462_49750 = G__49760;
chunk__49463_49751 = G__49761;
count__49464_49752 = G__49762;
i__49465_49753 = G__49763;
continue;
} else {
var temp__5804__auto___49764 = cljs.core.seq(seq__49462_49750);
if(temp__5804__auto___49764){
var seq__49462_49765__$1 = temp__5804__auto___49764;
if(cljs.core.chunked_seq_QMARK_(seq__49462_49765__$1)){
var c__5568__auto___49766 = cljs.core.chunk_first(seq__49462_49765__$1);
var G__49767 = cljs.core.chunk_rest(seq__49462_49765__$1);
var G__49768 = c__5568__auto___49766;
var G__49769 = cljs.core.count(c__5568__auto___49766);
var G__49770 = (0);
seq__49462_49750 = G__49767;
chunk__49463_49751 = G__49768;
count__49464_49752 = G__49769;
i__49465_49753 = G__49770;
continue;
} else {
var vec__49483_49771 = cljs.core.first(seq__49462_49765__$1);
var name_49772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49483_49771,(0),null);
var map__49486_49773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49483_49771,(1),null);
var map__49486_49774__$1 = cljs.core.__destructure_map(map__49486_49773);
var doc_49775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49486_49774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49486_49774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49772], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49776], 0));

if(cljs.core.truth_(doc_49775)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49775], 0));
} else {
}


var G__49777 = cljs.core.next(seq__49462_49765__$1);
var G__49778 = null;
var G__49779 = (0);
var G__49780 = (0);
seq__49462_49750 = G__49777;
chunk__49463_49751 = G__49778;
count__49464_49752 = G__49779;
i__49465_49753 = G__49780;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49492 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49493 = null;
var count__49494 = (0);
var i__49495 = (0);
while(true){
if((i__49495 < count__49494)){
var role = chunk__49493.cljs$core$IIndexed$_nth$arity$2(null,i__49495);
var temp__5804__auto___49781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___49781__$1)){
var spec_49782 = temp__5804__auto___49781__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49782)], 0));
} else {
}


var G__49783 = seq__49492;
var G__49784 = chunk__49493;
var G__49785 = count__49494;
var G__49786 = (i__49495 + (1));
seq__49492 = G__49783;
chunk__49493 = G__49784;
count__49494 = G__49785;
i__49495 = G__49786;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__49492);
if(temp__5804__auto____$1){
var seq__49492__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49492__$1);
var G__49787 = cljs.core.chunk_rest(seq__49492__$1);
var G__49788 = c__5568__auto__;
var G__49789 = cljs.core.count(c__5568__auto__);
var G__49790 = (0);
seq__49492 = G__49787;
chunk__49493 = G__49788;
count__49494 = G__49789;
i__49495 = G__49790;
continue;
} else {
var role = cljs.core.first(seq__49492__$1);
var temp__5804__auto___49791__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___49791__$2)){
var spec_49792 = temp__5804__auto___49791__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49792)], 0));
} else {
}


var G__49793 = cljs.core.next(seq__49492__$1);
var G__49794 = null;
var G__49795 = (0);
var G__49796 = (0);
seq__49492 = G__49793;
chunk__49493 = G__49794;
count__49494 = G__49795;
i__49495 = G__49796;
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
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
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
var G__49797 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49798 = cljs.core.ex_cause(t);
via = G__49797;
t = G__49798;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
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
var map__49520 = datafied_throwable;
var map__49520__$1 = cljs.core.__destructure_map(map__49520);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49520__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49521 = cljs.core.last(via);
var map__49521__$1 = cljs.core.__destructure_map(map__49521);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49521__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49521__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49521__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49522 = data;
var map__49522__$1 = cljs.core.__destructure_map(map__49522);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49522__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49522__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49522__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49523 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49523__$1 = cljs.core.__destructure_map(map__49523);
var top_data = map__49523__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49527 = phase;
var G__49527__$1 = (((G__49527 instanceof cljs.core.Keyword))?G__49527.fqn:null);
switch (G__49527__$1) {
case "read-source":
var map__49528 = data;
var map__49528__$1 = cljs.core.__destructure_map(map__49528);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49528__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49528__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49531 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49531__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49531,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49531);
var G__49531__$2 = (cljs.core.truth_((function (){var fexpr__49532 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49532.cljs$core$IFn$_invoke$arity$1 ? fexpr__49532.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49532.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49531__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49531__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49531__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49534 = top_data;
var G__49534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49534);
var G__49534__$2 = (cljs.core.truth_((function (){var fexpr__49535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49535.cljs$core$IFn$_invoke$arity$1 ? fexpr__49535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49534__$1);
var G__49534__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49534__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49534__$2);
var G__49534__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49534__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49534__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49534__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49534__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49539 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49539,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49539,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49539,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49539,(3),null);
var G__49542 = top_data;
var G__49542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49542);
var G__49542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49542__$1);
var G__49542__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49542__$2);
var G__49542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49542__$4;
}

break;
case "execution":
var vec__49567 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49517_SHARP_){
var or__5045__auto__ = (p1__49517_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__49594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49594.cljs$core$IFn$_invoke$arity$1 ? fexpr__49594.cljs$core$IFn$_invoke$arity$1(p1__49517_SHARP_) : fexpr__49594.call(null,p1__49517_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__49627 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49627__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49627,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49627);
var G__49627__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49627__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49627__$1);
var G__49627__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49627__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49627__$2);
var G__49627__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49627__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49627__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49627__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49627__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49527__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49675){
var map__49676 = p__49675;
var map__49676__$1 = cljs.core.__destructure_map(map__49676);
var triage_data = map__49676__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49676__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49679 = phase;
var G__49679__$1 = (((G__49679 instanceof cljs.core.Keyword))?G__49679.fqn:null);
switch (G__49679__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49681 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49682 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49683 = loc;
var G__49684 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49685_49832 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49686_49833 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49687_49834 = true;
var _STAR_print_fn_STAR__temp_val__49688_49835 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49687_49834);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49688_49835);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49669_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49669_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49686_49833);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49685_49832);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49681,G__49682,G__49683,G__49684) : format.call(null,G__49681,G__49682,G__49683,G__49684));

break;
case "macroexpansion":
var G__49693 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49694 = cause_type;
var G__49695 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49696 = loc;
var G__49697 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49693,G__49694,G__49695,G__49696,G__49697) : format.call(null,G__49693,G__49694,G__49695,G__49696,G__49697));

break;
case "compile-syntax-check":
var G__49698 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49699 = cause_type;
var G__49700 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49701 = loc;
var G__49702 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49698,G__49699,G__49700,G__49701,G__49702) : format.call(null,G__49698,G__49699,G__49700,G__49701,G__49702));

break;
case "compilation":
var G__49703 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49704 = cause_type;
var G__49705 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49706 = loc;
var G__49707 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49703,G__49704,G__49705,G__49706,G__49707) : format.call(null,G__49703,G__49704,G__49705,G__49706,G__49707));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49708 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49709 = symbol;
var G__49710 = loc;
var G__49711 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49712_49839 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49713_49840 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49714_49841 = true;
var _STAR_print_fn_STAR__temp_val__49715_49842 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49714_49841);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49715_49842);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49672_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49672_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49713_49840);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49712_49839);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49708,G__49709,G__49710,G__49711) : format.call(null,G__49708,G__49709,G__49710,G__49711));
} else {
var G__49716 = "Execution error%s at %s(%s).\n%s\n";
var G__49717 = cause_type;
var G__49718 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49719 = loc;
var G__49720 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49716,G__49717,G__49718,G__49719,G__49720) : format.call(null,G__49716,G__49717,G__49718,G__49719,G__49720));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49679__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
