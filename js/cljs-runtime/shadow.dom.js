import "./cljs_env.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49114 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49114(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49115 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49115(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48245 = coll;
var G__48246 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48245,G__48246) : shadow.dom.lazy_native_coll_seq.call(null,G__48245,G__48246));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__48307 = arguments.length;
switch (G__48307) {
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
var G__48315 = arguments.length;
switch (G__48315) {
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
var G__48325 = arguments.length;
switch (G__48325) {
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
var G__48331 = arguments.length;
switch (G__48331) {
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
var G__48343 = arguments.length;
switch (G__48343) {
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
var G__48355 = arguments.length;
switch (G__48355) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48380){if((e48380 instanceof Object)){
var e = e48380;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48380;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48408 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48409 = null;
var count__48410 = (0);
var i__48411 = (0);
while(true){
if((i__48411 < count__48410)){
var el = chunk__48409.cljs$core$IIndexed$_nth$arity$2(null,i__48411);
var handler_49125__$1 = ((function (seq__48408,chunk__48409,count__48410,i__48411,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48408,chunk__48409,count__48410,i__48411,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49125__$1);


var G__49126 = seq__48408;
var G__49127 = chunk__48409;
var G__49128 = count__48410;
var G__49129 = (i__48411 + (1));
seq__48408 = G__49126;
chunk__48409 = G__49127;
count__48410 = G__49128;
i__48411 = G__49129;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48408);
if(temp__5804__auto__){
var seq__48408__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48408__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48408__$1);
var G__49130 = cljs.core.chunk_rest(seq__48408__$1);
var G__49131 = c__5568__auto__;
var G__49132 = cljs.core.count(c__5568__auto__);
var G__49133 = (0);
seq__48408 = G__49130;
chunk__48409 = G__49131;
count__48410 = G__49132;
i__48411 = G__49133;
continue;
} else {
var el = cljs.core.first(seq__48408__$1);
var handler_49134__$1 = ((function (seq__48408,chunk__48409,count__48410,i__48411,el,seq__48408__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48408,chunk__48409,count__48410,i__48411,el,seq__48408__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49134__$1);


var G__49135 = cljs.core.next(seq__48408__$1);
var G__49136 = null;
var G__49137 = (0);
var G__49138 = (0);
seq__48408 = G__49135;
chunk__48409 = G__49136;
count__48410 = G__49137;
i__48411 = G__49138;
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
var G__48420 = arguments.length;
switch (G__48420) {
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
var seq__48431 = cljs.core.seq(events);
var chunk__48432 = null;
var count__48433 = (0);
var i__48434 = (0);
while(true){
if((i__48434 < count__48433)){
var vec__48449 = chunk__48432.cljs$core$IIndexed$_nth$arity$2(null,i__48434);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49148 = seq__48431;
var G__49149 = chunk__48432;
var G__49150 = count__48433;
var G__49151 = (i__48434 + (1));
seq__48431 = G__49148;
chunk__48432 = G__49149;
count__48433 = G__49150;
i__48434 = G__49151;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48431);
if(temp__5804__auto__){
var seq__48431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48431__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48431__$1);
var G__49152 = cljs.core.chunk_rest(seq__48431__$1);
var G__49153 = c__5568__auto__;
var G__49154 = cljs.core.count(c__5568__auto__);
var G__49155 = (0);
seq__48431 = G__49152;
chunk__48432 = G__49153;
count__48433 = G__49154;
i__48434 = G__49155;
continue;
} else {
var vec__48454 = cljs.core.first(seq__48431__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49156 = cljs.core.next(seq__48431__$1);
var G__49157 = null;
var G__49158 = (0);
var G__49159 = (0);
seq__48431 = G__49156;
chunk__48432 = G__49157;
count__48433 = G__49158;
i__48434 = G__49159;
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
var seq__48461 = cljs.core.seq(styles);
var chunk__48462 = null;
var count__48463 = (0);
var i__48464 = (0);
while(true){
if((i__48464 < count__48463)){
var vec__48487 = chunk__48462.cljs$core$IIndexed$_nth$arity$2(null,i__48464);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49160 = seq__48461;
var G__49161 = chunk__48462;
var G__49162 = count__48463;
var G__49163 = (i__48464 + (1));
seq__48461 = G__49160;
chunk__48462 = G__49161;
count__48463 = G__49162;
i__48464 = G__49163;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48461);
if(temp__5804__auto__){
var seq__48461__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48461__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48461__$1);
var G__49164 = cljs.core.chunk_rest(seq__48461__$1);
var G__49165 = c__5568__auto__;
var G__49166 = cljs.core.count(c__5568__auto__);
var G__49167 = (0);
seq__48461 = G__49164;
chunk__48462 = G__49165;
count__48463 = G__49166;
i__48464 = G__49167;
continue;
} else {
var vec__48494 = cljs.core.first(seq__48461__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48494,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49168 = cljs.core.next(seq__48461__$1);
var G__49169 = null;
var G__49170 = (0);
var G__49171 = (0);
seq__48461 = G__49168;
chunk__48462 = G__49169;
count__48463 = G__49170;
i__48464 = G__49171;
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
var G__48501_49172 = key;
var G__48501_49173__$1 = (((G__48501_49172 instanceof cljs.core.Keyword))?G__48501_49172.fqn:null);
switch (G__48501_49173__$1) {
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
var ks_49175 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_49175,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_49175,"aria-");
}
})())){
el.setAttribute(ks_49175,value);
} else {
(el[ks_49175] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48528){
var map__48529 = p__48528;
var map__48529__$1 = cljs.core.__destructure_map(map__48529);
var props = map__48529__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48529__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48531 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48531,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48531,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48531,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48541 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48541,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48541;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48546 = arguments.length;
switch (G__48546) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48573){
var vec__48574 = p__48573;
var seq__48575 = cljs.core.seq(vec__48574);
var first__48576 = cljs.core.first(seq__48575);
var seq__48575__$1 = cljs.core.next(seq__48575);
var nn = first__48576;
var first__48576__$1 = cljs.core.first(seq__48575__$1);
var seq__48575__$2 = cljs.core.next(seq__48575__$1);
var np = first__48576__$1;
var nc = seq__48575__$2;
var node = vec__48574;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48578 = nn;
var G__48579 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48578,G__48579) : create_fn.call(null,G__48578,G__48579));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48580 = nn;
var G__48581 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48580,G__48581) : create_fn.call(null,G__48580,G__48581));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48584 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(1),null);
var seq__48587_49177 = cljs.core.seq(node_children);
var chunk__48588_49178 = null;
var count__48589_49179 = (0);
var i__48590_49180 = (0);
while(true){
if((i__48590_49180 < count__48589_49179)){
var child_struct_49181 = chunk__48588_49178.cljs$core$IIndexed$_nth$arity$2(null,i__48590_49180);
var children_49182 = shadow.dom.dom_node(child_struct_49181);
if(cljs.core.seq_QMARK_(children_49182)){
var seq__48636_49183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49182));
var chunk__48638_49184 = null;
var count__48639_49185 = (0);
var i__48640_49186 = (0);
while(true){
if((i__48640_49186 < count__48639_49185)){
var child_49187 = chunk__48638_49184.cljs$core$IIndexed$_nth$arity$2(null,i__48640_49186);
if(cljs.core.truth_(child_49187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49187);


var G__49188 = seq__48636_49183;
var G__49189 = chunk__48638_49184;
var G__49190 = count__48639_49185;
var G__49191 = (i__48640_49186 + (1));
seq__48636_49183 = G__49188;
chunk__48638_49184 = G__49189;
count__48639_49185 = G__49190;
i__48640_49186 = G__49191;
continue;
} else {
var G__49192 = seq__48636_49183;
var G__49193 = chunk__48638_49184;
var G__49194 = count__48639_49185;
var G__49195 = (i__48640_49186 + (1));
seq__48636_49183 = G__49192;
chunk__48638_49184 = G__49193;
count__48639_49185 = G__49194;
i__48640_49186 = G__49195;
continue;
}
} else {
var temp__5804__auto___49196 = cljs.core.seq(seq__48636_49183);
if(temp__5804__auto___49196){
var seq__48636_49197__$1 = temp__5804__auto___49196;
if(cljs.core.chunked_seq_QMARK_(seq__48636_49197__$1)){
var c__5568__auto___49198 = cljs.core.chunk_first(seq__48636_49197__$1);
var G__49199 = cljs.core.chunk_rest(seq__48636_49197__$1);
var G__49200 = c__5568__auto___49198;
var G__49201 = cljs.core.count(c__5568__auto___49198);
var G__49202 = (0);
seq__48636_49183 = G__49199;
chunk__48638_49184 = G__49200;
count__48639_49185 = G__49201;
i__48640_49186 = G__49202;
continue;
} else {
var child_49203 = cljs.core.first(seq__48636_49197__$1);
if(cljs.core.truth_(child_49203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49203);


var G__49204 = cljs.core.next(seq__48636_49197__$1);
var G__49205 = null;
var G__49206 = (0);
var G__49207 = (0);
seq__48636_49183 = G__49204;
chunk__48638_49184 = G__49205;
count__48639_49185 = G__49206;
i__48640_49186 = G__49207;
continue;
} else {
var G__49208 = cljs.core.next(seq__48636_49197__$1);
var G__49209 = null;
var G__49210 = (0);
var G__49211 = (0);
seq__48636_49183 = G__49208;
chunk__48638_49184 = G__49209;
count__48639_49185 = G__49210;
i__48640_49186 = G__49211;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49182);
}


var G__49212 = seq__48587_49177;
var G__49213 = chunk__48588_49178;
var G__49214 = count__48589_49179;
var G__49215 = (i__48590_49180 + (1));
seq__48587_49177 = G__49212;
chunk__48588_49178 = G__49213;
count__48589_49179 = G__49214;
i__48590_49180 = G__49215;
continue;
} else {
var temp__5804__auto___49216 = cljs.core.seq(seq__48587_49177);
if(temp__5804__auto___49216){
var seq__48587_49217__$1 = temp__5804__auto___49216;
if(cljs.core.chunked_seq_QMARK_(seq__48587_49217__$1)){
var c__5568__auto___49218 = cljs.core.chunk_first(seq__48587_49217__$1);
var G__49219 = cljs.core.chunk_rest(seq__48587_49217__$1);
var G__49220 = c__5568__auto___49218;
var G__49221 = cljs.core.count(c__5568__auto___49218);
var G__49222 = (0);
seq__48587_49177 = G__49219;
chunk__48588_49178 = G__49220;
count__48589_49179 = G__49221;
i__48590_49180 = G__49222;
continue;
} else {
var child_struct_49223 = cljs.core.first(seq__48587_49217__$1);
var children_49224 = shadow.dom.dom_node(child_struct_49223);
if(cljs.core.seq_QMARK_(children_49224)){
var seq__48657_49225 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49224));
var chunk__48659_49226 = null;
var count__48660_49227 = (0);
var i__48661_49228 = (0);
while(true){
if((i__48661_49228 < count__48660_49227)){
var child_49229 = chunk__48659_49226.cljs$core$IIndexed$_nth$arity$2(null,i__48661_49228);
if(cljs.core.truth_(child_49229)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49229);


var G__49230 = seq__48657_49225;
var G__49231 = chunk__48659_49226;
var G__49232 = count__48660_49227;
var G__49233 = (i__48661_49228 + (1));
seq__48657_49225 = G__49230;
chunk__48659_49226 = G__49231;
count__48660_49227 = G__49232;
i__48661_49228 = G__49233;
continue;
} else {
var G__49234 = seq__48657_49225;
var G__49235 = chunk__48659_49226;
var G__49236 = count__48660_49227;
var G__49237 = (i__48661_49228 + (1));
seq__48657_49225 = G__49234;
chunk__48659_49226 = G__49235;
count__48660_49227 = G__49236;
i__48661_49228 = G__49237;
continue;
}
} else {
var temp__5804__auto___49238__$1 = cljs.core.seq(seq__48657_49225);
if(temp__5804__auto___49238__$1){
var seq__48657_49239__$1 = temp__5804__auto___49238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48657_49239__$1)){
var c__5568__auto___49240 = cljs.core.chunk_first(seq__48657_49239__$1);
var G__49241 = cljs.core.chunk_rest(seq__48657_49239__$1);
var G__49242 = c__5568__auto___49240;
var G__49243 = cljs.core.count(c__5568__auto___49240);
var G__49244 = (0);
seq__48657_49225 = G__49241;
chunk__48659_49226 = G__49242;
count__48660_49227 = G__49243;
i__48661_49228 = G__49244;
continue;
} else {
var child_49245 = cljs.core.first(seq__48657_49239__$1);
if(cljs.core.truth_(child_49245)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49245);


var G__49246 = cljs.core.next(seq__48657_49239__$1);
var G__49247 = null;
var G__49248 = (0);
var G__49249 = (0);
seq__48657_49225 = G__49246;
chunk__48659_49226 = G__49247;
count__48660_49227 = G__49248;
i__48661_49228 = G__49249;
continue;
} else {
var G__49250 = cljs.core.next(seq__48657_49239__$1);
var G__49251 = null;
var G__49252 = (0);
var G__49253 = (0);
seq__48657_49225 = G__49250;
chunk__48659_49226 = G__49251;
count__48660_49227 = G__49252;
i__48661_49228 = G__49253;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49224);
}


var G__49254 = cljs.core.next(seq__48587_49217__$1);
var G__49255 = null;
var G__49256 = (0);
var G__49257 = (0);
seq__48587_49177 = G__49254;
chunk__48588_49178 = G__49255;
count__48589_49179 = G__49256;
i__48590_49180 = G__49257;
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
var seq__48692 = cljs.core.seq(node);
var chunk__48693 = null;
var count__48694 = (0);
var i__48695 = (0);
while(true){
if((i__48695 < count__48694)){
var n = chunk__48693.cljs$core$IIndexed$_nth$arity$2(null,i__48695);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49258 = seq__48692;
var G__49259 = chunk__48693;
var G__49260 = count__48694;
var G__49261 = (i__48695 + (1));
seq__48692 = G__49258;
chunk__48693 = G__49259;
count__48694 = G__49260;
i__48695 = G__49261;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48692);
if(temp__5804__auto__){
var seq__48692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48692__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48692__$1);
var G__49262 = cljs.core.chunk_rest(seq__48692__$1);
var G__49263 = c__5568__auto__;
var G__49264 = cljs.core.count(c__5568__auto__);
var G__49265 = (0);
seq__48692 = G__49262;
chunk__48693 = G__49263;
count__48694 = G__49264;
i__48695 = G__49265;
continue;
} else {
var n = cljs.core.first(seq__48692__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49266 = cljs.core.next(seq__48692__$1);
var G__49267 = null;
var G__49268 = (0);
var G__49269 = (0);
seq__48692 = G__49266;
chunk__48693 = G__49267;
count__48694 = G__49268;
i__48695 = G__49269;
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
var G__48714 = arguments.length;
switch (G__48714) {
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
var G__48725 = arguments.length;
switch (G__48725) {
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
var G__48743 = arguments.length;
switch (G__48743) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___49276 = arguments.length;
var i__5770__auto___49278 = (0);
while(true){
if((i__5770__auto___49278 < len__5769__auto___49276)){
args__5775__auto__.push((arguments[i__5770__auto___49278]));

var G__49279 = (i__5770__auto___49278 + (1));
i__5770__auto___49278 = G__49279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48759_49280 = cljs.core.seq(nodes);
var chunk__48760_49281 = null;
var count__48761_49282 = (0);
var i__48762_49283 = (0);
while(true){
if((i__48762_49283 < count__48761_49282)){
var node_49284 = chunk__48760_49281.cljs$core$IIndexed$_nth$arity$2(null,i__48762_49283);
fragment.appendChild(shadow.dom._to_dom(node_49284));


var G__49285 = seq__48759_49280;
var G__49286 = chunk__48760_49281;
var G__49287 = count__48761_49282;
var G__49288 = (i__48762_49283 + (1));
seq__48759_49280 = G__49285;
chunk__48760_49281 = G__49286;
count__48761_49282 = G__49287;
i__48762_49283 = G__49288;
continue;
} else {
var temp__5804__auto___49290 = cljs.core.seq(seq__48759_49280);
if(temp__5804__auto___49290){
var seq__48759_49291__$1 = temp__5804__auto___49290;
if(cljs.core.chunked_seq_QMARK_(seq__48759_49291__$1)){
var c__5568__auto___49292 = cljs.core.chunk_first(seq__48759_49291__$1);
var G__49293 = cljs.core.chunk_rest(seq__48759_49291__$1);
var G__49294 = c__5568__auto___49292;
var G__49295 = cljs.core.count(c__5568__auto___49292);
var G__49296 = (0);
seq__48759_49280 = G__49293;
chunk__48760_49281 = G__49294;
count__48761_49282 = G__49295;
i__48762_49283 = G__49296;
continue;
} else {
var node_49297 = cljs.core.first(seq__48759_49291__$1);
fragment.appendChild(shadow.dom._to_dom(node_49297));


var G__49298 = cljs.core.next(seq__48759_49291__$1);
var G__49299 = null;
var G__49300 = (0);
var G__49301 = (0);
seq__48759_49280 = G__49298;
chunk__48760_49281 = G__49299;
count__48761_49282 = G__49300;
i__48762_49283 = G__49301;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48755));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48786_49303 = cljs.core.seq(scripts);
var chunk__48787_49304 = null;
var count__48788_49305 = (0);
var i__48789_49306 = (0);
while(true){
if((i__48789_49306 < count__48788_49305)){
var vec__48806_49307 = chunk__48787_49304.cljs$core$IIndexed$_nth$arity$2(null,i__48789_49306);
var script_tag_49308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48806_49307,(0),null);
var script_body_49309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48806_49307,(1),null);
eval(script_body_49309);


var G__49310 = seq__48786_49303;
var G__49311 = chunk__48787_49304;
var G__49312 = count__48788_49305;
var G__49313 = (i__48789_49306 + (1));
seq__48786_49303 = G__49310;
chunk__48787_49304 = G__49311;
count__48788_49305 = G__49312;
i__48789_49306 = G__49313;
continue;
} else {
var temp__5804__auto___49314 = cljs.core.seq(seq__48786_49303);
if(temp__5804__auto___49314){
var seq__48786_49315__$1 = temp__5804__auto___49314;
if(cljs.core.chunked_seq_QMARK_(seq__48786_49315__$1)){
var c__5568__auto___49317 = cljs.core.chunk_first(seq__48786_49315__$1);
var G__49318 = cljs.core.chunk_rest(seq__48786_49315__$1);
var G__49319 = c__5568__auto___49317;
var G__49320 = cljs.core.count(c__5568__auto___49317);
var G__49321 = (0);
seq__48786_49303 = G__49318;
chunk__48787_49304 = G__49319;
count__48788_49305 = G__49320;
i__48789_49306 = G__49321;
continue;
} else {
var vec__48811_49322 = cljs.core.first(seq__48786_49315__$1);
var script_tag_49323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811_49322,(0),null);
var script_body_49324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48811_49322,(1),null);
eval(script_body_49324);


var G__49325 = cljs.core.next(seq__48786_49315__$1);
var G__49326 = null;
var G__49327 = (0);
var G__49328 = (0);
seq__48786_49303 = G__49325;
chunk__48787_49304 = G__49326;
count__48788_49305 = G__49327;
i__48789_49306 = G__49328;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48816){
var vec__48818 = p__48816;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48818,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48818,(1),null);
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
var G__48832 = arguments.length;
switch (G__48832) {
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
var seq__48859 = cljs.core.seq(style_keys);
var chunk__48860 = null;
var count__48861 = (0);
var i__48862 = (0);
while(true){
if((i__48862 < count__48861)){
var it = chunk__48860.cljs$core$IIndexed$_nth$arity$2(null,i__48862);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49332 = seq__48859;
var G__49333 = chunk__48860;
var G__49334 = count__48861;
var G__49335 = (i__48862 + (1));
seq__48859 = G__49332;
chunk__48860 = G__49333;
count__48861 = G__49334;
i__48862 = G__49335;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48859);
if(temp__5804__auto__){
var seq__48859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48859__$1);
var G__49336 = cljs.core.chunk_rest(seq__48859__$1);
var G__49337 = c__5568__auto__;
var G__49338 = cljs.core.count(c__5568__auto__);
var G__49339 = (0);
seq__48859 = G__49336;
chunk__48860 = G__49337;
count__48861 = G__49338;
i__48862 = G__49339;
continue;
} else {
var it = cljs.core.first(seq__48859__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49342 = cljs.core.next(seq__48859__$1);
var G__49343 = null;
var G__49344 = (0);
var G__49345 = (0);
seq__48859 = G__49342;
chunk__48860 = G__49343;
count__48861 = G__49344;
i__48862 = G__49345;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48872,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48879 = k48872;
var G__48879__$1 = (((G__48879 instanceof cljs.core.Keyword))?G__48879.fqn:null);
switch (G__48879__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48872,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48880){
var vec__48881 = p__48880;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48871){
var self__ = this;
var G__48871__$1 = this;
return (new cljs.core.RecordIter((0),G__48871__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48873,other48874){
var self__ = this;
var this48873__$1 = this;
return (((!((other48874 == null)))) && ((((this48873__$1.constructor === other48874.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48873__$1.x,other48874.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48873__$1.y,other48874.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48873__$1.__extmap,other48874.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48872){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48886 = k48872;
var G__48886__$1 = (((G__48886 instanceof cljs.core.Keyword))?G__48886.fqn:null);
switch (G__48886__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48872);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48871){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48889 = cljs.core.keyword_identical_QMARK_;
var expr__48890 = k__5352__auto__;
if(cljs.core.truth_((pred__48889.cljs$core$IFn$_invoke$arity$2 ? pred__48889.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48890) : pred__48889.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48890)))){
return (new shadow.dom.Coordinate(G__48871,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48889.cljs$core$IFn$_invoke$arity$2 ? pred__48889.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48890) : pred__48889.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48890)))){
return (new shadow.dom.Coordinate(self__.x,G__48871,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48871),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48871){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48871,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48878){
var extmap__5385__auto__ = (function (){var G__48904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48878,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48878)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48904);
} else {
return G__48904;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48878),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48878),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48913,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48922 = k48913;
var G__48922__$1 = (((G__48922 instanceof cljs.core.Keyword))?G__48922.fqn:null);
switch (G__48922__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48913,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48927){
var vec__48928 = p__48927;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48928,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48928,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48912){
var self__ = this;
var G__48912__$1 = this;
return (new cljs.core.RecordIter((0),G__48912__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48914,other48915){
var self__ = this;
var this48914__$1 = this;
return (((!((other48915 == null)))) && ((((this48914__$1.constructor === other48915.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48914__$1.w,other48915.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48914__$1.h,other48915.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48914__$1.__extmap,other48915.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48913){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48947 = k48913;
var G__48947__$1 = (((G__48947 instanceof cljs.core.Keyword))?G__48947.fqn:null);
switch (G__48947__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48913);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48912){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48951 = cljs.core.keyword_identical_QMARK_;
var expr__48952 = k__5352__auto__;
if(cljs.core.truth_((pred__48951.cljs$core$IFn$_invoke$arity$2 ? pred__48951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48952) : pred__48951.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48952)))){
return (new shadow.dom.Size(G__48912,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48951.cljs$core$IFn$_invoke$arity$2 ? pred__48951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48952) : pred__48951.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48952)))){
return (new shadow.dom.Size(self__.w,G__48912,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48912),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48912){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48912,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48918){
var extmap__5385__auto__ = (function (){var G__48964 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48918,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48918)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48964);
} else {
return G__48964;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48918),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48918),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__49529 = (i + (1));
var G__49530 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49529;
ret = G__49530;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48987){
var vec__48988 = p__48987;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48988,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48988,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48994 = arguments.length;
switch (G__48994) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__49543 = ps;
var G__49544 = (i + (1));
el__$1 = G__49543;
i = G__49544;
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
var vec__49020 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49020,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49020,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49020,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49023_49545 = cljs.core.seq(props);
var chunk__49024_49546 = null;
var count__49025_49547 = (0);
var i__49026_49548 = (0);
while(true){
if((i__49026_49548 < count__49025_49547)){
var vec__49033_49550 = chunk__49024_49546.cljs$core$IIndexed$_nth$arity$2(null,i__49026_49548);
var k_49551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033_49550,(0),null);
var v_49552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49033_49550,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_49551);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49551),v_49552);


var G__49553 = seq__49023_49545;
var G__49554 = chunk__49024_49546;
var G__49555 = count__49025_49547;
var G__49556 = (i__49026_49548 + (1));
seq__49023_49545 = G__49553;
chunk__49024_49546 = G__49554;
count__49025_49547 = G__49555;
i__49026_49548 = G__49556;
continue;
} else {
var temp__5804__auto___49557 = cljs.core.seq(seq__49023_49545);
if(temp__5804__auto___49557){
var seq__49023_49558__$1 = temp__5804__auto___49557;
if(cljs.core.chunked_seq_QMARK_(seq__49023_49558__$1)){
var c__5568__auto___49559 = cljs.core.chunk_first(seq__49023_49558__$1);
var G__49560 = cljs.core.chunk_rest(seq__49023_49558__$1);
var G__49561 = c__5568__auto___49559;
var G__49562 = cljs.core.count(c__5568__auto___49559);
var G__49563 = (0);
seq__49023_49545 = G__49560;
chunk__49024_49546 = G__49561;
count__49025_49547 = G__49562;
i__49026_49548 = G__49563;
continue;
} else {
var vec__49039_49564 = cljs.core.first(seq__49023_49558__$1);
var k_49565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49039_49564,(0),null);
var v_49566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49039_49564,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_49565);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49565),v_49566);


var G__49570 = cljs.core.next(seq__49023_49558__$1);
var G__49571 = null;
var G__49572 = (0);
var G__49573 = (0);
seq__49023_49545 = G__49570;
chunk__49024_49546 = G__49571;
count__49025_49547 = G__49572;
i__49026_49548 = G__49573;
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
var vec__49043 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49043,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49043,(1),null);
var seq__49046_49574 = cljs.core.seq(node_children);
var chunk__49048_49575 = null;
var count__49049_49576 = (0);
var i__49050_49577 = (0);
while(true){
if((i__49050_49577 < count__49049_49576)){
var child_struct_49578 = chunk__49048_49575.cljs$core$IIndexed$_nth$arity$2(null,i__49050_49577);
if((!((child_struct_49578 == null)))){
if(typeof child_struct_49578 === 'string'){
var text_49579 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49579),child_struct_49578].join(''));
} else {
var children_49580 = shadow.dom.svg_node(child_struct_49578);
if(cljs.core.seq_QMARK_(children_49580)){
var seq__49065_49581 = cljs.core.seq(children_49580);
var chunk__49067_49582 = null;
var count__49068_49583 = (0);
var i__49069_49584 = (0);
while(true){
if((i__49069_49584 < count__49068_49583)){
var child_49585 = chunk__49067_49582.cljs$core$IIndexed$_nth$arity$2(null,i__49069_49584);
if(cljs.core.truth_(child_49585)){
node.appendChild(child_49585);


var G__49586 = seq__49065_49581;
var G__49587 = chunk__49067_49582;
var G__49588 = count__49068_49583;
var G__49589 = (i__49069_49584 + (1));
seq__49065_49581 = G__49586;
chunk__49067_49582 = G__49587;
count__49068_49583 = G__49588;
i__49069_49584 = G__49589;
continue;
} else {
var G__49590 = seq__49065_49581;
var G__49591 = chunk__49067_49582;
var G__49592 = count__49068_49583;
var G__49593 = (i__49069_49584 + (1));
seq__49065_49581 = G__49590;
chunk__49067_49582 = G__49591;
count__49068_49583 = G__49592;
i__49069_49584 = G__49593;
continue;
}
} else {
var temp__5804__auto___49595 = cljs.core.seq(seq__49065_49581);
if(temp__5804__auto___49595){
var seq__49065_49596__$1 = temp__5804__auto___49595;
if(cljs.core.chunked_seq_QMARK_(seq__49065_49596__$1)){
var c__5568__auto___49597 = cljs.core.chunk_first(seq__49065_49596__$1);
var G__49598 = cljs.core.chunk_rest(seq__49065_49596__$1);
var G__49599 = c__5568__auto___49597;
var G__49600 = cljs.core.count(c__5568__auto___49597);
var G__49601 = (0);
seq__49065_49581 = G__49598;
chunk__49067_49582 = G__49599;
count__49068_49583 = G__49600;
i__49069_49584 = G__49601;
continue;
} else {
var child_49602 = cljs.core.first(seq__49065_49596__$1);
if(cljs.core.truth_(child_49602)){
node.appendChild(child_49602);


var G__49603 = cljs.core.next(seq__49065_49596__$1);
var G__49604 = null;
var G__49605 = (0);
var G__49606 = (0);
seq__49065_49581 = G__49603;
chunk__49067_49582 = G__49604;
count__49068_49583 = G__49605;
i__49069_49584 = G__49606;
continue;
} else {
var G__49607 = cljs.core.next(seq__49065_49596__$1);
var G__49608 = null;
var G__49609 = (0);
var G__49610 = (0);
seq__49065_49581 = G__49607;
chunk__49067_49582 = G__49608;
count__49068_49583 = G__49609;
i__49069_49584 = G__49610;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49580);
}
}


var G__49611 = seq__49046_49574;
var G__49612 = chunk__49048_49575;
var G__49613 = count__49049_49576;
var G__49614 = (i__49050_49577 + (1));
seq__49046_49574 = G__49611;
chunk__49048_49575 = G__49612;
count__49049_49576 = G__49613;
i__49050_49577 = G__49614;
continue;
} else {
var G__49615 = seq__49046_49574;
var G__49616 = chunk__49048_49575;
var G__49617 = count__49049_49576;
var G__49618 = (i__49050_49577 + (1));
seq__49046_49574 = G__49615;
chunk__49048_49575 = G__49616;
count__49049_49576 = G__49617;
i__49050_49577 = G__49618;
continue;
}
} else {
var temp__5804__auto___49619 = cljs.core.seq(seq__49046_49574);
if(temp__5804__auto___49619){
var seq__49046_49620__$1 = temp__5804__auto___49619;
if(cljs.core.chunked_seq_QMARK_(seq__49046_49620__$1)){
var c__5568__auto___49621 = cljs.core.chunk_first(seq__49046_49620__$1);
var G__49622 = cljs.core.chunk_rest(seq__49046_49620__$1);
var G__49623 = c__5568__auto___49621;
var G__49624 = cljs.core.count(c__5568__auto___49621);
var G__49625 = (0);
seq__49046_49574 = G__49622;
chunk__49048_49575 = G__49623;
count__49049_49576 = G__49624;
i__49050_49577 = G__49625;
continue;
} else {
var child_struct_49626 = cljs.core.first(seq__49046_49620__$1);
if((!((child_struct_49626 == null)))){
if(typeof child_struct_49626 === 'string'){
var text_49628 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49628),child_struct_49626].join(''));
} else {
var children_49629 = shadow.dom.svg_node(child_struct_49626);
if(cljs.core.seq_QMARK_(children_49629)){
var seq__49081_49630 = cljs.core.seq(children_49629);
var chunk__49083_49631 = null;
var count__49084_49632 = (0);
var i__49085_49633 = (0);
while(true){
if((i__49085_49633 < count__49084_49632)){
var child_49634 = chunk__49083_49631.cljs$core$IIndexed$_nth$arity$2(null,i__49085_49633);
if(cljs.core.truth_(child_49634)){
node.appendChild(child_49634);


var G__49635 = seq__49081_49630;
var G__49636 = chunk__49083_49631;
var G__49637 = count__49084_49632;
var G__49638 = (i__49085_49633 + (1));
seq__49081_49630 = G__49635;
chunk__49083_49631 = G__49636;
count__49084_49632 = G__49637;
i__49085_49633 = G__49638;
continue;
} else {
var G__49639 = seq__49081_49630;
var G__49640 = chunk__49083_49631;
var G__49641 = count__49084_49632;
var G__49642 = (i__49085_49633 + (1));
seq__49081_49630 = G__49639;
chunk__49083_49631 = G__49640;
count__49084_49632 = G__49641;
i__49085_49633 = G__49642;
continue;
}
} else {
var temp__5804__auto___49643__$1 = cljs.core.seq(seq__49081_49630);
if(temp__5804__auto___49643__$1){
var seq__49081_49644__$1 = temp__5804__auto___49643__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49081_49644__$1)){
var c__5568__auto___49645 = cljs.core.chunk_first(seq__49081_49644__$1);
var G__49646 = cljs.core.chunk_rest(seq__49081_49644__$1);
var G__49647 = c__5568__auto___49645;
var G__49648 = cljs.core.count(c__5568__auto___49645);
var G__49649 = (0);
seq__49081_49630 = G__49646;
chunk__49083_49631 = G__49647;
count__49084_49632 = G__49648;
i__49085_49633 = G__49649;
continue;
} else {
var child_49651 = cljs.core.first(seq__49081_49644__$1);
if(cljs.core.truth_(child_49651)){
node.appendChild(child_49651);


var G__49652 = cljs.core.next(seq__49081_49644__$1);
var G__49653 = null;
var G__49654 = (0);
var G__49655 = (0);
seq__49081_49630 = G__49652;
chunk__49083_49631 = G__49653;
count__49084_49632 = G__49654;
i__49085_49633 = G__49655;
continue;
} else {
var G__49656 = cljs.core.next(seq__49081_49644__$1);
var G__49657 = null;
var G__49658 = (0);
var G__49659 = (0);
seq__49081_49630 = G__49656;
chunk__49083_49631 = G__49657;
count__49084_49632 = G__49658;
i__49085_49633 = G__49659;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49629);
}
}


var G__49660 = cljs.core.next(seq__49046_49620__$1);
var G__49661 = null;
var G__49662 = (0);
var G__49663 = (0);
seq__49046_49574 = G__49660;
chunk__49048_49575 = G__49661;
count__49049_49576 = G__49662;
i__49050_49577 = G__49663;
continue;
} else {
var G__49664 = cljs.core.next(seq__49046_49620__$1);
var G__49665 = null;
var G__49666 = (0);
var G__49667 = (0);
seq__49046_49574 = G__49664;
chunk__49048_49575 = G__49665;
count__49049_49576 = G__49666;
i__49050_49577 = G__49667;
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
var args__5775__auto__ = [];
var len__5769__auto___49668 = arguments.length;
var i__5770__auto___49670 = (0);
while(true){
if((i__5770__auto___49670 < len__5769__auto___49668)){
args__5775__auto__.push((arguments[i__5770__auto___49670]));

var G__49671 = (i__5770__auto___49670 + (1));
i__5770__auto___49670 = G__49671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49091){
var G__49092 = cljs.core.first(seq49091);
var seq49091__$1 = cljs.core.next(seq49091);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49092,seq49091__$1);
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
var G__49094 = arguments.length;
switch (G__49094) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__45910__auto___49678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45911__auto__ = (function (){var switch__45689__auto__ = (function (state_49102){
var state_val_49103 = (state_49102[(1)]);
if((state_val_49103 === (1))){
var state_49102__$1 = state_49102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49102__$1,(2),once_or_cleanup);
} else {
if((state_val_49103 === (2))){
var inst_49099 = (state_49102[(2)]);
var inst_49100 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49102__$1 = (function (){var statearr_49104 = state_49102;
(statearr_49104[(7)] = inst_49099);

return statearr_49104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49102__$1,inst_49100);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45690__auto__ = null;
var shadow$dom$state_machine__45690__auto____0 = (function (){
var statearr_49105 = [null,null,null,null,null,null,null,null];
(statearr_49105[(0)] = shadow$dom$state_machine__45690__auto__);

(statearr_49105[(1)] = (1));

return statearr_49105;
});
var shadow$dom$state_machine__45690__auto____1 = (function (state_49102){
while(true){
var ret_value__45691__auto__ = (function (){try{while(true){
var result__45692__auto__ = switch__45689__auto__(state_49102);
if(cljs.core.keyword_identical_QMARK_(result__45692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45692__auto__;
}
break;
}
}catch (e49107){var ex__45693__auto__ = e49107;
var statearr_49108_49689 = state_49102;
(statearr_49108_49689[(2)] = ex__45693__auto__);


if(cljs.core.seq((state_49102[(4)]))){
var statearr_49109_49691 = state_49102;
(statearr_49109_49691[(1)] = cljs.core.first((state_49102[(4)])));

} else {
throw ex__45693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49692 = state_49102;
state_49102 = G__49692;
continue;
} else {
return ret_value__45691__auto__;
}
break;
}
});
shadow$dom$state_machine__45690__auto__ = function(state_49102){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45690__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45690__auto____1.call(this,state_49102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45690__auto____0;
shadow$dom$state_machine__45690__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45690__auto____1;
return shadow$dom$state_machine__45690__auto__;
})()
})();
var state__45912__auto__ = (function (){var statearr_49110 = f__45911__auto__();
(statearr_49110[(6)] = c__45910__auto___49678);

return statearr_49110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45912__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
