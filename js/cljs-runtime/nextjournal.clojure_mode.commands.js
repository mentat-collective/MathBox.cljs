import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__53488){
var map__53490 = p__53488;
var map__53490__$1 = (((((!((map__53490 == null))))?(((((map__53490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53490):map__53490);
var state = (function (){var obj53492 = map__53490__$1;
if((!((obj53492 == null)))){
return (obj53492["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj53494 = map__53490__$1;
if((!((obj53494 == null)))){
return (obj53494["dispatch"]);
} else {
return undefined;
}
})();
var G__53495_53661 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__53495_53661 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__53495_53661) : dispatch.call(null,G__53495_53661));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53498){
var map__53500 = p__53498;
var map__53500__$1 = (((((!((map__53500 == null))))?(((((map__53500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53500):map__53500);
var range = map__53500__$1;
var from = (function (){var obj53509 = map__53500__$1;
if((!((obj53509 == null)))){
return (obj53509["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53513 = map__53500__$1;
if((!((obj53513 == null)))){
return (obj53513["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53514 = map__53500__$1;
if((!((obj53514 == null)))){
return (obj53514["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = (function (){var G__53515 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__53515__$1 = (((G__53515 == null))?null:nextjournal.clojure_mode.node.closest(G__53515,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__53515__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__53515__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var nearest_balanced_coll = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down(nearest_balanced_coll)),nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(nearest_balanced_coll))], null)], null);
} else {
return null;
}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_ = (function nextjournal$clojure_mode$commands$copy_to_clipboard_BANG_(text){
var focus_el = (function (){var obj53530 = document;
if((!((obj53530 == null)))){
return (obj53530["activeElement"]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj53558_53662 = input_el;
var obj53559_53663 = (((!((obj53558_53662 == null))))?obj53558_53662:({}));
(obj53559_53663["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus(({"preventScroll": true}));

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53564){
var map__53565 = p__53564;
var map__53565__$1 = (((((!((map__53565 == null))))?(((((map__53565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53565):map__53565);
var range = map__53565__$1;
var from = (function (){var obj53567 = map__53565__$1;
if((!((obj53567 == null)))){
return (obj53567["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53568 = map__53565__$1;
if((!((obj53568 == null)))){
return (obj53568["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53569 = map__53565__$1;
if((!((obj53569 == null)))){
return (obj53569["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__53562_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__53562_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__53562_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__53562_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__53570 = next_children;
var G__53570__$1 = (((G__53570 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__53563_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__53563_SHARP_) <= line_end);
})),G__53570));
if((G__53570__$1 == null)){
return null;
} else {
return cljs.core.last(G__53570__$1);
}
})():null);
var to__$1 = ((nextjournal.clojure_mode.node.string_QMARK_(parent))?(function (){var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,parent));
var content_from = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(from - nextjournal.clojure_mode.node.start(parent)));
var next_newline = content_from.indexOf("\n");
if((next_newline < (0))){
return (nextjournal.clojure_mode.node.end(parent) - (1));
} else {
return ((from + next_newline) + (1));
}
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__53571 = cljs.core.first(next_children);
var G__53571__$1 = (((G__53571 == null))?null:nextjournal.clojure_mode.node.start(G__53571));
if((G__53571__$1 == null)){
return null;
} else {
return (G__53571__$1 > line_end);
}
})())?nextjournal.clojure_mode.node.start(cljs.core.first(next_children)):null)));
if(nextjournal.clojure_mode.util.node_js_QMARK_){
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to__$1));
}

if(cljs.core.truth_(to__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to__$1], null)], null);
} else {
return null;
}
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),nextjournal.clojure_mode.util.from_to(from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.enter_and_indent_STAR_ = (function nextjournal$clojure_mode$commands$enter_and_indent_STAR_(state){
var ctx = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53572){
var map__53573 = p__53572;
var map__53573__$1 = (((((!((map__53573 == null))))?(((((map__53573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53573):map__53573);
var range = map__53573__$1;
var from = (function (){var obj53575 = map__53573__$1;
if((!((obj53575 == null)))){
return (obj53575["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53576 = map__53573__$1;
if((!((obj53576 == null)))){
return (obj53576["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53577 = map__53573__$1;
if((!((obj53577 == null)))){
return (obj53577["empty"]);
} else {
return undefined;
}
})();
var indent_at = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.inner_span(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,nextjournal.clojure_mode.node.top_QMARK_))));
var indent = nextjournal.clojure_mode.extensions.formatting.get_indentation(ctx,indent_at);
var insertion = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.extensions.formatting.spaces(state,indent))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((insertion).length)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"insert","insert",1286475395),insertion], null)], null)], null);
}));
});
nextjournal.clojure_mode.commands.nav_position = (function nextjournal$clojure_mode$commands$nav_position(state,from,dir){
var or__5045__auto__ = (function (){var G__53579 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__53578_SHARP_){
var or__5045__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__53578_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__53578_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__53578_SHARP_)));
}
}));
var G__53579__$1 = (((G__53579 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__53579,from,dir));
var G__53579__$2 = (((G__53579__$1 == null))?null:cljs.core.first(G__53579__$1));
if((G__53579__$2 == null)){
return null;
} else {
var obj53584 = G__53579__$2;
if((!((obj53584 == null)))){
return (obj53584[applied_science.js_interop.impl.wrap_key((function (){var G__53590 = dir;
switch (G__53590) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53590)].join('')));

}
})())]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.selections.constrain(state,(from + dir));
}
});
nextjournal.clojure_mode.commands.nav = (function nextjournal$clojure_mode$commands$nav(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53592){
var map__53594 = p__53592;
var map__53594__$1 = (((((!((map__53594 == null))))?(((((map__53594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53594):map__53594);
var range = map__53594__$1;
var from = (function (){var obj53596 = map__53594__$1;
if((!((obj53596 == null)))){
return (obj53596["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53598 = map__53594__$1;
if((!((obj53598 == null)))){
return (obj53598["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53599 = map__53594__$1;
if((!((obj53599 == null)))){
return (obj53599["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj53602 = nextjournal.clojure_mode.util.from_to(from,to);
if((!((obj53602 == null)))){
return (obj53602[applied_science.js_interop.impl.wrap_key((function (){var G__53605 = dir;
switch (G__53605) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53605)].join('')));

}
})())]);
} else {
return undefined;
}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.nav_select = (function nextjournal$clojure_mode$commands$nav_select(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53608){
var map__53609 = p__53608;
var map__53609__$1 = (((((!((map__53609 == null))))?(((((map__53609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53609):map__53609);
var range = map__53609__$1;
var from = (function (){var obj53612 = map__53609__$1;
if((!((obj53612 == null)))){
return (obj53612["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53613 = map__53609__$1;
if((!((obj53613 == null)))){
return (obj53613["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53615 = map__53609__$1;
if((!((obj53615 == null)))){
return (obj53615["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__53617 = nextjournal.clojure_mode.util.from_to(from,to);
var map__53617__$1 = (((((!((map__53617 == null))))?(((((map__53617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53617):map__53617);
var from__$1 = (function (){var obj53619 = map__53617__$1;
if((!((obj53619 == null)))){
return (obj53619["from"]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj53620 = map__53617__$1;
if((!((obj53620 == null)))){
return (obj53620["to"]);
} else {
return undefined;
}
})();
var G__53621 = dir;
switch (G__53621) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53621)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53622){
var map__53623 = p__53622;
var map__53623__$1 = (((((!((map__53623 == null))))?(((((map__53623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53623):map__53623);
var from = (function (){var obj53625 = map__53623__$1;
if((!((obj53625 == null)))){
return (obj53625["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53626 = map__53623__$1;
if((!((obj53626 == null)))){
return (obj53626["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53627 = map__53623__$1;
if((!((obj53627 == null)))){
return (obj53627["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.log = console.log;
nextjournal.clojure_mode.commands.slurp = (function nextjournal$clojure_mode$commands$slurp(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53629){
var map__53630 = p__53629;
var map__53630__$1 = (((((!((map__53630 == null))))?(((((map__53630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53630):map__53630);
var range = map__53630__$1;
var from = (function (){var obj53632 = map__53630__$1;
if((!((obj53632 == null)))){
return (obj53632["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53633 = map__53630__$1;
if((!((obj53633 == null)))){
return (obj53633["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53634 = map__53630__$1;
if((!((obj53634 == null)))){
return (obj53634["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__53628_SHARP_){
return cljs.core.not((function (){var G__53635 = direction;
switch (G__53635) {
case (1):
var G__53636 = p1__53628_SHARP_;
var G__53636__$1 = (((G__53636 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__53636));
var G__53636__$2 = (((G__53636__$1 == null))?null:nextjournal.clojure_mode.node.right(G__53636__$1));
if((G__53636__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__53636__$2);
}

break;
case (-1):
var G__53637 = p1__53628_SHARP_;
var G__53637__$1 = (((G__53637 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__53637));
var G__53637__$2 = (((G__53637__$1 == null))?null:nextjournal.clojure_mode.node.left(G__53637__$1));
if((G__53637__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__53637__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53635)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var temp__5804__auto____$1 = (function (){var G__53638 = direction;
switch (G__53638) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53638)].join('')));

}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__53639 = direction;
switch (G__53639) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj53640 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj53641 = (((!((obj53640 == null))))?obj53640:({}));
(obj53641["insert"] = " ");

return obj53641;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53639)].join('')));

}
})()], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
});
nextjournal.clojure_mode.commands.barf = (function nextjournal$clojure_mode$commands$barf(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__53644){
var map__53645 = p__53644;
var map__53645__$1 = (((((!((map__53645 == null))))?(((((map__53645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53645):map__53645);
var range = map__53645__$1;
var from = (function (){var obj53647 = map__53645__$1;
if((!((obj53647 == null)))){
return (obj53647["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53649 = map__53645__$1;
if((!((obj53649 == null)))){
return (obj53649["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj53650 = map__53645__$1;
if((!((obj53650 == null)))){
return (obj53650["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5804__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__53651 = direction;
switch (G__53651) {
case (1):
var temp__5804__auto____$1 = (function (){var G__53652 = nextjournal.clojure_mode.node.down_last(parent);
var G__53652__$1 = (((G__53652 == null))?null:nextjournal.clojure_mode.node.lefts(G__53652));
var G__53652__$2 = (((G__53652__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__53652__$1));
var G__53652__$3 = (((G__53652__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__53652__$2));
if((G__53652__$3 == null)){
return null;
} else {
return cljs.core.first(G__53652__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__5133__auto__ = nextjournal.clojure_mode.node.end(target);
var y__5134__auto__ = from;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj53653 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj53654 = (((!((obj53653 == null))))?obj53653:({}));
(obj53654["insert"] = " ");

return obj53654;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5804__auto____$1 = (function (){var G__53657 = nextjournal.clojure_mode.node.down(parent);
var G__53657__$1 = (((G__53657 == null))?null:nextjournal.clojure_mode.node.rights(G__53657));
var G__53657__$2 = (((G__53657__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__53657__$1));
var G__53657__$3 = (((G__53657__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__53657__$2));
if((G__53657__$3 == null)){
return null;
} else {
return cljs.core.first(G__53657__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var next_first_child = temp__5804__auto____$1;
var left_edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var left_start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__5130__auto__ = from;
var y__5131__auto__ = (nextjournal.clojure_mode.node.start(next_first_child) + (((left_edge).length) + (1)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(next_first_child),new cljs.core.Keyword(null,"insert","insert",1286475395),[" ",left_edge].join('')], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),left_start,new cljs.core.Keyword(null,"to","to",192099007),(left_start + ((left_edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.extensions.formatting.spaces(state,((left_edge).length))], null)], null)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53651)].join('')));

}
} else {
return null;
}
} else {
return null;
}
}));
});
});
/**
 * Subset of builtin commands that compliment paredit
 */
nextjournal.clojure_mode.commands.builtin_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursorLineStart","cursorLineStart",-1505072960),new cljs.core.Keyword(null,"cursorLineDown","cursorLineDown",180576864),new cljs.core.Keyword(null,"selectAll","selectAll",869127842),new cljs.core.Keyword(null,"selectLineUp","selectLineUp",-255594686),new cljs.core.Keyword(null,"cursorLineBoundaryForward","cursorLineBoundaryForward",-1283359997),new cljs.core.Keyword(null,"selectLineBoundaryBackward","selectLineBoundaryBackward",-1443564123),new cljs.core.Keyword(null,"deleteCharBackward","deleteCharBackward",-618312025),new cljs.core.Keyword(null,"insertNewlineAndIndent","insertNewlineAndIndent",-542382007),new cljs.core.Keyword(null,"cursorLineBoundaryBackward","cursorLineBoundaryBackward",1373049802),new cljs.core.Keyword(null,"selectCharRight","selectCharRight",1049825195),new cljs.core.Keyword(null,"selectPageUp","selectPageUp",152840428),new cljs.core.Keyword(null,"deleteCharForward","deleteCharForward",823474956),new cljs.core.Keyword(null,"cursorCharLeft","cursorCharLeft",-1572589780),new cljs.core.Keyword(null,"cursorGroupBackward","cursorGroupBackward",-1004717331),new cljs.core.Keyword(null,"selectDocStart","selectDocStart",-217268371),new cljs.core.Keyword(null,"selectGroupBackward","selectGroupBackward",1569543117),new cljs.core.Keyword(null,"cursorDocEnd","cursorDocEnd",-1298653903),new cljs.core.Keyword(null,"deleteGroupBackward","deleteGroupBackward",616768113),new cljs.core.Keyword(null,"selectLineStart","selectLineStart",1211557745),new cljs.core.Keyword(null,"deleteGroupForward","deleteGroupForward",596007091),new cljs.core.Keyword(null,"selectDocEnd","selectDocEnd",496449813),new cljs.core.Keyword(null,"selectPageDown","selectPageDown",226562613),new cljs.core.Keyword(null,"cursorPageDown","cursorPageDown",-1143253131),new cljs.core.Keyword(null,"cursorPageUp","cursorPageUp",-716828715),new cljs.core.Keyword(null,"selectLineBoundaryForward","selectLineBoundaryForward",904508598),new cljs.core.Keyword(null,"cursorLineEnd","cursorLineEnd",-234219178),new cljs.core.Keyword(null,"cursorGroupForward","cursorGroupForward",1231480632),new cljs.core.Keyword(null,"cursorCharRight","cursorCharRight",-739900583),new cljs.core.Keyword(null,"selectGroupForward","selectGroupForward",1344873433),new cljs.core.Keyword(null,"selectLineEnd","selectLineEnd",-1578526086),new cljs.core.Keyword(null,"selectCharLeft","selectCharLeft",1894248154),new cljs.core.Keyword(null,"splitLine","splitLine",-1338533189),new cljs.core.Keyword(null,"selectLineDown","selectLineDown",1741100604),new cljs.core.Keyword(null,"transposeChars","transposeChars",1566260285),new cljs.core.Keyword(null,"cursorLineUp","cursorLineUp",-1375841219),new cljs.core.Keyword(null,"cursorDocStart","cursorDocStart",2008312830)],[module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.selectAll,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharBackward,module$node_modules$$codemirror$commands$dist$index_cjs.insertNewlineAndIndent,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocStart,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.splitLine,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.transposeChars,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocStart]);
nextjournal.clojure_mode.commands.indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.formatting.format);
nextjournal.clojure_mode.commands.unwrap = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.unwrap_STAR_);
nextjournal.clojure_mode.commands.kill = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.kill_STAR_);
nextjournal.clojure_mode.commands.nav_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((1)));
nextjournal.clojure_mode.commands.nav_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((-1)));
nextjournal.clojure_mode.commands.nav_select_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((1)));
nextjournal.clojure_mode.commands.nav_select_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((-1)));
nextjournal.clojure_mode.commands.slurp_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((1)));
nextjournal.clojure_mode.commands.slurp_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((-1)));
nextjournal.clojure_mode.commands.barf_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((1)));
nextjournal.clojure_mode.commands.barf_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((-1)));
nextjournal.clojure_mode.commands.selection_grow = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_);
nextjournal.clojure_mode.commands.selection_return = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_);
nextjournal.clojure_mode.commands.enter_and_indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.enter_and_indent_STAR_);
nextjournal.clojure_mode.commands.paredit_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nav-left","nav-left",845947876),new cljs.core.Keyword(null,"enter-and-indent","enter-and-indent",-1825406873),new cljs.core.Keyword(null,"selection-grow","selection-grow",1627169352),new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"slurp-forward","slurp-forward",-866284566),new cljs.core.Keyword(null,"nav-select-right","nav-select-right",-455278613),new cljs.core.Keyword(null,"nav-select-left","nav-select-left",-1033285138),new cljs.core.Keyword(null,"barf-forward","barf-forward",1278612337),new cljs.core.Keyword(null,"barf-backward","barf-backward",434854195),new cljs.core.Keyword(null,"nav-right","nav-right",591041267),new cljs.core.Keyword(null,"slurp-backward","slurp-backward",-1615745159),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"selection-return","selection-return",267226206)],[nextjournal.clojure_mode.commands.indent,nextjournal.clojure_mode.commands.nav_left,nextjournal.clojure_mode.commands.enter_and_indent,nextjournal.clojure_mode.commands.selection_grow,nextjournal.clojure_mode.commands.kill,nextjournal.clojure_mode.commands.slurp_forward,nextjournal.clojure_mode.commands.nav_select_right,nextjournal.clojure_mode.commands.nav_select_left,nextjournal.clojure_mode.commands.barf_forward,nextjournal.clojure_mode.commands.barf_backward,nextjournal.clojure_mode.commands.nav_right,nextjournal.clojure_mode.commands.slurp_backward,nextjournal.clojure_mode.commands.unwrap,nextjournal.clojure_mode.commands.selection_return]);
/**
 * Mapping of keyword-id to command functions
 */
nextjournal.clojure_mode.commands.index = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.commands.builtin_index,nextjournal.clojure_mode.commands.paredit_index], 0));
/**
 * Lookup keyword-id by function
 */
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__53658_SHARP_,p2__53660_SHARP_,p3__53659_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53658_SHARP_,p3__53659_SHARP_,p2__53660_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
