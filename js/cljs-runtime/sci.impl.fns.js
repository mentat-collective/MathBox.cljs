goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.utils.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__71369 = (fixed_arity | (0));
switch (G__71369) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__71370){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__71370);

while(true){
var ret__70109__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70109__auto__)){
continue;
} else {
return ret__70109__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__71370 = null;
if (arguments.length > 0) {
var G__72236__i = 0, G__72236__a = new Array(arguments.length -  0);
while (G__72236__i < G__72236__a.length) {G__72236__a[G__72236__i] = arguments[G__72236__i + 0]; ++G__72236__i;}
  G__71370 = new cljs.core.IndexedSeq(G__72236__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__71370);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__72237){
var G__71370 = cljs.core.seq(arglist__72237);
return sci$impl$fns$fun_$_arity_0__delegate(G__71370);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__71373 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__71371,G__71372){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71371);

(invoc_array[vararg_idx] = G__71372);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__71371,var_args){
var G__71372 = null;
if (arguments.length > 1) {
var G__72238__i = 0, G__72238__a = new Array(arguments.length -  1);
while (G__72238__i < G__72238__a.length) {G__72238__a[G__72238__i] = arguments[G__72238__i + 1]; ++G__72238__i;}
  G__71372 = new cljs.core.IndexedSeq(G__72238__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__71371,G__71372);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__72239){
var G__71371 = cljs.core.first(arglist__72239);
var G__71372 = cljs.core.rest(arglist__72239);
return sci$impl$fns$fun_$_arity_1__delegate(G__71371,G__71372);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__71377 = cljs.core._nth(params,(0));
var G__71378 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__71374,G__71375,G__71376){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71374);

(invoc_array[(1)] = G__71375);

(invoc_array[vararg_idx] = G__71376);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__71374,G__71375,var_args){
var G__71376 = null;
if (arguments.length > 2) {
var G__72240__i = 0, G__72240__a = new Array(arguments.length -  2);
while (G__72240__i < G__72240__a.length) {G__72240__a[G__72240__i] = arguments[G__72240__i + 2]; ++G__72240__i;}
  G__71376 = new cljs.core.IndexedSeq(G__72240__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__71374,G__71375,G__71376);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__72241){
var G__71374 = cljs.core.first(arglist__72241);
arglist__72241 = cljs.core.next(arglist__72241);
var G__71375 = cljs.core.first(arglist__72241);
var G__71376 = cljs.core.rest(arglist__72241);
return sci$impl$fns$fun_$_arity_2__delegate(G__71374,G__71375,G__71376);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__71383 = cljs.core._nth(params,(0));
var G__71384 = cljs.core._nth(params,(1));
var G__71385 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__71379,G__71380,G__71381,G__71382){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71379);

(invoc_array[(1)] = G__71380);

(invoc_array[(2)] = G__71381);

(invoc_array[vararg_idx] = G__71382);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__71379,G__71380,G__71381,var_args){
var G__71382 = null;
if (arguments.length > 3) {
var G__72242__i = 0, G__72242__a = new Array(arguments.length -  3);
while (G__72242__i < G__72242__a.length) {G__72242__a[G__72242__i] = arguments[G__72242__i + 3]; ++G__72242__i;}
  G__71382 = new cljs.core.IndexedSeq(G__72242__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__71379,G__71380,G__71381,G__71382);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__72243){
var G__71379 = cljs.core.first(arglist__72243);
arglist__72243 = cljs.core.next(arglist__72243);
var G__71380 = cljs.core.first(arglist__72243);
arglist__72243 = cljs.core.next(arglist__72243);
var G__71381 = cljs.core.first(arglist__72243);
var G__71382 = cljs.core.rest(arglist__72243);
return sci$impl$fns$fun_$_arity_3__delegate(G__71379,G__71380,G__71381,G__71382);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__71391 = cljs.core._nth(params,(0));
var G__71392 = cljs.core._nth(params,(1));
var G__71393 = cljs.core._nth(params,(2));
var G__71394 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__71386,G__71387,G__71388,G__71389,G__71390){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71386);

(invoc_array[(1)] = G__71387);

(invoc_array[(2)] = G__71388);

(invoc_array[(3)] = G__71389);

(invoc_array[vararg_idx] = G__71390);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__71386,G__71387,G__71388,G__71389,var_args){
var G__71390 = null;
if (arguments.length > 4) {
var G__72244__i = 0, G__72244__a = new Array(arguments.length -  4);
while (G__72244__i < G__72244__a.length) {G__72244__a[G__72244__i] = arguments[G__72244__i + 4]; ++G__72244__i;}
  G__71390 = new cljs.core.IndexedSeq(G__72244__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__71386,G__71387,G__71388,G__71389,G__71390);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__72245){
var G__71386 = cljs.core.first(arglist__72245);
arglist__72245 = cljs.core.next(arglist__72245);
var G__71387 = cljs.core.first(arglist__72245);
arglist__72245 = cljs.core.next(arglist__72245);
var G__71388 = cljs.core.first(arglist__72245);
arglist__72245 = cljs.core.next(arglist__72245);
var G__71389 = cljs.core.first(arglist__72245);
var G__71390 = cljs.core.rest(arglist__72245);
return sci$impl$fns$fun_$_arity_4__delegate(G__71386,G__71387,G__71388,G__71389,G__71390);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__71401 = cljs.core._nth(params,(0));
var G__71402 = cljs.core._nth(params,(1));
var G__71403 = cljs.core._nth(params,(2));
var G__71404 = cljs.core._nth(params,(3));
var G__71405 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__71395,G__71396,G__71397,G__71398,G__71399,G__71400){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71395);

(invoc_array[(1)] = G__71396);

(invoc_array[(2)] = G__71397);

(invoc_array[(3)] = G__71398);

(invoc_array[(4)] = G__71399);

(invoc_array[vararg_idx] = G__71400);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__71395,G__71396,G__71397,G__71398,G__71399,var_args){
var G__71400 = null;
if (arguments.length > 5) {
var G__72246__i = 0, G__72246__a = new Array(arguments.length -  5);
while (G__72246__i < G__72246__a.length) {G__72246__a[G__72246__i] = arguments[G__72246__i + 5]; ++G__72246__i;}
  G__71400 = new cljs.core.IndexedSeq(G__72246__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__71395,G__71396,G__71397,G__71398,G__71399,G__71400);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__72247){
var G__71395 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71396 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71397 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71398 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71399 = cljs.core.first(arglist__72247);
var G__71400 = cljs.core.rest(arglist__72247);
return sci$impl$fns$fun_$_arity_5__delegate(G__71395,G__71396,G__71397,G__71398,G__71399,G__71400);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__71413 = cljs.core._nth(params,(0));
var G__71414 = cljs.core._nth(params,(1));
var G__71415 = cljs.core._nth(params,(2));
var G__71416 = cljs.core._nth(params,(3));
var G__71417 = cljs.core._nth(params,(4));
var G__71418 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,G__71412){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71406);

(invoc_array[(1)] = G__71407);

(invoc_array[(2)] = G__71408);

(invoc_array[(3)] = G__71409);

(invoc_array[(4)] = G__71410);

(invoc_array[(5)] = G__71411);

(invoc_array[vararg_idx] = G__71412);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,var_args){
var G__71412 = null;
if (arguments.length > 6) {
var G__72248__i = 0, G__72248__a = new Array(arguments.length -  6);
while (G__72248__i < G__72248__a.length) {G__72248__a[G__72248__i] = arguments[G__72248__i + 6]; ++G__72248__i;}
  G__71412 = new cljs.core.IndexedSeq(G__72248__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,G__71412);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__72249){
var G__71406 = cljs.core.first(arglist__72249);
arglist__72249 = cljs.core.next(arglist__72249);
var G__71407 = cljs.core.first(arglist__72249);
arglist__72249 = cljs.core.next(arglist__72249);
var G__71408 = cljs.core.first(arglist__72249);
arglist__72249 = cljs.core.next(arglist__72249);
var G__71409 = cljs.core.first(arglist__72249);
arglist__72249 = cljs.core.next(arglist__72249);
var G__71410 = cljs.core.first(arglist__72249);
arglist__72249 = cljs.core.next(arglist__72249);
var G__71411 = cljs.core.first(arglist__72249);
var G__71412 = cljs.core.rest(arglist__72249);
return sci$impl$fns$fun_$_arity_6__delegate(G__71406,G__71407,G__71408,G__71409,G__71410,G__71411,G__71412);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__71427 = cljs.core._nth(params,(0));
var G__71428 = cljs.core._nth(params,(1));
var G__71429 = cljs.core._nth(params,(2));
var G__71430 = cljs.core._nth(params,(3));
var G__71431 = cljs.core._nth(params,(4));
var G__71432 = cljs.core._nth(params,(5));
var G__71433 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__71419,G__71420,G__71421,G__71422,G__71423,G__71424,G__71425,G__71426){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71419);

(invoc_array[(1)] = G__71420);

(invoc_array[(2)] = G__71421);

(invoc_array[(3)] = G__71422);

(invoc_array[(4)] = G__71423);

(invoc_array[(5)] = G__71424);

(invoc_array[(6)] = G__71425);

(invoc_array[vararg_idx] = G__71426);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__71419,G__71420,G__71421,G__71422,G__71423,G__71424,G__71425,var_args){
var G__71426 = null;
if (arguments.length > 7) {
var G__72250__i = 0, G__72250__a = new Array(arguments.length -  7);
while (G__72250__i < G__72250__a.length) {G__72250__a[G__72250__i] = arguments[G__72250__i + 7]; ++G__72250__i;}
  G__71426 = new cljs.core.IndexedSeq(G__72250__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__71419,G__71420,G__71421,G__71422,G__71423,G__71424,G__71425,G__71426);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__72251){
var G__71419 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71420 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71421 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71422 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71423 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71424 = cljs.core.first(arglist__72251);
arglist__72251 = cljs.core.next(arglist__72251);
var G__71425 = cljs.core.first(arglist__72251);
var G__71426 = cljs.core.rest(arglist__72251);
return sci$impl$fns$fun_$_arity_7__delegate(G__71419,G__71420,G__71421,G__71422,G__71423,G__71424,G__71425,G__71426);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__71443 = cljs.core._nth(params,(0));
var G__71444 = cljs.core._nth(params,(1));
var G__71445 = cljs.core._nth(params,(2));
var G__71446 = cljs.core._nth(params,(3));
var G__71447 = cljs.core._nth(params,(4));
var G__71448 = cljs.core._nth(params,(5));
var G__71449 = cljs.core._nth(params,(6));
var G__71450 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__71434,G__71435,G__71436,G__71437,G__71438,G__71439,G__71440,G__71441,G__71442){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71434);

(invoc_array[(1)] = G__71435);

(invoc_array[(2)] = G__71436);

(invoc_array[(3)] = G__71437);

(invoc_array[(4)] = G__71438);

(invoc_array[(5)] = G__71439);

(invoc_array[(6)] = G__71440);

(invoc_array[(7)] = G__71441);

(invoc_array[vararg_idx] = G__71442);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__71434,G__71435,G__71436,G__71437,G__71438,G__71439,G__71440,G__71441,var_args){
var G__71442 = null;
if (arguments.length > 8) {
var G__72254__i = 0, G__72254__a = new Array(arguments.length -  8);
while (G__72254__i < G__72254__a.length) {G__72254__a[G__72254__i] = arguments[G__72254__i + 8]; ++G__72254__i;}
  G__71442 = new cljs.core.IndexedSeq(G__72254__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__71434,G__71435,G__71436,G__71437,G__71438,G__71439,G__71440,G__71441,G__71442);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__72255){
var G__71434 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71435 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71436 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71437 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71438 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71439 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71440 = cljs.core.first(arglist__72255);
arglist__72255 = cljs.core.next(arglist__72255);
var G__71441 = cljs.core.first(arglist__72255);
var G__71442 = cljs.core.rest(arglist__72255);
return sci$impl$fns$fun_$_arity_8__delegate(G__71434,G__71435,G__71436,G__71437,G__71438,G__71439,G__71440,G__71441,G__71442);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__71462 = cljs.core._nth(params,(0));
var G__71463 = cljs.core._nth(params,(1));
var G__71464 = cljs.core._nth(params,(2));
var G__71465 = cljs.core._nth(params,(3));
var G__71466 = cljs.core._nth(params,(4));
var G__71467 = cljs.core._nth(params,(5));
var G__71468 = cljs.core._nth(params,(6));
var G__71469 = cljs.core._nth(params,(7));
var G__71470 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__71452,G__71453,G__71454,G__71455,G__71456,G__71457,G__71458,G__71459,G__71460,G__71461){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71452);

(invoc_array[(1)] = G__71453);

(invoc_array[(2)] = G__71454);

(invoc_array[(3)] = G__71455);

(invoc_array[(4)] = G__71456);

(invoc_array[(5)] = G__71457);

(invoc_array[(6)] = G__71458);

(invoc_array[(7)] = G__71459);

(invoc_array[(8)] = G__71460);

(invoc_array[vararg_idx] = G__71461);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__71452,G__71453,G__71454,G__71455,G__71456,G__71457,G__71458,G__71459,G__71460,var_args){
var G__71461 = null;
if (arguments.length > 9) {
var G__72260__i = 0, G__72260__a = new Array(arguments.length -  9);
while (G__72260__i < G__72260__a.length) {G__72260__a[G__72260__i] = arguments[G__72260__i + 9]; ++G__72260__i;}
  G__71461 = new cljs.core.IndexedSeq(G__72260__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__71452,G__71453,G__71454,G__71455,G__71456,G__71457,G__71458,G__71459,G__71460,G__71461);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__72262){
var G__71452 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71453 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71454 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71455 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71456 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71457 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71458 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71459 = cljs.core.first(arglist__72262);
arglist__72262 = cljs.core.next(arglist__72262);
var G__71460 = cljs.core.first(arglist__72262);
var G__71461 = cljs.core.rest(arglist__72262);
return sci$impl$fns$fun_$_arity_9__delegate(G__71452,G__71453,G__71454,G__71455,G__71456,G__71457,G__71458,G__71459,G__71460,G__71461);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__71482 = cljs.core._nth(params,(0));
var G__71483 = cljs.core._nth(params,(1));
var G__71484 = cljs.core._nth(params,(2));
var G__71485 = cljs.core._nth(params,(3));
var G__71486 = cljs.core._nth(params,(4));
var G__71487 = cljs.core._nth(params,(5));
var G__71488 = cljs.core._nth(params,(6));
var G__71489 = cljs.core._nth(params,(7));
var G__71490 = cljs.core._nth(params,(8));
var G__71491 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480,G__71481){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71471);

(invoc_array[(1)] = G__71472);

(invoc_array[(2)] = G__71473);

(invoc_array[(3)] = G__71474);

(invoc_array[(4)] = G__71475);

(invoc_array[(5)] = G__71476);

(invoc_array[(6)] = G__71477);

(invoc_array[(7)] = G__71478);

(invoc_array[(8)] = G__71479);

(invoc_array[(9)] = G__71480);

(invoc_array[vararg_idx] = G__71481);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480,var_args){
var G__71481 = null;
if (arguments.length > 10) {
var G__72264__i = 0, G__72264__a = new Array(arguments.length -  10);
while (G__72264__i < G__72264__a.length) {G__72264__a[G__72264__i] = arguments[G__72264__i + 10]; ++G__72264__i;}
  G__71481 = new cljs.core.IndexedSeq(G__72264__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480,G__71481);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__72265){
var G__71471 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71472 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71473 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71474 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71475 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71476 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71477 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71478 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71479 = cljs.core.first(arglist__72265);
arglist__72265 = cljs.core.next(arglist__72265);
var G__71480 = cljs.core.first(arglist__72265);
var G__71481 = cljs.core.rest(arglist__72265);
return sci$impl$fns$fun_$_arity_10__delegate(G__71471,G__71472,G__71473,G__71474,G__71475,G__71476,G__71477,G__71478,G__71479,G__71480,G__71481);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__71504 = cljs.core._nth(params,(0));
var G__71505 = cljs.core._nth(params,(1));
var G__71506 = cljs.core._nth(params,(2));
var G__71507 = cljs.core._nth(params,(3));
var G__71508 = cljs.core._nth(params,(4));
var G__71509 = cljs.core._nth(params,(5));
var G__71510 = cljs.core._nth(params,(6));
var G__71511 = cljs.core._nth(params,(7));
var G__71512 = cljs.core._nth(params,(8));
var G__71513 = cljs.core._nth(params,(9));
var G__71514 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__71492,G__71493,G__71494,G__71495,G__71496,G__71497,G__71498,G__71499,G__71500,G__71501,G__71502,G__71503){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71492);

(invoc_array[(1)] = G__71493);

(invoc_array[(2)] = G__71494);

(invoc_array[(3)] = G__71495);

(invoc_array[(4)] = G__71496);

(invoc_array[(5)] = G__71497);

(invoc_array[(6)] = G__71498);

(invoc_array[(7)] = G__71499);

(invoc_array[(8)] = G__71500);

(invoc_array[(9)] = G__71501);

(invoc_array[(10)] = G__71502);

(invoc_array[vararg_idx] = G__71503);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__71492,G__71493,G__71494,G__71495,G__71496,G__71497,G__71498,G__71499,G__71500,G__71501,G__71502,var_args){
var G__71503 = null;
if (arguments.length > 11) {
var G__72266__i = 0, G__72266__a = new Array(arguments.length -  11);
while (G__72266__i < G__72266__a.length) {G__72266__a[G__72266__i] = arguments[G__72266__i + 11]; ++G__72266__i;}
  G__71503 = new cljs.core.IndexedSeq(G__72266__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__71492,G__71493,G__71494,G__71495,G__71496,G__71497,G__71498,G__71499,G__71500,G__71501,G__71502,G__71503);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__72267){
var G__71492 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71493 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71494 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71495 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71496 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71497 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71498 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71499 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71500 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71501 = cljs.core.first(arglist__72267);
arglist__72267 = cljs.core.next(arglist__72267);
var G__71502 = cljs.core.first(arglist__72267);
var G__71503 = cljs.core.rest(arglist__72267);
return sci$impl$fns$fun_$_arity_11__delegate(G__71492,G__71493,G__71494,G__71495,G__71496,G__71497,G__71498,G__71499,G__71500,G__71501,G__71502,G__71503);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__71528 = cljs.core._nth(params,(0));
var G__71529 = cljs.core._nth(params,(1));
var G__71530 = cljs.core._nth(params,(2));
var G__71531 = cljs.core._nth(params,(3));
var G__71532 = cljs.core._nth(params,(4));
var G__71533 = cljs.core._nth(params,(5));
var G__71534 = cljs.core._nth(params,(6));
var G__71535 = cljs.core._nth(params,(7));
var G__71536 = cljs.core._nth(params,(8));
var G__71537 = cljs.core._nth(params,(9));
var G__71538 = cljs.core._nth(params,(10));
var G__71539 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__71515,G__71516,G__71517,G__71518,G__71519,G__71520,G__71521,G__71522,G__71523,G__71524,G__71525,G__71526,G__71527){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71515);

(invoc_array[(1)] = G__71516);

(invoc_array[(2)] = G__71517);

(invoc_array[(3)] = G__71518);

(invoc_array[(4)] = G__71519);

(invoc_array[(5)] = G__71520);

(invoc_array[(6)] = G__71521);

(invoc_array[(7)] = G__71522);

(invoc_array[(8)] = G__71523);

(invoc_array[(9)] = G__71524);

(invoc_array[(10)] = G__71525);

(invoc_array[(11)] = G__71526);

(invoc_array[vararg_idx] = G__71527);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__71515,G__71516,G__71517,G__71518,G__71519,G__71520,G__71521,G__71522,G__71523,G__71524,G__71525,G__71526,var_args){
var G__71527 = null;
if (arguments.length > 12) {
var G__72268__i = 0, G__72268__a = new Array(arguments.length -  12);
while (G__72268__i < G__72268__a.length) {G__72268__a[G__72268__i] = arguments[G__72268__i + 12]; ++G__72268__i;}
  G__71527 = new cljs.core.IndexedSeq(G__72268__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__71515,G__71516,G__71517,G__71518,G__71519,G__71520,G__71521,G__71522,G__71523,G__71524,G__71525,G__71526,G__71527);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__72269){
var G__71515 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71516 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71517 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71518 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71519 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71520 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71521 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71522 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71523 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71524 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71525 = cljs.core.first(arglist__72269);
arglist__72269 = cljs.core.next(arglist__72269);
var G__71526 = cljs.core.first(arglist__72269);
var G__71527 = cljs.core.rest(arglist__72269);
return sci$impl$fns$fun_$_arity_12__delegate(G__71515,G__71516,G__71517,G__71518,G__71519,G__71520,G__71521,G__71522,G__71523,G__71524,G__71525,G__71526,G__71527);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__71554 = cljs.core._nth(params,(0));
var G__71555 = cljs.core._nth(params,(1));
var G__71556 = cljs.core._nth(params,(2));
var G__71557 = cljs.core._nth(params,(3));
var G__71558 = cljs.core._nth(params,(4));
var G__71559 = cljs.core._nth(params,(5));
var G__71560 = cljs.core._nth(params,(6));
var G__71561 = cljs.core._nth(params,(7));
var G__71562 = cljs.core._nth(params,(8));
var G__71563 = cljs.core._nth(params,(9));
var G__71564 = cljs.core._nth(params,(10));
var G__71565 = cljs.core._nth(params,(11));
var G__71566 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71540);

(invoc_array[(1)] = G__71541);

(invoc_array[(2)] = G__71542);

(invoc_array[(3)] = G__71543);

(invoc_array[(4)] = G__71544);

(invoc_array[(5)] = G__71545);

(invoc_array[(6)] = G__71546);

(invoc_array[(7)] = G__71547);

(invoc_array[(8)] = G__71548);

(invoc_array[(9)] = G__71549);

(invoc_array[(10)] = G__71550);

(invoc_array[(11)] = G__71551);

(invoc_array[(12)] = G__71552);

(invoc_array[vararg_idx] = G__71553);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,var_args){
var G__71553 = null;
if (arguments.length > 13) {
var G__72275__i = 0, G__72275__a = new Array(arguments.length -  13);
while (G__72275__i < G__72275__a.length) {G__72275__a[G__72275__i] = arguments[G__72275__i + 13]; ++G__72275__i;}
  G__71553 = new cljs.core.IndexedSeq(G__72275__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__72277){
var G__71540 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71541 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71542 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71543 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71544 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71545 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71546 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71547 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71548 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71549 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71550 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71551 = cljs.core.first(arglist__72277);
arglist__72277 = cljs.core.next(arglist__72277);
var G__71552 = cljs.core.first(arglist__72277);
var G__71553 = cljs.core.rest(arglist__72277);
return sci$impl$fns$fun_$_arity_13__delegate(G__71540,G__71541,G__71542,G__71543,G__71544,G__71545,G__71546,G__71547,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__71582 = cljs.core._nth(params,(0));
var G__71583 = cljs.core._nth(params,(1));
var G__71584 = cljs.core._nth(params,(2));
var G__71585 = cljs.core._nth(params,(3));
var G__71586 = cljs.core._nth(params,(4));
var G__71587 = cljs.core._nth(params,(5));
var G__71588 = cljs.core._nth(params,(6));
var G__71589 = cljs.core._nth(params,(7));
var G__71590 = cljs.core._nth(params,(8));
var G__71591 = cljs.core._nth(params,(9));
var G__71592 = cljs.core._nth(params,(10));
var G__71593 = cljs.core._nth(params,(11));
var G__71594 = cljs.core._nth(params,(12));
var G__71595 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__71567,G__71568,G__71569,G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,G__71581){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71567);

(invoc_array[(1)] = G__71568);

(invoc_array[(2)] = G__71569);

(invoc_array[(3)] = G__71570);

(invoc_array[(4)] = G__71571);

(invoc_array[(5)] = G__71572);

(invoc_array[(6)] = G__71573);

(invoc_array[(7)] = G__71574);

(invoc_array[(8)] = G__71575);

(invoc_array[(9)] = G__71576);

(invoc_array[(10)] = G__71577);

(invoc_array[(11)] = G__71578);

(invoc_array[(12)] = G__71579);

(invoc_array[(13)] = G__71580);

(invoc_array[vararg_idx] = G__71581);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__71567,G__71568,G__71569,G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,var_args){
var G__71581 = null;
if (arguments.length > 14) {
var G__72280__i = 0, G__72280__a = new Array(arguments.length -  14);
while (G__72280__i < G__72280__a.length) {G__72280__a[G__72280__i] = arguments[G__72280__i + 14]; ++G__72280__i;}
  G__71581 = new cljs.core.IndexedSeq(G__72280__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__71567,G__71568,G__71569,G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,G__71581);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__72281){
var G__71567 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71568 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71569 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71570 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71571 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71572 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71573 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71574 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71575 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71576 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71577 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71578 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71579 = cljs.core.first(arglist__72281);
arglist__72281 = cljs.core.next(arglist__72281);
var G__71580 = cljs.core.first(arglist__72281);
var G__71581 = cljs.core.rest(arglist__72281);
return sci$impl$fns$fun_$_arity_14__delegate(G__71567,G__71568,G__71569,G__71570,G__71571,G__71572,G__71573,G__71574,G__71575,G__71576,G__71577,G__71578,G__71579,G__71580,G__71581);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__71612 = cljs.core._nth(params,(0));
var G__71613 = cljs.core._nth(params,(1));
var G__71614 = cljs.core._nth(params,(2));
var G__71615 = cljs.core._nth(params,(3));
var G__71616 = cljs.core._nth(params,(4));
var G__71617 = cljs.core._nth(params,(5));
var G__71618 = cljs.core._nth(params,(6));
var G__71619 = cljs.core._nth(params,(7));
var G__71620 = cljs.core._nth(params,(8));
var G__71621 = cljs.core._nth(params,(9));
var G__71622 = cljs.core._nth(params,(10));
var G__71623 = cljs.core._nth(params,(11));
var G__71624 = cljs.core._nth(params,(12));
var G__71625 = cljs.core._nth(params,(13));
var G__71626 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__71596,G__71597,G__71598,G__71599,G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,G__71611){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71596);

(invoc_array[(1)] = G__71597);

(invoc_array[(2)] = G__71598);

(invoc_array[(3)] = G__71599);

(invoc_array[(4)] = G__71600);

(invoc_array[(5)] = G__71601);

(invoc_array[(6)] = G__71602);

(invoc_array[(7)] = G__71603);

(invoc_array[(8)] = G__71604);

(invoc_array[(9)] = G__71605);

(invoc_array[(10)] = G__71606);

(invoc_array[(11)] = G__71607);

(invoc_array[(12)] = G__71608);

(invoc_array[(13)] = G__71609);

(invoc_array[(14)] = G__71610);

(invoc_array[vararg_idx] = G__71611);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__71596,G__71597,G__71598,G__71599,G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,var_args){
var G__71611 = null;
if (arguments.length > 15) {
var G__72286__i = 0, G__72286__a = new Array(arguments.length -  15);
while (G__72286__i < G__72286__a.length) {G__72286__a[G__72286__i] = arguments[G__72286__i + 15]; ++G__72286__i;}
  G__71611 = new cljs.core.IndexedSeq(G__72286__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__71596,G__71597,G__71598,G__71599,G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,G__71611);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__72287){
var G__71596 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71597 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71598 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71599 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71600 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71601 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71602 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71603 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71604 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71605 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71606 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71607 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71608 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71609 = cljs.core.first(arglist__72287);
arglist__72287 = cljs.core.next(arglist__72287);
var G__71610 = cljs.core.first(arglist__72287);
var G__71611 = cljs.core.rest(arglist__72287);
return sci$impl$fns$fun_$_arity_15__delegate(G__71596,G__71597,G__71598,G__71599,G__71600,G__71601,G__71602,G__71603,G__71604,G__71605,G__71606,G__71607,G__71608,G__71609,G__71610,G__71611);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__71644 = cljs.core._nth(params,(0));
var G__71645 = cljs.core._nth(params,(1));
var G__71646 = cljs.core._nth(params,(2));
var G__71647 = cljs.core._nth(params,(3));
var G__71648 = cljs.core._nth(params,(4));
var G__71649 = cljs.core._nth(params,(5));
var G__71650 = cljs.core._nth(params,(6));
var G__71651 = cljs.core._nth(params,(7));
var G__71652 = cljs.core._nth(params,(8));
var G__71653 = cljs.core._nth(params,(9));
var G__71654 = cljs.core._nth(params,(10));
var G__71655 = cljs.core._nth(params,(11));
var G__71656 = cljs.core._nth(params,(12));
var G__71657 = cljs.core._nth(params,(13));
var G__71658 = cljs.core._nth(params,(14));
var G__71659 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__71627,G__71628,G__71629,G__71630,G__71631,G__71632,G__71633,G__71634,G__71635,G__71636,G__71637,G__71638,G__71639,G__71640,G__71641,G__71642,G__71643){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71627);

(invoc_array[(1)] = G__71628);

(invoc_array[(2)] = G__71629);

(invoc_array[(3)] = G__71630);

(invoc_array[(4)] = G__71631);

(invoc_array[(5)] = G__71632);

(invoc_array[(6)] = G__71633);

(invoc_array[(7)] = G__71634);

(invoc_array[(8)] = G__71635);

(invoc_array[(9)] = G__71636);

(invoc_array[(10)] = G__71637);

(invoc_array[(11)] = G__71638);

(invoc_array[(12)] = G__71639);

(invoc_array[(13)] = G__71640);

(invoc_array[(14)] = G__71641);

(invoc_array[(15)] = G__71642);

(invoc_array[vararg_idx] = G__71643);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__71627,G__71628,G__71629,G__71630,G__71631,G__71632,G__71633,G__71634,G__71635,G__71636,G__71637,G__71638,G__71639,G__71640,G__71641,G__71642,var_args){
var G__71643 = null;
if (arguments.length > 16) {
var G__72288__i = 0, G__72288__a = new Array(arguments.length -  16);
while (G__72288__i < G__72288__a.length) {G__72288__a[G__72288__i] = arguments[G__72288__i + 16]; ++G__72288__i;}
  G__71643 = new cljs.core.IndexedSeq(G__72288__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__71627,G__71628,G__71629,G__71630,G__71631,G__71632,G__71633,G__71634,G__71635,G__71636,G__71637,G__71638,G__71639,G__71640,G__71641,G__71642,G__71643);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__72289){
var G__71627 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71628 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71629 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71630 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71631 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71632 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71633 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71634 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71635 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71636 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71637 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71638 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71639 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71640 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71641 = cljs.core.first(arglist__72289);
arglist__72289 = cljs.core.next(arglist__72289);
var G__71642 = cljs.core.first(arglist__72289);
var G__71643 = cljs.core.rest(arglist__72289);
return sci$impl$fns$fun_$_arity_16__delegate(G__71627,G__71628,G__71629,G__71630,G__71631,G__71632,G__71633,G__71634,G__71635,G__71636,G__71637,G__71638,G__71639,G__71640,G__71641,G__71642,G__71643);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__71678 = cljs.core._nth(params,(0));
var G__71679 = cljs.core._nth(params,(1));
var G__71680 = cljs.core._nth(params,(2));
var G__71681 = cljs.core._nth(params,(3));
var G__71682 = cljs.core._nth(params,(4));
var G__71683 = cljs.core._nth(params,(5));
var G__71684 = cljs.core._nth(params,(6));
var G__71685 = cljs.core._nth(params,(7));
var G__71686 = cljs.core._nth(params,(8));
var G__71687 = cljs.core._nth(params,(9));
var G__71688 = cljs.core._nth(params,(10));
var G__71689 = cljs.core._nth(params,(11));
var G__71690 = cljs.core._nth(params,(12));
var G__71691 = cljs.core._nth(params,(13));
var G__71692 = cljs.core._nth(params,(14));
var G__71693 = cljs.core._nth(params,(15));
var G__71694 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666,G__71667,G__71668,G__71669,G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676,G__71677){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71660);

(invoc_array[(1)] = G__71661);

(invoc_array[(2)] = G__71662);

(invoc_array[(3)] = G__71663);

(invoc_array[(4)] = G__71664);

(invoc_array[(5)] = G__71665);

(invoc_array[(6)] = G__71666);

(invoc_array[(7)] = G__71667);

(invoc_array[(8)] = G__71668);

(invoc_array[(9)] = G__71669);

(invoc_array[(10)] = G__71670);

(invoc_array[(11)] = G__71671);

(invoc_array[(12)] = G__71672);

(invoc_array[(13)] = G__71673);

(invoc_array[(14)] = G__71674);

(invoc_array[(15)] = G__71675);

(invoc_array[(16)] = G__71676);

(invoc_array[vararg_idx] = G__71677);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666,G__71667,G__71668,G__71669,G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676,var_args){
var G__71677 = null;
if (arguments.length > 17) {
var G__72295__i = 0, G__72295__a = new Array(arguments.length -  17);
while (G__72295__i < G__72295__a.length) {G__72295__a[G__72295__i] = arguments[G__72295__i + 17]; ++G__72295__i;}
  G__71677 = new cljs.core.IndexedSeq(G__72295__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666,G__71667,G__71668,G__71669,G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676,G__71677);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__72296){
var G__71660 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71661 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71662 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71663 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71664 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71665 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71666 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71667 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71668 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71669 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71670 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71671 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71672 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71673 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71674 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71675 = cljs.core.first(arglist__72296);
arglist__72296 = cljs.core.next(arglist__72296);
var G__71676 = cljs.core.first(arglist__72296);
var G__71677 = cljs.core.rest(arglist__72296);
return sci$impl$fns$fun_$_arity_17__delegate(G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666,G__71667,G__71668,G__71669,G__71670,G__71671,G__71672,G__71673,G__71674,G__71675,G__71676,G__71677);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__71714 = cljs.core._nth(params,(0));
var G__71715 = cljs.core._nth(params,(1));
var G__71716 = cljs.core._nth(params,(2));
var G__71717 = cljs.core._nth(params,(3));
var G__71718 = cljs.core._nth(params,(4));
var G__71719 = cljs.core._nth(params,(5));
var G__71720 = cljs.core._nth(params,(6));
var G__71721 = cljs.core._nth(params,(7));
var G__71722 = cljs.core._nth(params,(8));
var G__71723 = cljs.core._nth(params,(9));
var G__71724 = cljs.core._nth(params,(10));
var G__71725 = cljs.core._nth(params,(11));
var G__71726 = cljs.core._nth(params,(12));
var G__71727 = cljs.core._nth(params,(13));
var G__71728 = cljs.core._nth(params,(14));
var G__71729 = cljs.core._nth(params,(15));
var G__71730 = cljs.core._nth(params,(16));
var G__71731 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702,G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712,G__71713){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71695);

(invoc_array[(1)] = G__71696);

(invoc_array[(2)] = G__71697);

(invoc_array[(3)] = G__71698);

(invoc_array[(4)] = G__71699);

(invoc_array[(5)] = G__71700);

(invoc_array[(6)] = G__71701);

(invoc_array[(7)] = G__71702);

(invoc_array[(8)] = G__71703);

(invoc_array[(9)] = G__71704);

(invoc_array[(10)] = G__71705);

(invoc_array[(11)] = G__71706);

(invoc_array[(12)] = G__71707);

(invoc_array[(13)] = G__71708);

(invoc_array[(14)] = G__71709);

(invoc_array[(15)] = G__71710);

(invoc_array[(16)] = G__71711);

(invoc_array[(17)] = G__71712);

(invoc_array[vararg_idx] = G__71713);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702,G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712,var_args){
var G__71713 = null;
if (arguments.length > 18) {
var G__72300__i = 0, G__72300__a = new Array(arguments.length -  18);
while (G__72300__i < G__72300__a.length) {G__72300__a[G__72300__i] = arguments[G__72300__i + 18]; ++G__72300__i;}
  G__71713 = new cljs.core.IndexedSeq(G__72300__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702,G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712,G__71713);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__72301){
var G__71695 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71696 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71697 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71698 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71699 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71700 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71701 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71702 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71703 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71704 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71705 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71706 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71707 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71708 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71709 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71710 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71711 = cljs.core.first(arglist__72301);
arglist__72301 = cljs.core.next(arglist__72301);
var G__71712 = cljs.core.first(arglist__72301);
var G__71713 = cljs.core.rest(arglist__72301);
return sci$impl$fns$fun_$_arity_18__delegate(G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702,G__71703,G__71704,G__71705,G__71706,G__71707,G__71708,G__71709,G__71710,G__71711,G__71712,G__71713);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__71752 = cljs.core._nth(params,(0));
var G__71753 = cljs.core._nth(params,(1));
var G__71754 = cljs.core._nth(params,(2));
var G__71755 = cljs.core._nth(params,(3));
var G__71756 = cljs.core._nth(params,(4));
var G__71757 = cljs.core._nth(params,(5));
var G__71758 = cljs.core._nth(params,(6));
var G__71759 = cljs.core._nth(params,(7));
var G__71760 = cljs.core._nth(params,(8));
var G__71761 = cljs.core._nth(params,(9));
var G__71762 = cljs.core._nth(params,(10));
var G__71763 = cljs.core._nth(params,(11));
var G__71764 = cljs.core._nth(params,(12));
var G__71765 = cljs.core._nth(params,(13));
var G__71766 = cljs.core._nth(params,(14));
var G__71767 = cljs.core._nth(params,(15));
var G__71768 = cljs.core._nth(params,(16));
var G__71769 = cljs.core._nth(params,(17));
var G__71770 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746,G__71747,G__71748,G__71749,G__71750,G__71751){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71732);

(invoc_array[(1)] = G__71733);

(invoc_array[(2)] = G__71734);

(invoc_array[(3)] = G__71735);

(invoc_array[(4)] = G__71736);

(invoc_array[(5)] = G__71737);

(invoc_array[(6)] = G__71738);

(invoc_array[(7)] = G__71739);

(invoc_array[(8)] = G__71740);

(invoc_array[(9)] = G__71741);

(invoc_array[(10)] = G__71742);

(invoc_array[(11)] = G__71743);

(invoc_array[(12)] = G__71744);

(invoc_array[(13)] = G__71745);

(invoc_array[(14)] = G__71746);

(invoc_array[(15)] = G__71747);

(invoc_array[(16)] = G__71748);

(invoc_array[(17)] = G__71749);

(invoc_array[(18)] = G__71750);

(invoc_array[vararg_idx] = G__71751);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746,G__71747,G__71748,G__71749,G__71750,var_args){
var G__71751 = null;
if (arguments.length > 19) {
var G__72310__i = 0, G__72310__a = new Array(arguments.length -  19);
while (G__72310__i < G__72310__a.length) {G__72310__a[G__72310__i] = arguments[G__72310__i + 19]; ++G__72310__i;}
  G__71751 = new cljs.core.IndexedSeq(G__72310__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746,G__71747,G__71748,G__71749,G__71750,G__71751);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__72313){
var G__71732 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71733 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71734 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71735 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71736 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71737 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71738 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71739 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71740 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71741 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71742 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71743 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71744 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71745 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71746 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71747 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71748 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71749 = cljs.core.first(arglist__72313);
arglist__72313 = cljs.core.next(arglist__72313);
var G__71750 = cljs.core.first(arglist__72313);
var G__71751 = cljs.core.rest(arglist__72313);
return sci$impl$fns$fun_$_arity_19__delegate(G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739,G__71740,G__71741,G__71742,G__71743,G__71744,G__71745,G__71746,G__71747,G__71748,G__71749,G__71750,G__71751);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__71792 = cljs.core._nth(params,(0));
var G__71793 = cljs.core._nth(params,(1));
var G__71794 = cljs.core._nth(params,(2));
var G__71795 = cljs.core._nth(params,(3));
var G__71796 = cljs.core._nth(params,(4));
var G__71797 = cljs.core._nth(params,(5));
var G__71798 = cljs.core._nth(params,(6));
var G__71799 = cljs.core._nth(params,(7));
var G__71800 = cljs.core._nth(params,(8));
var G__71801 = cljs.core._nth(params,(9));
var G__71802 = cljs.core._nth(params,(10));
var G__71803 = cljs.core._nth(params,(11));
var G__71804 = cljs.core._nth(params,(12));
var G__71805 = cljs.core._nth(params,(13));
var G__71806 = cljs.core._nth(params,(14));
var G__71807 = cljs.core._nth(params,(15));
var G__71808 = cljs.core._nth(params,(16));
var G__71809 = cljs.core._nth(params,(17));
var G__71810 = cljs.core._nth(params,(18));
var G__71811 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__71771,G__71772,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789,G__71790,G__71791){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71771);

(invoc_array[(1)] = G__71772);

(invoc_array[(2)] = G__71773);

(invoc_array[(3)] = G__71774);

(invoc_array[(4)] = G__71775);

(invoc_array[(5)] = G__71776);

(invoc_array[(6)] = G__71777);

(invoc_array[(7)] = G__71778);

(invoc_array[(8)] = G__71779);

(invoc_array[(9)] = G__71780);

(invoc_array[(10)] = G__71781);

(invoc_array[(11)] = G__71782);

(invoc_array[(12)] = G__71783);

(invoc_array[(13)] = G__71784);

(invoc_array[(14)] = G__71785);

(invoc_array[(15)] = G__71786);

(invoc_array[(16)] = G__71787);

(invoc_array[(17)] = G__71788);

(invoc_array[(18)] = G__71789);

(invoc_array[(19)] = G__71790);

(invoc_array[vararg_idx] = G__71791);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__71771,G__71772,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789,G__71790,var_args){
var G__71791 = null;
if (arguments.length > 20) {
var G__72322__i = 0, G__72322__a = new Array(arguments.length -  20);
while (G__72322__i < G__72322__a.length) {G__72322__a[G__72322__i] = arguments[G__72322__i + 20]; ++G__72322__i;}
  G__71791 = new cljs.core.IndexedSeq(G__72322__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__71771,G__71772,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789,G__71790,G__71791);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__72323){
var G__71771 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71772 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71773 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71774 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71775 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71776 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71777 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71778 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71779 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71780 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71781 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71782 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71783 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71784 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71785 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71786 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71787 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71788 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71789 = cljs.core.first(arglist__72323);
arglist__72323 = cljs.core.next(arglist__72323);
var G__71790 = cljs.core.first(arglist__72323);
var G__71791 = cljs.core.rest(arglist__72323);
return sci$impl$fns$fun_$_arity_20__delegate(G__71771,G__71772,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789,G__71790,G__71791);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71369)].join('')));

}
})():(function (){var G__71812 = (fixed_arity | (0));
switch (G__71812) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__70109__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70109__auto__)){
continue;
} else {
return ret__70109__auto__;
}
break;
}
});

