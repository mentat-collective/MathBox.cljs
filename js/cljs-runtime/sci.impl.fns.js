import "./cljs_env.js";
goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__57647 = arguments.length;
switch (G__57647) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__57679 = (fixed_arity | (0));
switch (G__57679) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__57682){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__57682);

while(true){
var ret__56694__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56694__auto__)){
continue;
} else {
return ret__56694__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__57682 = null;
if (arguments.length > 0) {
var G__58223__i = 0, G__58223__a = new Array(arguments.length -  0);
while (G__58223__i < G__58223__a.length) {G__58223__a[G__58223__i] = arguments[G__58223__i + 0]; ++G__58223__i;}
  G__57682 = new cljs.core.IndexedSeq(G__58223__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__57682);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__58224){
var G__57682 = cljs.core.seq(arglist__58224);
return sci$impl$fns$arity_0__delegate(G__57682);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__57704,G__57705){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57704);

(invoc_array[vararg_idx] = G__57705);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__57704,var_args){
var G__57705 = null;
if (arguments.length > 1) {
var G__58225__i = 0, G__58225__a = new Array(arguments.length -  1);
while (G__58225__i < G__58225__a.length) {G__58225__a[G__58225__i] = arguments[G__58225__i + 1]; ++G__58225__i;}
  G__57705 = new cljs.core.IndexedSeq(G__58225__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__57704,G__57705);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__58226){
var G__57704 = cljs.core.first(arglist__58226);
var G__57705 = cljs.core.rest(arglist__58226);
return sci$impl$fns$arity_1__delegate(G__57704,G__57705);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__57713,G__57714,G__57715){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57713);

(invoc_array[(1)] = G__57714);

(invoc_array[vararg_idx] = G__57715);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__57713,G__57714,var_args){
var G__57715 = null;
if (arguments.length > 2) {
var G__58227__i = 0, G__58227__a = new Array(arguments.length -  2);
while (G__58227__i < G__58227__a.length) {G__58227__a[G__58227__i] = arguments[G__58227__i + 2]; ++G__58227__i;}
  G__57715 = new cljs.core.IndexedSeq(G__58227__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__57713,G__57714,G__57715);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__58228){
var G__57713 = cljs.core.first(arglist__58228);
arglist__58228 = cljs.core.next(arglist__58228);
var G__57714 = cljs.core.first(arglist__58228);
var G__57715 = cljs.core.rest(arglist__58228);
return sci$impl$fns$arity_2__delegate(G__57713,G__57714,G__57715);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__57722,G__57723,G__57724,G__57725){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57722);

(invoc_array[(1)] = G__57723);

(invoc_array[(2)] = G__57724);

(invoc_array[vararg_idx] = G__57725);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__57722,G__57723,G__57724,var_args){
var G__57725 = null;
if (arguments.length > 3) {
var G__58233__i = 0, G__58233__a = new Array(arguments.length -  3);
while (G__58233__i < G__58233__a.length) {G__58233__a[G__58233__i] = arguments[G__58233__i + 3]; ++G__58233__i;}
  G__57725 = new cljs.core.IndexedSeq(G__58233__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__57722,G__57723,G__57724,G__57725);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__58234){
var G__57722 = cljs.core.first(arglist__58234);
arglist__58234 = cljs.core.next(arglist__58234);
var G__57723 = cljs.core.first(arglist__58234);
arglist__58234 = cljs.core.next(arglist__58234);
var G__57724 = cljs.core.first(arglist__58234);
var G__57725 = cljs.core.rest(arglist__58234);
return sci$impl$fns$arity_3__delegate(G__57722,G__57723,G__57724,G__57725);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__57726,G__57727,G__57728,G__57729,G__57730){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57726);

(invoc_array[(1)] = G__57727);

(invoc_array[(2)] = G__57728);

(invoc_array[(3)] = G__57729);

(invoc_array[vararg_idx] = G__57730);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__57726,G__57727,G__57728,G__57729,var_args){
var G__57730 = null;
if (arguments.length > 4) {
var G__58237__i = 0, G__58237__a = new Array(arguments.length -  4);
while (G__58237__i < G__58237__a.length) {G__58237__a[G__58237__i] = arguments[G__58237__i + 4]; ++G__58237__i;}
  G__57730 = new cljs.core.IndexedSeq(G__58237__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__57726,G__57727,G__57728,G__57729,G__57730);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__58238){
var G__57726 = cljs.core.first(arglist__58238);
arglist__58238 = cljs.core.next(arglist__58238);
var G__57727 = cljs.core.first(arglist__58238);
arglist__58238 = cljs.core.next(arglist__58238);
var G__57728 = cljs.core.first(arglist__58238);
arglist__58238 = cljs.core.next(arglist__58238);
var G__57729 = cljs.core.first(arglist__58238);
var G__57730 = cljs.core.rest(arglist__58238);
return sci$impl$fns$arity_4__delegate(G__57726,G__57727,G__57728,G__57729,G__57730);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__57732,G__57733,G__57734,G__57735,G__57736,G__57737){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57732);

(invoc_array[(1)] = G__57733);

(invoc_array[(2)] = G__57734);

(invoc_array[(3)] = G__57735);

(invoc_array[(4)] = G__57736);

(invoc_array[vararg_idx] = G__57737);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__57732,G__57733,G__57734,G__57735,G__57736,var_args){
var G__57737 = null;
if (arguments.length > 5) {
var G__58239__i = 0, G__58239__a = new Array(arguments.length -  5);
while (G__58239__i < G__58239__a.length) {G__58239__a[G__58239__i] = arguments[G__58239__i + 5]; ++G__58239__i;}
  G__57737 = new cljs.core.IndexedSeq(G__58239__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__57732,G__57733,G__57734,G__57735,G__57736,G__57737);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__58240){
var G__57732 = cljs.core.first(arglist__58240);
arglist__58240 = cljs.core.next(arglist__58240);
var G__57733 = cljs.core.first(arglist__58240);
arglist__58240 = cljs.core.next(arglist__58240);
var G__57734 = cljs.core.first(arglist__58240);
arglist__58240 = cljs.core.next(arglist__58240);
var G__57735 = cljs.core.first(arglist__58240);
arglist__58240 = cljs.core.next(arglist__58240);
var G__57736 = cljs.core.first(arglist__58240);
var G__57737 = cljs.core.rest(arglist__58240);
return sci$impl$fns$arity_5__delegate(G__57732,G__57733,G__57734,G__57735,G__57736,G__57737);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__57740,G__57741,G__57742,G__57743,G__57744,G__57745,G__57746){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57740);

(invoc_array[(1)] = G__57741);

(invoc_array[(2)] = G__57742);

(invoc_array[(3)] = G__57743);

(invoc_array[(4)] = G__57744);

(invoc_array[(5)] = G__57745);

(invoc_array[vararg_idx] = G__57746);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__57740,G__57741,G__57742,G__57743,G__57744,G__57745,var_args){
var G__57746 = null;
if (arguments.length > 6) {
var G__58241__i = 0, G__58241__a = new Array(arguments.length -  6);
while (G__58241__i < G__58241__a.length) {G__58241__a[G__58241__i] = arguments[G__58241__i + 6]; ++G__58241__i;}
  G__57746 = new cljs.core.IndexedSeq(G__58241__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__57740,G__57741,G__57742,G__57743,G__57744,G__57745,G__57746);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__58242){
var G__57740 = cljs.core.first(arglist__58242);
arglist__58242 = cljs.core.next(arglist__58242);
var G__57741 = cljs.core.first(arglist__58242);
arglist__58242 = cljs.core.next(arglist__58242);
var G__57742 = cljs.core.first(arglist__58242);
arglist__58242 = cljs.core.next(arglist__58242);
var G__57743 = cljs.core.first(arglist__58242);
arglist__58242 = cljs.core.next(arglist__58242);
var G__57744 = cljs.core.first(arglist__58242);
arglist__58242 = cljs.core.next(arglist__58242);
var G__57745 = cljs.core.first(arglist__58242);
var G__57746 = cljs.core.rest(arglist__58242);
return sci$impl$fns$arity_6__delegate(G__57740,G__57741,G__57742,G__57743,G__57744,G__57745,G__57746);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,G__57755){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57748);

(invoc_array[(1)] = G__57749);

(invoc_array[(2)] = G__57750);

(invoc_array[(3)] = G__57751);

(invoc_array[(4)] = G__57752);

(invoc_array[(5)] = G__57753);

(invoc_array[(6)] = G__57754);

(invoc_array[vararg_idx] = G__57755);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,var_args){
var G__57755 = null;
if (arguments.length > 7) {
var G__58244__i = 0, G__58244__a = new Array(arguments.length -  7);
while (G__58244__i < G__58244__a.length) {G__58244__a[G__58244__i] = arguments[G__58244__i + 7]; ++G__58244__i;}
  G__57755 = new cljs.core.IndexedSeq(G__58244__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,G__57755);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__58246){
var G__57748 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57749 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57750 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57751 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57752 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57753 = cljs.core.first(arglist__58246);
arglist__58246 = cljs.core.next(arglist__58246);
var G__57754 = cljs.core.first(arglist__58246);
var G__57755 = cljs.core.rest(arglist__58246);
return sci$impl$fns$arity_7__delegate(G__57748,G__57749,G__57750,G__57751,G__57752,G__57753,G__57754,G__57755);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__57756,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763,G__57764){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57756);

(invoc_array[(1)] = G__57757);

(invoc_array[(2)] = G__57758);

(invoc_array[(3)] = G__57759);

(invoc_array[(4)] = G__57760);

(invoc_array[(5)] = G__57761);

(invoc_array[(6)] = G__57762);

(invoc_array[(7)] = G__57763);

(invoc_array[vararg_idx] = G__57764);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__57756,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763,var_args){
var G__57764 = null;
if (arguments.length > 8) {
var G__58251__i = 0, G__58251__a = new Array(arguments.length -  8);
while (G__58251__i < G__58251__a.length) {G__58251__a[G__58251__i] = arguments[G__58251__i + 8]; ++G__58251__i;}
  G__57764 = new cljs.core.IndexedSeq(G__58251__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__57756,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763,G__57764);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__58253){
var G__57756 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57757 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57758 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57759 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57760 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57761 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57762 = cljs.core.first(arglist__58253);
arglist__58253 = cljs.core.next(arglist__58253);
var G__57763 = cljs.core.first(arglist__58253);
var G__57764 = cljs.core.rest(arglist__58253);
return sci$impl$fns$arity_8__delegate(G__57756,G__57757,G__57758,G__57759,G__57760,G__57761,G__57762,G__57763,G__57764);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__57765,G__57766,G__57767,G__57768,G__57769,G__57770,G__57771,G__57772,G__57773,G__57774){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57765);

(invoc_array[(1)] = G__57766);

(invoc_array[(2)] = G__57767);

(invoc_array[(3)] = G__57768);

(invoc_array[(4)] = G__57769);

(invoc_array[(5)] = G__57770);

(invoc_array[(6)] = G__57771);

(invoc_array[(7)] = G__57772);

(invoc_array[(8)] = G__57773);

(invoc_array[vararg_idx] = G__57774);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__57765,G__57766,G__57767,G__57768,G__57769,G__57770,G__57771,G__57772,G__57773,var_args){
var G__57774 = null;
if (arguments.length > 9) {
var G__58256__i = 0, G__58256__a = new Array(arguments.length -  9);
while (G__58256__i < G__58256__a.length) {G__58256__a[G__58256__i] = arguments[G__58256__i + 9]; ++G__58256__i;}
  G__57774 = new cljs.core.IndexedSeq(G__58256__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__57765,G__57766,G__57767,G__57768,G__57769,G__57770,G__57771,G__57772,G__57773,G__57774);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__58257){
var G__57765 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57766 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57767 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57768 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57769 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57770 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57771 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57772 = cljs.core.first(arglist__58257);
arglist__58257 = cljs.core.next(arglist__58257);
var G__57773 = cljs.core.first(arglist__58257);
var G__57774 = cljs.core.rest(arglist__58257);
return sci$impl$fns$arity_9__delegate(G__57765,G__57766,G__57767,G__57768,G__57769,G__57770,G__57771,G__57772,G__57773,G__57774);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__57775,G__57776,G__57777,G__57778,G__57779,G__57780,G__57781,G__57782,G__57783,G__57784,G__57785){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57775);

(invoc_array[(1)] = G__57776);

(invoc_array[(2)] = G__57777);

(invoc_array[(3)] = G__57778);

(invoc_array[(4)] = G__57779);

(invoc_array[(5)] = G__57780);

(invoc_array[(6)] = G__57781);

(invoc_array[(7)] = G__57782);

(invoc_array[(8)] = G__57783);

(invoc_array[(9)] = G__57784);

(invoc_array[vararg_idx] = G__57785);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__57775,G__57776,G__57777,G__57778,G__57779,G__57780,G__57781,G__57782,G__57783,G__57784,var_args){
var G__57785 = null;
if (arguments.length > 10) {
var G__58259__i = 0, G__58259__a = new Array(arguments.length -  10);
while (G__58259__i < G__58259__a.length) {G__58259__a[G__58259__i] = arguments[G__58259__i + 10]; ++G__58259__i;}
  G__57785 = new cljs.core.IndexedSeq(G__58259__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__57775,G__57776,G__57777,G__57778,G__57779,G__57780,G__57781,G__57782,G__57783,G__57784,G__57785);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__58261){
var G__57775 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57776 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57777 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57778 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57779 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57780 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57781 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57782 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57783 = cljs.core.first(arglist__58261);
arglist__58261 = cljs.core.next(arglist__58261);
var G__57784 = cljs.core.first(arglist__58261);
var G__57785 = cljs.core.rest(arglist__58261);
return sci$impl$fns$arity_10__delegate(G__57775,G__57776,G__57777,G__57778,G__57779,G__57780,G__57781,G__57782,G__57783,G__57784,G__57785);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__57786,G__57787,G__57788,G__57789,G__57790,G__57791,G__57792,G__57793,G__57794,G__57795,G__57796,G__57797){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57786);

(invoc_array[(1)] = G__57787);

(invoc_array[(2)] = G__57788);

(invoc_array[(3)] = G__57789);

(invoc_array[(4)] = G__57790);

(invoc_array[(5)] = G__57791);

(invoc_array[(6)] = G__57792);

(invoc_array[(7)] = G__57793);

(invoc_array[(8)] = G__57794);

(invoc_array[(9)] = G__57795);

(invoc_array[(10)] = G__57796);

(invoc_array[vararg_idx] = G__57797);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__57786,G__57787,G__57788,G__57789,G__57790,G__57791,G__57792,G__57793,G__57794,G__57795,G__57796,var_args){
var G__57797 = null;
if (arguments.length > 11) {
var G__58263__i = 0, G__58263__a = new Array(arguments.length -  11);
while (G__58263__i < G__58263__a.length) {G__58263__a[G__58263__i] = arguments[G__58263__i + 11]; ++G__58263__i;}
  G__57797 = new cljs.core.IndexedSeq(G__58263__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__57786,G__57787,G__57788,G__57789,G__57790,G__57791,G__57792,G__57793,G__57794,G__57795,G__57796,G__57797);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__58265){
var G__57786 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57787 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57788 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57789 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57790 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57791 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57792 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57793 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57794 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57795 = cljs.core.first(arglist__58265);
arglist__58265 = cljs.core.next(arglist__58265);
var G__57796 = cljs.core.first(arglist__58265);
var G__57797 = cljs.core.rest(arglist__58265);
return sci$impl$fns$arity_11__delegate(G__57786,G__57787,G__57788,G__57789,G__57790,G__57791,G__57792,G__57793,G__57794,G__57795,G__57796,G__57797);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__57798,G__57799,G__57800,G__57801,G__57802,G__57803,G__57804,G__57805,G__57806,G__57807,G__57808,G__57809,G__57810){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57798);

(invoc_array[(1)] = G__57799);

(invoc_array[(2)] = G__57800);

(invoc_array[(3)] = G__57801);

(invoc_array[(4)] = G__57802);

(invoc_array[(5)] = G__57803);

(invoc_array[(6)] = G__57804);

(invoc_array[(7)] = G__57805);

(invoc_array[(8)] = G__57806);

(invoc_array[(9)] = G__57807);

(invoc_array[(10)] = G__57808);

(invoc_array[(11)] = G__57809);

(invoc_array[vararg_idx] = G__57810);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__57798,G__57799,G__57800,G__57801,G__57802,G__57803,G__57804,G__57805,G__57806,G__57807,G__57808,G__57809,var_args){
var G__57810 = null;
if (arguments.length > 12) {
var G__58275__i = 0, G__58275__a = new Array(arguments.length -  12);
while (G__58275__i < G__58275__a.length) {G__58275__a[G__58275__i] = arguments[G__58275__i + 12]; ++G__58275__i;}
  G__57810 = new cljs.core.IndexedSeq(G__58275__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__57798,G__57799,G__57800,G__57801,G__57802,G__57803,G__57804,G__57805,G__57806,G__57807,G__57808,G__57809,G__57810);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__58276){
var G__57798 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57799 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57800 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57801 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57802 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57803 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57804 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57805 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57806 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57807 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57808 = cljs.core.first(arglist__58276);
arglist__58276 = cljs.core.next(arglist__58276);
var G__57809 = cljs.core.first(arglist__58276);
var G__57810 = cljs.core.rest(arglist__58276);
return sci$impl$fns$arity_12__delegate(G__57798,G__57799,G__57800,G__57801,G__57802,G__57803,G__57804,G__57805,G__57806,G__57807,G__57808,G__57809,G__57810);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__57811,G__57812,G__57813,G__57814,G__57815,G__57816,G__57817,G__57818,G__57819,G__57820,G__57821,G__57822,G__57823,G__57824){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57811);

(invoc_array[(1)] = G__57812);

(invoc_array[(2)] = G__57813);

(invoc_array[(3)] = G__57814);

(invoc_array[(4)] = G__57815);

(invoc_array[(5)] = G__57816);

(invoc_array[(6)] = G__57817);

(invoc_array[(7)] = G__57818);

(invoc_array[(8)] = G__57819);

(invoc_array[(9)] = G__57820);

(invoc_array[(10)] = G__57821);

(invoc_array[(11)] = G__57822);

(invoc_array[(12)] = G__57823);

(invoc_array[vararg_idx] = G__57824);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__57811,G__57812,G__57813,G__57814,G__57815,G__57816,G__57817,G__57818,G__57819,G__57820,G__57821,G__57822,G__57823,var_args){
var G__57824 = null;
if (arguments.length > 13) {
var G__58280__i = 0, G__58280__a = new Array(arguments.length -  13);
while (G__58280__i < G__58280__a.length) {G__58280__a[G__58280__i] = arguments[G__58280__i + 13]; ++G__58280__i;}
  G__57824 = new cljs.core.IndexedSeq(G__58280__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__57811,G__57812,G__57813,G__57814,G__57815,G__57816,G__57817,G__57818,G__57819,G__57820,G__57821,G__57822,G__57823,G__57824);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__58281){
var G__57811 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57812 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57813 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57814 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57815 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57816 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57817 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57818 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57819 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57820 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57821 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57822 = cljs.core.first(arglist__58281);
arglist__58281 = cljs.core.next(arglist__58281);
var G__57823 = cljs.core.first(arglist__58281);
var G__57824 = cljs.core.rest(arglist__58281);
return sci$impl$fns$arity_13__delegate(G__57811,G__57812,G__57813,G__57814,G__57815,G__57816,G__57817,G__57818,G__57819,G__57820,G__57821,G__57822,G__57823,G__57824);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__57825,G__57826,G__57827,G__57828,G__57829,G__57830,G__57831,G__57832,G__57833,G__57834,G__57835,G__57836,G__57837,G__57838,G__57839){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57825);

(invoc_array[(1)] = G__57826);

(invoc_array[(2)] = G__57827);

(invoc_array[(3)] = G__57828);

(invoc_array[(4)] = G__57829);

(invoc_array[(5)] = G__57830);

(invoc_array[(6)] = G__57831);

(invoc_array[(7)] = G__57832);

(invoc_array[(8)] = G__57833);

(invoc_array[(9)] = G__57834);

(invoc_array[(10)] = G__57835);

(invoc_array[(11)] = G__57836);

(invoc_array[(12)] = G__57837);

(invoc_array[(13)] = G__57838);

(invoc_array[vararg_idx] = G__57839);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__57825,G__57826,G__57827,G__57828,G__57829,G__57830,G__57831,G__57832,G__57833,G__57834,G__57835,G__57836,G__57837,G__57838,var_args){
var G__57839 = null;
if (arguments.length > 14) {
var G__58282__i = 0, G__58282__a = new Array(arguments.length -  14);
while (G__58282__i < G__58282__a.length) {G__58282__a[G__58282__i] = arguments[G__58282__i + 14]; ++G__58282__i;}
  G__57839 = new cljs.core.IndexedSeq(G__58282__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__57825,G__57826,G__57827,G__57828,G__57829,G__57830,G__57831,G__57832,G__57833,G__57834,G__57835,G__57836,G__57837,G__57838,G__57839);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__58283){
var G__57825 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57826 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57827 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57828 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57829 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57830 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57831 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57832 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57833 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57834 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57835 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57836 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57837 = cljs.core.first(arglist__58283);
arglist__58283 = cljs.core.next(arglist__58283);
var G__57838 = cljs.core.first(arglist__58283);
var G__57839 = cljs.core.rest(arglist__58283);
return sci$impl$fns$arity_14__delegate(G__57825,G__57826,G__57827,G__57828,G__57829,G__57830,G__57831,G__57832,G__57833,G__57834,G__57835,G__57836,G__57837,G__57838,G__57839);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,G__57856){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57841);

(invoc_array[(1)] = G__57842);

(invoc_array[(2)] = G__57843);

(invoc_array[(3)] = G__57844);

(invoc_array[(4)] = G__57845);

(invoc_array[(5)] = G__57846);

(invoc_array[(6)] = G__57847);

(invoc_array[(7)] = G__57848);

(invoc_array[(8)] = G__57849);

(invoc_array[(9)] = G__57850);

(invoc_array[(10)] = G__57851);

(invoc_array[(11)] = G__57852);

(invoc_array[(12)] = G__57853);

(invoc_array[(13)] = G__57854);

(invoc_array[(14)] = G__57855);

(invoc_array[vararg_idx] = G__57856);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,var_args){
var G__57856 = null;
if (arguments.length > 15) {
var G__58285__i = 0, G__58285__a = new Array(arguments.length -  15);
while (G__58285__i < G__58285__a.length) {G__58285__a[G__58285__i] = arguments[G__58285__i + 15]; ++G__58285__i;}
  G__57856 = new cljs.core.IndexedSeq(G__58285__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,G__57856);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__58286){
var G__57841 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57842 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57843 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57844 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57845 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57846 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57847 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57848 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57849 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57850 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57851 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57852 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57853 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57854 = cljs.core.first(arglist__58286);
arglist__58286 = cljs.core.next(arglist__58286);
var G__57855 = cljs.core.first(arglist__58286);
var G__57856 = cljs.core.rest(arglist__58286);
return sci$impl$fns$arity_15__delegate(G__57841,G__57842,G__57843,G__57844,G__57845,G__57846,G__57847,G__57848,G__57849,G__57850,G__57851,G__57852,G__57853,G__57854,G__57855,G__57856);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__57860,G__57861,G__57862,G__57863,G__57864,G__57865,G__57866,G__57867,G__57868,G__57869,G__57870,G__57871,G__57872,G__57873,G__57874,G__57875,G__57876){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57860);

(invoc_array[(1)] = G__57861);

(invoc_array[(2)] = G__57862);

(invoc_array[(3)] = G__57863);

(invoc_array[(4)] = G__57864);

(invoc_array[(5)] = G__57865);

(invoc_array[(6)] = G__57866);

(invoc_array[(7)] = G__57867);

(invoc_array[(8)] = G__57868);

(invoc_array[(9)] = G__57869);

(invoc_array[(10)] = G__57870);

(invoc_array[(11)] = G__57871);

(invoc_array[(12)] = G__57872);

(invoc_array[(13)] = G__57873);

(invoc_array[(14)] = G__57874);

(invoc_array[(15)] = G__57875);

(invoc_array[vararg_idx] = G__57876);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__57860,G__57861,G__57862,G__57863,G__57864,G__57865,G__57866,G__57867,G__57868,G__57869,G__57870,G__57871,G__57872,G__57873,G__57874,G__57875,var_args){
var G__57876 = null;
if (arguments.length > 16) {
var G__58288__i = 0, G__58288__a = new Array(arguments.length -  16);
while (G__58288__i < G__58288__a.length) {G__58288__a[G__58288__i] = arguments[G__58288__i + 16]; ++G__58288__i;}
  G__57876 = new cljs.core.IndexedSeq(G__58288__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__57860,G__57861,G__57862,G__57863,G__57864,G__57865,G__57866,G__57867,G__57868,G__57869,G__57870,G__57871,G__57872,G__57873,G__57874,G__57875,G__57876);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__58289){
var G__57860 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57861 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57862 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57863 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57864 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57865 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57866 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57867 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57868 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57869 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57870 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57871 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57872 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57873 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57874 = cljs.core.first(arglist__58289);
arglist__58289 = cljs.core.next(arglist__58289);
var G__57875 = cljs.core.first(arglist__58289);
var G__57876 = cljs.core.rest(arglist__58289);
return sci$impl$fns$arity_16__delegate(G__57860,G__57861,G__57862,G__57863,G__57864,G__57865,G__57866,G__57867,G__57868,G__57869,G__57870,G__57871,G__57872,G__57873,G__57874,G__57875,G__57876);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__57878,G__57879,G__57880,G__57881,G__57882,G__57883,G__57884,G__57885,G__57886,G__57887,G__57888,G__57889,G__57890,G__57891,G__57892,G__57893,G__57894,G__57895){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57878);

(invoc_array[(1)] = G__57879);

(invoc_array[(2)] = G__57880);

(invoc_array[(3)] = G__57881);

(invoc_array[(4)] = G__57882);

(invoc_array[(5)] = G__57883);

(invoc_array[(6)] = G__57884);

(invoc_array[(7)] = G__57885);

(invoc_array[(8)] = G__57886);

(invoc_array[(9)] = G__57887);

(invoc_array[(10)] = G__57888);

(invoc_array[(11)] = G__57889);

(invoc_array[(12)] = G__57890);

(invoc_array[(13)] = G__57891);

(invoc_array[(14)] = G__57892);

(invoc_array[(15)] = G__57893);

(invoc_array[(16)] = G__57894);

(invoc_array[vararg_idx] = G__57895);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__57878,G__57879,G__57880,G__57881,G__57882,G__57883,G__57884,G__57885,G__57886,G__57887,G__57888,G__57889,G__57890,G__57891,G__57892,G__57893,G__57894,var_args){
var G__57895 = null;
if (arguments.length > 17) {
var G__58290__i = 0, G__58290__a = new Array(arguments.length -  17);
while (G__58290__i < G__58290__a.length) {G__58290__a[G__58290__i] = arguments[G__58290__i + 17]; ++G__58290__i;}
  G__57895 = new cljs.core.IndexedSeq(G__58290__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__57878,G__57879,G__57880,G__57881,G__57882,G__57883,G__57884,G__57885,G__57886,G__57887,G__57888,G__57889,G__57890,G__57891,G__57892,G__57893,G__57894,G__57895);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__58291){
var G__57878 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57879 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57880 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57881 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57882 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57883 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57884 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57885 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57886 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57887 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57888 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57889 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57890 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57891 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57892 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57893 = cljs.core.first(arglist__58291);
arglist__58291 = cljs.core.next(arglist__58291);
var G__57894 = cljs.core.first(arglist__58291);
var G__57895 = cljs.core.rest(arglist__58291);
return sci$impl$fns$arity_17__delegate(G__57878,G__57879,G__57880,G__57881,G__57882,G__57883,G__57884,G__57885,G__57886,G__57887,G__57888,G__57889,G__57890,G__57891,G__57892,G__57893,G__57894,G__57895);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__57900,G__57901,G__57902,G__57903,G__57904,G__57905,G__57906,G__57907,G__57908,G__57909,G__57910,G__57911,G__57912,G__57913,G__57914,G__57915,G__57916,G__57917,G__57918){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57900);

(invoc_array[(1)] = G__57901);

(invoc_array[(2)] = G__57902);

(invoc_array[(3)] = G__57903);

(invoc_array[(4)] = G__57904);

(invoc_array[(5)] = G__57905);

(invoc_array[(6)] = G__57906);

(invoc_array[(7)] = G__57907);

(invoc_array[(8)] = G__57908);

(invoc_array[(9)] = G__57909);

(invoc_array[(10)] = G__57910);

(invoc_array[(11)] = G__57911);

(invoc_array[(12)] = G__57912);

(invoc_array[(13)] = G__57913);

(invoc_array[(14)] = G__57914);

(invoc_array[(15)] = G__57915);

(invoc_array[(16)] = G__57916);

(invoc_array[(17)] = G__57917);

(invoc_array[vararg_idx] = G__57918);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__57900,G__57901,G__57902,G__57903,G__57904,G__57905,G__57906,G__57907,G__57908,G__57909,G__57910,G__57911,G__57912,G__57913,G__57914,G__57915,G__57916,G__57917,var_args){
var G__57918 = null;
if (arguments.length > 18) {
var G__58292__i = 0, G__58292__a = new Array(arguments.length -  18);
while (G__58292__i < G__58292__a.length) {G__58292__a[G__58292__i] = arguments[G__58292__i + 18]; ++G__58292__i;}
  G__57918 = new cljs.core.IndexedSeq(G__58292__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__57900,G__57901,G__57902,G__57903,G__57904,G__57905,G__57906,G__57907,G__57908,G__57909,G__57910,G__57911,G__57912,G__57913,G__57914,G__57915,G__57916,G__57917,G__57918);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__58293){
var G__57900 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57901 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57902 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57903 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57904 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57905 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57906 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57907 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57908 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57909 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57910 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57911 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57912 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57913 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57914 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57915 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57916 = cljs.core.first(arglist__58293);
arglist__58293 = cljs.core.next(arglist__58293);
var G__57917 = cljs.core.first(arglist__58293);
var G__57918 = cljs.core.rest(arglist__58293);
return sci$impl$fns$arity_18__delegate(G__57900,G__57901,G__57902,G__57903,G__57904,G__57905,G__57906,G__57907,G__57908,G__57909,G__57910,G__57911,G__57912,G__57913,G__57914,G__57915,G__57916,G__57917,G__57918);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__57922,G__57923,G__57924,G__57925,G__57926,G__57927,G__57928,G__57929,G__57930,G__57931,G__57932,G__57933,G__57934,G__57935,G__57936,G__57937,G__57938,G__57939,G__57940,G__57941){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57922);

(invoc_array[(1)] = G__57923);

(invoc_array[(2)] = G__57924);

(invoc_array[(3)] = G__57925);

(invoc_array[(4)] = G__57926);

(invoc_array[(5)] = G__57927);

(invoc_array[(6)] = G__57928);

(invoc_array[(7)] = G__57929);

(invoc_array[(8)] = G__57930);

(invoc_array[(9)] = G__57931);

(invoc_array[(10)] = G__57932);

(invoc_array[(11)] = G__57933);

(invoc_array[(12)] = G__57934);

(invoc_array[(13)] = G__57935);

(invoc_array[(14)] = G__57936);

(invoc_array[(15)] = G__57937);

(invoc_array[(16)] = G__57938);

(invoc_array[(17)] = G__57939);

(invoc_array[(18)] = G__57940);

(invoc_array[vararg_idx] = G__57941);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__57922,G__57923,G__57924,G__57925,G__57926,G__57927,G__57928,G__57929,G__57930,G__57931,G__57932,G__57933,G__57934,G__57935,G__57936,G__57937,G__57938,G__57939,G__57940,var_args){
var G__57941 = null;
if (arguments.length > 19) {
var G__58298__i = 0, G__58298__a = new Array(arguments.length -  19);
while (G__58298__i < G__58298__a.length) {G__58298__a[G__58298__i] = arguments[G__58298__i + 19]; ++G__58298__i;}
  G__57941 = new cljs.core.IndexedSeq(G__58298__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__57922,G__57923,G__57924,G__57925,G__57926,G__57927,G__57928,G__57929,G__57930,G__57931,G__57932,G__57933,G__57934,G__57935,G__57936,G__57937,G__57938,G__57939,G__57940,G__57941);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__58300){
var G__57922 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57923 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57924 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57925 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57926 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57927 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57928 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57929 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57930 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57931 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57932 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57933 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57934 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57935 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57936 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57937 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57938 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57939 = cljs.core.first(arglist__58300);
arglist__58300 = cljs.core.next(arglist__58300);
var G__57940 = cljs.core.first(arglist__58300);
var G__57941 = cljs.core.rest(arglist__58300);
return sci$impl$fns$arity_19__delegate(G__57922,G__57923,G__57924,G__57925,G__57926,G__57927,G__57928,G__57929,G__57930,G__57931,G__57932,G__57933,G__57934,G__57935,G__57936,G__57937,G__57938,G__57939,G__57940,G__57941);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__57942,G__57943,G__57944,G__57945,G__57946,G__57947,G__57948,G__57949,G__57950,G__57951,G__57952,G__57953,G__57954,G__57955,G__57956,G__57957,G__57958,G__57959,G__57960,G__57961,G__57962){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57942);

(invoc_array[(1)] = G__57943);

(invoc_array[(2)] = G__57944);

(invoc_array[(3)] = G__57945);

(invoc_array[(4)] = G__57946);

(invoc_array[(5)] = G__57947);

(invoc_array[(6)] = G__57948);

(invoc_array[(7)] = G__57949);

(invoc_array[(8)] = G__57950);

(invoc_array[(9)] = G__57951);

(invoc_array[(10)] = G__57952);

(invoc_array[(11)] = G__57953);

(invoc_array[(12)] = G__57954);

(invoc_array[(13)] = G__57955);

(invoc_array[(14)] = G__57956);

(invoc_array[(15)] = G__57957);

(invoc_array[(16)] = G__57958);

(invoc_array[(17)] = G__57959);

(invoc_array[(18)] = G__57960);

(invoc_array[(19)] = G__57961);

(invoc_array[vararg_idx] = G__57962);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__57942,G__57943,G__57944,G__57945,G__57946,G__57947,G__57948,G__57949,G__57950,G__57951,G__57952,G__57953,G__57954,G__57955,G__57956,G__57957,G__57958,G__57959,G__57960,G__57961,var_args){
var G__57962 = null;
if (arguments.length > 20) {
var G__58301__i = 0, G__58301__a = new Array(arguments.length -  20);
while (G__58301__i < G__58301__a.length) {G__58301__a[G__58301__i] = arguments[G__58301__i + 20]; ++G__58301__i;}
  G__57962 = new cljs.core.IndexedSeq(G__58301__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__57942,G__57943,G__57944,G__57945,G__57946,G__57947,G__57948,G__57949,G__57950,G__57951,G__57952,G__57953,G__57954,G__57955,G__57956,G__57957,G__57958,G__57959,G__57960,G__57961,G__57962);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__58302){
var G__57942 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57943 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57944 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57945 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57946 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57947 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57948 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57949 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57950 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57951 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57952 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57953 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57954 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57955 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57956 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57957 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57958 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57959 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57960 = cljs.core.first(arglist__58302);
arglist__58302 = cljs.core.next(arglist__58302);
var G__57961 = cljs.core.first(arglist__58302);
var G__57962 = cljs.core.rest(arglist__58302);
return sci$impl$fns$arity_20__delegate(G__57942,G__57943,G__57944,G__57945,G__57946,G__57947,G__57948,G__57949,G__57950,G__57951,G__57952,G__57953,G__57954,G__57955,G__57956,G__57957,G__57958,G__57959,G__57960,G__57961,G__57962);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57679)].join('')));

}
})():(function (){var G__57963 = (fixed_arity | (0));
switch (G__57963) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__56694__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56694__auto__)){
continue;
} else {
return ret__56694__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__57964){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57964);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__57965,G__57966){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57965);

