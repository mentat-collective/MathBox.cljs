import "./cljs_env.js";
goog.provide('nextjournal.clerk.viewer');

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
nextjournal.clerk.viewer.ViewerEval = (function (form,__meta,__extmap,__hash){
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k55963,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__55979 = k55963;
var G__55979__$1 = (((G__55979 instanceof cljs.core.Keyword))?G__55979.fqn:null);
switch (G__55979__$1) {
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55963,else__5346__auto__);

}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__55981){
var vec__55982 = p__55981;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55982,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55982,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#nextjournal.clerk.viewer.ViewerEval{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55962){
var self__ = this;
var G__55962__$1 = this;
return (new cljs.core.RecordIter((0),G__55962__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-737905796 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55964,other55965){
var self__ = this;
var this55964__$1 = this;
return (((!((other55965 == null)))) && ((((this55964__$1.constructor === other55965.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55964__$1.form,other55965.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55964__$1.__extmap,other55965.__extmap)))))));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k55963){
var self__ = this;
var this__5350__auto____$1 = this;
var G__55994 = k55963;
var G__55994__$1 = (((G__55994 instanceof cljs.core.Keyword))?G__55994.fqn:null);
switch (G__55994__$1) {
case "form":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k55963);

}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__55962){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__55998 = cljs.core.keyword_identical_QMARK_;
var expr__55999 = k__5352__auto__;
if(cljs.core.truth_((pred__55998.cljs$core$IFn$_invoke$arity$2 ? pred__55998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__55999) : pred__55998.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__55999)))){
return (new nextjournal.clerk.viewer.ViewerEval(G__55962,self__.__meta,self__.__extmap,null));
} else {
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__55962),null));
}
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__55962){
var self__ = this;
var this__5342__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerEval(self__.form,G__55962,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(nextjournal.clerk.viewer.ViewerEval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null);
}));

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$type = true);

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"nextjournal.clerk.viewer/ViewerEval",null,(1),null));
}));

(nextjournal.clerk.viewer.ViewerEval.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"nextjournal.clerk.viewer/ViewerEval");
}));

/**
 * Positional factory function for nextjournal.clerk.viewer/ViewerEval.
 */
nextjournal.clerk.viewer.__GT_ViewerEval = (function nextjournal$clerk$viewer$__GT_ViewerEval(form){
return (new nextjournal.clerk.viewer.ViewerEval(form,null,null,null));
});

/**
 * Factory function for nextjournal.clerk.viewer/ViewerEval, taking a map of keywords to field values.
 */
nextjournal.clerk.viewer.map__GT_ViewerEval = (function nextjournal$clerk$viewer$map__GT_ViewerEval(G__55969){
var extmap__5385__auto__ = (function (){var G__56007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55969,new cljs.core.Keyword(null,"form","form",-1624062471));
if(cljs.core.record_QMARK_(G__55969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56007);
} else {
return G__56007;
}
})();
return (new nextjournal.clerk.viewer.ViewerEval(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__55969),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
nextjournal.clerk.viewer.ViewerFn = (function (form,f,__meta,__extmap,__hash){
this.form = form;
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k56009,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__56014 = k56009;
var G__56014__$1 = (((G__56014 instanceof cljs.core.Keyword))?G__56014.fqn:null);
switch (G__56014__$1) {
case "form":
return self__.form;

break;
case "f":
return self__.f;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56009,else__5346__auto__);

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__56015){
var vec__56016 = p__56015;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56016,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56016,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#nextjournal.clerk.viewer.ViewerFn{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56008){
var self__ = this;
var G__56008__$1 = this;
return (new cljs.core.RecordIter((0),G__56008__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"f","f",-1597136552)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1201497063 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56010,other56011){
var self__ = this;
var this56010__$1 = this;
return (((!((other56011 == null)))) && ((((this56010__$1.constructor === other56011.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56010__$1.form,other56011.form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56010__$1.f,other56011.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56010__$1.__extmap,other56011.__extmap)))))))));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k56009){
var self__ = this;
var this__5350__auto____$1 = this;
var G__56027 = k56009;
var G__56027__$1 = (((G__56027 instanceof cljs.core.Keyword))?G__56027.fqn:null);
switch (G__56027__$1) {
case "form":
case "f":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56009);

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__56008){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__56030 = cljs.core.keyword_identical_QMARK_;
var expr__56031 = k__5352__auto__;
if(cljs.core.truth_((pred__56030.cljs$core$IFn$_invoke$arity$2 ? pred__56030.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__56031) : pred__56030.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__56031)))){
return (new nextjournal.clerk.viewer.ViewerFn(G__56008,self__.f,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56030.cljs$core$IFn$_invoke$arity$2 ? pred__56030.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__56031) : pred__56030.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__56031)))){
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,G__56008,self__.__meta,self__.__extmap,null));
} else {
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__56008),null));
}
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null))], null),self__.__extmap));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__56008){
var self__ = this;
var this__5342__auto____$1 = this;
return (new nextjournal.clerk.viewer.ViewerFn(self__.form,self__.f,G__56008,self__.__extmap,self__.__hash));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.call = (function (unused__23066__auto__){
var self__ = this;
var self__ = this;
var G__56039 = (arguments.length - (1));
switch (G__56039) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.apply = (function (self__,args56013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56013)));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
var fexpr__56045 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__56045.cljs$core$IFn$_invoke$arity$1 ? fexpr__56045.cljs$core$IFn$_invoke$arity$1(x) : fexpr__56045.call(null,x));
}));

(nextjournal.clerk.viewer.ViewerFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var this$ = this;
var fexpr__56046 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__56046.cljs$core$IFn$_invoke$arity$2 ? fexpr__56046.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__56046.call(null,x,y));
}));

(nextjournal.clerk.viewer.ViewerFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$type = true);

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"nextjournal.clerk.viewer/ViewerFn",null,(1),null));
}));

(nextjournal.clerk.viewer.ViewerFn.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"nextjournal.clerk.viewer/ViewerFn");
}));

/**
 * Positional factory function for nextjournal.clerk.viewer/ViewerFn.
 */
nextjournal.clerk.viewer.__GT_ViewerFn = (function nextjournal$clerk$viewer$__GT_ViewerFn(form,f){
return (new nextjournal.clerk.viewer.ViewerFn(form,f,null,null,null));
});

/**
 * Factory function for nextjournal.clerk.viewer/ViewerFn, taking a map of keywords to field values.
 */
nextjournal.clerk.viewer.map__GT_ViewerFn = (function nextjournal$clerk$viewer$map__GT_ViewerFn(G__56012){
var extmap__5385__auto__ = (function (){var G__56050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56012,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552)], 0));
if(cljs.core.record_QMARK_(G__56012)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56050);
} else {
return G__56050;
}
})();
return (new nextjournal.clerk.viewer.ViewerFn(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__56012),new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__56012),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

nextjournal.clerk.viewer.viewer_fn_QMARK_ = (function nextjournal$clerk$viewer$viewer_fn_QMARK_(x){
return (x instanceof nextjournal.clerk.viewer.ViewerFn);
});
nextjournal.clerk.viewer.viewer_eval_QMARK_ = (function nextjournal$clerk$viewer$viewer_eval_QMARK_(x){
return (x instanceof nextjournal.clerk.viewer.ViewerEval);
});
nextjournal.clerk.viewer.resolve_symbol_alias = (function nextjournal$clerk$viewer$resolve_symbol_alias(aliases,sym){
var temp__5802__auto__ = (function (){var G__56051 = sym;
var G__56051__$1 = (((G__56051 == null))?null:cljs.core.namespace(G__56051));
var G__56051__$2 = (((G__56051__$1 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__56051__$1));
var G__56051__$3 = (((G__56051__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,G__56051__$2));
if((G__56051__$3 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56051__$3);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var full_ns = temp__5802__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(full_ns,cljs.core.name(sym));
} else {
return sym;
}
});
nextjournal.clerk.viewer.resolve_aliases = (function nextjournal$clerk$viewer$resolve_aliases(aliases,form){
return clojure.walk.postwalk((function (p1__56054_SHARP_){
var G__56055 = p1__56054_SHARP_;
if((p1__56054_SHARP_ instanceof cljs.core.Symbol)){
return nextjournal.clerk.viewer.resolve_symbol_alias(aliases,G__56055);
} else {
return G__56055;
}
}),form);
});
nextjournal.clerk.viewer.__GT_viewer_fn = (function nextjournal$clerk$viewer$__GT_viewer_fn(form){
return nextjournal.clerk.viewer.map__GT_ViewerFn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.eval(form)], null));
});
nextjournal.clerk.viewer.__GT_viewer_eval = (function nextjournal$clerk$viewer$__GT_viewer_eval(form){
return nextjournal.clerk.viewer.map__GT_ViewerEval(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
});
nextjournal.clerk.viewer.open_graph_metas = (function nextjournal$clerk$viewer$open_graph_metas(open_graph_properties){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"twitter:card",new cljs.core.Keyword(null,"content","content",15833224),"summary_large_image"], null)], null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__56059){
var vec__56060 = p__56059;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56060,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),["og:",cljs.core.name(prop)].join(''),new cljs.core.Keyword(null,"content","content",15833224),content], null)], null);
})),open_graph_properties);
});
(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(nextjournal.clerk.viewer.ViewerEval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,w,_opts){
var obj__$1 = this;
cljs.core._write(w,"#viewer-eval ");

return cljs.core._write(w,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj__$1.form], 0)));
}));
nextjournal.clerk.viewer.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"viewer-fn","viewer-fn",1346728242,null),nextjournal.clerk.viewer.__GT_viewer_fn,new cljs.core.Symbol(null,"viewer-eval","viewer-eval",-1125780039,null),nextjournal.clerk.viewer.__GT_viewer_eval], null);
/**
 * Tests if `x` is a map containing a `:nextjournal/value`.
 */
nextjournal.clerk.viewer.wrapped_value_QMARK_ = (function nextjournal$clerk$viewer$wrapped_value_QMARK_(x){
var and__5043__auto__ = cljs.core.map_QMARK_(x);
if(and__5043__auto__){
try{return cljs.core.contains_QMARK_(x,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
}catch (e56076){if((e56076 instanceof Error)){
var _e = e56076;
return false;
} else {
throw e56076;

}
}} else {
return and__5043__auto__;
}
});
/**
 * Ensures `x` is wrapped in a map under a `:nextjournal/value` key.
 */
nextjournal.clerk.viewer.ensure_wrapped = (function nextjournal$clerk$viewer$ensure_wrapped(var_args){
var G__56079 = arguments.length;
switch (G__56079) {
case 1:
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),x], null);
}
}));

(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$2 = (function (x,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),v);
}));

(nextjournal.clerk.viewer.ensure_wrapped.cljs$lang$maxFixedArity = 2);

/**
 * Takes `x` and returns the `:nextjournal/value` from it, or otherwise `x` unmodified.
 */
nextjournal.clerk.viewer.__GT_value = (function nextjournal$clerk$viewer$__GT_value(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
/**
 * Returns the `:nextjournal/viewer` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.__GT_viewer = (function nextjournal$clerk$viewer$__GT_viewer(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
/**
 * Returns the `:nextjournal/viewers` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.__GT_viewers = (function nextjournal$clerk$viewer$__GT_viewers(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
/**
 * Returns the `:nextjournal/width` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.width = (function nextjournal$clerk$viewer$width(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
/**
 * Returns the `:nextjournal/css-class` for a given wrapped value `x`, `nil` otherwise.
 */
nextjournal.clerk.viewer.css_class = (function nextjournal$clerk$viewer$css_class(x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.Keyword("nextjournal","css-class","nextjournal/css-class",1374788734).cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
nextjournal.clerk.viewer.viewer_opts_normalization = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__56084_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nextjournal.clerk",cljs.core.name(p1__56084_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nextjournal",cljs.core.name(p1__56084_SHARP_))],null));
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"viewers","viewers",-415894011),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"css-class","css-class",-919455334)], null));
nextjournal.clerk.viewer.throw_when_viewer_opts_invalid = (function nextjournal$clerk$viewer$throw_when_viewer_opts_invalid(opts){
if(cljs.core.map_QMARK_(opts)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("normalize-viewer-opts not passed `map?` opts",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),opts], null));
}