break;
case (1):
var G__71814 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__71813){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71813);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (2):
var G__71817 = cljs.core._nth(params,(0));
var G__71818 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__71815,G__71816){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71815);

(invoc_array[(1)] = G__71816);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (3):
var G__71822 = cljs.core._nth(params,(0));
var G__71823 = cljs.core._nth(params,(1));
var G__71824 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__71819,G__71820,G__71821){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71819);

(invoc_array[(1)] = G__71820);

(invoc_array[(2)] = G__71821);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (4):
var G__71829 = cljs.core._nth(params,(0));
var G__71830 = cljs.core._nth(params,(1));
var G__71831 = cljs.core._nth(params,(2));
var G__71832 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__71825,G__71826,G__71827,G__71828){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71825);

(invoc_array[(1)] = G__71826);

(invoc_array[(2)] = G__71827);

(invoc_array[(3)] = G__71828);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (5):
var G__71838 = cljs.core._nth(params,(0));
var G__71839 = cljs.core._nth(params,(1));
var G__71840 = cljs.core._nth(params,(2));
var G__71841 = cljs.core._nth(params,(3));
var G__71842 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__71833,G__71834,G__71835,G__71836,G__71837){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71833);

(invoc_array[(1)] = G__71834);

(invoc_array[(2)] = G__71835);

