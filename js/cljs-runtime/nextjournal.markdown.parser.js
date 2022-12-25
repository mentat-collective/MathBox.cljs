import "./cljs_env.js";
goog.provide('nextjournal.markdown.parser');
nextjournal.markdown.parser.get_in_STAR_ = applied_science.js_interop.get_in;
nextjournal.markdown.parser.update_STAR_ = applied_science.js_interop.update_BANG_;
/**
 * Takes a regex and a string, returns a seq of triplets comprised of match groups followed by indices delimiting each match.
 */
nextjournal.markdown.parser.re_idx_seq = (function nextjournal$markdown$parser$re_idx_seq(re,text){
var rex = (new RegExp(re.source,"g"));
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5808__auto__ = rex.exec(text);
if((temp__5808__auto__ == null)){
return null;
} else {
var m = temp__5808__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(m),m.index,rex.lastIndex], null);
}
})));
});
nextjournal.markdown.parser.inc_last = (function nextjournal$markdown$parser$inc_last(path){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,(cljs.core.count(path) - (1)),cljs.core.inc);
});
nextjournal.markdown.parser.hlevel = (function nextjournal$markdown$parser$hlevel(p__54455){
var map__54456 = p__54455;
var map__54456__$1 = cljs.core.__destructure_map(map__54456);
var _token = map__54456__$1;
var hn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54456__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(typeof hn === 'string'){
var G__54457 = cljs.core.re_matches(/h([\d])/,hn);
var G__54457__$1 = (((G__54457 == null))?null:cljs.core.second(G__54457));
if((G__54457__$1 == null)){
return null;
} else {
return parseInt(G__54457__$1);
}
} else {
return null;
}
});
nextjournal.markdown.parser.split_by_emoji = (function nextjournal$markdown$parser$split_by_emoji(s){
var vec__54458 = cljs.core.first(nextjournal.markdown.parser.re_idx_seq(nextjournal.markdown.parser.emoji.regex,s));
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54458,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54458,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54458,(2),null);
if(cljs.core.truth_(match)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end),clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,end))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
}
});
nextjournal.markdown.parser.text__GT_id_PLUS_emoji = (function nextjournal$markdown$parser$text__GT_id_PLUS_emoji(text){
if(typeof text === 'string'){
var vec__54461 = nextjournal.markdown.parser.split_by_emoji(clojure.string.trim(text));
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54461,(0),null);
var text_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54461,(1),null);
var G__54465 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,(function (c){
var G__54467 = c;
switch (G__54467) {
case " ":
case "_":
return "-";

break;
default:
return c;

}
})),text_SINGLEQUOTE_))], null);
if(cljs.core.truth_(emoji)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54465,new cljs.core.Keyword(null,"emoji","emoji",1031230144),emoji);
} else {
return G__54465;
}
} else {
return null;
}
});
nextjournal.markdown.parser.parse_fence_info = (function nextjournal$markdown$parser$parse_fence_info(info_str){
try{if(typeof info_str === 'string'){
var tokens = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.replace(clojure.string.trim(info_str),/[\{\}\,]/,""),".",""),/ /);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54473,token){
var map__54478 = p__54473;
var map__54478__$1 = cljs.core.__destructure_map(map__54478);
var info_map = map__54478__$1;
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54478__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var vec__54479 = cljs.core.re_matches(/^([^=]+)=([^=]+)$/,token);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54479,(2),null);
if(clojure.string.starts_with_QMARK_(token,"#")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"id","id",-1388402092),clojure.string.replace(token,/^#/,""));
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return v;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
if(cljs.core.not(language)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,new cljs.core.Keyword(null,"language","language",-1591107564),token);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token),true);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,tokens);
} else {
return null;
}
}catch (e54472){var _ = e54472;
return cljs.core.PersistentArrayMap.EMPTY;
}});
nextjournal.markdown.parser.text_node = (function nextjournal$markdown$parser$text_node(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.tag_node = (function nextjournal$markdown$parser$tag_node(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.formula = (function nextjournal$markdown$parser$formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"formula","formula",-1059725192),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.block_formula = (function nextjournal$markdown$parser$block_formula(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"block-formula","block-formula",-1790528301),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
nextjournal.markdown.parser.sidenote_ref = (function nextjournal$markdown$parser$sidenote_ref(ref){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sidenote-ref","sidenote-ref",-1057198382),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.markdown.parser.text_node(cljs.core.str.cljs$core$IFn$_invoke$arity$1((ref + (1))))], null)], null);
});
nextjournal.markdown.parser.node = (function nextjournal$markdown$parser$node(type,content,attrs,top_level){
var G__54498 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"content","content",15833224),content], null);
var G__54498__$1 = ((cljs.core.seq(attrs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54498,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs):G__54498);
if(cljs.core.seq(top_level)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54498__$1,top_level], 0));
} else {
return G__54498__$1;
}
});
nextjournal.markdown.parser.empty_text_node_QMARK_ = (function nextjournal$markdown$parser$empty_text_node_QMARK_(p__54501){
var map__54502 = p__54501;
var map__54502__$1 = cljs.core.__destructure_map(map__54502);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54502__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54502__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),t)) && (cljs.core.empty_QMARK_(text)));
});
nextjournal.markdown.parser.push_node = (function nextjournal$markdown$parser$push_node(p__54503,node){
var map__54504 = p__54503;
var map__54504__$1 = cljs.core.__destructure_map(map__54504);
var doc = map__54504__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54504__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
try{var G__54506 = doc;
if((!(nextjournal.markdown.parser.empty_text_node_QMARK_(node)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__54506,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.inc_last),cljs.core.pop(path),cljs.core.conj,node);
} else {
return G__54506;
}
}catch (e54505){if((e54505 instanceof Error)){
var e = e54505;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["nextjournal.markdown cannot add node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node)," at path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"node","node",581201198),node], null),e);
} else {
throw e54505;

}
}});
nextjournal.markdown.parser.push_nodes = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,nextjournal.markdown.parser.push_node);
nextjournal.markdown.parser.open_node = (function nextjournal$markdown$parser$open_node(var_args){
var G__54508 = arguments.length;
switch (G__54508) {
case 2:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2 = (function (doc,type){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,type,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3 = (function (doc,type,attrs){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,type,attrs,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4 = (function (doc,type,attrs,top_level){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.node(type,cljs.core.PersistentVector.EMPTY,attrs,top_level)),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.into,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null));
}));

(nextjournal.markdown.parser.open_node.cljs$lang$maxFixedArity = 4);

nextjournal.markdown.parser.ppop = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pop,cljs.core.pop);
nextjournal.markdown.parser.close_node = (function nextjournal$markdown$parser$close_node(doc){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),nextjournal.markdown.parser.ppop);
});
nextjournal.markdown.parser.update_current = (function nextjournal$markdown$parser$update_current(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54886 = arguments.length;
var i__5770__auto___54887 = (0);
while(true){
if((i__5770__auto___54887 < len__5769__auto___54886)){
args__5775__auto__.push((arguments[i__5770__auto___54887]));

var G__54888 = (i__5770__auto___54887 + (1));
i__5770__auto___54887 = G__54888;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic = (function (p__54519,fn,args){
var map__54520 = p__54519;
var map__54520__$1 = cljs.core.__destructure_map(map__54520);
var doc = map__54520__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,doc,path,fn,args);
}));

(nextjournal.markdown.parser.update_current.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.markdown.parser.update_current.cljs$lang$applyTo = (function (seq54515){
var G__54516 = cljs.core.first(seq54515);
var seq54515__$1 = cljs.core.next(seq54515);
var G__54517 = cljs.core.first(seq54515__$1);
var seq54515__$2 = cljs.core.next(seq54515__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54516,G__54517,seq54515__$2);
}));

nextjournal.markdown.parser.assign_node_id_PLUS_emoji = (function nextjournal$markdown$parser$assign_node_id_PLUS_emoji(p__54523){
var map__54524 = p__54523;
var map__54524__$1 = cljs.core.__destructure_map(map__54524);
var doc = map__54524__$1;
var id__GT_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54524__$1,new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54524__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var text__GT_id_PLUS_emoji_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54524__$1,new cljs.core.Keyword(null,"text->id+emoji-fn","text->id+emoji-fn",-1047929619));
var map__54525 = ((cljs.core.ifn_QMARK_(text__GT_id_PLUS_emoji_fn))?(function (){var G__54526 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
return (text__GT_id_PLUS_emoji_fn.cljs$core$IFn$_invoke$arity$1 ? text__GT_id_PLUS_emoji_fn.cljs$core$IFn$_invoke$arity$1(G__54526) : text__GT_id_PLUS_emoji_fn.call(null,G__54526));
})():null);
var map__54525__$1 = cljs.core.__destructure_map(map__54525);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var emoji = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54525__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144));
var id_count = (cljs.core.truth_(id)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_index,id):null);
var G__54527 = doc;
var G__54527__$1 = (cljs.core.truth_(id)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__54527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288),id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))):G__54527);
if(cljs.core.truth_((function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return emoji;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__54527__$1,path,(function (node){
var G__54530 = node;
var G__54530__$1 = (cljs.core.truth_(id)?cljs.core.assoc_in(G__54530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(function (){var G__54531 = id;
if(cljs.core.truth_(id_count)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54531),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_count + (1)))].join('');
} else {
return G__54531;
}
})()):G__54530);
if(cljs.core.truth_(emoji)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54530__$1,new cljs.core.Keyword(null,"emoji","emoji",1031230144),emoji);
} else {
return G__54530__$1;
}
}));
} else {
return G__54527__$1;
}
});
nextjournal.markdown.parser.into_toc = (function nextjournal$markdown$parser$into_toc(toc,p__54534){
var map__54535 = p__54534;
var map__54535__$1 = cljs.core.__destructure_map(map__54535);
var toc_item = map__54535__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54535__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var toc__$1 = toc;
var l = heading_level;
var toc_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null);
while(true){
var type_path = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(toc_path,(cljs.core.count(toc_path) - (1)),new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path))){
var G__54895 = cljs.core.assoc_in(toc__$1,toc_path,cljs.core.PersistentVector.EMPTY);
var G__54896 = l;
var G__54897 = toc_path;
toc__$1 = G__54895;
l = G__54896;
toc_path = G__54897;
continue;
} else {
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,type_path))){
var G__54898 = cljs.core.assoc_in(toc__$1,type_path,new cljs.core.Keyword(null,"toc","toc",2050089251));
var G__54899 = l;
var G__54900 = toc_path;
toc__$1 = G__54898;
l = G__54899;
toc_path = G__54900;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),l)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(toc__$1,toc_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),toc_item);
} else {
var G__54901 = toc__$1;
var G__54902 = (l - (1));
var G__54903 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(toc_path,(function (){var x__5130__auto__ = (0);
var y__5131__auto__ = (cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(toc__$1,toc_path)) - (1));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982)], 0));
toc__$1 = G__54901;
l = G__54902;
toc_path = G__54903;
continue;

}
}
}
break;
}
});
nextjournal.markdown.parser.add_to_toc = (function nextjournal$markdown$parser$add_to_toc(doc,p__54543){
var map__54544 = p__54543;
var map__54544__$1 = cljs.core.__destructure_map(map__54544);
var h = map__54544__$1;
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54544__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var G__54546 = doc;
if(cljs.core.pos_int_QMARK_(heading_level)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54546,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.markdown.parser.into_toc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)));
} else {
return G__54546;
}
});
nextjournal.markdown.parser.set_title_when_missing = (function nextjournal$markdown$parser$set_title_when_missing(p__54547,heading){
var map__54548 = p__54547;
var map__54548__$1 = cljs.core.__destructure_map(map__54548);
var doc = map__54548__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548__$1,new cljs.core.Keyword(null,"title","title",636505583));
var G__54549 = doc;
if((title == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54549,new cljs.core.Keyword(null,"title","title",636505583),nextjournal.markdown.transform.__GT_text(heading));
} else {
return G__54549;
}
});
/**
 * Computes and adds a :title and a :toc to the document-like structure `doc` which might have not been constructed by means of `parse`.
 */
