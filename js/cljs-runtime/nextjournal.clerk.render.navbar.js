import "./cljs_env.js";
goog.provide('nextjournal.clerk.render.navbar');
var module$node_modules$emoji_regex$index=shadow.js.require("module$node_modules$emoji_regex$index", {});
nextjournal.clerk.render.navbar.emoji_re = module$node_modules$emoji_regex$index();
nextjournal.clerk.render.navbar.stop_event_BANG_ = (function nextjournal$clerk$render$navbar$stop_event_BANG_(event){
event.preventDefault();

return event.stopPropagation();
});
/**
 * Uses framer-motion to animate scrolling to a section.
 *   `offset` here is just a visual offset. It looks way nicer to stop
 *   just before a section instead of having it glued to the top of
 *   the viewport.
 */
nextjournal.clerk.render.navbar.scroll_to_anchor_BANG_ = (function nextjournal$clerk$render$navbar$scroll_to_anchor_BANG_(_BANG_state,anchor){
var map__54758 = cljs.core.deref(_BANG_state);
var map__54758__$1 = cljs.core.__destructure_map(map__54758);
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var scroll_animation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"scroll-animation","scroll-animation",2033576100));
var scroll_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473));
var set_hash_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"set-hash?","set-hash?",1284779132));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54758__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var scroll_top = scroll_el.scrollTop;
var offset = (40);
if(cljs.core.truth_(scroll_animation)){
scroll_animation.stop();
} else {
}

if(cljs.core.truth_(scroll_el)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-animation","scroll-animation",2033576100),nextjournal.ui.components.motion.animate(scroll_top,(scroll_top + document.getElementById(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(anchor,(1))).getBoundingClientRect().top),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),(function (p1__54755_SHARP_){
var obj54761 = scroll_el;
var obj54762 = (((!((obj54761 == null))))?obj54761:({}));
(obj54762["scrollTop"] = (p1__54755_SHARP_ - offset));

return obj54762;
}),new cljs.core.Keyword(null,"onComplete","onComplete",-661010670),(function (){
if(cljs.core.truth_(set_hash_QMARK_)){
return history.pushState(({}),"",anchor);
} else {
return null;
}
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"duration","duration",1444101068),0.4,new cljs.core.Keyword(null,"bounce","bounce",1491727280),0.15], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visible?","visible?",2129863715),(cljs.core.truth_(mobile_QMARK_)?false:visible_QMARK_)], 0));
} else {
return null;
}
});
nextjournal.clerk.render.navbar.theme_class = (function nextjournal$clerk$render$navbar$theme_class(theme,key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"triangle","triangle",-1828376667),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"slide-over-unpinned","slide-over-unpinned",-1492988789),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"back","back",-417520012),new cljs.core.Keyword(null,"expandable","expandable",-704609097),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"slide-over","slide-over",1619183007)],["py-3","text-slate-500 dark:text-slate-400","text-base md:text-[14px] md:hover:bg-slate-200 md:dark:hover:bg-slate-700 dark:text-white px-3 py-2 md:py-1 leading-normal","shadow-xl","text-slate-500 dark:text-slate-400","text-slate-500 absolute right-2 top-[11px] cursor-pointer z-10","py-3","text-xs md:text-[12px] leading-normal text-slate-500 dark:text-slate-400 md:hover:bg-slate-200 md:dark:hover:bg-slate-700 font-normal px-3 py-1","text-base md:text-[14px] leading-normal md:hover:bg-slate-200 md:dark:hover:bg-slate-700 dark:text-white px-3 py-2 md:py-1","mt-1 md:mt-0 text-xs md:text-[12px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium px-3 mb-1 leading-none","font-sans bg-white border-r"]),theme], 0)),key);
});
nextjournal.clerk.render.navbar.toc_items = (function nextjournal$clerk$render$navbar$toc_items(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54883 = arguments.length;
var i__5770__auto___54884 = (0);
while(true){
if((i__5770__auto___54884 < len__5769__auto___54883)){
args__5775__auto__.push((arguments[i__5770__auto___54884]));

var G__54885 = (i__5770__auto___54884 + (1));
i__5770__auto___54884 = G__54885;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clerk.render.navbar.toc_items.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clerk.render.navbar.toc_items.cljs$core$IFn$_invoke$arity$variadic = (function (_BANG_state,items,p__54784){
var vec__54785 = p__54784;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54785,(0),null);
var map__54788 = cljs.core.deref(_BANG_state);
var map__54788__$1 = cljs.core.__destructure_map(map__54788);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54789){
var map__54790 = p__54789;
var map__54790__$1 = cljs.core.__destructure_map(map__54790);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54790__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54790__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54790__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path,new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"item","item",249373802)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
nextjournal.clerk.render.navbar.stop_event_BANG_(event);

return nextjournal.clerk.render.navbar.scroll_to_anchor_BANG_(_BANG_state,path);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,options], 0)),title], null)], null),((cljs.core.seq(items__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-3","div.ml-3",-430290733),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.toc_items,_BANG_state,items__$1], null)], null):null)], null);
}),items));
}));