(invoc_array[(1)] = G__57966);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__57967,G__57968,G__57969){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57967);

(invoc_array[(1)] = G__57968);

(invoc_array[(2)] = G__57969);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__57970,G__57971,G__57972,G__57973){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57970);

(invoc_array[(1)] = G__57971);

(invoc_array[(2)] = G__57972);

(invoc_array[(3)] = G__57973);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__57974,G__57975,G__57976,G__57977,G__57978){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57974);

(invoc_array[(1)] = G__57975);

(invoc_array[(2)] = G__57976);

(invoc_array[(3)] = G__57977);

(invoc_array[(4)] = G__57978);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__57979,G__57980,G__57981,G__57982,G__57983,G__57984){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57979);

(invoc_array[(1)] = G__57980);

(invoc_array[(2)] = G__57981);

(invoc_array[(3)] = G__57982);

(invoc_array[(4)] = G__57983);

(invoc_array[(5)] = G__57984);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__57985,G__57986,G__57987,G__57988,G__57989,G__57990,G__57991){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57985);

(invoc_array[(1)] = G__57986);

(invoc_array[(2)] = G__57987);

(invoc_array[(3)] = G__57988);

(invoc_array[(4)] = G__57989);

(invoc_array[(5)] = G__57990);

(invoc_array[(6)] = G__57991);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__57992,G__57993,G__57994,G__57995,G__57996,G__57997,G__57998,G__57999){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__57992);