nextjournal.markdown.parser.add_title_PLUS_toc = (function nextjournal$markdown$parser$add_title_PLUS_toc(p__54557){
var map__54560 = p__54557;
var map__54560__$1 = cljs.core.__destructure_map(map__54560);
var doc = map__54560__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"content","content",15833224));
var rf = (function (doc__$1,heading){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(doc__$1,heading),heading);
});
var xf = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(xf(rf),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null)),content);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.markdown !== 'undefined') && (typeof nextjournal.markdown.parser !== 'undefined') && (typeof nextjournal.markdown.parser.apply_token !== 'undefined')){
} else {
nextjournal.markdown.parser.apply_token = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54574 = cljs.core.get_global_hierarchy;
return (fexpr__54574.cljs$core$IFn$_invoke$arity$0 ? fexpr__54574.cljs$core$IFn$_invoke$arity$0() : fexpr__54574.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nextjournal.markdown.parser","apply-token"),(function (_doc,token){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (doc,token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("apply-token","unknown-type","apply-token/unknown-type",-1923384033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], 0));

return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading-level","heading-level",563433452),nextjournal.markdown.parser.hlevel(token)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"heading_close",(function (doc,p__54577){
var map__54578 = p__54577;
var map__54578__$1 = cljs.core.__destructure_map(map__54578);
var doc_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54578__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__54579 = nextjournal.markdown.parser.close_node(doc);
var map__54579__$1 = cljs.core.__destructure_map(map__54579);
var doc__$1 = map__54579__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54579__$1,new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444));
var doc_SINGLEQUOTE_ = nextjournal.markdown.parser.assign_node_id_PLUS_emoji(doc__$1);
var heading = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc_SINGLEQUOTE_,path),new cljs.core.Keyword(null,"path","path",-188191168),path);
var G__54580 = doc_SINGLEQUOTE_;
if((doc_level === (0))){
return nextjournal.markdown.parser.set_title_when_missing(nextjournal.markdown.parser.add_to_toc(G__54580,heading),heading);
} else {
return G__54580;
}
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_open",(function (doc,p__54581){
var map__54582 = p__54581;
var map__54582__$1 = cljs.core.__destructure_map(map__54582);
var _token = map__54582__$1;
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54582__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,(cljs.core.truth_(hidden)?new cljs.core.Keyword(null,"plain","plain",1368629269):new cljs.core.Keyword(null,"paragraph","paragraph",296707709)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"paragraph_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_open",(function (doc,p__54583){
var map__54584 = p__54583;
var map__54584__$1 = cljs.core.__destructure_map(map__54584);
var map__54585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__54585__$1 = cljs.core.__destructure_map(map__54585);
var attrs = map__54585__$1;
var has_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54585__$1,new cljs.core.Keyword(null,"has-todos","has-todos",-1788119241));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(has_todos)?new cljs.core.Keyword(null,"todo-list","todo-list",653205378):new cljs.core.Keyword(null,"bullet-list","bullet-list",-2051767989)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"bullet_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_open",(function (doc,p__54588){
var map__54589 = p__54588;
var map__54589__$1 = cljs.core.__destructure_map(map__54589);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"numbered-list","numbered-list",13892942),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"ordered_list_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_open",(function (doc,p__54592){
var map__54593 = p__54592;
var map__54593__$1 = cljs.core.__destructure_map(map__54593);
var map__54594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var map__54594__$1 = cljs.core.__destructure_map(map__54594);
var attrs = map__54594__$1;
var todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54594__$1,new cljs.core.Keyword(null,"todo","todo",-1046442570));
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,(cljs.core.truth_(todo)?new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804):new cljs.core.Keyword(null,"list-item","list-item",-999803634)),attrs);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"list_item_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block",(function (doc,p__54595){
var map__54596 = p__54595;
var map__54596__$1 = cljs.core.__destructure_map(map__54596);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54596__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.block_formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_block_end",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"hr",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ruler","ruler",2134373867)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"blockquote_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocOpen",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"toc","toc",2050089251));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocBody",(function (doc,_token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tocClose",(function (doc,_token){
return nextjournal.markdown.parser.update_current.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.close_node(doc),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_block",(function (doc,p__54604){
var map__54605 = p__54604;
var map__54605__$1 = cljs.core.__destructure_map(map__54605);
var _token = map__54605__$1;
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"code","code",1586293142)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"fence",(function (doc,p__54607){
var map__54608 = p__54607;
var map__54608__$1 = cljs.core.__destructure_map(map__54608);
var _token = map__54608__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$4(doc,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentArrayMap.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.parse_fence_info(i),new cljs.core.Keyword(null,"info","info",-317069002),i)),nextjournal.markdown.parser.text_node(c)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_ref",(function (doc,token){
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.sidenote_ref((function (){var G__54614 = token;
var G__54615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__54614,G__54615) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__54614,G__54615));
})()));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_anchor",(function (doc,token){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412),true),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){var G__54621 = token;
var G__54622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__54621,G__54622) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__54621,G__54622));
})()], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_close",(function (doc,token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_block_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"sidenotes?","sidenotes?",-1418896412),true),new cljs.core.Keyword(null,"sidenote","sidenote",-368558802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (){var G__54628 = token;
var G__54629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"id","id",-1388402092)], null);
return (nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(G__54628,G__54629) : nextjournal.markdown.parser.get_in_STAR_.call(null,G__54628,G__54629));
})()], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"sidenote_block_close",(function (doc,token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table","table",-564943036));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"table_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-head","table-head",-1134134854));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"thead_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-row","table-row",118957987));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tr_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-header","table-header",564803008),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"th_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"table-body","table-body",-753458877));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"tbody_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"td_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.text_tokenizers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),/(^|\B)#[\w-]+/,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs.cljs$core$IFn$_invoke$arity$2((match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((0)) : match.call(null,(0))),(1))], null);
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),/\[\[([^\]]+)\]\]/,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (match){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal-link","internal-link",-1380732260),new cljs.core.Keyword(null,"text","text",-1790561697),(match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1((1)) : match.call(null,(1)))], null);
})], null)], null);
/**
 * Normalizes a map of regex and handler into a Tokenizer
 */