(nextjournal.clerk.render.navbar.toc_items.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clerk.render.navbar.toc_items.cljs$lang$applyTo = (function (seq54779){
var G__54780 = cljs.core.first(seq54779);
var seq54779__$1 = cljs.core.next(seq54779);
var G__54781 = cljs.core.first(seq54779__$1);
var seq54779__$2 = cljs.core.next(seq54779__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54780,G__54781,seq54779__$2);
}));

nextjournal.clerk.render.navbar.navbar_items = (function nextjournal$clerk$render$navbar$navbar_items(_BANG_state,items,update_at){
var map__54798 = cljs.core.deref(_BANG_state);
var map__54798__$1 = cljs.core.__destructure_map(map__54798);
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54798__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__54799){
var map__54800 = p__54799;
var map__54800__$1 = cljs.core.__destructure_map(map__54800);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"title","title",636505583));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54800__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var label = (function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//)));
}
})();
var emoji = (((label.search(nextjournal.clerk.render.navbar.emoji_re) === (0)))?cljs.core.first(label.match(nextjournal.clerk.render.navbar.emoji_re)):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core.seq(items__$1))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.cursor-pointer","div.flex.cursor-pointer",-129766098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"expandable","expandable",-704609097)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
nextjournal.clerk.render.navbar.stop_event_BANG_(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc_in,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(update_at,i,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], 0))),cljs.core.not(expanded_QMARK_));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.flex-shrink-0","div.flex.items-center.justify-center.flex-shrink-0",-873078956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[20px] h-[20px] mr-[4px]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.transform.transition","svg.transform.transition",1321179580),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"triangle","triangle",-1828376667)))," ","w-[10px] h-[10px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 ",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),label], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),path,new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"item","item",249373802)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(toc)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc_in,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(update_at,i,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049)], 0))),true);

setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_state,(function (p1__54793_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(p1__54793_SHARP_,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(update_at,i,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049)], 0))),false),new cljs.core.Keyword(null,"toc","toc",2050089251),toc);
}));
}),(500));
} else {
}

