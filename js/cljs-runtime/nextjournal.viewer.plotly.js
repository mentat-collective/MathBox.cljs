goog.provide('nextjournal.viewer.plotly');
nextjournal.viewer.plotly.default_layout = (function (){var G__77267 = new cljs.core.PersistentArrayMap(null, 3, ["font",new cljs.core.PersistentArrayMap(null, 3, ["family","'Verlag A', 'Verlag B', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif","size",(14),"color","#343434"], null),"height",(450),"autosize",false], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof window !== 'undefined');
if(and__4251__auto__){
return window.hasOwnProperty("ontouchstart");
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77267,"dragmode",false);
} else {
return G__77267;
}
})();
nextjournal.viewer.plotly.default_graph_options = ({"displayModeBar": false, "displayLogo": false});
nextjournal.viewer.plotly.default_min_margin = new cljs.core.PersistentArrayMap(null, 4, ["r",(0),"l",(30),"b",(0),"t",(20)], null);
nextjournal.viewer.plotly.adjust_layout_margins = (function nextjournal$viewer$plotly$adjust_layout_margins(layout){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(layout,"margin",(function (margin){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.max,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.viewer.plotly.default_min_margin,margin,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(layout,"title"))?new cljs.core.PersistentArrayMap(null, 1, ["t",(60)], null):null)], 0));
}));
});
/**
 * Like merge, but merges maps recursively.
 */
nextjournal.viewer.plotly.deep_merge_maps = (function nextjournal$viewer$plotly$deep_merge_maps(m1,m2){
if(((cljs.core.map_QMARK_(m1)) && (cljs.core.map_QMARK_(m2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(nextjournal.viewer.plotly.deep_merge_maps,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m1,m2], 0));
} else {
return m2;
}
});
nextjournal.viewer.plotly.graph_layout_with_defaults = (function nextjournal$viewer$plotly$graph_layout_with_defaults(layout){
var layout__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(layout);
var layout__$2 = ((cljs.core.empty_QMARK_(layout__$1))?cljs.core.PersistentArrayMap.EMPTY:layout__$1);
return cljs.core.clj__GT_js(nextjournal.viewer.plotly.adjust_layout_margins(nextjournal.viewer.plotly.deep_merge_maps(nextjournal.viewer.plotly.default_layout,layout__$2)));
});
nextjournal.viewer.plotly.coerce_val = (function nextjournal$viewer$plotly$coerce_val(value){
if(typeof value === 'string'){
return JSON.parse(value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.clj__GT_js(value);
} else {
return value;

}
}
});
nextjournal.viewer.plotly.viewer_STAR_ = (function nextjournal$viewer$plotly$viewer_STAR_(value){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.d3_require.with$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"package","package",1189062786),"plotly.js-dist@1.51.1"], null),(function (p__77273){
var map__77274 = p__77273;
var map__77274__$1 = (((((!((map__77274 == null))))?(((((map__77274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77274):map__77274);
var Plotly = map__77274__$1;
var relayout = (function (){var obj77277 = map__77274__$1;
if((!((obj77277 == null)))){
return (obj77277["relayout"]);
} else {
return undefined;
}
})();
var Plots = (function (){var obj77279 = map__77274__$1;
if((!((obj77279 == null)))){
return (obj77279["Plots"]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-plotly-result","div.code-plotly-result",705541007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (plotly_el){
if(cljs.core.truth_(plotly_el)){
var map__77280 = nextjournal.viewer.plotly.coerce_val(value);
var map__77280__$1 = (((((!((map__77280 == null))))?(((((map__77280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77280):map__77280);
var coerced = map__77280__$1;
var layout = (function (){var obj77282 = map__77280__$1;
if((!((obj77282 == null)))){
return (obj77282["layout"]);
} else {
return undefined;
}
})();
var value_object = (function (){var obj77283 = (function (){var obj77284 = coerced;
if((!((obj77284 == null)))){
var out77285 = ({});
var k__60737__auto___77324 = "data";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60737__auto___77324,obj77284)){
var obj77288_77325 = out77285;
(obj77288_77325[k__60737__auto___77324] = (obj77284[k__60737__auto___77324]));

} else {
}

var k__60737__auto___77326 = "frames";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__60737__auto___77326,obj77284)){
var obj77291_77327 = out77285;
(obj77291_77327[k__60737__auto___77326] = (obj77284[k__60737__auto___77326]));

} else {
}

return out77285;
} else {
return ({});
}
})();
var obj77295 = (function (){var obj77296 = (((!((obj77283 == null))))?obj77283:({}));
(obj77296["layout"] = nextjournal.viewer.plotly.graph_layout_with_defaults(layout));

return obj77296;
})();
(obj77295["config"] = nextjournal.viewer.plotly.default_graph_options);

return obj77295;
})();
var obj77299_77328 = this$;
var obj77300_77329 = (((!((obj77299_77328 == null))))?obj77299_77328:({}));
(obj77300_77329["resize-listener"] = goog.functions.debounce((function (){
var G__77303_77330 = plotly_el;
var G__77304_77331 = cljs.core.clj__GT_js(nextjournal.viewer.plotly.graph_layout_with_defaults(layout));
(relayout.cljs$core$IFn$_invoke$arity$2 ? relayout.cljs$core$IFn$_invoke$arity$2(G__77303_77330,G__77304_77331) : relayout.call(null,G__77303_77330,G__77304_77331));

return Plots.resize(plotly_el);
}),(100)));


var obj__60830__auto___77332 = (function (){var obj__60830__auto___77332 = Plotly;
var f__60831__auto___77333 = (obj__60830__auto___77332["newPlot"]);
return f__60831__auto___77333.call(obj__60830__auto___77332,plotly_el,value_object);
})();
var f__60831__auto___77333 = (obj__60830__auto___77332["catch"]);
f__60831__auto___77333.call(obj__60830__auto___77332,(function nextjournal$viewer$plotly$viewer_STAR__$_new_plot_error(reason){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("nextjournal.viewer.plotly",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("nextjournal.viewer.plotly","insert-plot","nextjournal.viewer.plotly/insert-plot",-1087984347),"Plotly Error",new cljs.core.Keyword(null,"el","el",-1618201118),plotly_el,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
}));

return window.addEventListener("resize",(function (){var obj77309 = this$;
if((!((obj77309 == null)))){
return (obj77309["resize-listener"]);
} else {
return undefined;
}
})());
} else {
return window.removeEventListener("resize",(function (){var obj77312 = this$;
if((!((obj77312 == null)))){
return (obj77312["resize-listener"]);
} else {
return undefined;
}
})());
}
})], null)], null);
})], null);
});
nextjournal.viewer.plotly.viewer = (function nextjournal$viewer$plotly$viewer(value){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.viewer.plotly.viewer_STAR_,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"reagent","reagent",2131627322)], null));
});

//# sourceMappingURL=nextjournal.viewer.plotly.js.map
