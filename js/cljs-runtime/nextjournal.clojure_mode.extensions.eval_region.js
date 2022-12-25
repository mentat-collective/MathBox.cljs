import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__5045__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__53459_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__53459_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__53459_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj53481 = (function (){var obj53480 = (function (){var parent__50966__auto__ = (state["selection"]);
var f__50967__auto__ = (parent__50966__auto__["asSingle"]);
return f__50967__auto__.call(parent__50966__auto__);
})();
if((!((obj53480 == null)))){
return (obj53480["ranges"]);
} else {
return undefined;
}
})();
if((!((obj53481 == null)))){
return (obj53481[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__53484 = arguments.length;
switch (G__53484) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj53485 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj53485 == null)))){
return (obj53485["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__53486 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__53486__$1 = (((G__53486 == null))?null:(function (p1__53482_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__53482_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__53482_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__53482_SHARP_) <= from)))))){
var G__53487 = p1__53482_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__53482_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__53482_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__53482_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__53482_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__53487,from,(-1)));
} else {
return G__53487;
}
} else {
return null;
}
})(G__53486));
var G__53486__$2 = (((G__53486__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__53486__$1));
if((G__53486__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__53486__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj53489 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj53489 == null)))){
return (obj53489["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__5045__auto__ = (function (){var G__53496 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53493_SHARP_){
return p1__53493_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__53496 == null)){
return null;
} else {
var obj53497 = G__53496;
if((!((obj53497 == null)))){
return (obj53497["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__53499,value){
var map__53501 = p__53499;
var map__53501__$1 = (((((!((map__53501 == null))))?(((((map__53501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53501):map__53501);
var view = map__53501__$1;
var dispatch = (function (){var obj53504 = map__53501__$1;
if((!((obj53504 == null)))){
return (obj53504["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj53505 = map__53501__$1;
if((!((obj53505 == null)))){
return (obj53505["state"]);
} else {
return undefined;
}
})();
var G__53506 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__53506) : dispatch.call(null,G__53506));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__53507){
var map__53508 = p__53507;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var from = (function (){var obj53511 = map__53508__$1;
if((!((obj53511 == null)))){
return (obj53511["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53512 = map__53508__$1;
if((!((obj53512 == null)))){
return (obj53512["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__53517){
var map__53518 = p__53517;
var map__53518__$1 = (((((!((map__53518 == null))))?(((((map__53518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53518):map__53518);
var state = (function (){var obj53520 = map__53518__$1;
if((!((obj53520 == null)))){
return (obj53520["state"]);
} else {
return undefined;
}
})();
var map__53521 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__53521__$1 = cljs.core.__destructure_map(map__53521);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5802__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = Alt;
if(cljs.core.truth_(and__5043__auto__)){
return Shift;
} else {
return and__5043__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__5045__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__53516_SHARP_){
return cljs.core.not((function (){var obj53522 = p1__53516_SHARP_;
if((!((obj53522 == null)))){
return (obj53522["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5802__auto__)){
var range = temp__5802__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__5045__auto__ = (function (){var G__53524 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__53524__$1 = (((G__53524 == null))?null:(function (){var obj__50959__auto__ = G__53524;
var f__50960__auto__ = (obj__50959__auto__["iter"]);
return f__50960__auto__.call(obj__50959__auto__);
})());
if((G__53524__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__53524__$1,(function (p1__53523_SHARP_){
var obj53525 = p1__53523_SHARP_;
if((!((obj53525 == null)))){
return (obj53525["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__53526){
var map__53527 = p__53526;
var map__53527__$1 = (((((!((map__53527 == null))))?(((((map__53527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53527):map__53527);
var view = map__53527__$1;
var state = (function (){var obj53529 = map__53527__$1;
if((!((obj53529 == null)))){
return (obj53529["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__53531,p__53532){
var map__53533 = p__53531;
var map__53533__$1 = (((((!((map__53533 == null))))?(((((map__53533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53533):map__53533);
var event = map__53533__$1;
var altKey = (function (){var obj53536 = map__53533__$1;
if((!((obj53536 == null)))){
return (obj53536["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj53537 = map__53533__$1;
if((!((obj53537 == null)))){
return (obj53537["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj53538 = map__53533__$1;
if((!((obj53538 == null)))){
return (obj53538["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj53539 = map__53533__$1;
if((!((obj53539 == null)))){
return (obj53539["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj53540 = map__53533__$1;
if((!((obj53540 == null)))){
return (obj53540["type"]);
} else {
return undefined;
}
})();
var map__53534 = p__53532;
var map__53534__$1 = (((((!((map__53534 == null))))?(((((map__53534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53534):map__53534);
var view = map__53534__$1;
var state = (function (){var obj53542 = map__53534__$1;
if((!((obj53542 == null)))){
return (obj53542["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__53543 = cljs.core.PersistentArrayMap.EMPTY;
var G__53543__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53543,"Alt",true):G__53543);
var G__53543__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53543__$1,"Shift",true):G__53543__$1);
var G__53543__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53543__$2,"Meta",true):G__53543__$2);
var G__53543__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53543__$3,"Control",true):G__53543__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53543__$4,"Enter",true);
} else {
return G__53543__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__53544){
var map__53545 = p__53544;
var map__53545__$1 = (((((!((map__53545 == null))))?(((((map__53545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53545):map__53545);
var view = map__53545__$1;
var state = (function (){var obj53547 = map__53545__$1;
if((!((obj53547 == null)))){
return (obj53547["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj53548 = map__53545__$1;
if((!((obj53548 == null)))){
return (obj53548["dispatch"]);
} else {
return undefined;
}
})();
var map__53549 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__53549__$1 = (((((!((map__53549 == null))))?(((((map__53549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53549):map__53549);
var from = (function (){var obj53551 = map__53549__$1;
if((!((obj53551 == null)))){
return (obj53551["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj53552 = map__53549__$1;
if((!((obj53552 == null)))){
return (obj53552["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__53553_53648 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__53553_53648) : dispatch.call(null,G__53553_53648));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__53554){
var map__53555 = p__53554;
var map__53555__$1 = cljs.core.__destructure_map(map__53555);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53555__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__53556 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__53556 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__53556);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__53557 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__53557 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__53557);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
