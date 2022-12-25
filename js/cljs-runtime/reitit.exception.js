import "./cljs_env.js";
goog.provide('reitit.exception');
reitit.exception.fail_BANG_ = (function reitit$exception$fail_BANG_(var_args){
var G__64927 = arguments.length;
switch (G__64927) {
case 1:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));

(reitit.exception.fail_BANG_.cljs$lang$maxFixedArity = 2);

reitit.exception.get_message = (function reitit$exception$get_message(e){
return cljs.core.ex_message(e);
});
if((typeof reitit !== 'undefined') && (typeof reitit.exception !== 'undefined') && (typeof reitit.exception.format_exception !== 'undefined')){
} else {
reitit.exception.format_exception = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64928 = cljs.core.get_global_hierarchy;
return (fexpr__64928.cljs$core$IFn$_invoke$arity$0 ? fexpr__64928.cljs$core$IFn$_invoke$arity$0() : fexpr__64928.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.exception","format-exception"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
reitit.exception.exception = (function reitit$exception$exception(e){
var data = cljs.core.ex_data(e);
var message = reitit.exception.format_exception.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),reitit.exception.get_message(e),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data));
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("reitit.exception","cause","reitit.exception/cause",2130128734),e));
});
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,message,data){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),(cljs.core.truth_(data)?["\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join(''):null)].join('');
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),(function (_,___$1,conflicts){
var resolve_str = (function reitit$exception$resolve_str(path,route_data){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data))?"   ":"-> "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.not_empty(cljs.core.select_keys(route_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conflicting","conflicting",2003828416)], null))))].join('');
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64929){
var vec__64930 = p__64929;
var vec__64933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64930,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64933,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64933,(1),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64930,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolve_str(path,route_data)),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64940){
var vec__64941 = p__64940;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64941,(0),null);
var route_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64941,(1),null);
return resolve_str(path__$1,route_data__$1);
}),vals)),"\n\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),(function (_,___$1,conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__64944){
var vec__64945 = p__64944;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64945,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64945,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals)),"\n"].join('');
}),conflicts));
}));
reitit.exception.format_exception.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),(function (_,___$1,data){
return ["Error merging route-data\n\n",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
}));

//# sourceMappingURL=reitit.exception.js.map