var temp__5804__auto___56614 = new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___56614)){
var width_56615 = temp__5804__auto___56614;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full","full",436801220),null,new cljs.core.Keyword(null,"wide","wide",-151772487),null,new cljs.core.Keyword(null,"prose","prose",2099617726),null], null), null),width_56615)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid `:nextjournal.clerk/width`, allowed values are `:full`, `:wide` and `:prose`.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width_56615], null));
}

var temp__5804__auto___56616__$1 = new cljs.core.Keyword("nextjournal","css-class","nextjournal/css-class",1374788734).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___56616__$1)){
var css_class_56617 = temp__5804__auto___56616__$1;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Conflicting viewer options `:nextjournal.clerk/width` and `:nextjournal.clerk/css-class`. Please remove either one.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width_56615,new cljs.core.Keyword(null,"css-class","css-class",-919455334),css_class_56617], null));
} else {
}
} else {
}

return opts;
});
nextjournal.clerk.viewer.normalize_viewer_opts = (function nextjournal$clerk$viewer$normalize_viewer_opts(opts){
return nextjournal.clerk.viewer.throw_when_viewer_opts_invalid(clojure.set.rename_keys(opts,nextjournal.clerk.viewer.viewer_opts_normalization));
});
nextjournal.clerk.viewer.normalize_viewer = (function nextjournal$clerk$viewer$normalize_viewer(viewer){
if((viewer instanceof cljs.core.Keyword)){
return viewer;
} else {
if(cljs.core.map_QMARK_(viewer)){
return viewer;
} else {
if((((viewer instanceof cljs.core.Symbol)) || (((cljs.core.seq_QMARK_(viewer)) || (cljs.core.fn_QMARK_(viewer)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),viewer], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot normalize viewer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null));

}
}
}
});
/**
 * Wraps the given value `x` and associates it with the given `viewer`. Takes an optional second `viewer-opts` arg.
 */
nextjournal.clerk.viewer.with_viewer = (function nextjournal$clerk$viewer$with_viewer(var_args){
var G__56099 = arguments.length;
switch (G__56099) {
case 2:
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2 = (function (viewer,x){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(viewer,null,x);
}));

(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3 = (function (viewer,viewer_opts,x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(viewer_opts)?nextjournal.clerk.viewer.normalize_viewer_opts(viewer_opts):null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.normalize_viewer(viewer))], 0));
}));

(nextjournal.clerk.viewer.with_viewer.cljs$lang$maxFixedArity = 3);

nextjournal.clerk.viewer.with_viewer_extracting_opts = (function nextjournal$clerk$viewer$with_viewer_extracting_opts(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56619 = arguments.length;
var i__5770__auto___56620 = (0);
while(true){
if((i__5770__auto___56620 < len__5769__auto___56619)){
args__5775__auto__.push((arguments[i__5770__auto___56620]));

var G__56621 = (i__5770__auto___56620 + (1));
i__5770__auto___56620 = G__56621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$core$IFn$_invoke$arity$variadic = (function (viewer,opts_PLUS_items){
if(((cljs.core.map_QMARK_(cljs.core.first(opts_PLUS_items))) && (cljs.core.not(nextjournal.clerk.viewer.wrapped_value_QMARK_(cljs.core.first(opts_PLUS_items)))))){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(viewer,cljs.core.first(opts_PLUS_items),cljs.core.rest(opts_PLUS_items));
} else {
if(((cljs.core.sequential_QMARK_(cljs.core.first(opts_PLUS_items))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(opts_PLUS_items))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,viewer),opts_PLUS_items);
} else {
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(viewer,opts_PLUS_items);

}
}
}));

(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.viewer.with_viewer_extracting_opts.cljs$lang$applyTo = (function (seq56103){
var G__56104 = cljs.core.first(seq56103);
var seq56103__$1 = cljs.core.next(seq56103);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56104,seq56103__$1);
}));

/**
 * Binds viewers to types, eg {:boolean view-fn}
 */
nextjournal.clerk.viewer.with_viewers = (function nextjournal$clerk$viewer$with_viewers(viewers,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers);
});
nextjournal.clerk.viewer.get_safe = (function nextjournal$clerk$viewer$get_safe(var_args){
var G__56111 = arguments.length;
switch (G__56111) {
case 1:
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1 = (function (key){
return (function (p1__56109_SHARP_){
return nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2(p1__56109_SHARP_,key);
});
}));

(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2 = (function (map,key){
if(cljs.core.map_QMARK_(map)){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,key);
}catch (e56112){if((e56112 instanceof Error)){
var _e = e56112;
return null;
} else {
throw e56112;

}
}} else {
return null;
}
}));

(nextjournal.clerk.viewer.get_safe.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.rpad_vec = (function nextjournal$clerk$viewer$rpad_vec(v,length,padding){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(length,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(padding))));
});
nextjournal.clerk.viewer.missing_pred = new cljs.core.Keyword("nextjournal","missing","nextjournal/missing",-1931810187);
nextjournal.clerk.viewer.normalize_seq_of_seq = (function nextjournal$clerk$viewer$normalize_seq_of_seq(s){
var max_count = cljs.core.count(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,s));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56114_SHARP_){
return nextjournal.clerk.viewer.rpad_vec(nextjournal.clerk.viewer.__GT_value(p1__56114_SHARP_),max_count,nextjournal.clerk.viewer.missing_pred);
}),s)], null);
});
nextjournal.clerk.viewer.normalize_seq_of_map = (function nextjournal$clerk$viewer$normalize_seq_of_map(s){
var ks = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),ks,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56115_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,p1__56115_SHARP_,nextjournal.clerk.viewer.missing_pred);
}),ks);
}),s)], null);
});
nextjournal.clerk.viewer.normalize_map_of_seq = (function nextjournal$clerk$viewer$normalize_map_of_seq(m){
var ks = cljs.core.vec(cljs.core.keys(m));
var m_STAR_ = ((cljs.core.seq_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(ks))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56117){
var vec__56118 = p__56117;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.vec(s));
}),cljs.core.PersistentArrayMap.EMPTY,m):m);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),ks,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56116_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56116_SHARP_,i], null),nextjournal.clerk.viewer.missing_pred);
}),ks);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.val(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),m_STAR_)))))], null);
});
nextjournal.clerk.viewer.normalize_seq_to_vec = (function nextjournal$clerk$viewer$normalize_seq_to_vec(p__56122){
var map__56123 = p__56122;
var map__56123__$1 = cljs.core.__destructure_map(map__56123);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56123__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56123__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__56124 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(rows)], null);
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56124,new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.vec(head));
} else {
return G__56124;
}
});
nextjournal.clerk.viewer.use_headers = (function nextjournal$clerk$viewer$use_headers(s){
var map__56125 = nextjournal.clerk.viewer.normalize_seq_of_seq(s);
var map__56125__$1 = cljs.core.__destructure_map(map__56125);
var table = map__56125__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56125__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.first(rows)),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest);
});
nextjournal.clerk.viewer.normalize_table_data = (function nextjournal$clerk$viewer$normalize_table_data(data){
if(((cljs.core.map_QMARK_(data)) && (cljs.core.sequential_QMARK_(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"rows","rows",850049680)))))){
return nextjournal.clerk.viewer.normalize_seq_to_vec(data);
} else {
if(((cljs.core.map_QMARK_(data)) && (cljs.core.sequential_QMARK_(cljs.core.first(cljs.core.vals(data)))))){
return nextjournal.clerk.viewer.normalize_map_of_seq(data);
} else {
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.map_QMARK_(cljs.core.first(data))))){
return nextjournal.clerk.viewer.normalize_seq_of_map(data);
} else {
if(((cljs.core.sequential_QMARK_(data)) && (cljs.core.sequential_QMARK_(cljs.core.first(data))))){
return nextjournal.clerk.viewer.normalize_seq_of_seq(data);
} else {
return null;

}
}
}
}
});
nextjournal.clerk.viewer.demunge_ex_data = (function nextjournal$clerk$viewer$demunge_ex_data(ex_data){
var G__56127 = ex_data;
if(cljs.core.map_QMARK_(ex_data)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56127,new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (traces){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56126_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56126_SHARP_,(0),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.demunge,cljs.core.pr_str));
}),traces);
}));
} else {
return G__56127;
}
});









nextjournal.clerk.viewer.inspect_fn = (function nextjournal$clerk$viewer$inspect_fn(){
return cljs.core.eval(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null));
});
nextjournal.clerk.viewer.mark_presented = (function nextjournal$clerk$viewer$mark_presented(wrapped_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","presented?","nextjournal/presented?",302564567),true);
});
nextjournal.clerk.viewer.mark_preserve_keys = (function nextjournal$clerk$viewer$mark_preserve_keys(wrapped_value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","preserve-keys?","nextjournal/preserve-keys?",-231586167),true);
});
nextjournal.clerk.viewer.fetch_all = (function nextjournal$clerk$viewer$fetch_all(_opts,_xs){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`fetch-all` is deprecated, please use a `:transform-fn` with `mark-presented` instead.",cljs.core.PersistentArrayMap.EMPTY);
});
nextjournal.clerk.viewer.datafied_QMARK_ = nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal.clerk","datafied","nextjournal.clerk/datafied",795076723));
nextjournal.clerk.viewer.with_md_viewer = (function nextjournal$clerk$viewer$with_md_viewer(wrapped_value){
var map__56128 = nextjournal.clerk.viewer.__GT_value(wrapped_value);
var map__56128__$1 = cljs.core.__destructure_map(map__56128);
var _node = map__56128__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("no type given for with-md-viewer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
}

return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("nextjournal.markdown",cljs.core.name(type)),wrapped_value);
});
nextjournal.clerk.viewer.into_markup = (function nextjournal$clerk$viewer$into_markup(markup){
return (function (p__56130){
var map__56131 = p__56130;
var map__56131__$1 = cljs.core.__destructure_map(map__56131);
var wrapped_value = map__56131__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56131__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"html-","html-",2137536874),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)], null),wrapped_value)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (p__56132){
var map__56133 = p__56132;
var map__56133__$1 = cljs.core.__destructure_map(map__56133);
var node = map__56133__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__56134 = markup;
if(cljs.core.fn_QMARK_(markup)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__56134,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
} else {
return G__56134;
}
})(),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null):(cljs.core.truth_(content)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56129_SHARP_){
var w = (function (){var G__56135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.with_md_viewer(p1__56129_SHARP_),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),viewers);
return (nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.apply_viewers.cljs$core$IFn$_invoke$arity$1(G__56135) : nextjournal.clerk.viewer.apply_viewers.call(null,G__56135));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html-","html-",2137536874),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(w)))){
return nextjournal.clerk.viewer.__GT_value(w);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.inspect_fn(),(nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.process_wrapped_value.cljs$core$IFn$_invoke$arity$1(w) : nextjournal.clerk.viewer.process_wrapped_value.call(null,w))], null);
}
}),content):null)));
}));
});
});
nextjournal.clerk.viewer.update_val = (function nextjournal$clerk$viewer$update_val(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56659 = arguments.length;
var i__5770__auto___56660 = (0);
while(true){
if((i__5770__auto___56660 < len__5769__auto___56659)){
args__5775__auto__.push((arguments[i__5770__auto___56660]));

var G__56661 = (i__5770__auto___56660 + (1));
i__5770__auto___56660 = G__56661;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.viewer.update_val.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(nextjournal.clerk.viewer.update_val.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (wrapped_value){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,wrapped_value,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),f,args);
});
}));

(nextjournal.clerk.viewer.update_val.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.viewer.update_val.cljs$lang$applyTo = (function (seq56138){
var G__56139 = cljs.core.first(seq56138);
var seq56138__$1 = cljs.core.next(seq56138);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56139,seq56138__$1);
}));

