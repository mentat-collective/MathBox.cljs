goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54836 = arguments.length;
switch (G__54836) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54838 = (function (f,blockable,meta54839){
this.f = f;
this.blockable = blockable;
this.meta54839 = meta54839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54840,meta54839__$1){
var self__ = this;
var _54840__$1 = this;
return (new cljs.core.async.t_cljs$core$async54838(self__.f,self__.blockable,meta54839__$1));
}));

(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54840){
var self__ = this;
var _54840__$1 = this;
return self__.meta54839;
}));

(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54839","meta54839",-1317676334,null)], null);
}));

(cljs.core.async.t_cljs$core$async54838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54838");

(cljs.core.async.t_cljs$core$async54838.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54838.
 */
cljs.core.async.__GT_t_cljs$core$async54838 = (function cljs$core$async$__GT_t_cljs$core$async54838(f__$1,blockable__$1,meta54839){
return (new cljs.core.async.t_cljs$core$async54838(f__$1,blockable__$1,meta54839));
});

}

return (new cljs.core.async.t_cljs$core$async54838(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54909 = arguments.length;
switch (G__54909) {
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
var G__54923 = arguments.length;
switch (G__54923) {
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
var G__54948 = arguments.length;
switch (G__54948) {
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
var val_57314 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57314) : fn1.call(null,val_57314));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57314) : fn1.call(null,val_57314));
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
var G__54968 = arguments.length;
switch (G__54968) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___57326 = n;
var x_57327 = (0);
while(true){
if((x_57327 < n__4741__auto___57326)){
(a[x_57327] = x_57327);

var G__57328 = (x_57327 + (1));
x_57327 = G__57328;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54980 = (function (flag,meta54981){
this.flag = flag;
this.meta54981 = meta54981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54982,meta54981__$1){
var self__ = this;
var _54982__$1 = this;
return (new cljs.core.async.t_cljs$core$async54980(self__.flag,meta54981__$1));
}));

(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54982){
var self__ = this;
var _54982__$1 = this;
return self__.meta54981;
}));

(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54981","meta54981",-653362542,null)], null);
}));

(cljs.core.async.t_cljs$core$async54980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54980");

(cljs.core.async.t_cljs$core$async54980.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54980.
 */
cljs.core.async.__GT_t_cljs$core$async54980 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54980(flag__$1,meta54981){
return (new cljs.core.async.t_cljs$core$async54980(flag__$1,meta54981));
});

}

return (new cljs.core.async.t_cljs$core$async54980(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54995 = (function (flag,cb,meta54996){
this.flag = flag;
this.cb = cb;
this.meta54996 = meta54996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54997,meta54996__$1){
var self__ = this;
var _54997__$1 = this;
return (new cljs.core.async.t_cljs$core$async54995(self__.flag,self__.cb,meta54996__$1));
}));

(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54997){
var self__ = this;
var _54997__$1 = this;
return self__.meta54996;
}));

(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54996","meta54996",-1616419787,null)], null);
}));

(cljs.core.async.t_cljs$core$async54995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54995");

(cljs.core.async.t_cljs$core$async54995.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async54995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54995.
 */
cljs.core.async.__GT_t_cljs$core$async54995 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54995(flag__$1,cb__$1,meta54996){
return (new cljs.core.async.t_cljs$core$async54995(flag__$1,cb__$1,meta54996));
});

}