if(cljs.core.truth_(mobile_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.flex-shrink-0","div.flex.items-center.justify-center.flex-shrink-0",-873078956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[20px] h-[20px] mr-[4px]"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.animate-spin.h-3.w-3.text-slate-500.dark:text-slate-400","svg.animate-spin.h-3.w-3.text-slate-500.dark:text-slate-400",1031846562),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.opacity-25","circle.opacity-25",-2135642308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"12",new cljs.core.Keyword(null,"r","r",-471384190),"10",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.opacity-75","path.opacity-75",1184631242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"d","d",1972142424),"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"], null)], null)], null):(cljs.core.truth_(emoji)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),emoji], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"icon","icon",1679606541))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], null)], null)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(emoji)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(label,cljs.core.count(emoji)):label)], null)], null)),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.seq(items__$1);
if(and__5043__auto__){
return expanded_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-3","div.ml-3",-430290733),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.navbar_items,_BANG_state,items__$1,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(update_at,i,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"items","items",1031954938)], 0)))], null)], null):null)], null);
}),items));
});
nextjournal.clerk.render.navbar.navbar = (function nextjournal$clerk$render$navbar$navbar(_BANG_state){
var map__54818 = cljs.core.deref(_BANG_state);
var map__54818__$1 = cljs.core.__destructure_map(map__54818);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54818__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var items_QMARK_ = cljs.core.seq(items);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.overflow-x-hidden.h-full","div.relative.overflow-x-hidden.h-full",196941965),((items_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.top-0.w-full.h-full.overflow-y-auto.transform.transition.pb-10","div.absolute.left-0.top-0.w-full.h-full.overflow-y-auto.transform.transition.pb-10",-1086024982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"project","project",1124394579)))," ",(cljs.core.truth_(toc)?"-translate-x-full":"translate-x-0")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.mb-1","div.px-3.mb-1",-1034700032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"heading","heading",-1312171873))], null),"Project"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.navbar_items,_BANG_state,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.left-0.top-0.w-full.h-full.overflow-y-auto.transform","div.absolute.left-0.top-0.w-full.h-full.overflow-y-auto.transform",-1101558801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[((items_QMARK_)?"transition ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"toc","toc",2050089251)))," ",(cljs.core.truth_(toc)?"translate-x-0":"translate-x-full")].join('')], null),((((cljs.core.seq(items)) && (cljs.core.seq(toc))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.py-1.cursor-pointer","div.px-3.py-1.cursor-pointer",-1178572601),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"back","back",-417520012)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_state,cljs.core.dissoc,new cljs.core.Keyword(null,"toc","toc",2050089251));
})], null),"\u2190 Back to project"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.mb-1","div.px-3.mb-1",-1034700032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"heading","heading",-1312171873))], null),"TOC"], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.toc_items,_BANG_state,toc,(((cljs.core.count(toc) < (2)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium"], null):null)], null)], null)], null);
});
nextjournal.clerk.render.navbar.toggle_button = (function nextjournal$clerk$render$navbar$toggle_button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54889 = arguments.length;
var i__5770__auto___54890 = (0);
while(true){
if((i__5770__auto___54890 < len__5769__auto___54889)){
args__5775__auto__.push((arguments[i__5770__auto___54890]));

var G__54891 = (i__5770__auto___54890 + (1));
i__5770__auto___54890 = G__54891;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return nextjournal.clerk.render.navbar.toggle_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(nextjournal.clerk.render.navbar.toggle_button.cljs$core$IFn$_invoke$arity$variadic = (function (_BANG_state,content,p__54829){
var vec__54830 = p__54829;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830,(0),null);
var map__54833 = cljs.core.deref(_BANG_state);
var map__54833__$1 = cljs.core.__destructure_map(map__54833);
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54833__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var mobile_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54833__$1,new cljs.core.Keyword(null,"mobile-open?","mobile-open?",192715821));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54833__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,(cljs.core.truth_(mobile_QMARK_)?new cljs.core.Keyword(null,"mobile-open?","mobile-open?",192715821):new cljs.core.Keyword(null,"open?","open?",1238443125)),(cljs.core.truth_(mobile_QMARK_)?cljs.core.not(mobile_open_QMARK_):cljs.core.not(open_QMARK_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"animation-mode","animation-mode",245298782),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.Keyword(null,"slide-over","slide-over",1619183007):new cljs.core.Keyword(null,"push-in","push-in",-24687815))], 0));
})], null),opts], 0)),content], null);
}));

(nextjournal.clerk.render.navbar.toggle_button.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clerk.render.navbar.toggle_button.cljs$lang$applyTo = (function (seq54826){
var G__54827 = cljs.core.first(seq54826);
var seq54826__$1 = cljs.core.next(seq54826);
var G__54828 = cljs.core.first(seq54826__$1);
var seq54826__$2 = cljs.core.next(seq54826__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54827,G__54828,seq54826__$2);
}));