nextjournal.clerk.viewer.var_from_def_QMARK_ = (function nextjournal$clerk$viewer$var_from_def_QMARK_(x){
return cljs.core.var_QMARK_(nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447)));
});
nextjournal.clerk.viewer.var_from_def_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),nextjournal.clerk.viewer.var_from_def_QMARK_,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447)))], null);
/**
 * Applies the `viewer` (if set) to the given result `result`. In case
 *   the `value` is a `var-from-def?` it will be unwrapped unless the
 *   viewer opts out with a truthy `:nextjournal.clerk/var-from-def`.
 */
nextjournal.clerk.viewer.apply_viewer_unwrapping_var_from_def = (function nextjournal$clerk$viewer$apply_viewer_unwrapping_var_from_def(p__56140){
var map__56141 = p__56140;
var map__56141__$1 = cljs.core.__destructure_map(map__56141);
var result = map__56141__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
if(cljs.core.truth_(viewer)){
var value_PLUS_viewer = ((((cljs.core.var_QMARK_(viewer)) || (cljs.core.fn_QMARK_(viewer))))?(viewer.cljs$core$IFn$_invoke$arity$1 ? viewer.cljs$core$IFn$_invoke$arity$1(value) : viewer.call(null,value)):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.normalize_viewer(viewer)], null));
var map__56142 = nextjournal.clerk.viewer.var_from_def_viewer;
var map__56142__$1 = cljs.core.__destructure_map(map__56142);
var unwrap_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var var_from_def_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__56143 = value_PLUS_viewer;
if(cljs.core.truth_((function (){var and__5043__auto__ = (var_from_def_QMARK_.cljs$core$IFn$_invoke$arity$1 ? var_from_def_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : var_from_def_QMARK_.call(null,value));
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"var-from-def?","var-from-def?",-820285863).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(value_PLUS_viewer)));
} else {
return and__5043__auto__;
}
})())){
return (unwrap_var.cljs$core$IFn$_invoke$arity$1 ? unwrap_var.cljs$core$IFn$_invoke$arity$1(G__56143) : unwrap_var.call(null,G__56143));
} else {
return G__56143;
}
})());
} else {
return result;
}
});
nextjournal.clerk.viewer.get_default_viewers = (function nextjournal$clerk$viewer$get_default_viewers(){
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nextjournal.clerk.viewer._BANG_viewers),nextjournal.clerk.viewer.default_viewers);
});
nextjournal.clerk.viewer.get_viewers = (function nextjournal$clerk$viewer$get_viewers(var_args){
var G__56181 = arguments.length;
switch (G__56181) {
case 1:
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1 = (function (scope){
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2(scope,null);
}));

(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$2 = (function (scope,value){
var or__5045__auto__ = (cljs.core.truth_(value)?nextjournal.clerk.viewer.__GT_viewers(value):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_(scope)?(function (){var fexpr__56185 = cljs.core.deref(nextjournal.clerk.viewer._BANG_viewers);
return (fexpr__56185.cljs$core$IFn$_invoke$arity$1 ? fexpr__56185.cljs$core$IFn$_invoke$arity$1(scope) : fexpr__56185.call(null,scope));
})():null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return nextjournal.clerk.viewer.get_default_viewers();
}
}
}));

(nextjournal.clerk.viewer.get_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.transform_result = (function nextjournal$clerk$viewer$transform_result(p__56188){
var map__56189 = p__56188;
var map__56189__$1 = cljs.core.__destructure_map(map__56189);
var _cell = map__56189__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var map__56190 = doc;
var map__56190__$1 = cljs.core.__destructure_map(map__56190);
var auto_expand_results_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56190__$1,new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436));
var inline_results_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56190__$1,new cljs.core.Keyword(null,"inline-results?","inline-results?",-577381363));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56190__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var map__56191 = result;
var map__56191__$1 = cljs.core.__destructure_map(map__56191);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword("nextjournal","blob-id","nextjournal/blob-id",440359182));
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var blob_mode = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(inline_results_QMARK_);
if(and__5043__auto__){
return blob_id;
} else {
return and__5043__auto__;
}
})())?new cljs.core.Keyword(null,"lazy-load","lazy-load",686054413):(cljs.core.truth_(bundle_QMARK_)?new cljs.core.Keyword(null,"inline","inline",1399884222):new cljs.core.Keyword(null,"file","file",-1269645878)
));
var _ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(doc,new cljs.core.Keyword(null,"blob-mode","blob-mode",-1665009289),blob_mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blob-id","blob-id",1929300970),blob_id], 0));
var presented_result = (function (){var G__56193 = (function (){var G__56195 = (function (){var or__5045__auto__ = viewers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_);
}
})();
var G__56196 = value;
return (nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(G__56195,G__56196) : nextjournal.clerk.viewer.ensure_wrapped_with_viewers.call(null,G__56195,G__56196));
})();
return (nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(G__56193) : nextjournal.clerk.viewer.present.call(null,G__56193));
})();
var opts_from_form_meta = (function (){var G__56197 = cljs.core.select_keys(result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","css-class","nextjournal/css-class",1374788734),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249)], null));
if((!((auto_expand_results_QMARK_ == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56197,new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),(function (p1__56187_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436),auto_expand_results_QMARK_], null),p1__56187_SHARP_], 0));
}));
} else {
return G__56197;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__56198 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","presented","nextjournal/presented",1933851841),presented_result], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal.clerk","open-graph","nextjournal.clerk/open-graph",1681164391).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56198,new cljs.core.Keyword("nextjournal","open-graph-image-capture","nextjournal/open-graph-image-capture",201173909),true);
} else {
return G__56198;
}
})()], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(presented_result,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841)], 0)),opts_from_form_meta], 0));
});
nextjournal.clerk.viewer.hide_result_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-result","hide-result",-968725584),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (_){
return null;
})], null);
nextjournal.clerk.viewer.__GT_display = (function nextjournal$clerk$viewer$__GT_display(p__56200){
var map__56201 = p__56200;
var map__56201__$1 = cljs.core.__destructure_map(map__56201);
var code_cell = map__56201__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"visibility","visibility",1338380893));
var map__56204 = visibility;
var map__56204__$1 = cljs.core.__destructure_map(map__56204);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result?","result?",1877293881),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide","hide",-596913169),result__$1),new cljs.core.Keyword(null,"fold?","fold?",-838772533),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"fold","fold",-887461332)),new cljs.core.Keyword(null,"code?","code?",1380577153),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide","hide",-596913169),code)], null);
});
nextjournal.clerk.viewer.with_block_viewer = (function nextjournal$clerk$viewer$with_block_viewer(doc,p__56205){
var map__56206 = p__56205;
var map__56206__$1 = cljs.core.__destructure_map(map__56206);
var cell = map__56206__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56206__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__56207 = type;
var G__56207__$1 = (((G__56207 instanceof cljs.core.Keyword))?G__56207.fqn:null);
switch (G__56207__$1) {
case "markdown":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cell))], null);

break;
case "code":
var cell__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"result","result",1415092211),nextjournal.clerk.viewer.apply_viewer_unwrapping_var_from_def);
var map__56209 = nextjournal.clerk.viewer.__GT_display(cell__$1);
var map__56209__$1 = cljs.core.__destructure_map(map__56209);
var display_opts = map__56209__$1;
var code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56209__$1,new cljs.core.Keyword(null,"code?","code?",1380577153));
var result_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56209__$1,new cljs.core.Keyword(null,"result?","result?",1877293881));
var G__56210 = cljs.core.PersistentVector.EMPTY;
var G__56210__$1 = (cljs.core.truth_(code_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56210,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("clerk","code-block","clerk/code-block",-2085230478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal.clerk","opts","nextjournal.clerk/opts",1288842658),cljs.core.select_keys(cell__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loc","loc",-584284901)], null))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell__$1,display_opts], 0)),new cljs.core.Keyword(null,"result","result",1415092211)))):G__56210);
if(cljs.core.truth_(result_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56210__$1,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.result_viewer),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc)));
} else {
return G__56210__$1;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56207__$1)].join('')));

}
});
nextjournal.clerk.viewer.update_viewers = (function nextjournal$clerk$viewer$update_viewers(viewers,select_fn__GT_update_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (viewers__$1,p__56211){
var vec__56212 = p__56211;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56212,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56212,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (viewer){
var G__56215 = viewer;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(viewer) : pred.call(null,viewer)))){
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__56215) : update_fn.call(null,G__56215));
} else {
return G__56215;
}
}),viewers__$1);
}),viewers,select_fn__GT_update_fn);
});
nextjournal.clerk.viewer.add_viewers = (function nextjournal$clerk$viewer$add_viewers(var_args){
var G__56218 = arguments.length;
switch (G__56218) {
case 1:
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$1 = (function (added_viewers){
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_default_viewers(),added_viewers);
}));

(nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2 = (function (viewers,added_viewers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(added_viewers),viewers);
}));