(invoc_array[(3)] = G__71836);

(invoc_array[(4)] = G__71837);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (6):
var G__71849 = cljs.core._nth(params,(0));
var G__71850 = cljs.core._nth(params,(1));
var G__71851 = cljs.core._nth(params,(2));
var G__71852 = cljs.core._nth(params,(3));
var G__71853 = cljs.core._nth(params,(4));
var G__71854 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__71843,G__71844,G__71845,G__71846,G__71847,G__71848){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71843);

(invoc_array[(1)] = G__71844);

(invoc_array[(2)] = G__71845);

(invoc_array[(3)] = G__71846);

(invoc_array[(4)] = G__71847);

(invoc_array[(5)] = G__71848);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (7):
var G__71862 = cljs.core._nth(params,(0));
var G__71863 = cljs.core._nth(params,(1));
var G__71864 = cljs.core._nth(params,(2));
var G__71865 = cljs.core._nth(params,(3));
var G__71866 = cljs.core._nth(params,(4));
var G__71867 = cljs.core._nth(params,(5));
var G__71868 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__71855,G__71856,G__71857,G__71858,G__71859,G__71860,G__71861){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71855);

(invoc_array[(1)] = G__71856);

(invoc_array[(2)] = G__71857);

(invoc_array[(3)] = G__71858);

