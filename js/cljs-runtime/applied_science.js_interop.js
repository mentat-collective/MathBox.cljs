import "./cljs_env.js";
goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51586 = arguments.length;
var i__5770__auto___51587 = (0);
while(true){
if((i__5770__auto___51587 < len__5769__auto___51586)){
args__5775__auto__.push((arguments[i__5770__auto___51587]));

var G__51588 = (i__5770__auto___51587 + (1));
i__5770__auto___51587 = G__51588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__51201_51593 = keyvals;
var vec__51203_51594 = G__51201_51593;
var seq__51204_51595 = cljs.core.seq(vec__51203_51594);
var first__51205_51596 = cljs.core.first(seq__51204_51595);
var seq__51204_51597__$1 = cljs.core.next(seq__51204_51595);
var k_51598 = first__51205_51596;
var first__51205_51599__$1 = cljs.core.first(seq__51204_51597__$1);
var seq__51204_51600__$2 = cljs.core.next(seq__51204_51597__$1);
var v_51601 = first__51205_51599__$1;
var keyvals_51602__$1 = seq__51204_51600__$2;
var G__51201_51613__$1 = G__51201_51593;
while(true){
var vec__51207_51614 = G__51201_51613__$1;
var seq__51208_51615 = cljs.core.seq(vec__51207_51614);
var first__51209_51616 = cljs.core.first(seq__51208_51615);
var seq__51208_51617__$1 = cljs.core.next(seq__51208_51615);
var k_51618__$1 = first__51209_51616;
var first__51209_51619__$1 = cljs.core.first(seq__51208_51617__$1);
var seq__51208_51620__$2 = cljs.core.next(seq__51208_51617__$1);
var v_51621__$1 = first__51209_51619__$1;
var keyvals_51622__$2 = seq__51208_51620__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_51618__$1)] = v_51621__$1);