(nextjournal.clerk.viewer.add_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.table_missing_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","missing","nextjournal/missing",-1931810187),null], null), null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null))], null);
nextjournal.clerk.viewer.table_markup_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","markup","table/markup",-1739626078),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"head+body","head+body",1604720934,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","render-table-with-sticky-header","nextjournal.clerk.render/render-table-with-sticky-header",-19885932,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-children","nextjournal.clerk.render/inspect-children",957366513,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),new cljs.core.Symbol(null,"head+body","head+body",1604720934,null))], null))], null);
nextjournal.clerk.viewer.table_head_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","head","table/head",-743087705),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header-row","header-row",983561376,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"header-cell","header-cell",1376541765,null),new cljs.core.Keyword("nextjournal","keys","nextjournal/keys",-1477484234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),new cljs.core.Symbol(null,"value","value",1946509744,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.pl-6.pr-2.py-1.align-bottom.font-medium.top-0.z-10.bg-white.dark:bg-slate-900.border-b.border-gray-300.dark:border-slate-700","th.pl-6.pr-2.py-1.align-bottom.font-medium.top-0.z-10.bg-white.dark:bg-slate-900.border-b.border-gray-300.dark:border-slate-700",1151453985),cljs.core.list(new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)),cljs.core.list(new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null),new cljs.core.Symbol(null,"i","i",253690212,null))),"text-right")], null),new cljs.core.Symbol(null,"title","title",-2017930186,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"title","title",-2017930186,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"header-cell","header-cell",1376541765,null))], null)], null)))),new cljs.core.Symbol(null,"header-row","header-row",983561376,null))], null))], null);
nextjournal.clerk.viewer.table_body_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","body","table/body",2087444141),new cljs.core.Keyword(null,"page-size","page-size",223836073),(20),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"row","row",1070392006,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),new cljs.core.Symbol(null,"row","row",1070392006,null)))),new cljs.core.Symbol(null,"rows","rows",-1804386089,null)))], null);
nextjournal.clerk.viewer.table_row_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("table","row","table/row",-747986867),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-gray-200.dark:hover:bg-slate-700","tr.hover:bg-gray-200.dark:hover:bg-slate-700",-1843832203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"peek","peek",1349135202,null),new cljs.core.Symbol(null,"path","path",1452340359,null))),"bg-black/5 dark:bg-gray-800","bg-white dark:bg-gray-900")], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"cell","cell",-1890190685,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.pl-6.pr-2.py-1","td.pl-6.pr-2.py-1",134838880),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null)),cljs.core.list(new cljs.core.Symbol(null,"number-col?","number-col?",-158949342,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right"], null)),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"cell","cell",-1890190685,null))], null))),new cljs.core.Symbol(null,"row","row",1070392006,null)))], null);
nextjournal.clerk.viewer.update_table_viewers = (function nextjournal$clerk$viewer$update_table_viewers(viewers){
return nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.update_viewers(viewers,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.string_QMARK_]),new cljs.core.Keyword(null,"pred","pred",1927423397)),(function (p1__56234_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56234_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-string","nextjournal.clerk.render/render-string",-1284682288,null));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.number_QMARK_]),new cljs.core.Keyword(null,"pred","pred",1927423397)),(function (p1__56235_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56235_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tabular-nums","span.tabular-nums",-471576308),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("js","Number.isNaN","js/Number.isNaN",271195703,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),"NaN",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null)));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177)),(function (p1__56236_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56236_SHARP_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"fetch-opts","fetch-opts",-63866811,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"total","total",-737625351,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"unbounded?","unbounded?",-991489119,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num-cols","num-cols",729489141,null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","consume-view-context","nextjournal.clerk.render/consume-view-context",-1452071092,null),new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.border-t.dark:border-slate-700","tr.border-t.dark:border-slate-700",-965823596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.relative","td.py-1.relative",1336599861),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),new cljs.core.Symbol(null,"num-cols","num-cols",729489141,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)),"bg-indigo-50 hover:bg-indigo-100 dark:bg-gray-800 dark:hover:bg-slate-700 cursor-pointer","text-gray-400 text-slate-500"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null)),cljs.core.list(new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null),new cljs.core.Symbol(null,"fetch-opts","fetch-opts",-63866811,null))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sticky","span.sticky",377501919),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"min(50vw, 50%)"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"-translate-x-1/2"], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"total","total",-737625351,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"unbounded?","unbounded?",-991489119,null),"+"),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"fetch-fn","fetch-fn",1682847910,null))," more\u2026"," more elided")], null)], null)], null))], null)));
})])),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.table_missing_viewer,nextjournal.clerk.viewer.table_markup_viewer,nextjournal.clerk.viewer.table_head_viewer,nextjournal.clerk.viewer.table_body_viewer,nextjournal.clerk.viewer.table_row_viewer], null));
});
nextjournal.clerk.viewer.markdown_viewers = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","doc","nextjournal.markdown/doc",-681589518),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-markdown","div.viewer-markdown",-559117844)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","heading","nextjournal.markdown/heading",-318469386),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__56252){
var map__56253 = p__56252;
var map__56253__$1 = cljs.core.__destructure_map(map__56253);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"heading-level","heading-level",563433452));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading_level)].join(''),attrs], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","image","nextjournal.markdown/image",-2078770273),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p1__56242_SHARP_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline","img.inline",-1116141579),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(p1__56242_SHARP_))], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","blockquote","nextjournal.markdown/blockquote",928507835),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","paragraph","nextjournal.markdown/paragraph",655734744),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","plain","nextjournal.markdown/plain",-1301352754),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","ruler","nextjournal.markdown/ruler",579881142),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","code","nextjournal.markdown/code",-1188751795),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code","div.viewer-code",567168659),nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),nextjournal.markdown.transform.__GT_text(nextjournal.clerk.viewer.__GT_value(wrapped_value)))], null));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","em","nextjournal.markdown/em",-1954041482),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","strong","nextjournal.markdown/strong",2108286045),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","monospace","nextjournal.markdown/monospace",540373836),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","strikethrough","nextjournal.markdown/strikethrough",301946795),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","link","nextjournal.markdown/link",-232520869),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__56243_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56243_SHARP_)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","internal-link","nextjournal.markdown/internal-link",140443891),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__56244_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__56244_SHARP_))].join('')], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","hashtag","nextjournal.markdown/hashtag",1163949980),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__56245_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__56245_SHARP_))].join('')], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","text","nextjournal.markdown/text",-1344313640),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","softbreak","nextjournal.markdown/softbreak",-520361768),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","formula","nextjournal.markdown/formula",-441899729),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-katex","nextjournal.clerk.render/render-katex",989757125,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","block-formula","nextjournal.markdown/block-formula",-1473484788),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-katex","nextjournal.clerk.render/render-katex",989757125,null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","bullet-list","nextjournal.markdown/bullet-list",-398734570),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","numbered-list","nextjournal.markdown/numbered-list",-1217603445),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","todo-list","nextjournal.markdown/todo-list",8807481),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.contains-task-list","ul.contains-task-list",-299292859)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","list-item","nextjournal.markdown/list-item",1772087365),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","todo-item","nextjournal.markdown/todo-item",940523205),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__56262){
var map__56263 = p__56262;
var map__56263__$1 = cljs.core.__destructure_map(map__56263);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(attrs)], null)], null)], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table","nextjournal.markdown/table",-1954735827),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-head","nextjournal.markdown/table-head",1504661249),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-body","nextjournal.markdown/table-body",1018071804),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-row","nextjournal.markdown/table-row",544131596),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-header","nextjournal.markdown/table-header",-1008564809),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__56248_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56248_SHARP_))], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","table-data","nextjournal.markdown/table-data",-255288050),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p1__56249_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),nextjournal.markdown.transform.table_alignment(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56249_SHARP_))], null)],null));
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","toc","nextjournal.markdown/toc",343559258),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toc","div.toc",2085460476)], null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","sidenote","nextjournal.markdown/sidenote",-2067797147),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup((function (p__56264){
var map__56265 = p__56264;
var map__56265__$1 = cljs.core.__destructure_map(map__56265);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidenote","span.sidenote",-1886925254),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null)], null),(new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(attrs) + (1))], null)], null);
}))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal.markdown","sidenote-ref","nextjournal.markdown/sidenote-ref",1709421577),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.into_markup(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.sidenote-ref","sup.sidenote-ref",-900607849)], null))], null)], true);
nextjournal.clerk.viewer.char_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.char_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value","span.cmt-string.inspected-value",-610812505),"\\",new cljs.core.Symbol(null,"c","c",-122660552,null)], null))], null);
nextjournal.clerk.viewer.string_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-quoted-string","nextjournal.clerk.render/render-quoted-string",1047388439,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"\"",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"\"",new cljs.core.Keyword(null,"page-size","page-size",223836073),(80)], null);
nextjournal.clerk.viewer.number_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-number","nextjournal.clerk.render/render-number",2069228400,null)], null);
nextjournal.clerk.viewer.number_hex_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"number-hex","number-hex",-9072138),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-number","nextjournal.clerk.render/render-number",2069228400,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"0x",cljs.core.list(new cljs.core.Symbol(null,".toString",".toString",1703252567,null),cljs.core.list(new cljs.core.Symbol("js","Number.","js/Number.",952837503,null),new cljs.core.Symbol(null,"num","num",-669195096,null)),(16)))))], null);
nextjournal.clerk.viewer.symbol_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.symbol_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-keyword.inspected-value","span.cmt-keyword.inspected-value",-1622971182),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null);
nextjournal.clerk.viewer.keyword_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-atom.inspected-value","span.cmt-atom.inspected-value",95454221),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null);
nextjournal.clerk.viewer.nil_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-default.inspected-value","span.cmt-default.inspected-value",588849128),"nil"], null))], null);
nextjournal.clerk.viewer.boolean_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-bool.inspected-value","span.cmt-bool.inspected-value",-117987200),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null))], null);
nextjournal.clerk.viewer.map_entry_viewer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.map_entry_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-children","nextjournal.clerk.render/inspect-children",957366513,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),cljs.core.list(new cljs.core.Symbol(null,"interpose","interpose",-2078295140,null)," ")),new cljs.core.Symbol(null,"xs","xs",-2004992428,null))),new cljs.core.Keyword(null,"page-size","page-size",223836073),(2)], null);
nextjournal.clerk.viewer.read_PLUS_inspect_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"read+inspect","read+inspect",71456950),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","inspect","nextjournal.clerk.render/inspect",-644654535,null),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null),cljs.core.list(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),new cljs.core.Symbol(null,"_e","_e",-1055975395,null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-unreadable-edn","nextjournal.clerk.render/render-unreadable-edn",1358731294,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))], null);
nextjournal.clerk.viewer.vector_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-coll","nextjournal.clerk.render/render-coll",937183842,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"[",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"]",new cljs.core.Keyword(null,"page-size","page-size",223836073),(20)], null);
nextjournal.clerk.viewer.set_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-coll","nextjournal.clerk.render/render-coll",937183842,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"#{",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"}",new cljs.core.Keyword(null,"page-size","page-size",223836073),(20)], null);
nextjournal.clerk.viewer.sequential_viewer = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-coll","nextjournal.clerk.render/render-coll",937183842,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"(",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),")",new cljs.core.Keyword(null,"page-size","page-size",223836073),(20)], null);
nextjournal.clerk.viewer.map_viewer = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-map","nextjournal.clerk.render/render-map",-140598584,null),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"{",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"}",new cljs.core.Keyword(null,"page-size","page-size",223836073),(10)], null);
nextjournal.clerk.viewer.var__GT_symbol = (function nextjournal$clerk$viewer$var__GT_symbol(v){
if((v instanceof sci.lang.Var)){
return v.sci$impl$vars$IVar$toSymbol$arity$1(null);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
}
});
nextjournal.clerk.viewer.var_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.var_QMARK_,(function (p1__56269_SHARP_){
return (p1__56269_SHARP_ instanceof sci.lang.Var);
})),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.var__GT_symbol,nextjournal.clerk.viewer.__GT_value),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value","span.inspected-value",175758227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),"#'",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)], null))], null);
nextjournal.clerk.viewer.throwable_viewer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-throwable","nextjournal.clerk.render/render-throwable",10377416,null),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (e){
return (e instanceof Error);
}),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.demunge_ex_data,clojure.datafy.datafy)))], null);
nextjournal.clerk.viewer.ideref_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__56274_SHARP_){
if((!((p1__56274_SHARP_ == null)))){
if((((p1__56274_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === p1__56274_SHARP_.cljs$core$IDeref$)))){
return true;
} else {
if((!p1__56274_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__56274_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,p1__56274_SHARP_);
}
}),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (ideref){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"object",new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(ideref)], 0))),(function (){var temp__5802__auto__ = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.deref_as_map !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.deref_as_map;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","deref-as-map","cljs.core/deref-as-map",92502742,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
if(cljs.core.truth_(temp__5802__auto__)){
var deref_as_map = temp__5802__auto__;
return (deref_as_map.cljs$core$IFn$_invoke$arity$1 ? deref_as_map.cljs$core$IFn$_invoke$arity$1(ideref) : deref_as_map.call(null,ideref));
} else {
return cljs.core.deref(ideref);
}
})()],null))], null));
}))], null);
nextjournal.clerk.viewer.regex_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.regexp_QMARK_,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),"",new cljs.core.Keyword(null,"value","value",305978217),(function (){var regex = nextjournal.clerk.viewer.__GT_value(wrapped_value);
return regex.source;
})()], null));
})], null);
nextjournal.clerk.viewer.fallback_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.constantly(new cljs.core.Keyword(null,"true","true",-1114210334)),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (p1__56278_SHARP_){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read+inspect","read+inspect",71456950),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56278_SHARP_], 0)));
}))], null);
nextjournal.clerk.viewer.elision_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"elision","elision",1599157097),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-elision","nextjournal.clerk.render/render-elision",684935331,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.katex_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"latex","latex",-1820161144),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-katex","nextjournal.clerk.render/render-katex",989757125,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.mathjax_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mathjax","mathjax",-1009833386),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-mathjax","nextjournal.clerk.render/render-mathjax",-919845353,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.transform_html = (function nextjournal$clerk$viewer$transform_html(p__56279){
var map__56280 = p__56279;
var map__56280__$1 = cljs.core.__destructure_map(map__56280);
var wrapped_value = map__56280__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56280__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _BANG_path = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (hiccup){
if(typeof hiccup === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),hiccup], null)], null)], null);
} else {
return clojure.walk.postwalk((function (x){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.viewer.inspect_fn(),(function (){var G__56284 = x;
var G__56285 = (function (){var p = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_path,cljs.core.inc));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),p,new cljs.core.Keyword(null,"path","path",-188191168),p], null);
})();
return (nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(G__56284,G__56285) : nextjournal.clerk.viewer.present.call(null,G__56284,G__56285));
})()], null);
} else {
return x;
}
}),hiccup);
}
}));
});
nextjournal.clerk.viewer.html_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.transform_html)], null);
nextjournal.clerk.viewer.plotly_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"plotly","plotly",817625458),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-plotly","nextjournal.clerk.render/render-plotly",-2013149016,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.vega_lite_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-vega-lite","nextjournal.clerk.render/render-vega-lite",-945434981,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.markdown_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return nextjournal.clerk.viewer.with_md_viewer(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(wrapped_value),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (p1__56287_SHARP_){
var G__56288 = p1__56287_SHARP_;
if(typeof p1__56287_SHARP_ === 'string'){
return nextjournal.markdown.parse(G__56288);
} else {
return G__56288;
}
})),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),nextjournal.clerk.viewer.add_viewers,nextjournal.clerk.viewer.markdown_viewers));
})], null);
nextjournal.clerk.viewer.code_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-code","nextjournal.clerk.render/render-code",-2143180078,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val((function (v){
if(typeof v === 'string'){
return v;
} else {
return clojure.string.trim((function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56295_56739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56296_56740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56297_56741 = true;
var _STAR_print_fn_STAR__temp_val__56298_56742 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56297_56741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56298_56742);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56296_56740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56295_56739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
}
})))], null);
nextjournal.clerk.viewer.code_folded_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code-folded","code-folded",-864616068),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-folded-code","nextjournal.clerk.render/render-folded-code",1201079435,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val((function (v){
if(typeof v === 'string'){
return v;
} else {
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56305_56753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56306_56754 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56307_56755 = true;
var _STAR_print_fn_STAR__temp_val__56308_56756 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56307_56755);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56308_56756);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(v);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56306_56754);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56305_56753);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
}
})))], null);
nextjournal.clerk.viewer.reagent_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reagent","reagent",2131627322),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-reagent","nextjournal.clerk.render/render-reagent",446625235,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented], null);
nextjournal.clerk.viewer.row_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item-count","item-count",1649190299,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"items","items",-1622480831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:flex md:flex-row md:gap-4 not-prose",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.flex-auto","div.flex.items-center.justify-center.flex-auto",336202477),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"item","item",1889905329,null))], null))),new cljs.core.Symbol(null,"items","items",-1622480831,null))))], null);
nextjournal.clerk.viewer.col_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:flex md:flex-col md:gap-4 clerk-grid not-prose",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"item","item",1889905329,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center","div.flex.items-center.justify-center",-1114622942),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"item","item",1889905329,null))], null))),new cljs.core.Symbol(null,"items","items",-1622480831,null)))], null);
nextjournal.clerk.viewer.table_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
var temp__5802__auto__ = nextjournal.clerk.viewer.normalize_table_data(nextjournal.clerk.viewer.__GT_value(wrapped_value));
if(cljs.core.truth_(temp__5802__auto__)){
var map__56311 = temp__5802__auto__;
var map__56311__$1 = cljs.core.__destructure_map(map__56311);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword("table","markup","table/markup",-1739626078)),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),(function (p1__56309_SHARP_){
var or__5045__auto__ = p1__56309_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"wide","wide",-151772487);
}
})),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),nextjournal.clerk.viewer.update_table_viewers),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-cols","num-cols",-911042386),cljs.core.count((function (){var or__5045__auto__ = head;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first(rows);
}
})()),new cljs.core.Keyword(null,"number-col?","number-col?",-1799480869),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__56310_SHARP_){
if(typeof cljs.core.second(p1__56310_SHARP_) === 'number'){
return cljs.core.first(p1__56310_SHARP_);
} else {
return null;
}
}))),cljs.core.not_empty(cljs.core.first(rows)))], null)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (){var G__56312 = cljs.core.PersistentVector.EMPTY;
var G__56312__$1 = ((cljs.core.seq(rows))?cljs.core.cons(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("table","body","table/body",2087444141),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,new cljs.core.Keyword("table","row","table/row",-747986867)),rows)),G__56312):G__56312);
if(cljs.core.truth_(head)){
return cljs.core.cons(nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.table_head_viewer,nextjournal.clerk.viewer.table_head_viewer),head),G__56312__$1);
} else {
return G__56312__$1;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_presented(wrapped_value),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword(null,"wide","wide",-151772487)),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(wrapped_value) : nextjournal.clerk.viewer.present.call(null,wrapped_value))], null)),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-table-error","nextjournal.clerk.render/render-table-error",-793755793,null)], null));
}
})], null);
nextjournal.clerk.viewer.table_error_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table-error","table-error",112227742),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-table-error","nextjournal.clerk.render/render-table-error",-793755793,null),new cljs.core.Keyword(null,"page-size","page-size",223836073),(1)], null);
nextjournal.clerk.viewer.code_block_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","code-block","clerk/code-block",-2085230478),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p__56319){
var map__56322 = p__56319;
var map__56322__$1 = cljs.core.__destructure_map(map__56322);
var wrapped_value = map__56322__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),(cljs.core.truth_(new cljs.core.Keyword(null,"fold?","fold?",-838772533).cljs$core$IFn$_invoke$arity$1(value))?new cljs.core.Keyword(null,"code-folded","code-folded",-864616068):new cljs.core.Keyword(null,"code","code",1586293142))),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"text","text",-1790561697));
})], null);
nextjournal.clerk.viewer.tagged_value_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tagged-value","tagged-value",-1751091030),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"space?","space?",271216862,null)], null)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-tagged-value","nextjournal.clerk.render/render-tagged-value",-1604121009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),cljs.core.list(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Symbol(null,"space?","space?",271216862,null))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"#",cljs.core.list(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Symbol(null,"tag","tag",350170304,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null))),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_preserve_keys], null);
nextjournal.clerk.viewer.js_promise_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"js-promise","js-promise",-1992518044),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__56325_SHARP_){
return (p1__56325_SHARP_ instanceof Promise);
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-promise","nextjournal.clerk.render/render-promise",1236428751,null)], null);
nextjournal.clerk.viewer.js_object_viewer = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"js-array","js-array",-1210185421),new cljs.core.Keyword(null,"pred","pred",1927423397),goog.isObject,new cljs.core.Keyword(null,"page-size","page-size",223836073),(20),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"{",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"}",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-tagged-value","nextjournal.clerk.render/render-tagged-value",-1604121009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),"#js",cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-map","nextjournal.clerk.render/render-map",-140598584,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (k){
return ("function" === goog.typeOf((function (){var obj56326 = o;
if((!((obj56326 == null)))){
return (obj56326[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})()));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k),(function (){try{var v = (function (){var obj56329 = o;
if((!((obj56329 == null)))){
return (obj56329[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
v.constructor;

return v;
}catch (e56327){if((e56327 instanceof Error)){
var _ = e56327;
return new cljs.core.Symbol(null,"forbidden","forbidden",-338916619,null);
} else {
throw e56327;

}
}})()], null);
}))),Object.keys(o));
}))], null);
nextjournal.clerk.viewer.js_array_viewer = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"js-array","js-array",-1210185421),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.js_iterable_QMARK_,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val(cljs.core.seq),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-tagged-value","nextjournal.clerk.render/render-tagged-value",-1604121009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),"#js",cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","render-coll","nextjournal.clerk.render/render-coll",937183842,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))),new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203),"[",new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602),"]",new cljs.core.Keyword(null,"page-size","page-size",223836073),(20)], null);
nextjournal.clerk.viewer.result_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","result","clerk/result",1506041978),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-result","nextjournal.clerk.render/render-result",856601079,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val(nextjournal.clerk.viewer.transform_result))], null);
nextjournal.clerk.viewer.extract_sync_atom_vars = (function nextjournal$clerk$viewer$extract_sync_atom_vars(p__56334){
var map__56335 = p__56334;
var map__56335__$1 = cljs.core.__destructure_map(map__56335);
var _doc = map__56335__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__56336){
var map__56337 = p__56336;
var map__56337__$1 = cljs.core.__destructure_map(map__56337);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56337__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56337__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5804__auto__ = nextjournal.clerk.viewer.get_safe.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447));
if(cljs.core.truth_(temp__5804__auto__)){
var var$ = temp__5804__auto__;
if(cljs.core.contains_QMARK_(cljs.core.meta(form),new cljs.core.Keyword("nextjournal.clerk","sync","nextjournal.clerk/sync",392669017))){
return var$;
} else {
return null;
}
} else {
return null;
}
})),blocks);
});
nextjournal.clerk.viewer.atom_var_name__GT_state = (function nextjournal$clerk$viewer$atom_var_name__GT_state(doc){
return nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol("nextjournal.clerk.render","intern-atoms!","nextjournal.clerk.render/intern-atoms!",-737627058,null),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__56341_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(p1__56341_SHARP_),null,(1),null)),(2),null));
}),(function (p1__56342_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.deref(cljs.core.deref(p1__56342_SHARP_)),null,(1),null)),(2),null));
}))),nextjournal.clerk.viewer.extract_sync_atom_vars(doc)),null,(1),null)),(2),null)));
});
nextjournal.clerk.viewer.process_blocks = (function nextjournal$clerk$viewer$process_blocks(viewers,p__56343){
var map__56344 = p__56343;
var map__56344__$1 = cljs.core.__destructure_map(map__56344);
var doc = map__56344__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.select_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"atom-var-name->state","atom-var-name->state",1433683400),nextjournal.clerk.viewer.atom_var_name__GT_state(doc)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_block_viewer,doc)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.process_wrapped_value,nextjournal.clerk.viewer.apply_viewers_STAR_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.ensure_wrapped_with_viewers,viewers)))))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atom-var-name->state","atom-var-name->state",1433683400),new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"bundle?","bundle?",-35631730),new cljs.core.Keyword(null,"css-class","css-class",-919455334),new cljs.core.Keyword(null,"open-graph","open-graph",-1193910354),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352)], null));
});
nextjournal.clerk.viewer.notebook_viewer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("clerk","notebook","clerk/notebook",699315010),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("nextjournal.clerk.render","render-notebook","nextjournal.clerk.render/render-notebook",-312625192,null),new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (p__56345){
var map__56346 = p__56345;
var map__56346__$1 = cljs.core.__destructure_map(map__56346);
var wrapped_value = map__56346__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
return nextjournal.clerk.viewer.mark_presented(cljs.core.update.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.process_blocks,viewers)));
})], null);
nextjournal.clerk.viewer.viewer_eval_viewer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),nextjournal.clerk.viewer.viewer_eval_QMARK_,new cljs.core.Keyword(null,"var-from-def?","var-from-def?",-820285863),true,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.mark_presented,nextjournal.clerk.viewer.update_val((function (x){
while(true){
if(nextjournal.clerk.viewer.viewer_eval_QMARK_(x)){
return x;
} else {
if(cljs.core.seq_QMARK_(x)){
return nextjournal.clerk.viewer.__GT_viewer_eval(x);
} else {
if((x instanceof cljs.core.Symbol)){
return nextjournal.clerk.viewer.__GT_viewer_eval(x);
} else {
if(cljs.core.var_QMARK_(x)){
return nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol(null,"resolve","resolve",56086045,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x),null,(1),null)),(2),null)),null,(1),null)),(2),null)));
} else {
if(nextjournal.clerk.viewer.var_from_def_QMARK_(x)){
var G__56834 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal.clerk","var-from-def","nextjournal.clerk/var-from-def",270952447).cljs$core$IFn$_invoke$arity$1(x));
x = G__56834;
continue;
} else {
return null;
}
}
}
}
}
break;
}
}))),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","reagent-atom?","nextjournal.clerk.render/reagent-atom?",2117835447,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","render-tagged-value","nextjournal.clerk.render/render-tagged-value",-1604121009,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),false], null),"#object",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","inspect","nextjournal.clerk.render/inspect",-644654535,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"symbol","symbol",601958831,null),cljs.core.list(new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","inspect","nextjournal.clerk.render/inspect",-644654535,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null)))], null);
nextjournal.clerk.viewer.default_viewers = cljs.core.PersistentVector.fromArray([nextjournal.clerk.viewer.char_viewer,nextjournal.clerk.viewer.string_viewer,nextjournal.clerk.viewer.number_viewer,nextjournal.clerk.viewer.number_hex_viewer,nextjournal.clerk.viewer.symbol_viewer,nextjournal.clerk.viewer.keyword_viewer,nextjournal.clerk.viewer.nil_viewer,nextjournal.clerk.viewer.boolean_viewer,nextjournal.clerk.viewer.map_entry_viewer,nextjournal.clerk.viewer.var_from_def_viewer,nextjournal.clerk.viewer.read_PLUS_inspect_viewer,nextjournal.clerk.viewer.vector_viewer,nextjournal.clerk.viewer.set_viewer,nextjournal.clerk.viewer.sequential_viewer,nextjournal.clerk.viewer.viewer_eval_viewer,nextjournal.clerk.viewer.map_viewer,nextjournal.clerk.viewer.var_viewer,nextjournal.clerk.viewer.throwable_viewer,nextjournal.clerk.viewer.buffered_image_viewer,nextjournal.clerk.viewer.ideref_viewer,nextjournal.clerk.viewer.regex_viewer,nextjournal.clerk.viewer.js_promise_viewer,nextjournal.clerk.viewer.js_array_viewer,nextjournal.clerk.viewer.js_object_viewer,nextjournal.clerk.viewer.fallback_viewer,nextjournal.clerk.viewer.elision_viewer,nextjournal.clerk.viewer.katex_viewer,nextjournal.clerk.viewer.mathjax_viewer,nextjournal.clerk.viewer.html_viewer,nextjournal.clerk.viewer.plotly_viewer,nextjournal.clerk.viewer.vega_lite_viewer,nextjournal.clerk.viewer.markdown_viewer,nextjournal.clerk.viewer.code_viewer,nextjournal.clerk.viewer.code_folded_viewer,nextjournal.clerk.viewer.reagent_viewer,nextjournal.clerk.viewer.row_viewer,nextjournal.clerk.viewer.col_viewer,nextjournal.clerk.viewer.table_viewer,nextjournal.clerk.viewer.table_error_viewer,nextjournal.clerk.viewer.code_block_viewer,nextjournal.clerk.viewer.result_viewer,nextjournal.clerk.viewer.tagged_value_viewer,nextjournal.clerk.viewer.notebook_viewer,nextjournal.clerk.viewer.hide_result_viewer], true);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.viewer !== 'undefined') && (typeof nextjournal.clerk.viewer._BANG_viewers !== 'undefined')){
} else {
/**
 * atom containing a map of and per-namespace viewers or `:defaults` overridden viewers.
 */
nextjournal.clerk.viewer._BANG_viewers = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
nextjournal.clerk.viewer.rank_val = (function nextjournal$clerk$viewer$rank_val(val){
return cljs.core.reduce_kv((function (res,idx,pred){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.ifn_QMARK_(pred);
if(and__5043__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.reduced(idx);
} else {
return res;
}
}),(-1),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pred","pred",1927423397)),nextjournal.clerk.viewer.default_viewers));
});
nextjournal.clerk.viewer.resilient_compare = (function nextjournal$clerk$viewer$resilient_compare(a,b){
try{return cljs.core.compare(a,b);
}catch (e56347){if((e56347 instanceof Error)){
var _e = e56347;
return cljs.core.compare(nextjournal.clerk.viewer.rank_val(a),nextjournal.clerk.viewer.rank_val(b));
} else {
throw e56347;

}
}});
nextjournal.clerk.viewer.ensure_sorted = (function nextjournal$clerk$viewer$ensure_sorted(xs){
if(cljs.core.sorted_QMARK_(xs)){
return xs;
} else {
if(cljs.core.map_QMARK_(xs)){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,nextjournal.clerk.viewer.resilient_compare,xs);
} else {
if(cljs.core.set_QMARK_(xs)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.resilient_compare,xs);
} else {
return xs;

}
}
}
});
nextjournal.clerk.viewer.find_viewer = (function nextjournal$clerk$viewer$find_viewer(viewers,select_fn){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(select_fn,viewers));
});
nextjournal.clerk.viewer.find_named_viewer = (function nextjournal$clerk$viewer$find_named_viewer(viewers,viewer_name){
return nextjournal.clerk.viewer.find_viewer(viewers,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([viewer_name]),new cljs.core.Keyword(null,"name","name",1843675177)));
});
nextjournal.clerk.viewer.viewer_for = (function nextjournal$clerk$viewer$viewer_for(viewers,x){
var or__5045__auto__ = (function (){var temp__5804__auto__ = nextjournal.clerk.viewer.__GT_viewer(x);
if(cljs.core.truth_(temp__5804__auto__)){
var selected_viewer = temp__5804__auto__;
if((selected_viewer instanceof cljs.core.Keyword)){
var or__5045__auto__ = nextjournal.clerk.viewer.find_named_viewer(viewers,selected_viewer);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot find viewer named ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_viewer)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-viewer","selected-viewer",771788520),selected_viewer,new cljs.core.Keyword(null,"viewers","viewers",-415894011),viewers], null));
}
} else {
return selected_viewer;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = nextjournal.clerk.viewer.find_viewer(viewers,(function (){var v = nextjournal.clerk.viewer.__GT_value(x);
return (function (p__56358){
var map__56359 = p__56358;
var map__56359__$1 = cljs.core.__destructure_map(map__56359);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56359__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var and__5043__auto__ = cljs.core.ifn_QMARK_(pred);
if(and__5043__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
} else {
return and__5043__auto__;
}
});
})());
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot find matching viewer for value",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),nextjournal.clerk.viewer.__GT_value(x),new cljs.core.Keyword(null,"viewers","viewers",-415894011),viewers,new cljs.core.Keyword(null,"x","x",2099068185),x], null));
}
}
});
nextjournal.clerk.viewer.ensure_wrapped_with_viewers = (function nextjournal$clerk$viewer$ensure_wrapped_with_viewers(var_args){
var G__56363 = arguments.length;
switch (G__56363) {
case 1:
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_viewers.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),x);
}));

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2 = (function (viewers,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),(function (x_viewers){
var or__5045__auto__ = x_viewers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return viewers;
}
}));
}));