(invoc_array[(4)] = G__71859);

(invoc_array[(5)] = G__71860);

(invoc_array[(6)] = G__71861);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (8):
var G__71877 = cljs.core._nth(params,(0));
var G__71878 = cljs.core._nth(params,(1));
var G__71879 = cljs.core._nth(params,(2));
var G__71880 = cljs.core._nth(params,(3));
var G__71881 = cljs.core._nth(params,(4));
var G__71882 = cljs.core._nth(params,(5));
var G__71883 = cljs.core._nth(params,(6));
var G__71884 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__71869,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71869);

(invoc_array[(1)] = G__71870);

(invoc_array[(2)] = G__71871);

(invoc_array[(3)] = G__71872);

(invoc_array[(4)] = G__71873);

(invoc_array[(5)] = G__71874);

(invoc_array[(6)] = G__71875);

(invoc_array[(7)] = G__71876);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (9):
var G__71894 = cljs.core._nth(params,(0));
var G__71895 = cljs.core._nth(params,(1));
var G__71896 = cljs.core._nth(params,(2));
var G__71897 = cljs.core._nth(params,(3));
var G__71898 = cljs.core._nth(params,(4));
var G__71899 = cljs.core._nth(params,(5));
var G__71900 = cljs.core._nth(params,(6));
var G__71901 = cljs.core._nth(params,(7));
var G__71902 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__71885,G__71886,G__71887,G__71888,G__71889,G__71890,G__71891,G__71892,G__71893){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71885);

