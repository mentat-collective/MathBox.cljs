import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__53158 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__53157 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__53157.cljs$core$IFn$_invoke$arity$1 ? fexpr__53157.cljs$core$IFn$_invoke$arity$1(G__53158) : fexpr__53157.call(null,G__53158));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (pos - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var G__53183 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__53183 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__53183,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__53193){
var map__53197 = p__53193;
var map__53197__$1 = (((((!((map__53197 == null))))?(((((map__53197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53197):map__53197);
var state = map__53197__$1;
var doc = (function (){var obj53202 = map__53197__$1;
if((!((obj53202 == null)))){
return (obj53202["doc"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__5043__auto__){
var range = (function (){var obj53207 = (function (){var obj53206 = (function (){var obj53205 = state;
if((!((obj53205 == null)))){
return (obj53205["selection"]);
} else {
return undefined;
}
})();
if((!((obj53206 == null)))){
return (obj53206["ranges"]);
} else {
return undefined;
}
})();
if((!((obj53207 == null)))){
return (obj53207[(0)]);
} else {
return undefined;
}
})();
var and__5043__auto____$1 = range.empty;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__53220){
var map__53222 = p__53220;
var map__53222__$1 = (((((!((map__53222 == null))))?(((((map__53222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53222):map__53222);
var range = map__53222__$1;
var head = (function (){var obj53227 = map__53222__$1;
if((!((obj53227 == null)))){
return (obj53227["head"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53229 = map__53222__$1;
if((!((obj53229 == null)))){
return (obj53229["empty"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj53230 = map__53222__$1;
if((!((obj53230 == null)))){
return (obj53230["anchor"]);
} else {
return undefined;
}
})();
var map__53232 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__53232__$1 = (((((!((map__53232 == null))))?(((((map__53232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53232):map__53232);
var range__$1 = map__53232__$1;
var from = (function (){var obj53236 = map__53232__$1;
if((!((obj53236 == null)))){
return (obj53236["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53238 = map__53232__$1;
if((!((obj53238 == null)))){
return (obj53238["to"]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(empty);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__5043__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__53248){
var map__53251 = p__53248;
var map__53251__$1 = (((((!((map__53251 == null))))?(((((map__53251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53251):map__53251);
var from = (function (){var obj53253 = map__53251__$1;
if((!((obj53253 == null)))){
return (obj53253["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53254 = map__53251__$1;
if((!((obj53254 == null)))){
return (obj53254["to"]);
} else {
return undefined;
}
})();
var head = (function (){var obj53255 = map__53251__$1;
if((!((obj53255 == null)))){
return (obj53255["head"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj53256 = map__53251__$1;
if((!((obj53256 == null)))){
return (obj53256["anchor"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53257 = map__53251__$1;
if((!((obj53257 == null)))){
return (obj53257["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__53262){
var map__53264 = p__53262;
var map__53264__$1 = (((((!((map__53264 == null))))?(((((map__53264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53264):map__53264);
var range = map__53264__$1;
var empty = (function (){var obj53271 = map__53264__$1;
if((!((obj53271 == null)))){
return (obj53271["empty"]);
} else {
return undefined;
}
})();
var head = (function (){var obj53272 = map__53264__$1;
if((!((obj53272 == null)))){
return (obj53272["head"]);
} else {
return undefined;
}
})();
var from = (function (){var obj53273 = map__53264__$1;
if((!((obj53273 == null)))){
return (obj53273["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53275 = map__53264__$1;
if((!((obj53275 == null)))){
return (obj53275["to"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__5045__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__5045__auto__ = (function (){var unbalanced = (function (){var G__53281 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__53281__$1 = (((G__53281 == null))?null:nextjournal.clojure_mode.node.ancestors(G__53281));
var G__53281__$2 = (((G__53281__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__53281__$1));
if((G__53281__$2 == null)){
return null;
} else {
return cljs.core.first(G__53281__$2);
}
})();
var closing = (function (){var G__53282 = unbalanced;
var G__53282__$1 = (((G__53282 == null))?null:nextjournal.clojure_mode.node.down(G__53282));
if((G__53282__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__53282__$1);
}
})();
var pos = (function (){var G__53285 = unbalanced;
if((G__53285 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__53285);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = closing;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5804__auto__)){
var cursor = temp__5804__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var close_node_end = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__53288){
var map__53289 = p__53288;
var map__53289__$1 = (((((!((map__53289 == null))))?(((((map__53289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53289):map__53289);
var view = map__53289__$1;
var state = (function (){var obj53291 = map__53289__$1;
if((!((obj53291 == null)))){
return (obj53291["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__53293){
var map__53294 = p__53293;
var map__53294__$1 = (((((!((map__53294 == null))))?(((((map__53294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53294):map__53294);
var view = map__53294__$1;
var state = (function (){var obj53296 = map__53294__$1;
if((!((obj53296 == null)))){
return (obj53296["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__53297){
var map__53298 = p__53297;
var map__53298__$1 = (((((!((map__53298 == null))))?(((((map__53298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53298):map__53298);
var view = map__53298__$1;
var state = (function (){var obj53301 = map__53298__$1;
if((!((obj53301 == null)))){
return (obj53301["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__53323){
var map__53324 = p__53323;
var map__53324__$1 = (((((!((map__53324 == null))))?(((((map__53324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53324):map__53324);
var view = map__53324__$1;
var state = (function (){var obj53327 = map__53324__$1;
if((!((obj53327 == null)))){
return (obj53327["state"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