(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.__GT_opts = (function nextjournal$clerk$viewer$__GT_opts(wrapped_value){
return cljs.core.select_keys(wrapped_value,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","css-class","nextjournal/css-class",1374788734),new cljs.core.Keyword("nextjournal","width","nextjournal/width",-2082667537),new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249),new cljs.core.Keyword(null,"!budget","!budget",-1542780076),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
});
nextjournal.clerk.viewer.apply_viewers_STAR_ = (function nextjournal$clerk$viewer$apply_viewers_STAR_(wrapped_value){
while(true){
if(cljs.core.empty_QMARK_(nextjournal.clerk.viewer.__GT_viewers(wrapped_value))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot apply empty viewers",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
} else {
}

var viewers = nextjournal.clerk.viewer.__GT_viewers(wrapped_value);
var map__56364 = nextjournal.clerk.viewer.viewer_for(viewers,wrapped_value);
var map__56364__$1 = cljs.core.__destructure_map(map__56364);
var viewer = map__56364__$1;
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327));
var transformed_value = nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,(function (){var G__56366 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(wrapped_value,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
if(cljs.core.truth_(transform_fn)){
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__56366) : transform_fn.call(null,G__56366));
} else {
return G__56366;
}
})());
var wrapped_value_SINGLEQUOTE_ = (function (){var G__56367 = transformed_value;
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(nextjournal.clerk.viewer.__GT_value(transformed_value)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__56367,nextjournal.clerk.viewer.__GT_value(transformed_value)], 0));
} else {
return G__56367;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = transform_fn;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(render_fn);
} else {
return and__5043__auto__;
}
})())){
var G__56901 = wrapped_value_SINGLEQUOTE_;
wrapped_value = G__56901;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value_SINGLEQUOTE_,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),viewer),nextjournal.clerk.viewer.__GT_opts(wrapped_value)], 0));
}
break;
}
});
nextjournal.clerk.viewer.apply_viewers = (function nextjournal$clerk$viewer$apply_viewers(x){
return nextjournal.clerk.viewer.apply_viewers_STAR_(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Helper function to walk a given `x` and replace the viewers with their counts. Useful for debugging.
 */
nextjournal.clerk.viewer.count_viewers = (function nextjournal$clerk$viewer$count_viewers(x){
return clojure.walk.postwalk((function (p1__56369_SHARP_){
if(cljs.core.truth_(nextjournal.clerk.viewer.wrapped_value_QMARK_(p1__56369_SHARP_))){
var G__56370 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56369_SHARP_,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
if(cljs.core.truth_(new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841).cljs$core$IFn$_invoke$arity$1(p1__56369_SHARP_))){
return clojure.set.rename_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56370,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),cljs.core.count),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841),new cljs.core.Keyword("nextjournal","viewers-count","nextjournal/viewers-count",-1708484127)], null));
} else {
return G__56370;
}
} else {
return p1__56369_SHARP_;
}
}),x);
});
nextjournal.clerk.viewer.bounded_count_opts = (function nextjournal$clerk$viewer$bounded_count_opts(n,xs){
if(typeof n === 'number'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("n must be a number?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"xs","xs",649443341),xs], null));
}

var limit = (n + (10000));
var total = (function (){try{return cljs.core.bounded_count(limit,xs);
}catch (e56371){if((e56371 instanceof Error)){
var _ = e56371;
return null;
} else {
throw e56371;

}
}})();
var G__56372 = cljs.core.PersistentArrayMap.EMPTY;
var G__56372__$1 = (cljs.core.truth_(total)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56372,new cljs.core.Keyword(null,"total","total",1916810418),total):G__56372);
if(((cljs.core.not(total)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total,limit)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56372__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650),true);
} else {
return G__56372__$1;
}
});
/**
 * Takes a map with optional `:n` and `:offset` and returns a transducer that drops `:offset` and takes `:n`.
 */