if(keyvals_51622__$2){
var G__51631 = keyvals_51622__$2;
G__51201_51613__$1 = G__51631;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq51195){
var G__51196 = cljs.core.first(seq51195);
var seq51195__$1 = cljs.core.next(seq51195);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51196,seq51195__$1);
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
var G__51214 = arguments.length;
switch (G__51214) {
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
var obj51228 = obj;
if((!((obj51228 == null)))){
return (obj51228[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj51234 = obj;
if((!((obj51234 == null)))){
return (obj51234[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__50834__auto__ = (function (){var obj51238 = obj;
if((!((obj51238 == null)))){
return (obj51238[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__50834__auto__)){
return not_found;
} else {
return val__50834__auto__;
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
var G__51251 = arguments.length;
switch (G__51251) {
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
var obj51278 = self__.obj;
if((!((obj51278 == null)))){
return (obj51278[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__50834__auto__ = (function (){var obj51281 = self__.obj;
if((!((obj51281 == null)))){
return (obj51281[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__50834__auto__)){
return not_found;
} else {
return val__50834__auto__;
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

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
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
var args__5775__auto__ = [];
var len__5769__auto___51665 = arguments.length;
var i__5770__auto___51666 = (0);
while(true){
if((i__5770__auto___51666 < len__5769__auto___51665)){
args__5775__auto__.push((arguments[i__5770__auto___51666]));

var G__51670 = (i__5770__auto___51666 + (1));
i__5770__auto___51666 = G__51670;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__51327 = keyvals;
var vec__51328 = G__51327;
var seq__51329 = cljs.core.seq(vec__51328);
var first__51330 = cljs.core.first(seq__51329);
var seq__51329__$1 = cljs.core.next(seq__51329);
var k = first__51330;
var first__51330__$1 = cljs.core.first(seq__51329__$1);
var seq__51329__$2 = cljs.core.next(seq__51329__$1);
var v = first__51330__$1;
var kvs = seq__51329__$2;
var G__51327__$1 = G__51327;
while(true){
var vec__51331 = G__51327__$1;
var seq__51332 = cljs.core.seq(vec__51331);
var first__51333 = cljs.core.first(seq__51332);
var seq__51332__$1 = cljs.core.next(seq__51332);
var k__$1 = first__51333;
var first__51333__$1 = cljs.core.first(seq__51332__$1);
var seq__51332__$2 = cljs.core.next(seq__51332__$1);
var v__$1 = first__51333__$1;
var kvs__$1 = seq__51332__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__51674 = kvs__$1;
G__51327__$1 = G__51674;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq51312){
var G__51313 = cljs.core.first(seq51312);
var seq51312__$1 = cljs.core.next(seq51312);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51313,seq51312__$1);
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
var args__5775__auto__ = [];
var len__5769__auto___51682 = arguments.length;
var i__5770__auto___51683 = (0);
while(true){
if((i__5770__auto___51683 < len__5769__auto___51682)){
args__5775__auto__.push((arguments[i__5770__auto___51683]));

var G__51685 = (i__5770__auto___51683 + (1));
i__5770__auto___51683 = G__51685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq51345){
var G__51346 = cljs.core.first(seq51345);
var seq51345__$1 = cljs.core.next(seq51345);
var G__51347 = cljs.core.first(seq51345__$1);
var seq51345__$2 = cljs.core.next(seq51345__$1);
var G__51348 = cljs.core.first(seq51345__$2);
var seq51345__$3 = cljs.core.next(seq51345__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51346,G__51347,G__51348,seq51345__$3);
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
var args__5775__auto__ = [];
var len__5769__auto___51691 = arguments.length;
var i__5770__auto___51692 = (0);
while(true){
if((i__5770__auto___51692 < len__5769__auto___51691)){
args__5775__auto__.push((arguments[i__5770__auto___51692]));

var G__51693 = (i__5770__auto___51692 + (1));
i__5770__auto___51692 = G__51693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq51353){
var G__51354 = cljs.core.first(seq51353);
var seq51353__$1 = cljs.core.next(seq51353);
var G__51355 = cljs.core.first(seq51353__$1);
var seq51353__$2 = cljs.core.next(seq51353__$1);
var G__51359 = cljs.core.first(seq51353__$2);
var seq51353__$3 = cljs.core.next(seq51353__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51354,G__51355,G__51359,seq51353__$3);
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
var G__51395 = arguments.length;
switch (G__51395) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___51712 = arguments.length;
var i__5770__auto___51713 = (0);
while(true){
if((i__5770__auto___51713 < len__5769__auto___51712)){
args_arr__5794__auto__.push((arguments[i__5770__auto___51713]));

var G__51714 = (i__5770__auto___51713 + (1));
i__5770__auto___51713 = G__51714;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__51401_51716 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__51402_51717 = null;
var count__51403_51718 = (0);
var i__51404_51719 = (0);
while(true){
if((i__51404_51719 < count__51403_51718)){
var k_51720 = chunk__51402_51717.cljs$core$IIndexed$_nth$arity$2(null,i__51404_51719);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51720,applied_science.js_interop.unchecked_get(x,k_51720)], 0));


var G__51727 = seq__51401_51716;
var G__51728 = chunk__51402_51717;
var G__51729 = count__51403_51718;
var G__51730 = (i__51404_51719 + (1));
seq__51401_51716 = G__51727;
chunk__51402_51717 = G__51728;
count__51403_51718 = G__51729;
i__51404_51719 = G__51730;
continue;
} else {
var temp__5804__auto___51731 = cljs.core.seq(seq__51401_51716);
if(temp__5804__auto___51731){
var seq__51401_51733__$1 = temp__5804__auto___51731;
if(cljs.core.chunked_seq_QMARK_(seq__51401_51733__$1)){
var c__5568__auto___51734 = cljs.core.chunk_first(seq__51401_51733__$1);
var G__51735 = cljs.core.chunk_rest(seq__51401_51733__$1);
var G__51736 = c__5568__auto___51734;
var G__51737 = cljs.core.count(c__5568__auto___51734);
var G__51738 = (0);
seq__51401_51716 = G__51735;
chunk__51402_51717 = G__51736;
count__51403_51718 = G__51737;
i__51404_51719 = G__51738;
continue;
} else {
var k_51739 = cljs.core.first(seq__51401_51733__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51739,applied_science.js_interop.unchecked_get(x,k_51739)], 0));


var G__51741 = cljs.core.next(seq__51401_51733__$1);
var G__51742 = null;
var G__51743 = (0);
var G__51744 = (0);
seq__51401_51716 = G__51741;
chunk__51402_51717 = G__51742;
count__51403_51718 = G__51743;
i__51404_51719 = G__51744;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq51391){
var G__51392 = cljs.core.first(seq51391);
var seq51391__$1 = cljs.core.next(seq51391);
var G__51393 = cljs.core.first(seq51391__$1);
var seq51391__$2 = cljs.core.next(seq51391__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51392,G__51393,seq51391__$2);
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
var G__51413 = array;
G__51413.push(x);

return G__51413;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__51415 = array;
G__51415.unshift(x);

return G__51415;
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
var args__5775__auto__ = [];
var len__5769__auto___51748 = arguments.length;
var i__5770__auto___51750 = (0);
while(true){
if((i__5770__auto___51750 < len__5769__auto___51748)){
args__5775__auto__.push((arguments[i__5770__auto___51750]));

var G__51751 = (i__5770__auto___51750 + (1));
i__5770__auto___51750 = G__51751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj51422 = obj;
if((!((obj51422 == null)))){
return (obj51422[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq51417){
var G__51418 = cljs.core.first(seq51417);
var seq51417__$1 = cljs.core.next(seq51417);
var G__51419 = cljs.core.first(seq51417__$1);
var seq51417__$2 = cljs.core.next(seq51417__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51418,G__51419,seq51417__$2);
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
return (function (){var obj51424 = obj;
if((!((obj51424 == null)))){
return (obj51424[applied_science.js_interop.impl.wrap_key(k)]);
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
var args__5775__auto__ = [];
var len__5769__auto___51753 = arguments.length;
var i__5770__auto___51754 = (0);
while(true){
if((i__5770__auto___51754 < len__5769__auto___51753)){
args__5775__auto__.push((arguments[i__5770__auto___51754]));

var G__51755 = (i__5770__auto___51754 + (1));
i__5770__auto___51754 = G__51755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq51425){
var G__51426 = cljs.core.first(seq51425);
var seq51425__$1 = cljs.core.next(seq51425);
var G__51427 = cljs.core.first(seq51425__$1);
var seq51425__$2 = cljs.core.next(seq51425__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51426,G__51427,seq51425__$2);
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
var args__5775__auto__ = [];
var len__5769__auto___51760 = arguments.length;
var i__5770__auto___51761 = (0);
while(true){
if((i__5770__auto___51761 < len__5769__auto___51760)){
args__5775__auto__.push((arguments[i__5770__auto___51761]));

var G__51765 = (i__5770__auto___51761 + (1));
i__5770__auto___51761 = G__51765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__51447_51767 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__51517_51768 = null;
var count__51518_51769 = (0);
var i__51519_51770 = (0);
while(true){
if((i__51519_51770 < count__51518_51769)){
var vec__51559_51771 = chunk__51517_51768.cljs$core$IIndexed$_nth$arity$2(null,i__51519_51770);
var k_51772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51559_51771,(0),null);
var v_51773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51559_51771,(1),null);
var obj51562_51774 = obj;
var obj51564_51775 = (((!((obj51562_51774 == null))))?obj51562_51774:({}));
(obj51564_51775[applied_science.js_interop.impl.wrap_key(k_51772)] = v_51773);



var G__51776 = seq__51447_51767;
var G__51777 = chunk__51517_51768;
var G__51778 = count__51518_51769;
var G__51779 = (i__51519_51770 + (1));
seq__51447_51767 = G__51776;
chunk__51517_51768 = G__51777;
count__51518_51769 = G__51778;
i__51519_51770 = G__51779;
continue;
} else {
var temp__5804__auto___51780 = cljs.core.seq(seq__51447_51767);
if(temp__5804__auto___51780){
var seq__51447_51781__$1 = temp__5804__auto___51780;
if(cljs.core.chunked_seq_QMARK_(seq__51447_51781__$1)){
var c__5568__auto___51782 = cljs.core.chunk_first(seq__51447_51781__$1);
var G__51783 = cljs.core.chunk_rest(seq__51447_51781__$1);
var G__51784 = c__5568__auto___51782;
var G__51785 = cljs.core.count(c__5568__auto___51782);
var G__51786 = (0);
seq__51447_51767 = G__51783;
chunk__51517_51768 = G__51784;
count__51518_51769 = G__51785;
i__51519_51770 = G__51786;
continue;
} else {
var vec__51568_51788 = cljs.core.first(seq__51447_51781__$1);
var k_51789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568_51788,(0),null);
var v_51790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51568_51788,(1),null);
var obj51571_51791 = obj;
var obj51572_51792 = (((!((obj51571_51791 == null))))?obj51571_51791:({}));
(obj51572_51792[applied_science.js_interop.impl.wrap_key(k_51789)] = v_51790);



var G__51793 = cljs.core.next(seq__51447_51781__$1);
var G__51794 = null;
var G__51795 = (0);
var G__51796 = (0);
seq__51447_51767 = G__51793;
chunk__51517_51768 = G__51794;
count__51518_51769 = G__51795;
i__51519_51770 = G__51796;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq51442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51442));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
