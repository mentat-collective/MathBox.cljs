goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61273 = arguments.length;
var i__4865__auto___61274 = (0);
while(true){
if((i__4865__auto___61274 < len__4864__auto___61273)){
args__4870__auto__.push((arguments[i__4865__auto___61274]));

var G__61275 = (i__4865__auto___61274 + (1));
i__4865__auto___61274 = G__61275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__61003_61276 = keyvals;
var vec__61004_61277 = G__61003_61276;
var seq__61005_61278 = cljs.core.seq(vec__61004_61277);
var first__61006_61279 = cljs.core.first(seq__61005_61278);
var seq__61005_61280__$1 = cljs.core.next(seq__61005_61278);
var k_61281 = first__61006_61279;
var first__61006_61282__$1 = cljs.core.first(seq__61005_61280__$1);
var seq__61005_61283__$2 = cljs.core.next(seq__61005_61280__$1);
var v_61284 = first__61006_61282__$1;
var keyvals_61285__$1 = seq__61005_61283__$2;
var G__61003_61286__$1 = G__61003_61276;
while(true){
var vec__61007_61287 = G__61003_61286__$1;
var seq__61008_61288 = cljs.core.seq(vec__61007_61287);
var first__61009_61289 = cljs.core.first(seq__61008_61288);
var seq__61008_61290__$1 = cljs.core.next(seq__61008_61288);
var k_61291__$1 = first__61009_61289;
var first__61009_61292__$1 = cljs.core.first(seq__61008_61290__$1);
var seq__61008_61293__$2 = cljs.core.next(seq__61008_61290__$1);
var v_61294__$1 = first__61009_61292__$1;
var keyvals_61295__$2 = seq__61008_61293__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_61291__$1)] = v_61294__$1);