nextjournal.clerk.viewer.drop_PLUS_take_xf = (function nextjournal$clerk$viewer$drop_PLUS_take_xf(p__56374){
var map__56375 = p__56374;
var map__56375__$1 = cljs.core.__destructure_map(map__56375);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56375__$1,new cljs.core.Keyword(null,"n","n",562130025));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56375__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var G__56376 = cljs.core.drop.cljs$core$IFn$_invoke$arity$1(offset);
if(cljs.core.int_QMARK_(n)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__56376,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n));
} else {
return G__56376;
}
});
nextjournal.clerk.viewer.process_render_fn = (function nextjournal$clerk$viewer$process_render_fn(p__56377){
var map__56378 = p__56377;
var map__56378__$1 = cljs.core.__destructure_map(map__56378);
var viewer = map__56378__$1;
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56378__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var G__56379 = viewer;
if(cljs.core.truth_((function (){var and__5043__auto__ = render_fn;
if(cljs.core.truth_(and__5043__auto__)){
return (!(nextjournal.clerk.viewer.viewer_fn_QMARK_(render_fn)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56379,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.viewer.__GT_viewer_fn);
} else {
return G__56379;
}
});
nextjournal.clerk.viewer.hash_sha1 = (function nextjournal$clerk$viewer$hash_sha1(x){
var hasher = (new goog.crypt.Sha1());
hasher.update(goog.crypt.stringToUtf8ByteArray(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))));

return hasher.digest();
});
nextjournal.clerk.viewer.process_viewer = (function nextjournal$clerk$viewer$process_viewer(viewer){
if((!(cljs.core.map_QMARK_(viewer)))){
return viewer;
} else {
return nextjournal.clerk.viewer.process_render_fn((function (){var viewer__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(viewer,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),new cljs.core.Keyword(null,"update-viewers-fn","update-viewers-fn",-992231949)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(viewer__$1,new cljs.core.Keyword(null,"hash","hash",-13781596),nextjournal.clerk.viewer.hash_sha1(viewer__$1));
})());
}
});
nextjournal.clerk.viewer.processed_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword("nextjournal","content-type","nextjournal/content-type",1223991450),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947)], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(nextjournal.clerk.viewer.viewer_opts_normalization)),new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841)));
nextjournal.clerk.viewer.process_wrapped_value = (function nextjournal$clerk$viewer$process_wrapped_value(wrapped_value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(wrapped_value,nextjournal.clerk.viewer.processed_keys),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),nextjournal.clerk.viewer.process_viewer);
});
nextjournal.clerk.viewer.make_elision = (function nextjournal$clerk$viewer$make_elision(viewers,fetch_opts){
return nextjournal.clerk.viewer.process_wrapped_value(nextjournal.clerk.viewer.apply_viewers(nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elision","elision",1599157097),fetch_opts))));
});
nextjournal.clerk.viewer.find_elision = (function nextjournal$clerk$viewer$find_elision(desc){
return nextjournal.clerk.viewer.__GT_value(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759)),cljs.core.tree_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.vector_QMARK_),(function (p1__56381_SHARP_){
var G__56382 = p1__56381_SHARP_;
if(cljs.core.map_QMARK_(p1__56381_SHARP_)){
return cljs.core.vals(G__56382);
} else {
return G__56382;
}
}),desc))));
});
nextjournal.clerk.viewer.__GT_fetch_opts = (function nextjournal$clerk$viewer$__GT_fetch_opts(wrapped_value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(wrapped_value))], null),cljs.core.select_keys(wrapped_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311)], null))], 0));
});
nextjournal.clerk.viewer.get_elision = (function nextjournal$clerk$viewer$get_elision(wrapped_value){
var map__56388 = nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value);
var map__56388__$1 = cljs.core.__destructure_map(map__56388);
var fetch_opts = map__56388__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56388__$1,new cljs.core.Keyword(null,"n","n",562130025));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fetch_opts,nextjournal.clerk.viewer.bounded_count_opts(n,nextjournal.clerk.viewer.__GT_value(wrapped_value))], 0));
});
nextjournal.clerk.viewer.get_fetch_opts_n = (function nextjournal$clerk$viewer$get_fetch_opts_n(wrapped_value){
return new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value));
});
nextjournal.clerk.viewer.inherit_opts = (function nextjournal$clerk$viewer$inherit_opts(p__56391,value,path_segment){
var map__56393 = p__56391;
var map__56393__$1 = cljs.core.__destructure_map(map__56393);
var wrapped_value = map__56393__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56393__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers,value),cljs.core.select_keys(nextjournal.clerk.viewer.__GT_opts(wrapped_value),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!budget","!budget",-1542780076),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"current-path","current-path",-113759954)], null))], 0)),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_segment),new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),path_segment);
});
nextjournal.clerk.viewer.present_PLUS_paginate_children = (function nextjournal$clerk$viewer$present_PLUS_paginate_children(p__56397){
var map__56399 = p__56397;
var map__56399__$1 = cljs.core.__destructure_map(map__56399);
var wrapped_value = map__56399__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var preserve_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword("nextjournal","preserve-keys?","nextjournal/preserve-keys?",-231586167));
var _BANG_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
var budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56399__$1,new cljs.core.Keyword(null,"budget","budget",-405386281));
var map__56402 = nextjournal.clerk.viewer.__GT_fetch_opts(wrapped_value);
var map__56402__$1 = cljs.core.__destructure_map(map__56402);
var fetch_opts = map__56402__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"n","n",562130025));
var xs = nextjournal.clerk.viewer.__GT_value(wrapped_value);
var paginate_QMARK_ = ((typeof n === 'number') && (cljs.core.not(preserve_keys_QMARK_)));
var fetch_opts_SINGLEQUOTE_ = (function (){var G__56405 = fetch_opts;
if(cljs.core.truth_((function (){var and__5043__auto__ = paginate_QMARK_;
if(and__5043__auto__){
var and__5043__auto____$1 = _BANG_budget;
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(cljs.core.map_entry_QMARK_(xs)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56405,new cljs.core.Keyword(null,"n","n",562130025),cljs.core.min,cljs.core.deref(_BANG_budget));
} else {
return G__56405;
}
})();
var children = (cljs.core.truth_(preserve_keys_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__56412){
var vec__56415 = p__56412;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56415,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__56418 = nextjournal.clerk.viewer.inherit_opts(wrapped_value,v,k);
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__56418) : nextjournal.clerk.viewer.present_STAR_.call(null,G__56418));
})()], null);
})),xs):cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(((paginate_QMARK_)?nextjournal.clerk.viewer.drop_PLUS_take_xf(fetch_opts_SINGLEQUOTE_):cljs.core.identity),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
var G__56424 = nextjournal.clerk.viewer.inherit_opts(wrapped_value,x,(i + (function (){var or__5045__auto__ = offset;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()));
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__56424) : nextjournal.clerk.viewer.present_STAR_.call(null,G__56424));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),nextjournal.clerk.viewer.ensure_sorted(xs)));
var map__56403 = (function (){var and__5043__auto__ = paginate_QMARK_;
if(and__5043__auto__){
return nextjournal.clerk.viewer.get_elision(wrapped_value);
} else {
return and__5043__auto__;
}
})();
var map__56403__$1 = cljs.core.__destructure_map(map__56403);
var elision = map__56403__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56403__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56403__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
var new_offset = ((paginate_QMARK_)?(function (){var or__5045__auto__ = (function (){var G__56429 = children;
var G__56429__$1 = (((G__56429 == null))?null:cljs.core.peek(G__56429));
var G__56429__$2 = (((G__56429__$1 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__56429__$1));
var G__56429__$3 = (((G__56429__$2 == null))?null:cljs.core.peek(G__56429__$2));
if((G__56429__$3 == null)){
return null;
} else {
return (G__56429__$3 + (1));
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})():null);
var G__56430 = children;
if(cljs.core.truth_((function (){var and__5043__auto__ = paginate_QMARK_;
if(and__5043__auto__){
var or__5045__auto__ = unbounded_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new_offset < total);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56430,(function (){var fetch_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elision,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset);
return nextjournal.clerk.viewer.make_elision(viewers,fetch_opts__$1);
})());
} else {
return G__56430;
}
});
nextjournal.clerk.viewer.present_PLUS_paginate_string = (function nextjournal$clerk$viewer$present_PLUS_paginate_string(p__56435){
var map__56436 = p__56435;
var map__56436__$1 = cljs.core.__destructure_map(map__56436);
var wrapped_value = map__56436__$1;
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var map__56438 = (function (){var and__5043__auto__ = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(viewer);
if(cljs.core.truth_(and__5043__auto__)){
return nextjournal.clerk.viewer.get_elision(wrapped_value);
} else {
return and__5043__auto__;
}
})();
var map__56438__$1 = cljs.core.__destructure_map(map__56438);
var elision = map__56438__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"n","n",562130025));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.truth_((function (){var and__5043__auto__ = n;
if(cljs.core.truth_(and__5043__auto__)){
return (n < total);
} else {
return and__5043__auto__;
}
})())){
var new_offset = (function (){var x__5133__auto__ = ((function (){var or__5045__auto__ = offset;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() + n);
var y__5134__auto__ = total;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var G__56441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(function (){var or__5045__auto__ = offset;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})(),new_offset)], null);
var G__56441__$1 = ((((total - new_offset) > (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56441,(function (){var fetch_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(elision,new cljs.core.Keyword(null,"offset","offset",296498311),new_offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace-path","replace-path",475635929),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new_offset)], 0));
return nextjournal.clerk.viewer.make_elision(viewers,fetch_opts);
})()):G__56441);
return nextjournal.clerk.viewer.ensure_wrapped.cljs$core$IFn$_invoke$arity$1(G__56441__$1);

} else {
return value;
}
});
nextjournal.clerk.viewer.present_STAR_ = (function nextjournal$clerk$viewer$present_STAR_(p__56448){
var map__56449 = p__56448;
var map__56449__$1 = cljs.core.__destructure_map(map__56449);
var wrapped_value = map__56449__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var _BANG_budget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword(null,"!budget","!budget",-1542780076));
var viewers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
if(cljs.core.empty_QMARK_(viewers)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot present* with empty viewers",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapped-value","wrapped-value",1668982996),wrapped_value], null));
} else {
}

var map__56450 = nextjournal.clerk.viewer.apply_viewers_STAR_(wrapped_value);
var map__56450__$1 = cljs.core.__destructure_map(map__56450);
var wrapped_value__$1 = map__56450__$1;
var viewers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword("nextjournal","viewers","nextjournal/viewers",1064728841));
var presented_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword("nextjournal","presented?","nextjournal/presented?",302564567));
var descend_QMARK_ = (cljs.core.count(current_path) < cljs.core.count(path));
var xs = nextjournal.clerk.viewer.__GT_value(wrapped_value__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = _BANG_budget;
if(cljs.core.truth_(and__5043__auto__)){
return (((!(descend_QMARK_))) && (cljs.core.not(presented_QMARK_)));
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_budget,(function (p1__56444_SHARP_){
var x__5130__auto__ = (p1__56444_SHARP_ - (1));
var y__5131__auto__ = (0);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
}));
} else {
}