(invoc_array[(1)] = G__57993);

(invoc_array[(2)] = G__57994);

(invoc_array[(3)] = G__57995);

(invoc_array[(4)] = G__57996);

(invoc_array[(5)] = G__57997);

(invoc_array[(6)] = G__57998);

(invoc_array[(7)] = G__57999);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__58004,G__58005,G__58006,G__58007,G__58008,G__58009,G__58010,G__58011,G__58012){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58004);

(invoc_array[(1)] = G__58005);

(invoc_array[(2)] = G__58006);

(invoc_array[(3)] = G__58007);

(invoc_array[(4)] = G__58008);

(invoc_array[(5)] = G__58009);

(invoc_array[(6)] = G__58010);

(invoc_array[(7)] = G__58011);

(invoc_array[(8)] = G__58012);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__58013,G__58014,G__58015,G__58016,G__58017,G__58018,G__58019,G__58020,G__58021,G__58022){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58013);

(invoc_array[(1)] = G__58014);

(invoc_array[(2)] = G__58015);

(invoc_array[(3)] = G__58016);

(invoc_array[(4)] = G__58017);

(invoc_array[(5)] = G__58018);

(invoc_array[(6)] = G__58019);

(invoc_array[(7)] = G__58020);

(invoc_array[(8)] = G__58021);

