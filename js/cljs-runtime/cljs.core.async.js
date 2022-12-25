import "./cljs_env.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45972 = arguments.length;
switch (G__45972) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45973 = (function (f,blockable,meta45974){
this.f = f;
this.blockable = blockable;
this.meta45974 = meta45974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45975,meta45974__$1){
var self__ = this;
var _45975__$1 = this;
return (new cljs.core.async.t_cljs$core$async45973(self__.f,self__.blockable,meta45974__$1));
}));

(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45975){
var self__ = this;
var _45975__$1 = this;
return self__.meta45974;
}));

(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45974","meta45974",302551078,null)], null);
}));

(cljs.core.async.t_cljs$core$async45973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45973");

(cljs.core.async.t_cljs$core$async45973.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45973.
 */
cljs.core.async.__GT_t_cljs$core$async45973 = (function cljs$core$async$__GT_t_cljs$core$async45973(f__$1,blockable__$1,meta45974){
return (new cljs.core.async.t_cljs$core$async45973(f__$1,blockable__$1,meta45974));
});

}

return (new cljs.core.async.t_cljs$core$async45973(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45982 = arguments.length;
switch (G__45982) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45984 = arguments.length;
switch (G__45984) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45986 = arguments.length;
switch (G__45986) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48161 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48161) : fn1.call(null,val_48161));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48161) : fn1.call(null,val_48161));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45988 = arguments.length;
switch (G__45988) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___48165 = n;
var x_48166 = (0);
while(true){
if((x_48166 < n__5636__auto___48165)){
(a[x_48166] = x_48166);

var G__48167 = (x_48166 + (1));
x_48166 = G__48167;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45989 = (function (flag,meta45990){
this.flag = flag;
this.meta45990 = meta45990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45991,meta45990__$1){
var self__ = this;
var _45991__$1 = this;
return (new cljs.core.async.t_cljs$core$async45989(self__.flag,meta45990__$1));
}));

(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45991){
var self__ = this;
var _45991__$1 = this;
return self__.meta45990;
}));

(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45990","meta45990",79330288,null)], null);
}));

(cljs.core.async.t_cljs$core$async45989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45989");

(cljs.core.async.t_cljs$core$async45989.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45989.
 */
cljs.core.async.__GT_t_cljs$core$async45989 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45989(flag__$1,meta45990){
return (new cljs.core.async.t_cljs$core$async45989(flag__$1,meta45990));
});

}

return (new cljs.core.async.t_cljs$core$async45989(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45996 = (function (flag,cb,meta45997){
this.flag = flag;
this.cb = cb;
this.meta45997 = meta45997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45998,meta45997__$1){
var self__ = this;
var _45998__$1 = this;
return (new cljs.core.async.t_cljs$core$async45996(self__.flag,self__.cb,meta45997__$1));
}));

(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45998){
var self__ = this;
var _45998__$1 = this;
return self__.meta45997;
}));

(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45997","meta45997",918027785,null)], null);
}));

(cljs.core.async.t_cljs$core$async45996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45996");

(cljs.core.async.t_cljs$core$async45996.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45996.
 */
cljs.core.async.__GT_t_cljs$core$async45996 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45996(flag__$1,cb__$1,meta45997){
return (new cljs.core.async.t_cljs$core$async45996(flag__$1,cb__$1,meta45997));
});

}