if(keyvals_61295__$2){
var G__61299 = keyvals_61295__$2;
G__61003_61286__$1 = G__61299;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq60994){
var G__60995 = cljs.core.first(seq60994);
var seq60994__$1 = cljs.core.next(seq60994);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60995,seq60994__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__61033 = arguments.length;
switch (G__61033) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj61034 = obj;
if((!((obj61034 == null)))){
return (obj61034[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj61035 = obj;
if((!((obj61035 == null)))){
return (obj61035[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__60705__auto__ = (function (){var obj61037 = obj;
if((!((obj61037 == null)))){
return (obj61037[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60705__auto__)){
return not_found;
} else {
return val__60705__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__61041 = arguments.length;
switch (G__61041) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj61055 = self__.obj;
if((!((obj61055 == null)))){
return (obj61055[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__60705__auto__ = (function (){var obj61056 = self__.obj;
if((!((obj61056 == null)))){
return (obj61056[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__60705__auto__)){
return not_found;
} else {
return val__60705__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61337 = arguments.length;
var i__4865__auto___61338 = (0);
while(true){
if((i__4865__auto___61338 < len__4864__auto___61337)){
args__4870__auto__.push((arguments[i__4865__auto___61338]));

var G__61339 = (i__4865__auto___61338 + (1));
i__4865__auto___61338 = G__61339;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__61070 = keyvals;
var vec__61071 = G__61070;
var seq__61072 = cljs.core.seq(vec__61071);
var first__61073 = cljs.core.first(seq__61072);
var seq__61072__$1 = cljs.core.next(seq__61072);
var k = first__61073;
var first__61073__$1 = cljs.core.first(seq__61072__$1);
var seq__61072__$2 = cljs.core.next(seq__61072__$1);
var v = first__61073__$1;
var kvs = seq__61072__$2;
var G__61070__$1 = G__61070;
while(true){
var vec__61074 = G__61070__$1;
var seq__61075 = cljs.core.seq(vec__61074);
var first__61076 = cljs.core.first(seq__61075);
var seq__61075__$1 = cljs.core.next(seq__61075);
var k__$1 = first__61076;
var first__61076__$1 = cljs.core.first(seq__61075__$1);
var seq__61075__$2 = cljs.core.next(seq__61075__$1);
var v__$1 = first__61076__$1;
var kvs__$1 = seq__61075__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__61350 = kvs__$1;
G__61070__$1 = G__61350;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq61065){
var G__61066 = cljs.core.first(seq61065);
var seq61065__$1 = cljs.core.next(seq61065);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61066,seq61065__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61354 = arguments.length;
var i__4865__auto___61355 = (0);
while(true){
if((i__4865__auto___61355 < len__4864__auto___61354)){
args__4870__auto__.push((arguments[i__4865__auto___61355]));

var G__61356 = (i__4865__auto___61355 + (1));
i__4865__auto___61355 = G__61356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq61081){
var G__61082 = cljs.core.first(seq61081);
var seq61081__$1 = cljs.core.next(seq61081);
var G__61083 = cljs.core.first(seq61081__$1);
var seq61081__$2 = cljs.core.next(seq61081__$1);
var G__61084 = cljs.core.first(seq61081__$2);
var seq61081__$3 = cljs.core.next(seq61081__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61082,G__61083,G__61084,seq61081__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61364 = arguments.length;
var i__4865__auto___61365 = (0);
while(true){
if((i__4865__auto___61365 < len__4864__auto___61364)){
args__4870__auto__.push((arguments[i__4865__auto___61365]));

var G__61366 = (i__4865__auto___61365 + (1));
i__4865__auto___61365 = G__61366;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq61089){
var G__61090 = cljs.core.first(seq61089);
var seq61089__$1 = cljs.core.next(seq61089);
var G__61091 = cljs.core.first(seq61089__$1);
var seq61089__$2 = cljs.core.next(seq61089__$1);
var G__61092 = cljs.core.first(seq61089__$2);
var seq61089__$3 = cljs.core.next(seq61089__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61090,G__61091,G__61092,seq61089__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__61105 = arguments.length;
switch (G__61105) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___61375 = arguments.length;
var i__4865__auto___61376 = (0);
while(true){
if((i__4865__auto___61376 < len__4864__auto___61375)){
args_arr__4885__auto__.push((arguments[i__4865__auto___61376]));

var G__61377 = (i__4865__auto___61376 + (1));
i__4865__auto___61376 = G__61377;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__61108_61379 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__61109_61380 = null;
var count__61110_61381 = (0);
var i__61111_61382 = (0);
while(true){
if((i__61111_61382 < count__61110_61381)){
var k_61383 = chunk__61109_61380.cljs$core$IIndexed$_nth$arity$2(null,i__61111_61382);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61383,applied_science.js_interop.unchecked_get(x,k_61383)], 0));


var G__61384 = seq__61108_61379;
var G__61385 = chunk__61109_61380;
var G__61386 = count__61110_61381;
var G__61387 = (i__61111_61382 + (1));
seq__61108_61379 = G__61384;
chunk__61109_61380 = G__61385;
count__61110_61381 = G__61386;
i__61111_61382 = G__61387;
continue;
} else {
var temp__5753__auto___61389 = cljs.core.seq(seq__61108_61379);
if(temp__5753__auto___61389){
var seq__61108_61390__$1 = temp__5753__auto___61389;
if(cljs.core.chunked_seq_QMARK_(seq__61108_61390__$1)){
var c__4679__auto___61391 = cljs.core.chunk_first(seq__61108_61390__$1);
var G__61393 = cljs.core.chunk_rest(seq__61108_61390__$1);
var G__61394 = c__4679__auto___61391;
var G__61395 = cljs.core.count(c__4679__auto___61391);
var G__61396 = (0);
seq__61108_61379 = G__61393;
chunk__61109_61380 = G__61394;
count__61110_61381 = G__61395;
i__61111_61382 = G__61396;
continue;
} else {
var k_61397 = cljs.core.first(seq__61108_61390__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_61397,applied_science.js_interop.unchecked_get(x,k_61397)], 0));


var G__61398 = cljs.core.next(seq__61108_61390__$1);
var G__61399 = null;
var G__61400 = (0);
var G__61401 = (0);
seq__61108_61379 = G__61398;
chunk__61109_61380 = G__61399;
count__61110_61381 = G__61400;
i__61111_61382 = G__61401;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq61101){
var G__61102 = cljs.core.first(seq61101);
var seq61101__$1 = cljs.core.next(seq61101);
var G__61103 = cljs.core.first(seq61101__$1);
var seq61101__$2 = cljs.core.next(seq61101__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61102,G__61103,seq61101__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__61126 = array;
G__61126.push(x);

return G__61126;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__61128 = array;
G__61128.unshift(x);

return G__61128;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61404 = arguments.length;
var i__4865__auto___61405 = (0);
while(true){
if((i__4865__auto___61405 < len__4864__auto___61404)){
args__4870__auto__.push((arguments[i__4865__auto___61405]));

var G__61406 = (i__4865__auto___61405 + (1));
i__4865__auto___61405 = G__61406;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj61134 = obj;
if((!((obj61134 == null)))){
return (obj61134[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq61129){
var G__61130 = cljs.core.first(seq61129);
var seq61129__$1 = cljs.core.next(seq61129);
var G__61131 = cljs.core.first(seq61129__$1);
var seq61129__$2 = cljs.core.next(seq61129__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61130,G__61131,seq61129__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj61136 = obj;
if((!((obj61136 == null)))){
return (obj61136[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61408 = arguments.length;
var i__4865__auto___61409 = (0);
while(true){
if((i__4865__auto___61409 < len__4864__auto___61408)){
args__4870__auto__.push((arguments[i__4865__auto___61409]));

var G__61410 = (i__4865__auto___61409 + (1));
i__4865__auto___61409 = G__61410;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq61137){
var G__61138 = cljs.core.first(seq61137);
var seq61137__$1 = cljs.core.next(seq61137);
var G__61139 = cljs.core.first(seq61137__$1);
var seq61137__$2 = cljs.core.next(seq61137__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61138,G__61139,seq61137__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61413 = arguments.length;
var i__4865__auto___61414 = (0);
while(true){
if((i__4865__auto___61414 < len__4864__auto___61413)){
args__4870__auto__.push((arguments[i__4865__auto___61414]));

var G__61415 = (i__4865__auto___61414 + (1));
i__4865__auto___61414 = G__61415;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__61168_61416 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__61169_61417 = null;
var count__61170_61418 = (0);
var i__61171_61419 = (0);
while(true){
if((i__61171_61419 < count__61170_61418)){
var vec__61219_61420 = chunk__61169_61417.cljs$core$IIndexed$_nth$arity$2(null,i__61171_61419);
var k_61421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61219_61420,(0),null);
var v_61422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61219_61420,(1),null);
var obj61222_61423 = obj;
var obj61229_61424 = (((!((obj61222_61423 == null))))?obj61222_61423:({}));
(obj61229_61424[applied_science.js_interop.impl.wrap_key(k_61421)] = v_61422);



var G__61425 = seq__61168_61416;
var G__61426 = chunk__61169_61417;
var G__61427 = count__61170_61418;
var G__61428 = (i__61171_61419 + (1));
seq__61168_61416 = G__61425;
chunk__61169_61417 = G__61426;
count__61170_61418 = G__61427;
i__61171_61419 = G__61428;
continue;
} else {
var temp__5753__auto___61429 = cljs.core.seq(seq__61168_61416);
if(temp__5753__auto___61429){
var seq__61168_61430__$1 = temp__5753__auto___61429;
if(cljs.core.chunked_seq_QMARK_(seq__61168_61430__$1)){
var c__4679__auto___61431 = cljs.core.chunk_first(seq__61168_61430__$1);
var G__61433 = cljs.core.chunk_rest(seq__61168_61430__$1);
var G__61434 = c__4679__auto___61431;
var G__61435 = cljs.core.count(c__4679__auto___61431);
var G__61436 = (0);
seq__61168_61416 = G__61433;
chunk__61169_61417 = G__61434;
count__61170_61418 = G__61435;
i__61171_61419 = G__61436;
continue;
} else {
var vec__61238_61437 = cljs.core.first(seq__61168_61430__$1);
var k_61438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61238_61437,(0),null);
var v_61439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61238_61437,(1),null);
var obj61243_61440 = obj;
var obj61250_61441 = (((!((obj61243_61440 == null))))?obj61243_61440:({}));
(obj61250_61441[applied_science.js_interop.impl.wrap_key(k_61438)] = v_61439);



var G__61442 = cljs.core.next(seq__61168_61430__$1);
var G__61443 = null;
var G__61444 = (0);
var G__61445 = (0);
seq__61168_61416 = G__61442;
chunk__61169_61417 = G__61443;
count__61170_61418 = G__61444;
i__61171_61419 = G__61445;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq61151){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61151));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