(invoc_array[(9)] = G__58022);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__58023,G__58024,G__58025,G__58026,G__58027,G__58028,G__58029,G__58030,G__58031,G__58032,G__58033){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58023);

(invoc_array[(1)] = G__58024);

(invoc_array[(2)] = G__58025);

(invoc_array[(3)] = G__58026);

(invoc_array[(4)] = G__58027);

(invoc_array[(5)] = G__58028);

(invoc_array[(6)] = G__58029);

(invoc_array[(7)] = G__58030);

(invoc_array[(8)] = G__58031);

(invoc_array[(9)] = G__58032);

(invoc_array[(10)] = G__58033);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__58035,G__58036,G__58037,G__58038,G__58039,G__58040,G__58041,G__58042,G__58043,G__58044,G__58045,G__58046){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58035);

(invoc_array[(1)] = G__58036);

(invoc_array[(2)] = G__58037);

(invoc_array[(3)] = G__58038);

(invoc_array[(4)] = G__58039);

(invoc_array[(5)] = G__58040);

(invoc_array[(6)] = G__58041);

(invoc_array[(7)] = G__58042);

(invoc_array[(8)] = G__58043);

(invoc_array[(9)] = G__58044);

(invoc_array[(10)] = G__58045);

(invoc_array[(11)] = G__58046);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__58049,G__58050,G__58051,G__58052,G__58053,G__58054,G__58055,G__58056,G__58057,G__58058,G__58059,G__58060,G__58061){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58049);