return (new cljs.core.async.t_cljs$core$async45996(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46016_SHARP_){
var G__46020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46016_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46020) : fret.call(null,G__46020));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46017_SHARP_){
var G__46021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46017_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46021) : fret.call(null,G__46021));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48175 = (i + (1));
i = G__48175;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48177 = arguments.length;
var i__5770__auto___48178 = (0);
while(true){
if((i__5770__auto___48178 < len__5769__auto___48177)){
args__5775__auto__.push((arguments[i__5770__auto___48178]));

var G__48179 = (i__5770__auto___48178 + (1));
i__5770__auto___48178 = G__48179;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46044){
var map__46045 = p__46044;
var map__46045__$1 = cljs.core.__destructure_map(map__46045);
var opts = map__46045__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46040){
var G__46041 = cljs.core.first(seq46040);
var seq46040__$1 = cljs.core.next(seq46040);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46041,seq46040__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46050 = arguments.length;
switch (G__46050) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45910__auto___48186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46102){
var state_val_46105 = (state_46102[(1)]);
if((state_val_46105 === (7))){
var inst_46072 = (state_46102[(2)]);
var state_46102__$1 = state_46102;
var statearr_46175_48187 = state_46102__$1;
(statearr_46175_48187[(2)] = inst_46072);

(statearr_46175_48187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (1))){
var state_46102__$1 = state_46102;
var statearr_46184_48189 = state_46102__$1;
(statearr_46184_48189[(2)] = null);

(statearr_46184_48189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (4))){
var inst_46055 = (state_46102[(7)]);
var inst_46055__$1 = (state_46102[(2)]);
var inst_46056 = (inst_46055__$1 == null);
var state_46102__$1 = (function (){var statearr_46203 = state_46102;
(statearr_46203[(7)] = inst_46055__$1);

return statearr_46203;
})();
if(cljs.core.truth_(inst_46056)){
var statearr_46204_48191 = state_46102__$1;
(statearr_46204_48191[(1)] = (5));

} else {
var statearr_46205_48192 = state_46102__$1;
(statearr_46205_48192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (13))){
var state_46102__$1 = state_46102;
var statearr_46206_48193 = state_46102__$1;
(statearr_46206_48193[(2)] = null);

(statearr_46206_48193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (6))){
var inst_46055 = (state_46102[(7)]);
var state_46102__$1 = state_46102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46102__$1,(11),to,inst_46055);
} else {
if((state_val_46105 === (3))){
var inst_46074 = (state_46102[(2)]);
var state_46102__$1 = state_46102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46102__$1,inst_46074);
} else {
if((state_val_46105 === (12))){
var state_46102__$1 = state_46102;
var statearr_46212_48194 = state_46102__$1;
(statearr_46212_48194[(2)] = null);

(statearr_46212_48194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (2))){
var state_46102__$1 = state_46102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46102__$1,(4),from);
} else {
if((state_val_46105 === (11))){
var inst_46065 = (state_46102[(2)]);
var state_46102__$1 = state_46102;
if(cljs.core.truth_(inst_46065)){
var statearr_46215_48195 = state_46102__$1;
(statearr_46215_48195[(1)] = (12));

} else {
var statearr_46216_48196 = state_46102__$1;
(statearr_46216_48196[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (9))){
var state_46102__$1 = state_46102;
var statearr_46217_48197 = state_46102__$1;
(statearr_46217_48197[(2)] = null);

(statearr_46217_48197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (5))){
var state_46102__$1 = state_46102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46219_48199 = state_46102__$1;
(statearr_46219_48199[(1)] = (8));

} else {
var statearr_46221_48201 = state_46102__$1;
(statearr_46221_48201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (14))){
var inst_46070 = (state_46102[(2)]);
var state_46102__$1 = state_46102;
var statearr_46222_48202 = state_46102__$1;
(statearr_46222_48202[(2)] = inst_46070);

(statearr_46222_48202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (10))){
var inst_46062 = (state_46102[(2)]);
var state_46102__$1 = state_46102;
var statearr_46223_48203 = state_46102__$1;
(statearr_46223_48203[(2)] = inst_46062);

(statearr_46223_48203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46105 === (8))){
var inst_46059 = cljs.core.async.close_BANG_(to);
var state_46102__$1 = state_46102;
var statearr_46224_48204 = state_46102__$1;
(statearr_46224_48204[(2)] = inst_46059);

(statearr_46224_48204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_46225 = [null,null,null,null,null,null,null,null];
(statearr_46225[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_46225[(1)] = (1));

return statearr_46225;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_46102){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46102);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46226){var ex__45693__auto__ = e46226;
var statearr_46227_48207 = state_46102;
(statearr_46227_48207[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46102[(4)]))){
var statearr_46232_48208 = state_46102;
(statearr_46232_48208[(1)] = cljs.core.first((state_46102[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48211 = state_46102;
state_46102 = G__48211;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_46102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_46102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46233 = f__45911__auto__();
(statearr_46233[(6)] = c__45910__auto___48186);

return statearr_46233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__46241){
var vec__46242 = p__46241;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46242,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46242,(1),null);
var job = vec__46242;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45910__auto___48212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46249){
var state_val_46250 = (state_46249[(1)]);
if((state_val_46250 === (1))){
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46249__$1,(2),res,v);
} else {
if((state_val_46250 === (2))){
var inst_46246 = (state_46249[(2)]);
var inst_46247 = cljs.core.async.close_BANG_(res);
var state_46249__$1 = (function (){var statearr_46253 = state_46249;
(statearr_46253[(7)] = inst_46246);

return statearr_46253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46249__$1,inst_46247);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_46256 = [null,null,null,null,null,null,null,null];
(statearr_46256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__);

(statearr_46256[(1)] = (1));

return statearr_46256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1 = (function (state_46249){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46249);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46257){var ex__45693__auto__ = e46257;
var statearr_46258_48213 = state_46249;
(statearr_46258_48213[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46249[(4)]))){
var statearr_46259_48214 = state_46249;
(statearr_46259_48214[(1)] = cljs.core.first((state_46249[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48215 = state_46249;
state_46249 = G__48215;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = function(state_46249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1.call(this,state_46249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46260 = f__45911__auto__();
(statearr_46260[(6)] = c__45910__auto___48212);

return statearr_46260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46265){
var vec__46266 = p__46265;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46266,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46266,(1),null);
var job = vec__46266;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___48216 = n;
var __48217 = (0);
while(true){
if((__48217 < n__5636__auto___48216)){
var G__46270_48218 = type;
var G__46270_48219__$1 = (((G__46270_48218 instanceof cljs.core.Keyword))?G__46270_48218.fqn:null);
switch (G__46270_48219__$1) {
case "compute":
var c__45910__auto___48221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48217,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = ((function (__48217,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function (state_46294){
var state_val_46295 = (state_46294[(1)]);
if((state_val_46295 === (1))){
var state_46294__$1 = state_46294;
var statearr_46298_48222 = state_46294__$1;
(statearr_46298_48222[(2)] = null);

(statearr_46298_48222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (2))){
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46294__$1,(4),jobs);
} else {
if((state_val_46295 === (3))){
var inst_46292 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46294__$1,inst_46292);
} else {
if((state_val_46295 === (4))){
var inst_46283 = (state_46294[(2)]);
var inst_46285 = process__$1(inst_46283);
var state_46294__$1 = state_46294;
if(cljs.core.truth_(inst_46285)){
var statearr_46301_48226 = state_46294__$1;
(statearr_46301_48226[(1)] = (5));

} else {
var statearr_46303_48227 = state_46294__$1;
(statearr_46303_48227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (5))){
var state_46294__$1 = state_46294;
var statearr_46304_48228 = state_46294__$1;
(statearr_46304_48228[(2)] = null);

(statearr_46304_48228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (6))){
var state_46294__$1 = state_46294;
var statearr_46306_48229 = state_46294__$1;
(statearr_46306_48229[(2)] = null);

(statearr_46306_48229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (7))){
var inst_46290 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46315_48230 = state_46294__$1;
(statearr_46315_48230[(2)] = inst_46290);

(statearr_46315_48230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48217,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
;
return ((function (__48217,switch__45689__auto__,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_46329 = [null,null,null,null,null,null,null];
(statearr_46329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__);

(statearr_46329[(1)] = (1));

return statearr_46329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1 = (function (state_46294){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46294);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46331){var ex__45693__auto__ = e46331;
var statearr_46332_48231 = state_46294;
(statearr_46332_48231[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46294[(4)]))){
var statearr_46333_48232 = state_46294;
(statearr_46333_48232[(1)] = cljs.core.first((state_46294[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48233 = state_46294;
state_46294 = G__48233;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = function(state_46294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1.call(this,state_46294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__;
})()
;})(__48217,switch__45689__auto__,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
})();
var state__45912__auto__ = (function (){var statearr_46335 = f__45911__auto__();
(statearr_46335[(6)] = c__45910__auto___48221);

return statearr_46335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
});})(__48217,c__45910__auto___48221,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
);


break;
case "async":
var c__45910__auto___48234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48217,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = ((function (__48217,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function (state_46348){
var state_val_46349 = (state_46348[(1)]);
if((state_val_46349 === (1))){
var state_46348__$1 = state_46348;
var statearr_46350_48235 = state_46348__$1;
(statearr_46350_48235[(2)] = null);

(statearr_46350_48235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (2))){
var state_46348__$1 = state_46348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46348__$1,(4),jobs);
} else {
if((state_val_46349 === (3))){
var inst_46346 = (state_46348[(2)]);
var state_46348__$1 = state_46348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46348__$1,inst_46346);
} else {
if((state_val_46349 === (4))){
var inst_46338 = (state_46348[(2)]);
var inst_46339 = async(inst_46338);
var state_46348__$1 = state_46348;
if(cljs.core.truth_(inst_46339)){
var statearr_46351_48239 = state_46348__$1;
(statearr_46351_48239[(1)] = (5));

} else {
var statearr_46352_48244 = state_46348__$1;
(statearr_46352_48244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (5))){
var state_46348__$1 = state_46348;
var statearr_46353_48247 = state_46348__$1;
(statearr_46353_48247[(2)] = null);

(statearr_46353_48247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (6))){
var state_46348__$1 = state_46348;
var statearr_46354_48251 = state_46348__$1;
(statearr_46354_48251[(2)] = null);

(statearr_46354_48251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46349 === (7))){
var inst_46344 = (state_46348[(2)]);
var state_46348__$1 = state_46348;
var statearr_46356_48252 = state_46348__$1;
(statearr_46356_48252[(2)] = inst_46344);

(statearr_46356_48252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48217,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
;
return ((function (__48217,switch__45689__auto__,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_46365 = [null,null,null,null,null,null,null];
(statearr_46365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__);

(statearr_46365[(1)] = (1));

return statearr_46365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1 = (function (state_46348){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46348);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46375){var ex__45693__auto__ = e46375;
var statearr_46379_48256 = state_46348;
(statearr_46379_48256[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46348[(4)]))){
var statearr_46380_48257 = state_46348;
(statearr_46380_48257[(1)] = cljs.core.first((state_46348[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48258 = state_46348;
state_46348 = G__48258;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = function(state_46348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1.call(this,state_46348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__;
})()
;})(__48217,switch__45689__auto__,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
})();
var state__45912__auto__ = (function (){var statearr_46381 = f__45911__auto__();
(statearr_46381[(6)] = c__45910__auto___48234);

return statearr_46381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
});})(__48217,c__45910__auto___48234,G__46270_48218,G__46270_48219__$1,n__5636__auto___48216,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46270_48219__$1)].join('')));

}

var G__48259 = (__48217 + (1));
__48217 = G__48259;
continue;
} else {
}
break;
}

var c__45910__auto___48260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46403){
var state_val_46404 = (state_46403[(1)]);
if((state_val_46404 === (7))){
var inst_46399 = (state_46403[(2)]);
var state_46403__$1 = state_46403;
var statearr_46405_48268 = state_46403__$1;
(statearr_46405_48268[(2)] = inst_46399);

(statearr_46405_48268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46404 === (1))){
var state_46403__$1 = state_46403;
var statearr_46406_48269 = state_46403__$1;
(statearr_46406_48269[(2)] = null);

(statearr_46406_48269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46404 === (4))){
var inst_46384 = (state_46403[(7)]);
var inst_46384__$1 = (state_46403[(2)]);
var inst_46385 = (inst_46384__$1 == null);
var state_46403__$1 = (function (){var statearr_46407 = state_46403;
(statearr_46407[(7)] = inst_46384__$1);

return statearr_46407;
})();
if(cljs.core.truth_(inst_46385)){
var statearr_46408_48273 = state_46403__$1;
(statearr_46408_48273[(1)] = (5));

} else {
var statearr_46409_48274 = state_46403__$1;
(statearr_46409_48274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46404 === (6))){
var inst_46384 = (state_46403[(7)]);
var inst_46389 = (state_46403[(8)]);
var inst_46389__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46391 = [inst_46384,inst_46389__$1];
var inst_46392 = (new cljs.core.PersistentVector(null,2,(5),inst_46390,inst_46391,null));
var state_46403__$1 = (function (){var statearr_46410 = state_46403;
(statearr_46410[(8)] = inst_46389__$1);

return statearr_46410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46403__$1,(8),jobs,inst_46392);
} else {
if((state_val_46404 === (3))){
var inst_46401 = (state_46403[(2)]);
var state_46403__$1 = state_46403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46403__$1,inst_46401);
} else {
if((state_val_46404 === (2))){
var state_46403__$1 = state_46403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46403__$1,(4),from);
} else {
if((state_val_46404 === (9))){
var inst_46396 = (state_46403[(2)]);
var state_46403__$1 = (function (){var statearr_46411 = state_46403;
(statearr_46411[(9)] = inst_46396);

return statearr_46411;
})();
var statearr_46412_48278 = state_46403__$1;
(statearr_46412_48278[(2)] = null);

(statearr_46412_48278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46404 === (5))){
var inst_46387 = cljs.core.async.close_BANG_(jobs);
var state_46403__$1 = state_46403;
var statearr_46413_48283 = state_46403__$1;
(statearr_46413_48283[(2)] = inst_46387);

(statearr_46413_48283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46404 === (8))){
var inst_46389 = (state_46403[(8)]);
var inst_46394 = (state_46403[(2)]);
var state_46403__$1 = (function (){var statearr_46414 = state_46403;
(statearr_46414[(10)] = inst_46394);

return statearr_46414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46403__$1,(9),results,inst_46389);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_46415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__);

(statearr_46415[(1)] = (1));

return statearr_46415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1 = (function (state_46403){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46403);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46416){var ex__45693__auto__ = e46416;
var statearr_46417_48294 = state_46403;
(statearr_46417_48294[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46403[(4)]))){
var statearr_46419_48295 = state_46403;
(statearr_46419_48295[(1)] = cljs.core.first((state_46403[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48296 = state_46403;
state_46403 = G__48296;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = function(state_46403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1.call(this,state_46403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46420 = f__45911__auto__();
(statearr_46420[(6)] = c__45910__auto___48260);

return statearr_46420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


var c__45910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46458){
var state_val_46459 = (state_46458[(1)]);
if((state_val_46459 === (7))){
var inst_46454 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46460_48298 = state_46458__$1;
(statearr_46460_48298[(2)] = inst_46454);

(statearr_46460_48298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (20))){
var state_46458__$1 = state_46458;
var statearr_46461_48301 = state_46458__$1;
(statearr_46461_48301[(2)] = null);

(statearr_46461_48301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (1))){
var state_46458__$1 = state_46458;
var statearr_46462_48302 = state_46458__$1;
(statearr_46462_48302[(2)] = null);

(statearr_46462_48302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (4))){
var inst_46423 = (state_46458[(7)]);
var inst_46423__$1 = (state_46458[(2)]);
var inst_46424 = (inst_46423__$1 == null);
var state_46458__$1 = (function (){var statearr_46463 = state_46458;
(statearr_46463[(7)] = inst_46423__$1);

return statearr_46463;
})();
if(cljs.core.truth_(inst_46424)){
var statearr_46464_48303 = state_46458__$1;
(statearr_46464_48303[(1)] = (5));

} else {
var statearr_46465_48304 = state_46458__$1;
(statearr_46465_48304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (15))){
var inst_46436 = (state_46458[(8)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46458__$1,(18),to,inst_46436);
} else {
if((state_val_46459 === (21))){
var inst_46449 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46466_48306 = state_46458__$1;
(statearr_46466_48306[(2)] = inst_46449);

(statearr_46466_48306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (13))){
var inst_46451 = (state_46458[(2)]);
var state_46458__$1 = (function (){var statearr_46467 = state_46458;
(statearr_46467[(9)] = inst_46451);

return statearr_46467;
})();
var statearr_46468_48308 = state_46458__$1;
(statearr_46468_48308[(2)] = null);

(statearr_46468_48308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (6))){
var inst_46423 = (state_46458[(7)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46458__$1,(11),inst_46423);
} else {
if((state_val_46459 === (17))){
var inst_46444 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
if(cljs.core.truth_(inst_46444)){
var statearr_46469_48309 = state_46458__$1;
(statearr_46469_48309[(1)] = (19));

} else {
var statearr_46470_48310 = state_46458__$1;
(statearr_46470_48310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (3))){
var inst_46456 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46458__$1,inst_46456);
} else {
if((state_val_46459 === (12))){
var inst_46433 = (state_46458[(10)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46458__$1,(14),inst_46433);
} else {
if((state_val_46459 === (2))){
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46458__$1,(4),results);
} else {
if((state_val_46459 === (19))){
var state_46458__$1 = state_46458;
var statearr_46471_48311 = state_46458__$1;
(statearr_46471_48311[(2)] = null);

(statearr_46471_48311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (11))){
var inst_46433 = (state_46458[(2)]);
var state_46458__$1 = (function (){var statearr_46472 = state_46458;
(statearr_46472[(10)] = inst_46433);

return statearr_46472;
})();
var statearr_46473_48312 = state_46458__$1;
(statearr_46473_48312[(2)] = null);

(statearr_46473_48312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (9))){
var state_46458__$1 = state_46458;
var statearr_46474_48314 = state_46458__$1;
(statearr_46474_48314[(2)] = null);

(statearr_46474_48314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (5))){
var state_46458__$1 = state_46458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46475_48316 = state_46458__$1;
(statearr_46475_48316[(1)] = (8));

} else {
var statearr_46476_48317 = state_46458__$1;
(statearr_46476_48317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (14))){
var inst_46438 = (state_46458[(11)]);
var inst_46436 = (state_46458[(8)]);
var inst_46436__$1 = (state_46458[(2)]);
var inst_46437 = (inst_46436__$1 == null);
var inst_46438__$1 = cljs.core.not(inst_46437);
var state_46458__$1 = (function (){var statearr_46477 = state_46458;
(statearr_46477[(11)] = inst_46438__$1);

(statearr_46477[(8)] = inst_46436__$1);

return statearr_46477;
})();
if(inst_46438__$1){
var statearr_46478_48318 = state_46458__$1;
(statearr_46478_48318[(1)] = (15));

} else {
var statearr_46479_48319 = state_46458__$1;
(statearr_46479_48319[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (16))){
var inst_46438 = (state_46458[(11)]);
var state_46458__$1 = state_46458;
var statearr_46480_48320 = state_46458__$1;
(statearr_46480_48320[(2)] = inst_46438);

(statearr_46480_48320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (10))){
var inst_46430 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46482_48321 = state_46458__$1;
(statearr_46482_48321[(2)] = inst_46430);

(statearr_46482_48321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (18))){
var inst_46441 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46483_48322 = state_46458__$1;
(statearr_46483_48322[(2)] = inst_46441);

(statearr_46483_48322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (8))){
var inst_46427 = cljs.core.async.close_BANG_(to);
var state_46458__$1 = state_46458;
var statearr_46484_48324 = state_46458__$1;
(statearr_46484_48324[(2)] = inst_46427);

(statearr_46484_48324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_46485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__);

(statearr_46485[(1)] = (1));

return statearr_46485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1 = (function (state_46458){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46458);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46486){var ex__45693__auto__ = e46486;
var statearr_46487_48326 = state_46458;
(statearr_46487_48326[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46458[(4)]))){
var statearr_46488_48327 = state_46458;
(statearr_46488_48327[(1)] = cljs.core.first((state_46458[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48328 = state_46458;
state_46458 = G__48328;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__ = function(state_46458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1.call(this,state_46458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46489 = f__45911__auto__();
(statearr_46489[(6)] = c__45910__auto__);

return statearr_46489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

return c__45910__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46492 = arguments.length;
switch (G__46492) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46495 = arguments.length;
switch (G__46495) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46498 = arguments.length;
switch (G__46498) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45910__auto___48334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46525){
var state_val_46526 = (state_46525[(1)]);
if((state_val_46526 === (7))){
var inst_46521 = (state_46525[(2)]);
var state_46525__$1 = state_46525;
var statearr_46527_48335 = state_46525__$1;
(statearr_46527_48335[(2)] = inst_46521);

(statearr_46527_48335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (1))){
var state_46525__$1 = state_46525;
var statearr_46528_48336 = state_46525__$1;
(statearr_46528_48336[(2)] = null);

(statearr_46528_48336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (4))){
var inst_46501 = (state_46525[(7)]);
var inst_46501__$1 = (state_46525[(2)]);
var inst_46502 = (inst_46501__$1 == null);
var state_46525__$1 = (function (){var statearr_46529 = state_46525;
(statearr_46529[(7)] = inst_46501__$1);

return statearr_46529;
})();
if(cljs.core.truth_(inst_46502)){
var statearr_46530_48337 = state_46525__$1;
(statearr_46530_48337[(1)] = (5));

} else {
var statearr_46531_48338 = state_46525__$1;
(statearr_46531_48338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (13))){
var state_46525__$1 = state_46525;
var statearr_46532_48339 = state_46525__$1;
(statearr_46532_48339[(2)] = null);

(statearr_46532_48339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (6))){
var inst_46501 = (state_46525[(7)]);
var inst_46508 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46501) : p.call(null,inst_46501));
var state_46525__$1 = state_46525;
if(cljs.core.truth_(inst_46508)){
var statearr_46534_48341 = state_46525__$1;
(statearr_46534_48341[(1)] = (9));

} else {
var statearr_46535_48342 = state_46525__$1;
(statearr_46535_48342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (3))){
var inst_46523 = (state_46525[(2)]);
var state_46525__$1 = state_46525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46525__$1,inst_46523);
} else {
if((state_val_46526 === (12))){
var state_46525__$1 = state_46525;
var statearr_46536_48344 = state_46525__$1;
(statearr_46536_48344[(2)] = null);

(statearr_46536_48344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (2))){
var state_46525__$1 = state_46525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46525__$1,(4),ch);
} else {
if((state_val_46526 === (11))){
var inst_46501 = (state_46525[(7)]);
var inst_46512 = (state_46525[(2)]);
var state_46525__$1 = state_46525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46525__$1,(8),inst_46512,inst_46501);
} else {
if((state_val_46526 === (9))){
var state_46525__$1 = state_46525;
var statearr_46537_48345 = state_46525__$1;
(statearr_46537_48345[(2)] = tc);

(statearr_46537_48345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (5))){
var inst_46504 = cljs.core.async.close_BANG_(tc);
var inst_46506 = cljs.core.async.close_BANG_(fc);
var state_46525__$1 = (function (){var statearr_46538 = state_46525;
(statearr_46538[(8)] = inst_46504);

return statearr_46538;
})();
var statearr_46539_48346 = state_46525__$1;
(statearr_46539_48346[(2)] = inst_46506);

(statearr_46539_48346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (14))){
var inst_46519 = (state_46525[(2)]);
var state_46525__$1 = state_46525;
var statearr_46541_48347 = state_46525__$1;
(statearr_46541_48347[(2)] = inst_46519);

(statearr_46541_48347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (10))){
var state_46525__$1 = state_46525;
var statearr_46542_48348 = state_46525__$1;
(statearr_46542_48348[(2)] = fc);

(statearr_46542_48348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46526 === (8))){
var inst_46514 = (state_46525[(2)]);
var state_46525__$1 = state_46525;
if(cljs.core.truth_(inst_46514)){
var statearr_46543_48349 = state_46525__$1;
(statearr_46543_48349[(1)] = (12));

} else {
var statearr_46544_48350 = state_46525__$1;
(statearr_46544_48350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_46545 = [null,null,null,null,null,null,null,null,null];
(statearr_46545[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_46545[(1)] = (1));

return statearr_46545;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_46525){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46525);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46546){var ex__45693__auto__ = e46546;
var statearr_46547_48351 = state_46525;
(statearr_46547_48351[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46525[(4)]))){
var statearr_46548_48352 = state_46525;
(statearr_46548_48352[(1)] = cljs.core.first((state_46525[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48354 = state_46525;
state_46525 = G__48354;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_46525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_46525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46550 = f__45911__auto__();
(statearr_46550[(6)] = c__45910__auto___48334);

return statearr_46550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46573){
var state_val_46574 = (state_46573[(1)]);
if((state_val_46574 === (7))){
var inst_46569 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46575_48356 = state_46573__$1;
(statearr_46575_48356[(2)] = inst_46569);

(statearr_46575_48356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (1))){
var inst_46551 = init;
var inst_46552 = inst_46551;
var state_46573__$1 = (function (){var statearr_46576 = state_46573;
(statearr_46576[(7)] = inst_46552);

return statearr_46576;
})();
var statearr_46577_48357 = state_46573__$1;
(statearr_46577_48357[(2)] = null);

(statearr_46577_48357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (4))){
var inst_46555 = (state_46573[(8)]);
var inst_46555__$1 = (state_46573[(2)]);
var inst_46556 = (inst_46555__$1 == null);
var state_46573__$1 = (function (){var statearr_46579 = state_46573;
(statearr_46579[(8)] = inst_46555__$1);

return statearr_46579;
})();
if(cljs.core.truth_(inst_46556)){
var statearr_46580_48358 = state_46573__$1;
(statearr_46580_48358[(1)] = (5));

} else {
var statearr_46581_48359 = state_46573__$1;
(statearr_46581_48359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (6))){
var inst_46552 = (state_46573[(7)]);
var inst_46560 = (state_46573[(9)]);
var inst_46555 = (state_46573[(8)]);
var inst_46560__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46552,inst_46555) : f.call(null,inst_46552,inst_46555));
var inst_46561 = cljs.core.reduced_QMARK_(inst_46560__$1);
var state_46573__$1 = (function (){var statearr_46582 = state_46573;
(statearr_46582[(9)] = inst_46560__$1);

return statearr_46582;
})();
if(inst_46561){
var statearr_46583_48360 = state_46573__$1;
(statearr_46583_48360[(1)] = (8));

} else {
var statearr_46584_48361 = state_46573__$1;
(statearr_46584_48361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (3))){
var inst_46571 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46573__$1,inst_46571);
} else {
if((state_val_46574 === (2))){
var state_46573__$1 = state_46573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46573__$1,(4),ch);
} else {
if((state_val_46574 === (9))){
var inst_46560 = (state_46573[(9)]);
var inst_46552 = inst_46560;
var state_46573__$1 = (function (){var statearr_46585 = state_46573;
(statearr_46585[(7)] = inst_46552);

return statearr_46585;
})();
var statearr_46587_48362 = state_46573__$1;
(statearr_46587_48362[(2)] = null);

(statearr_46587_48362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (5))){
var inst_46552 = (state_46573[(7)]);
var state_46573__$1 = state_46573;
var statearr_46588_48363 = state_46573__$1;
(statearr_46588_48363[(2)] = inst_46552);

(statearr_46588_48363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (10))){
var inst_46567 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46589_48364 = state_46573__$1;
(statearr_46589_48364[(2)] = inst_46567);

(statearr_46589_48364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (8))){
var inst_46560 = (state_46573[(9)]);
var inst_46563 = cljs.core.deref(inst_46560);
var state_46573__$1 = state_46573;
var statearr_46590_48365 = state_46573__$1;
(statearr_46590_48365[(2)] = inst_46563);

(statearr_46590_48365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45690__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45690__auto____0 = (function (){
var statearr_46591 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46591[(0)] = cljs$core$async$reduce_$_state_machine__45690__auto__);

(statearr_46591[(1)] = (1));

return statearr_46591;
});
var cljs$core$async$reduce_$_state_machine__45690__auto____1 = (function (state_46573){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46573);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46592){var ex__45693__auto__ = e46592;
var statearr_46593_48366 = state_46573;
(statearr_46593_48366[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46573[(4)]))){
var statearr_46594_48367 = state_46573;
(statearr_46594_48367[(1)] = cljs.core.first((state_46573[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48368 = state_46573;
state_46573 = G__48368;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45690__auto__ = function(state_46573){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45690__auto____1.call(this,state_46573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45690__auto____0;
cljs$core$async$reduce_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45690__auto____1;
return cljs$core$async$reduce_$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46595 = f__45911__auto__();
(statearr_46595[(6)] = c__45910__auto__);

return statearr_46595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

return c__45910__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46602){
var state_val_46603 = (state_46602[(1)]);
if((state_val_46603 === (1))){
var inst_46597 = cljs.core.async.reduce(f__$1,init,ch);
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46602__$1,(2),inst_46597);
} else {
if((state_val_46603 === (2))){
var inst_46599 = (state_46602[(2)]);
var inst_46600 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46599) : f__$1.call(null,inst_46599));
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46602__$1,inst_46600);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45690__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45690__auto____0 = (function (){
var statearr_46604 = [null,null,null,null,null,null,null];
(statearr_46604[(0)] = cljs$core$async$transduce_$_state_machine__45690__auto__);

(statearr_46604[(1)] = (1));

return statearr_46604;
});
var cljs$core$async$transduce_$_state_machine__45690__auto____1 = (function (state_46602){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46602);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46605){var ex__45693__auto__ = e46605;
var statearr_46606_48369 = state_46602;
(statearr_46606_48369[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46602[(4)]))){
var statearr_46607_48370 = state_46602;
(statearr_46607_48370[(1)] = cljs.core.first((state_46602[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48371 = state_46602;
state_46602 = G__48371;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45690__auto__ = function(state_46602){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45690__auto____1.call(this,state_46602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45690__auto____0;
cljs$core$async$transduce_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45690__auto____1;
return cljs$core$async$transduce_$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46608 = f__45911__auto__();
(statearr_46608[(6)] = c__45910__auto__);

return statearr_46608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

return c__45910__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46610 = arguments.length;
switch (G__46610) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46636){
var state_val_46637 = (state_46636[(1)]);
if((state_val_46637 === (7))){
var inst_46617 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46638_48373 = state_46636__$1;
(statearr_46638_48373[(2)] = inst_46617);

(statearr_46638_48373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (1))){
var inst_46611 = cljs.core.seq(coll);
var inst_46612 = inst_46611;
var state_46636__$1 = (function (){var statearr_46639 = state_46636;
(statearr_46639[(7)] = inst_46612);

return statearr_46639;
})();
var statearr_46640_48374 = state_46636__$1;
(statearr_46640_48374[(2)] = null);

(statearr_46640_48374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (4))){
var inst_46612 = (state_46636[(7)]);
var inst_46615 = cljs.core.first(inst_46612);
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46636__$1,(7),ch,inst_46615);
} else {
if((state_val_46637 === (13))){
var inst_46629 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46641_48375 = state_46636__$1;
(statearr_46641_48375[(2)] = inst_46629);

(statearr_46641_48375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (6))){
var inst_46620 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
if(cljs.core.truth_(inst_46620)){
var statearr_46642_48376 = state_46636__$1;
(statearr_46642_48376[(1)] = (8));

} else {
var statearr_46643_48377 = state_46636__$1;
(statearr_46643_48377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (3))){
var inst_46633 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46636__$1,inst_46633);
} else {
if((state_val_46637 === (12))){
var state_46636__$1 = state_46636;
var statearr_46644_48378 = state_46636__$1;
(statearr_46644_48378[(2)] = null);

(statearr_46644_48378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (2))){
var inst_46612 = (state_46636[(7)]);
var state_46636__$1 = state_46636;
if(cljs.core.truth_(inst_46612)){
var statearr_46645_48379 = state_46636__$1;
(statearr_46645_48379[(1)] = (4));

} else {
var statearr_46646_48381 = state_46636__$1;
(statearr_46646_48381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (11))){
var inst_46626 = cljs.core.async.close_BANG_(ch);
var state_46636__$1 = state_46636;
var statearr_46647_48383 = state_46636__$1;
(statearr_46647_48383[(2)] = inst_46626);

(statearr_46647_48383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (9))){
var state_46636__$1 = state_46636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46648_48385 = state_46636__$1;
(statearr_46648_48385[(1)] = (11));

} else {
var statearr_46649_48386 = state_46636__$1;
(statearr_46649_48386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (5))){
var inst_46612 = (state_46636[(7)]);
var state_46636__$1 = state_46636;
var statearr_46650_48387 = state_46636__$1;
(statearr_46650_48387[(2)] = inst_46612);

(statearr_46650_48387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (10))){
var inst_46631 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46651_48388 = state_46636__$1;
(statearr_46651_48388[(2)] = inst_46631);

(statearr_46651_48388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (8))){
var inst_46612 = (state_46636[(7)]);
var inst_46622 = cljs.core.next(inst_46612);
var inst_46612__$1 = inst_46622;
var state_46636__$1 = (function (){var statearr_46652 = state_46636;
(statearr_46652[(7)] = inst_46612__$1);

return statearr_46652;
})();
var statearr_46653_48389 = state_46636__$1;
(statearr_46653_48389[(2)] = null);

(statearr_46653_48389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_46654 = [null,null,null,null,null,null,null,null];
(statearr_46654[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_46654[(1)] = (1));

return statearr_46654;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_46636){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46636);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46655){var ex__45693__auto__ = e46655;
var statearr_46657_48390 = state_46636;
(statearr_46657_48390[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46636[(4)]))){
var statearr_46658_48391 = state_46636;
(statearr_46658_48391[(1)] = cljs.core.first((state_46636[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48392 = state_46636;
state_46636 = G__48392;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_46636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_46636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46659 = f__45911__auto__();
(statearr_46659[(6)] = c__45910__auto__);

return statearr_46659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

return c__45910__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46662 = arguments.length;
switch (G__46662) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48394 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48394(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48395 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48395(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48397 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48397(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48412 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48412(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46666 = (function (ch,cs,meta46667){
this.ch = ch;
this.cs = cs;
this.meta46667 = meta46667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46668,meta46667__$1){
var self__ = this;
var _46668__$1 = this;
return (new cljs.core.async.t_cljs$core$async46666(self__.ch,self__.cs,meta46667__$1));
}));

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46668){
var self__ = this;
var _46668__$1 = this;
return self__.meta46667;
}));

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46666.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46667","meta46667",1221419883,null)], null);
}));

(cljs.core.async.t_cljs$core$async46666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46666");

(cljs.core.async.t_cljs$core$async46666.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46666.
 */
cljs.core.async.__GT_t_cljs$core$async46666 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46666(ch__$1,cs__$1,meta46667){
return (new cljs.core.async.t_cljs$core$async46666(ch__$1,cs__$1,meta46667));
});

}

return (new cljs.core.async.t_cljs$core$async46666(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45910__auto___48415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46806){
var state_val_46807 = (state_46806[(1)]);
if((state_val_46807 === (7))){
var inst_46802 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46809_48416 = state_46806__$1;
(statearr_46809_48416[(2)] = inst_46802);

(statearr_46809_48416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (20))){
var inst_46705 = (state_46806[(7)]);
var inst_46717 = cljs.core.first(inst_46705);
var inst_46719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46717,(0),null);
var inst_46720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46717,(1),null);
var state_46806__$1 = (function (){var statearr_46810 = state_46806;
(statearr_46810[(8)] = inst_46719);

return statearr_46810;
})();
if(cljs.core.truth_(inst_46720)){
var statearr_46811_48417 = state_46806__$1;
(statearr_46811_48417[(1)] = (22));

} else {
var statearr_46812_48418 = state_46806__$1;
(statearr_46812_48418[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (27))){
var inst_46673 = (state_46806[(9)]);
var inst_46748 = (state_46806[(10)]);
var inst_46750 = (state_46806[(11)]);
var inst_46755 = (state_46806[(12)]);
var inst_46755__$1 = cljs.core._nth(inst_46748,inst_46750);
var inst_46756 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46755__$1,inst_46673,done);
var state_46806__$1 = (function (){var statearr_46813 = state_46806;
(statearr_46813[(12)] = inst_46755__$1);

return statearr_46813;
})();
if(cljs.core.truth_(inst_46756)){
var statearr_46815_48421 = state_46806__$1;
(statearr_46815_48421[(1)] = (30));

} else {
var statearr_46816_48422 = state_46806__$1;
(statearr_46816_48422[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (1))){
var state_46806__$1 = state_46806;
var statearr_46817_48423 = state_46806__$1;
(statearr_46817_48423[(2)] = null);

(statearr_46817_48423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (24))){
var inst_46705 = (state_46806[(7)]);
var inst_46725 = (state_46806[(2)]);
var inst_46726 = cljs.core.next(inst_46705);
var inst_46683 = inst_46726;
var inst_46684 = null;
var inst_46685 = (0);
var inst_46686 = (0);
var state_46806__$1 = (function (){var statearr_46818 = state_46806;
(statearr_46818[(13)] = inst_46686);

(statearr_46818[(14)] = inst_46685);

(statearr_46818[(15)] = inst_46684);

(statearr_46818[(16)] = inst_46725);

(statearr_46818[(17)] = inst_46683);

return statearr_46818;
})();
var statearr_46819_48424 = state_46806__$1;
(statearr_46819_48424[(2)] = null);

(statearr_46819_48424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (39))){
var state_46806__$1 = state_46806;
var statearr_46824_48425 = state_46806__$1;
(statearr_46824_48425[(2)] = null);

(statearr_46824_48425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (4))){
var inst_46673 = (state_46806[(9)]);
var inst_46673__$1 = (state_46806[(2)]);
var inst_46675 = (inst_46673__$1 == null);
var state_46806__$1 = (function (){var statearr_46825 = state_46806;
(statearr_46825[(9)] = inst_46673__$1);

return statearr_46825;
})();
if(cljs.core.truth_(inst_46675)){
var statearr_46826_48426 = state_46806__$1;
(statearr_46826_48426[(1)] = (5));

} else {
var statearr_46827_48427 = state_46806__$1;
(statearr_46827_48427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (15))){
var inst_46686 = (state_46806[(13)]);
var inst_46685 = (state_46806[(14)]);
var inst_46684 = (state_46806[(15)]);
var inst_46683 = (state_46806[(17)]);
var inst_46701 = (state_46806[(2)]);
var inst_46702 = (inst_46686 + (1));
var tmp46820 = inst_46685;
var tmp46821 = inst_46684;
var tmp46822 = inst_46683;
var inst_46683__$1 = tmp46822;
var inst_46684__$1 = tmp46821;
var inst_46685__$1 = tmp46820;
var inst_46686__$1 = inst_46702;
var state_46806__$1 = (function (){var statearr_46828 = state_46806;
(statearr_46828[(13)] = inst_46686__$1);

(statearr_46828[(14)] = inst_46685__$1);

(statearr_46828[(15)] = inst_46684__$1);

(statearr_46828[(18)] = inst_46701);

(statearr_46828[(17)] = inst_46683__$1);

return statearr_46828;
})();
var statearr_46830_48428 = state_46806__$1;
(statearr_46830_48428[(2)] = null);

(statearr_46830_48428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (21))){
var inst_46729 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46834_48429 = state_46806__$1;
(statearr_46834_48429[(2)] = inst_46729);

(statearr_46834_48429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (31))){
var inst_46755 = (state_46806[(12)]);
var inst_46759 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46755);
var state_46806__$1 = state_46806;
var statearr_46835_48430 = state_46806__$1;
(statearr_46835_48430[(2)] = inst_46759);

(statearr_46835_48430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (32))){
var inst_46747 = (state_46806[(19)]);
var inst_46748 = (state_46806[(10)]);
var inst_46750 = (state_46806[(11)]);
var inst_46749 = (state_46806[(20)]);
var inst_46761 = (state_46806[(2)]);
var inst_46762 = (inst_46750 + (1));
var tmp46831 = inst_46747;
var tmp46832 = inst_46748;
var tmp46833 = inst_46749;
var inst_46747__$1 = tmp46831;
var inst_46748__$1 = tmp46832;
var inst_46749__$1 = tmp46833;
var inst_46750__$1 = inst_46762;
var state_46806__$1 = (function (){var statearr_46836 = state_46806;
(statearr_46836[(19)] = inst_46747__$1);

(statearr_46836[(21)] = inst_46761);

(statearr_46836[(10)] = inst_46748__$1);

(statearr_46836[(11)] = inst_46750__$1);

(statearr_46836[(20)] = inst_46749__$1);

return statearr_46836;
})();
var statearr_46837_48438 = state_46806__$1;
(statearr_46837_48438[(2)] = null);

(statearr_46837_48438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (40))){
var inst_46775 = (state_46806[(22)]);
var inst_46779 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46775);
var state_46806__$1 = state_46806;
var statearr_46839_48439 = state_46806__$1;
(statearr_46839_48439[(2)] = inst_46779);

(statearr_46839_48439[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (33))){
var inst_46765 = (state_46806[(23)]);
var inst_46767 = cljs.core.chunked_seq_QMARK_(inst_46765);
var state_46806__$1 = state_46806;
if(inst_46767){
var statearr_46840_48440 = state_46806__$1;
(statearr_46840_48440[(1)] = (36));

} else {
var statearr_46841_48441 = state_46806__$1;
(statearr_46841_48441[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (13))){
var inst_46695 = (state_46806[(24)]);
var inst_46698 = cljs.core.async.close_BANG_(inst_46695);
var state_46806__$1 = state_46806;
var statearr_46842_48446 = state_46806__$1;
(statearr_46842_48446[(2)] = inst_46698);

(statearr_46842_48446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (22))){
var inst_46719 = (state_46806[(8)]);
var inst_46722 = cljs.core.async.close_BANG_(inst_46719);
var state_46806__$1 = state_46806;
var statearr_46843_48448 = state_46806__$1;
(statearr_46843_48448[(2)] = inst_46722);

(statearr_46843_48448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (36))){
var inst_46765 = (state_46806[(23)]);
var inst_46770 = cljs.core.chunk_first(inst_46765);
var inst_46771 = cljs.core.chunk_rest(inst_46765);
var inst_46772 = cljs.core.count(inst_46770);
var inst_46747 = inst_46771;
var inst_46748 = inst_46770;
var inst_46749 = inst_46772;
var inst_46750 = (0);
var state_46806__$1 = (function (){var statearr_46844 = state_46806;
(statearr_46844[(19)] = inst_46747);

(statearr_46844[(10)] = inst_46748);

(statearr_46844[(11)] = inst_46750);

(statearr_46844[(20)] = inst_46749);

return statearr_46844;
})();
var statearr_46846_48452 = state_46806__$1;
(statearr_46846_48452[(2)] = null);

(statearr_46846_48452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (41))){
var inst_46765 = (state_46806[(23)]);
var inst_46781 = (state_46806[(2)]);
var inst_46782 = cljs.core.next(inst_46765);
var inst_46747 = inst_46782;
var inst_46748 = null;
var inst_46749 = (0);
var inst_46750 = (0);
var state_46806__$1 = (function (){var statearr_46847 = state_46806;
(statearr_46847[(19)] = inst_46747);

(statearr_46847[(25)] = inst_46781);

(statearr_46847[(10)] = inst_46748);

(statearr_46847[(11)] = inst_46750);

(statearr_46847[(20)] = inst_46749);

return statearr_46847;
})();
var statearr_46848_48457 = state_46806__$1;
(statearr_46848_48457[(2)] = null);

(statearr_46848_48457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (43))){
var state_46806__$1 = state_46806;
var statearr_46849_48458 = state_46806__$1;
(statearr_46849_48458[(2)] = null);

(statearr_46849_48458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (29))){
var inst_46790 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46850_48459 = state_46806__$1;
(statearr_46850_48459[(2)] = inst_46790);

(statearr_46850_48459[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (44))){
var inst_46799 = (state_46806[(2)]);
var state_46806__$1 = (function (){var statearr_46851 = state_46806;
(statearr_46851[(26)] = inst_46799);

return statearr_46851;
})();
var statearr_46852_48460 = state_46806__$1;
(statearr_46852_48460[(2)] = null);

(statearr_46852_48460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (6))){
var inst_46739 = (state_46806[(27)]);
var inst_46738 = cljs.core.deref(cs);
var inst_46739__$1 = cljs.core.keys(inst_46738);
var inst_46740 = cljs.core.count(inst_46739__$1);
var inst_46741 = cljs.core.reset_BANG_(dctr,inst_46740);
var inst_46746 = cljs.core.seq(inst_46739__$1);
var inst_46747 = inst_46746;
var inst_46748 = null;
var inst_46749 = (0);
var inst_46750 = (0);
var state_46806__$1 = (function (){var statearr_46854 = state_46806;
(statearr_46854[(19)] = inst_46747);

(statearr_46854[(27)] = inst_46739__$1);

(statearr_46854[(28)] = inst_46741);

(statearr_46854[(10)] = inst_46748);

(statearr_46854[(11)] = inst_46750);

(statearr_46854[(20)] = inst_46749);

return statearr_46854;
})();
var statearr_46855_48468 = state_46806__$1;
(statearr_46855_48468[(2)] = null);

(statearr_46855_48468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (28))){
var inst_46747 = (state_46806[(19)]);
var inst_46765 = (state_46806[(23)]);
var inst_46765__$1 = cljs.core.seq(inst_46747);
var state_46806__$1 = (function (){var statearr_46856 = state_46806;
(statearr_46856[(23)] = inst_46765__$1);

return statearr_46856;
})();
if(inst_46765__$1){
var statearr_46857_48469 = state_46806__$1;
(statearr_46857_48469[(1)] = (33));

} else {
var statearr_46858_48479 = state_46806__$1;
(statearr_46858_48479[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (25))){
var inst_46750 = (state_46806[(11)]);
var inst_46749 = (state_46806[(20)]);
var inst_46752 = (inst_46750 < inst_46749);
var inst_46753 = inst_46752;
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46753)){
var statearr_46859_48480 = state_46806__$1;
(statearr_46859_48480[(1)] = (27));

} else {
var statearr_46860_48484 = state_46806__$1;
(statearr_46860_48484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (34))){
var state_46806__$1 = state_46806;
var statearr_46862_48485 = state_46806__$1;
(statearr_46862_48485[(2)] = null);

(statearr_46862_48485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (17))){
var state_46806__$1 = state_46806;
var statearr_46863_48486 = state_46806__$1;
(statearr_46863_48486[(2)] = null);

(statearr_46863_48486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (3))){
var inst_46804 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46806__$1,inst_46804);
} else {
if((state_val_46807 === (12))){
var inst_46734 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46864_48490 = state_46806__$1;
(statearr_46864_48490[(2)] = inst_46734);

(statearr_46864_48490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (2))){
var state_46806__$1 = state_46806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46806__$1,(4),ch);
} else {
if((state_val_46807 === (23))){
var state_46806__$1 = state_46806;
var statearr_46865_48492 = state_46806__$1;
(statearr_46865_48492[(2)] = null);

(statearr_46865_48492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (35))){
var inst_46788 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46866_48493 = state_46806__$1;
(statearr_46866_48493[(2)] = inst_46788);

(statearr_46866_48493[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (19))){
var inst_46705 = (state_46806[(7)]);
var inst_46709 = cljs.core.chunk_first(inst_46705);
var inst_46710 = cljs.core.chunk_rest(inst_46705);
var inst_46711 = cljs.core.count(inst_46709);
var inst_46683 = inst_46710;
var inst_46684 = inst_46709;
var inst_46685 = inst_46711;
var inst_46686 = (0);
var state_46806__$1 = (function (){var statearr_46868 = state_46806;
(statearr_46868[(13)] = inst_46686);

(statearr_46868[(14)] = inst_46685);

(statearr_46868[(15)] = inst_46684);

(statearr_46868[(17)] = inst_46683);

return statearr_46868;
})();
var statearr_46869_48497 = state_46806__$1;
(statearr_46869_48497[(2)] = null);

(statearr_46869_48497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (11))){
var inst_46705 = (state_46806[(7)]);
var inst_46683 = (state_46806[(17)]);
var inst_46705__$1 = cljs.core.seq(inst_46683);
var state_46806__$1 = (function (){var statearr_46870 = state_46806;
(statearr_46870[(7)] = inst_46705__$1);

return statearr_46870;
})();
if(inst_46705__$1){
var statearr_46871_48498 = state_46806__$1;
(statearr_46871_48498[(1)] = (16));

} else {
var statearr_46872_48499 = state_46806__$1;
(statearr_46872_48499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (9))){
var inst_46736 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46873_48500 = state_46806__$1;
(statearr_46873_48500[(2)] = inst_46736);

(statearr_46873_48500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (5))){
var inst_46681 = cljs.core.deref(cs);
var inst_46682 = cljs.core.seq(inst_46681);
var inst_46683 = inst_46682;
var inst_46684 = null;
var inst_46685 = (0);
var inst_46686 = (0);
var state_46806__$1 = (function (){var statearr_46874 = state_46806;
(statearr_46874[(13)] = inst_46686);

(statearr_46874[(14)] = inst_46685);

(statearr_46874[(15)] = inst_46684);

(statearr_46874[(17)] = inst_46683);

return statearr_46874;
})();
var statearr_46875_48502 = state_46806__$1;
(statearr_46875_48502[(2)] = null);

(statearr_46875_48502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (14))){
var state_46806__$1 = state_46806;
var statearr_46877_48503 = state_46806__$1;
(statearr_46877_48503[(2)] = null);

(statearr_46877_48503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (45))){
var inst_46796 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46878_48504 = state_46806__$1;
(statearr_46878_48504[(2)] = inst_46796);

(statearr_46878_48504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (26))){
var inst_46739 = (state_46806[(27)]);
var inst_46792 = (state_46806[(2)]);
var inst_46793 = cljs.core.seq(inst_46739);
var state_46806__$1 = (function (){var statearr_46879 = state_46806;
(statearr_46879[(29)] = inst_46792);

return statearr_46879;
})();
if(inst_46793){
var statearr_46880_48505 = state_46806__$1;
(statearr_46880_48505[(1)] = (42));

} else {
var statearr_46881_48506 = state_46806__$1;
(statearr_46881_48506[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (16))){
var inst_46705 = (state_46806[(7)]);
var inst_46707 = cljs.core.chunked_seq_QMARK_(inst_46705);
var state_46806__$1 = state_46806;
if(inst_46707){
var statearr_46882_48507 = state_46806__$1;
(statearr_46882_48507[(1)] = (19));

} else {
var statearr_46883_48508 = state_46806__$1;
(statearr_46883_48508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (38))){
var inst_46785 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46884_48509 = state_46806__$1;
(statearr_46884_48509[(2)] = inst_46785);

(statearr_46884_48509[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (30))){
var state_46806__$1 = state_46806;
var statearr_46886_48510 = state_46806__$1;
(statearr_46886_48510[(2)] = null);

(statearr_46886_48510[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (10))){
var inst_46686 = (state_46806[(13)]);
var inst_46684 = (state_46806[(15)]);
var inst_46694 = cljs.core._nth(inst_46684,inst_46686);
var inst_46695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46694,(0),null);
var inst_46696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46694,(1),null);
var state_46806__$1 = (function (){var statearr_46887 = state_46806;
(statearr_46887[(24)] = inst_46695);

return statearr_46887;
})();
if(cljs.core.truth_(inst_46696)){
var statearr_46888_48511 = state_46806__$1;
(statearr_46888_48511[(1)] = (13));

} else {
var statearr_46889_48512 = state_46806__$1;
(statearr_46889_48512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (18))){
var inst_46732 = (state_46806[(2)]);
var state_46806__$1 = state_46806;
var statearr_46890_48513 = state_46806__$1;
(statearr_46890_48513[(2)] = inst_46732);

(statearr_46890_48513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (42))){
var state_46806__$1 = state_46806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46806__$1,(45),dchan);
} else {
if((state_val_46807 === (37))){
var inst_46673 = (state_46806[(9)]);
var inst_46775 = (state_46806[(22)]);
var inst_46765 = (state_46806[(23)]);
var inst_46775__$1 = cljs.core.first(inst_46765);
var inst_46776 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46775__$1,inst_46673,done);
var state_46806__$1 = (function (){var statearr_46891 = state_46806;
(statearr_46891[(22)] = inst_46775__$1);

return statearr_46891;
})();
if(cljs.core.truth_(inst_46776)){
var statearr_46892_48516 = state_46806__$1;
(statearr_46892_48516[(1)] = (39));

} else {
var statearr_46893_48517 = state_46806__$1;
(statearr_46893_48517[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46807 === (8))){
var inst_46686 = (state_46806[(13)]);
var inst_46685 = (state_46806[(14)]);
var inst_46688 = (inst_46686 < inst_46685);
var inst_46689 = inst_46688;
var state_46806__$1 = state_46806;
if(cljs.core.truth_(inst_46689)){
var statearr_46894_48518 = state_46806__$1;
(statearr_46894_48518[(1)] = (10));

} else {
var statearr_46895_48519 = state_46806__$1;
(statearr_46895_48519[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45690__auto__ = null;
var cljs$core$async$mult_$_state_machine__45690__auto____0 = (function (){
var statearr_46897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46897[(0)] = cljs$core$async$mult_$_state_machine__45690__auto__);

(statearr_46897[(1)] = (1));

return statearr_46897;
});
var cljs$core$async$mult_$_state_machine__45690__auto____1 = (function (state_46806){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46806);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e46898){var ex__45693__auto__ = e46898;
var statearr_46899_48520 = state_46806;
(statearr_46899_48520[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46806[(4)]))){
var statearr_46900_48522 = state_46806;
(statearr_46900_48522[(1)] = cljs.core.first((state_46806[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48523 = state_46806;
state_46806 = G__48523;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45690__auto__ = function(state_46806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45690__auto____1.call(this,state_46806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45690__auto____0;
cljs$core$async$mult_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45690__auto____1;
return cljs$core$async$mult_$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_46901 = f__45911__auto__();
(statearr_46901[(6)] = c__45910__auto___48415);

return statearr_46901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46903 = arguments.length;
switch (G__46903) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48526 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48526(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48527 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48527(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48530 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48530(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48542 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48542(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48545 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48545(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48556 = arguments.length;
var i__5770__auto___48557 = (0);
while(true){
if((i__5770__auto___48557 < len__5769__auto___48556)){
args__5775__auto__.push((arguments[i__5770__auto___48557]));

var G__48558 = (i__5770__auto___48557 + (1));
i__5770__auto___48557 = G__48558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46910){
var map__46911 = p__46910;
var map__46911__$1 = cljs.core.__destructure_map(map__46911);
var opts = map__46911__$1;
var statearr_46912_48559 = state;
(statearr_46912_48559[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46913_48560 = state;
(statearr_46913_48560[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_46914_48565 = state;
(statearr_46914_48565[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46905){
var G__46906 = cljs.core.first(seq46905);
var seq46905__$1 = cljs.core.next(seq46905);
var G__46907 = cljs.core.first(seq46905__$1);
var seq46905__$2 = cljs.core.next(seq46905__$1);
var G__46908 = cljs.core.first(seq46905__$2);
var seq46905__$3 = cljs.core.next(seq46905__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46906,G__46907,G__46908,seq46905__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46917 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46918){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46918 = meta46918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46919,meta46918__$1){
var self__ = this;
var _46919__$1 = this;
return (new cljs.core.async.t_cljs$core$async46917(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46918__$1));
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46919){
var self__ = this;
var _46919__$1 = this;
return self__.meta46918;
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46918","meta46918",-1027896510,null)], null);
}));

(cljs.core.async.t_cljs$core$async46917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46917");

(cljs.core.async.t_cljs$core$async46917.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46917.
 */
cljs.core.async.__GT_t_cljs$core$async46917 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46918){
return (new cljs.core.async.t_cljs$core$async46917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46918));
});

}

return (new cljs.core.async.t_cljs$core$async46917(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45910__auto___48607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_46993){
var state_val_46994 = (state_46993[(1)]);
if((state_val_46994 === (7))){
var inst_46951 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
if(cljs.core.truth_(inst_46951)){
var statearr_46995_48608 = state_46993__$1;
(statearr_46995_48608[(1)] = (8));

} else {
var statearr_46996_48609 = state_46993__$1;
(statearr_46996_48609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (20))){
var inst_46944 = (state_46993[(7)]);
var state_46993__$1 = state_46993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46993__$1,(23),out,inst_46944);
} else {
if((state_val_46994 === (1))){
var inst_46927 = calc_state();
var inst_46928 = cljs.core.__destructure_map(inst_46927);
var inst_46929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46928,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46928,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46928,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46932 = inst_46927;
var state_46993__$1 = (function (){var statearr_46997 = state_46993;
(statearr_46997[(8)] = inst_46929);

(statearr_46997[(9)] = inst_46930);

(statearr_46997[(10)] = inst_46931);

(statearr_46997[(11)] = inst_46932);

return statearr_46997;
})();
var statearr_46998_48616 = state_46993__$1;
(statearr_46998_48616[(2)] = null);

(statearr_46998_48616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (24))){
var inst_46935 = (state_46993[(12)]);
var inst_46932 = inst_46935;
var state_46993__$1 = (function (){var statearr_46999 = state_46993;
(statearr_46999[(11)] = inst_46932);

return statearr_46999;
})();
var statearr_47000_48617 = state_46993__$1;
(statearr_47000_48617[(2)] = null);

(statearr_47000_48617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (4))){
var inst_46946 = (state_46993[(13)]);
var inst_46944 = (state_46993[(7)]);
var inst_46943 = (state_46993[(2)]);
var inst_46944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46943,(0),null);
var inst_46945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46943,(1),null);
var inst_46946__$1 = (inst_46944__$1 == null);
var state_46993__$1 = (function (){var statearr_47001 = state_46993;
(statearr_47001[(13)] = inst_46946__$1);

(statearr_47001[(14)] = inst_46945);

(statearr_47001[(7)] = inst_46944__$1);

return statearr_47001;
})();
if(cljs.core.truth_(inst_46946__$1)){
var statearr_47002_48619 = state_46993__$1;
(statearr_47002_48619[(1)] = (5));

} else {
var statearr_47003_48620 = state_46993__$1;
(statearr_47003_48620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (15))){
var inst_46965 = (state_46993[(15)]);
var inst_46936 = (state_46993[(16)]);
var inst_46965__$1 = cljs.core.empty_QMARK_(inst_46936);
var state_46993__$1 = (function (){var statearr_47004 = state_46993;
(statearr_47004[(15)] = inst_46965__$1);

return statearr_47004;
})();
if(inst_46965__$1){
var statearr_47005_48621 = state_46993__$1;
(statearr_47005_48621[(1)] = (17));

} else {
var statearr_47006_48622 = state_46993__$1;
(statearr_47006_48622[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (21))){
var inst_46935 = (state_46993[(12)]);
var inst_46932 = inst_46935;
var state_46993__$1 = (function (){var statearr_47007 = state_46993;
(statearr_47007[(11)] = inst_46932);

return statearr_47007;
})();
var statearr_47008_48624 = state_46993__$1;
(statearr_47008_48624[(2)] = null);

(statearr_47008_48624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (13))){
var inst_46958 = (state_46993[(2)]);
var inst_46959 = calc_state();
var inst_46932 = inst_46959;
var state_46993__$1 = (function (){var statearr_47009 = state_46993;
(statearr_47009[(17)] = inst_46958);

(statearr_47009[(11)] = inst_46932);

return statearr_47009;
})();
var statearr_47010_48631 = state_46993__$1;
(statearr_47010_48631[(2)] = null);

(statearr_47010_48631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (22))){
var inst_46987 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
var statearr_47011_48632 = state_46993__$1;
(statearr_47011_48632[(2)] = inst_46987);

(statearr_47011_48632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (6))){
var inst_46945 = (state_46993[(14)]);
var inst_46949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46945,change);
var state_46993__$1 = state_46993;
var statearr_47012_48633 = state_46993__$1;
(statearr_47012_48633[(2)] = inst_46949);

(statearr_47012_48633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (25))){
var state_46993__$1 = state_46993;
var statearr_47013_48635 = state_46993__$1;
(statearr_47013_48635[(2)] = null);

(statearr_47013_48635[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (17))){
var inst_46945 = (state_46993[(14)]);
var inst_46937 = (state_46993[(18)]);
var inst_46968 = (inst_46937.cljs$core$IFn$_invoke$arity$1 ? inst_46937.cljs$core$IFn$_invoke$arity$1(inst_46945) : inst_46937.call(null,inst_46945));
var inst_46969 = cljs.core.not(inst_46968);
var state_46993__$1 = state_46993;
var statearr_47015_48642 = state_46993__$1;
(statearr_47015_48642[(2)] = inst_46969);

(statearr_47015_48642[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (3))){
var inst_46991 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46993__$1,inst_46991);
} else {
if((state_val_46994 === (12))){
var state_46993__$1 = state_46993;
var statearr_47018_48643 = state_46993__$1;
(statearr_47018_48643[(2)] = null);

(statearr_47018_48643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (2))){
var inst_46935 = (state_46993[(12)]);
var inst_46932 = (state_46993[(11)]);
var inst_46935__$1 = cljs.core.__destructure_map(inst_46932);
var inst_46936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46935__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46935__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46935__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46993__$1 = (function (){var statearr_47021 = state_46993;
(statearr_47021[(18)] = inst_46937);

(statearr_47021[(12)] = inst_46935__$1);

(statearr_47021[(16)] = inst_46936);

return statearr_47021;
})();
return cljs.core.async.ioc_alts_BANG_(state_46993__$1,(4),inst_46938);
} else {
if((state_val_46994 === (23))){
var inst_46978 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
if(cljs.core.truth_(inst_46978)){
var statearr_47023_48646 = state_46993__$1;
(statearr_47023_48646[(1)] = (24));

} else {
var statearr_47024_48647 = state_46993__$1;
(statearr_47024_48647[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (19))){
var inst_46972 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
var statearr_47028_48648 = state_46993__$1;
(statearr_47028_48648[(2)] = inst_46972);

(statearr_47028_48648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (11))){
var inst_46945 = (state_46993[(14)]);
var inst_46955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46945);
var state_46993__$1 = state_46993;
var statearr_47029_48649 = state_46993__$1;
(statearr_47029_48649[(2)] = inst_46955);

(statearr_47029_48649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (9))){
var inst_46945 = (state_46993[(14)]);
var inst_46962 = (state_46993[(19)]);
var inst_46936 = (state_46993[(16)]);
var inst_46962__$1 = (inst_46936.cljs$core$IFn$_invoke$arity$1 ? inst_46936.cljs$core$IFn$_invoke$arity$1(inst_46945) : inst_46936.call(null,inst_46945));
var state_46993__$1 = (function (){var statearr_47030 = state_46993;
(statearr_47030[(19)] = inst_46962__$1);

return statearr_47030;
})();
if(cljs.core.truth_(inst_46962__$1)){
var statearr_47031_48652 = state_46993__$1;
(statearr_47031_48652[(1)] = (14));

} else {
var statearr_47032_48653 = state_46993__$1;
(statearr_47032_48653[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (5))){
var inst_46946 = (state_46993[(13)]);
var state_46993__$1 = state_46993;
var statearr_47033_48654 = state_46993__$1;
(statearr_47033_48654[(2)] = inst_46946);

(statearr_47033_48654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (14))){
var inst_46962 = (state_46993[(19)]);
var state_46993__$1 = state_46993;
var statearr_47035_48655 = state_46993__$1;
(statearr_47035_48655[(2)] = inst_46962);

(statearr_47035_48655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (26))){
var inst_46983 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
var statearr_47039_48656 = state_46993__$1;
(statearr_47039_48656[(2)] = inst_46983);

(statearr_47039_48656[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (16))){
var inst_46974 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
if(cljs.core.truth_(inst_46974)){
var statearr_47044_48663 = state_46993__$1;
(statearr_47044_48663[(1)] = (20));

} else {
var statearr_47049_48664 = state_46993__$1;
(statearr_47049_48664[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (10))){
var inst_46989 = (state_46993[(2)]);
var state_46993__$1 = state_46993;
var statearr_47054_48665 = state_46993__$1;
(statearr_47054_48665[(2)] = inst_46989);

(statearr_47054_48665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (18))){
var inst_46965 = (state_46993[(15)]);
var state_46993__$1 = state_46993;
var statearr_47060_48667 = state_46993__$1;
(statearr_47060_48667[(2)] = inst_46965);

(statearr_47060_48667[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46994 === (8))){
var inst_46944 = (state_46993[(7)]);
var inst_46953 = (inst_46944 == null);
var state_46993__$1 = state_46993;
if(cljs.core.truth_(inst_46953)){
var statearr_47067_48668 = state_46993__$1;
(statearr_47067_48668[(1)] = (11));

} else {
var statearr_47073_48669 = state_46993__$1;
(statearr_47073_48669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45690__auto__ = null;
var cljs$core$async$mix_$_state_machine__45690__auto____0 = (function (){
var statearr_47086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47086[(0)] = cljs$core$async$mix_$_state_machine__45690__auto__);

(statearr_47086[(1)] = (1));

return statearr_47086;
});
var cljs$core$async$mix_$_state_machine__45690__auto____1 = (function (state_46993){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_46993);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47088){var ex__45693__auto__ = e47088;
var statearr_47089_48671 = state_46993;
(statearr_47089_48671[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_46993[(4)]))){
var statearr_47091_48672 = state_46993;
(statearr_47091_48672[(1)] = cljs.core.first((state_46993[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48673 = state_46993;
state_46993 = G__48673;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45690__auto__ = function(state_46993){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45690__auto____1.call(this,state_46993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45690__auto____0;
cljs$core$async$mix_$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45690__auto____1;
return cljs$core$async$mix_$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47095 = f__45911__auto__();
(statearr_47095[(6)] = c__45910__auto___48607);

return statearr_47095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48674 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48674(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48675 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48675(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48680 = (function() {
var G__48681 = null;
var G__48681__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48681__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48681 = function(p,v){
switch(arguments.length){
case 1:
return G__48681__1.call(this,p);
case 2:
return G__48681__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48681.cljs$core$IFn$_invoke$arity$1 = G__48681__1;
G__48681.cljs$core$IFn$_invoke$arity$2 = G__48681__2;
return G__48681;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47135 = arguments.length;
switch (G__47135) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48680(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48680(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47154 = arguments.length;
switch (G__47154) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47148_SHARP_){
if(cljs.core.truth_((p1__47148_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47148_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47148_SHARP_.call(null,topic)))){
return p1__47148_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47148_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47163 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47164){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47164 = meta47164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47165,meta47164__$1){
var self__ = this;
var _47165__$1 = this;
return (new cljs.core.async.t_cljs$core$async47163(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47164__$1));
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47165){
var self__ = this;
var _47165__$1 = this;
return self__.meta47164;
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47164","meta47164",285148155,null)], null);
}));

(cljs.core.async.t_cljs$core$async47163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47163");

(cljs.core.async.t_cljs$core$async47163.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47163.
 */
cljs.core.async.__GT_t_cljs$core$async47163 = (function cljs$core$async$__GT_t_cljs$core$async47163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47164){
return (new cljs.core.async.t_cljs$core$async47163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47164));
});

}

return (new cljs.core.async.t_cljs$core$async47163(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45910__auto___48709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47275){
var state_val_47276 = (state_47275[(1)]);
if((state_val_47276 === (7))){
var inst_47268 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47281_48710 = state_47275__$1;
(statearr_47281_48710[(2)] = inst_47268);

(statearr_47281_48710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (20))){
var state_47275__$1 = state_47275;
var statearr_47283_48711 = state_47275__$1;
(statearr_47283_48711[(2)] = null);

(statearr_47283_48711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (1))){
var state_47275__$1 = state_47275;
var statearr_47287_48713 = state_47275__$1;
(statearr_47287_48713[(2)] = null);

(statearr_47287_48713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (24))){
var inst_47250 = (state_47275[(7)]);
var inst_47260 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47250);
var state_47275__$1 = state_47275;
var statearr_47289_48715 = state_47275__$1;
(statearr_47289_48715[(2)] = inst_47260);

(statearr_47289_48715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (4))){
var inst_47193 = (state_47275[(8)]);
var inst_47193__$1 = (state_47275[(2)]);
var inst_47195 = (inst_47193__$1 == null);
var state_47275__$1 = (function (){var statearr_47291 = state_47275;
(statearr_47291[(8)] = inst_47193__$1);

return statearr_47291;
})();
if(cljs.core.truth_(inst_47195)){
var statearr_47294_48716 = state_47275__$1;
(statearr_47294_48716[(1)] = (5));

} else {
var statearr_47295_48717 = state_47275__$1;
(statearr_47295_48717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (15))){
var inst_47244 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47296_48718 = state_47275__$1;
(statearr_47296_48718[(2)] = inst_47244);

(statearr_47296_48718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (21))){
var inst_47265 = (state_47275[(2)]);
var state_47275__$1 = (function (){var statearr_47298 = state_47275;
(statearr_47298[(9)] = inst_47265);

return statearr_47298;
})();
var statearr_47301_48719 = state_47275__$1;
(statearr_47301_48719[(2)] = null);

(statearr_47301_48719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (13))){
var inst_47222 = (state_47275[(10)]);
var inst_47225 = cljs.core.chunked_seq_QMARK_(inst_47222);
var state_47275__$1 = state_47275;
if(inst_47225){
var statearr_47303_48720 = state_47275__$1;
(statearr_47303_48720[(1)] = (16));

} else {
var statearr_47305_48721 = state_47275__$1;
(statearr_47305_48721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (22))){
var inst_47257 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
if(cljs.core.truth_(inst_47257)){
var statearr_47306_48723 = state_47275__$1;
(statearr_47306_48723[(1)] = (23));

} else {
var statearr_47309_48724 = state_47275__$1;
(statearr_47309_48724[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (6))){
var inst_47252 = (state_47275[(11)]);
var inst_47250 = (state_47275[(7)]);
var inst_47193 = (state_47275[(8)]);
var inst_47250__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47193) : topic_fn.call(null,inst_47193));
var inst_47251 = cljs.core.deref(mults);
var inst_47252__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47251,inst_47250__$1);
var state_47275__$1 = (function (){var statearr_47312 = state_47275;
(statearr_47312[(11)] = inst_47252__$1);

(statearr_47312[(7)] = inst_47250__$1);

return statearr_47312;
})();
if(cljs.core.truth_(inst_47252__$1)){
var statearr_47313_48726 = state_47275__$1;
(statearr_47313_48726[(1)] = (19));

} else {
var statearr_47314_48727 = state_47275__$1;
(statearr_47314_48727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (25))){
var inst_47262 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47318_48728 = state_47275__$1;
(statearr_47318_48728[(2)] = inst_47262);

(statearr_47318_48728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (17))){
var inst_47222 = (state_47275[(10)]);
var inst_47233 = cljs.core.first(inst_47222);
var inst_47235 = cljs.core.async.muxch_STAR_(inst_47233);
var inst_47236 = cljs.core.async.close_BANG_(inst_47235);
var inst_47237 = cljs.core.next(inst_47222);
var inst_47204 = inst_47237;
var inst_47205 = null;
var inst_47206 = (0);
var inst_47207 = (0);
var state_47275__$1 = (function (){var statearr_47322 = state_47275;
(statearr_47322[(12)] = inst_47207);

(statearr_47322[(13)] = inst_47205);

(statearr_47322[(14)] = inst_47206);

(statearr_47322[(15)] = inst_47204);

(statearr_47322[(16)] = inst_47236);

return statearr_47322;
})();
var statearr_47323_48735 = state_47275__$1;
(statearr_47323_48735[(2)] = null);

(statearr_47323_48735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (3))){
var inst_47270 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47275__$1,inst_47270);
} else {
if((state_val_47276 === (12))){
var inst_47246 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47324_48736 = state_47275__$1;
(statearr_47324_48736[(2)] = inst_47246);

(statearr_47324_48736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (2))){
var state_47275__$1 = state_47275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47275__$1,(4),ch);
} else {
if((state_val_47276 === (23))){
var state_47275__$1 = state_47275;
var statearr_47325_48737 = state_47275__$1;
(statearr_47325_48737[(2)] = null);

(statearr_47325_48737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (19))){
var inst_47252 = (state_47275[(11)]);
var inst_47193 = (state_47275[(8)]);
var inst_47255 = cljs.core.async.muxch_STAR_(inst_47252);
var state_47275__$1 = state_47275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47275__$1,(22),inst_47255,inst_47193);
} else {
if((state_val_47276 === (11))){
var inst_47222 = (state_47275[(10)]);
var inst_47204 = (state_47275[(15)]);
var inst_47222__$1 = cljs.core.seq(inst_47204);
var state_47275__$1 = (function (){var statearr_47326 = state_47275;
(statearr_47326[(10)] = inst_47222__$1);

return statearr_47326;
})();
if(inst_47222__$1){
var statearr_47327_48738 = state_47275__$1;
(statearr_47327_48738[(1)] = (13));

} else {
var statearr_47328_48739 = state_47275__$1;
(statearr_47328_48739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (9))){
var inst_47248 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47329_48740 = state_47275__$1;
(statearr_47329_48740[(2)] = inst_47248);

(statearr_47329_48740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (5))){
var inst_47201 = cljs.core.deref(mults);
var inst_47202 = cljs.core.vals(inst_47201);
var inst_47203 = cljs.core.seq(inst_47202);
var inst_47204 = inst_47203;
var inst_47205 = null;
var inst_47206 = (0);
var inst_47207 = (0);
var state_47275__$1 = (function (){var statearr_47330 = state_47275;
(statearr_47330[(12)] = inst_47207);

(statearr_47330[(13)] = inst_47205);

(statearr_47330[(14)] = inst_47206);

(statearr_47330[(15)] = inst_47204);

return statearr_47330;
})();
var statearr_47331_48742 = state_47275__$1;
(statearr_47331_48742[(2)] = null);

(statearr_47331_48742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (14))){
var state_47275__$1 = state_47275;
var statearr_47335_48744 = state_47275__$1;
(statearr_47335_48744[(2)] = null);

(statearr_47335_48744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (16))){
var inst_47222 = (state_47275[(10)]);
var inst_47227 = cljs.core.chunk_first(inst_47222);
var inst_47228 = cljs.core.chunk_rest(inst_47222);
var inst_47229 = cljs.core.count(inst_47227);
var inst_47204 = inst_47228;
var inst_47205 = inst_47227;
var inst_47206 = inst_47229;
var inst_47207 = (0);
var state_47275__$1 = (function (){var statearr_47336 = state_47275;
(statearr_47336[(12)] = inst_47207);

(statearr_47336[(13)] = inst_47205);

(statearr_47336[(14)] = inst_47206);

(statearr_47336[(15)] = inst_47204);

return statearr_47336;
})();
var statearr_47337_48745 = state_47275__$1;
(statearr_47337_48745[(2)] = null);

(statearr_47337_48745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (10))){
var inst_47207 = (state_47275[(12)]);
var inst_47205 = (state_47275[(13)]);
var inst_47206 = (state_47275[(14)]);
var inst_47204 = (state_47275[(15)]);
var inst_47213 = cljs.core._nth(inst_47205,inst_47207);
var inst_47215 = cljs.core.async.muxch_STAR_(inst_47213);
var inst_47217 = cljs.core.async.close_BANG_(inst_47215);
var inst_47219 = (inst_47207 + (1));
var tmp47332 = inst_47205;
var tmp47333 = inst_47206;
var tmp47334 = inst_47204;
var inst_47204__$1 = tmp47334;
var inst_47205__$1 = tmp47332;
var inst_47206__$1 = tmp47333;
var inst_47207__$1 = inst_47219;
var state_47275__$1 = (function (){var statearr_47338 = state_47275;
(statearr_47338[(17)] = inst_47217);

(statearr_47338[(12)] = inst_47207__$1);

(statearr_47338[(13)] = inst_47205__$1);

(statearr_47338[(14)] = inst_47206__$1);

(statearr_47338[(15)] = inst_47204__$1);

return statearr_47338;
})();
var statearr_47339_48746 = state_47275__$1;
(statearr_47339_48746[(2)] = null);

(statearr_47339_48746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (18))){
var inst_47241 = (state_47275[(2)]);
var state_47275__$1 = state_47275;
var statearr_47340_48747 = state_47275__$1;
(statearr_47340_48747[(2)] = inst_47241);

(statearr_47340_48747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47276 === (8))){
var inst_47207 = (state_47275[(12)]);
var inst_47206 = (state_47275[(14)]);
var inst_47210 = (inst_47207 < inst_47206);
var inst_47211 = inst_47210;
var state_47275__$1 = state_47275;
if(cljs.core.truth_(inst_47211)){
var statearr_47341_48748 = state_47275__$1;
(statearr_47341_48748[(1)] = (10));

} else {
var statearr_47342_48749 = state_47275__$1;
(statearr_47342_48749[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47345[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47345[(1)] = (1));

return statearr_47345;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47275){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47275);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47346){var ex__45693__auto__ = e47346;
var statearr_47347_48751 = state_47275;
(statearr_47347_48751[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47275[(4)]))){
var statearr_47348_48752 = state_47275;
(statearr_47348_48752[(1)] = cljs.core.first((state_47275[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48753 = state_47275;
state_47275 = G__48753;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47349 = f__45911__auto__();
(statearr_47349[(6)] = c__45910__auto___48709);

return statearr_47349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47351 = arguments.length;
switch (G__47351) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47353 = arguments.length;
switch (G__47353) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47355 = arguments.length;
switch (G__47355) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__45910__auto___48763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47430){
var state_val_47431 = (state_47430[(1)]);
if((state_val_47431 === (7))){
var state_47430__$1 = state_47430;
var statearr_47440_48764 = state_47430__$1;
(statearr_47440_48764[(2)] = null);

(statearr_47440_48764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (1))){
var state_47430__$1 = state_47430;
var statearr_47441_48765 = state_47430__$1;
(statearr_47441_48765[(2)] = null);

(statearr_47441_48765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (4))){
var inst_47360 = (state_47430[(7)]);
var inst_47358 = (state_47430[(8)]);
var inst_47363 = (inst_47360 < inst_47358);
var state_47430__$1 = state_47430;
if(cljs.core.truth_(inst_47363)){
var statearr_47445_48771 = state_47430__$1;
(statearr_47445_48771[(1)] = (6));

} else {
var statearr_47447_48772 = state_47430__$1;
(statearr_47447_48772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (15))){
var inst_47416 = (state_47430[(9)]);
var inst_47421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47416);
var state_47430__$1 = state_47430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47430__$1,(17),out,inst_47421);
} else {
if((state_val_47431 === (13))){
var inst_47416 = (state_47430[(9)]);
var inst_47416__$1 = (state_47430[(2)]);
var inst_47417 = cljs.core.some(cljs.core.nil_QMARK_,inst_47416__$1);
var state_47430__$1 = (function (){var statearr_47451 = state_47430;
(statearr_47451[(9)] = inst_47416__$1);

return statearr_47451;
})();
if(cljs.core.truth_(inst_47417)){
var statearr_47453_48778 = state_47430__$1;
(statearr_47453_48778[(1)] = (14));

} else {
var statearr_47454_48779 = state_47430__$1;
(statearr_47454_48779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (6))){
var state_47430__$1 = state_47430;
var statearr_47455_48780 = state_47430__$1;
(statearr_47455_48780[(2)] = null);

(statearr_47455_48780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (17))){
var inst_47423 = (state_47430[(2)]);
var state_47430__$1 = (function (){var statearr_47462 = state_47430;
(statearr_47462[(10)] = inst_47423);

return statearr_47462;
})();
var statearr_47463_48781 = state_47430__$1;
(statearr_47463_48781[(2)] = null);

(statearr_47463_48781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (3))){
var inst_47428 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47430__$1,inst_47428);
} else {
if((state_val_47431 === (12))){
var _ = (function (){var statearr_47468 = state_47430;
(statearr_47468[(4)] = cljs.core.rest((state_47430[(4)])));

return statearr_47468;
})();
var state_47430__$1 = state_47430;
var ex47461 = (state_47430__$1[(2)]);
var statearr_47472_48782 = state_47430__$1;
(statearr_47472_48782[(5)] = ex47461);


if((ex47461 instanceof Object)){
var statearr_47474_48783 = state_47430__$1;
(statearr_47474_48783[(1)] = (11));

(statearr_47474_48783[(5)] = null);

} else {
throw ex47461;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (2))){
var inst_47357 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47358 = cnt;
var inst_47360 = (0);
var state_47430__$1 = (function (){var statearr_47482 = state_47430;
(statearr_47482[(11)] = inst_47357);

(statearr_47482[(7)] = inst_47360);

(statearr_47482[(8)] = inst_47358);

return statearr_47482;
})();
var statearr_47483_48784 = state_47430__$1;
(statearr_47483_48784[(2)] = null);

(statearr_47483_48784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (11))){
var inst_47386 = (state_47430[(2)]);
var inst_47387 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47430__$1 = (function (){var statearr_47485 = state_47430;
(statearr_47485[(12)] = inst_47386);

return statearr_47485;
})();
var statearr_47486_48790 = state_47430__$1;
(statearr_47486_48790[(2)] = inst_47387);

(statearr_47486_48790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (9))){
var inst_47360 = (state_47430[(7)]);
var _ = (function (){var statearr_47490 = state_47430;
(statearr_47490[(4)] = cljs.core.cons((12),(state_47430[(4)])));

return statearr_47490;
})();
var inst_47397 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47360) : chs__$1.call(null,inst_47360));
var inst_47398 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47360) : done.call(null,inst_47360));
var inst_47399 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47397,inst_47398);
var ___$1 = (function (){var statearr_47492 = state_47430;
(statearr_47492[(4)] = cljs.core.rest((state_47430[(4)])));

return statearr_47492;
})();
var state_47430__$1 = state_47430;
var statearr_47493_48795 = state_47430__$1;
(statearr_47493_48795[(2)] = inst_47399);

(statearr_47493_48795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (5))){
var inst_47413 = (state_47430[(2)]);
var state_47430__$1 = (function (){var statearr_47494 = state_47430;
(statearr_47494[(13)] = inst_47413);

return statearr_47494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47430__$1,(13),dchan);
} else {
if((state_val_47431 === (14))){
var inst_47419 = cljs.core.async.close_BANG_(out);
var state_47430__$1 = state_47430;
var statearr_47496_48799 = state_47430__$1;
(statearr_47496_48799[(2)] = inst_47419);

(statearr_47496_48799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (16))){
var inst_47426 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
var statearr_47497_48805 = state_47430__$1;
(statearr_47497_48805[(2)] = inst_47426);

(statearr_47497_48805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (10))){
var inst_47360 = (state_47430[(7)]);
var inst_47405 = (state_47430[(2)]);
var inst_47407 = (inst_47360 + (1));
var inst_47360__$1 = inst_47407;
var state_47430__$1 = (function (){var statearr_47498 = state_47430;
(statearr_47498[(14)] = inst_47405);

(statearr_47498[(7)] = inst_47360__$1);

return statearr_47498;
})();
var statearr_47499_48809 = state_47430__$1;
(statearr_47499_48809[(2)] = null);

(statearr_47499_48809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47431 === (8))){
var inst_47411 = (state_47430[(2)]);
var state_47430__$1 = state_47430;
var statearr_47500_48810 = state_47430__$1;
(statearr_47500_48810[(2)] = inst_47411);

(statearr_47500_48810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47508[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47508[(1)] = (1));

return statearr_47508;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47430){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47430);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47510){var ex__45693__auto__ = e47510;
var statearr_47511_48814 = state_47430;
(statearr_47511_48814[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47430[(4)]))){
var statearr_47512_48815 = state_47430;
(statearr_47512_48815[(1)] = cljs.core.first((state_47430[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48817 = state_47430;
state_47430 = G__48817;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47517 = f__45911__auto__();
(statearr_47517[(6)] = c__45910__auto___48763);

return statearr_47517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47524 = arguments.length;
switch (G__47524) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47564){
var state_val_47565 = (state_47564[(1)]);
if((state_val_47565 === (7))){
var inst_47540 = (state_47564[(7)]);
var inst_47539 = (state_47564[(8)]);
var inst_47539__$1 = (state_47564[(2)]);
var inst_47540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47539__$1,(0),null);
var inst_47541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47539__$1,(1),null);
var inst_47542 = (inst_47540__$1 == null);
var state_47564__$1 = (function (){var statearr_47567 = state_47564;
(statearr_47567[(7)] = inst_47540__$1);

(statearr_47567[(8)] = inst_47539__$1);

(statearr_47567[(9)] = inst_47541);

return statearr_47567;
})();
if(cljs.core.truth_(inst_47542)){
var statearr_47568_48827 = state_47564__$1;
(statearr_47568_48827[(1)] = (8));

} else {
var statearr_47569_48828 = state_47564__$1;
(statearr_47569_48828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (1))){
var inst_47529 = cljs.core.vec(chs);
var inst_47530 = inst_47529;
var state_47564__$1 = (function (){var statearr_47570 = state_47564;
(statearr_47570[(10)] = inst_47530);

return statearr_47570;
})();
var statearr_47571_48829 = state_47564__$1;
(statearr_47571_48829[(2)] = null);

(statearr_47571_48829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (4))){
var inst_47530 = (state_47564[(10)]);
var state_47564__$1 = state_47564;
return cljs.core.async.ioc_alts_BANG_(state_47564__$1,(7),inst_47530);
} else {
if((state_val_47565 === (6))){
var inst_47560 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47572_48830 = state_47564__$1;
(statearr_47572_48830[(2)] = inst_47560);

(statearr_47572_48830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (3))){
var inst_47562 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47564__$1,inst_47562);
} else {
if((state_val_47565 === (2))){
var inst_47530 = (state_47564[(10)]);
var inst_47532 = cljs.core.count(inst_47530);
var inst_47533 = (inst_47532 > (0));
var state_47564__$1 = state_47564;
if(cljs.core.truth_(inst_47533)){
var statearr_47574_48833 = state_47564__$1;
(statearr_47574_48833[(1)] = (4));

} else {
var statearr_47575_48834 = state_47564__$1;
(statearr_47575_48834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (11))){
var inst_47530 = (state_47564[(10)]);
var inst_47549 = (state_47564[(2)]);
var tmp47573 = inst_47530;
var inst_47530__$1 = tmp47573;
var state_47564__$1 = (function (){var statearr_47576 = state_47564;
(statearr_47576[(10)] = inst_47530__$1);

(statearr_47576[(11)] = inst_47549);

return statearr_47576;
})();
var statearr_47577_48835 = state_47564__$1;
(statearr_47577_48835[(2)] = null);

(statearr_47577_48835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (9))){
var inst_47540 = (state_47564[(7)]);
var state_47564__$1 = state_47564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47564__$1,(11),out,inst_47540);
} else {
if((state_val_47565 === (5))){
var inst_47558 = cljs.core.async.close_BANG_(out);
var state_47564__$1 = state_47564;
var statearr_47578_48843 = state_47564__$1;
(statearr_47578_48843[(2)] = inst_47558);

(statearr_47578_48843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (10))){
var inst_47552 = (state_47564[(2)]);
var state_47564__$1 = state_47564;
var statearr_47579_48844 = state_47564__$1;
(statearr_47579_48844[(2)] = inst_47552);

(statearr_47579_48844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47565 === (8))){
var inst_47530 = (state_47564[(10)]);
var inst_47540 = (state_47564[(7)]);
var inst_47539 = (state_47564[(8)]);
var inst_47541 = (state_47564[(9)]);
var inst_47544 = (function (){var cs = inst_47530;
var vec__47535 = inst_47539;
var v = inst_47540;
var c = inst_47541;
return (function (p1__47521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47521_SHARP_);
});
})();
var inst_47545 = cljs.core.filterv(inst_47544,inst_47530);
var inst_47530__$1 = inst_47545;
var state_47564__$1 = (function (){var statearr_47580 = state_47564;
(statearr_47580[(10)] = inst_47530__$1);

return statearr_47580;
})();
var statearr_47581_48848 = state_47564__$1;
(statearr_47581_48848[(2)] = null);

(statearr_47581_48848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47582[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47582[(1)] = (1));

return statearr_47582;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47564){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47564);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47583){var ex__45693__auto__ = e47583;
var statearr_47584_48849 = state_47564;
(statearr_47584_48849[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47564[(4)]))){
var statearr_47585_48850 = state_47564;
(statearr_47585_48850[(1)] = cljs.core.first((state_47564[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48851 = state_47564;
state_47564 = G__48851;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47586 = f__45911__auto__();
(statearr_47586[(6)] = c__45910__auto___48822);

return statearr_47586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47590 = arguments.length;
switch (G__47590) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47614){
var state_val_47615 = (state_47614[(1)]);
if((state_val_47615 === (7))){
var inst_47596 = (state_47614[(7)]);
var inst_47596__$1 = (state_47614[(2)]);
var inst_47597 = (inst_47596__$1 == null);
var inst_47598 = cljs.core.not(inst_47597);
var state_47614__$1 = (function (){var statearr_47616 = state_47614;
(statearr_47616[(7)] = inst_47596__$1);

return statearr_47616;
})();
if(inst_47598){
var statearr_47617_48857 = state_47614__$1;
(statearr_47617_48857[(1)] = (8));

} else {
var statearr_47618_48858 = state_47614__$1;
(statearr_47618_48858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (1))){
var inst_47591 = (0);
var state_47614__$1 = (function (){var statearr_47619 = state_47614;
(statearr_47619[(8)] = inst_47591);

return statearr_47619;
})();
var statearr_47620_48863 = state_47614__$1;
(statearr_47620_48863[(2)] = null);

(statearr_47620_48863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (4))){
var state_47614__$1 = state_47614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47614__$1,(7),ch);
} else {
if((state_val_47615 === (6))){
var inst_47609 = (state_47614[(2)]);
var state_47614__$1 = state_47614;
var statearr_47621_48864 = state_47614__$1;
(statearr_47621_48864[(2)] = inst_47609);

(statearr_47621_48864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (3))){
var inst_47611 = (state_47614[(2)]);
var inst_47612 = cljs.core.async.close_BANG_(out);
var state_47614__$1 = (function (){var statearr_47622 = state_47614;
(statearr_47622[(9)] = inst_47611);

return statearr_47622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47614__$1,inst_47612);
} else {
if((state_val_47615 === (2))){
var inst_47591 = (state_47614[(8)]);
var inst_47593 = (inst_47591 < n);
var state_47614__$1 = state_47614;
if(cljs.core.truth_(inst_47593)){
var statearr_47623_48865 = state_47614__$1;
(statearr_47623_48865[(1)] = (4));

} else {
var statearr_47624_48866 = state_47614__$1;
(statearr_47624_48866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (11))){
var inst_47591 = (state_47614[(8)]);
var inst_47601 = (state_47614[(2)]);
var inst_47602 = (inst_47591 + (1));
var inst_47591__$1 = inst_47602;
var state_47614__$1 = (function (){var statearr_47625 = state_47614;
(statearr_47625[(10)] = inst_47601);

(statearr_47625[(8)] = inst_47591__$1);

return statearr_47625;
})();
var statearr_47626_48867 = state_47614__$1;
(statearr_47626_48867[(2)] = null);

(statearr_47626_48867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (9))){
var state_47614__$1 = state_47614;
var statearr_47627_48868 = state_47614__$1;
(statearr_47627_48868[(2)] = null);

(statearr_47627_48868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (5))){
var state_47614__$1 = state_47614;
var statearr_47628_48869 = state_47614__$1;
(statearr_47628_48869[(2)] = null);

(statearr_47628_48869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (10))){
var inst_47606 = (state_47614[(2)]);
var state_47614__$1 = state_47614;
var statearr_47629_48870 = state_47614__$1;
(statearr_47629_48870[(2)] = inst_47606);

(statearr_47629_48870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47615 === (8))){
var inst_47596 = (state_47614[(7)]);
var state_47614__$1 = state_47614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47614__$1,(11),out,inst_47596);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47630[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47630[(1)] = (1));

return statearr_47630;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47614){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47614);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47631){var ex__45693__auto__ = e47631;
var statearr_47632_48875 = state_47614;
(statearr_47632_48875[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47614[(4)]))){
var statearr_47633_48876 = state_47614;
(statearr_47633_48876[(1)] = cljs.core.first((state_47614[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48877 = state_47614;
state_47614 = G__48877;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47634 = f__45911__auto__();
(statearr_47634[(6)] = c__45910__auto___48853);

return statearr_47634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47638 = (function (f,ch,meta47639){
this.f = f;
this.ch = ch;
this.meta47639 = meta47639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47640,meta47639__$1){
var self__ = this;
var _47640__$1 = this;
return (new cljs.core.async.t_cljs$core$async47638(self__.f,self__.ch,meta47639__$1));
}));

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47640){
var self__ = this;
var _47640__$1 = this;
return self__.meta47639;
}));

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47642 = (function (f,ch,meta47639,_,fn1,meta47643){
this.f = f;
this.ch = ch;
this.meta47639 = meta47639;
this._ = _;
this.fn1 = fn1;
this.meta47643 = meta47643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47644,meta47643__$1){
var self__ = this;
var _47644__$1 = this;
return (new cljs.core.async.t_cljs$core$async47642(self__.f,self__.ch,self__.meta47639,self__._,self__.fn1,meta47643__$1));
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47644){
var self__ = this;
var _47644__$1 = this;
return self__.meta47643;
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47635_SHARP_){
var G__47646 = (((p1__47635_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47635_SHARP_) : self__.f.call(null,p1__47635_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47646) : f1.call(null,G__47646));
});
}));

(cljs.core.async.t_cljs$core$async47642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47639","meta47639",-1456622561,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47638","cljs.core.async/t_cljs$core$async47638",1977003330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47643","meta47643",425181952,null)], null);
}));

(cljs.core.async.t_cljs$core$async47642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47642");

(cljs.core.async.t_cljs$core$async47642.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47642.
 */
cljs.core.async.__GT_t_cljs$core$async47642 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47642(f__$1,ch__$1,meta47639__$1,___$2,fn1__$1,meta47643){
return (new cljs.core.async.t_cljs$core$async47642(f__$1,ch__$1,meta47639__$1,___$2,fn1__$1,meta47643));
});

}

return (new cljs.core.async.t_cljs$core$async47642(self__.f,self__.ch,self__.meta47639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47649 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47649) : self__.f.call(null,G__47649));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47639","meta47639",-1456622561,null)], null);
}));

(cljs.core.async.t_cljs$core$async47638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47638");

(cljs.core.async.t_cljs$core$async47638.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47638.
 */
cljs.core.async.__GT_t_cljs$core$async47638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47638(f__$1,ch__$1,meta47639){
return (new cljs.core.async.t_cljs$core$async47638(f__$1,ch__$1,meta47639));
});

}

return (new cljs.core.async.t_cljs$core$async47638(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47650 = (function (f,ch,meta47651){
this.f = f;
this.ch = ch;
this.meta47651 = meta47651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47652,meta47651__$1){
var self__ = this;
var _47652__$1 = this;
return (new cljs.core.async.t_cljs$core$async47650(self__.f,self__.ch,meta47651__$1));
}));

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47652){
var self__ = this;
var _47652__$1 = this;
return self__.meta47651;
}));

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47651","meta47651",-2029012643,null)], null);
}));

(cljs.core.async.t_cljs$core$async47650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47650");

(cljs.core.async.t_cljs$core$async47650.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47650.
 */
cljs.core.async.__GT_t_cljs$core$async47650 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47650(f__$1,ch__$1,meta47651){
return (new cljs.core.async.t_cljs$core$async47650(f__$1,ch__$1,meta47651));
});

}

return (new cljs.core.async.t_cljs$core$async47650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47660 = (function (p,ch,meta47661){
this.p = p;
this.ch = ch;
this.meta47661 = meta47661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47662,meta47661__$1){
var self__ = this;
var _47662__$1 = this;
return (new cljs.core.async.t_cljs$core$async47660(self__.p,self__.ch,meta47661__$1));
}));

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47662){
var self__ = this;
var _47662__$1 = this;
return self__.meta47661;
}));

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47661","meta47661",1010022699,null)], null);
}));

(cljs.core.async.t_cljs$core$async47660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47660");

(cljs.core.async.t_cljs$core$async47660.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47660.
 */
cljs.core.async.__GT_t_cljs$core$async47660 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47660(p__$1,ch__$1,meta47661){
return (new cljs.core.async.t_cljs$core$async47660(p__$1,ch__$1,meta47661));
});

}

return (new cljs.core.async.t_cljs$core$async47660(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47690 = arguments.length;
switch (G__47690) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47721){
var state_val_47722 = (state_47721[(1)]);
if((state_val_47722 === (7))){
var inst_47717 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
var statearr_47726_48887 = state_47721__$1;
(statearr_47726_48887[(2)] = inst_47717);

(statearr_47726_48887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (1))){
var state_47721__$1 = state_47721;
var statearr_47727_48888 = state_47721__$1;
(statearr_47727_48888[(2)] = null);

(statearr_47727_48888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (4))){
var inst_47700 = (state_47721[(7)]);
var inst_47700__$1 = (state_47721[(2)]);
var inst_47704 = (inst_47700__$1 == null);
var state_47721__$1 = (function (){var statearr_47728 = state_47721;
(statearr_47728[(7)] = inst_47700__$1);

return statearr_47728;
})();
if(cljs.core.truth_(inst_47704)){
var statearr_47729_48892 = state_47721__$1;
(statearr_47729_48892[(1)] = (5));

} else {
var statearr_47730_48893 = state_47721__$1;
(statearr_47730_48893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (6))){
var inst_47700 = (state_47721[(7)]);
var inst_47708 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47700) : p.call(null,inst_47700));
var state_47721__$1 = state_47721;
if(cljs.core.truth_(inst_47708)){
var statearr_47731_48894 = state_47721__$1;
(statearr_47731_48894[(1)] = (8));

} else {
var statearr_47732_48895 = state_47721__$1;
(statearr_47732_48895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (3))){
var inst_47719 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47721__$1,inst_47719);
} else {
if((state_val_47722 === (2))){
var state_47721__$1 = state_47721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47721__$1,(4),ch);
} else {
if((state_val_47722 === (11))){
var inst_47711 = (state_47721[(2)]);
var state_47721__$1 = state_47721;
var statearr_47737_48896 = state_47721__$1;
(statearr_47737_48896[(2)] = inst_47711);

(statearr_47737_48896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (9))){
var state_47721__$1 = state_47721;
var statearr_47738_48897 = state_47721__$1;
(statearr_47738_48897[(2)] = null);

(statearr_47738_48897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (5))){
var inst_47706 = cljs.core.async.close_BANG_(out);
var state_47721__$1 = state_47721;
var statearr_47739_48898 = state_47721__$1;
(statearr_47739_48898[(2)] = inst_47706);

(statearr_47739_48898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (10))){
var inst_47714 = (state_47721[(2)]);
var state_47721__$1 = (function (){var statearr_47740 = state_47721;
(statearr_47740[(8)] = inst_47714);

return statearr_47740;
})();
var statearr_47741_48899 = state_47721__$1;
(statearr_47741_48899[(2)] = null);

(statearr_47741_48899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47722 === (8))){
var inst_47700 = (state_47721[(7)]);
var state_47721__$1 = state_47721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47721__$1,(11),out,inst_47700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47742 = [null,null,null,null,null,null,null,null,null];
(statearr_47742[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47742[(1)] = (1));

return statearr_47742;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47721){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47721);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47743){var ex__45693__auto__ = e47743;
var statearr_47744_48900 = state_47721;
(statearr_47744_48900[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47721[(4)]))){
var statearr_47745_48901 = state_47721;
(statearr_47745_48901[(1)] = cljs.core.first((state_47721[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48902 = state_47721;
state_47721 = G__48902;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47747 = f__45911__auto__();
(statearr_47747[(6)] = c__45910__auto___48885);

return statearr_47747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47754 = arguments.length;
switch (G__47754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45910__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47819){
var state_val_47821 = (state_47819[(1)]);
if((state_val_47821 === (7))){
var inst_47814 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
var statearr_47822_48905 = state_47819__$1;
(statearr_47822_48905[(2)] = inst_47814);

(statearr_47822_48905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (20))){
var inst_47784 = (state_47819[(7)]);
var inst_47795 = (state_47819[(2)]);
var inst_47796 = cljs.core.next(inst_47784);
var inst_47770 = inst_47796;
var inst_47771 = null;
var inst_47772 = (0);
var inst_47773 = (0);
var state_47819__$1 = (function (){var statearr_47824 = state_47819;
(statearr_47824[(8)] = inst_47795);

(statearr_47824[(9)] = inst_47773);

(statearr_47824[(10)] = inst_47772);

(statearr_47824[(11)] = inst_47771);

(statearr_47824[(12)] = inst_47770);

return statearr_47824;
})();
var statearr_47825_48906 = state_47819__$1;
(statearr_47825_48906[(2)] = null);

(statearr_47825_48906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (1))){
var state_47819__$1 = state_47819;
var statearr_47830_48907 = state_47819__$1;
(statearr_47830_48907[(2)] = null);

(statearr_47830_48907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (4))){
var inst_47759 = (state_47819[(13)]);
var inst_47759__$1 = (state_47819[(2)]);
var inst_47760 = (inst_47759__$1 == null);
var state_47819__$1 = (function (){var statearr_47831 = state_47819;
(statearr_47831[(13)] = inst_47759__$1);

return statearr_47831;
})();
if(cljs.core.truth_(inst_47760)){
var statearr_47832_48908 = state_47819__$1;
(statearr_47832_48908[(1)] = (5));

} else {
var statearr_47833_48909 = state_47819__$1;
(statearr_47833_48909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (15))){
var state_47819__$1 = state_47819;
var statearr_47837_48910 = state_47819__$1;
(statearr_47837_48910[(2)] = null);

(statearr_47837_48910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (21))){
var state_47819__$1 = state_47819;
var statearr_47838_48911 = state_47819__$1;
(statearr_47838_48911[(2)] = null);

(statearr_47838_48911[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (13))){
var inst_47773 = (state_47819[(9)]);
var inst_47772 = (state_47819[(10)]);
var inst_47771 = (state_47819[(11)]);
var inst_47770 = (state_47819[(12)]);
var inst_47780 = (state_47819[(2)]);
var inst_47781 = (inst_47773 + (1));
var tmp47834 = inst_47772;
var tmp47835 = inst_47771;
var tmp47836 = inst_47770;
var inst_47770__$1 = tmp47836;
var inst_47771__$1 = tmp47835;
var inst_47772__$1 = tmp47834;
var inst_47773__$1 = inst_47781;
var state_47819__$1 = (function (){var statearr_47839 = state_47819;
(statearr_47839[(14)] = inst_47780);

(statearr_47839[(9)] = inst_47773__$1);

(statearr_47839[(10)] = inst_47772__$1);

(statearr_47839[(11)] = inst_47771__$1);

(statearr_47839[(12)] = inst_47770__$1);

return statearr_47839;
})();
var statearr_47840_48916 = state_47819__$1;
(statearr_47840_48916[(2)] = null);

(statearr_47840_48916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (22))){
var state_47819__$1 = state_47819;
var statearr_47841_48917 = state_47819__$1;
(statearr_47841_48917[(2)] = null);

(statearr_47841_48917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (6))){
var inst_47759 = (state_47819[(13)]);
var inst_47768 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47759) : f.call(null,inst_47759));
var inst_47769 = cljs.core.seq(inst_47768);
var inst_47770 = inst_47769;
var inst_47771 = null;
var inst_47772 = (0);
var inst_47773 = (0);
var state_47819__$1 = (function (){var statearr_47842 = state_47819;
(statearr_47842[(9)] = inst_47773);

(statearr_47842[(10)] = inst_47772);

(statearr_47842[(11)] = inst_47771);

(statearr_47842[(12)] = inst_47770);

return statearr_47842;
})();
var statearr_47843_48919 = state_47819__$1;
(statearr_47843_48919[(2)] = null);

(statearr_47843_48919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (17))){
var inst_47784 = (state_47819[(7)]);
var inst_47788 = cljs.core.chunk_first(inst_47784);
var inst_47789 = cljs.core.chunk_rest(inst_47784);
var inst_47790 = cljs.core.count(inst_47788);
var inst_47770 = inst_47789;
var inst_47771 = inst_47788;
var inst_47772 = inst_47790;
var inst_47773 = (0);
var state_47819__$1 = (function (){var statearr_47844 = state_47819;
(statearr_47844[(9)] = inst_47773);

(statearr_47844[(10)] = inst_47772);

(statearr_47844[(11)] = inst_47771);

(statearr_47844[(12)] = inst_47770);

return statearr_47844;
})();
var statearr_47845_48920 = state_47819__$1;
(statearr_47845_48920[(2)] = null);

(statearr_47845_48920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (3))){
var inst_47816 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47819__$1,inst_47816);
} else {
if((state_val_47821 === (12))){
var inst_47804 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
var statearr_47846_48921 = state_47819__$1;
(statearr_47846_48921[(2)] = inst_47804);

(statearr_47846_48921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (2))){
var state_47819__$1 = state_47819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47819__$1,(4),in$);
} else {
if((state_val_47821 === (23))){
var inst_47812 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
var statearr_47847_48923 = state_47819__$1;
(statearr_47847_48923[(2)] = inst_47812);

(statearr_47847_48923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (19))){
var inst_47799 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
var statearr_47848_48924 = state_47819__$1;
(statearr_47848_48924[(2)] = inst_47799);

(statearr_47848_48924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (11))){
var inst_47770 = (state_47819[(12)]);
var inst_47784 = (state_47819[(7)]);
var inst_47784__$1 = cljs.core.seq(inst_47770);
var state_47819__$1 = (function (){var statearr_47849 = state_47819;
(statearr_47849[(7)] = inst_47784__$1);

return statearr_47849;
})();
if(inst_47784__$1){
var statearr_47850_48925 = state_47819__$1;
(statearr_47850_48925[(1)] = (14));

} else {
var statearr_47851_48926 = state_47819__$1;
(statearr_47851_48926[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (9))){
var inst_47806 = (state_47819[(2)]);
var inst_47807 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47819__$1 = (function (){var statearr_47852 = state_47819;
(statearr_47852[(15)] = inst_47806);

return statearr_47852;
})();
if(cljs.core.truth_(inst_47807)){
var statearr_47853_48931 = state_47819__$1;
(statearr_47853_48931[(1)] = (21));

} else {
var statearr_47854_48932 = state_47819__$1;
(statearr_47854_48932[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (5))){
var inst_47762 = cljs.core.async.close_BANG_(out);
var state_47819__$1 = state_47819;
var statearr_47855_48933 = state_47819__$1;
(statearr_47855_48933[(2)] = inst_47762);

(statearr_47855_48933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (14))){
var inst_47784 = (state_47819[(7)]);
var inst_47786 = cljs.core.chunked_seq_QMARK_(inst_47784);
var state_47819__$1 = state_47819;
if(inst_47786){
var statearr_47856_48934 = state_47819__$1;
(statearr_47856_48934[(1)] = (17));

} else {
var statearr_47857_48935 = state_47819__$1;
(statearr_47857_48935[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (16))){
var inst_47802 = (state_47819[(2)]);
var state_47819__$1 = state_47819;
var statearr_47858_48936 = state_47819__$1;
(statearr_47858_48936[(2)] = inst_47802);

(statearr_47858_48936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (10))){
var inst_47773 = (state_47819[(9)]);
var inst_47771 = (state_47819[(11)]);
var inst_47778 = cljs.core._nth(inst_47771,inst_47773);
var state_47819__$1 = state_47819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47819__$1,(13),out,inst_47778);
} else {
if((state_val_47821 === (18))){
var inst_47784 = (state_47819[(7)]);
var inst_47793 = cljs.core.first(inst_47784);
var state_47819__$1 = state_47819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47819__$1,(20),out,inst_47793);
} else {
if((state_val_47821 === (8))){
var inst_47773 = (state_47819[(9)]);
var inst_47772 = (state_47819[(10)]);
var inst_47775 = (inst_47773 < inst_47772);
var inst_47776 = inst_47775;
var state_47819__$1 = state_47819;
if(cljs.core.truth_(inst_47776)){
var statearr_47859_48937 = state_47819__$1;
(statearr_47859_48937[(1)] = (10));

} else {
var statearr_47860_48938 = state_47819__$1;
(statearr_47860_48938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____0 = (function (){
var statearr_47861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47861[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__);

(statearr_47861[(1)] = (1));

return statearr_47861;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____1 = (function (state_47819){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47819);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47862){var ex__45693__auto__ = e47862;
var statearr_47863_48939 = state_47819;
(statearr_47863_48939[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47819[(4)]))){
var statearr_47864_48940 = state_47819;
(statearr_47864_48940[(1)] = cljs.core.first((state_47819[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48941 = state_47819;
state_47819 = G__48941;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__ = function(state_47819){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____1.call(this,state_47819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45690__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47865 = f__45911__auto__();
(statearr_47865[(6)] = c__45910__auto__);

return statearr_47865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

return c__45910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47867 = arguments.length;
switch (G__47867) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47874 = arguments.length;
switch (G__47874) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47878 = arguments.length;
switch (G__47878) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47907){
var state_val_47908 = (state_47907[(1)]);
if((state_val_47908 === (7))){
var inst_47902 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47909_48946 = state_47907__$1;
(statearr_47909_48946[(2)] = inst_47902);

(statearr_47909_48946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (1))){
var inst_47884 = null;
var state_47907__$1 = (function (){var statearr_47910 = state_47907;
(statearr_47910[(7)] = inst_47884);

return statearr_47910;
})();
var statearr_47911_48948 = state_47907__$1;
(statearr_47911_48948[(2)] = null);

(statearr_47911_48948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (4))){
var inst_47887 = (state_47907[(8)]);
var inst_47887__$1 = (state_47907[(2)]);
var inst_47888 = (inst_47887__$1 == null);
var inst_47889 = cljs.core.not(inst_47888);
var state_47907__$1 = (function (){var statearr_47912 = state_47907;
(statearr_47912[(8)] = inst_47887__$1);

return statearr_47912;
})();
if(inst_47889){
var statearr_47913_48949 = state_47907__$1;
(statearr_47913_48949[(1)] = (5));

} else {
var statearr_47914_48950 = state_47907__$1;
(statearr_47914_48950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (6))){
var state_47907__$1 = state_47907;
var statearr_47915_48954 = state_47907__$1;
(statearr_47915_48954[(2)] = null);

(statearr_47915_48954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (3))){
var inst_47904 = (state_47907[(2)]);
var inst_47905 = cljs.core.async.close_BANG_(out);
var state_47907__$1 = (function (){var statearr_47916 = state_47907;
(statearr_47916[(9)] = inst_47904);

return statearr_47916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47907__$1,inst_47905);
} else {
if((state_val_47908 === (2))){
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47907__$1,(4),ch);
} else {
if((state_val_47908 === (11))){
var inst_47887 = (state_47907[(8)]);
var inst_47896 = (state_47907[(2)]);
var inst_47884 = inst_47887;
var state_47907__$1 = (function (){var statearr_47917 = state_47907;
(statearr_47917[(10)] = inst_47896);

(statearr_47917[(7)] = inst_47884);

return statearr_47917;
})();
var statearr_47918_48955 = state_47907__$1;
(statearr_47918_48955[(2)] = null);

(statearr_47918_48955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (9))){
var inst_47887 = (state_47907[(8)]);
var state_47907__$1 = state_47907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47907__$1,(11),out,inst_47887);
} else {
if((state_val_47908 === (5))){
var inst_47887 = (state_47907[(8)]);
var inst_47884 = (state_47907[(7)]);
var inst_47891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47887,inst_47884);
var state_47907__$1 = state_47907;
if(inst_47891){
var statearr_47920_48956 = state_47907__$1;
(statearr_47920_48956[(1)] = (8));

} else {
var statearr_47921_48957 = state_47907__$1;
(statearr_47921_48957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (10))){
var inst_47899 = (state_47907[(2)]);
var state_47907__$1 = state_47907;
var statearr_47922_48958 = state_47907__$1;
(statearr_47922_48958[(2)] = inst_47899);

(statearr_47922_48958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47908 === (8))){
var inst_47884 = (state_47907[(7)]);
var tmp47919 = inst_47884;
var inst_47884__$1 = tmp47919;
var state_47907__$1 = (function (){var statearr_47923 = state_47907;
(statearr_47923[(7)] = inst_47884__$1);

return statearr_47923;
})();
var statearr_47924_48959 = state_47907__$1;
(statearr_47924_48959[(2)] = null);

(statearr_47924_48959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_47926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47926[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_47926[(1)] = (1));

return statearr_47926;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47907){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47907);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e47930){var ex__45693__auto__ = e47930;
var statearr_47931_48960 = state_47907;
(statearr_47931_48960[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47907[(4)]))){
var statearr_47932_48961 = state_47907;
(statearr_47932_48961[(1)] = cljs.core.first((state_47907[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48962 = state_47907;
state_47907 = G__48962;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_47933 = f__45911__auto__();
(statearr_47933[(6)] = c__45910__auto___48945);

return statearr_47933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47935 = arguments.length;
switch (G__47935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_47977){
var state_val_47978 = (state_47977[(1)]);
if((state_val_47978 === (7))){
var inst_47973 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47979_48966 = state_47977__$1;
(statearr_47979_48966[(2)] = inst_47973);

(statearr_47979_48966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (1))){
var inst_47940 = (new Array(n));
var inst_47941 = inst_47940;
var inst_47942 = (0);
var state_47977__$1 = (function (){var statearr_47980 = state_47977;
(statearr_47980[(7)] = inst_47942);

(statearr_47980[(8)] = inst_47941);

return statearr_47980;
})();
var statearr_47982_48967 = state_47977__$1;
(statearr_47982_48967[(2)] = null);

(statearr_47982_48967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (4))){
var inst_47945 = (state_47977[(9)]);
var inst_47945__$1 = (state_47977[(2)]);
var inst_47946 = (inst_47945__$1 == null);
var inst_47947 = cljs.core.not(inst_47946);
var state_47977__$1 = (function (){var statearr_47984 = state_47977;
(statearr_47984[(9)] = inst_47945__$1);

return statearr_47984;
})();
if(inst_47947){
var statearr_47985_48968 = state_47977__$1;
(statearr_47985_48968[(1)] = (5));

} else {
var statearr_47986_48969 = state_47977__$1;
(statearr_47986_48969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (15))){
var inst_47967 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_47987_48970 = state_47977__$1;
(statearr_47987_48970[(2)] = inst_47967);

(statearr_47987_48970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (13))){
var state_47977__$1 = state_47977;
var statearr_47991_48971 = state_47977__$1;
(statearr_47991_48971[(2)] = null);

(statearr_47991_48971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (6))){
var inst_47942 = (state_47977[(7)]);
var inst_47963 = (inst_47942 > (0));
var state_47977__$1 = state_47977;
if(cljs.core.truth_(inst_47963)){
var statearr_47992_48972 = state_47977__$1;
(statearr_47992_48972[(1)] = (12));

} else {
var statearr_47993_48973 = state_47977__$1;
(statearr_47993_48973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (3))){
var inst_47975 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47977__$1,inst_47975);
} else {
if((state_val_47978 === (12))){
var inst_47941 = (state_47977[(8)]);
var inst_47965 = cljs.core.vec(inst_47941);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47977__$1,(15),out,inst_47965);
} else {
if((state_val_47978 === (2))){
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47977__$1,(4),ch);
} else {
if((state_val_47978 === (11))){
var inst_47957 = (state_47977[(2)]);
var inst_47958 = (new Array(n));
var inst_47941 = inst_47958;
var inst_47942 = (0);
var state_47977__$1 = (function (){var statearr_47994 = state_47977;
(statearr_47994[(7)] = inst_47942);

(statearr_47994[(8)] = inst_47941);

(statearr_47994[(10)] = inst_47957);

return statearr_47994;
})();
var statearr_47995_48974 = state_47977__$1;
(statearr_47995_48974[(2)] = null);

(statearr_47995_48974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (9))){
var inst_47941 = (state_47977[(8)]);
var inst_47955 = cljs.core.vec(inst_47941);
var state_47977__$1 = state_47977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47977__$1,(11),out,inst_47955);
} else {
if((state_val_47978 === (5))){
var inst_47945 = (state_47977[(9)]);
var inst_47950 = (state_47977[(11)]);
var inst_47942 = (state_47977[(7)]);
var inst_47941 = (state_47977[(8)]);
var inst_47949 = (inst_47941[inst_47942] = inst_47945);
var inst_47950__$1 = (inst_47942 + (1));
var inst_47951 = (inst_47950__$1 < n);
var state_47977__$1 = (function (){var statearr_47996 = state_47977;
(statearr_47996[(11)] = inst_47950__$1);

(statearr_47996[(12)] = inst_47949);

return statearr_47996;
})();
if(cljs.core.truth_(inst_47951)){
var statearr_47997_48975 = state_47977__$1;
(statearr_47997_48975[(1)] = (8));

} else {
var statearr_47998_48976 = state_47977__$1;
(statearr_47998_48976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (14))){
var inst_47970 = (state_47977[(2)]);
var inst_47971 = cljs.core.async.close_BANG_(out);
var state_47977__$1 = (function (){var statearr_48000 = state_47977;
(statearr_48000[(13)] = inst_47970);

return statearr_48000;
})();
var statearr_48001_48977 = state_47977__$1;
(statearr_48001_48977[(2)] = inst_47971);

(statearr_48001_48977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (10))){
var inst_47961 = (state_47977[(2)]);
var state_47977__$1 = state_47977;
var statearr_48002_48978 = state_47977__$1;
(statearr_48002_48978[(2)] = inst_47961);

(statearr_48002_48978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47978 === (8))){
var inst_47950 = (state_47977[(11)]);
var inst_47941 = (state_47977[(8)]);
var tmp47999 = inst_47941;
var inst_47941__$1 = tmp47999;
var inst_47942 = inst_47950;
var state_47977__$1 = (function (){var statearr_48003 = state_47977;
(statearr_48003[(7)] = inst_47942);

(statearr_48003[(8)] = inst_47941__$1);

return statearr_48003;
})();
var statearr_48004_48979 = state_47977__$1;
(statearr_48004_48979[(2)] = null);

(statearr_48004_48979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_48005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48005[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_48005[(1)] = (1));

return statearr_48005;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_47977){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_47977);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e48006){var ex__45693__auto__ = e48006;
var statearr_48007_48984 = state_47977;
(statearr_48007_48984[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_47977[(4)]))){
var statearr_48008_48985 = state_47977;
(statearr_48008_48985[(1)] = cljs.core.first((state_47977[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48986 = state_47977;
state_47977 = G__48986;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_47977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_47977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_48010 = f__45911__auto__();
(statearr_48010[(6)] = c__45910__auto___48965);

return statearr_48010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48012 = arguments.length;
switch (G__48012) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45910__auto___48992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_48060){
var state_val_48061 = (state_48060[(1)]);
if((state_val_48061 === (7))){
var inst_48053 = (state_48060[(2)]);
var state_48060__$1 = state_48060;
var statearr_48062_48995 = state_48060__$1;
(statearr_48062_48995[(2)] = inst_48053);

(statearr_48062_48995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (1))){
var inst_48013 = [];
var inst_48014 = inst_48013;
var inst_48015 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48060__$1 = (function (){var statearr_48064 = state_48060;
(statearr_48064[(7)] = inst_48015);

(statearr_48064[(8)] = inst_48014);

return statearr_48064;
})();
var statearr_48068_48996 = state_48060__$1;
(statearr_48068_48996[(2)] = null);

(statearr_48068_48996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (4))){
var inst_48018 = (state_48060[(9)]);
var inst_48018__$1 = (state_48060[(2)]);
var inst_48019 = (inst_48018__$1 == null);
var inst_48020 = cljs.core.not(inst_48019);
var state_48060__$1 = (function (){var statearr_48069 = state_48060;
(statearr_48069[(9)] = inst_48018__$1);

return statearr_48069;
})();
if(inst_48020){
var statearr_48070_48997 = state_48060__$1;
(statearr_48070_48997[(1)] = (5));

} else {
var statearr_48071_48998 = state_48060__$1;
(statearr_48071_48998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (15))){
var inst_48014 = (state_48060[(8)]);
var inst_48045 = cljs.core.vec(inst_48014);
var state_48060__$1 = state_48060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48060__$1,(18),out,inst_48045);
} else {
if((state_val_48061 === (13))){
var inst_48040 = (state_48060[(2)]);
var state_48060__$1 = state_48060;
var statearr_48072_48999 = state_48060__$1;
(statearr_48072_48999[(2)] = inst_48040);

(statearr_48072_48999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (6))){
var inst_48014 = (state_48060[(8)]);
var inst_48042 = inst_48014.length;
var inst_48043 = (inst_48042 > (0));
var state_48060__$1 = state_48060;
if(cljs.core.truth_(inst_48043)){
var statearr_48073_49000 = state_48060__$1;
(statearr_48073_49000[(1)] = (15));

} else {
var statearr_48074_49001 = state_48060__$1;
(statearr_48074_49001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (17))){
var inst_48050 = (state_48060[(2)]);
var inst_48051 = cljs.core.async.close_BANG_(out);
var state_48060__$1 = (function (){var statearr_48075 = state_48060;
(statearr_48075[(10)] = inst_48050);

return statearr_48075;
})();
var statearr_48076_49002 = state_48060__$1;
(statearr_48076_49002[(2)] = inst_48051);

(statearr_48076_49002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (3))){
var inst_48055 = (state_48060[(2)]);
var state_48060__$1 = state_48060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48060__$1,inst_48055);
} else {
if((state_val_48061 === (12))){
var inst_48014 = (state_48060[(8)]);
var inst_48033 = cljs.core.vec(inst_48014);
var state_48060__$1 = state_48060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48060__$1,(14),out,inst_48033);
} else {
if((state_val_48061 === (2))){
var state_48060__$1 = state_48060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48060__$1,(4),ch);
} else {
if((state_val_48061 === (11))){
var inst_48018 = (state_48060[(9)]);
var inst_48014 = (state_48060[(8)]);
var inst_48022 = (state_48060[(11)]);
var inst_48030 = inst_48014.push(inst_48018);
var tmp48077 = inst_48014;
var inst_48014__$1 = tmp48077;
var inst_48015 = inst_48022;
var state_48060__$1 = (function (){var statearr_48078 = state_48060;
(statearr_48078[(12)] = inst_48030);

(statearr_48078[(7)] = inst_48015);

(statearr_48078[(8)] = inst_48014__$1);

return statearr_48078;
})();
var statearr_48079_49003 = state_48060__$1;
(statearr_48079_49003[(2)] = null);

(statearr_48079_49003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (9))){
var inst_48015 = (state_48060[(7)]);
var inst_48026 = cljs.core.keyword_identical_QMARK_(inst_48015,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48060__$1 = state_48060;
var statearr_48080_49004 = state_48060__$1;
(statearr_48080_49004[(2)] = inst_48026);

(statearr_48080_49004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (5))){
var inst_48023 = (state_48060[(13)]);
var inst_48018 = (state_48060[(9)]);
var inst_48015 = (state_48060[(7)]);
var inst_48022 = (state_48060[(11)]);
var inst_48022__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48018) : f.call(null,inst_48018));
var inst_48023__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48022__$1,inst_48015);
var state_48060__$1 = (function (){var statearr_48081 = state_48060;
(statearr_48081[(13)] = inst_48023__$1);

(statearr_48081[(11)] = inst_48022__$1);

return statearr_48081;
})();
if(inst_48023__$1){
var statearr_48082_49005 = state_48060__$1;
(statearr_48082_49005[(1)] = (8));

} else {
var statearr_48083_49006 = state_48060__$1;
(statearr_48083_49006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (14))){
var inst_48018 = (state_48060[(9)]);
var inst_48022 = (state_48060[(11)]);
var inst_48035 = (state_48060[(2)]);
var inst_48036 = [];
var inst_48037 = inst_48036.push(inst_48018);
var inst_48014 = inst_48036;
var inst_48015 = inst_48022;
var state_48060__$1 = (function (){var statearr_48084 = state_48060;
(statearr_48084[(14)] = inst_48035);

(statearr_48084[(7)] = inst_48015);

(statearr_48084[(15)] = inst_48037);

(statearr_48084[(8)] = inst_48014);

return statearr_48084;
})();
var statearr_48085_49008 = state_48060__$1;
(statearr_48085_49008[(2)] = null);

(statearr_48085_49008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (16))){
var state_48060__$1 = state_48060;
var statearr_48086_49009 = state_48060__$1;
(statearr_48086_49009[(2)] = null);

(statearr_48086_49009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (10))){
var inst_48028 = (state_48060[(2)]);
var state_48060__$1 = state_48060;
if(cljs.core.truth_(inst_48028)){
var statearr_48087_49010 = state_48060__$1;
(statearr_48087_49010[(1)] = (11));

} else {
var statearr_48088_49011 = state_48060__$1;
(statearr_48088_49011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (18))){
var inst_48047 = (state_48060[(2)]);
var state_48060__$1 = state_48060;
var statearr_48097_49012 = state_48060__$1;
(statearr_48097_49012[(2)] = inst_48047);

(statearr_48097_49012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48061 === (8))){
var inst_48023 = (state_48060[(13)]);
var state_48060__$1 = state_48060;
var statearr_48104_49013 = state_48060__$1;
(statearr_48104_49013[(2)] = inst_48023);

(statearr_48104_49013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45690__auto__ = null;
var cljs$core$async$state_machine__45690__auto____0 = (function (){
var statearr_48111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48111[(0)] = cljs$core$async$state_machine__45690__auto__);

(statearr_48111[(1)] = (1));

return statearr_48111;
});
var cljs$core$async$state_machine__45690__auto____1 = (function (state_48060){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_48060);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e48112){var ex__45693__auto__ = e48112;
var statearr_48113_49014 = state_48060;
(statearr_48113_49014[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_48060[(4)]))){
var statearr_48114_49015 = state_48060;
(statearr_48114_49015[(1)] = cljs.core.first((state_48060[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49016 = state_48060;
state_48060 = G__49016;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
cljs$core$async$state_machine__45690__auto__ = function(state_48060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45690__auto____1.call(this,state_48060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45690__auto____0;
cljs$core$async$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45690__auto____1;
return cljs$core$async$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_48115 = f__45911__auto__();
(statearr_48115[(6)] = c__45910__auto___48992);

return statearr_48115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