return nextjournal.clerk.viewer.process_wrapped_value(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.__GT_opts(wrapped_value__$1),nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.__GT_viewer(wrapped_value__$1),(cljs.core.truth_(presented_QMARK_)?wrapped_value__$1:((descend_QMARK_)?(function (){var idx = cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(current_path),path));
var G__56453 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$2(viewers__$1,((((cljs.core.map_QMARK_(xs)) && ((idx instanceof cljs.core.Keyword))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx):((((cljs.core.map_QMARK_(xs)) || (cljs.core.set_QMARK_(xs))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(nextjournal.clerk.viewer.ensure_sorted(xs)),idx):((cljs.core.associative_QMARK_(xs))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(xs,idx):((cljs.core.sequential_QMARK_(xs))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,idx):null))))),nextjournal.clerk.viewer.__GT_opts(wrapped_value__$1)], 0)),new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
return (nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.present_STAR_.cljs$core$IFn$_invoke$arity$1(G__56453) : nextjournal.clerk.viewer.present_STAR_.call(null,G__56453));
})():((typeof xs === 'string')?nextjournal.clerk.viewer.present_PLUS_paginate_string(wrapped_value__$1):(cljs.core.truth_((function (){var and__5043__auto__ = xs;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seqable_QMARK_(xs);
} else {
return and__5043__auto__;
}
})())?nextjournal.clerk.viewer.present_PLUS_paginate_children(wrapped_value__$1):xs
)))))], 0)));
});
nextjournal.clerk.viewer.assign_content_lengths = (function nextjournal$clerk$viewer$assign_content_lengths(wrapped_value){
return clojure.walk.postwalk((function (x){
var temp__5802__auto__ = (function (){var and__5043__auto__ = nextjournal.clerk.viewer.wrapped_value_QMARK_(x);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
var map__56464 = x;
var map__56464__$1 = cljs.core.__destructure_map(map__56464);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
var map__56465 = viewer;
var map__56465__$1 = cljs.core.__destructure_map(map__56465);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56465__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56465__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
var elision_content_length = (6);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,new cljs.core.Keyword(null,"content-length","content-length",441319507),(((((value == null)) || (((cljs.core.char_QMARK_(value)) || (((typeof value === 'string') || ((((value instanceof cljs.core.Keyword)) || ((((value instanceof cljs.core.Symbol)) || (typeof value === 'number')))))))))))?((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))).length):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elision","elision",1599157097),null], null), null),name))?elision_content_length:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),null], null), null),name))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56456_SHARP_){
return new cljs.core.Keyword(null,"content-length","content-length",441319507).cljs$core$IFn$_invoke$arity$2(p1__56456_SHARP_,(0));
}),value)):((cljs.core.vector_QMARK_(value))?((cljs.core.count(value) - (1)) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(cljs.core.count(opening_paren) + cljs.core.count(closing_paren)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56458_SHARP_){
return new cljs.core.Keyword(null,"content-length","content-length",441319507).cljs$core$IFn$_invoke$arity$2(p1__56458_SHARP_,(0));
}),value))):(0)
)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),name], 0));
} else {
return x;
}
}),wrapped_value);
});
nextjournal.clerk.viewer.compute_expanded_at = (function nextjournal$clerk$viewer$compute_expanded_at(p__56476,p__56477){
var map__56478 = p__56476;
var map__56478__$1 = cljs.core.__destructure_map(map__56478);
var state = map__56478__$1;
var indents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"indents","indents",-569647275));
var expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043));
var prev_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"prev-type","prev-type",212113111));
var map__56479 = p__56477;
var map__56479__$1 = cljs.core.__destructure_map(map__56479);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56479__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var content_length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56479__$1,new cljs.core.Keyword(null,"content-length","content-length",441319507),(0));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56479__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56479__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var max_length = ((80) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),indents));
var expanded_QMARK_ = (max_length < content_length);
var state_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expanded_at,path,expanded_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev-type","prev-type",212113111),type,new cljs.core.Keyword(null,"indents","indents",-569647275),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),indents)),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),null], null), null),prev_type))?(function (){var or__5045__auto__ = content_length;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})():((cljs.core.vector_QMARK_(value))?(2):(1)
)))], 0));
if(cljs.core.vector_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.compute_expanded_at,state_SINGLEQUOTE_,value);
} else {
return state_SINGLEQUOTE_;
}
});
nextjournal.clerk.viewer.collect_expandable_paths = (function nextjournal$clerk$viewer$collect_expandable_paths(state,p__56480){
var map__56481 = p__56480;
var map__56481__$1 = cljs.core.__destructure_map(map__56481);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56481__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56481__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var state_SINGLEQUOTE_ = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),path], null),false);
if(cljs.core.vector_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.collect_expandable_paths,state_SINGLEQUOTE_,value);
} else {
return state_SINGLEQUOTE_;
}
});
nextjournal.clerk.viewer.assign_expanded_at = (function nextjournal$clerk$viewer$assign_expanded_at(p__56482){
var map__56483 = p__56482;
var map__56483__$1 = cljs.core.__destructure_map(map__56483);
var wrapped_value = map__56483__$1;
var content_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56483__$1,new cljs.core.Keyword(null,"content-length","content-length",441319507));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wrapped_value,new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043).cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(content_length)?nextjournal.clerk.viewer.compute_expanded_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),cljs.core.PersistentArrayMap.EMPTY], null),wrapped_value):nextjournal.clerk.viewer.collect_expandable_paths(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded-at","expanded-at",2146079043),cljs.core.PersistentArrayMap.EMPTY], null),wrapped_value))));
});
/**
 * Returns a subset of a given `value`.
 */