(invoc_array[(1)] = G__71886);

(invoc_array[(2)] = G__71887);

(invoc_array[(3)] = G__71888);

(invoc_array[(4)] = G__71889);

(invoc_array[(5)] = G__71890);

(invoc_array[(6)] = G__71891);

(invoc_array[(7)] = G__71892);

(invoc_array[(8)] = G__71893);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (10):
var G__71913 = cljs.core._nth(params,(0));
var G__71914 = cljs.core._nth(params,(1));
var G__71915 = cljs.core._nth(params,(2));
var G__71916 = cljs.core._nth(params,(3));
var G__71917 = cljs.core._nth(params,(4));
var G__71918 = cljs.core._nth(params,(5));
var G__71919 = cljs.core._nth(params,(6));
var G__71920 = cljs.core._nth(params,(7));
var G__71921 = cljs.core._nth(params,(8));
var G__71922 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__71903,G__71904,G__71905,G__71906,G__71907,G__71908,G__71909,G__71910,G__71911,G__71912){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71903);

(invoc_array[(1)] = G__71904);

(invoc_array[(2)] = G__71905);

(invoc_array[(3)] = G__71906);

(invoc_array[(4)] = G__71907);

(invoc_array[(5)] = G__71908);

(invoc_array[(6)] = G__71909);