(invoc_array[(1)] = G__58050);

(invoc_array[(2)] = G__58051);

(invoc_array[(3)] = G__58052);

(invoc_array[(4)] = G__58053);

(invoc_array[(5)] = G__58054);

(invoc_array[(6)] = G__58055);

(invoc_array[(7)] = G__58056);

(invoc_array[(8)] = G__58057);

(invoc_array[(9)] = G__58058);

(invoc_array[(10)] = G__58059);

(invoc_array[(11)] = G__58060);

(invoc_array[(12)] = G__58061);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__58062,G__58063,G__58064,G__58065,G__58066,G__58067,G__58068,G__58069,G__58070,G__58071,G__58072,G__58073,G__58074,G__58075){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58062);

(invoc_array[(1)] = G__58063);

(invoc_array[(2)] = G__58064);

(invoc_array[(3)] = G__58065);

(invoc_array[(4)] = G__58066);

(invoc_array[(5)] = G__58067);

(invoc_array[(6)] = G__58068);

(invoc_array[(7)] = G__58069);

(invoc_array[(8)] = G__58070);

(invoc_array[(9)] = G__58071);

(invoc_array[(10)] = G__58072);

(invoc_array[(11)] = G__58073);

(invoc_array[(12)] = G__58074);

(invoc_array[(13)] = G__58075);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__58076,G__58077,G__58078,G__58079,G__58080,G__58081,G__58082,G__58083,G__58084,G__58085,G__58086,G__58087,G__58088,G__58089,G__58090){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58076);