nextjournal.markdown.parser.normalize_tokenizer = (function nextjournal$markdown$parser$normalize_tokenizer(p__54653){
var map__54654 = p__54653;
var map__54654__$1 = cljs.core.__destructure_map(map__54654);
var tokenizer = map__54654__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = doc_handler;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return handler;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = regex;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return tokenizer_fn;
}
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (or doc-handler handler) (or regex tokenizer-fn))"));
}

var G__54658 = tokenizer;
var G__54658__$1 = ((cljs.core.not(doc_handler))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54658,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),(function (doc,p__54660){
var map__54661 = p__54660;
var map__54661__$1 = cljs.core.__destructure_map(map__54661);
var match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54661__$1,new cljs.core.Keyword(null,"match","match",1220059550));
return nextjournal.markdown.parser.push_node(doc,(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(match) : handler.call(null,match)));
})):G__54658);
if(cljs.core.not(tokenizer_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54658__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.re_idx_seq,regex));
} else {
return G__54658__$1;
}
});
nextjournal.markdown.parser.tokenize_text_node = (function nextjournal$markdown$parser$tokenize_text_node(p__54676,p__54677){
var map__54678 = p__54676;
var map__54678__$1 = cljs.core.__destructure_map(map__54678);
var tkz = map__54678__$1;
var tokenizer_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54678__$1,new cljs.core.Keyword(null,"tokenizer-fn","tokenizer-fn",1254435779));
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54678__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var map__54679 = p__54677;
var map__54679__$1 = cljs.core.__destructure_map(map__54679);
var node = map__54679__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54679__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(((cljs.core.fn_QMARK_(tokenizer_fn)) && (((cljs.core.fn_QMARK_(doc_handler)) && (typeof text === 'string'))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"tokenizer","tokenizer",1801337391),tkz], null)),"\n","(and (fn? tokenizer-fn) (fn? doc-handler) (string? text))"].join('')));
}

