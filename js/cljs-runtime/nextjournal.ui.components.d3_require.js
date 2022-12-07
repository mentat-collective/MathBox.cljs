goog.provide('nextjournal.ui.components.d3_require');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
nextjournal.ui.components.d3_require.with$ = (function nextjournal$ui$components$d3_require$with(p__77229,f){
var map__77230 = p__77229;
var map__77230__$1 = cljs.core.__destructure_map(map__77230);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77230__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77230__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),"Loading...");
var with_let77232 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77232","with-let77232",782863971));
var temp__5757__auto___77238 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___77238 == null)){
} else {
var c__62648__auto___77239 = temp__5757__auto___77238;
if((with_let77232.generation === c__62648__auto___77239.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77232.generation = c__62648__auto___77239.ratomGeneration);
}

var init77233 = (with_let77232.length === (0));
var _BANG_package = ((((init77233) || (cljs.core.not(with_let77232.hasOwnProperty((0))))))?(with_let77232[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let77232[(0)]));
var res77234 = (function (){var G__77235 = cljs.core.deref(_BANG_package);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__77235)){
cljs.core.reset_BANG_(_BANG_package,new cljs.core.Keyword(null,"loading","loading",-737050189));

var obj__60830__auto___77240 = ((typeof package$ === 'string')?module$node_modules$d3_require$dist$d3_require.require(package$):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,package$));
var f__60831__auto___77241 = (obj__60830__auto___77240["then"]);
f__60831__auto___77241.call(obj__60830__auto___77240,(function (p1__77228_SHARP_){
return cljs.core.reset_BANG_(_BANG_package,p1__77228_SHARP_);
}));

return loading_view;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),G__77235)){
return loading_view;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var G__77236 = cljs.core.deref(_BANG_package);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__77236) : f.call(null,G__77236));
})());

}
}
})();
return res77234;
});

//# sourceMappingURL=nextjournal.ui.components.d3_require.js.map