(invoc_array[(7)] = G__71910);

(invoc_array[(8)] = G__71911);

(invoc_array[(9)] = G__71912);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (11):
var G__71934 = cljs.core._nth(params,(0));
var G__71935 = cljs.core._nth(params,(1));
var G__71936 = cljs.core._nth(params,(2));
var G__71937 = cljs.core._nth(params,(3));
var G__71938 = cljs.core._nth(params,(4));
var G__71939 = cljs.core._nth(params,(5));
var G__71940 = cljs.core._nth(params,(6));
var G__71941 = cljs.core._nth(params,(7));
var G__71942 = cljs.core._nth(params,(8));
var G__71943 = cljs.core._nth(params,(9));
var G__71944 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__71923,G__71924,G__71925,G__71926,G__71927,G__71928,G__71929,G__71930,G__71931,G__71932,G__71933){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71923);

(invoc_array[(1)] = G__71924);

(invoc_array[(2)] = G__71925);

(invoc_array[(3)] = G__71926);

(invoc_array[(4)] = G__71927);

(invoc_array[(5)] = G__71928);

(invoc_array[(6)] = G__71929);

(invoc_array[(7)] = G__71930);

(invoc_array[(8)] = G__71931);

(invoc_array[(9)] = G__71932);

(invoc_array[(10)] = G__71933);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (12):
var G__71958 = cljs.core._nth(params,(0));
var G__71959 = cljs.core._nth(params,(1));
var G__71960 = cljs.core._nth(params,(2));
var G__71961 = cljs.core._nth(params,(3));
var G__71962 = cljs.core._nth(params,(4));
var G__71963 = cljs.core._nth(params,(5));
var G__71964 = cljs.core._nth(params,(6));
var G__71965 = cljs.core._nth(params,(7));
var G__71966 = cljs.core._nth(params,(8));
var G__71967 = cljs.core._nth(params,(9));
var G__71968 = cljs.core._nth(params,(10));
var G__71969 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__71946,G__71947,G__71948,G__71949,G__71950,G__71951,G__71952,G__71953,G__71954,G__71955,G__71956,G__71957){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71946);