return (new cljs.core.async.t_cljs$core$async54995(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__55008_SHARP_){
var G__55027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55008_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55027) : fret.call(null,G__55027));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55009_SHARP_){
var G__55028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55009_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__55028) : fret.call(null,G__55028));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57344 = (i + (1));
i = G__57344;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___57345 = arguments.length;
var i__4865__auto___57346 = (0);
while(true){
if((i__4865__auto___57346 < len__4864__auto___57345)){
args__4870__auto__.push((arguments[i__4865__auto___57346]));

var G__57347 = (i__4865__auto___57346 + (1));
i__4865__auto___57346 = G__57347;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__55058){
var map__55060 = p__55058;
var map__55060__$1 = cljs.core.__destructure_map(map__55060);
var opts = map__55060__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq55051){
var G__55052 = cljs.core.first(seq55051);
var seq55051__$1 = cljs.core.next(seq55051);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55052,seq55051__$1);
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
var G__55067 = arguments.length;
switch (G__55067) {
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
var c__54699__auto___57350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55180){
var state_val_55189 = (state_55180[(1)]);
if((state_val_55189 === (7))){
var inst_55166 = (state_55180[(2)]);
var state_55180__$1 = state_55180;
var statearr_55212_57351 = state_55180__$1;
(statearr_55212_57351[(2)] = inst_55166);

(statearr_55212_57351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (1))){
var state_55180__$1 = state_55180;
var statearr_55213_57352 = state_55180__$1;
(statearr_55213_57352[(2)] = null);

(statearr_55213_57352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (4))){
var inst_55130 = (state_55180[(7)]);
var inst_55130__$1 = (state_55180[(2)]);
var inst_55145 = (inst_55130__$1 == null);
var state_55180__$1 = (function (){var statearr_55224 = state_55180;
(statearr_55224[(7)] = inst_55130__$1);

return statearr_55224;
})();
if(cljs.core.truth_(inst_55145)){
var statearr_55225_57358 = state_55180__$1;
(statearr_55225_57358[(1)] = (5));

} else {
var statearr_55230_57359 = state_55180__$1;
(statearr_55230_57359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (13))){
var state_55180__$1 = state_55180;
var statearr_55231_57360 = state_55180__$1;
(statearr_55231_57360[(2)] = null);

(statearr_55231_57360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (6))){
var inst_55130 = (state_55180[(7)]);
var state_55180__$1 = state_55180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55180__$1,(11),to,inst_55130);
} else {
if((state_val_55189 === (3))){
var inst_55172 = (state_55180[(2)]);
var state_55180__$1 = state_55180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55180__$1,inst_55172);
} else {
if((state_val_55189 === (12))){
var state_55180__$1 = state_55180;
var statearr_55234_57365 = state_55180__$1;
(statearr_55234_57365[(2)] = null);

(statearr_55234_57365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (2))){
var state_55180__$1 = state_55180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55180__$1,(4),from);
} else {
if((state_val_55189 === (11))){
var inst_55158 = (state_55180[(2)]);
var state_55180__$1 = state_55180;
if(cljs.core.truth_(inst_55158)){
var statearr_55235_57366 = state_55180__$1;
(statearr_55235_57366[(1)] = (12));

} else {
var statearr_55236_57368 = state_55180__$1;
(statearr_55236_57368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (9))){
var state_55180__$1 = state_55180;
var statearr_55237_57371 = state_55180__$1;
(statearr_55237_57371[(2)] = null);

(statearr_55237_57371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (5))){
var state_55180__$1 = state_55180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55238_57376 = state_55180__$1;
(statearr_55238_57376[(1)] = (8));

} else {
var statearr_55239_57377 = state_55180__$1;
(statearr_55239_57377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (14))){
var inst_55164 = (state_55180[(2)]);
var state_55180__$1 = state_55180;
var statearr_55240_57382 = state_55180__$1;
(statearr_55240_57382[(2)] = inst_55164);

(statearr_55240_57382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (10))){
var inst_55155 = (state_55180[(2)]);
var state_55180__$1 = state_55180;
var statearr_55241_57383 = state_55180__$1;
(statearr_55241_57383[(2)] = inst_55155);

(statearr_55241_57383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55189 === (8))){
var inst_55150 = cljs.core.async.close_BANG_(to);
var state_55180__$1 = state_55180;
var statearr_55242_57388 = state_55180__$1;
(statearr_55242_57388[(2)] = inst_55150);

(statearr_55242_57388[(1)] = (10));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_55244 = [null,null,null,null,null,null,null,null];
(statearr_55244[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_55244[(1)] = (1));

return statearr_55244;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_55180){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55180);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55246){var ex__54453__auto__ = e55246;
var statearr_55247_57390 = state_55180;
(statearr_55247_57390[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55180[(4)]))){
var statearr_55248_57395 = state_55180;
(statearr_55248_57395[(1)] = cljs.core.first((state_55180[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57396 = state_55180;
state_55180 = G__57396;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_55180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_55180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55250 = f__54702__auto__();
(statearr_55250[(6)] = c__54699__auto___57350);

return statearr_55250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var process = (function (p__55263){
var vec__55264 = p__55263;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55264,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55264,(1),null);
var job = vec__55264;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54699__auto___57400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55276){
var state_val_55277 = (state_55276[(1)]);
if((state_val_55277 === (1))){
var state_55276__$1 = state_55276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55276__$1,(2),res,v);
} else {
if((state_val_55277 === (2))){
var inst_55273 = (state_55276[(2)]);
var inst_55274 = cljs.core.async.close_BANG_(res);
var state_55276__$1 = (function (){var statearr_55279 = state_55276;
(statearr_55279[(7)] = inst_55273);

return statearr_55279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55276__$1,inst_55274);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_55280 = [null,null,null,null,null,null,null,null];
(statearr_55280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__);

(statearr_55280[(1)] = (1));

return statearr_55280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1 = (function (state_55276){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55276);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55282){var ex__54453__auto__ = e55282;
var statearr_55283_57405 = state_55276;
(statearr_55283_57405[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55276[(4)]))){
var statearr_55284_57408 = state_55276;
(statearr_55284_57408[(1)] = cljs.core.first((state_55276[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57409 = state_55276;
state_55276 = G__57409;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = function(state_55276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1.call(this,state_55276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55285 = f__54702__auto__();
(statearr_55285[(6)] = c__54699__auto___57400);

return statearr_55285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__55287){
var vec__55288 = p__55287;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55288,(1),null);
var job = vec__55288;
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
var n__4741__auto___57414 = n;
var __57415 = (0);
while(true){
if((__57415 < n__4741__auto___57414)){
var G__55291_57416 = type;
var G__55291_57417__$1 = (((G__55291_57416 instanceof cljs.core.Keyword))?G__55291_57416.fqn:null);
switch (G__55291_57417__$1) {
case "compute":
var c__54699__auto___57419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57415,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = ((function (__57415,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function (state_55304){
var state_val_55305 = (state_55304[(1)]);
if((state_val_55305 === (1))){
var state_55304__$1 = state_55304;
var statearr_55311_57420 = state_55304__$1;
(statearr_55311_57420[(2)] = null);

(statearr_55311_57420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55305 === (2))){
var state_55304__$1 = state_55304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55304__$1,(4),jobs);
} else {
if((state_val_55305 === (3))){
var inst_55302 = (state_55304[(2)]);
var state_55304__$1 = state_55304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55304__$1,inst_55302);
} else {
if((state_val_55305 === (4))){
var inst_55294 = (state_55304[(2)]);
var inst_55295 = process(inst_55294);
var state_55304__$1 = state_55304;
if(cljs.core.truth_(inst_55295)){
var statearr_55316_57425 = state_55304__$1;
(statearr_55316_57425[(1)] = (5));

} else {
var statearr_55317_57426 = state_55304__$1;
(statearr_55317_57426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55305 === (5))){
var state_55304__$1 = state_55304;
var statearr_55318_57427 = state_55304__$1;
(statearr_55318_57427[(2)] = null);

(statearr_55318_57427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55305 === (6))){
var state_55304__$1 = state_55304;
var statearr_55319_57429 = state_55304__$1;
(statearr_55319_57429[(2)] = null);

(statearr_55319_57429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55305 === (7))){
var inst_55300 = (state_55304[(2)]);
var state_55304__$1 = state_55304;
var statearr_55320_57432 = state_55304__$1;
(statearr_55320_57432[(2)] = inst_55300);

(statearr_55320_57432[(1)] = (3));


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
});})(__57415,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
;
return ((function (__57415,switch__54449__auto__,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_55321 = [null,null,null,null,null,null,null];
(statearr_55321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__);

(statearr_55321[(1)] = (1));

return statearr_55321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1 = (function (state_55304){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55304);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55322){var ex__54453__auto__ = e55322;
var statearr_55323_57436 = state_55304;
(statearr_55323_57436[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55304[(4)]))){
var statearr_55324_57437 = state_55304;
(statearr_55324_57437[(1)] = cljs.core.first((state_55304[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57438 = state_55304;
state_55304 = G__57438;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = function(state_55304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1.call(this,state_55304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__;
})()
;})(__57415,switch__54449__auto__,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
})();
var state__54703__auto__ = (function (){var statearr_55329 = f__54702__auto__();
(statearr_55329[(6)] = c__54699__auto___57419);

return statearr_55329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
});})(__57415,c__54699__auto___57419,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
);


break;
case "async":
var c__54699__auto___57440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57415,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = ((function (__57415,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function (state_55342){
var state_val_55343 = (state_55342[(1)]);
if((state_val_55343 === (1))){
var state_55342__$1 = state_55342;
var statearr_55344_57447 = state_55342__$1;
(statearr_55344_57447[(2)] = null);

(statearr_55344_57447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (2))){
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55342__$1,(4),jobs);
} else {
if((state_val_55343 === (3))){
var inst_55340 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55342__$1,inst_55340);
} else {
if((state_val_55343 === (4))){
var inst_55332 = (state_55342[(2)]);
var inst_55333 = async(inst_55332);
var state_55342__$1 = state_55342;
if(cljs.core.truth_(inst_55333)){
var statearr_55349_57452 = state_55342__$1;
(statearr_55349_57452[(1)] = (5));

} else {
var statearr_55350_57454 = state_55342__$1;
(statearr_55350_57454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (5))){
var state_55342__$1 = state_55342;
var statearr_55351_57455 = state_55342__$1;
(statearr_55351_57455[(2)] = null);

(statearr_55351_57455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (6))){
var state_55342__$1 = state_55342;
var statearr_55356_57458 = state_55342__$1;
(statearr_55356_57458[(2)] = null);

(statearr_55356_57458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (7))){
var inst_55338 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55357_57461 = state_55342__$1;
(statearr_55357_57461[(2)] = inst_55338);

(statearr_55357_57461[(1)] = (3));


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
});})(__57415,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
;
return ((function (__57415,switch__54449__auto__,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_55363 = [null,null,null,null,null,null,null];
(statearr_55363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__);

(statearr_55363[(1)] = (1));

return statearr_55363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1 = (function (state_55342){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55342);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55364){var ex__54453__auto__ = e55364;
var statearr_55365_57469 = state_55342;
(statearr_55365_57469[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55342[(4)]))){
var statearr_55366_57471 = state_55342;
(statearr_55366_57471[(1)] = cljs.core.first((state_55342[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57473 = state_55342;
state_55342 = G__57473;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = function(state_55342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1.call(this,state_55342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__;
})()
;})(__57415,switch__54449__auto__,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
})();
var state__54703__auto__ = (function (){var statearr_55367 = f__54702__auto__();
(statearr_55367[(6)] = c__54699__auto___57440);

return statearr_55367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
});})(__57415,c__54699__auto___57440,G__55291_57416,G__55291_57417__$1,n__4741__auto___57414,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55291_57417__$1)].join('')));

}

var G__57476 = (__57415 + (1));
__57415 = G__57476;
continue;
} else {
}
break;
}

var c__54699__auto___57477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55393){
var state_val_55394 = (state_55393[(1)]);
if((state_val_55394 === (7))){
var inst_55389 = (state_55393[(2)]);
var state_55393__$1 = state_55393;
var statearr_55400_57478 = state_55393__$1;
(statearr_55400_57478[(2)] = inst_55389);

(statearr_55400_57478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55394 === (1))){
var state_55393__$1 = state_55393;
var statearr_55401_57479 = state_55393__$1;
(statearr_55401_57479[(2)] = null);

(statearr_55401_57479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55394 === (4))){
var inst_55370 = (state_55393[(7)]);
var inst_55370__$1 = (state_55393[(2)]);
var inst_55371 = (inst_55370__$1 == null);
var state_55393__$1 = (function (){var statearr_55402 = state_55393;
(statearr_55402[(7)] = inst_55370__$1);

return statearr_55402;
})();
if(cljs.core.truth_(inst_55371)){
var statearr_55403_57480 = state_55393__$1;
(statearr_55403_57480[(1)] = (5));

} else {
var statearr_55404_57481 = state_55393__$1;
(statearr_55404_57481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55394 === (6))){
var inst_55375 = (state_55393[(8)]);
var inst_55370 = (state_55393[(7)]);
var inst_55375__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_55380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55381 = [inst_55370,inst_55375__$1];
var inst_55382 = (new cljs.core.PersistentVector(null,2,(5),inst_55380,inst_55381,null));
var state_55393__$1 = (function (){var statearr_55405 = state_55393;
(statearr_55405[(8)] = inst_55375__$1);

return statearr_55405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55393__$1,(8),jobs,inst_55382);
} else {
if((state_val_55394 === (3))){
var inst_55391 = (state_55393[(2)]);
var state_55393__$1 = state_55393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55393__$1,inst_55391);
} else {
if((state_val_55394 === (2))){
var state_55393__$1 = state_55393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55393__$1,(4),from);
} else {
if((state_val_55394 === (9))){
var inst_55386 = (state_55393[(2)]);
var state_55393__$1 = (function (){var statearr_55408 = state_55393;
(statearr_55408[(9)] = inst_55386);

return statearr_55408;
})();
var statearr_55411_57490 = state_55393__$1;
(statearr_55411_57490[(2)] = null);

(statearr_55411_57490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55394 === (5))){
var inst_55373 = cljs.core.async.close_BANG_(jobs);
var state_55393__$1 = state_55393;
var statearr_55412_57492 = state_55393__$1;
(statearr_55412_57492[(2)] = inst_55373);

(statearr_55412_57492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55394 === (8))){
var inst_55375 = (state_55393[(8)]);
var inst_55384 = (state_55393[(2)]);
var state_55393__$1 = (function (){var statearr_55413 = state_55393;
(statearr_55413[(10)] = inst_55384);

return statearr_55413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55393__$1,(9),results,inst_55375);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_55414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__);

(statearr_55414[(1)] = (1));

return statearr_55414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1 = (function (state_55393){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55393);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55415){var ex__54453__auto__ = e55415;
var statearr_55416_57498 = state_55393;
(statearr_55416_57498[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55393[(4)]))){
var statearr_55417_57499 = state_55393;
(statearr_55417_57499[(1)] = cljs.core.first((state_55393[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57500 = state_55393;
state_55393 = G__57500;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = function(state_55393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1.call(this,state_55393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55422 = f__54702__auto__();
(statearr_55422[(6)] = c__54699__auto___57477);

return statearr_55422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


var c__54699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55465){
var state_val_55466 = (state_55465[(1)]);
if((state_val_55466 === (7))){
var inst_55457 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
var statearr_55467_57502 = state_55465__$1;
(statearr_55467_57502[(2)] = inst_55457);

(statearr_55467_57502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (20))){
var state_55465__$1 = state_55465;
var statearr_55468_57504 = state_55465__$1;
(statearr_55468_57504[(2)] = null);

(statearr_55468_57504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (1))){
var state_55465__$1 = state_55465;
var statearr_55469_57507 = state_55465__$1;
(statearr_55469_57507[(2)] = null);

(statearr_55469_57507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (4))){
var inst_55426 = (state_55465[(7)]);
var inst_55426__$1 = (state_55465[(2)]);
var inst_55427 = (inst_55426__$1 == null);
var state_55465__$1 = (function (){var statearr_55470 = state_55465;
(statearr_55470[(7)] = inst_55426__$1);

return statearr_55470;
})();
if(cljs.core.truth_(inst_55427)){
var statearr_55471_57509 = state_55465__$1;
(statearr_55471_57509[(1)] = (5));

} else {
var statearr_55472_57510 = state_55465__$1;
(statearr_55472_57510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (15))){
var inst_55439 = (state_55465[(8)]);
var state_55465__$1 = state_55465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55465__$1,(18),to,inst_55439);
} else {
if((state_val_55466 === (21))){
var inst_55452 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
var statearr_55474_57511 = state_55465__$1;
(statearr_55474_57511[(2)] = inst_55452);

(statearr_55474_57511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (13))){
var inst_55454 = (state_55465[(2)]);
var state_55465__$1 = (function (){var statearr_55478 = state_55465;
(statearr_55478[(9)] = inst_55454);

return statearr_55478;
})();
var statearr_55479_57512 = state_55465__$1;
(statearr_55479_57512[(2)] = null);

(statearr_55479_57512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (6))){
var inst_55426 = (state_55465[(7)]);
var state_55465__$1 = state_55465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55465__$1,(11),inst_55426);
} else {
if((state_val_55466 === (17))){
var inst_55447 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
if(cljs.core.truth_(inst_55447)){
var statearr_55480_57513 = state_55465__$1;
(statearr_55480_57513[(1)] = (19));

} else {
var statearr_55481_57514 = state_55465__$1;
(statearr_55481_57514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (3))){
var inst_55459 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55465__$1,inst_55459);
} else {
if((state_val_55466 === (12))){
var inst_55436 = (state_55465[(10)]);
var state_55465__$1 = state_55465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55465__$1,(14),inst_55436);
} else {
if((state_val_55466 === (2))){
var state_55465__$1 = state_55465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55465__$1,(4),results);
} else {
if((state_val_55466 === (19))){
var state_55465__$1 = state_55465;
var statearr_55482_57518 = state_55465__$1;
(statearr_55482_57518[(2)] = null);

(statearr_55482_57518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (11))){
var inst_55436 = (state_55465[(2)]);
var state_55465__$1 = (function (){var statearr_55483 = state_55465;
(statearr_55483[(10)] = inst_55436);

return statearr_55483;
})();
var statearr_55484_57519 = state_55465__$1;
(statearr_55484_57519[(2)] = null);

(statearr_55484_57519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (9))){
var state_55465__$1 = state_55465;
var statearr_55485_57521 = state_55465__$1;
(statearr_55485_57521[(2)] = null);

(statearr_55485_57521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (5))){
var state_55465__$1 = state_55465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55486_57523 = state_55465__$1;
(statearr_55486_57523[(1)] = (8));

} else {
var statearr_55487_57524 = state_55465__$1;
(statearr_55487_57524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (14))){
var inst_55441 = (state_55465[(11)]);
var inst_55439 = (state_55465[(8)]);
var inst_55439__$1 = (state_55465[(2)]);
var inst_55440 = (inst_55439__$1 == null);
var inst_55441__$1 = cljs.core.not(inst_55440);
var state_55465__$1 = (function (){var statearr_55488 = state_55465;
(statearr_55488[(11)] = inst_55441__$1);

(statearr_55488[(8)] = inst_55439__$1);

return statearr_55488;
})();
if(inst_55441__$1){
var statearr_55489_57526 = state_55465__$1;
(statearr_55489_57526[(1)] = (15));

} else {
var statearr_55491_57527 = state_55465__$1;
(statearr_55491_57527[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (16))){
var inst_55441 = (state_55465[(11)]);
var state_55465__$1 = state_55465;
var statearr_55493_57529 = state_55465__$1;
(statearr_55493_57529[(2)] = inst_55441);

(statearr_55493_57529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (10))){
var inst_55433 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
var statearr_55494_57530 = state_55465__$1;
(statearr_55494_57530[(2)] = inst_55433);

(statearr_55494_57530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (18))){
var inst_55444 = (state_55465[(2)]);
var state_55465__$1 = state_55465;
var statearr_55495_57531 = state_55465__$1;
(statearr_55495_57531[(2)] = inst_55444);

(statearr_55495_57531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55466 === (8))){
var inst_55430 = cljs.core.async.close_BANG_(to);
var state_55465__$1 = state_55465;
var statearr_55496_57532 = state_55465__$1;
(statearr_55496_57532[(2)] = inst_55430);

(statearr_55496_57532[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_55498 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__);

(statearr_55498[(1)] = (1));

return statearr_55498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1 = (function (state_55465){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55465);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55499){var ex__54453__auto__ = e55499;
var statearr_55500_57534 = state_55465;
(statearr_55500_57534[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55465[(4)]))){
var statearr_55501_57539 = state_55465;
(statearr_55501_57539[(1)] = cljs.core.first((state_55465[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57540 = state_55465;
state_55465 = G__57540;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__ = function(state_55465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1.call(this,state_55465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55502 = f__54702__auto__();
(statearr_55502[(6)] = c__54699__auto__);

return statearr_55502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

return c__54699__auto__;
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
var G__55504 = arguments.length;
switch (G__55504) {
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
var G__55507 = arguments.length;
switch (G__55507) {
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
var G__55517 = arguments.length;
switch (G__55517) {
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
var c__54699__auto___57572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55561){
var state_val_55562 = (state_55561[(1)]);
if((state_val_55562 === (7))){
var inst_55557 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55563_57574 = state_55561__$1;
(statearr_55563_57574[(2)] = inst_55557);

(statearr_55563_57574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (1))){
var state_55561__$1 = state_55561;
var statearr_55564_57578 = state_55561__$1;
(statearr_55564_57578[(2)] = null);

(statearr_55564_57578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (4))){
var inst_55538 = (state_55561[(7)]);
var inst_55538__$1 = (state_55561[(2)]);
var inst_55539 = (inst_55538__$1 == null);
var state_55561__$1 = (function (){var statearr_55565 = state_55561;
(statearr_55565[(7)] = inst_55538__$1);

return statearr_55565;
})();
if(cljs.core.truth_(inst_55539)){
var statearr_55566_57579 = state_55561__$1;
(statearr_55566_57579[(1)] = (5));

} else {
var statearr_55567_57580 = state_55561__$1;
(statearr_55567_57580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (13))){
var state_55561__$1 = state_55561;
var statearr_55570_57581 = state_55561__$1;
(statearr_55570_57581[(2)] = null);

(statearr_55570_57581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (6))){
var inst_55538 = (state_55561[(7)]);
var inst_55544 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55538) : p.call(null,inst_55538));
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55544)){
var statearr_55572_57582 = state_55561__$1;
(statearr_55572_57582[(1)] = (9));

} else {
var statearr_55573_57583 = state_55561__$1;
(statearr_55573_57583[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (3))){
var inst_55559 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55561__$1,inst_55559);
} else {
if((state_val_55562 === (12))){
var state_55561__$1 = state_55561;
var statearr_55574_57588 = state_55561__$1;
(statearr_55574_57588[(2)] = null);

(statearr_55574_57588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (2))){
var state_55561__$1 = state_55561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55561__$1,(4),ch);
} else {
if((state_val_55562 === (11))){
var inst_55538 = (state_55561[(7)]);
var inst_55548 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55561__$1,(8),inst_55548,inst_55538);
} else {
if((state_val_55562 === (9))){
var state_55561__$1 = state_55561;
var statearr_55575_57591 = state_55561__$1;
(statearr_55575_57591[(2)] = tc);

(statearr_55575_57591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (5))){
var inst_55541 = cljs.core.async.close_BANG_(tc);
var inst_55542 = cljs.core.async.close_BANG_(fc);
var state_55561__$1 = (function (){var statearr_55577 = state_55561;
(statearr_55577[(8)] = inst_55541);

return statearr_55577;
})();
var statearr_55578_57594 = state_55561__$1;
(statearr_55578_57594[(2)] = inst_55542);

(statearr_55578_57594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (14))){
var inst_55555 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
var statearr_55583_57596 = state_55561__$1;
(statearr_55583_57596[(2)] = inst_55555);

(statearr_55583_57596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (10))){
var state_55561__$1 = state_55561;
var statearr_55584_57599 = state_55561__$1;
(statearr_55584_57599[(2)] = fc);

(statearr_55584_57599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55562 === (8))){
var inst_55550 = (state_55561[(2)]);
var state_55561__$1 = state_55561;
if(cljs.core.truth_(inst_55550)){
var statearr_55585_57600 = state_55561__$1;
(statearr_55585_57600[(1)] = (12));

} else {
var statearr_55586_57601 = state_55561__$1;
(statearr_55586_57601[(1)] = (13));

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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_55587 = [null,null,null,null,null,null,null,null,null];
(statearr_55587[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_55587[(1)] = (1));

return statearr_55587;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_55561){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55561);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55588){var ex__54453__auto__ = e55588;
var statearr_55589_57609 = state_55561;
(statearr_55589_57609[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55561[(4)]))){
var statearr_55590_57614 = state_55561;
(statearr_55590_57614[(1)] = cljs.core.first((state_55561[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57615 = state_55561;
state_55561 = G__57615;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_55561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_55561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55591 = f__54702__auto__();
(statearr_55591[(6)] = c__54699__auto___57572);

return statearr_55591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var c__54699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55618){
var state_val_55619 = (state_55618[(1)]);
if((state_val_55619 === (7))){
var inst_55614 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
var statearr_55620_57622 = state_55618__$1;
(statearr_55620_57622[(2)] = inst_55614);

(statearr_55620_57622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (1))){
var inst_55592 = init;
var inst_55593 = inst_55592;
var state_55618__$1 = (function (){var statearr_55621 = state_55618;
(statearr_55621[(7)] = inst_55593);

return statearr_55621;
})();
var statearr_55622_57623 = state_55618__$1;
(statearr_55622_57623[(2)] = null);

(statearr_55622_57623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (4))){
var inst_55600 = (state_55618[(8)]);
var inst_55600__$1 = (state_55618[(2)]);
var inst_55601 = (inst_55600__$1 == null);
var state_55618__$1 = (function (){var statearr_55623 = state_55618;
(statearr_55623[(8)] = inst_55600__$1);

return statearr_55623;
})();
if(cljs.core.truth_(inst_55601)){
var statearr_55624_57626 = state_55618__$1;
(statearr_55624_57626[(1)] = (5));

} else {
var statearr_55625_57627 = state_55618__$1;
(statearr_55625_57627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (6))){
var inst_55604 = (state_55618[(9)]);
var inst_55593 = (state_55618[(7)]);
var inst_55600 = (state_55618[(8)]);
var inst_55604__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55593,inst_55600) : f.call(null,inst_55593,inst_55600));
var inst_55605 = cljs.core.reduced_QMARK_(inst_55604__$1);
var state_55618__$1 = (function (){var statearr_55626 = state_55618;
(statearr_55626[(9)] = inst_55604__$1);

return statearr_55626;
})();
if(inst_55605){
var statearr_55627_57632 = state_55618__$1;
(statearr_55627_57632[(1)] = (8));

} else {
var statearr_55628_57633 = state_55618__$1;
(statearr_55628_57633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (3))){
var inst_55616 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55618__$1,inst_55616);
} else {
if((state_val_55619 === (2))){
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55618__$1,(4),ch);
} else {
if((state_val_55619 === (9))){
var inst_55604 = (state_55618[(9)]);
var inst_55593 = inst_55604;
var state_55618__$1 = (function (){var statearr_55629 = state_55618;
(statearr_55629[(7)] = inst_55593);

return statearr_55629;
})();
var statearr_55630_57639 = state_55618__$1;
(statearr_55630_57639[(2)] = null);

(statearr_55630_57639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (5))){
var inst_55593 = (state_55618[(7)]);
var state_55618__$1 = state_55618;
var statearr_55631_57640 = state_55618__$1;
(statearr_55631_57640[(2)] = inst_55593);

(statearr_55631_57640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (10))){
var inst_55612 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
var statearr_55632_57645 = state_55618__$1;
(statearr_55632_57645[(2)] = inst_55612);

(statearr_55632_57645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (8))){
var inst_55604 = (state_55618[(9)]);
var inst_55608 = cljs.core.deref(inst_55604);
var state_55618__$1 = state_55618;
var statearr_55633_57646 = state_55618__$1;
(statearr_55633_57646[(2)] = inst_55608);

(statearr_55633_57646[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54450__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54450__auto____0 = (function (){
var statearr_55634 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55634[(0)] = cljs$core$async$reduce_$_state_machine__54450__auto__);

(statearr_55634[(1)] = (1));

return statearr_55634;
});
var cljs$core$async$reduce_$_state_machine__54450__auto____1 = (function (state_55618){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55618);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55635){var ex__54453__auto__ = e55635;
var statearr_55636_57649 = state_55618;
(statearr_55636_57649[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55618[(4)]))){
var statearr_55639_57652 = state_55618;
(statearr_55639_57652[(1)] = cljs.core.first((state_55618[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57653 = state_55618;
state_55618 = G__57653;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54450__auto__ = function(state_55618){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54450__auto____1.call(this,state_55618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54450__auto____0;
cljs$core$async$reduce_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54450__auto____1;
return cljs$core$async$reduce_$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55642 = f__54702__auto__();
(statearr_55642[(6)] = c__54699__auto__);

return statearr_55642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

return c__54699__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55649){
var state_val_55650 = (state_55649[(1)]);
if((state_val_55650 === (1))){
var inst_55644 = cljs.core.async.reduce(f__$1,init,ch);
var state_55649__$1 = state_55649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55649__$1,(2),inst_55644);
} else {
if((state_val_55650 === (2))){
var inst_55646 = (state_55649[(2)]);
var inst_55647 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55646) : f__$1.call(null,inst_55646));
var state_55649__$1 = state_55649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55649__$1,inst_55647);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54450__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54450__auto____0 = (function (){
var statearr_55657 = [null,null,null,null,null,null,null];
(statearr_55657[(0)] = cljs$core$async$transduce_$_state_machine__54450__auto__);

(statearr_55657[(1)] = (1));

return statearr_55657;
});
var cljs$core$async$transduce_$_state_machine__54450__auto____1 = (function (state_55649){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55649);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55658){var ex__54453__auto__ = e55658;
var statearr_55662_57667 = state_55649;
(statearr_55662_57667[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55649[(4)]))){
var statearr_55663_57672 = state_55649;
(statearr_55663_57672[(1)] = cljs.core.first((state_55649[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57677 = state_55649;
state_55649 = G__57677;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54450__auto__ = function(state_55649){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54450__auto____1.call(this,state_55649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54450__auto____0;
cljs$core$async$transduce_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54450__auto____1;
return cljs$core$async$transduce_$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55667 = f__54702__auto__();
(statearr_55667[(6)] = c__54699__auto__);

return statearr_55667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

return c__54699__auto__;
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
var G__55673 = arguments.length;
switch (G__55673) {
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
var c__54699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55713){
var state_val_55714 = (state_55713[(1)]);
if((state_val_55714 === (7))){
var inst_55688 = (state_55713[(2)]);
var state_55713__$1 = state_55713;
var statearr_55722_57679 = state_55713__$1;
(statearr_55722_57679[(2)] = inst_55688);

(statearr_55722_57679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (1))){
var inst_55679 = cljs.core.seq(coll);
var inst_55683 = inst_55679;
var state_55713__$1 = (function (){var statearr_55723 = state_55713;
(statearr_55723[(7)] = inst_55683);

return statearr_55723;
})();
var statearr_55724_57681 = state_55713__$1;
(statearr_55724_57681[(2)] = null);

(statearr_55724_57681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (4))){
var inst_55683 = (state_55713[(7)]);
var inst_55686 = cljs.core.first(inst_55683);
var state_55713__$1 = state_55713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55713__$1,(7),ch,inst_55686);
} else {
if((state_val_55714 === (13))){
var inst_55704 = (state_55713[(2)]);
var state_55713__$1 = state_55713;
var statearr_55728_57684 = state_55713__$1;
(statearr_55728_57684[(2)] = inst_55704);

(statearr_55728_57684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (6))){
var inst_55691 = (state_55713[(2)]);
var state_55713__$1 = state_55713;
if(cljs.core.truth_(inst_55691)){
var statearr_55732_57689 = state_55713__$1;
(statearr_55732_57689[(1)] = (8));

} else {
var statearr_55733_57691 = state_55713__$1;
(statearr_55733_57691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (3))){
var inst_55708 = (state_55713[(2)]);
var state_55713__$1 = state_55713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55713__$1,inst_55708);
} else {
if((state_val_55714 === (12))){
var state_55713__$1 = state_55713;
var statearr_55734_57694 = state_55713__$1;
(statearr_55734_57694[(2)] = null);

(statearr_55734_57694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (2))){
var inst_55683 = (state_55713[(7)]);
var state_55713__$1 = state_55713;
if(cljs.core.truth_(inst_55683)){
var statearr_55735_57697 = state_55713__$1;
(statearr_55735_57697[(1)] = (4));

} else {
var statearr_55736_57698 = state_55713__$1;
(statearr_55736_57698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (11))){
var inst_55701 = cljs.core.async.close_BANG_(ch);
var state_55713__$1 = state_55713;
var statearr_55737_57699 = state_55713__$1;
(statearr_55737_57699[(2)] = inst_55701);

(statearr_55737_57699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (9))){
var state_55713__$1 = state_55713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55738_57700 = state_55713__$1;
(statearr_55738_57700[(1)] = (11));

} else {
var statearr_55739_57701 = state_55713__$1;
(statearr_55739_57701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (5))){
var inst_55683 = (state_55713[(7)]);
var state_55713__$1 = state_55713;
var statearr_55740_57702 = state_55713__$1;
(statearr_55740_57702[(2)] = inst_55683);

(statearr_55740_57702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (10))){
var inst_55706 = (state_55713[(2)]);
var state_55713__$1 = state_55713;
var statearr_55741_57703 = state_55713__$1;
(statearr_55741_57703[(2)] = inst_55706);

(statearr_55741_57703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55714 === (8))){
var inst_55683 = (state_55713[(7)]);
var inst_55697 = cljs.core.next(inst_55683);
var inst_55683__$1 = inst_55697;
var state_55713__$1 = (function (){var statearr_55743 = state_55713;
(statearr_55743[(7)] = inst_55683__$1);

return statearr_55743;
})();
var statearr_55745_57705 = state_55713__$1;
(statearr_55745_57705[(2)] = null);

(statearr_55745_57705[(1)] = (2));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_55746 = [null,null,null,null,null,null,null,null];
(statearr_55746[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_55746[(1)] = (1));

return statearr_55746;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_55713){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55713);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e55747){var ex__54453__auto__ = e55747;
var statearr_55748_57706 = state_55713;
(statearr_55748_57706[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55713[(4)]))){
var statearr_55749_57707 = state_55713;
(statearr_55749_57707[(1)] = cljs.core.first((state_55713[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57708 = state_55713;
state_55713 = G__57708;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_55713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_55713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_55753 = f__54702__auto__();
(statearr_55753[(6)] = c__54699__auto__);

return statearr_55753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

return c__54699__auto__;
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
var G__55755 = arguments.length;
switch (G__55755) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_57717 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_57717(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_57718 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_57718(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_57719 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_57719(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_57724 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_57724(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55756 = (function (ch,cs,meta55757){
this.ch = ch;
this.cs = cs;
this.meta55757 = meta55757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55758,meta55757__$1){
var self__ = this;
var _55758__$1 = this;
return (new cljs.core.async.t_cljs$core$async55756(self__.ch,self__.cs,meta55757__$1));
}));

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55758){
var self__ = this;
var _55758__$1 = this;
return self__.meta55757;
}));

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55757","meta55757",-840260886,null)], null);
}));

(cljs.core.async.t_cljs$core$async55756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55756");

(cljs.core.async.t_cljs$core$async55756.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async55756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55756.
 */
cljs.core.async.__GT_t_cljs$core$async55756 = (function cljs$core$async$mult_$___GT_t_cljs$core$async55756(ch__$1,cs__$1,meta55757){
return (new cljs.core.async.t_cljs$core$async55756(ch__$1,cs__$1,meta55757));
});

}

return (new cljs.core.async.t_cljs$core$async55756(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__54699__auto___57734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_55927){
var state_val_55928 = (state_55927[(1)]);
if((state_val_55928 === (7))){
var inst_55923 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55935_57739 = state_55927__$1;
(statearr_55935_57739[(2)] = inst_55923);

(statearr_55935_57739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (20))){
var inst_55821 = (state_55927[(7)]);
var inst_55833 = cljs.core.first(inst_55821);
var inst_55834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55833,(0),null);
var inst_55835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55833,(1),null);
var state_55927__$1 = (function (){var statearr_55936 = state_55927;
(statearr_55936[(8)] = inst_55834);

return statearr_55936;
})();
if(cljs.core.truth_(inst_55835)){
var statearr_55937_57747 = state_55927__$1;
(statearr_55937_57747[(1)] = (22));

} else {
var statearr_55938_57748 = state_55927__$1;
(statearr_55938_57748[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (27))){
var inst_55864 = (state_55927[(9)]);
var inst_55866 = (state_55927[(10)]);
var inst_55872 = (state_55927[(11)]);
var inst_55778 = (state_55927[(12)]);
var inst_55872__$1 = cljs.core._nth(inst_55864,inst_55866);
var inst_55873 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55872__$1,inst_55778,done);
var state_55927__$1 = (function (){var statearr_55939 = state_55927;
(statearr_55939[(11)] = inst_55872__$1);

return statearr_55939;
})();
if(cljs.core.truth_(inst_55873)){
var statearr_55940_57749 = state_55927__$1;
(statearr_55940_57749[(1)] = (30));

} else {
var statearr_55941_57750 = state_55927__$1;
(statearr_55941_57750[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (1))){
var state_55927__$1 = state_55927;
var statearr_55943_57751 = state_55927__$1;
(statearr_55943_57751[(2)] = null);

(statearr_55943_57751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (24))){
var inst_55821 = (state_55927[(7)]);
var inst_55840 = (state_55927[(2)]);
var inst_55841 = cljs.core.next(inst_55821);
var inst_55791 = inst_55841;
var inst_55792 = null;
var inst_55793 = (0);
var inst_55794 = (0);
var state_55927__$1 = (function (){var statearr_55944 = state_55927;
(statearr_55944[(13)] = inst_55794);

(statearr_55944[(14)] = inst_55840);

(statearr_55944[(15)] = inst_55792);

(statearr_55944[(16)] = inst_55793);

(statearr_55944[(17)] = inst_55791);

return statearr_55944;
})();
var statearr_55945_57759 = state_55927__$1;
(statearr_55945_57759[(2)] = null);

(statearr_55945_57759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (39))){
var state_55927__$1 = state_55927;
var statearr_55954_57760 = state_55927__$1;
(statearr_55954_57760[(2)] = null);

(statearr_55954_57760[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (4))){
var inst_55778 = (state_55927[(12)]);
var inst_55778__$1 = (state_55927[(2)]);
var inst_55779 = (inst_55778__$1 == null);
var state_55927__$1 = (function (){var statearr_55957 = state_55927;
(statearr_55957[(12)] = inst_55778__$1);

return statearr_55957;
})();
if(cljs.core.truth_(inst_55779)){
var statearr_55958_57761 = state_55927__$1;
(statearr_55958_57761[(1)] = (5));

} else {
var statearr_55959_57762 = state_55927__$1;
(statearr_55959_57762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (15))){
var inst_55794 = (state_55927[(13)]);
var inst_55792 = (state_55927[(15)]);
var inst_55793 = (state_55927[(16)]);
var inst_55791 = (state_55927[(17)]);
var inst_55816 = (state_55927[(2)]);
var inst_55817 = (inst_55794 + (1));
var tmp55947 = inst_55792;
var tmp55948 = inst_55793;
var tmp55949 = inst_55791;
var inst_55791__$1 = tmp55949;
var inst_55792__$1 = tmp55947;
var inst_55793__$1 = tmp55948;
var inst_55794__$1 = inst_55817;
var state_55927__$1 = (function (){var statearr_55962 = state_55927;
(statearr_55962[(18)] = inst_55816);

(statearr_55962[(13)] = inst_55794__$1);

(statearr_55962[(15)] = inst_55792__$1);

(statearr_55962[(16)] = inst_55793__$1);

(statearr_55962[(17)] = inst_55791__$1);

return statearr_55962;
})();
var statearr_55964_57763 = state_55927__$1;
(statearr_55964_57763[(2)] = null);

(statearr_55964_57763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (21))){
var inst_55845 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55969_57764 = state_55927__$1;
(statearr_55969_57764[(2)] = inst_55845);

(statearr_55969_57764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (31))){
var inst_55872 = (state_55927[(11)]);
var inst_55876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55872);
var state_55927__$1 = state_55927;
var statearr_55970_57766 = state_55927__$1;
(statearr_55970_57766[(2)] = inst_55876);

(statearr_55970_57766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (32))){
var inst_55865 = (state_55927[(19)]);
var inst_55864 = (state_55927[(9)]);
var inst_55866 = (state_55927[(10)]);
var inst_55863 = (state_55927[(20)]);
var inst_55878 = (state_55927[(2)]);
var inst_55883 = (inst_55866 + (1));
var tmp55966 = inst_55865;
var tmp55967 = inst_55864;
var tmp55968 = inst_55863;
var inst_55863__$1 = tmp55968;
var inst_55864__$1 = tmp55967;
var inst_55865__$1 = tmp55966;
var inst_55866__$1 = inst_55883;
var state_55927__$1 = (function (){var statearr_55971 = state_55927;
(statearr_55971[(19)] = inst_55865__$1);

(statearr_55971[(9)] = inst_55864__$1);

(statearr_55971[(10)] = inst_55866__$1);

(statearr_55971[(20)] = inst_55863__$1);

(statearr_55971[(21)] = inst_55878);

return statearr_55971;
})();
var statearr_55972_57767 = state_55927__$1;
(statearr_55972_57767[(2)] = null);

(statearr_55972_57767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (40))){
var inst_55896 = (state_55927[(22)]);
var inst_55900 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55896);
var state_55927__$1 = state_55927;
var statearr_55975_57768 = state_55927__$1;
(statearr_55975_57768[(2)] = inst_55900);

(statearr_55975_57768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (33))){
var inst_55887 = (state_55927[(23)]);
var inst_55889 = cljs.core.chunked_seq_QMARK_(inst_55887);
var state_55927__$1 = state_55927;
if(inst_55889){
var statearr_55977_57769 = state_55927__$1;
(statearr_55977_57769[(1)] = (36));

} else {
var statearr_55978_57770 = state_55927__$1;
(statearr_55978_57770[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (13))){
var inst_55808 = (state_55927[(24)]);
var inst_55813 = cljs.core.async.close_BANG_(inst_55808);
var state_55927__$1 = state_55927;
var statearr_55979_57771 = state_55927__$1;
(statearr_55979_57771[(2)] = inst_55813);

(statearr_55979_57771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (22))){
var inst_55834 = (state_55927[(8)]);
var inst_55837 = cljs.core.async.close_BANG_(inst_55834);
var state_55927__$1 = state_55927;
var statearr_55981_57772 = state_55927__$1;
(statearr_55981_57772[(2)] = inst_55837);

(statearr_55981_57772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (36))){
var inst_55887 = (state_55927[(23)]);
var inst_55891 = cljs.core.chunk_first(inst_55887);
var inst_55892 = cljs.core.chunk_rest(inst_55887);
var inst_55893 = cljs.core.count(inst_55891);
var inst_55863 = inst_55892;
var inst_55864 = inst_55891;
var inst_55865 = inst_55893;
var inst_55866 = (0);
var state_55927__$1 = (function (){var statearr_55983 = state_55927;
(statearr_55983[(19)] = inst_55865);

(statearr_55983[(9)] = inst_55864);

(statearr_55983[(10)] = inst_55866);

(statearr_55983[(20)] = inst_55863);

return statearr_55983;
})();
var statearr_55985_57773 = state_55927__$1;
(statearr_55985_57773[(2)] = null);

(statearr_55985_57773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (41))){
var inst_55887 = (state_55927[(23)]);
var inst_55902 = (state_55927[(2)]);
var inst_55903 = cljs.core.next(inst_55887);
var inst_55863 = inst_55903;
var inst_55864 = null;
var inst_55865 = (0);
var inst_55866 = (0);
var state_55927__$1 = (function (){var statearr_55991 = state_55927;
(statearr_55991[(19)] = inst_55865);

(statearr_55991[(9)] = inst_55864);

(statearr_55991[(10)] = inst_55866);

(statearr_55991[(25)] = inst_55902);

(statearr_55991[(20)] = inst_55863);

return statearr_55991;
})();
var statearr_55992_57774 = state_55927__$1;
(statearr_55992_57774[(2)] = null);

(statearr_55992_57774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (43))){
var state_55927__$1 = state_55927;
var statearr_55993_57775 = state_55927__$1;
(statearr_55993_57775[(2)] = null);

(statearr_55993_57775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (29))){
var inst_55911 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55994_57776 = state_55927__$1;
(statearr_55994_57776[(2)] = inst_55911);

(statearr_55994_57776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (44))){
var inst_55920 = (state_55927[(2)]);
var state_55927__$1 = (function (){var statearr_55995 = state_55927;
(statearr_55995[(26)] = inst_55920);

return statearr_55995;
})();
var statearr_55996_57780 = state_55927__$1;
(statearr_55996_57780[(2)] = null);

(statearr_55996_57780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (6))){
var inst_55855 = (state_55927[(27)]);
var inst_55854 = cljs.core.deref(cs);
var inst_55855__$1 = cljs.core.keys(inst_55854);
var inst_55856 = cljs.core.count(inst_55855__$1);
var inst_55857 = cljs.core.reset_BANG_(dctr,inst_55856);
var inst_55862 = cljs.core.seq(inst_55855__$1);
var inst_55863 = inst_55862;
var inst_55864 = null;
var inst_55865 = (0);
var inst_55866 = (0);
var state_55927__$1 = (function (){var statearr_55997 = state_55927;
(statearr_55997[(27)] = inst_55855__$1);

(statearr_55997[(19)] = inst_55865);

(statearr_55997[(28)] = inst_55857);

(statearr_55997[(9)] = inst_55864);

(statearr_55997[(10)] = inst_55866);

(statearr_55997[(20)] = inst_55863);

return statearr_55997;
})();
var statearr_55998_57781 = state_55927__$1;
(statearr_55998_57781[(2)] = null);

(statearr_55998_57781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (28))){
var inst_55887 = (state_55927[(23)]);
var inst_55863 = (state_55927[(20)]);
var inst_55887__$1 = cljs.core.seq(inst_55863);
var state_55927__$1 = (function (){var statearr_55999 = state_55927;
(statearr_55999[(23)] = inst_55887__$1);

return statearr_55999;
})();
if(inst_55887__$1){
var statearr_56000_57782 = state_55927__$1;
(statearr_56000_57782[(1)] = (33));

} else {
var statearr_56001_57783 = state_55927__$1;
(statearr_56001_57783[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (25))){
var inst_55865 = (state_55927[(19)]);
var inst_55866 = (state_55927[(10)]);
var inst_55868 = (inst_55866 < inst_55865);
var inst_55870 = inst_55868;
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55870)){
var statearr_56002_57784 = state_55927__$1;
(statearr_56002_57784[(1)] = (27));

} else {
var statearr_56004_57785 = state_55927__$1;
(statearr_56004_57785[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (34))){
var state_55927__$1 = state_55927;
var statearr_56005_57789 = state_55927__$1;
(statearr_56005_57789[(2)] = null);

(statearr_56005_57789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (17))){
var state_55927__$1 = state_55927;
var statearr_56006_57790 = state_55927__$1;
(statearr_56006_57790[(2)] = null);

(statearr_56006_57790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (3))){
var inst_55925 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55927__$1,inst_55925);
} else {
if((state_val_55928 === (12))){
var inst_55850 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56013_57791 = state_55927__$1;
(statearr_56013_57791[(2)] = inst_55850);

(statearr_56013_57791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (2))){
var state_55927__$1 = state_55927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55927__$1,(4),ch);
} else {
if((state_val_55928 === (23))){
var state_55927__$1 = state_55927;
var statearr_56027_57792 = state_55927__$1;
(statearr_56027_57792[(2)] = null);

(statearr_56027_57792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (35))){
var inst_55909 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56032_57793 = state_55927__$1;
(statearr_56032_57793[(2)] = inst_55909);

(statearr_56032_57793[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (19))){
var inst_55821 = (state_55927[(7)]);
var inst_55825 = cljs.core.chunk_first(inst_55821);
var inst_55826 = cljs.core.chunk_rest(inst_55821);
var inst_55827 = cljs.core.count(inst_55825);
var inst_55791 = inst_55826;
var inst_55792 = inst_55825;
var inst_55793 = inst_55827;
var inst_55794 = (0);
var state_55927__$1 = (function (){var statearr_56033 = state_55927;
(statearr_56033[(13)] = inst_55794);

(statearr_56033[(15)] = inst_55792);

(statearr_56033[(16)] = inst_55793);

(statearr_56033[(17)] = inst_55791);

return statearr_56033;
})();
var statearr_56034_57794 = state_55927__$1;
(statearr_56034_57794[(2)] = null);

(statearr_56034_57794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (11))){
var inst_55821 = (state_55927[(7)]);
var inst_55791 = (state_55927[(17)]);
var inst_55821__$1 = cljs.core.seq(inst_55791);
var state_55927__$1 = (function (){var statearr_56036 = state_55927;
(statearr_56036[(7)] = inst_55821__$1);

return statearr_56036;
})();
if(inst_55821__$1){
var statearr_56037_57795 = state_55927__$1;
(statearr_56037_57795[(1)] = (16));

} else {
var statearr_56038_57796 = state_55927__$1;
(statearr_56038_57796[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (9))){
var inst_55852 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56039_57797 = state_55927__$1;
(statearr_56039_57797[(2)] = inst_55852);

(statearr_56039_57797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (5))){
var inst_55789 = cljs.core.deref(cs);
var inst_55790 = cljs.core.seq(inst_55789);
var inst_55791 = inst_55790;
var inst_55792 = null;
var inst_55793 = (0);
var inst_55794 = (0);
var state_55927__$1 = (function (){var statearr_56041 = state_55927;
(statearr_56041[(13)] = inst_55794);

(statearr_56041[(15)] = inst_55792);

(statearr_56041[(16)] = inst_55793);

(statearr_56041[(17)] = inst_55791);

return statearr_56041;
})();
var statearr_56042_57798 = state_55927__$1;
(statearr_56042_57798[(2)] = null);

(statearr_56042_57798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (14))){
var state_55927__$1 = state_55927;
var statearr_56043_57800 = state_55927__$1;
(statearr_56043_57800[(2)] = null);

(statearr_56043_57800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (45))){
var inst_55917 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56046_57804 = state_55927__$1;
(statearr_56046_57804[(2)] = inst_55917);

(statearr_56046_57804[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (26))){
var inst_55855 = (state_55927[(27)]);
var inst_55913 = (state_55927[(2)]);
var inst_55914 = cljs.core.seq(inst_55855);
var state_55927__$1 = (function (){var statearr_56047 = state_55927;
(statearr_56047[(29)] = inst_55913);

return statearr_56047;
})();
if(inst_55914){
var statearr_56048_57805 = state_55927__$1;
(statearr_56048_57805[(1)] = (42));

} else {
var statearr_56049_57806 = state_55927__$1;
(statearr_56049_57806[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (16))){
var inst_55821 = (state_55927[(7)]);
var inst_55823 = cljs.core.chunked_seq_QMARK_(inst_55821);
var state_55927__$1 = state_55927;
if(inst_55823){
var statearr_56050_57807 = state_55927__$1;
(statearr_56050_57807[(1)] = (19));

} else {
var statearr_56051_57808 = state_55927__$1;
(statearr_56051_57808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (38))){
var inst_55906 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56052_57809 = state_55927__$1;
(statearr_56052_57809[(2)] = inst_55906);

(statearr_56052_57809[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (30))){
var state_55927__$1 = state_55927;
var statearr_56053_57810 = state_55927__$1;
(statearr_56053_57810[(2)] = null);

(statearr_56053_57810[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (10))){
var inst_55794 = (state_55927[(13)]);
var inst_55792 = (state_55927[(15)]);
var inst_55805 = cljs.core._nth(inst_55792,inst_55794);
var inst_55808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55805,(0),null);
var inst_55809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55805,(1),null);
var state_55927__$1 = (function (){var statearr_56054 = state_55927;
(statearr_56054[(24)] = inst_55808);

return statearr_56054;
})();
if(cljs.core.truth_(inst_55809)){
var statearr_56055_57811 = state_55927__$1;
(statearr_56055_57811[(1)] = (13));

} else {
var statearr_56056_57812 = state_55927__$1;
(statearr_56056_57812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (18))){
var inst_55848 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_56060_57813 = state_55927__$1;
(statearr_56060_57813[(2)] = inst_55848);

(statearr_56060_57813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (42))){
var state_55927__$1 = state_55927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55927__$1,(45),dchan);
} else {
if((state_val_55928 === (37))){
var inst_55887 = (state_55927[(23)]);
var inst_55896 = (state_55927[(22)]);
var inst_55778 = (state_55927[(12)]);
var inst_55896__$1 = cljs.core.first(inst_55887);
var inst_55897 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55896__$1,inst_55778,done);
var state_55927__$1 = (function (){var statearr_56061 = state_55927;
(statearr_56061[(22)] = inst_55896__$1);

return statearr_56061;
})();
if(cljs.core.truth_(inst_55897)){
var statearr_56066_57814 = state_55927__$1;
(statearr_56066_57814[(1)] = (39));

} else {
var statearr_56067_57815 = state_55927__$1;
(statearr_56067_57815[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (8))){
var inst_55794 = (state_55927[(13)]);
var inst_55793 = (state_55927[(16)]);
var inst_55796 = (inst_55794 < inst_55793);
var inst_55797 = inst_55796;
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55797)){
var statearr_56069_57816 = state_55927__$1;
(statearr_56069_57816[(1)] = (10));

} else {
var statearr_56070_57817 = state_55927__$1;
(statearr_56070_57817[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54450__auto__ = null;
var cljs$core$async$mult_$_state_machine__54450__auto____0 = (function (){
var statearr_56082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56082[(0)] = cljs$core$async$mult_$_state_machine__54450__auto__);

(statearr_56082[(1)] = (1));

return statearr_56082;
});
var cljs$core$async$mult_$_state_machine__54450__auto____1 = (function (state_55927){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_55927);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56087){var ex__54453__auto__ = e56087;
var statearr_56088_57818 = state_55927;
(statearr_56088_57818[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_55927[(4)]))){
var statearr_56090_57819 = state_55927;
(statearr_56090_57819[(1)] = cljs.core.first((state_55927[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57820 = state_55927;
state_55927 = G__57820;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54450__auto__ = function(state_55927){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54450__auto____1.call(this,state_55927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54450__auto____0;
cljs$core$async$mult_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54450__auto____1;
return cljs$core$async$mult_$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56097 = f__54702__auto__();
(statearr_56097[(6)] = c__54699__auto___57734);

return statearr_56097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var G__56101 = arguments.length;
switch (G__56101) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_57823 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_57823(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_57824 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_57824(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_57826 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_57826(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_57827 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_57827(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_57828 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_57828(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___57829 = arguments.length;
var i__4865__auto___57830 = (0);
while(true){
if((i__4865__auto___57830 < len__4864__auto___57829)){
args__4870__auto__.push((arguments[i__4865__auto___57830]));

var G__57831 = (i__4865__auto___57830 + (1));
i__4865__auto___57830 = G__57831;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56166){
var map__56167 = p__56166;
var map__56167__$1 = cljs.core.__destructure_map(map__56167);
var opts = map__56167__$1;
var statearr_56168_57832 = state;
(statearr_56168_57832[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56169_57833 = state;
(statearr_56169_57833[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_56170_57836 = state;
(statearr_56170_57836[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56157){
var G__56158 = cljs.core.first(seq56157);
var seq56157__$1 = cljs.core.next(seq56157);
var G__56159 = cljs.core.first(seq56157__$1);
var seq56157__$2 = cljs.core.next(seq56157__$1);
var G__56160 = cljs.core.first(seq56157__$2);
var seq56157__$3 = cljs.core.next(seq56157__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56158,G__56159,G__56160,seq56157__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56171 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56172){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56172 = meta56172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56173,meta56172__$1){
var self__ = this;
var _56173__$1 = this;
return (new cljs.core.async.t_cljs$core$async56171(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56172__$1));
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56173){
var self__ = this;
var _56173__$1 = this;
return self__.meta56172;
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56172","meta56172",1878995953,null)], null);
}));

(cljs.core.async.t_cljs$core$async56171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56171");

(cljs.core.async.t_cljs$core$async56171.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56171.
 */
cljs.core.async.__GT_t_cljs$core$async56171 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56172){
return (new cljs.core.async.t_cljs$core$async56171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56172));
});

}

return (new cljs.core.async.t_cljs$core$async56171(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54699__auto___57860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56272){
var state_val_56273 = (state_56272[(1)]);
if((state_val_56273 === (7))){
var inst_56219 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
if(cljs.core.truth_(inst_56219)){
var statearr_56274_57861 = state_56272__$1;
(statearr_56274_57861[(1)] = (8));

} else {
var statearr_56275_57862 = state_56272__$1;
(statearr_56275_57862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (20))){
var inst_56208 = (state_56272[(7)]);
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56272__$1,(23),out,inst_56208);
} else {
if((state_val_56273 === (1))){
var inst_56183 = calc_state();
var inst_56184 = cljs.core.__destructure_map(inst_56183);
var inst_56185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56192 = inst_56183;
var state_56272__$1 = (function (){var statearr_56276 = state_56272;
(statearr_56276[(8)] = inst_56192);

(statearr_56276[(9)] = inst_56190);

(statearr_56276[(10)] = inst_56185);

(statearr_56276[(11)] = inst_56191);

return statearr_56276;
})();
var statearr_56277_57869 = state_56272__$1;
(statearr_56277_57869[(2)] = null);

(statearr_56277_57869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (24))){
var inst_56199 = (state_56272[(12)]);
var inst_56192 = inst_56199;
var state_56272__$1 = (function (){var statearr_56278 = state_56272;
(statearr_56278[(8)] = inst_56192);

return statearr_56278;
})();
var statearr_56279_57870 = state_56272__$1;
(statearr_56279_57870[(2)] = null);

(statearr_56279_57870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (4))){
var inst_56214 = (state_56272[(13)]);
var inst_56208 = (state_56272[(7)]);
var inst_56207 = (state_56272[(2)]);
var inst_56208__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(0),null);
var inst_56209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(1),null);
var inst_56214__$1 = (inst_56208__$1 == null);
var state_56272__$1 = (function (){var statearr_56280 = state_56272;
(statearr_56280[(14)] = inst_56209);

(statearr_56280[(13)] = inst_56214__$1);

(statearr_56280[(7)] = inst_56208__$1);

return statearr_56280;
})();
if(cljs.core.truth_(inst_56214__$1)){
var statearr_56281_57871 = state_56272__$1;
(statearr_56281_57871[(1)] = (5));

} else {
var statearr_56282_57872 = state_56272__$1;
(statearr_56282_57872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (15))){
var inst_56200 = (state_56272[(15)]);
var inst_56238 = (state_56272[(16)]);
var inst_56238__$1 = cljs.core.empty_QMARK_(inst_56200);
var state_56272__$1 = (function (){var statearr_56289 = state_56272;
(statearr_56289[(16)] = inst_56238__$1);

return statearr_56289;
})();
if(inst_56238__$1){
var statearr_56290_57874 = state_56272__$1;
(statearr_56290_57874[(1)] = (17));

} else {
var statearr_56291_57875 = state_56272__$1;
(statearr_56291_57875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (21))){
var inst_56199 = (state_56272[(12)]);
var inst_56192 = inst_56199;
var state_56272__$1 = (function (){var statearr_56292 = state_56272;
(statearr_56292[(8)] = inst_56192);

return statearr_56292;
})();
var statearr_56293_57876 = state_56272__$1;
(statearr_56293_57876[(2)] = null);

(statearr_56293_57876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (13))){
var inst_56226 = (state_56272[(2)]);
var inst_56227 = calc_state();
var inst_56192 = inst_56227;
var state_56272__$1 = (function (){var statearr_56294 = state_56272;
(statearr_56294[(8)] = inst_56192);

(statearr_56294[(17)] = inst_56226);

return statearr_56294;
})();
var statearr_56295_57877 = state_56272__$1;
(statearr_56295_57877[(2)] = null);

(statearr_56295_57877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (22))){
var inst_56266 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56296_57878 = state_56272__$1;
(statearr_56296_57878[(2)] = inst_56266);

(statearr_56296_57878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (6))){
var inst_56209 = (state_56272[(14)]);
var inst_56217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56209,change);
var state_56272__$1 = state_56272;
var statearr_56297_57879 = state_56272__$1;
(statearr_56297_57879[(2)] = inst_56217);

(statearr_56297_57879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (25))){
var state_56272__$1 = state_56272;
var statearr_56298_57880 = state_56272__$1;
(statearr_56298_57880[(2)] = null);

(statearr_56298_57880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (17))){
var inst_56209 = (state_56272[(14)]);
var inst_56201 = (state_56272[(18)]);
var inst_56244 = (inst_56201.cljs$core$IFn$_invoke$arity$1 ? inst_56201.cljs$core$IFn$_invoke$arity$1(inst_56209) : inst_56201.call(null,inst_56209));
var inst_56245 = cljs.core.not(inst_56244);
var state_56272__$1 = state_56272;
var statearr_56299_57881 = state_56272__$1;
(statearr_56299_57881[(2)] = inst_56245);

(statearr_56299_57881[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (3))){
var inst_56270 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56272__$1,inst_56270);
} else {
if((state_val_56273 === (12))){
var state_56272__$1 = state_56272;
var statearr_56300_57888 = state_56272__$1;
(statearr_56300_57888[(2)] = null);

(statearr_56300_57888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (2))){
var inst_56192 = (state_56272[(8)]);
var inst_56199 = (state_56272[(12)]);
var inst_56199__$1 = cljs.core.__destructure_map(inst_56192);
var inst_56200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56199__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56199__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56199__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56272__$1 = (function (){var statearr_56301 = state_56272;
(statearr_56301[(12)] = inst_56199__$1);

(statearr_56301[(15)] = inst_56200);

(statearr_56301[(18)] = inst_56201);

return statearr_56301;
})();
return cljs.core.async.ioc_alts_BANG_(state_56272__$1,(4),inst_56202);
} else {
if((state_val_56273 === (23))){
var inst_56253 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
if(cljs.core.truth_(inst_56253)){
var statearr_56302_57889 = state_56272__$1;
(statearr_56302_57889[(1)] = (24));

} else {
var statearr_56303_57890 = state_56272__$1;
(statearr_56303_57890[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (19))){
var inst_56248 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56304_57891 = state_56272__$1;
(statearr_56304_57891[(2)] = inst_56248);

(statearr_56304_57891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (11))){
var inst_56209 = (state_56272[(14)]);
var inst_56223 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56209);
var state_56272__$1 = state_56272;
var statearr_56305_57892 = state_56272__$1;
(statearr_56305_57892[(2)] = inst_56223);

(statearr_56305_57892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (9))){
var inst_56209 = (state_56272[(14)]);
var inst_56200 = (state_56272[(15)]);
var inst_56234 = (state_56272[(19)]);
var inst_56234__$1 = (inst_56200.cljs$core$IFn$_invoke$arity$1 ? inst_56200.cljs$core$IFn$_invoke$arity$1(inst_56209) : inst_56200.call(null,inst_56209));
var state_56272__$1 = (function (){var statearr_56307 = state_56272;
(statearr_56307[(19)] = inst_56234__$1);

return statearr_56307;
})();
if(cljs.core.truth_(inst_56234__$1)){
var statearr_56308_57893 = state_56272__$1;
(statearr_56308_57893[(1)] = (14));

} else {
var statearr_56309_57894 = state_56272__$1;
(statearr_56309_57894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (5))){
var inst_56214 = (state_56272[(13)]);
var state_56272__$1 = state_56272;
var statearr_56310_57895 = state_56272__$1;
(statearr_56310_57895[(2)] = inst_56214);

(statearr_56310_57895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (14))){
var inst_56234 = (state_56272[(19)]);
var state_56272__$1 = state_56272;
var statearr_56311_57896 = state_56272__$1;
(statearr_56311_57896[(2)] = inst_56234);

(statearr_56311_57896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (26))){
var inst_56262 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56312_57897 = state_56272__$1;
(statearr_56312_57897[(2)] = inst_56262);

(statearr_56312_57897[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (16))){
var inst_56250 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
if(cljs.core.truth_(inst_56250)){
var statearr_56313_57898 = state_56272__$1;
(statearr_56313_57898[(1)] = (20));

} else {
var statearr_56314_57899 = state_56272__$1;
(statearr_56314_57899[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (10))){
var inst_56268 = (state_56272[(2)]);
var state_56272__$1 = state_56272;
var statearr_56315_57900 = state_56272__$1;
(statearr_56315_57900[(2)] = inst_56268);

(statearr_56315_57900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (18))){
var inst_56238 = (state_56272[(16)]);
var state_56272__$1 = state_56272;
var statearr_56316_57907 = state_56272__$1;
(statearr_56316_57907[(2)] = inst_56238);

(statearr_56316_57907[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56273 === (8))){
var inst_56208 = (state_56272[(7)]);
var inst_56221 = (inst_56208 == null);
var state_56272__$1 = state_56272;
if(cljs.core.truth_(inst_56221)){
var statearr_56317_57908 = state_56272__$1;
(statearr_56317_57908[(1)] = (11));

} else {
var statearr_56318_57909 = state_56272__$1;
(statearr_56318_57909[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54450__auto__ = null;
var cljs$core$async$mix_$_state_machine__54450__auto____0 = (function (){
var statearr_56319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56319[(0)] = cljs$core$async$mix_$_state_machine__54450__auto__);

(statearr_56319[(1)] = (1));

return statearr_56319;
});
var cljs$core$async$mix_$_state_machine__54450__auto____1 = (function (state_56272){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56272);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56320){var ex__54453__auto__ = e56320;
var statearr_56321_57910 = state_56272;
(statearr_56321_57910[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56272[(4)]))){
var statearr_56322_57911 = state_56272;
(statearr_56322_57911[(1)] = cljs.core.first((state_56272[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57912 = state_56272;
state_56272 = G__57912;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54450__auto__ = function(state_56272){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54450__auto____1.call(this,state_56272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54450__auto____0;
cljs$core$async$mix_$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54450__auto____1;
return cljs$core$async$mix_$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56323 = f__54702__auto__();
(statearr_56323[(6)] = c__54699__auto___57860);

return statearr_56323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_57920 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_57920(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_57922 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_57922(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_57927 = (function() {
var G__57928 = null;
var G__57928__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__57928__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__57928 = function(p,v){
switch(arguments.length){
case 1:
return G__57928__1.call(this,p);
case 2:
return G__57928__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57928.cljs$core$IFn$_invoke$arity$1 = G__57928__1;
G__57928.cljs$core$IFn$_invoke$arity$2 = G__57928__2;
return G__57928;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56326 = arguments.length;
switch (G__56326) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_57927(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_57927(p,v);
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
var G__56330 = arguments.length;
switch (G__56330) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56328_SHARP_){
if(cljs.core.truth_((p1__56328_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56328_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56328_SHARP_.call(null,topic)))){
return p1__56328_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56328_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56331 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56332){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56332 = meta56332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56333,meta56332__$1){
var self__ = this;
var _56333__$1 = this;
return (new cljs.core.async.t_cljs$core$async56331(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56332__$1));
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56333){
var self__ = this;
var _56333__$1 = this;
return self__.meta56332;
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56331.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56332","meta56332",1231414006,null)], null);
}));

(cljs.core.async.t_cljs$core$async56331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56331");

(cljs.core.async.t_cljs$core$async56331.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56331.
 */
cljs.core.async.__GT_t_cljs$core$async56331 = (function cljs$core$async$__GT_t_cljs$core$async56331(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56332){
return (new cljs.core.async.t_cljs$core$async56331(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56332));
});

}

return (new cljs.core.async.t_cljs$core$async56331(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__54699__auto___57931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56412){
var state_val_56414 = (state_56412[(1)]);
if((state_val_56414 === (7))){
var inst_56408 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56418_57933 = state_56412__$1;
(statearr_56418_57933[(2)] = inst_56408);

(statearr_56418_57933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (20))){
var state_56412__$1 = state_56412;
var statearr_56420_57934 = state_56412__$1;
(statearr_56420_57934[(2)] = null);

(statearr_56420_57934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (1))){
var state_56412__$1 = state_56412;
var statearr_56425_57935 = state_56412__$1;
(statearr_56425_57935[(2)] = null);

(statearr_56425_57935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (24))){
var inst_56391 = (state_56412[(7)]);
var inst_56400 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_56391);
var state_56412__$1 = state_56412;
var statearr_56430_57936 = state_56412__$1;
(statearr_56430_57936[(2)] = inst_56400);

(statearr_56430_57936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (4))){
var inst_56338 = (state_56412[(8)]);
var inst_56338__$1 = (state_56412[(2)]);
var inst_56340 = (inst_56338__$1 == null);
var state_56412__$1 = (function (){var statearr_56433 = state_56412;
(statearr_56433[(8)] = inst_56338__$1);

return statearr_56433;
})();
if(cljs.core.truth_(inst_56340)){
var statearr_56435_57939 = state_56412__$1;
(statearr_56435_57939[(1)] = (5));

} else {
var statearr_56436_57940 = state_56412__$1;
(statearr_56436_57940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (15))){
var inst_56385 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56441_57941 = state_56412__$1;
(statearr_56441_57941[(2)] = inst_56385);

(statearr_56441_57941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (21))){
var inst_56405 = (state_56412[(2)]);
var state_56412__$1 = (function (){var statearr_56442 = state_56412;
(statearr_56442[(9)] = inst_56405);

return statearr_56442;
})();
var statearr_56443_57942 = state_56412__$1;
(statearr_56443_57942[(2)] = null);

(statearr_56443_57942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (13))){
var inst_56367 = (state_56412[(10)]);
var inst_56369 = cljs.core.chunked_seq_QMARK_(inst_56367);
var state_56412__$1 = state_56412;
if(inst_56369){
var statearr_56444_57943 = state_56412__$1;
(statearr_56444_57943[(1)] = (16));

} else {
var statearr_56445_57944 = state_56412__$1;
(statearr_56445_57944[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (22))){
var inst_56397 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
if(cljs.core.truth_(inst_56397)){
var statearr_56446_57946 = state_56412__$1;
(statearr_56446_57946[(1)] = (23));

} else {
var statearr_56447_57947 = state_56412__$1;
(statearr_56447_57947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (6))){
var inst_56391 = (state_56412[(7)]);
var inst_56393 = (state_56412[(11)]);
var inst_56338 = (state_56412[(8)]);
var inst_56391__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56338) : topic_fn.call(null,inst_56338));
var inst_56392 = cljs.core.deref(mults);
var inst_56393__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56392,inst_56391__$1);
var state_56412__$1 = (function (){var statearr_56448 = state_56412;
(statearr_56448[(7)] = inst_56391__$1);

(statearr_56448[(11)] = inst_56393__$1);

return statearr_56448;
})();
if(cljs.core.truth_(inst_56393__$1)){
var statearr_56449_57949 = state_56412__$1;
(statearr_56449_57949[(1)] = (19));

} else {
var statearr_56450_57950 = state_56412__$1;
(statearr_56450_57950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (25))){
var inst_56402 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56451_57951 = state_56412__$1;
(statearr_56451_57951[(2)] = inst_56402);

(statearr_56451_57951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (17))){
var inst_56367 = (state_56412[(10)]);
var inst_56376 = cljs.core.first(inst_56367);
var inst_56377 = cljs.core.async.muxch_STAR_(inst_56376);
var inst_56378 = cljs.core.async.close_BANG_(inst_56377);
var inst_56379 = cljs.core.next(inst_56367);
var inst_56351 = inst_56379;
var inst_56352 = null;
var inst_56353 = (0);
var inst_56354 = (0);
var state_56412__$1 = (function (){var statearr_56452 = state_56412;
(statearr_56452[(12)] = inst_56378);

(statearr_56452[(13)] = inst_56351);

(statearr_56452[(14)] = inst_56354);

(statearr_56452[(15)] = inst_56352);

(statearr_56452[(16)] = inst_56353);

return statearr_56452;
})();
var statearr_56453_57952 = state_56412__$1;
(statearr_56453_57952[(2)] = null);

(statearr_56453_57952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (3))){
var inst_56410 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56412__$1,inst_56410);
} else {
if((state_val_56414 === (12))){
var inst_56387 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56454_57953 = state_56412__$1;
(statearr_56454_57953[(2)] = inst_56387);

(statearr_56454_57953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (2))){
var state_56412__$1 = state_56412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56412__$1,(4),ch);
} else {
if((state_val_56414 === (23))){
var state_56412__$1 = state_56412;
var statearr_56455_57954 = state_56412__$1;
(statearr_56455_57954[(2)] = null);

(statearr_56455_57954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (19))){
var inst_56393 = (state_56412[(11)]);
var inst_56338 = (state_56412[(8)]);
var inst_56395 = cljs.core.async.muxch_STAR_(inst_56393);
var state_56412__$1 = state_56412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56412__$1,(22),inst_56395,inst_56338);
} else {
if((state_val_56414 === (11))){
var inst_56351 = (state_56412[(13)]);
var inst_56367 = (state_56412[(10)]);
var inst_56367__$1 = cljs.core.seq(inst_56351);
var state_56412__$1 = (function (){var statearr_56456 = state_56412;
(statearr_56456[(10)] = inst_56367__$1);

return statearr_56456;
})();
if(inst_56367__$1){
var statearr_56457_57955 = state_56412__$1;
(statearr_56457_57955[(1)] = (13));

} else {
var statearr_56458_57956 = state_56412__$1;
(statearr_56458_57956[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (9))){
var inst_56389 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56459_57957 = state_56412__$1;
(statearr_56459_57957[(2)] = inst_56389);

(statearr_56459_57957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (5))){
var inst_56347 = cljs.core.deref(mults);
var inst_56348 = cljs.core.vals(inst_56347);
var inst_56350 = cljs.core.seq(inst_56348);
var inst_56351 = inst_56350;
var inst_56352 = null;
var inst_56353 = (0);
var inst_56354 = (0);
var state_56412__$1 = (function (){var statearr_56460 = state_56412;
(statearr_56460[(13)] = inst_56351);

(statearr_56460[(14)] = inst_56354);

(statearr_56460[(15)] = inst_56352);

(statearr_56460[(16)] = inst_56353);

return statearr_56460;
})();
var statearr_56461_57958 = state_56412__$1;
(statearr_56461_57958[(2)] = null);

(statearr_56461_57958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (14))){
var state_56412__$1 = state_56412;
var statearr_56465_57959 = state_56412__$1;
(statearr_56465_57959[(2)] = null);

(statearr_56465_57959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (16))){
var inst_56367 = (state_56412[(10)]);
var inst_56371 = cljs.core.chunk_first(inst_56367);
var inst_56372 = cljs.core.chunk_rest(inst_56367);
var inst_56373 = cljs.core.count(inst_56371);
var inst_56351 = inst_56372;
var inst_56352 = inst_56371;
var inst_56353 = inst_56373;
var inst_56354 = (0);
var state_56412__$1 = (function (){var statearr_56466 = state_56412;
(statearr_56466[(13)] = inst_56351);

(statearr_56466[(14)] = inst_56354);

(statearr_56466[(15)] = inst_56352);

(statearr_56466[(16)] = inst_56353);

return statearr_56466;
})();
var statearr_56467_57960 = state_56412__$1;
(statearr_56467_57960[(2)] = null);

(statearr_56467_57960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (10))){
var inst_56351 = (state_56412[(13)]);
var inst_56354 = (state_56412[(14)]);
var inst_56352 = (state_56412[(15)]);
var inst_56353 = (state_56412[(16)]);
var inst_56359 = cljs.core._nth(inst_56352,inst_56354);
var inst_56360 = cljs.core.async.muxch_STAR_(inst_56359);
var inst_56361 = cljs.core.async.close_BANG_(inst_56360);
var inst_56363 = (inst_56354 + (1));
var tmp56462 = inst_56351;
var tmp56463 = inst_56352;
var tmp56464 = inst_56353;
var inst_56351__$1 = tmp56462;
var inst_56352__$1 = tmp56463;
var inst_56353__$1 = tmp56464;
var inst_56354__$1 = inst_56363;
var state_56412__$1 = (function (){var statearr_56468 = state_56412;
(statearr_56468[(13)] = inst_56351__$1);

(statearr_56468[(17)] = inst_56361);

(statearr_56468[(14)] = inst_56354__$1);

(statearr_56468[(15)] = inst_56352__$1);

(statearr_56468[(16)] = inst_56353__$1);

return statearr_56468;
})();
var statearr_56469_57961 = state_56412__$1;
(statearr_56469_57961[(2)] = null);

(statearr_56469_57961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (18))){
var inst_56382 = (state_56412[(2)]);
var state_56412__$1 = state_56412;
var statearr_56470_57963 = state_56412__$1;
(statearr_56470_57963[(2)] = inst_56382);

(statearr_56470_57963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56414 === (8))){
var inst_56354 = (state_56412[(14)]);
var inst_56353 = (state_56412[(16)]);
var inst_56356 = (inst_56354 < inst_56353);
var inst_56357 = inst_56356;
var state_56412__$1 = state_56412;
if(cljs.core.truth_(inst_56357)){
var statearr_56471_57965 = state_56412__$1;
(statearr_56471_57965[(1)] = (10));

} else {
var statearr_56472_57966 = state_56412__$1;
(statearr_56472_57966[(1)] = (11));

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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_56473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56473[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_56473[(1)] = (1));

return statearr_56473;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_56412){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56412);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56474){var ex__54453__auto__ = e56474;
var statearr_56475_57967 = state_56412;
(statearr_56475_57967[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56412[(4)]))){
var statearr_56477_57968 = state_56412;
(statearr_56477_57968[(1)] = cljs.core.first((state_56412[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57969 = state_56412;
state_56412 = G__57969;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_56412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_56412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56478 = f__54702__auto__();
(statearr_56478[(6)] = c__54699__auto___57931);

return statearr_56478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var G__56480 = arguments.length;
switch (G__56480) {
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
var G__56483 = arguments.length;
switch (G__56483) {
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
var G__56509 = arguments.length;
switch (G__56509) {
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
var c__54699__auto___57974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56570){
var state_val_56571 = (state_56570[(1)]);
if((state_val_56571 === (7))){
var state_56570__$1 = state_56570;
var statearr_56573_57975 = state_56570__$1;
(statearr_56573_57975[(2)] = null);

(statearr_56573_57975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (1))){
var state_56570__$1 = state_56570;
var statearr_56574_57976 = state_56570__$1;
(statearr_56574_57976[(2)] = null);

(statearr_56574_57976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (4))){
var inst_56525 = (state_56570[(7)]);
var inst_56524 = (state_56570[(8)]);
var inst_56527 = (inst_56525 < inst_56524);
var state_56570__$1 = state_56570;
if(cljs.core.truth_(inst_56527)){
var statearr_56575_57977 = state_56570__$1;
(statearr_56575_57977[(1)] = (6));

} else {
var statearr_56576_57978 = state_56570__$1;
(statearr_56576_57978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (15))){
var inst_56554 = (state_56570[(9)]);
var inst_56559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_56554);
var state_56570__$1 = state_56570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56570__$1,(17),out,inst_56559);
} else {
if((state_val_56571 === (13))){
var inst_56554 = (state_56570[(9)]);
var inst_56554__$1 = (state_56570[(2)]);
var inst_56555 = cljs.core.some(cljs.core.nil_QMARK_,inst_56554__$1);
var state_56570__$1 = (function (){var statearr_56577 = state_56570;
(statearr_56577[(9)] = inst_56554__$1);

return statearr_56577;
})();
if(cljs.core.truth_(inst_56555)){
var statearr_56578_57983 = state_56570__$1;
(statearr_56578_57983[(1)] = (14));

} else {
var statearr_56579_57984 = state_56570__$1;
(statearr_56579_57984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (6))){
var state_56570__$1 = state_56570;
var statearr_56580_57985 = state_56570__$1;
(statearr_56580_57985[(2)] = null);

(statearr_56580_57985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (17))){
var inst_56562 = (state_56570[(2)]);
var state_56570__$1 = (function (){var statearr_56582 = state_56570;
(statearr_56582[(10)] = inst_56562);

return statearr_56582;
})();
var statearr_56583_57987 = state_56570__$1;
(statearr_56583_57987[(2)] = null);

(statearr_56583_57987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (3))){
var inst_56568 = (state_56570[(2)]);
var state_56570__$1 = state_56570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56570__$1,inst_56568);
} else {
if((state_val_56571 === (12))){
var _ = (function (){var statearr_56584 = state_56570;
(statearr_56584[(4)] = cljs.core.rest((state_56570[(4)])));

return statearr_56584;
})();
var state_56570__$1 = state_56570;
var ex56581 = (state_56570__$1[(2)]);
var statearr_56585_57988 = state_56570__$1;
(statearr_56585_57988[(5)] = ex56581);


if((ex56581 instanceof Object)){
var statearr_56586_57989 = state_56570__$1;
(statearr_56586_57989[(1)] = (11));

(statearr_56586_57989[(5)] = null);

} else {
throw ex56581;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (2))){
var inst_56523 = cljs.core.reset_BANG_(dctr,cnt);
var inst_56524 = cnt;
var inst_56525 = (0);
var state_56570__$1 = (function (){var statearr_56587 = state_56570;
(statearr_56587[(7)] = inst_56525);

(statearr_56587[(11)] = inst_56523);

(statearr_56587[(8)] = inst_56524);

return statearr_56587;
})();
var statearr_56588_57990 = state_56570__$1;
(statearr_56588_57990[(2)] = null);

(statearr_56588_57990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (11))){
var inst_56532 = (state_56570[(2)]);
var inst_56533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_56570__$1 = (function (){var statearr_56589 = state_56570;
(statearr_56589[(12)] = inst_56532);

return statearr_56589;
})();
var statearr_56590_57991 = state_56570__$1;
(statearr_56590_57991[(2)] = inst_56533);

(statearr_56590_57991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (9))){
var inst_56525 = (state_56570[(7)]);
var _ = (function (){var statearr_56591 = state_56570;
(statearr_56591[(4)] = cljs.core.cons((12),(state_56570[(4)])));

return statearr_56591;
})();
var inst_56540 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_56525) : chs__$1.call(null,inst_56525));
var inst_56541 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_56525) : done.call(null,inst_56525));
var inst_56542 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_56540,inst_56541);
var ___$1 = (function (){var statearr_56592 = state_56570;
(statearr_56592[(4)] = cljs.core.rest((state_56570[(4)])));

return statearr_56592;
})();
var state_56570__$1 = state_56570;
var statearr_56593_57992 = state_56570__$1;
(statearr_56593_57992[(2)] = inst_56542);

(statearr_56593_57992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (5))){
var inst_56552 = (state_56570[(2)]);
var state_56570__$1 = (function (){var statearr_56594 = state_56570;
(statearr_56594[(13)] = inst_56552);

return statearr_56594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56570__$1,(13),dchan);
} else {
if((state_val_56571 === (14))){
var inst_56557 = cljs.core.async.close_BANG_(out);
var state_56570__$1 = state_56570;
var statearr_56595_57993 = state_56570__$1;
(statearr_56595_57993[(2)] = inst_56557);

(statearr_56595_57993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (16))){
var inst_56565 = (state_56570[(2)]);
var state_56570__$1 = state_56570;
var statearr_56596_57994 = state_56570__$1;
(statearr_56596_57994[(2)] = inst_56565);

(statearr_56596_57994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (10))){
var inst_56525 = (state_56570[(7)]);
var inst_56545 = (state_56570[(2)]);
var inst_56546 = (inst_56525 + (1));
var inst_56525__$1 = inst_56546;
var state_56570__$1 = (function (){var statearr_56599 = state_56570;
(statearr_56599[(7)] = inst_56525__$1);

(statearr_56599[(14)] = inst_56545);

return statearr_56599;
})();
var statearr_56600_58009 = state_56570__$1;
(statearr_56600_58009[(2)] = null);

(statearr_56600_58009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56571 === (8))){
var inst_56550 = (state_56570[(2)]);
var state_56570__$1 = state_56570;
var statearr_56603_58010 = state_56570__$1;
(statearr_56603_58010[(2)] = inst_56550);

(statearr_56603_58010[(1)] = (5));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_56604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56604[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_56604[(1)] = (1));

return statearr_56604;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_56570){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56570);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56607){var ex__54453__auto__ = e56607;
var statearr_56608_58012 = state_56570;
(statearr_56608_58012[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56570[(4)]))){
var statearr_56609_58013 = state_56570;
(statearr_56609_58013[(1)] = cljs.core.first((state_56570[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58014 = state_56570;
state_56570 = G__58014;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_56570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_56570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56610 = f__54702__auto__();
(statearr_56610[(6)] = c__54699__auto___57974);

return statearr_56610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var G__56613 = arguments.length;
switch (G__56613) {
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
var c__54699__auto___58016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56648){
var state_val_56649 = (state_56648[(1)]);
if((state_val_56649 === (7))){
var inst_56625 = (state_56648[(7)]);
var inst_56626 = (state_56648[(8)]);
var inst_56625__$1 = (state_56648[(2)]);
var inst_56626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56625__$1,(0),null);
var inst_56629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56625__$1,(1),null);
var inst_56630 = (inst_56626__$1 == null);
var state_56648__$1 = (function (){var statearr_56652 = state_56648;
(statearr_56652[(9)] = inst_56629);

(statearr_56652[(7)] = inst_56625__$1);

(statearr_56652[(8)] = inst_56626__$1);

return statearr_56652;
})();
if(cljs.core.truth_(inst_56630)){
var statearr_56654_58020 = state_56648__$1;
(statearr_56654_58020[(1)] = (8));

} else {
var statearr_56655_58021 = state_56648__$1;
(statearr_56655_58021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (1))){
var inst_56615 = cljs.core.vec(chs);
var inst_56616 = inst_56615;
var state_56648__$1 = (function (){var statearr_56656 = state_56648;
(statearr_56656[(10)] = inst_56616);

return statearr_56656;
})();
var statearr_56657_58022 = state_56648__$1;
(statearr_56657_58022[(2)] = null);

(statearr_56657_58022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (4))){
var inst_56616 = (state_56648[(10)]);
var state_56648__$1 = state_56648;
return cljs.core.async.ioc_alts_BANG_(state_56648__$1,(7),inst_56616);
} else {
if((state_val_56649 === (6))){
var inst_56644 = (state_56648[(2)]);
var state_56648__$1 = state_56648;
var statearr_56658_58023 = state_56648__$1;
(statearr_56658_58023[(2)] = inst_56644);

(statearr_56658_58023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (3))){
var inst_56646 = (state_56648[(2)]);
var state_56648__$1 = state_56648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56648__$1,inst_56646);
} else {
if((state_val_56649 === (2))){
var inst_56616 = (state_56648[(10)]);
var inst_56618 = cljs.core.count(inst_56616);
var inst_56619 = (inst_56618 > (0));
var state_56648__$1 = state_56648;
if(cljs.core.truth_(inst_56619)){
var statearr_56661_58025 = state_56648__$1;
(statearr_56661_58025[(1)] = (4));

} else {
var statearr_56662_58029 = state_56648__$1;
(statearr_56662_58029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (11))){
var inst_56616 = (state_56648[(10)]);
var inst_56637 = (state_56648[(2)]);
var tmp56659 = inst_56616;
var inst_56616__$1 = tmp56659;
var state_56648__$1 = (function (){var statearr_56663 = state_56648;
(statearr_56663[(10)] = inst_56616__$1);

(statearr_56663[(11)] = inst_56637);

return statearr_56663;
})();
var statearr_56664_58031 = state_56648__$1;
(statearr_56664_58031[(2)] = null);

(statearr_56664_58031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (9))){
var inst_56626 = (state_56648[(8)]);
var state_56648__$1 = state_56648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56648__$1,(11),out,inst_56626);
} else {
if((state_val_56649 === (5))){
var inst_56642 = cljs.core.async.close_BANG_(out);
var state_56648__$1 = state_56648;
var statearr_56665_58032 = state_56648__$1;
(statearr_56665_58032[(2)] = inst_56642);

(statearr_56665_58032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (10))){
var inst_56640 = (state_56648[(2)]);
var state_56648__$1 = state_56648;
var statearr_56667_58033 = state_56648__$1;
(statearr_56667_58033[(2)] = inst_56640);

(statearr_56667_58033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (8))){
var inst_56616 = (state_56648[(10)]);
var inst_56629 = (state_56648[(9)]);
var inst_56625 = (state_56648[(7)]);
var inst_56626 = (state_56648[(8)]);
var inst_56632 = (function (){var cs = inst_56616;
var vec__56621 = inst_56625;
var v = inst_56626;
var c = inst_56629;
return (function (p1__56611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__56611_SHARP_);
});
})();
var inst_56633 = cljs.core.filterv(inst_56632,inst_56616);
var inst_56616__$1 = inst_56633;
var state_56648__$1 = (function (){var statearr_56668 = state_56648;
(statearr_56668[(10)] = inst_56616__$1);

return statearr_56668;
})();
var statearr_56669_58034 = state_56648__$1;
(statearr_56669_58034[(2)] = null);

(statearr_56669_58034[(1)] = (2));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_56670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56670[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_56670[(1)] = (1));

return statearr_56670;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_56648){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56648);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56671){var ex__54453__auto__ = e56671;
var statearr_56672_58035 = state_56648;
(statearr_56672_58035[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56648[(4)]))){
var statearr_56673_58036 = state_56648;
(statearr_56673_58036[(1)] = cljs.core.first((state_56648[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58037 = state_56648;
state_56648 = G__58037;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_56648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_56648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56674 = f__54702__auto__();
(statearr_56674[(6)] = c__54699__auto___58016);

return statearr_56674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
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
var G__56677 = arguments.length;
switch (G__56677) {
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
var c__54699__auto___58039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56704){
var state_val_56705 = (state_56704[(1)]);
if((state_val_56705 === (7))){
var inst_56686 = (state_56704[(7)]);
var inst_56686__$1 = (state_56704[(2)]);
var inst_56687 = (inst_56686__$1 == null);
var inst_56688 = cljs.core.not(inst_56687);
var state_56704__$1 = (function (){var statearr_56706 = state_56704;
(statearr_56706[(7)] = inst_56686__$1);

return statearr_56706;
})();
if(inst_56688){
var statearr_56707_58040 = state_56704__$1;
(statearr_56707_58040[(1)] = (8));

} else {
var statearr_56708_58041 = state_56704__$1;
(statearr_56708_58041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (1))){
var inst_56681 = (0);
var state_56704__$1 = (function (){var statearr_56715 = state_56704;
(statearr_56715[(8)] = inst_56681);

return statearr_56715;
})();
var statearr_56716_58042 = state_56704__$1;
(statearr_56716_58042[(2)] = null);

(statearr_56716_58042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (4))){
var state_56704__$1 = state_56704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56704__$1,(7),ch);
} else {
if((state_val_56705 === (6))){
var inst_56699 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56723_58043 = state_56704__$1;
(statearr_56723_58043[(2)] = inst_56699);

(statearr_56723_58043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (3))){
var inst_56701 = (state_56704[(2)]);
var inst_56702 = cljs.core.async.close_BANG_(out);
var state_56704__$1 = (function (){var statearr_56726 = state_56704;
(statearr_56726[(9)] = inst_56701);

return statearr_56726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56704__$1,inst_56702);
} else {
if((state_val_56705 === (2))){
var inst_56681 = (state_56704[(8)]);
var inst_56683 = (inst_56681 < n);
var state_56704__$1 = state_56704;
if(cljs.core.truth_(inst_56683)){
var statearr_56727_58044 = state_56704__$1;
(statearr_56727_58044[(1)] = (4));

} else {
var statearr_56728_58045 = state_56704__$1;
(statearr_56728_58045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (11))){
var inst_56681 = (state_56704[(8)]);
var inst_56691 = (state_56704[(2)]);
var inst_56692 = (inst_56681 + (1));
var inst_56681__$1 = inst_56692;
var state_56704__$1 = (function (){var statearr_56729 = state_56704;
(statearr_56729[(8)] = inst_56681__$1);

(statearr_56729[(10)] = inst_56691);

return statearr_56729;
})();
var statearr_56730_58046 = state_56704__$1;
(statearr_56730_58046[(2)] = null);

(statearr_56730_58046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (9))){
var state_56704__$1 = state_56704;
var statearr_56731_58049 = state_56704__$1;
(statearr_56731_58049[(2)] = null);

(statearr_56731_58049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (5))){
var state_56704__$1 = state_56704;
var statearr_56732_58051 = state_56704__$1;
(statearr_56732_58051[(2)] = null);

(statearr_56732_58051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (10))){
var inst_56696 = (state_56704[(2)]);
var state_56704__$1 = state_56704;
var statearr_56738_58052 = state_56704__$1;
(statearr_56738_58052[(2)] = inst_56696);

(statearr_56738_58052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56705 === (8))){
var inst_56686 = (state_56704[(7)]);
var state_56704__$1 = state_56704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56704__$1,(11),out,inst_56686);
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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_56739 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56739[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_56739[(1)] = (1));

return statearr_56739;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_56704){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56704);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56743){var ex__54453__auto__ = e56743;
var statearr_56744_58053 = state_56704;
(statearr_56744_58053[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56704[(4)]))){
var statearr_56745_58054 = state_56704;
(statearr_56745_58054[(1)] = cljs.core.first((state_56704[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58055 = state_56704;
state_56704 = G__58055;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_56704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_56704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56746 = f__54702__auto__();
(statearr_56746[(6)] = c__54699__auto___58039);

return statearr_56746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56756 = (function (f,ch,meta56757){
this.f = f;
this.ch = ch;
this.meta56757 = meta56757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56758,meta56757__$1){
var self__ = this;
var _56758__$1 = this;
return (new cljs.core.async.t_cljs$core$async56756(self__.f,self__.ch,meta56757__$1));
}));

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56758){
var self__ = this;
var _56758__$1 = this;
return self__.meta56757;
}));

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56761 = (function (f,ch,meta56757,_,fn1,meta56762){
this.f = f;
this.ch = ch;
this.meta56757 = meta56757;
this._ = _;
this.fn1 = fn1;
this.meta56762 = meta56762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56763,meta56762__$1){
var self__ = this;
var _56763__$1 = this;
return (new cljs.core.async.t_cljs$core$async56761(self__.f,self__.ch,self__.meta56757,self__._,self__.fn1,meta56762__$1));
}));

(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56763){
var self__ = this;
var _56763__$1 = this;
return self__.meta56762;
}));

(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__56755_SHARP_){
var G__56764 = (((p1__56755_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__56755_SHARP_) : self__.f.call(null,p1__56755_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__56764) : f1.call(null,G__56764));
});
}));

(cljs.core.async.t_cljs$core$async56761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56757","meta56757",-203668818,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56756","cljs.core.async/t_cljs$core$async56756",-2029434373,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56762","meta56762",1937313827,null)], null);
}));

(cljs.core.async.t_cljs$core$async56761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56761");

(cljs.core.async.t_cljs$core$async56761.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56761.
 */
cljs.core.async.__GT_t_cljs$core$async56761 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56761(f__$1,ch__$1,meta56757__$1,___$2,fn1__$1,meta56762){
return (new cljs.core.async.t_cljs$core$async56761(f__$1,ch__$1,meta56757__$1,___$2,fn1__$1,meta56762));
});

}

return (new cljs.core.async.t_cljs$core$async56761(self__.f,self__.ch,self__.meta56757,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__56766 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__56766) : self__.f.call(null,G__56766));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async56756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56757","meta56757",-203668818,null)], null);
}));

(cljs.core.async.t_cljs$core$async56756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56756");

(cljs.core.async.t_cljs$core$async56756.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56756.
 */
cljs.core.async.__GT_t_cljs$core$async56756 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56756(f__$1,ch__$1,meta56757){
return (new cljs.core.async.t_cljs$core$async56756(f__$1,ch__$1,meta56757));
});

}

return (new cljs.core.async.t_cljs$core$async56756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56767 = (function (f,ch,meta56768){
this.f = f;
this.ch = ch;
this.meta56768 = meta56768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56769,meta56768__$1){
var self__ = this;
var _56769__$1 = this;
return (new cljs.core.async.t_cljs$core$async56767(self__.f,self__.ch,meta56768__$1));
}));

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56769){
var self__ = this;
var _56769__$1 = this;
return self__.meta56768;
}));

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async56767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56768","meta56768",-166468820,null)], null);
}));

(cljs.core.async.t_cljs$core$async56767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56767");

(cljs.core.async.t_cljs$core$async56767.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56767.
 */
cljs.core.async.__GT_t_cljs$core$async56767 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56767(f__$1,ch__$1,meta56768){
return (new cljs.core.async.t_cljs$core$async56767(f__$1,ch__$1,meta56768));
});

}

return (new cljs.core.async.t_cljs$core$async56767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56803 = (function (p,ch,meta56804){
this.p = p;
this.ch = ch;
this.meta56804 = meta56804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56805,meta56804__$1){
var self__ = this;
var _56805__$1 = this;
return (new cljs.core.async.t_cljs$core$async56803(self__.p,self__.ch,meta56804__$1));
}));

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56805){
var self__ = this;
var _56805__$1 = this;
return self__.meta56804;
}));

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async56803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56804","meta56804",-1009183391,null)], null);
}));

(cljs.core.async.t_cljs$core$async56803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56803");

(cljs.core.async.t_cljs$core$async56803.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async56803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56803.
 */
cljs.core.async.__GT_t_cljs$core$async56803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56803(p__$1,ch__$1,meta56804){
return (new cljs.core.async.t_cljs$core$async56803(p__$1,ch__$1,meta56804));
});

}

return (new cljs.core.async.t_cljs$core$async56803(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56816 = arguments.length;
switch (G__56816) {
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
var c__54699__auto___58072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56848){
var state_val_56849 = (state_56848[(1)]);
if((state_val_56849 === (7))){
var inst_56835 = (state_56848[(2)]);
var state_56848__$1 = state_56848;
var statearr_56854_58073 = state_56848__$1;
(statearr_56854_58073[(2)] = inst_56835);

(statearr_56854_58073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (1))){
var state_56848__$1 = state_56848;
var statearr_56859_58074 = state_56848__$1;
(statearr_56859_58074[(2)] = null);

(statearr_56859_58074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (4))){
var inst_56821 = (state_56848[(7)]);
var inst_56821__$1 = (state_56848[(2)]);
var inst_56822 = (inst_56821__$1 == null);
var state_56848__$1 = (function (){var statearr_56860 = state_56848;
(statearr_56860[(7)] = inst_56821__$1);

return statearr_56860;
})();
if(cljs.core.truth_(inst_56822)){
var statearr_56861_58075 = state_56848__$1;
(statearr_56861_58075[(1)] = (5));

} else {
var statearr_56862_58076 = state_56848__$1;
(statearr_56862_58076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (6))){
var inst_56821 = (state_56848[(7)]);
var inst_56826 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56821) : p.call(null,inst_56821));
var state_56848__$1 = state_56848;
if(cljs.core.truth_(inst_56826)){
var statearr_56863_58078 = state_56848__$1;
(statearr_56863_58078[(1)] = (8));

} else {
var statearr_56864_58079 = state_56848__$1;
(statearr_56864_58079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (3))){
var inst_56837 = (state_56848[(2)]);
var state_56848__$1 = state_56848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56848__$1,inst_56837);
} else {
if((state_val_56849 === (2))){
var state_56848__$1 = state_56848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56848__$1,(4),ch);
} else {
if((state_val_56849 === (11))){
var inst_56829 = (state_56848[(2)]);
var state_56848__$1 = state_56848;
var statearr_56865_58083 = state_56848__$1;
(statearr_56865_58083[(2)] = inst_56829);

(statearr_56865_58083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (9))){
var state_56848__$1 = state_56848;
var statearr_56866_58084 = state_56848__$1;
(statearr_56866_58084[(2)] = null);

(statearr_56866_58084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (5))){
var inst_56824 = cljs.core.async.close_BANG_(out);
var state_56848__$1 = state_56848;
var statearr_56867_58085 = state_56848__$1;
(statearr_56867_58085[(2)] = inst_56824);

(statearr_56867_58085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (10))){
var inst_56832 = (state_56848[(2)]);
var state_56848__$1 = (function (){var statearr_56868 = state_56848;
(statearr_56868[(8)] = inst_56832);

return statearr_56868;
})();
var statearr_56869_58086 = state_56848__$1;
(statearr_56869_58086[(2)] = null);

(statearr_56869_58086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56849 === (8))){
var inst_56821 = (state_56848[(7)]);
var state_56848__$1 = state_56848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56848__$1,(11),out,inst_56821);
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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_56870 = [null,null,null,null,null,null,null,null,null];
(statearr_56870[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_56870[(1)] = (1));

return statearr_56870;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_56848){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56848);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e56872){var ex__54453__auto__ = e56872;
var statearr_56873_58087 = state_56848;
(statearr_56873_58087[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56848[(4)]))){
var statearr_56875_58088 = state_56848;
(statearr_56875_58088[(1)] = cljs.core.first((state_56848[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58089 = state_56848;
state_56848 = G__58089;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_56848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_56848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_56876 = f__54702__auto__();
(statearr_56876[(6)] = c__54699__auto___58072);

return statearr_56876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__56879 = arguments.length;
switch (G__56879) {
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
var c__54699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_56943){
var state_val_56944 = (state_56943[(1)]);
if((state_val_56944 === (7))){
var inst_56939 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
var statearr_56954_58092 = state_56943__$1;
(statearr_56954_58092[(2)] = inst_56939);

(statearr_56954_58092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (20))){
var inst_56908 = (state_56943[(7)]);
var inst_56920 = (state_56943[(2)]);
var inst_56921 = cljs.core.next(inst_56908);
var inst_56893 = inst_56921;
var inst_56894 = null;
var inst_56895 = (0);
var inst_56896 = (0);
var state_56943__$1 = (function (){var statearr_56955 = state_56943;
(statearr_56955[(8)] = inst_56895);

(statearr_56955[(9)] = inst_56920);

(statearr_56955[(10)] = inst_56896);

(statearr_56955[(11)] = inst_56893);

(statearr_56955[(12)] = inst_56894);

return statearr_56955;
})();
var statearr_56956_58093 = state_56943__$1;
(statearr_56956_58093[(2)] = null);

(statearr_56956_58093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (1))){
var state_56943__$1 = state_56943;
var statearr_56957_58094 = state_56943__$1;
(statearr_56957_58094[(2)] = null);

(statearr_56957_58094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (4))){
var inst_56882 = (state_56943[(13)]);
var inst_56882__$1 = (state_56943[(2)]);
var inst_56883 = (inst_56882__$1 == null);
var state_56943__$1 = (function (){var statearr_56962 = state_56943;
(statearr_56962[(13)] = inst_56882__$1);

return statearr_56962;
})();
if(cljs.core.truth_(inst_56883)){
var statearr_56963_58095 = state_56943__$1;
(statearr_56963_58095[(1)] = (5));

} else {
var statearr_56964_58096 = state_56943__$1;
(statearr_56964_58096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (15))){
var state_56943__$1 = state_56943;
var statearr_56968_58097 = state_56943__$1;
(statearr_56968_58097[(2)] = null);

(statearr_56968_58097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (21))){
var state_56943__$1 = state_56943;
var statearr_56970_58098 = state_56943__$1;
(statearr_56970_58098[(2)] = null);

(statearr_56970_58098[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (13))){
var inst_56895 = (state_56943[(8)]);
var inst_56896 = (state_56943[(10)]);
var inst_56893 = (state_56943[(11)]);
var inst_56894 = (state_56943[(12)]);
var inst_56904 = (state_56943[(2)]);
var inst_56905 = (inst_56896 + (1));
var tmp56965 = inst_56895;
var tmp56966 = inst_56893;
var tmp56967 = inst_56894;
var inst_56893__$1 = tmp56966;
var inst_56894__$1 = tmp56967;
var inst_56895__$1 = tmp56965;
var inst_56896__$1 = inst_56905;
var state_56943__$1 = (function (){var statearr_56972 = state_56943;
(statearr_56972[(8)] = inst_56895__$1);

(statearr_56972[(10)] = inst_56896__$1);

(statearr_56972[(14)] = inst_56904);

(statearr_56972[(11)] = inst_56893__$1);

(statearr_56972[(12)] = inst_56894__$1);

return statearr_56972;
})();
var statearr_56973_58099 = state_56943__$1;
(statearr_56973_58099[(2)] = null);

(statearr_56973_58099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (22))){
var state_56943__$1 = state_56943;
var statearr_56974_58100 = state_56943__$1;
(statearr_56974_58100[(2)] = null);

(statearr_56974_58100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (6))){
var inst_56882 = (state_56943[(13)]);
var inst_56891 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56882) : f.call(null,inst_56882));
var inst_56892 = cljs.core.seq(inst_56891);
var inst_56893 = inst_56892;
var inst_56894 = null;
var inst_56895 = (0);
var inst_56896 = (0);
var state_56943__$1 = (function (){var statearr_56975 = state_56943;
(statearr_56975[(8)] = inst_56895);

(statearr_56975[(10)] = inst_56896);

(statearr_56975[(11)] = inst_56893);

(statearr_56975[(12)] = inst_56894);

return statearr_56975;
})();
var statearr_56976_58101 = state_56943__$1;
(statearr_56976_58101[(2)] = null);

(statearr_56976_58101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (17))){
var inst_56908 = (state_56943[(7)]);
var inst_56912 = cljs.core.chunk_first(inst_56908);
var inst_56913 = cljs.core.chunk_rest(inst_56908);
var inst_56915 = cljs.core.count(inst_56912);
var inst_56893 = inst_56913;
var inst_56894 = inst_56912;
var inst_56895 = inst_56915;
var inst_56896 = (0);
var state_56943__$1 = (function (){var statearr_56977 = state_56943;
(statearr_56977[(8)] = inst_56895);

(statearr_56977[(10)] = inst_56896);

(statearr_56977[(11)] = inst_56893);

(statearr_56977[(12)] = inst_56894);

return statearr_56977;
})();
var statearr_56978_58106 = state_56943__$1;
(statearr_56978_58106[(2)] = null);

(statearr_56978_58106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (3))){
var inst_56941 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56943__$1,inst_56941);
} else {
if((state_val_56944 === (12))){
var inst_56929 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
var statearr_56979_58108 = state_56943__$1;
(statearr_56979_58108[(2)] = inst_56929);

(statearr_56979_58108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (2))){
var state_56943__$1 = state_56943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56943__$1,(4),in$);
} else {
if((state_val_56944 === (23))){
var inst_56937 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
var statearr_56980_58109 = state_56943__$1;
(statearr_56980_58109[(2)] = inst_56937);

(statearr_56980_58109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (19))){
var inst_56924 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
var statearr_56981_58110 = state_56943__$1;
(statearr_56981_58110[(2)] = inst_56924);

(statearr_56981_58110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (11))){
var inst_56908 = (state_56943[(7)]);
var inst_56893 = (state_56943[(11)]);
var inst_56908__$1 = cljs.core.seq(inst_56893);
var state_56943__$1 = (function (){var statearr_56982 = state_56943;
(statearr_56982[(7)] = inst_56908__$1);

return statearr_56982;
})();
if(inst_56908__$1){
var statearr_56983_58111 = state_56943__$1;
(statearr_56983_58111[(1)] = (14));

} else {
var statearr_56984_58112 = state_56943__$1;
(statearr_56984_58112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (9))){
var inst_56931 = (state_56943[(2)]);
var inst_56932 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_56943__$1 = (function (){var statearr_56986 = state_56943;
(statearr_56986[(15)] = inst_56931);

return statearr_56986;
})();
if(cljs.core.truth_(inst_56932)){
var statearr_56989_58114 = state_56943__$1;
(statearr_56989_58114[(1)] = (21));

} else {
var statearr_56990_58115 = state_56943__$1;
(statearr_56990_58115[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (5))){
var inst_56885 = cljs.core.async.close_BANG_(out);
var state_56943__$1 = state_56943;
var statearr_56991_58117 = state_56943__$1;
(statearr_56991_58117[(2)] = inst_56885);

(statearr_56991_58117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (14))){
var inst_56908 = (state_56943[(7)]);
var inst_56910 = cljs.core.chunked_seq_QMARK_(inst_56908);
var state_56943__$1 = state_56943;
if(inst_56910){
var statearr_56992_58118 = state_56943__$1;
(statearr_56992_58118[(1)] = (17));

} else {
var statearr_56993_58119 = state_56943__$1;
(statearr_56993_58119[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (16))){
var inst_56927 = (state_56943[(2)]);
var state_56943__$1 = state_56943;
var statearr_56994_58120 = state_56943__$1;
(statearr_56994_58120[(2)] = inst_56927);

(statearr_56994_58120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56944 === (10))){
var inst_56896 = (state_56943[(10)]);
var inst_56894 = (state_56943[(12)]);
var inst_56902 = cljs.core._nth(inst_56894,inst_56896);
var state_56943__$1 = state_56943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56943__$1,(13),out,inst_56902);
} else {
if((state_val_56944 === (18))){
var inst_56908 = (state_56943[(7)]);
var inst_56918 = cljs.core.first(inst_56908);
var state_56943__$1 = state_56943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56943__$1,(20),out,inst_56918);
} else {
if((state_val_56944 === (8))){
var inst_56895 = (state_56943[(8)]);
var inst_56896 = (state_56943[(10)]);
var inst_56898 = (inst_56896 < inst_56895);
var inst_56899 = inst_56898;
var state_56943__$1 = state_56943;
if(cljs.core.truth_(inst_56899)){
var statearr_56995_58122 = state_56943__$1;
(statearr_56995_58122[(1)] = (10));

} else {
var statearr_56996_58123 = state_56943__$1;
(statearr_56996_58123[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____0 = (function (){
var statearr_56997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56997[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__);

(statearr_56997[(1)] = (1));

return statearr_56997;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____1 = (function (state_56943){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_56943);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e57000){var ex__54453__auto__ = e57000;
var statearr_57002_58124 = state_56943;
(statearr_57002_58124[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_56943[(4)]))){
var statearr_57003_58125 = state_56943;
(statearr_57003_58125[(1)] = cljs.core.first((state_56943[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58126 = state_56943;
state_56943 = G__58126;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__ = function(state_56943){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____1.call(this,state_56943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54450__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_57008 = f__54702__auto__();
(statearr_57008[(6)] = c__54699__auto__);

return statearr_57008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

return c__54699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57015 = arguments.length;
switch (G__57015) {
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
var G__57025 = arguments.length;
switch (G__57025) {
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
var G__57034 = arguments.length;
switch (G__57034) {
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
var c__54699__auto___58135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_57062){
var state_val_57063 = (state_57062[(1)]);
if((state_val_57063 === (7))){
var inst_57057 = (state_57062[(2)]);
var state_57062__$1 = state_57062;
var statearr_57068_58136 = state_57062__$1;
(statearr_57068_58136[(2)] = inst_57057);

(statearr_57068_58136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (1))){
var inst_57035 = null;
var state_57062__$1 = (function (){var statearr_57069 = state_57062;
(statearr_57069[(7)] = inst_57035);

return statearr_57069;
})();
var statearr_57070_58137 = state_57062__$1;
(statearr_57070_58137[(2)] = null);

(statearr_57070_58137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (4))){
var inst_57042 = (state_57062[(8)]);
var inst_57042__$1 = (state_57062[(2)]);
var inst_57043 = (inst_57042__$1 == null);
var inst_57044 = cljs.core.not(inst_57043);
var state_57062__$1 = (function (){var statearr_57071 = state_57062;
(statearr_57071[(8)] = inst_57042__$1);

return statearr_57071;
})();
if(inst_57044){
var statearr_57072_58138 = state_57062__$1;
(statearr_57072_58138[(1)] = (5));

} else {
var statearr_57073_58139 = state_57062__$1;
(statearr_57073_58139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (6))){
var state_57062__$1 = state_57062;
var statearr_57074_58140 = state_57062__$1;
(statearr_57074_58140[(2)] = null);

(statearr_57074_58140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (3))){
var inst_57059 = (state_57062[(2)]);
var inst_57060 = cljs.core.async.close_BANG_(out);
var state_57062__$1 = (function (){var statearr_57075 = state_57062;
(statearr_57075[(9)] = inst_57059);

return statearr_57075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57062__$1,inst_57060);
} else {
if((state_val_57063 === (2))){
var state_57062__$1 = state_57062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57062__$1,(4),ch);
} else {
if((state_val_57063 === (11))){
var inst_57042 = (state_57062[(8)]);
var inst_57051 = (state_57062[(2)]);
var inst_57035 = inst_57042;
var state_57062__$1 = (function (){var statearr_57076 = state_57062;
(statearr_57076[(10)] = inst_57051);

(statearr_57076[(7)] = inst_57035);

return statearr_57076;
})();
var statearr_57077_58142 = state_57062__$1;
(statearr_57077_58142[(2)] = null);

(statearr_57077_58142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (9))){
var inst_57042 = (state_57062[(8)]);
var state_57062__$1 = state_57062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57062__$1,(11),out,inst_57042);
} else {
if((state_val_57063 === (5))){
var inst_57042 = (state_57062[(8)]);
var inst_57035 = (state_57062[(7)]);
var inst_57046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57042,inst_57035);
var state_57062__$1 = state_57062;
if(inst_57046){
var statearr_57079_58143 = state_57062__$1;
(statearr_57079_58143[(1)] = (8));

} else {
var statearr_57080_58144 = state_57062__$1;
(statearr_57080_58144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (10))){
var inst_57054 = (state_57062[(2)]);
var state_57062__$1 = state_57062;
var statearr_57081_58145 = state_57062__$1;
(statearr_57081_58145[(2)] = inst_57054);

(statearr_57081_58145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57063 === (8))){
var inst_57035 = (state_57062[(7)]);
var tmp57078 = inst_57035;
var inst_57035__$1 = tmp57078;
var state_57062__$1 = (function (){var statearr_57082 = state_57062;
(statearr_57082[(7)] = inst_57035__$1);

return statearr_57082;
})();
var statearr_57083_58147 = state_57062__$1;
(statearr_57083_58147[(2)] = null);

(statearr_57083_58147[(1)] = (2));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_57084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57084[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_57084[(1)] = (1));

return statearr_57084;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_57062){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_57062);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e57085){var ex__54453__auto__ = e57085;
var statearr_57086_58151 = state_57062;
(statearr_57086_58151[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_57062[(4)]))){
var statearr_57087_58152 = state_57062;
(statearr_57087_58152[(1)] = cljs.core.first((state_57062[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58153 = state_57062;
state_57062 = G__58153;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_57062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_57062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_57088 = f__54702__auto__();
(statearr_57088[(6)] = c__54699__auto___58135);

return statearr_57088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57090 = arguments.length;
switch (G__57090) {
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
var c__54699__auto___58157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_57130){
var state_val_57131 = (state_57130[(1)]);
if((state_val_57131 === (7))){
var inst_57124 = (state_57130[(2)]);
var state_57130__$1 = state_57130;
var statearr_57134_58158 = state_57130__$1;
(statearr_57134_58158[(2)] = inst_57124);

(statearr_57134_58158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (1))){
var inst_57091 = (new Array(n));
var inst_57092 = inst_57091;
var inst_57093 = (0);
var state_57130__$1 = (function (){var statearr_57135 = state_57130;
(statearr_57135[(7)] = inst_57093);

(statearr_57135[(8)] = inst_57092);

return statearr_57135;
})();
var statearr_57136_58159 = state_57130__$1;
(statearr_57136_58159[(2)] = null);

(statearr_57136_58159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (4))){
var inst_57096 = (state_57130[(9)]);
var inst_57096__$1 = (state_57130[(2)]);
var inst_57097 = (inst_57096__$1 == null);
var inst_57098 = cljs.core.not(inst_57097);
var state_57130__$1 = (function (){var statearr_57137 = state_57130;
(statearr_57137[(9)] = inst_57096__$1);

return statearr_57137;
})();
if(inst_57098){
var statearr_57138_58160 = state_57130__$1;
(statearr_57138_58160[(1)] = (5));

} else {
var statearr_57139_58161 = state_57130__$1;
(statearr_57139_58161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (15))){
var inst_57118 = (state_57130[(2)]);
var state_57130__$1 = state_57130;
var statearr_57140_58162 = state_57130__$1;
(statearr_57140_58162[(2)] = inst_57118);

(statearr_57140_58162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (13))){
var state_57130__$1 = state_57130;
var statearr_57141_58163 = state_57130__$1;
(statearr_57141_58163[(2)] = null);

(statearr_57141_58163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (6))){
var inst_57093 = (state_57130[(7)]);
var inst_57114 = (inst_57093 > (0));
var state_57130__$1 = state_57130;
if(cljs.core.truth_(inst_57114)){
var statearr_57142_58164 = state_57130__$1;
(statearr_57142_58164[(1)] = (12));

} else {
var statearr_57143_58165 = state_57130__$1;
(statearr_57143_58165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (3))){
var inst_57126 = (state_57130[(2)]);
var state_57130__$1 = state_57130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57130__$1,inst_57126);
} else {
if((state_val_57131 === (12))){
var inst_57092 = (state_57130[(8)]);
var inst_57116 = cljs.core.vec(inst_57092);
var state_57130__$1 = state_57130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57130__$1,(15),out,inst_57116);
} else {
if((state_val_57131 === (2))){
var state_57130__$1 = state_57130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57130__$1,(4),ch);
} else {
if((state_val_57131 === (11))){
var inst_57108 = (state_57130[(2)]);
var inst_57109 = (new Array(n));
var inst_57092 = inst_57109;
var inst_57093 = (0);
var state_57130__$1 = (function (){var statearr_57144 = state_57130;
(statearr_57144[(10)] = inst_57108);

(statearr_57144[(7)] = inst_57093);

(statearr_57144[(8)] = inst_57092);

return statearr_57144;
})();
var statearr_57145_58166 = state_57130__$1;
(statearr_57145_58166[(2)] = null);

(statearr_57145_58166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (9))){
var inst_57092 = (state_57130[(8)]);
var inst_57106 = cljs.core.vec(inst_57092);
var state_57130__$1 = state_57130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57130__$1,(11),out,inst_57106);
} else {
if((state_val_57131 === (5))){
var inst_57096 = (state_57130[(9)]);
var inst_57093 = (state_57130[(7)]);
var inst_57092 = (state_57130[(8)]);
var inst_57101 = (state_57130[(11)]);
var inst_57100 = (inst_57092[inst_57093] = inst_57096);
var inst_57101__$1 = (inst_57093 + (1));
var inst_57102 = (inst_57101__$1 < n);
var state_57130__$1 = (function (){var statearr_57146 = state_57130;
(statearr_57146[(12)] = inst_57100);

(statearr_57146[(11)] = inst_57101__$1);

return statearr_57146;
})();
if(cljs.core.truth_(inst_57102)){
var statearr_57147_58167 = state_57130__$1;
(statearr_57147_58167[(1)] = (8));

} else {
var statearr_57148_58168 = state_57130__$1;
(statearr_57148_58168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (14))){
var inst_57121 = (state_57130[(2)]);
var inst_57122 = cljs.core.async.close_BANG_(out);
var state_57130__$1 = (function (){var statearr_57150 = state_57130;
(statearr_57150[(13)] = inst_57121);

return statearr_57150;
})();
var statearr_57151_58169 = state_57130__$1;
(statearr_57151_58169[(2)] = inst_57122);

(statearr_57151_58169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (10))){
var inst_57112 = (state_57130[(2)]);
var state_57130__$1 = state_57130;
var statearr_57153_58170 = state_57130__$1;
(statearr_57153_58170[(2)] = inst_57112);

(statearr_57153_58170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57131 === (8))){
var inst_57092 = (state_57130[(8)]);
var inst_57101 = (state_57130[(11)]);
var tmp57149 = inst_57092;
var inst_57092__$1 = tmp57149;
var inst_57093 = inst_57101;
var state_57130__$1 = (function (){var statearr_57154 = state_57130;
(statearr_57154[(7)] = inst_57093);

(statearr_57154[(8)] = inst_57092__$1);

return statearr_57154;
})();
var statearr_57155_58171 = state_57130__$1;
(statearr_57155_58171[(2)] = null);

(statearr_57155_58171[(1)] = (2));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_57156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57156[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_57156[(1)] = (1));

return statearr_57156;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_57130){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_57130);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e57157){var ex__54453__auto__ = e57157;
var statearr_57158_58172 = state_57130;
(statearr_57158_58172[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_57130[(4)]))){
var statearr_57159_58173 = state_57130;
(statearr_57159_58173[(1)] = cljs.core.first((state_57130[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58174 = state_57130;
state_57130 = G__58174;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_57130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_57130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_57160 = f__54702__auto__();
(statearr_57160[(6)] = c__54699__auto___58157);

return statearr_57160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57162 = arguments.length;
switch (G__57162) {
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
var c__54699__auto___58176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_57210){
var state_val_57211 = (state_57210[(1)]);
if((state_val_57211 === (7))){
var inst_57205 = (state_57210[(2)]);
var state_57210__$1 = state_57210;
var statearr_57212_58177 = state_57210__$1;
(statearr_57212_58177[(2)] = inst_57205);

(statearr_57212_58177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (1))){
var inst_57163 = [];
var inst_57164 = inst_57163;
var inst_57165 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57210__$1 = (function (){var statearr_57213 = state_57210;
(statearr_57213[(7)] = inst_57165);

(statearr_57213[(8)] = inst_57164);

return statearr_57213;
})();
var statearr_57214_58178 = state_57210__$1;
(statearr_57214_58178[(2)] = null);

(statearr_57214_58178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (4))){
var inst_57168 = (state_57210[(9)]);
var inst_57168__$1 = (state_57210[(2)]);
var inst_57170 = (inst_57168__$1 == null);
var inst_57171 = cljs.core.not(inst_57170);
var state_57210__$1 = (function (){var statearr_57215 = state_57210;
(statearr_57215[(9)] = inst_57168__$1);

return statearr_57215;
})();
if(inst_57171){
var statearr_57216_58179 = state_57210__$1;
(statearr_57216_58179[(1)] = (5));

} else {
var statearr_57217_58180 = state_57210__$1;
(statearr_57217_58180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (15))){
var inst_57164 = (state_57210[(8)]);
var inst_57197 = cljs.core.vec(inst_57164);
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57210__$1,(18),out,inst_57197);
} else {
if((state_val_57211 === (13))){
var inst_57192 = (state_57210[(2)]);
var state_57210__$1 = state_57210;
var statearr_57219_58181 = state_57210__$1;
(statearr_57219_58181[(2)] = inst_57192);

(statearr_57219_58181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (6))){
var inst_57164 = (state_57210[(8)]);
var inst_57194 = inst_57164.length;
var inst_57195 = (inst_57194 > (0));
var state_57210__$1 = state_57210;
if(cljs.core.truth_(inst_57195)){
var statearr_57221_58182 = state_57210__$1;
(statearr_57221_58182[(1)] = (15));

} else {
var statearr_57222_58183 = state_57210__$1;
(statearr_57222_58183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (17))){
var inst_57202 = (state_57210[(2)]);
var inst_57203 = cljs.core.async.close_BANG_(out);
var state_57210__$1 = (function (){var statearr_57223 = state_57210;
(statearr_57223[(10)] = inst_57202);

return statearr_57223;
})();
var statearr_57224_58184 = state_57210__$1;
(statearr_57224_58184[(2)] = inst_57203);

(statearr_57224_58184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (3))){
var inst_57207 = (state_57210[(2)]);
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57210__$1,inst_57207);
} else {
if((state_val_57211 === (12))){
var inst_57164 = (state_57210[(8)]);
var inst_57185 = cljs.core.vec(inst_57164);
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57210__$1,(14),out,inst_57185);
} else {
if((state_val_57211 === (2))){
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57210__$1,(4),ch);
} else {
if((state_val_57211 === (11))){
var inst_57173 = (state_57210[(11)]);
var inst_57164 = (state_57210[(8)]);
var inst_57168 = (state_57210[(9)]);
var inst_57182 = inst_57164.push(inst_57168);
var tmp57225 = inst_57164;
var inst_57164__$1 = tmp57225;
var inst_57165 = inst_57173;
var state_57210__$1 = (function (){var statearr_57226 = state_57210;
(statearr_57226[(7)] = inst_57165);

(statearr_57226[(12)] = inst_57182);

(statearr_57226[(8)] = inst_57164__$1);

return statearr_57226;
})();
var statearr_57227_58185 = state_57210__$1;
(statearr_57227_58185[(2)] = null);

(statearr_57227_58185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (9))){
var inst_57165 = (state_57210[(7)]);
var inst_57178 = cljs.core.keyword_identical_QMARK_(inst_57165,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_57210__$1 = state_57210;
var statearr_57228_58187 = state_57210__$1;
(statearr_57228_58187[(2)] = inst_57178);

(statearr_57228_58187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (5))){
var inst_57165 = (state_57210[(7)]);
var inst_57174 = (state_57210[(13)]);
var inst_57173 = (state_57210[(11)]);
var inst_57168 = (state_57210[(9)]);
var inst_57173__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57168) : f.call(null,inst_57168));
var inst_57174__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57173__$1,inst_57165);
var state_57210__$1 = (function (){var statearr_57230 = state_57210;
(statearr_57230[(13)] = inst_57174__$1);

(statearr_57230[(11)] = inst_57173__$1);

return statearr_57230;
})();
if(inst_57174__$1){
var statearr_57231_58191 = state_57210__$1;
(statearr_57231_58191[(1)] = (8));

} else {
var statearr_57232_58192 = state_57210__$1;
(statearr_57232_58192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (14))){
var inst_57173 = (state_57210[(11)]);
var inst_57168 = (state_57210[(9)]);
var inst_57187 = (state_57210[(2)]);
var inst_57188 = [];
var inst_57189 = inst_57188.push(inst_57168);
var inst_57164 = inst_57188;
var inst_57165 = inst_57173;
var state_57210__$1 = (function (){var statearr_57233 = state_57210;
(statearr_57233[(14)] = inst_57187);

(statearr_57233[(7)] = inst_57165);

(statearr_57233[(15)] = inst_57189);

(statearr_57233[(8)] = inst_57164);

return statearr_57233;
})();
var statearr_57234_58193 = state_57210__$1;
(statearr_57234_58193[(2)] = null);

(statearr_57234_58193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (16))){
var state_57210__$1 = state_57210;
var statearr_57235_58194 = state_57210__$1;
(statearr_57235_58194[(2)] = null);

(statearr_57235_58194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (10))){
var inst_57180 = (state_57210[(2)]);
var state_57210__$1 = state_57210;
if(cljs.core.truth_(inst_57180)){
var statearr_57236_58195 = state_57210__$1;
(statearr_57236_58195[(1)] = (11));

} else {
var statearr_57237_58196 = state_57210__$1;
(statearr_57237_58196[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (18))){
var inst_57199 = (state_57210[(2)]);
var state_57210__$1 = state_57210;
var statearr_57238_58197 = state_57210__$1;
(statearr_57238_58197[(2)] = inst_57199);

(statearr_57238_58197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57211 === (8))){
var inst_57174 = (state_57210[(13)]);
var state_57210__$1 = state_57210;
var statearr_57245_58200 = state_57210__$1;
(statearr_57245_58200[(2)] = inst_57174);

(statearr_57245_58200[(1)] = (10));


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
var cljs$core$async$state_machine__54450__auto__ = null;
var cljs$core$async$state_machine__54450__auto____0 = (function (){
var statearr_57251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57251[(0)] = cljs$core$async$state_machine__54450__auto__);

(statearr_57251[(1)] = (1));

return statearr_57251;
});
var cljs$core$async$state_machine__54450__auto____1 = (function (state_57210){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_57210);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e57262){var ex__54453__auto__ = e57262;
var statearr_57263_58204 = state_57210;
(statearr_57263_58204[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_57210[(4)]))){
var statearr_57270_58205 = state_57210;
(statearr_57270_58205[(1)] = cljs.core.first((state_57210[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58208 = state_57210;
state_57210 = G__58208;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
cljs$core$async$state_machine__54450__auto__ = function(state_57210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54450__auto____1.call(this,state_57210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54450__auto____0;
cljs$core$async$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54450__auto____1;
return cljs$core$async$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_57277 = f__54702__auto__();
(statearr_57277[(6)] = c__54699__auto___58176);

return statearr_57277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