nextjournal.clerk.render.navbar.spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"duration","duration",1444101068),0.35,new cljs.core.Keyword(null,"bounce","bounce",1491727280),0.1], null);
nextjournal.clerk.render.navbar.panel = (function nextjournal$clerk$render$navbar$panel(_BANG_state,content){
var with_let54872 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let54872","with-let54872",-1819255586));
var temp__5808__auto___54893 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___54893 == null)){
} else {
var c__53026__auto___54894 = temp__5808__auto___54893;
if((with_let54872.generation === c__53026__auto___54894.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let54872.generation = c__53026__auto___54894.ratomGeneration);
}

var init54873 = (with_let54872.length === (0));
var map__54876 = ((((init54873) || (cljs.core.not(with_let54872.hasOwnProperty((0))))))?(with_let54872[(0)] = cljs.core.deref(_BANG_state)):(with_let54872[(0)]));
var map__54876__$1 = cljs.core.__destructure_map(map__54876);
var local_storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558));
var component_key = ((((init54873) || (cljs.core.not(with_let54872.hasOwnProperty((1))))))?(with_let54872[(1)] = (function (){var or__5045__auto__ = local_storage_key;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})()):(with_let54872[(1)]));
var resize = ((((init54873) || (cljs.core.not(with_let54872.hasOwnProperty((2))))))?(with_let54872[(2)] = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),(innerWidth < (640)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mobile-open?","mobile-open?",192715821),false], 0));
})):(with_let54872[(2)]));
var ref_fn = ((((init54873) || (cljs.core.not(with_let54872.hasOwnProperty((3))))))?(with_let54872[(3)] = (function (p1__54836_SHARP_){
if(cljs.core.truth_(p1__54836_SHARP_)){
if(cljs.core.truth_(local_storage_key)){
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.render.navbar","persist","nextjournal.clerk.render.navbar/persist",-1947943071),(function (_,___$1,old,p__54877){
var map__54878 = p__54877;
var map__54878__$1 = cljs.core.__destructure_map(map__54878);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54878__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old),open_QMARK_)){
return nextjournal.ui.components.localstorage.set_item_BANG_(local_storage_key,open_QMARK_);
} else {
return null;
}
}));
} else {
}

addEventListener("resize",resize);

return (resize.cljs$core$IFn$_invoke$arity$0 ? resize.cljs$core$IFn$_invoke$arity$0() : resize.call(null));
} else {
return removeEventListener("resize",resize);
}
})):(with_let54872[(3)]));
var res54874 = (function (){var map__54879 = cljs.core.deref(_BANG_state);
var map__54879__$1 = cljs.core.__destructure_map(map__54879);
var animation_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"animation-mode","animation-mode",245298782));
var hide_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"hide-toggle?","hide-toggle?",-1874012773));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var mobile_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"mobile-open?","mobile-open?",192715821));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var mobile_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var w = (cljs.core.truth_(mobile_QMARK_)?mobile_width:width);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.h-screen","div.flex.h-screen",-235976668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.animate_presence,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial","initial",1854648214),false], null),(cljs.core.truth_((function (){var and__5043__auto__ = mobile_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return mobile_open_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.div,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key),"-backdrop"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed z-10 bg-gray-500 bg-opacity-75 left-0 top-0 bottom-0 right-0",new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"mobile-open?","mobile-open?",192715821),false);
}),new cljs.core.Keyword(null,"transition","transition",765692007),nextjournal.clerk.render.navbar.spring], null)], null):null),(cljs.core.truth_((function (){var or__5045__auto__ = mobile_open_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = cljs.core.not(mobile_QMARK_);
if(and__5043__auto__){
return open_QMARK_;
} else {
return and__5043__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.div,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-animation-complete","on-animation-complete",-1313479071),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"initial","initial",1854648214)],[(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"animating?","animating?",-333605094),false);
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key),"-nav"].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_mode,new cljs.core.Keyword(null,"slide-over","slide-over",1619183007)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(w * (-1))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(w * (-1))], null)),nextjournal.clerk.render.navbar.spring,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_mode,new cljs.core.Keyword(null,"slide-over","slide-over",1619183007)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(0)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),w], null),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"animating?","animating?",-333605094),true);
}),["h-screen z-10 flex-shrink-0 fixed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"slide-over","slide-over",1619183007)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(mobile_QMARK_)?nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"slide-over-unpinned","slide-over-unpinned",-1492988789)):null))].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_mode,new cljs.core.Keyword(null,"slide-over","slide-over",1619183007)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(w * (-1))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(w * (-1))], null))]),(cljs.core.truth_(hide_toggle_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.navbar.toggle_button,_BANG_state,(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-5.w-5","svg.h-5.w-5",312747905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M6 18L18 6M6 6l12 12"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.w-4.w-4","svg.w-4.w-4",-2074608972),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M15 19l-7-7 7-7"], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nextjournal.clerk.render.navbar.theme_class(theme,new cljs.core.Keyword(null,"toggle","toggle",1291842030))], null)], null)),content], null):null)], null)], null);
})();
return res54874;
});

//# sourceMappingURL=nextjournal.clerk.render.navbar.js.map