(invoc_array[(1)] = G__71947);

(invoc_array[(2)] = G__71948);

(invoc_array[(3)] = G__71949);

(invoc_array[(4)] = G__71950);

(invoc_array[(5)] = G__71951);

(invoc_array[(6)] = G__71952);

(invoc_array[(7)] = G__71953);

(invoc_array[(8)] = G__71954);

(invoc_array[(9)] = G__71955);

(invoc_array[(10)] = G__71956);

(invoc_array[(11)] = G__71957);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (13):
var G__71983 = cljs.core._nth(params,(0));
var G__71984 = cljs.core._nth(params,(1));
var G__71985 = cljs.core._nth(params,(2));
var G__71986 = cljs.core._nth(params,(3));
var G__71987 = cljs.core._nth(params,(4));
var G__71988 = cljs.core._nth(params,(5));
var G__71989 = cljs.core._nth(params,(6));
var G__71990 = cljs.core._nth(params,(7));
var G__71991 = cljs.core._nth(params,(8));
var G__71992 = cljs.core._nth(params,(9));
var G__71993 = cljs.core._nth(params,(10));
var G__71994 = cljs.core._nth(params,(11));
var G__71995 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__71970,G__71971,G__71972,G__71973,G__71974,G__71975,G__71976,G__71977,G__71978,G__71979,G__71980,G__71981,G__71982){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71970);

(invoc_array[(1)] = G__71971);

(invoc_array[(2)] = G__71972);

(invoc_array[(3)] = G__71973);

(invoc_array[(4)] = G__71974);

(invoc_array[(5)] = G__71975);

(invoc_array[(6)] = G__71976);

(invoc_array[(7)] = G__71977);

(invoc_array[(8)] = G__71978);

(invoc_array[(9)] = G__71979);

(invoc_array[(10)] = G__71980);

(invoc_array[(11)] = G__71981);

(invoc_array[(12)] = G__71982);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (14):
var G__72010 = cljs.core._nth(params,(0));
var G__72011 = cljs.core._nth(params,(1));
var G__72012 = cljs.core._nth(params,(2));
var G__72013 = cljs.core._nth(params,(3));
var G__72014 = cljs.core._nth(params,(4));
var G__72015 = cljs.core._nth(params,(5));
var G__72016 = cljs.core._nth(params,(6));
var G__72017 = cljs.core._nth(params,(7));
var G__72018 = cljs.core._nth(params,(8));
var G__72019 = cljs.core._nth(params,(9));
var G__72020 = cljs.core._nth(params,(10));
var G__72021 = cljs.core._nth(params,(11));
var G__72022 = cljs.core._nth(params,(12));
var G__72023 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__71996,G__71997,G__71998,G__71999,G__72000,G__72001,G__72002,G__72003,G__72004,G__72005,G__72006,G__72007,G__72008,G__72009){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71996);

(invoc_array[(1)] = G__71997);

(invoc_array[(2)] = G__71998);

(invoc_array[(3)] = G__71999);

(invoc_array[(4)] = G__72000);

(invoc_array[(5)] = G__72001);

(invoc_array[(6)] = G__72002);

(invoc_array[(7)] = G__72003);

(invoc_array[(8)] = G__72004);

(invoc_array[(9)] = G__72005);

(invoc_array[(10)] = G__72006);

(invoc_array[(11)] = G__72007);

(invoc_array[(12)] = G__72008);

(invoc_array[(13)] = G__72009);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (15):
var G__72039 = cljs.core._nth(params,(0));
var G__72040 = cljs.core._nth(params,(1));
var G__72041 = cljs.core._nth(params,(2));
var G__72042 = cljs.core._nth(params,(3));
var G__72043 = cljs.core._nth(params,(4));
var G__72044 = cljs.core._nth(params,(5));
var G__72045 = cljs.core._nth(params,(6));
var G__72046 = cljs.core._nth(params,(7));
var G__72047 = cljs.core._nth(params,(8));
var G__72048 = cljs.core._nth(params,(9));
var G__72049 = cljs.core._nth(params,(10));
var G__72050 = cljs.core._nth(params,(11));
var G__72051 = cljs.core._nth(params,(12));
var G__72052 = cljs.core._nth(params,(13));
var G__72053 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__72024,G__72025,G__72026,G__72027,G__72028,G__72029,G__72030,G__72031,G__72032,G__72033,G__72034,G__72035,G__72036,G__72037,G__72038){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72024);

(invoc_array[(1)] = G__72025);

(invoc_array[(2)] = G__72026);

(invoc_array[(3)] = G__72027);

(invoc_array[(4)] = G__72028);

(invoc_array[(5)] = G__72029);

(invoc_array[(6)] = G__72030);

(invoc_array[(7)] = G__72031);

(invoc_array[(8)] = G__72032);

(invoc_array[(9)] = G__72033);

(invoc_array[(10)] = G__72034);

(invoc_array[(11)] = G__72035);

(invoc_array[(12)] = G__72036);

(invoc_array[(13)] = G__72037);

(invoc_array[(14)] = G__72038);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (16):
var G__72070 = cljs.core._nth(params,(0));
var G__72071 = cljs.core._nth(params,(1));
var G__72072 = cljs.core._nth(params,(2));
var G__72073 = cljs.core._nth(params,(3));
var G__72074 = cljs.core._nth(params,(4));
var G__72075 = cljs.core._nth(params,(5));
var G__72076 = cljs.core._nth(params,(6));
var G__72077 = cljs.core._nth(params,(7));
var G__72078 = cljs.core._nth(params,(8));
var G__72079 = cljs.core._nth(params,(9));
var G__72080 = cljs.core._nth(params,(10));
var G__72081 = cljs.core._nth(params,(11));
var G__72082 = cljs.core._nth(params,(12));
var G__72083 = cljs.core._nth(params,(13));
var G__72084 = cljs.core._nth(params,(14));
var G__72085 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__72054,G__72055,G__72056,G__72057,G__72058,G__72059,G__72060,G__72061,G__72062,G__72063,G__72064,G__72065,G__72066,G__72067,G__72068,G__72069){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72054);

(invoc_array[(1)] = G__72055);

(invoc_array[(2)] = G__72056);

(invoc_array[(3)] = G__72057);

(invoc_array[(4)] = G__72058);

(invoc_array[(5)] = G__72059);

(invoc_array[(6)] = G__72060);

(invoc_array[(7)] = G__72061);

(invoc_array[(8)] = G__72062);

(invoc_array[(9)] = G__72063);

(invoc_array[(10)] = G__72064);

(invoc_array[(11)] = G__72065);

(invoc_array[(12)] = G__72066);

(invoc_array[(13)] = G__72067);

(invoc_array[(14)] = G__72068);