(invoc_array[(1)] = G__58077);

(invoc_array[(2)] = G__58078);

(invoc_array[(3)] = G__58079);

(invoc_array[(4)] = G__58080);

(invoc_array[(5)] = G__58081);

(invoc_array[(6)] = G__58082);

(invoc_array[(7)] = G__58083);

(invoc_array[(8)] = G__58084);

(invoc_array[(9)] = G__58085);

(invoc_array[(10)] = G__58086);

(invoc_array[(11)] = G__58087);

(invoc_array[(12)] = G__58088);

(invoc_array[(13)] = G__58089);

(invoc_array[(14)] = G__58090);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__58091,G__58092,G__58093,G__58094,G__58095,G__58096,G__58097,G__58098,G__58099,G__58100,G__58101,G__58102,G__58103,G__58104,G__58105,G__58106){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58091);

(invoc_array[(1)] = G__58092);

(invoc_array[(2)] = G__58093);

(invoc_array[(3)] = G__58094);

(invoc_array[(4)] = G__58095);

(invoc_array[(5)] = G__58096);

(invoc_array[(6)] = G__58097);

(invoc_array[(7)] = G__58098);

(invoc_array[(8)] = G__58099);

(invoc_array[(9)] = G__58100);

(invoc_array[(10)] = G__58101);

