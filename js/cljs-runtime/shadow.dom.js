goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_58324 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_58324(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_58327 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_58327(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57393 = coll;
var G__57394 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57393,G__57394) : shadow.dom.lazy_native_coll_seq.call(null,G__57393,G__57394));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57496 = arguments.length;
switch (G__57496) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57505 = arguments.length;
switch (G__57505) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57516 = arguments.length;
switch (G__57516) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57528 = arguments.length;
switch (G__57528) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57562 = arguments.length;
switch (G__57562) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57575 = arguments.length;
switch (G__57575) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57589){if((e57589 instanceof Object)){
var e = e57589;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57589;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57610 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57611 = null;
var count__57612 = (0);
var i__57613 = (0);
while(true){
if((i__57613 < count__57612)){
var el = chunk__57611.cljs$core$IIndexed$_nth$arity$2(null,i__57613);
var handler_58365__$1 = ((function (seq__57610,chunk__57611,count__57612,i__57613,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57610,chunk__57611,count__57612,i__57613,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58365__$1);


var G__58371 = seq__57610;
var G__58372 = chunk__57611;
var G__58373 = count__57612;
var G__58374 = (i__57613 + (1));
seq__57610 = G__58371;
chunk__57611 = G__58372;
count__57612 = G__58373;
i__57613 = G__58374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57610);
if(temp__5753__auto__){
var seq__57610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57610__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57610__$1);
var G__58379 = cljs.core.chunk_rest(seq__57610__$1);
var G__58380 = c__4679__auto__;
var G__58381 = cljs.core.count(c__4679__auto__);
var G__58382 = (0);
seq__57610 = G__58379;
chunk__57611 = G__58380;
count__57612 = G__58381;
i__57613 = G__58382;
continue;
} else {
var el = cljs.core.first(seq__57610__$1);
var handler_58386__$1 = ((function (seq__57610,chunk__57611,count__57612,i__57613,el,seq__57610__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57610,chunk__57611,count__57612,i__57613,el,seq__57610__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_58386__$1);


var G__58388 = cljs.core.next(seq__57610__$1);
var G__58389 = null;
var G__58390 = (0);
var G__58391 = (0);
seq__57610 = G__58388;
chunk__57611 = G__58389;
count__57612 = G__58390;
i__57613 = G__58391;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57648 = arguments.length;
switch (G__57648) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57709 = cljs.core.seq(events);
var chunk__57710 = null;
var count__57711 = (0);
var i__57712 = (0);
while(true){
if((i__57712 < count__57711)){
var vec__57727 = chunk__57710.cljs$core$IIndexed$_nth$arity$2(null,i__57712);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57727,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58412 = seq__57709;
var G__58413 = chunk__57710;
var G__58414 = count__57711;
var G__58415 = (i__57712 + (1));
seq__57709 = G__58412;
chunk__57710 = G__58413;
count__57711 = G__58414;
i__57712 = G__58415;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57709);
if(temp__5753__auto__){
var seq__57709__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57709__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57709__$1);
var G__58417 = cljs.core.chunk_rest(seq__57709__$1);
var G__58418 = c__4679__auto__;
var G__58419 = cljs.core.count(c__4679__auto__);
var G__58420 = (0);
seq__57709 = G__58417;
chunk__57710 = G__58418;
count__57711 = G__58419;
i__57712 = G__58420;
continue;
} else {
var vec__57744 = cljs.core.first(seq__57709__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57744,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58423 = cljs.core.next(seq__57709__$1);
var G__58424 = null;
var G__58425 = (0);
var G__58426 = (0);
seq__57709 = G__58423;
chunk__57710 = G__58424;
count__57711 = G__58425;
i__57712 = G__58426;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57752 = cljs.core.seq(styles);
var chunk__57753 = null;
var count__57754 = (0);
var i__57755 = (0);
while(true){
if((i__57755 < count__57754)){
var vec__57786 = chunk__57753.cljs$core$IIndexed$_nth$arity$2(null,i__57755);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57786,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58430 = seq__57752;
var G__58431 = chunk__57753;
var G__58432 = count__57754;
var G__58433 = (i__57755 + (1));
seq__57752 = G__58430;
chunk__57753 = G__58431;
count__57754 = G__58432;
i__57755 = G__58433;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57752);
if(temp__5753__auto__){
var seq__57752__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57752__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57752__$1);
var G__58434 = cljs.core.chunk_rest(seq__57752__$1);
var G__58435 = c__4679__auto__;
var G__58436 = cljs.core.count(c__4679__auto__);
var G__58437 = (0);
seq__57752 = G__58434;
chunk__57753 = G__58435;
count__57754 = G__58436;
i__57755 = G__58437;
continue;
} else {
var vec__57801 = cljs.core.first(seq__57752__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57801,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__58444 = cljs.core.next(seq__57752__$1);
var G__58445 = null;
var G__58446 = (0);
var G__58447 = (0);
seq__57752 = G__58444;
chunk__57753 = G__58445;
count__57754 = G__58446;
i__57755 = G__58447;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57822_58449 = key;
var G__57822_58450__$1 = (((G__57822_58449 instanceof cljs.core.Keyword))?G__57822_58449.fqn:null);
switch (G__57822_58450__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58466 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_58466,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_58466,"aria-");
}
})())){
el.setAttribute(ks_58466,value);
} else {
(el[ks_58466] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57834){
var map__57835 = p__57834;
var map__57835__$1 = cljs.core.__destructure_map(map__57835);
var props = map__57835__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57835__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57837 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57837,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57837,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57837,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57840 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57840,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57840;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57842 = arguments.length;
switch (G__57842) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57843){
var vec__57844 = p__57843;
var seq__57845 = cljs.core.seq(vec__57844);
var first__57846 = cljs.core.first(seq__57845);
var seq__57845__$1 = cljs.core.next(seq__57845);
var nn = first__57846;
var first__57846__$1 = cljs.core.first(seq__57845__$1);
var seq__57845__$2 = cljs.core.next(seq__57845__$1);
var np = first__57846__$1;
var nc = seq__57845__$2;
var node = vec__57844;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57847 = nn;
var G__57848 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57847,G__57848) : create_fn.call(null,G__57847,G__57848));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57850 = nn;
var G__57851 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57850,G__57851) : create_fn.call(null,G__57850,G__57851));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57853 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57853,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57853,(1),null);
var seq__57856_58492 = cljs.core.seq(node_children);
var chunk__57857_58493 = null;
var count__57858_58494 = (0);
var i__57859_58495 = (0);
while(true){
if((i__57859_58495 < count__57858_58494)){
var child_struct_58496 = chunk__57857_58493.cljs$core$IIndexed$_nth$arity$2(null,i__57859_58495);
var children_58497 = shadow.dom.dom_node(child_struct_58496);
if(cljs.core.seq_QMARK_(children_58497)){
var seq__57901_58499 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58497));
var chunk__57903_58500 = null;
var count__57904_58501 = (0);
var i__57905_58502 = (0);
while(true){
if((i__57905_58502 < count__57904_58501)){
var child_58503 = chunk__57903_58500.cljs$core$IIndexed$_nth$arity$2(null,i__57905_58502);
if(cljs.core.truth_(child_58503)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58503);


var G__58504 = seq__57901_58499;
var G__58505 = chunk__57903_58500;
var G__58506 = count__57904_58501;
var G__58507 = (i__57905_58502 + (1));
seq__57901_58499 = G__58504;
chunk__57903_58500 = G__58505;
count__57904_58501 = G__58506;
i__57905_58502 = G__58507;
continue;
} else {
var G__58508 = seq__57901_58499;
var G__58509 = chunk__57903_58500;
var G__58510 = count__57904_58501;
var G__58511 = (i__57905_58502 + (1));
seq__57901_58499 = G__58508;
chunk__57903_58500 = G__58509;
count__57904_58501 = G__58510;
i__57905_58502 = G__58511;
continue;
}
} else {
var temp__5753__auto___58512 = cljs.core.seq(seq__57901_58499);
if(temp__5753__auto___58512){
var seq__57901_58513__$1 = temp__5753__auto___58512;
if(cljs.core.chunked_seq_QMARK_(seq__57901_58513__$1)){
var c__4679__auto___58514 = cljs.core.chunk_first(seq__57901_58513__$1);
var G__58515 = cljs.core.chunk_rest(seq__57901_58513__$1);
var G__58516 = c__4679__auto___58514;
var G__58517 = cljs.core.count(c__4679__auto___58514);
var G__58518 = (0);
seq__57901_58499 = G__58515;
chunk__57903_58500 = G__58516;
count__57904_58501 = G__58517;
i__57905_58502 = G__58518;
continue;
} else {
var child_58519 = cljs.core.first(seq__57901_58513__$1);
if(cljs.core.truth_(child_58519)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58519);


var G__58520 = cljs.core.next(seq__57901_58513__$1);
var G__58521 = null;
var G__58522 = (0);
var G__58523 = (0);
seq__57901_58499 = G__58520;
chunk__57903_58500 = G__58521;
count__57904_58501 = G__58522;
i__57905_58502 = G__58523;
continue;
} else {
var G__58524 = cljs.core.next(seq__57901_58513__$1);
var G__58525 = null;
var G__58526 = (0);
var G__58527 = (0);
seq__57901_58499 = G__58524;
chunk__57903_58500 = G__58525;
count__57904_58501 = G__58526;
i__57905_58502 = G__58527;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58497);
}


var G__58528 = seq__57856_58492;
var G__58529 = chunk__57857_58493;
var G__58530 = count__57858_58494;
var G__58531 = (i__57859_58495 + (1));
seq__57856_58492 = G__58528;
chunk__57857_58493 = G__58529;
count__57858_58494 = G__58530;
i__57859_58495 = G__58531;
continue;
} else {
var temp__5753__auto___58533 = cljs.core.seq(seq__57856_58492);
if(temp__5753__auto___58533){
var seq__57856_58534__$1 = temp__5753__auto___58533;
if(cljs.core.chunked_seq_QMARK_(seq__57856_58534__$1)){
var c__4679__auto___58536 = cljs.core.chunk_first(seq__57856_58534__$1);
var G__58537 = cljs.core.chunk_rest(seq__57856_58534__$1);
var G__58538 = c__4679__auto___58536;
var G__58539 = cljs.core.count(c__4679__auto___58536);
var G__58540 = (0);
seq__57856_58492 = G__58537;
chunk__57857_58493 = G__58538;
count__57858_58494 = G__58539;
i__57859_58495 = G__58540;
continue;
} else {
var child_struct_58541 = cljs.core.first(seq__57856_58534__$1);
var children_58542 = shadow.dom.dom_node(child_struct_58541);
if(cljs.core.seq_QMARK_(children_58542)){
var seq__57913_58544 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58542));
var chunk__57915_58545 = null;
var count__57916_58546 = (0);
var i__57917_58547 = (0);
while(true){
if((i__57917_58547 < count__57916_58546)){
var child_58548 = chunk__57915_58545.cljs$core$IIndexed$_nth$arity$2(null,i__57917_58547);
if(cljs.core.truth_(child_58548)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58548);


var G__58549 = seq__57913_58544;
var G__58550 = chunk__57915_58545;
var G__58551 = count__57916_58546;
var G__58552 = (i__57917_58547 + (1));
seq__57913_58544 = G__58549;
chunk__57915_58545 = G__58550;
count__57916_58546 = G__58551;
i__57917_58547 = G__58552;
continue;
} else {
var G__58553 = seq__57913_58544;
var G__58554 = chunk__57915_58545;
var G__58555 = count__57916_58546;
var G__58556 = (i__57917_58547 + (1));
seq__57913_58544 = G__58553;
chunk__57915_58545 = G__58554;
count__57916_58546 = G__58555;
i__57917_58547 = G__58556;
continue;
}
} else {
var temp__5753__auto___58557__$1 = cljs.core.seq(seq__57913_58544);
if(temp__5753__auto___58557__$1){
var seq__57913_58558__$1 = temp__5753__auto___58557__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57913_58558__$1)){
var c__4679__auto___58559 = cljs.core.chunk_first(seq__57913_58558__$1);
var G__58560 = cljs.core.chunk_rest(seq__57913_58558__$1);
var G__58561 = c__4679__auto___58559;
var G__58562 = cljs.core.count(c__4679__auto___58559);
var G__58563 = (0);
seq__57913_58544 = G__58560;
chunk__57915_58545 = G__58561;
count__57916_58546 = G__58562;
i__57917_58547 = G__58563;
continue;
} else {
var child_58564 = cljs.core.first(seq__57913_58558__$1);
if(cljs.core.truth_(child_58564)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58564);


var G__58566 = cljs.core.next(seq__57913_58558__$1);
var G__58567 = null;
var G__58568 = (0);
var G__58569 = (0);
seq__57913_58544 = G__58566;
chunk__57915_58545 = G__58567;
count__57916_58546 = G__58568;
i__57917_58547 = G__58569;
continue;
} else {
var G__58571 = cljs.core.next(seq__57913_58558__$1);
var G__58572 = null;
var G__58573 = (0);
var G__58574 = (0);
seq__57913_58544 = G__58571;
chunk__57915_58545 = G__58572;
count__57916_58546 = G__58573;
i__57917_58547 = G__58574;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58542);
}


var G__58575 = cljs.core.next(seq__57856_58534__$1);
var G__58576 = null;
var G__58577 = (0);
var G__58578 = (0);
seq__57856_58492 = G__58575;
chunk__57857_58493 = G__58576;
count__57858_58494 = G__58577;
i__57859_58495 = G__58578;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57923 = cljs.core.seq(node);
var chunk__57924 = null;
var count__57925 = (0);
var i__57926 = (0);
while(true){
if((i__57926 < count__57925)){
var n = chunk__57924.cljs$core$IIndexed$_nth$arity$2(null,i__57926);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58584 = seq__57923;
var G__58585 = chunk__57924;
var G__58586 = count__57925;
var G__58587 = (i__57926 + (1));
seq__57923 = G__58584;
chunk__57924 = G__58585;
count__57925 = G__58586;
i__57926 = G__58587;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57923);
if(temp__5753__auto__){
var seq__57923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57923__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57923__$1);
var G__58588 = cljs.core.chunk_rest(seq__57923__$1);
var G__58589 = c__4679__auto__;
var G__58590 = cljs.core.count(c__4679__auto__);
var G__58591 = (0);
seq__57923 = G__58588;
chunk__57924 = G__58589;
count__57925 = G__58590;
i__57926 = G__58591;
continue;
} else {
var n = cljs.core.first(seq__57923__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58593 = cljs.core.next(seq__57923__$1);
var G__58594 = null;
var G__58595 = (0);
var G__58596 = (0);
seq__57923 = G__58593;
chunk__57924 = G__58594;
count__57925 = G__58595;
i__57926 = G__58596;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57938 = arguments.length;
switch (G__57938) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__57948 = arguments.length;
switch (G__57948) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__57964 = arguments.length;
switch (G__57964) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58612 = arguments.length;
var i__4865__auto___58615 = (0);
while(true){
if((i__4865__auto___58615 < len__4864__auto___58612)){
args__4870__auto__.push((arguments[i__4865__auto___58615]));

var G__58617 = (i__4865__auto___58615 + (1));
i__4865__auto___58615 = G__58617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__57979_58618 = cljs.core.seq(nodes);
var chunk__57980_58619 = null;
var count__57981_58620 = (0);
var i__57982_58621 = (0);
while(true){
if((i__57982_58621 < count__57981_58620)){
var node_58623 = chunk__57980_58619.cljs$core$IIndexed$_nth$arity$2(null,i__57982_58621);
fragment.appendChild(shadow.dom._to_dom(node_58623));


var G__58624 = seq__57979_58618;
var G__58625 = chunk__57980_58619;
var G__58626 = count__57981_58620;
var G__58627 = (i__57982_58621 + (1));
seq__57979_58618 = G__58624;
chunk__57980_58619 = G__58625;
count__57981_58620 = G__58626;
i__57982_58621 = G__58627;
continue;
} else {
var temp__5753__auto___58632 = cljs.core.seq(seq__57979_58618);
if(temp__5753__auto___58632){
var seq__57979_58633__$1 = temp__5753__auto___58632;
if(cljs.core.chunked_seq_QMARK_(seq__57979_58633__$1)){
var c__4679__auto___58635 = cljs.core.chunk_first(seq__57979_58633__$1);
var G__58637 = cljs.core.chunk_rest(seq__57979_58633__$1);
var G__58638 = c__4679__auto___58635;
var G__58639 = cljs.core.count(c__4679__auto___58635);
var G__58640 = (0);
seq__57979_58618 = G__58637;
chunk__57980_58619 = G__58638;
count__57981_58620 = G__58639;
i__57982_58621 = G__58640;
continue;
} else {
var node_58642 = cljs.core.first(seq__57979_58633__$1);
fragment.appendChild(shadow.dom._to_dom(node_58642));


var G__58643 = cljs.core.next(seq__57979_58633__$1);
var G__58644 = null;
var G__58645 = (0);
var G__58646 = (0);
seq__57979_58618 = G__58643;
chunk__57980_58619 = G__58644;
count__57981_58620 = G__58645;
i__57982_58621 = G__58646;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57973){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57973));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57996_58648 = cljs.core.seq(scripts);
var chunk__57997_58649 = null;
var count__57998_58650 = (0);
var i__57999_58651 = (0);
while(true){
if((i__57999_58651 < count__57998_58650)){
var vec__58006_58652 = chunk__57997_58649.cljs$core$IIndexed$_nth$arity$2(null,i__57999_58651);
var script_tag_58653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58006_58652,(0),null);
var script_body_58654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58006_58652,(1),null);
eval(script_body_58654);


var G__58658 = seq__57996_58648;
var G__58659 = chunk__57997_58649;
var G__58660 = count__57998_58650;
var G__58661 = (i__57999_58651 + (1));
seq__57996_58648 = G__58658;
chunk__57997_58649 = G__58659;
count__57998_58650 = G__58660;
i__57999_58651 = G__58661;
continue;
} else {
var temp__5753__auto___58662 = cljs.core.seq(seq__57996_58648);
if(temp__5753__auto___58662){
var seq__57996_58663__$1 = temp__5753__auto___58662;
if(cljs.core.chunked_seq_QMARK_(seq__57996_58663__$1)){
var c__4679__auto___58664 = cljs.core.chunk_first(seq__57996_58663__$1);
var G__58665 = cljs.core.chunk_rest(seq__57996_58663__$1);
var G__58666 = c__4679__auto___58664;
var G__58667 = cljs.core.count(c__4679__auto___58664);
var G__58668 = (0);
seq__57996_58648 = G__58665;
chunk__57997_58649 = G__58666;
count__57998_58650 = G__58667;
i__57999_58651 = G__58668;
continue;
} else {
var vec__58017_58669 = cljs.core.first(seq__57996_58663__$1);
var script_tag_58670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017_58669,(0),null);
var script_body_58671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017_58669,(1),null);
eval(script_body_58671);


var G__58673 = cljs.core.next(seq__57996_58663__$1);
var G__58674 = null;
var G__58675 = (0);
var G__58676 = (0);
seq__57996_58648 = G__58673;
chunk__57997_58649 = G__58674;
count__57998_58650 = G__58675;
i__57999_58651 = G__58676;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58024){
var vec__58026 = p__58024;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58026,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58026,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58048 = arguments.length;
switch (G__58048) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58056 = cljs.core.seq(style_keys);
var chunk__58057 = null;
var count__58058 = (0);
var i__58059 = (0);
while(true){
if((i__58059 < count__58058)){
var it = chunk__58057.cljs$core$IIndexed$_nth$arity$2(null,i__58059);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58689 = seq__58056;
var G__58690 = chunk__58057;
var G__58691 = count__58058;
var G__58692 = (i__58059 + (1));
seq__58056 = G__58689;
chunk__58057 = G__58690;
count__58058 = G__58691;
i__58059 = G__58692;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58056);
if(temp__5753__auto__){
var seq__58056__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58056__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58056__$1);
var G__58694 = cljs.core.chunk_rest(seq__58056__$1);
var G__58695 = c__4679__auto__;
var G__58696 = cljs.core.count(c__4679__auto__);
var G__58697 = (0);
seq__58056 = G__58694;
chunk__58057 = G__58695;
count__58058 = G__58696;
i__58059 = G__58697;
continue;
} else {
var it = cljs.core.first(seq__58056__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58698 = cljs.core.next(seq__58056__$1);
var G__58699 = null;
var G__58700 = (0);
var G__58701 = (0);
seq__58056 = G__58698;
chunk__58057 = G__58699;
count__58058 = G__58700;
i__58059 = G__58701;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58061,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58065 = k58061;
var G__58065__$1 = (((G__58065 instanceof cljs.core.Keyword))?G__58065.fqn:null);
switch (G__58065__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58061,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58066){
var vec__58067 = p__58066;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58060){
var self__ = this;
var G__58060__$1 = this;
return (new cljs.core.RecordIter((0),G__58060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58062,other58063){
var self__ = this;
var this58062__$1 = this;
return (((!((other58063 == null)))) && ((((this58062__$1.constructor === other58063.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58062__$1.x,other58063.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58062__$1.y,other58063.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58062__$1.__extmap,other58063.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58061){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58077 = k58061;
var G__58077__$1 = (((G__58077 instanceof cljs.core.Keyword))?G__58077.fqn:null);
switch (G__58077__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58061);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58060){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58080 = cljs.core.keyword_identical_QMARK_;
var expr__58081 = k__4511__auto__;
if(cljs.core.truth_((pred__58080.cljs$core$IFn$_invoke$arity$2 ? pred__58080.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58081) : pred__58080.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58081)))){
return (new shadow.dom.Coordinate(G__58060,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58080.cljs$core$IFn$_invoke$arity$2 ? pred__58080.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58081) : pred__58080.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58081)))){
return (new shadow.dom.Coordinate(self__.x,G__58060,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58060),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58060){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58060,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58064){
var extmap__4542__auto__ = (function (){var G__58091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58064,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58064)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58091);
} else {
return G__58091;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58064),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58064),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k58103,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__58116 = k58103;
var G__58116__$1 = (((G__58116 instanceof cljs.core.Keyword))?G__58116.fqn:null);
switch (G__58116__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58103,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__58128){
var vec__58130 = p__58128;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58130,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58130,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58102){
var self__ = this;
var G__58102__$1 = this;
return (new cljs.core.RecordIter((0),G__58102__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58104,other58105){
var self__ = this;
var this58104__$1 = this;
return (((!((other58105 == null)))) && ((((this58104__$1.constructor === other58105.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58104__$1.w,other58105.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58104__$1.h,other58105.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58104__$1.__extmap,other58105.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k58103){
var self__ = this;
var this__4509__auto____$1 = this;
var G__58146 = k58103;
var G__58146__$1 = (((G__58146 instanceof cljs.core.Keyword))?G__58146.fqn:null);
switch (G__58146__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58103);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__58102){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__58148 = cljs.core.keyword_identical_QMARK_;
var expr__58149 = k__4511__auto__;
if(cljs.core.truth_((pred__58148.cljs$core$IFn$_invoke$arity$2 ? pred__58148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58149) : pred__58148.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58149)))){
return (new shadow.dom.Size(G__58102,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58148.cljs$core$IFn$_invoke$arity$2 ? pred__58148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58149) : pred__58148.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58149)))){
return (new shadow.dom.Size(self__.w,G__58102,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__58102),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__58102){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58102,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58107){
var extmap__4542__auto__ = (function (){var G__58155 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58107,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58107)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58155);
} else {
return G__58155;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58107),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58107),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__58808 = (i + (1));
var G__58809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58808;
ret = G__58809;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58199){
var vec__58201 = p__58199;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58201,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58207 = arguments.length;
switch (G__58207) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58815 = ps;
var G__58816 = (i + (1));
el__$1 = G__58815;
i = G__58816;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58209 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58209,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58209,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58209,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58212_58821 = cljs.core.seq(props);
var chunk__58213_58822 = null;
var count__58214_58823 = (0);
var i__58215_58824 = (0);
while(true){
if((i__58215_58824 < count__58214_58823)){
var vec__58222_58828 = chunk__58213_58822.cljs$core$IIndexed$_nth$arity$2(null,i__58215_58824);
var k_58829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58222_58828,(0),null);
var v_58830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58222_58828,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_58829);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58829),v_58830);


var G__58831 = seq__58212_58821;
var G__58832 = chunk__58213_58822;
var G__58833 = count__58214_58823;
var G__58834 = (i__58215_58824 + (1));
seq__58212_58821 = G__58831;
chunk__58213_58822 = G__58832;
count__58214_58823 = G__58833;
i__58215_58824 = G__58834;
continue;
} else {
var temp__5753__auto___58835 = cljs.core.seq(seq__58212_58821);
if(temp__5753__auto___58835){
var seq__58212_58837__$1 = temp__5753__auto___58835;
if(cljs.core.chunked_seq_QMARK_(seq__58212_58837__$1)){
var c__4679__auto___58838 = cljs.core.chunk_first(seq__58212_58837__$1);
var G__58839 = cljs.core.chunk_rest(seq__58212_58837__$1);
var G__58840 = c__4679__auto___58838;
var G__58841 = cljs.core.count(c__4679__auto___58838);
var G__58842 = (0);
seq__58212_58821 = G__58839;
chunk__58213_58822 = G__58840;
count__58214_58823 = G__58841;
i__58215_58824 = G__58842;
continue;
} else {
var vec__58225_58843 = cljs.core.first(seq__58212_58837__$1);
var k_58844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225_58843,(0),null);
var v_58845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225_58843,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_58844);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58844),v_58845);


var G__58846 = cljs.core.next(seq__58212_58837__$1);
var G__58847 = null;
var G__58848 = (0);
var G__58849 = (0);
seq__58212_58821 = G__58846;
chunk__58213_58822 = G__58847;
count__58214_58823 = G__58848;
i__58215_58824 = G__58849;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58230 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(1),null);
var seq__58233_58850 = cljs.core.seq(node_children);
var chunk__58235_58851 = null;
var count__58236_58852 = (0);
var i__58237_58853 = (0);
while(true){
if((i__58237_58853 < count__58236_58852)){
var child_struct_58854 = chunk__58235_58851.cljs$core$IIndexed$_nth$arity$2(null,i__58237_58853);
if((!((child_struct_58854 == null)))){
if(typeof child_struct_58854 === 'string'){
var text_58855 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58855),child_struct_58854].join(''));
} else {
var children_58856 = shadow.dom.svg_node(child_struct_58854);
if(cljs.core.seq_QMARK_(children_58856)){
var seq__58257_58857 = cljs.core.seq(children_58856);
var chunk__58259_58858 = null;
var count__58260_58859 = (0);
var i__58261_58860 = (0);
while(true){
if((i__58261_58860 < count__58260_58859)){
var child_58861 = chunk__58259_58858.cljs$core$IIndexed$_nth$arity$2(null,i__58261_58860);
if(cljs.core.truth_(child_58861)){
node.appendChild(child_58861);


var G__58865 = seq__58257_58857;
var G__58866 = chunk__58259_58858;
var G__58867 = count__58260_58859;
var G__58868 = (i__58261_58860 + (1));
seq__58257_58857 = G__58865;
chunk__58259_58858 = G__58866;
count__58260_58859 = G__58867;
i__58261_58860 = G__58868;
continue;
} else {
var G__58869 = seq__58257_58857;
var G__58870 = chunk__58259_58858;
var G__58871 = count__58260_58859;
var G__58872 = (i__58261_58860 + (1));
seq__58257_58857 = G__58869;
chunk__58259_58858 = G__58870;
count__58260_58859 = G__58871;
i__58261_58860 = G__58872;
continue;
}
} else {
var temp__5753__auto___58877 = cljs.core.seq(seq__58257_58857);
if(temp__5753__auto___58877){
var seq__58257_58879__$1 = temp__5753__auto___58877;
if(cljs.core.chunked_seq_QMARK_(seq__58257_58879__$1)){
var c__4679__auto___58880 = cljs.core.chunk_first(seq__58257_58879__$1);
var G__58884 = cljs.core.chunk_rest(seq__58257_58879__$1);
var G__58885 = c__4679__auto___58880;
var G__58886 = cljs.core.count(c__4679__auto___58880);
var G__58887 = (0);
seq__58257_58857 = G__58884;
chunk__58259_58858 = G__58885;
count__58260_58859 = G__58886;
i__58261_58860 = G__58887;
continue;
} else {
var child_58889 = cljs.core.first(seq__58257_58879__$1);
if(cljs.core.truth_(child_58889)){
node.appendChild(child_58889);


var G__58890 = cljs.core.next(seq__58257_58879__$1);
var G__58891 = null;
var G__58892 = (0);
var G__58893 = (0);
seq__58257_58857 = G__58890;
chunk__58259_58858 = G__58891;
count__58260_58859 = G__58892;
i__58261_58860 = G__58893;
continue;
} else {
var G__58894 = cljs.core.next(seq__58257_58879__$1);
var G__58895 = null;
var G__58896 = (0);
var G__58897 = (0);
seq__58257_58857 = G__58894;
chunk__58259_58858 = G__58895;
count__58260_58859 = G__58896;
i__58261_58860 = G__58897;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58856);
}
}


var G__58899 = seq__58233_58850;
var G__58900 = chunk__58235_58851;
var G__58901 = count__58236_58852;
var G__58902 = (i__58237_58853 + (1));
seq__58233_58850 = G__58899;
chunk__58235_58851 = G__58900;
count__58236_58852 = G__58901;
i__58237_58853 = G__58902;
continue;
} else {
var G__58903 = seq__58233_58850;
var G__58904 = chunk__58235_58851;
var G__58905 = count__58236_58852;
var G__58906 = (i__58237_58853 + (1));
seq__58233_58850 = G__58903;
chunk__58235_58851 = G__58904;
count__58236_58852 = G__58905;
i__58237_58853 = G__58906;
continue;
}
} else {
var temp__5753__auto___58907 = cljs.core.seq(seq__58233_58850);
if(temp__5753__auto___58907){
var seq__58233_58908__$1 = temp__5753__auto___58907;
if(cljs.core.chunked_seq_QMARK_(seq__58233_58908__$1)){
var c__4679__auto___58909 = cljs.core.chunk_first(seq__58233_58908__$1);
var G__58910 = cljs.core.chunk_rest(seq__58233_58908__$1);
var G__58911 = c__4679__auto___58909;
var G__58912 = cljs.core.count(c__4679__auto___58909);
var G__58913 = (0);
seq__58233_58850 = G__58910;
chunk__58235_58851 = G__58911;
count__58236_58852 = G__58912;
i__58237_58853 = G__58913;
continue;
} else {
var child_struct_58918 = cljs.core.first(seq__58233_58908__$1);
if((!((child_struct_58918 == null)))){
if(typeof child_struct_58918 === 'string'){
var text_58923 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58923),child_struct_58918].join(''));
} else {
var children_58924 = shadow.dom.svg_node(child_struct_58918);
if(cljs.core.seq_QMARK_(children_58924)){
var seq__58268_58928 = cljs.core.seq(children_58924);
var chunk__58270_58929 = null;
var count__58271_58930 = (0);
var i__58272_58931 = (0);
while(true){
if((i__58272_58931 < count__58271_58930)){
var child_58933 = chunk__58270_58929.cljs$core$IIndexed$_nth$arity$2(null,i__58272_58931);
if(cljs.core.truth_(child_58933)){
node.appendChild(child_58933);


var G__58937 = seq__58268_58928;
var G__58938 = chunk__58270_58929;
var G__58939 = count__58271_58930;
var G__58940 = (i__58272_58931 + (1));
seq__58268_58928 = G__58937;
chunk__58270_58929 = G__58938;
count__58271_58930 = G__58939;
i__58272_58931 = G__58940;
continue;
} else {
var G__58942 = seq__58268_58928;
var G__58943 = chunk__58270_58929;
var G__58944 = count__58271_58930;
var G__58945 = (i__58272_58931 + (1));
seq__58268_58928 = G__58942;
chunk__58270_58929 = G__58943;
count__58271_58930 = G__58944;
i__58272_58931 = G__58945;
continue;
}
} else {
var temp__5753__auto___58946__$1 = cljs.core.seq(seq__58268_58928);
if(temp__5753__auto___58946__$1){
var seq__58268_58947__$1 = temp__5753__auto___58946__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58268_58947__$1)){
var c__4679__auto___58952 = cljs.core.chunk_first(seq__58268_58947__$1);
var G__58953 = cljs.core.chunk_rest(seq__58268_58947__$1);
var G__58954 = c__4679__auto___58952;
var G__58955 = cljs.core.count(c__4679__auto___58952);
var G__58956 = (0);
seq__58268_58928 = G__58953;
chunk__58270_58929 = G__58954;
count__58271_58930 = G__58955;
i__58272_58931 = G__58956;
continue;
} else {
var child_58957 = cljs.core.first(seq__58268_58947__$1);
if(cljs.core.truth_(child_58957)){
node.appendChild(child_58957);


var G__58958 = cljs.core.next(seq__58268_58947__$1);
var G__58959 = null;
var G__58960 = (0);
var G__58961 = (0);
seq__58268_58928 = G__58958;
chunk__58270_58929 = G__58959;
count__58271_58930 = G__58960;
i__58272_58931 = G__58961;
continue;
} else {
var G__58962 = cljs.core.next(seq__58268_58947__$1);
var G__58963 = null;
var G__58964 = (0);
var G__58965 = (0);
seq__58268_58928 = G__58962;
chunk__58270_58929 = G__58963;
count__58271_58930 = G__58964;
i__58272_58931 = G__58965;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58924);
}
}


var G__58966 = cljs.core.next(seq__58233_58908__$1);
var G__58967 = null;
var G__58968 = (0);
var G__58969 = (0);
seq__58233_58850 = G__58966;
chunk__58235_58851 = G__58967;
count__58236_58852 = G__58968;
i__58237_58853 = G__58969;
continue;
} else {
var G__58970 = cljs.core.next(seq__58233_58908__$1);
var G__58971 = null;
var G__58972 = (0);
var G__58973 = (0);
seq__58233_58850 = G__58970;
chunk__58235_58851 = G__58971;
count__58236_58852 = G__58972;
i__58237_58853 = G__58973;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58977 = arguments.length;
var i__4865__auto___58978 = (0);
while(true){
if((i__4865__auto___58978 < len__4864__auto___58977)){
args__4870__auto__.push((arguments[i__4865__auto___58978]));

var G__58979 = (i__4865__auto___58978 + (1));
i__4865__auto___58978 = G__58979;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58282){
var G__58283 = cljs.core.first(seq58282);
var seq58282__$1 = cljs.core.next(seq58282);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58283,seq58282__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58287 = arguments.length;
switch (G__58287) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__54699__auto___58995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54702__auto__ = (function (){var switch__54449__auto__ = (function (state_58292){
var state_val_58293 = (state_58292[(1)]);
if((state_val_58293 === (1))){
var state_58292__$1 = state_58292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58292__$1,(2),once_or_cleanup);
} else {
if((state_val_58293 === (2))){
var inst_58289 = (state_58292[(2)]);
var inst_58290 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58292__$1 = (function (){var statearr_58294 = state_58292;
(statearr_58294[(7)] = inst_58289);

return statearr_58294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58292__$1,inst_58290);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__54450__auto__ = null;
var shadow$dom$state_machine__54450__auto____0 = (function (){
var statearr_58295 = [null,null,null,null,null,null,null,null];
(statearr_58295[(0)] = shadow$dom$state_machine__54450__auto__);

(statearr_58295[(1)] = (1));

return statearr_58295;
});
var shadow$dom$state_machine__54450__auto____1 = (function (state_58292){
while(true){
var ret_value__54451__auto__ = (function (){try{while(true){
var result__54452__auto__ = switch__54449__auto__(state_58292);
if(cljs.core.keyword_identical_QMARK_(result__54452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54452__auto__;
}
break;
}
}catch (e58296){var ex__54453__auto__ = e58296;
var statearr_58297_59000 = state_58292;
(statearr_58297_59000[(2)] = ex__54453__auto__);


if(cljs.core.seq((state_58292[(4)]))){
var statearr_58298_59001 = state_58292;
(statearr_58298_59001[(1)] = cljs.core.first((state_58292[(4)])));

} else {
throw ex__54453__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59002 = state_58292;
state_58292 = G__59002;
continue;
} else {
return ret_value__54451__auto__;
}
break;
}
});
shadow$dom$state_machine__54450__auto__ = function(state_58292){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__54450__auto____0.call(this);
case 1:
return shadow$dom$state_machine__54450__auto____1.call(this,state_58292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__54450__auto____0;
shadow$dom$state_machine__54450__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__54450__auto____1;
return shadow$dom$state_machine__54450__auto__;
})()
})();
var state__54703__auto__ = (function (){var statearr_58299 = f__54702__auto__();
(statearr_58299[(6)] = c__54699__auto___58995);

return statearr_58299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54703__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
