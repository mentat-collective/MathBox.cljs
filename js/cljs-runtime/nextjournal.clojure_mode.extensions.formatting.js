import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__53161){
var map__53163 = p__53161;
var map__53163__$1 = (((((!((map__53163 == null))))?(((((map__53163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53163):map__53163);
var type = map__53163__$1;
var type_name = (function (){var obj53167 = map__53163__$1;
if((!((obj53167 == null)))){
return (obj53167["name"]);
} else {
return undefined;
}
})();
return (function (p__53169){
var map__53170 = p__53169;
var map__53170__$1 = (((((!((map__53170 == null))))?(((((map__53170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53170):map__53170);
var context = map__53170__$1;
var pos = (function (){var obj53172 = map__53170__$1;
if((!((obj53172 == null)))){
return (obj53172["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj53174 = map__53170__$1;
if((!((obj53174 == null)))){
return (obj53174["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj53176 = map__53170__$1;
if((!((obj53176 == null)))){
return (obj53176["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj53177 = map__53170__$1;
if((!((obj53177 == null)))){
return (obj53177["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__53178 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__5043__auto__){
var G__53181 = (function (){var G__53182 = node;
var G__53182__$1 = (((G__53182 == null))?null:nextjournal.clojure_mode.node.down(G__53182));
var G__53182__$2 = (((G__53182__$1 == null))?null:nextjournal.clojure_mode.node.right(G__53182__$1));
if((G__53182__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__53182__$2);
}
})();
var fexpr__53180 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__53180.cljs$core$IFn$_invoke$arity$1 ? fexpr__53180.cljs$core$IFn$_invoke$arity$1(G__53181) : fexpr__53180.call(null,G__53181));
} else {
return and__5043__auto__;
}
})())){
return (G__53178 + (1));
} else {
return G__53178;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__53189 = cljs.core.compare(indent,current_indent);
switch (G__53189) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53189)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53196_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__53196_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__53196_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__53196_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__53196_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__53203 = cljs.core.first(nodes);
var G__53203__$1 = (((G__53203 == null))?null:nextjournal.clojure_mode.node.end(G__53203));
if((G__53203__$1 == null)){
return null;
} else {
return (G__53203__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__53210){
var vec__53214 = p__53210;
var map__53218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(0),null);
var map__53218__$1 = (((((!((map__53218 == null))))?(((((map__53218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53218):map__53218);
var n2 = (function (){var obj53223 = map__53218__$1;
if((!((obj53223 == null)))){
return (obj53223["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj53225 = map__53218__$1;
if((!((obj53225 == null)))){
return (obj53225["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj53226 = map__53218__$1;
if((!((obj53226 == null)))){
return (obj53226["to"]);
} else {
return undefined;
}
})();
var map__53219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53214,(1),null);
var map__53219__$1 = (((((!((map__53219 == null))))?(((((map__53219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53219):map__53219);
var n1 = (function (){var obj53231 = map__53219__$1;
if((!((obj53231 == null)))){
return (obj53231["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj53233 = map__53219__$1;
if((!((obj53233 == null)))){
return (obj53233["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj53235 = map__53219__$1;
if((!((obj53235 == null)))){
return (obj53235["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__53237 = cljs.core.compare(actual,expected);
switch (G__53237) {
case (0):
return out;

break;
case (1):
var Array53239 = out;
Array53239.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array53239;

break;
case (-1):
var Array53240 = out;
Array53240.push(({"from": end1, "insert": " "}));

return Array53240;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__53243_53302 = cljs.core.seq(items);
var chunk__53244_53303 = null;
var count__53245_53304 = (0);
var i__53246_53305 = (0);
while(true){
if((i__53246_53305 < count__53245_53304)){
var i_53306 = chunk__53244_53303.cljs$core$IIndexed$_nth$arity$2(null,i__53246_53305);
arr.push(i_53306);


var G__53307 = seq__53243_53302;
var G__53308 = chunk__53244_53303;
var G__53309 = count__53245_53304;
var G__53310 = (i__53246_53305 + (1));
seq__53243_53302 = G__53307;
chunk__53244_53303 = G__53308;
count__53245_53304 = G__53309;
i__53246_53305 = G__53310;
continue;
} else {
var temp__5804__auto___53311 = cljs.core.seq(seq__53243_53302);
if(temp__5804__auto___53311){
var seq__53243_53312__$1 = temp__5804__auto___53311;
if(cljs.core.chunked_seq_QMARK_(seq__53243_53312__$1)){
var c__5568__auto___53313 = cljs.core.chunk_first(seq__53243_53312__$1);
var G__53314 = cljs.core.chunk_rest(seq__53243_53312__$1);
var G__53315 = c__5568__auto___53313;
var G__53316 = cljs.core.count(c__5568__auto___53313);
var G__53317 = (0);
seq__53243_53302 = G__53314;
chunk__53244_53303 = G__53315;
count__53245_53304 = G__53316;
i__53246_53305 = G__53317;
continue;
} else {
var i_53318 = cljs.core.first(seq__53243_53312__$1);
arr.push(i_53318);


var G__53319 = cljs.core.next(seq__53243_53312__$1);
var G__53320 = null;
var G__53321 = (0);
var G__53322 = (0);
seq__53243_53302 = G__53319;
chunk__53244_53303 = G__53320;
count__53245_53304 = G__53321;
i__53246_53305 = G__53322;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__53258 = cljs.core.compare(indent,current_indent);
switch (G__53258) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53258)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__53259 = changes;
var G__53259__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__53259,space_changes):G__53259);
if(cljs.core.truth_(indentation_change)){
var Array53260 = G__53259__$1;
Array53260.push(indentation_change);

return Array53260;
} else {
return G__53259__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__53261,changes,range){
var map__53263 = p__53261;
var map__53263__$1 = (((((!((map__53263 == null))))?(((((map__53263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53263):map__53263);
var line = map__53263__$1;
var from = (function (){var obj53266 = map__53263__$1;
if((!((obj53266 == null)))){
return (obj53266["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj53267 = map__53263__$1;
if((!((obj53267 == null)))){
return (obj53267["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj53268 = map__53263__$1;
if((!((obj53268 == null)))){
return (obj53268["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5802__auto__ = (function (){var G__53270 = origin;
switch (G__53270) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var changes = temp__5802__auto__;
return tr.startState.update((function (){var obj53274 = changes;
var obj53276 = (((!((obj53274 == null))))?obj53274:({}));
(obj53276["filter"] = false);

return obj53276;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