(invoc_array[(11)] = G__58102);

(invoc_array[(12)] = G__58103);

(invoc_array[(13)] = G__58104);

(invoc_array[(14)] = G__58105);

(invoc_array[(15)] = G__58106);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__58118,G__58119,G__58120,G__58121,G__58122,G__58123,G__58124,G__58125,G__58126,G__58127,G__58128,G__58129,G__58130,G__58131,G__58132,G__58133,G__58134){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58118);

(invoc_array[(1)] = G__58119);

(invoc_array[(2)] = G__58120);

(invoc_array[(3)] = G__58121);

(invoc_array[(4)] = G__58122);

(invoc_array[(5)] = G__58123);

(invoc_array[(6)] = G__58124);

(invoc_array[(7)] = G__58125);

(invoc_array[(8)] = G__58126);

(invoc_array[(9)] = G__58127);

(invoc_array[(10)] = G__58128);

(invoc_array[(11)] = G__58129);

(invoc_array[(12)] = G__58130);

(invoc_array[(13)] = G__58131);

(invoc_array[(14)] = G__58132);

(invoc_array[(15)] = G__58133);

(invoc_array[(16)] = G__58134);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__58148,G__58149,G__58150,G__58151,G__58152,G__58153,G__58154,G__58155,G__58156,G__58157,G__58158,G__58159,G__58160,G__58161,G__58162,G__58163,G__58164,G__58165){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58148);

