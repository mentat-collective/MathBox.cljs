goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__66639){
var map__66640 = p__66639;
var map__66640__$1 = (((((!((map__66640 == null))))?(((((map__66640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66640):map__66640);
var type = map__66640__$1;
var type_name = (function (){var obj66642 = map__66640__$1;
if((!((obj66642 == null)))){
return (obj66642["name"]);
} else {
return undefined;
}
})();
return (function (p__66643){
var map__66644 = p__66643;
var map__66644__$1 = (((((!((map__66644 == null))))?(((((map__66644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66644):map__66644);
var context = map__66644__$1;
var pos = (function (){var obj66647 = map__66644__$1;
if((!((obj66647 == null)))){
return (obj66647["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj66648 = map__66644__$1;
if((!((obj66648 == null)))){
return (obj66648["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj66649 = map__66644__$1;
if((!((obj66649 == null)))){
return (obj66649["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj66650 = map__66644__$1;
if((!((obj66650 == null)))){
return (obj66650["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__66652 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__66655 = (function (){var G__66656 = node;
var G__66656__$1 = (((G__66656 == null))?null:nextjournal.clojure_mode.node.down(G__66656));
var G__66656__$2 = (((G__66656__$1 == null))?null:nextjournal.clojure_mode.node.right(G__66656__$1));
if((G__66656__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__66656__$2);
}
})();
var fexpr__66654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__66654.cljs$core$IFn$_invoke$arity$1 ? fexpr__66654.cljs$core$IFn$_invoke$arity$1(G__66655) : fexpr__66654.call(null,G__66655));
} else {
return and__4251__auto__;
}
})())){
return (G__66652 + (1));
} else {
return G__66652;
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
var G__66670 = cljs.core.compare(indent,current_indent);
switch (G__66670) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66670)].join('')));

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
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66681_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__66681_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__66681_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__66681_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__66681_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__66708 = cljs.core.first(nodes);
var G__66708__$1 = (((G__66708 == null))?null:nextjournal.clojure_mode.node.end(G__66708));
if((G__66708__$1 == null)){
return null;
} else {
return (G__66708__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__66713){
var vec__66715 = p__66713;
var map__66720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66715,(0),null);
var map__66720__$1 = (((((!((map__66720 == null))))?(((((map__66720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66720):map__66720);
var n2 = (function (){var obj66729 = map__66720__$1;
if((!((obj66729 == null)))){
return (obj66729["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj66731 = map__66720__$1;
if((!((obj66731 == null)))){
return (obj66731["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj66732 = map__66720__$1;
if((!((obj66732 == null)))){
return (obj66732["to"]);
} else {
return undefined;
}
})();
var map__66721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66715,(1),null);
var map__66721__$1 = (((((!((map__66721 == null))))?(((((map__66721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66721):map__66721);
var n1 = (function (){var obj66738 = map__66721__$1;
if((!((obj66738 == null)))){
return (obj66738["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj66740 = map__66721__$1;
if((!((obj66740 == null)))){
return (obj66740["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj66742 = map__66721__$1;
if((!((obj66742 == null)))){
return (obj66742["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__66745 = cljs.core.compare(actual,expected);
switch (G__66745) {
case (0):
return out;

break;
case (1):
var Array66747 = out;
Array66747.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array66747;

break;
case (-1):
var Array66750 = out;
Array66750.push(({"from": end1, "insert": " "}));

return Array66750;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__66756_66837 = cljs.core.seq(items);
var chunk__66757_66838 = null;
var count__66758_66839 = (0);
var i__66759_66840 = (0);
while(true){
if((i__66759_66840 < count__66758_66839)){
var i_66844 = chunk__66757_66838.cljs$core$IIndexed$_nth$arity$2(null,i__66759_66840);
arr.push(i_66844);


var G__66847 = seq__66756_66837;
var G__66848 = chunk__66757_66838;
var G__66849 = count__66758_66839;
var G__66850 = (i__66759_66840 + (1));
seq__66756_66837 = G__66847;
chunk__66757_66838 = G__66848;
count__66758_66839 = G__66849;
i__66759_66840 = G__66850;
continue;
} else {
var temp__5753__auto___66853 = cljs.core.seq(seq__66756_66837);
if(temp__5753__auto___66853){
var seq__66756_66854__$1 = temp__5753__auto___66853;
if(cljs.core.chunked_seq_QMARK_(seq__66756_66854__$1)){
var c__4679__auto___66855 = cljs.core.chunk_first(seq__66756_66854__$1);
var G__66856 = cljs.core.chunk_rest(seq__66756_66854__$1);
var G__66857 = c__4679__auto___66855;
var G__66858 = cljs.core.count(c__4679__auto___66855);
var G__66859 = (0);
seq__66756_66837 = G__66856;
chunk__66757_66838 = G__66857;
count__66758_66839 = G__66858;
i__66759_66840 = G__66859;
continue;
} else {
var i_66863 = cljs.core.first(seq__66756_66854__$1);
arr.push(i_66863);


var G__66865 = cljs.core.next(seq__66756_66854__$1);
var G__66866 = null;
var G__66867 = (0);
var G__66868 = (0);
seq__66756_66837 = G__66865;
chunk__66757_66838 = G__66866;
count__66758_66839 = G__66867;
i__66759_66840 = G__66868;
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
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__66775 = cljs.core.compare(indent,current_indent);
switch (G__66775) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66775)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__66779 = changes;
var G__66779__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__66779,space_changes):G__66779);
if(cljs.core.truth_(indentation_change)){
var Array66781 = G__66779__$1;
Array66781.push(indentation_change);

return Array66781;
} else {
return G__66779__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__66783,changes,range){
var map__66784 = p__66783;
var map__66784__$1 = (((((!((map__66784 == null))))?(((((map__66784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66784):map__66784);
var line = map__66784__$1;
var from = (function (){var obj66787 = map__66784__$1;
if((!((obj66787 == null)))){
return (obj66787["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj66788 = map__66784__$1;
if((!((obj66788 == null)))){
return (obj66788["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj66789 = map__66784__$1;
if((!((obj66789 == null)))){
return (obj66789["number"]);
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
var temp__5751__auto__ = (function (){var G__66791 = origin;
switch (G__66791) {
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
if(cljs.core.truth_(temp__5751__auto__)){
var changes = temp__5751__auto__;
return tr.startState.update((function (){var obj66792 = changes;
var obj66794 = (((!((obj66792 == null))))?obj66792:({}));
(obj66794["filter"] = false);

return obj66794;
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
