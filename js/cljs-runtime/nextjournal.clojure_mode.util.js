import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__52744 = arguments.length;
switch (G__52744) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__52751 = arguments.length;
switch (G__52751) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (from - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (from - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__50959__auto__ = (function (){var parent__50966__auto__ = (state["doc"]);
var f__50967__auto__ = (parent__50966__auto__["lineAt"]);
return f__50967__auto__.call(parent__50966__auto__,from);
})();
var f__50960__auto__ = (obj__50959__auto__["slice"]);
return f__50960__auto__.call(obj__50959__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__52762 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__52762__$1 = cljs.core.__destructure_map(map__52762);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52762__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__52764 = ({"range": (function (){var or__5045__auto__ = range;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj52767 = G__52764;
(obj52767["changes"] = change_desc);

return obj52767;
} else {
return G__52764;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__52771 = arguments.length;
switch (G__52771) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__52769_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__52769_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__5045__auto__ = (function (){var temp__5808__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5808__auto__ == null)){
return null;
} else {
var result = temp__5808__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__52790 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__52790) : dispatch.call(null,G__52790));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52999 = arguments.length;
var i__5770__auto___53000 = (0);
while(true){
if((i__5770__auto___53000 < len__5769__auto___52999)){
args__5775__auto__.push((arguments[i__5770__auto___53000]));

var G__53001 = (i__5770__auto___53000 + (1));
i__5770__auto___53000 = G__53001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__52812){
var vec__52813 = p__52812;
var map__52816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52813,(0),null);
var map__52816__$1 = cljs.core.__destructure_map(map__52816);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52816__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52816__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__52836 = result;
var map__52836__$1 = (((((!((map__52836 == null))))?(((((map__52836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52836):map__52836);
var done = (function (){var obj52839 = map__52836__$1;
if((!((obj52839 == null)))){
return (obj52839["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj52840 = map__52836__$1;
if((!((obj52840 == null)))){
return (obj52840["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj52841 = map__52836__$1;
if((!((obj52841 == null)))){
return (obj52841["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__5045__auto__ = done;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__53003 = iterator.next();
var G__53004 = (function (){var temp__5802__auto__ = (function (){var and__5043__auto__ = cljs.core.not(lineBreak);
if(and__5043__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var change = temp__5802__auto__;
var Array52844 = changes;
Array52844.push(change);

return Array52844;
} else {
return changes;
}
})();
var G__53005 = (from_pos + ((value).length));
var G__53006 = (function (){var G__52846 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__52846 + (1));
} else {
return G__52846;
}
})();
result = G__53003;
changes = G__53004;
from_pos = G__53005;
line_num = G__53006;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq52802){
var G__52803 = cljs.core.first(seq52802);
var seq52802__$1 = cljs.core.next(seq52802);
var G__52804 = cljs.core.first(seq52802__$1);
var seq52802__$2 = cljs.core.next(seq52802__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52803,G__52804,seq52802__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__52895){
var map__52896 = p__52895;
var map__52896__$1 = (((((!((map__52896 == null))))?(((((map__52896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52896):map__52896);
var range = map__52896__$1;
var from = (function (){var obj52898 = map__52896__$1;
if((!((obj52898 == null)))){
return (obj52898["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj52899 = map__52896__$1;
if((!((obj52899 == null)))){
return (obj52899["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj52900 = map__52896__$1;
if((!((obj52900 == null)))){
return (obj52900["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj52902 = map__52896__$1;
if((!((obj52902 == null)))){
return (obj52902["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__52913 = line;
var map__52913__$1 = (((((!((map__52913 == null))))?(((((map__52913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52913):map__52913);
var line_number = (function (){var obj52915 = map__52913__$1;
if((!((obj52915 == null)))){
return (obj52915["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj52916 = map__52913__$1;
if((!((obj52916 == null)))){
return (obj52916["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5802__auto__ = (function (){var and__5043__auto__ = (to > line_to);
if(and__5043__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__5043__auto__,map__52913,map__52913__$1,line_number,line_to,changes,map__52896,map__52896__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__52875_SHARP_){
return (p1__52875_SHARP_.number > line_number);
});})(line,and__5043__auto__,map__52913,map__52913__$1,line_number,line_to,changes,map__52896,map__52896__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var next_line = temp__5802__auto__;
var G__53007 = next_line;
line = G__53007;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__52919,f){
var map__52920 = p__52919;
var map__52920__$1 = (((((!((map__52920 == null))))?(((((map__52920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52920):map__52920);
var tr = map__52920__$1;
var map__52921 = (function (){var obj52923 = map__52920__$1;
if((!((obj52923 == null)))){
return (obj52923["state"]);
} else {
return undefined;
}
})();
var map__52921__$1 = (((((!((map__52921 == null))))?(((((map__52921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52921):map__52921);
var state = map__52921__$1;
var doc = (function (){var obj52925 = map__52921__$1;
if((!((obj52925 == null)))){
return (obj52925["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj52926 = map__52920__$1;
if((!((obj52926 == null)))){
return (obj52926["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj52927 = map__52920__$1;
if((!((obj52927 == null)))){
return (obj52927["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj52928 = map__52920__$1;
if((!((obj52928 == null)))){
return (obj52928["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__52929 = doc.lineAt(from_b);
var map__52929__$1 = (((((!((map__52929 == null))))?(((((map__52929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52929):map__52929);
var line = map__52929__$1;
var line_number = (function (){var obj52932 = map__52929__$1;
if((!((obj52932 == null)))){
return (obj52932["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj52933 = map__52929__$1;
if((!((obj52933 == null)))){
return (obj52933["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__5043__auto__ = next_line;
if(cljs.core.truth_(and__5043__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__5043__auto__;
}
})())){
var G__53008 = next_line;
line__$1 = G__53008;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__52936 = (function (){var obj52937 = (function (){var obj52939 = tr;
if((!((obj52939 == null)))){
var out52940 = ({});
var k__50866__auto___53009 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50866__auto___53009,obj52939)){
var obj52943_53010 = out52940;
(obj52943_53010[k__50866__auto___53009] = (obj52939[k__50866__auto___53009]));

} else {
}

var k__50866__auto___53011 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50866__auto___53011,obj52939)){
var obj52944_53013 = out52940;
(obj52944_53013[k__50866__auto___53011] = (obj52939[k__50866__auto___53011]));

} else {
}

var k__50866__auto___53014 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50866__auto___53014,obj52939)){
var obj52945_53015 = out52940;
(obj52945_53015[k__50866__auto___53014] = (obj52939[k__50866__auto___53014]));

} else {
}

return out52940;
} else {
return ({});
}
})();
var obj52950 = (((!((obj52937 == null))))?obj52937:({}));
(obj52950["changes"] = changes.compose(next_changeset));

return obj52950;
})();
var G__52936__$1 = (cljs.core.truth_(selection)?(function (){var obj52953 = G__52936;
var obj52954 = (((!((obj52953 == null))))?obj52953:({}));
(obj52954["selection"] = state.selection.map(next_changeset));

return obj52954;
})():G__52936);
if(cljs.core.truth_(effects)){
var obj52959 = G__52936__$1;
var obj52960 = (((!((obj52959 == null))))?obj52959:({}));
(obj52960["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj52960;
} else {
return G__52936__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__52966){
var map__52970 = p__52966;
var map__52970__$1 = (((((!((map__52970 == null))))?(((((map__52970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52970):map__52970);
var map__52971 = (function (){var obj52974 = map__52970__$1;
if((!((obj52974 == null)))){
return (obj52974["selection"]);
} else {
return undefined;
}
})();
var map__52971__$1 = (((((!((map__52971 == null))))?(((((map__52971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52971):map__52971);
var ranges = (function (){var obj52976 = map__52971__$1;
if((!((obj52976 == null)))){
return (obj52976["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__52965_SHARP_){
return p1__52965_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__52978){
var map__52983 = p__52978;
var map__52983__$1 = (((((!((map__52983 == null))))?(((((map__52983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52983):map__52983);
var selection = map__52983__$1;
var from = (function (){var obj52985 = map__52983__$1;
if((!((obj52985 == null)))){
return (obj52985["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj52986 = map__52983__$1;
if((!((obj52986 == null)))){
return (obj52986["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__50966__auto__ = (state["doc"]);
var f__50967__auto__ = (parent__50966__auto__["slice"]);
return f__50967__auto__.call(parent__50966__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
