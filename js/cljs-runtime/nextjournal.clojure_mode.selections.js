import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.selections');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.selections.range = (function nextjournal$clojure_mode$selections$range(var_args){
var G__52710 = arguments.length;
switch (G__52710) {
case 2:
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(from,to);
}));

(nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$1 = (function (range){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(range.from,range.to);
}));

(nextjournal.clojure_mode.selections.range.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.selections.cursor = (function nextjournal$clojure_mode$selections$cursor(from){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.cursor(from);
});
nextjournal.clojure_mode.selections.create = (function nextjournal$clojure_mode$selections$create(ranges,index){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.create(ranges,index);
});
nextjournal.clojure_mode.selections.constrain = (function nextjournal$clojure_mode$selections$constrain(state,from){
var x__5133__auto__ = (function (){var x__5130__auto__ = from;
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5134__auto__ = state.doc.length;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
});
nextjournal.clojure_mode.selections.eq_QMARK_ = (function nextjournal$clojure_mode$selections$eq_QMARK_(sel1,sel2){
return sel1.eq(sel2);
});

//# sourceMappingURL=nextjournal.clojure_mode.selections.js.map