(invoc_array[(1)] = G__58149);

(invoc_array[(2)] = G__58150);

(invoc_array[(3)] = G__58151);

(invoc_array[(4)] = G__58152);

(invoc_array[(5)] = G__58153);

(invoc_array[(6)] = G__58154);

(invoc_array[(7)] = G__58155);

(invoc_array[(8)] = G__58156);

(invoc_array[(9)] = G__58157);

(invoc_array[(10)] = G__58158);

(invoc_array[(11)] = G__58159);

(invoc_array[(12)] = G__58160);

(invoc_array[(13)] = G__58161);

(invoc_array[(14)] = G__58162);

(invoc_array[(15)] = G__58163);

(invoc_array[(16)] = G__58164);

(invoc_array[(17)] = G__58165);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__58174,G__58175,G__58176,G__58177,G__58178,G__58179,G__58180,G__58181,G__58182,G__58183,G__58184,G__58185,G__58186,G__58187,G__58188,G__58189,G__58190,G__58191,G__58192){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58174);

(invoc_array[(1)] = G__58175);

(invoc_array[(2)] = G__58176);

(invoc_array[(3)] = G__58177);

(invoc_array[(4)] = G__58178);

(invoc_array[(5)] = G__58179);

(invoc_array[(6)] = G__58180);

(invoc_array[(7)] = G__58181);

(invoc_array[(8)] = G__58182);

(invoc_array[(9)] = G__58183);

(invoc_array[(10)] = G__58184);

(invoc_array[(11)] = G__58185);

(invoc_array[(12)] = G__58186);

(invoc_array[(13)] = G__58187);

(invoc_array[(14)] = G__58188);

(invoc_array[(15)] = G__58189);

(invoc_array[(16)] = G__58190);

(invoc_array[(17)] = G__58191);

(invoc_array[(18)] = G__58192);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__58194,G__58195,G__58196,G__58197,G__58198,G__58199,G__58200,G__58201,G__58202,G__58203,G__58204,G__58205,G__58206,G__58207,G__58208,G__58209,G__58210,G__58211,G__58212,G__58213){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__58194);

(invoc_array[(1)] = G__58195);

(invoc_array[(2)] = G__58196);

(invoc_array[(3)] = G__58197);

(invoc_array[(4)] = G__58198);

(invoc_array[(5)] = G__58199);

(invoc_array[(6)] = G__58200);

(invoc_array[(7)] = G__58201);

(invoc_array[(8)] = G__58202);

(invoc_array[(9)] = G__58203);

(invoc_array[(10)] = G__58204);

(invoc_array[(11)] = G__58205);

(invoc_array[(12)] = G__58206);

(invoc_array[(13)] = G__58207);

(invoc_array[(14)] = G__58208);

(invoc_array[(15)] = G__58209);

(invoc_array[(16)] = G__58210);

(invoc_array[(17)] = G__58211);

(invoc_array[(18)] = G__58212);

(invoc_array[(19)] = G__58213);

while(true){
var ret__56695__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__56695__auto__)){
continue;
} else {
return ret__56695__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57963)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});

//# sourceMappingURL=sci.impl.fns.js.map