var idx_seq = (tokenizer_fn.cljs$core$IFn$_invoke$arity$1 ? tokenizer_fn.cljs$core$IFn$_invoke$arity$1(text) : tokenizer_fn.call(null,text));
if(cljs.core.seq(idx_seq)){
var text_hnode = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.markdown.parser.text_node(s),new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node);
});
var map__54682 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54683,p__54684){
var map__54685 = p__54683;
var map__54685__$1 = cljs.core.__destructure_map(map__54685);
var acc = map__54685__$1;
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54685__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var vec__54686 = p__54684;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54686,(0),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54686,(1),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54686,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var G__54691 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),cljs.core.subs,(0),start);
if((end < cljs.core.count(remaining_text))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54691,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,text_hnode(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remaining_text,end)));
} else {
return G__54691;
}
})(),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),doc_handler,new cljs.core.Keyword(null,"match","match",1220059550),match,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259),text,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.List.EMPTY], null),cljs.core.reverse(idx_seq));
var map__54682__$1 = cljs.core.__destructure_map(map__54682);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var remaining_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54682__$1,new cljs.core.Keyword(null,"remaining-text","remaining-text",1460985259));
var G__54695 = nodes;
if(cljs.core.seq(remaining_text)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54695,text_hnode(remaining_text));
} else {
return G__54695;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
});
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"text",(function (p__54707,p__54708){
var map__54709 = p__54707;
var map__54709__$1 = cljs.core.__destructure_map(map__54709);
var doc = map__54709__$1;
var text_tokenizers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54709__$1,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926));
var map__54710 = p__54708;
var map__54710__$1 = cljs.core.__destructure_map(map__54710);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54710__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__54715){
var map__54716 = p__54715;
var map__54716__$1 = cljs.core.__destructure_map(map__54716);
var node = map__54716__$1;
var doc_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54716__$1,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
var G__54718 = doc__$1;
var G__54719 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775));
return (doc_handler.cljs$core$IFn$_invoke$arity$2 ? doc_handler.cljs$core$IFn$_invoke$arity$2(G__54718,G__54719) : doc_handler.call(null,G__54718,G__54719));
}),doc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (nodes,tokenizer){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__54720){
var map__54721 = p__54720;
var map__54721__$1 = cljs.core.__destructure_map(map__54721);
var node = map__54721__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54721__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type)){
return nextjournal.markdown.parser.tokenize_text_node(tokenizer,node);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),content,new cljs.core.Keyword(null,"doc-handler","doc-handler",1751167775),nextjournal.markdown.parser.push_node], null)], null),text_tokenizers));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"inline",(function (doc,p__54723){
var map__54724 = p__54723;
var map__54724__$1 = cljs.core.__destructure_map(map__54724);
var _token = map__54724__$1;
var ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(doc,ts) : nextjournal.markdown.parser.apply_tokens.call(null,doc,ts));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline",(function (doc,p__54728){
var map__54729 = p__54728;
var map__54729__$1 = cljs.core.__destructure_map(map__54729);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54729__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"math_inline_double",(function (doc,p__54736){
var map__54737 = p__54736;
var map__54737__$1 = cljs.core.__destructure_map(map__54737);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54737__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.push_node(doc,nextjournal.markdown.parser.formula(text));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"softbreak",(function (doc,_token){
return nextjournal.markdown.parser.push_node(doc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"softbreak","softbreak",-983135729)], null));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"image",(function (doc,p__54744){
var map__54745 = p__54744;
var map__54745__$1 = cljs.core.__destructure_map(map__54745);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return nextjournal.markdown.parser.close_node((function (){var G__54746 = nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"image","image",-58725096),attrs);
var G__54747 = children;
return (nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2 ? nextjournal.markdown.parser.apply_tokens.cljs$core$IFn$_invoke$arity$2(G__54746,G__54747) : nextjournal.markdown.parser.apply_tokens.call(null,G__54746,G__54747));
})());
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"em","em",707813035));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"em_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strong","strong",269529000));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"strong_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_open",(function (doc,_token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"strikethrough","strikethrough",1012146804));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"s_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_open",(function (doc,token){
return nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(token));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"link_close",(function (doc,_token){
return nextjournal.markdown.parser.close_node(doc);
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"code_inline",(function (doc,p__54753){
var map__54754 = p__54753;
var map__54754__$1 = cljs.core.__destructure_map(map__54754);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54754__$1,new cljs.core.Keyword(null,"content","content",15833224));
return nextjournal.markdown.parser.close_node(nextjournal.markdown.parser.push_node(nextjournal.markdown.parser.open_node.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.Keyword(null,"monospace","monospace",2089559697)),nextjournal.markdown.parser.text_node(text)));
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_inline",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.apply_token.cljs$core$IMultiFn$_add_method$arity$3(null,"html_block",(function (doc,_){
return doc;
}));
nextjournal.markdown.parser.pairs__GT_kmap = (function nextjournal$markdown$parser$pairs__GT_kmap(pairs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.first),cljs.core.second)),pairs);
});
nextjournal.markdown.parser.apply_tokens = (function nextjournal$markdown$parser$apply_tokens(doc,tokens){
var mapify_attrs_xf = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return (nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3 ? nextjournal.markdown.parser.update_STAR_.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap) : nextjournal.markdown.parser.update_STAR_.call(null,x,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),nextjournal.markdown.parser.pairs__GT_kmap));
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mapify_attrs_xf(nextjournal.markdown.parser.apply_token),doc,tokens);
});
nextjournal.markdown.parser.empty_doc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("nextjournal.markdown.parser","id->index","nextjournal.markdown.parser/id->index",546594288),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"text->id+emoji-fn","text->id+emoji-fn",-1047929619),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.text__GT_id_PLUS_emoji,nextjournal.markdown.transform.__GT_text),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toc","toc",2050089251)], null),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(-1)], null),new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),nextjournal.markdown.parser.text_tokenizers], null);
/**
 * Takes a doc and a collection of markdown-it tokens, applies tokens to doc. Uses an emtpy doc in arity 1.
 */