nextjournal.clerk.viewer.present = (function nextjournal$clerk$viewer$present(var_args){
var G__56491 = arguments.length;
switch (G__56491) {
case 1:
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
}));

(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
var G__56492 = nextjournal.clerk.viewer.present_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.viewer.ensure_wrapped_with_viewers.cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"!budget","!budget",-1542780076),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$2(opts,(200))),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.PersistentVector.EMPTY)], null),opts], 0)));
return (nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1(G__56492) : nextjournal.clerk.viewer.assign_closing_parens.call(null,G__56492));
}));

(nextjournal.clerk.viewer.present.cljs$lang$maxFixedArity = 2);

/**
 * Takes a `description` and returns its value. Inverse of `present`. Mostly useful for debugging.
 */
nextjournal.clerk.viewer.desc__GT_values = (function nextjournal$clerk$viewer$desc__GT_values(desc){
var x = nextjournal.clerk.viewer.__GT_value(desc);
var viewer_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_viewer(desc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(viewer_name,new cljs.core.Keyword(null,"elision","elision",1599157097))){
return cljs.core.with_meta(new cljs.core.Symbol(null,"...","...",-1926939749,null),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__56498 = viewer_name;
var G__56498__$1 = (((G__56498 instanceof cljs.core.Keyword))?G__56498.fqn:null);
switch (G__56498__$1) {
case "map":
case "table":
return cljs.core.PersistentArrayMap.EMPTY;

break;
default:
var or__5045__auto__ = cljs.core.empty(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.desc__GT_values),x);
} else {
return x;

}
}
});
nextjournal.clerk.viewer.path_to_value = (function nextjournal$clerk$viewer$path_to_value(path){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(path,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947))),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
});
nextjournal.clerk.viewer.merge_presentations = (function nextjournal$clerk$viewer$merge_presentations(root,more,elision){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(root,nextjournal.clerk.viewer.path_to_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(elision)),(function (value){
var map__56502 = new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(value));
var map__56502__$1 = cljs.core.__destructure_map(map__56502);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_from_value = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,offset);
var path_from_more = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"replace-path","replace-path",475635929).cljs$core$IFn$_invoke$arity$1(elision);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(more)));
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path_from_value,path_from_more)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("paths mismatch",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path-from-value","path-from-value",-182953106),path_from_value,new cljs.core.Keyword(null,"path-from-more","path-from-more",116927044),path_from_more,new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"more","more",-2058821800),more,new cljs.core.Keyword(null,"path-to-value","path-to-value",-1876354751),nextjournal.clerk.viewer.path_to_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(more)),new cljs.core.Keyword(null,"value","value",305978217),value], null));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(value),new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(more));
}));
});
nextjournal.clerk.viewer.assign_closing_parens = (function nextjournal$clerk$viewer$assign_closing_parens(var_args){
var G__56509 = arguments.length;
switch (G__56509) {
case 1:
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$1 = (function (node){
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,node);
}));

(nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2 = (function (closing_parens,node){
var value = nextjournal.clerk.viewer.__GT_value(node);
var viewer = nextjournal.clerk.viewer.__GT_viewer(node);
var closing = new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(viewer);
var non_leaf_QMARK_ = (function (){var and__5043__auto__ = cljs.core.vector_QMARK_(value);
if(and__5043__auto__){
return nextjournal.clerk.viewer.wrapped_value_QMARK_(cljs.core.first(value));
} else {
return and__5043__auto__;
}
})();
var defer_closing_QMARK_ = (function (){var and__5043__auto__ = non_leaf_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
var or__5045__auto__ = new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-entry","map-entry",-1310914056),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value))));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947).cljs$core$IFn$_invoke$arity$1(cljs.core.last(value)))));
} else {
return and__5043__auto____$1;
}
}
} else {
return and__5043__auto__;
}
})();
var G__56514 = ((cljs.core.not(closing))?node:(cljs.core.truth_(defer_closing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),cljs.core.dissoc,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602)):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602)], null),cljs.core.cons,closing_parens)
));
if(cljs.core.truth_(non_leaf_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__56514,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),(function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
return nextjournal.clerk.viewer.assign_closing_parens.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5043__auto__ = defer_closing_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(xs) - (1)),i);
} else {
return and__5043__auto__;
}
})())?(function (){var G__56518 = closing_parens;
if(cljs.core.truth_(closing)){
return cljs.core.cons(closing,G__56518);
} else {
return G__56518;
}
})():cljs.core.List.EMPTY),x);
})),xs);
}));
} else {
return G__56514;
}
}));

(nextjournal.clerk.viewer.assign_closing_parens.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.reset_viewers_BANG_ = (function nextjournal$clerk$viewer$reset_viewers_BANG_(var_args){
var G__56523 = arguments.length;
switch (G__56523) {
case 1:
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (viewers){
return nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_ns_STAR_,viewers);
}));

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (scope,viewers){
if(cljs.core.truth_((function (){var fexpr__56542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null);
return (fexpr__56542.cljs$core$IFn$_invoke$arity$1 ? fexpr__56542.cljs$core$IFn$_invoke$arity$1(scope) : fexpr__56542.call(null,scope));
})())){
} else {
throw (new Error("Assert failed: (or (#{:default} scope))"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.viewer._BANG_viewers,cljs.core.assoc,scope,viewers);
}));

(nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.add_viewers_BANG_ = (function nextjournal$clerk$viewer$add_viewers_BANG_(viewers){
nextjournal.clerk.viewer.reset_viewers_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_ns_STAR_,nextjournal.clerk.viewer.add_viewers.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.get_default_viewers(),viewers));

return viewers;
});
nextjournal.clerk.viewer.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.html_viewer);
nextjournal.clerk.viewer.md = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.markdown_viewer);
nextjournal.clerk.viewer.plotly = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.plotly_viewer);
nextjournal.clerk.viewer.vl = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.vega_lite_viewer);
nextjournal.clerk.viewer.table = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.table_viewer);
nextjournal.clerk.viewer.row = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer_extracting_opts,nextjournal.clerk.viewer.row_viewer);
nextjournal.clerk.viewer.col = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer_extracting_opts,nextjournal.clerk.viewer.col_viewer);
nextjournal.clerk.viewer.tex = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.katex_viewer);
nextjournal.clerk.viewer.notebook = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.notebook_viewer));
nextjournal.clerk.viewer.code = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.code_viewer);
nextjournal.clerk.viewer.doc_url = (function nextjournal$clerk$viewer$doc_url(path){
return ["#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
});
nextjournal.clerk.viewer.print_hide_result_deprecation_warning = (function nextjournal$clerk$viewer$print_hide_result_deprecation_warning(){
return null;
});
/**
 * Deprecated, please put ^{:nextjournal.clerk/visibility {:result :hide}} metadata on the form instead.
 */
nextjournal.clerk.viewer.hide_result = (function nextjournal$clerk$viewer$hide_result(var_args){
var G__56572 = arguments.length;
switch (G__56572) {
case 1:
return nextjournal.clerk.viewer.hide_result.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.viewer.hide_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.viewer.hide_result.cljs$core$IFn$_invoke$arity$1 = (function (x){
nextjournal.clerk.viewer.print_hide_result_deprecation_warning();

return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.hide_result_viewer,cljs.core.PersistentArrayMap.EMPTY,x);
}));

(nextjournal.clerk.viewer.hide_result.cljs$core$IFn$_invoke$arity$2 = (function (viewer_opts,x){
nextjournal.clerk.viewer.print_hide_result_deprecation_warning();

return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.hide_result_viewer,viewer_opts,x);
}));

(nextjournal.clerk.viewer.hide_result.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.viewer.eval_cljs_result_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.mark_presented,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("nextjournal.clerk.render","inspect","nextjournal.clerk.render/inspect",-644654535,null),new cljs.core.Symbol(null,"x","x",-555367584,null)], null))], null);
nextjournal.clerk.viewer.eval_cljs_str = (function nextjournal$clerk$viewer$eval_cljs_str(code_string){
return nextjournal.clerk.viewer.with_viewer.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.eval_cljs_result_viewer,new cljs.core.Keyword("nextjournal.clerk","remount","nextjournal.clerk/remount",-1003805683),nextjournal.clerk.viewer.hash_sha1(code_string)),nextjournal.clerk.viewer.__GT_viewer_eval((new cljs.core.List(null,new cljs.core.Symbol(null,"binding","binding",-2114503176,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"load-string","load-string",-403739145,null),(new cljs.core.List(null,code_string,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))));
});
nextjournal.clerk.viewer.example_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),(function (wrapped_value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.mark_preserve_keys(wrapped_value),new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap","div.flex.flex-wrap",-407942064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-[7px]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-slate-100.px-2.rounded","div.bg-slate-100.px-2.rounded",-1818338235),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"form","form",16469056,null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.mt-1","div.flex.mt-1",-692809234),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2.font-sans.text-xs.text-slate-500","div.mx-2.font-sans.text-xs.text-slate-500",791613663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-[2px]"], null),"\u21D2"], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-presented","nextjournal.clerk.render/inspect-presented",-854938237,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"val","val",1769233139,null))], null)], null))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947),new cljs.core.Keyword(null,"form","form",-1624062471)], null),nextjournal.clerk.viewer.code);
})], null);
nextjournal.clerk.viewer.examples_viewer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform-fn","transform-fn",1106801327),nextjournal.clerk.viewer.update_val((function (examples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.viewer.example_viewer),examples);
})),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"examples","examples",1166818971,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-l-2.border-slate-300.pl-4","div.border-l-2.border-slate-300.pl-4",-1408703104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uppercase.tracking-wider.text-xs.font-sans.text-slate-500.mt-4.mb-2","div.uppercase.tracking-wider.text-xs.font-sans.text-slate-500.mt-4.mb-2",-1343651332),"Examples"], null)], null),cljs.core.list(new cljs.core.Symbol("nextjournal.clerk.render","inspect-children","nextjournal.clerk.render/inspect-children",957366513,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),new cljs.core.Symbol(null,"examples","examples",1166818971,null)))], null);

//# sourceMappingURL=nextjournal.clerk.viewer.js.map
