import "./cljs_env.js";
goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__58117 = cljs.core.get_global_hierarchy;
return (fexpr__58117.cljs$core$IFn$_invoke$arity$0 ? fexpr__58117.cljs$core$IFn$_invoke$arity$0() : fexpr__58117.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__58147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__58147.cljs$core$IFn$_invoke$arity$1 ? fexpr__58147.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__58147.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__58166 = cljs.core.get_global_hierarchy;
return (fexpr__58166.cljs$core$IFn$_invoke$arity$0 ? fexpr__58166.cljs$core$IFn$_invoke$arity$0() : fexpr__58166.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__58171 = cljs.core.get_global_hierarchy;
return (fexpr__58171.cljs$core$IFn$_invoke$arity$0 ? fexpr__58171.cljs$core$IFn$_invoke$arity$0() : fexpr__58171.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__58243 = null;
var G__58243__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__58172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__58172.cljs$core$IFn$_invoke$arity$2 ? fexpr__58172.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__58172.call(null,ref,f));
});
var G__58243__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__58173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__58173.cljs$core$IFn$_invoke$arity$3 ? fexpr__58173.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__58173.call(null,ref,f,a1));
});
var G__58243__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__58193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__58193.cljs$core$IFn$_invoke$arity$4 ? fexpr__58193.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__58193.call(null,ref,f,a1,a2));
});
var G__58243__5 = (function() { 
var G__58245__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__58245 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__58247__i = 0, G__58247__a = new Array(arguments.length -  4);
while (G__58247__i < G__58247__a.length) {G__58247__a[G__58247__i] = arguments[G__58247__i + 4]; ++G__58247__i;}
  args = new cljs.core.IndexedSeq(G__58247__a,0,null);
} 
return G__58245__delegate.call(this,ref,f,a1,a2,args);};
G__58245.cljs$lang$maxFixedArity = 4;
G__58245.cljs$lang$applyTo = (function (arglist__58248){
var ref = cljs.core.first(arglist__58248);
arglist__58248 = cljs.core.next(arglist__58248);
var f = cljs.core.first(arglist__58248);
arglist__58248 = cljs.core.next(arglist__58248);
var a1 = cljs.core.first(arglist__58248);
arglist__58248 = cljs.core.next(arglist__58248);
var a2 = cljs.core.first(arglist__58248);
var args = cljs.core.rest(arglist__58248);
return G__58245__delegate(ref,f,a1,a2,args);
});
G__58245.cljs$core$IFn$_invoke$arity$variadic = G__58245__delegate;
return G__58245;
})()
;
G__58243 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__58243__2.call(this,ref,f);
case 3:
return G__58243__3.call(this,ref,f,a1);
case 4:
return G__58243__4.call(this,ref,f,a1,a2);
default:
var G__58249 = null;
if (arguments.length > 4) {
var G__58250__i = 0, G__58250__a = new Array(arguments.length -  4);
while (G__58250__i < G__58250__a.length) {G__58250__a[G__58250__i] = arguments[G__58250__i + 4]; ++G__58250__i;}
G__58249 = new cljs.core.IndexedSeq(G__58250__a,0,null);
}
return G__58243__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__58249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58243.cljs$lang$maxFixedArity = 4;
G__58243.cljs$lang$applyTo = G__58243__5.cljs$lang$applyTo;
G__58243.cljs$core$IFn$_invoke$arity$2 = G__58243__2;
G__58243.cljs$core$IFn$_invoke$arity$3 = G__58243__3;
G__58243.cljs$core$IFn$_invoke$arity$4 = G__58243__4;
G__58243.cljs$core$IFn$_invoke$arity$variadic = G__58243__5.cljs$core$IFn$_invoke$arity$variadic;
return G__58243;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__58214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__58214.cljs$core$IFn$_invoke$arity$2 ? fexpr__58214.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__58214.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__58262__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__58262 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__58266__i = 0, G__58266__a = new Array(arguments.length -  2);
while (G__58266__i < G__58266__a.length) {G__58266__a[G__58266__i] = arguments[G__58266__i + 2]; ++G__58266__i;}
  args = new cljs.core.IndexedSeq(G__58266__a,0,null);
} 
return G__58262__delegate.call(this,ref,f,args);};
G__58262.cljs$lang$maxFixedArity = 2;
G__58262.cljs$lang$applyTo = (function (arglist__58269){
var ref = cljs.core.first(arglist__58269);
arglist__58269 = cljs.core.next(arglist__58269);
var f = cljs.core.first(arglist__58269);
var args = cljs.core.rest(arglist__58269);
return G__58262__delegate(ref,f,args);
});
G__58262.cljs$core$IFn$_invoke$arity$variadic = G__58262__delegate;
return G__58262;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___58273 = arguments.length;
var i__5770__auto___58274 = (0);
while(true){
if((i__5770__auto___58274 < len__5769__auto___58273)){
args__5775__auto__.push((arguments[i__5770__auto___58274]));

var G__58277 = (i__5770__auto___58274 + (1));
i__5770__auto___58274 = G__58277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq58217){
var G__58218 = cljs.core.first(seq58217);
var seq58217__$1 = cljs.core.next(seq58217);
var G__58219 = cljs.core.first(seq58217__$1);
var seq58217__$2 = cljs.core.next(seq58217__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58218,G__58219,seq58217__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