nextjournal.markdown.parser.parse = (function nextjournal$markdown$parser$parse(var_args){
var G__54757 = arguments.length;
switch (G__54757) {
case 1:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
return nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2(nextjournal.markdown.parser.empty_doc,tokens);
}));

(nextjournal.markdown.parser.parse.cljs$core$IFn$_invoke$arity$2 = (function (doc,tokens){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(nextjournal.markdown.parser.apply_tokens(cljs.core.update.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,nextjournal.markdown.parser.normalize_tokenizer)),tokens),new cljs.core.Keyword("nextjournal.markdown.parser","path","nextjournal.markdown.parser/path",-433206444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-tokenizers","text-tokenizers",1311007926)], 0));
}));

(nextjournal.markdown.parser.parse.cljs$lang$maxFixedArity = 2);

nextjournal.markdown.parser.section_at = (function nextjournal$markdown$parser$section_at(p__54769,p__54770){
var map__54771 = p__54769;
var map__54771__$1 = cljs.core.__destructure_map(map__54771);
var doc = map__54771__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54771__$1,new cljs.core.Keyword(null,"content","content",15833224));
var vec__54772 = p__54770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54772,(1),null);
var path = vec__54772;
var map__54776 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,path);
var map__54776__$1 = cljs.core.__destructure_map(map__54776);
var h = map__54776__$1;
var section_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54776__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
var in_section_QMARK_ = (function (p__54777){
var map__54778 = p__54777;
var map__54778__$1 = cljs.core.__destructure_map(map__54778);
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return ((cljs.core.not(l)) || ((section_level < l)));
});
if(cljs.core.truth_(section_level)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.cons(h,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(in_section_QMARK_,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((pos + (1)),content)))], null);
} else {
return null;
}
});

//# sourceMappingURL=nextjournal.markdown.parser.js.map