(invoc_array[(15)] = G__72069);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (17):
var G__72103 = cljs.core._nth(params,(0));
var G__72104 = cljs.core._nth(params,(1));
var G__72105 = cljs.core._nth(params,(2));
var G__72106 = cljs.core._nth(params,(3));
var G__72107 = cljs.core._nth(params,(4));
var G__72108 = cljs.core._nth(params,(5));
var G__72109 = cljs.core._nth(params,(6));
var G__72110 = cljs.core._nth(params,(7));
var G__72111 = cljs.core._nth(params,(8));
var G__72112 = cljs.core._nth(params,(9));
var G__72113 = cljs.core._nth(params,(10));
var G__72114 = cljs.core._nth(params,(11));
var G__72115 = cljs.core._nth(params,(12));
var G__72116 = cljs.core._nth(params,(13));
var G__72117 = cljs.core._nth(params,(14));
var G__72118 = cljs.core._nth(params,(15));
var G__72119 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__72086,G__72087,G__72088,G__72089,G__72090,G__72091,G__72092,G__72093,G__72094,G__72095,G__72096,G__72097,G__72098,G__72099,G__72100,G__72101,G__72102){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72086);

(invoc_array[(1)] = G__72087);

(invoc_array[(2)] = G__72088);

(invoc_array[(3)] = G__72089);

(invoc_array[(4)] = G__72090);

(invoc_array[(5)] = G__72091);

(invoc_array[(6)] = G__72092);

(invoc_array[(7)] = G__72093);

(invoc_array[(8)] = G__72094);

(invoc_array[(9)] = G__72095);

(invoc_array[(10)] = G__72096);

(invoc_array[(11)] = G__72097);

(invoc_array[(12)] = G__72098);

(invoc_array[(13)] = G__72099);

(invoc_array[(14)] = G__72100);

(invoc_array[(15)] = G__72101);

(invoc_array[(16)] = G__72102);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (18):
var G__72138 = cljs.core._nth(params,(0));
var G__72139 = cljs.core._nth(params,(1));
var G__72140 = cljs.core._nth(params,(2));
var G__72141 = cljs.core._nth(params,(3));
var G__72142 = cljs.core._nth(params,(4));
var G__72143 = cljs.core._nth(params,(5));
var G__72144 = cljs.core._nth(params,(6));
var G__72145 = cljs.core._nth(params,(7));
var G__72146 = cljs.core._nth(params,(8));
var G__72147 = cljs.core._nth(params,(9));
var G__72148 = cljs.core._nth(params,(10));
var G__72149 = cljs.core._nth(params,(11));
var G__72150 = cljs.core._nth(params,(12));
var G__72151 = cljs.core._nth(params,(13));
var G__72152 = cljs.core._nth(params,(14));
var G__72153 = cljs.core._nth(params,(15));
var G__72154 = cljs.core._nth(params,(16));
var G__72155 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__72120,G__72121,G__72122,G__72123,G__72124,G__72125,G__72126,G__72127,G__72128,G__72129,G__72130,G__72131,G__72132,G__72133,G__72134,G__72135,G__72136,G__72137){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72120);

(invoc_array[(1)] = G__72121);

(invoc_array[(2)] = G__72122);

(invoc_array[(3)] = G__72123);

(invoc_array[(4)] = G__72124);

(invoc_array[(5)] = G__72125);

(invoc_array[(6)] = G__72126);

(invoc_array[(7)] = G__72127);

(invoc_array[(8)] = G__72128);

(invoc_array[(9)] = G__72129);

(invoc_array[(10)] = G__72130);

(invoc_array[(11)] = G__72131);

(invoc_array[(12)] = G__72132);

(invoc_array[(13)] = G__72133);

(invoc_array[(14)] = G__72134);

(invoc_array[(15)] = G__72135);

(invoc_array[(16)] = G__72136);

(invoc_array[(17)] = G__72137);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (19):
var G__72175 = cljs.core._nth(params,(0));
var G__72176 = cljs.core._nth(params,(1));
var G__72177 = cljs.core._nth(params,(2));
var G__72178 = cljs.core._nth(params,(3));
var G__72179 = cljs.core._nth(params,(4));
var G__72180 = cljs.core._nth(params,(5));
var G__72181 = cljs.core._nth(params,(6));
var G__72182 = cljs.core._nth(params,(7));
var G__72183 = cljs.core._nth(params,(8));
var G__72184 = cljs.core._nth(params,(9));
var G__72185 = cljs.core._nth(params,(10));
var G__72186 = cljs.core._nth(params,(11));
var G__72187 = cljs.core._nth(params,(12));
var G__72188 = cljs.core._nth(params,(13));
var G__72189 = cljs.core._nth(params,(14));
var G__72190 = cljs.core._nth(params,(15));
var G__72191 = cljs.core._nth(params,(16));
var G__72192 = cljs.core._nth(params,(17));
var G__72193 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__72156,G__72157,G__72158,G__72159,G__72160,G__72161,G__72162,G__72163,G__72164,G__72165,G__72166,G__72167,G__72168,G__72169,G__72170,G__72171,G__72172,G__72173,G__72174){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72156);

(invoc_array[(1)] = G__72157);

(invoc_array[(2)] = G__72158);

(invoc_array[(3)] = G__72159);

(invoc_array[(4)] = G__72160);

(invoc_array[(5)] = G__72161);

(invoc_array[(6)] = G__72162);

(invoc_array[(7)] = G__72163);

(invoc_array[(8)] = G__72164);

(invoc_array[(9)] = G__72165);

(invoc_array[(10)] = G__72166);

(invoc_array[(11)] = G__72167);

(invoc_array[(12)] = G__72168);

(invoc_array[(13)] = G__72169);

(invoc_array[(14)] = G__72170);

(invoc_array[(15)] = G__72171);

(invoc_array[(16)] = G__72172);

(invoc_array[(17)] = G__72173);

(invoc_array[(18)] = G__72174);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
case (20):
var G__72214 = cljs.core._nth(params,(0));
var G__72215 = cljs.core._nth(params,(1));
var G__72216 = cljs.core._nth(params,(2));
var G__72217 = cljs.core._nth(params,(3));
var G__72218 = cljs.core._nth(params,(4));
var G__72219 = cljs.core._nth(params,(5));
var G__72220 = cljs.core._nth(params,(6));
var G__72221 = cljs.core._nth(params,(7));
var G__72222 = cljs.core._nth(params,(8));
var G__72223 = cljs.core._nth(params,(9));
var G__72224 = cljs.core._nth(params,(10));
var G__72225 = cljs.core._nth(params,(11));
var G__72226 = cljs.core._nth(params,(12));
var G__72227 = cljs.core._nth(params,(13));
var G__72228 = cljs.core._nth(params,(14));
var G__72229 = cljs.core._nth(params,(15));
var G__72230 = cljs.core._nth(params,(16));
var G__72231 = cljs.core._nth(params,(17));
var G__72232 = cljs.core._nth(params,(18));
var G__72233 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__72194,G__72195,G__72196,G__72197,G__72198,G__72199,G__72200,G__72201,G__72202,G__72203,G__72204,G__72205,G__72206,G__72207,G__72208,G__72209,G__72210,G__72211,G__72212,G__72213){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72194);

(invoc_array[(1)] = G__72195);

(invoc_array[(2)] = G__72196);

(invoc_array[(3)] = G__72197);

(invoc_array[(4)] = G__72198);

(invoc_array[(5)] = G__72199);

(invoc_array[(6)] = G__72200);

(invoc_array[(7)] = G__72201);

(invoc_array[(8)] = G__72202);

(invoc_array[(9)] = G__72203);

(invoc_array[(10)] = G__72204);

(invoc_array[(11)] = G__72205);

(invoc_array[(12)] = G__72206);

(invoc_array[(13)] = G__72207);

(invoc_array[(14)] = G__72208);

(invoc_array[(15)] = G__72209);

(invoc_array[(16)] = G__72210);

(invoc_array[(17)] = G__72211);

(invoc_array[(18)] = G__72212);

(invoc_array[(19)] = G__72213);

while(true){
var ret__70110__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70110__auto__)){
continue;
} else {
return ret__70110__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71812)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__72411__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__72411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72412__i = 0, G__72412__a = new Array(arguments.length -  0);
while (G__72412__i < G__72412__a.length) {G__72412__a[G__72412__i] = arguments[G__72412__i + 0]; ++G__72412__i;}
  args = new cljs.core.IndexedSeq(G__72412__a,0,null);
} 
return G__72411__delegate.call(this,args);};
G__72411.cljs$lang$maxFixedArity = 0;
G__72411.cljs$lang$applyTo = (function (arglist__72413){
var args = cljs.core.seq(arglist__72413);
return G__72411__delegate(args);
});
G__72411.cljs$core$IFn$_invoke$arity$variadic = G__72411__delegate;
return G__72411;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__72234_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__72234_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
