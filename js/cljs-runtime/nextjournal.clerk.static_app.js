import "./cljs_env.js";
goog.provide('nextjournal.clerk.static_app');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
nextjournal.clerk.static_app.doc_url = (function nextjournal$clerk$static_app$doc_url(p__66506,path){
var map__66507 = p__66506;
var map__66507__$1 = cljs.core.__destructure_map(map__66507);
var path__GT_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66507__$1,new cljs.core.Keyword(null,"path->url","path->url",619884785));
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66507__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66507__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var url = (path__GT_url.cljs$core$IFn$_invoke$arity$1 ? path__GT_url.cljs$core$IFn$_invoke$arity$1(path) : path__GT_url.call(null,path));
if(cljs.core.truth_(bundle_QMARK_)){
return ["#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
} else {
var url__$1 = (function (){var G__66508 = url;
if((((typeof document !== 'undefined')) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.location.protocol,"file:")) && ((((url == null)) || (clojure.string.ends_with_QMARK_(url,"/")))))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66508),"index.html"].join('');
} else {
return G__66508;
}
})();
var dir_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.frequencies(current_path),"/",(0));
var relative_root = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dir_depth,"../"));
return [relative_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)].join('');
}
});
nextjournal.clerk.static_app.hiccup = (function nextjournal$clerk$static_app$hiccup(hiccup){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.render.html_viewer,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),hiccup], null);
});
nextjournal.clerk.static_app.show = (function nextjournal$clerk$static_app$show(p__66509){
var map__66510 = p__66509;
var map__66510__$1 = cljs.core.__destructure_map(map__66510);
var view_data = map__66510__$1;
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword("git","sha","git/sha",-950222993));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword("git","url","git/url",276391304));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url__GT_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66510__$1,new cljs.core.Keyword(null,"url->path","url->path",1929246367));
var header = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-8.text-xs.sans-serif.text-gray-400.not-prose","div.mb-8.text-xs.sans-serif.text-gray-400.not-prose",1977209907),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",path))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300","a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300",-927437215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),nextjournal.clerk.static_app.doc_url(view_data,"")], null),"Back to index"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-1","span.mx-1",-1460509123),"/"], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Generated with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300","a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300",-927437215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/nextjournal/clerk"], null),"Clerk"], null),(cljs.core.truth_((function (){var and__5043__auto__ = url;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = sha;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.contains_QMARK_(url__GT_path,path);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)," from ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300","a.hover:text-indigo-500.dark:hover:text-white.font-medium.border-b.border-dotted.border-gray-300",-927437215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sha),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((url__GT_path.cljs$core$IFn$_invoke$arity$1 ? url__GT_path.cljs$core$IFn$_invoke$arity$1(path) : url__GT_path.call(null,path)))].join('')], null),(url__GT_path.cljs$core$IFn$_invoke$arity$1 ? url__GT_path.cljs$core$IFn$_invoke$arity$1(path) : url__GT_path.call(null,path)),"@",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tabular-nums","span.tabular-nums",-471576308),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sha,(0),(7))], null)], null)], null):null)], null)], null);
nextjournal.clerk.render.set_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),(function (){var G__66511 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730),bundle_QMARK_);
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(doc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__66511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.static_app.hiccup(header)], null)));
} else {
return G__66511;
}
})()], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.root], null);
});
nextjournal.clerk.static_app.index = (function nextjournal$clerk$static_app$index(p__66513){
var map__66514 = p__66513;
var map__66514__$1 = cljs.core.__destructure_map(map__66514);
var view_data = map__66514__$1;
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66514__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
if((typeof document !== 'undefined')){
(document.title = "Clerk");
} else {
}

var with_let66515 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let66515","with-let66515",745586349));
var temp__5808__auto___66523 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___66523 == null)){
} else {
var c__53026__auto___66524 = temp__5808__auto___66523;
if((with_let66515.generation === c__53026__auto___66524.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let66515.generation = c__53026__auto___66524.ratomGeneration);
}

var init66516 = (with_let66515.length === (0));
var _BANG_state = ((((init66516) || (cljs.core.not(with_let66515.hasOwnProperty((0))))))?(with_let66515[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),nextjournal.clerk.render.localstorage_get(nextjournal.clerk.render.local_storage_dark_mode_key)], null))):(with_let66515[(0)]));
var ref_fn = ((((init66516) || (cljs.core.not(with_let66515.hasOwnProperty((1))))))?(with_let66515[(1)] = (function (p1__66512_SHARP_){
if(cljs.core.truth_(p1__66512_SHARP_)){
return nextjournal.clerk.render.setup_dark_mode_BANG_(_BANG_state);
} else {
return null;
}
})):(with_let66515[(1)]));
var res66517 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-100.dark:bg-gray-900.flex.justify-center.overflow-y-auto.w-screen.h-screen.p-4.md:p-0","div.bg-gray-100.dark:bg-gray-900.flex.justify-center.overflow-y-auto.w-screen.h-screen.p-4.md:p-0",-28305780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.dark_mode_toggle,_BANG_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md:my-12.w-full.md:max-w-lg","div.md:my-12.w-full.md:max-w-lg",94095376),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.dark:bg-gray-800.shadow-lg.rounded-lg.border.dark:border-gray-800.dark:text-white","div.bg-white.dark:bg-gray-800.shadow-lg.rounded-lg.border.dark:border-gray-800.dark:text-white",775975420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.md:px-8.py-3","div.px-4.md:px-8.py-3",-415507650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl","h1.text-xl",-128714254),"Clerk"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.border-t.dark:border-gray-900","li.border-t.dark:border-gray-900",1513133877),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pl-4.md:pl-8.pr-4.py-2.flex.w-full.items-center.justify-between.hover:bg-indigo-50.dark:hover:bg-gray-700","a.pl-4.md:pl-8.pr-4.py-2.flex.w-full.items-center.justify-between.hover:bg-indigo-50.dark:hover:bg-gray-700",115610256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),nextjournal.clerk.static_app.doc_url(view_data,path)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.md:text-md.monospace.flex-auto.block.truncate","span.text-sm.md:text-md.monospace.flex-auto.block.truncate",1205952081),path], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.flex-shrink-0","svg.h-4.w-4.flex-shrink-0",-1205835444),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M9 5l7 7-7 7"], null)], null)], null)], null)], null);
})),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(paths))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4.md:mb-0.text-xs.text-gray-400.sans-serif.px-4.md:px-8","div.my-4.md:mb-0.text-xs.text-gray-400.sans-serif.px-4.md:px-8",955185876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:text-indigo-600.dark:hover:text-white","a.hover:text-indigo-600.dark:hover:text-white",-191130986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/nextjournal/clerk"], null),"Generated with Clerk."], null)], null)], null)], null);
return res66517;
});
nextjournal.clerk.static_app.get_routes = (function nextjournal$clerk$static_app$get_routes(docs){
var index_QMARK_ = cljs.core.contains_QMARK_(docs,"");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/*path",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.clerk.static-app","show","nextjournal.clerk.static-app/show",448822294),new cljs.core.Keyword(null,"view","view",1247994814),nextjournal.clerk.static_app.show], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.clerk.static-app","index","nextjournal.clerk.static-app/index",1683279692),new cljs.core.Keyword(null,"view","view",1247994814),((index_QMARK_)?nextjournal.clerk.static_app.show:nextjournal.clerk.static_app.index)], null)], null)], null);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.static_app !== 'undefined') && (typeof nextjournal.clerk.static_app._BANG_match !== 'undefined')){
} else {
nextjournal.clerk.static_app._BANG_match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.static_app !== 'undefined') && (typeof nextjournal.clerk.static_app._BANG_state !== 'undefined')){
} else {
nextjournal.clerk.static_app._BANG_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nextjournal.clerk.static_app.root = (function nextjournal$clerk$static_app$root(){
var map__66518 = cljs.core.deref(nextjournal.clerk.static_app._BANG_match);
var map__66518__$1 = cljs.core.__destructure_map(map__66518);
var match = map__66518__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66518__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66518__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var map__66519 = data;
var map__66519__$1 = cljs.core.__destructure_map(map__66519);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66519__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var view_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(nextjournal.clerk.static_app._BANG_state),data,path_params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nextjournal.clerk.static_app._BANG_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path->doc","path->doc",-634415134),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$2(path_params,"")], null))], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.min-h-screen.bg-white.dark:bg-gray-900","div.flex.min-h-screen.bg-white.dark:bg-gray-900",205160085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.w-screen.scroll-container","div.flex-auto.w-screen.scroll-container",-886749679),(cljs.core.truth_(view)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,view_data], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([match], 0))], null))], null)], null);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.static_app !== 'undefined') && (typeof nextjournal.clerk.static_app.container !== 'undefined')){
} else {
nextjournal.clerk.static_app.container = (function (){var and__5043__auto__ = (typeof document !== 'undefined');
if(and__5043__auto__){
return document.getElementById("clerk-static-app");
} else {
return and__5043__auto__;
}
})();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.static_app !== 'undefined') && (typeof nextjournal.clerk.static_app.hydrate_QMARK_ !== 'undefined')){
} else {
nextjournal.clerk.static_app.hydrate_QMARK_ = (cljs.core.truth_(nextjournal.clerk.static_app.container)?(nextjournal.clerk.static_app.container.childElementCount > (0)):null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.static_app !== 'undefined') && (typeof nextjournal.clerk.static_app.react_root !== 'undefined')){
} else {
nextjournal.clerk.static_app.react_root = (cljs.core.truth_(nextjournal.clerk.static_app.container)?(cljs.core.truth_(nextjournal.clerk.static_app.hydrate_QMARK_)?module$node_modules$react_dom$client.hydrateRoot(nextjournal.clerk.static_app.container,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.static_app.root], null))):module$node_modules$react_dom$client.createRoot(nextjournal.clerk.static_app.container)):null);
}
nextjournal.clerk.static_app.mount = (function nextjournal$clerk$static_app$mount(){
if(cljs.core.truth_((function (){var and__5043__auto__ = nextjournal.clerk.static_app.react_root;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(nextjournal.clerk.static_app.hydrate_QMARK_);
} else {
return and__5043__auto__;
}
})())){
return nextjournal.clerk.static_app.react_root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.static_app.root], null)));
} else {
return null;
}
});
nextjournal.clerk.static_app.init = (function nextjournal$clerk$static_app$init(p__66521){
var map__66522 = p__66521;
var map__66522__$1 = cljs.core.__destructure_map(map__66522);
var state = map__66522__$1;
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var path__GT_doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"path->doc","path->doc",-634415134));
var path__GT_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"path->url","path->url",619884785));
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66522__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var url__GT_doc = clojure.set.rename_keys(path__GT_doc,path__GT_url);
cljs.core.reset_BANG_(nextjournal.clerk.static_app._BANG_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"path->doc","path->doc",-634415134),url__GT_doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url->path","url->path",1929246367),clojure.set.map_invert(path__GT_url)], 0)));

sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.sci_env.doc_url,cljs.core.constantly(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.static_app.doc_url,cljs.core.deref(nextjournal.clerk.static_app._BANG_state))));

if(cljs.core.truth_(bundle_QMARK_)){
var router_66525 = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.static_app.get_routes(url__GT_doc));
reitit.frontend.easy.start_BANG_(router_66525,(function (p1__66520_SHARP_){
return cljs.core.reset_BANG_(nextjournal.clerk.static_app._BANG_match,p1__66520_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
} else {
cljs.core.reset_BANG_(nextjournal.clerk.static_app._BANG_match,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),((clojure.string.blank_QMARK_(current_path))?nextjournal.clerk.static_app.index:nextjournal.clerk.static_app.show)], null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),(path__GT_url.cljs$core$IFn$_invoke$arity$1 ? path__GT_url.cljs$core$IFn$_invoke$arity$1(current_path) : path__GT_url.call(null,current_path))], null)], null));
}

return nextjournal.clerk.static_app.mount();
});
goog.exportSymbol('nextjournal.clerk.static_app.init', nextjournal.clerk.static_app.init);
nextjournal.clerk.static_app.ssr = (function nextjournal$clerk$static_app$ssr(state_str){
nextjournal.clerk.static_app.init(nextjournal.clerk.sci_env.read_string(state_str));

return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.static_app.root], null));
});
goog.exportSymbol('nextjournal.clerk.static_app.ssr', nextjournal.clerk.static_app.ssr);

//# sourceMappingURL=nextjournal.clerk.static_app.js.map
