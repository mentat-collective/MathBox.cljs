import "./cljs_env.js";
goog.provide('editscript.edit');

/**
 * @interface
 */
editscript.edit.IEdit = function(){};

var editscript$edit$IEdit$auto_sizing$dyn_51389 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.auto_sizing[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.auto_sizing["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.auto-sizing",this$);
}
}
});
editscript.edit.auto_sizing = (function editscript$edit$auto_sizing(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$auto_sizing$arity$3 == null)))))){
return this$.editscript$edit$IEdit$auto_sizing$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$auto_sizing$dyn_51389(this$,path,value);
}
});

var editscript$edit$IEdit$add_data$dyn_51394 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.add_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.add_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.add-data",this$);
}
}
});
editscript.edit.add_data = (function editscript$edit$add_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$add_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$add_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$add_data$dyn_51394(this$,path,value);
}
});

var editscript$edit$IEdit$delete_data$dyn_51397 = (function (this$,path){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.delete_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5394__auto__.call(null,this$,path));
} else {
var m__5392__auto__ = (editscript.edit.delete_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5392__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IEdit.delete-data",this$);
}
}
});
editscript.edit.delete_data = (function editscript$edit$delete_data(this$,path){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$delete_data$arity$2 == null)))))){
return this$.editscript$edit$IEdit$delete_data$arity$2(this$,path);
} else {
return editscript$edit$IEdit$delete_data$dyn_51397(this$,path);
}
});

var editscript$edit$IEdit$replace_data$dyn_51398 = (function (this$,path,value){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.replace_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5394__auto__.call(null,this$,path,value));
} else {
var m__5392__auto__ = (editscript.edit.replace_data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__5392__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.replace-data",this$);
}
}
});
editscript.edit.replace_data = (function editscript$edit$replace_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$replace_data$dyn_51398(this$,path,value);
}
});

var editscript$edit$IEdit$replace_str$dyn_51405 = (function (this$,path,ops,level){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.replace_str[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5394__auto__.call(null,this$,path,ops,level));
} else {
var m__5392__auto__ = (editscript.edit.replace_str["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__5392__auto__.call(null,this$,path,ops,level));
} else {
throw cljs.core.missing_protocol("IEdit.replace-str",this$);
}
}
});
editscript.edit.replace_str = (function editscript$edit$replace_str(this$,path,ops,level){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_str$arity$4 == null)))))){
return this$.editscript$edit$IEdit$replace_str$arity$4(this$,path,ops,level);
} else {
return editscript$edit$IEdit$replace_str$dyn_51405(this$,path,ops,level);
}
});


/**
 * @interface
 */
editscript.edit.IEditScript = function(){};

var editscript$edit$IEditScript$combine$dyn_51406 = (function (this$,that){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.combine[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5394__auto__.call(null,this$,that));
} else {
var m__5392__auto__ = (editscript.edit.combine["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__5392__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("IEditScript.combine",this$);
}
}
});
/**
 * Concate that editscript onto this editscript, return the new editscript
 */
editscript.edit.combine = (function editscript$edit$combine(this$,that){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$combine$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$combine$arity$2(this$,that);
} else {
return editscript$edit$IEditScript$combine$dyn_51406(this$,that);
}
});

var editscript$edit$IEditScript$get_size$dyn_51407 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_size[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_size["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-size",this$);
}
}
});
/**
 * Report the size of the editscript
 */
editscript.edit.get_size = (function editscript$edit$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_size$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_size$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_size$dyn_51407(this$);
}
});

var editscript$edit$IEditScript$set_size$dyn_51408 = (function (this$,size){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.set_size[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5394__auto__.call(null,this$,size));
} else {
var m__5392__auto__ = (editscript.edit.set_size["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__5392__auto__.call(null,this$,size));
} else {
throw cljs.core.missing_protocol("IEditScript.set-size",this$);
}
}
});
/**
 * Set the size, return the script
 */
editscript.edit.set_size = (function editscript$edit$set_size(this$,size){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$set_size$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$set_size$arity$2(this$,size);
} else {
return editscript$edit$IEditScript$set_size$dyn_51408(this$,size);
}
});

var editscript$edit$IEditScript$edit_distance$dyn_51409 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.edit_distance[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.edit_distance["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.edit-distance",this$);
}
}
});
/**
 * Report the edit distance, i.e number of operations
 */
editscript.edit.edit_distance = (function editscript$edit$edit_distance(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$edit_distance$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$edit_distance$arity$1(this$);
} else {
return editscript$edit$IEditScript$edit_distance$dyn_51409(this$);
}
});

var editscript$edit$IEditScript$get_edits$dyn_51411 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_edits[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_edits["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-edits",this$);
}
}
});
/**
 * Report the edits as a vector
 */
editscript.edit.get_edits = (function editscript$edit$get_edits(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_edits$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_edits$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_edits$dyn_51411(this$);
}
});

var editscript$edit$IEditScript$get_adds_num$dyn_51412 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_adds_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_adds_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-adds-num",this$);
}
}
});
/**
 * Report the number of additions
 */
editscript.edit.get_adds_num = (function editscript$edit$get_adds_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_adds_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_adds_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_adds_num$dyn_51412(this$);
}
});

var editscript$edit$IEditScript$get_dels_num$dyn_51414 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_dels_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_dels_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-dels-num",this$);
}
}
});
/**
 * Report the number of deletions
 */
editscript.edit.get_dels_num = (function editscript$edit$get_dels_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_dels_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_dels_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_dels_num$dyn_51414(this$);
}
});

var editscript$edit$IEditScript$get_reps_num$dyn_51416 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_reps_num[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_reps_num["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-reps-num",this$);
}
}
});
/**
 * Report the number of replacements
 */
editscript.edit.get_reps_num = (function editscript$edit$get_reps_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_reps_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_reps_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_reps_num$dyn_51416(this$);
}
});


/**
 * @interface
 */
editscript.edit.IType = function(){};

var editscript$edit$IType$get_type$dyn_51420 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (editscript.edit.get_type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (editscript.edit.get_type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IType.get-type",this$);
}
}
});
/**
 * Return a type keyword, :val, :map, :lst, etc.
 */
editscript.edit.get_type = (function editscript$edit$get_type(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IType$get_type$arity$1 == null)))))){
return this$.editscript$edit$IType$get_type$arity$1(this$);
} else {
return editscript$edit$IType$get_type$dyn_51420(this$);
}
});

/**
 * A special type means 'not present'
 */
editscript.edit.nada = (function editscript$edit$nada(){
if((typeof editscript !== 'undefined') && (typeof editscript.edit !== 'undefined') && (typeof editscript.edit.t_editscript$edit51159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {editscript.edit.IType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
editscript.edit.t_editscript$edit51159 = (function (meta51160){
this.meta51160 = meta51160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.edit.t_editscript$edit51159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51161,meta51160__$1){
var self__ = this;
var _51161__$1 = this;
return (new editscript.edit.t_editscript$edit51159(meta51160__$1));
}));

(editscript.edit.t_editscript$edit51159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51161){
var self__ = this;
var _51161__$1 = this;
return self__.meta51160;
}));

(editscript.edit.t_editscript$edit51159.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.t_editscript$edit51159.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));

(editscript.edit.t_editscript$edit51159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51160","meta51160",-1570308939,null)], null);
}));

(editscript.edit.t_editscript$edit51159.cljs$lang$type = true);

(editscript.edit.t_editscript$edit51159.cljs$lang$ctorStr = "editscript.edit/t_editscript$edit51159");

(editscript.edit.t_editscript$edit51159.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.edit/t_editscript$edit51159");
}));

/**
 * Positional factory function for editscript.edit/t_editscript$edit51159.
 */
editscript.edit.__GT_t_editscript$edit51159 = (function editscript$edit$nada_$___GT_t_editscript$edit51159(meta51160){
return (new editscript.edit.t_editscript$edit51159(meta51160));
});

}

return (new editscript.edit.t_editscript$edit51159(cljs.core.PersistentArrayMap.EMPTY));
});
(editscript.edit.IType["null"] = true);

(editscript.edit.get_type["null"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.MapEntry.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.Cons.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.Subvec.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["_"] = true);

(editscript.edit.get_type["_"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.PersistentVector.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["string"] = true);

(editscript.edit.get_type["string"] = (function (_){
return new cljs.core.Keyword(null,"str","str",1089608819);
}));

(cljs.core.EmptyList.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.List.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));
editscript.edit.sizing_STAR_ = (function editscript$edit$sizing_STAR_(data,size){
var up = (function (s){
return (s + (1));
});
if(cljs.core.truth_((function (){var G__51186 = editscript.edit.get_type(data);
var fexpr__51185 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__51185.cljs$core$IFn$_invoke$arity$1 ? fexpr__51185.cljs$core$IFn$_invoke$arity$1(G__51186) : fexpr__51185.call(null,G__51186));
})())){
cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));

var seq__51189 = cljs.core.seq(data);
var chunk__51190 = null;
var count__51191 = (0);
var i__51192 = (0);
while(true){
if((i__51192 < count__51191)){
var child = chunk__51190.cljs$core$IIndexed$_nth$arity$2(null,i__51192);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__51429 = seq__51189;
var G__51430 = chunk__51190;
var G__51431 = count__51191;
var G__51432 = (i__51192 + (1));
seq__51189 = G__51429;
chunk__51190 = G__51430;
count__51191 = G__51431;
i__51192 = G__51432;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51189);
if(temp__5804__auto__){
var seq__51189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51189__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51189__$1);
var G__51433 = cljs.core.chunk_rest(seq__51189__$1);
var G__51434 = c__5568__auto__;
var G__51435 = cljs.core.count(c__5568__auto__);
var G__51436 = (0);
seq__51189 = G__51433;
chunk__51190 = G__51434;
count__51191 = G__51435;
i__51192 = G__51436;
continue;
} else {
var child = cljs.core.first(seq__51189__$1);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__51437 = cljs.core.next(seq__51189__$1);
var G__51438 = null;
var G__51439 = (0);
var G__51440 = (0);
seq__51189 = G__51437;
chunk__51190 = G__51438;
count__51191 = G__51439;
i__51192 = G__51440;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));
}
});
editscript.edit.sizing = (function editscript$edit$sizing(data){
var size = cljs.core.volatile_BANG_((0));
editscript.edit.sizing_STAR_(data,size);

return cljs.core.deref(size);
});

/**
* @constructor
 * @implements {editscript.edit.IEditScript}
 * @implements {editscript.edit.IEdit}
*/
editscript.edit.EditScript = (function (edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
this.edits = edits;
this.auto_sizing_QMARK_ = auto_sizing_QMARK_;
this.size = size;
this.adds_num = adds_num;
this.dels_num = dels_num;
this.reps_num = reps_num;
});
(editscript.edit.EditScript.prototype.editscript$edit$IEdit$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$auto_sizing$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
if(self__.auto_sizing_QMARK_){
(self__.size = cljs.core.long$(((((2) + self__.size) + editscript.edit.sizing(path)) + (cljs.core.truth_(value)?editscript.edit.sizing(value):(0)))));
} else {
}

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$add_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.adds_num = (self__.adds_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"+","+",1913524883),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$delete_data$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
(self__.dels_num = (self__.dels_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"-","-",-2112348439)], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,null);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"r","r",-471384190),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_str$arity$4 = (function (this$,path,ops,level){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,(function (){var G__51237 = level;
var G__51237__$1 = (((G__51237 instanceof cljs.core.Keyword))?G__51237.fqn:null);
switch (G__51237__$1) {
case "character":
return new cljs.core.Keyword(null,"s","s",1705939918);

break;
case "word":
return new cljs.core.Keyword(null,"sw","sw",833113913);

break;
case "line":
return new cljs.core.Keyword(null,"sl","sl",1007549161);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51237__$1)].join('')));

}
})(),ops], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,"");
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$combine$arity$2 = (function (_,that){
var self__ = this;
var ___$1 = this;
return (new editscript.edit.EditScript(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.edits,editscript.edit.get_edits(that)),self__.auto_sizing_QMARK_,(self__.size + editscript.edit.get_size(that)),(self__.adds_num + editscript.edit.get_adds_num(that)),(self__.dels_num + editscript.edit.get_dels_num(that)),(self__.reps_num + editscript.edit.get_reps_num(that))));
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_edits$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.edits;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_adds_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.adds_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_dels_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.dels_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_reps_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reps_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$edit_distance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.adds_num + self__.dels_num) + self__.reps_num);
}));

(editscript.edit.EditScript.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edits","edits",-599366147,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-sizing?","auto-sizing?",-1705546383,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"adds-num","adds-num",-1467287693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dels-num","dels-num",819513451,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"reps-num","reps-num",582946575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.edit.EditScript.cljs$lang$type = true);

(editscript.edit.EditScript.cljs$lang$ctorStr = "editscript.edit/EditScript");

(editscript.edit.EditScript.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"editscript.edit/EditScript");
}));

/**
 * Positional factory function for editscript.edit/EditScript.
 */
editscript.edit.__GT_EditScript = (function editscript$edit$__GT_EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
return (new editscript.edit.EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num));
});

editscript.edit.valid_str_edits_QMARK_ = (function editscript$edit$valid_str_edits_QMARK_(data,level){
return ((cljs.core.vector_QMARK_(data)) && (cljs.core.every_QMARK_((function (x){
var or__5045__auto__ = cljs.core.nat_int_QMARK_(x);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = cljs.core.vector_QMARK_(x);
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x));
if(and__5043__auto____$2){
var vec__51267 = x;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51267,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51267,(1),null);
var and__5043__auto____$3 = (function (){var fexpr__51271 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__51271.cljs$core$IFn$_invoke$arity$1 ? fexpr__51271.cljs$core$IFn$_invoke$arity$1(op) : fexpr__51271.call(null,op));
})();
if(cljs.core.truth_(and__5043__auto____$3)){
var G__51274 = op;
var G__51274__$1 = (((G__51274 instanceof cljs.core.Keyword))?G__51274.fqn:null);
switch (G__51274__$1) {
case "-":
return cljs.core.nat_int_QMARK_(y);

break;
case "+":
case "r":
var G__51277 = level;
var G__51277__$1 = (((G__51277 instanceof cljs.core.Keyword))?G__51277.fqn:null);
switch (G__51277__$1) {
case "s":
return typeof y === 'string';

break;
case "sl":
case "sw":
return cljs.core.vector_QMARK_(y);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51277__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51274__$1)].join('')));

}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
}
}),data)));
});
editscript.edit.valid_edit_QMARK_ = (function editscript$edit$valid_edit_QMARK_(edit){
if(cljs.core.vector_QMARK_(edit)){
var c = cljs.core.count(edit);
if(((((1) < c)) && ((c < (4))))){
var vec__51290 = edit;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290,(2),null);
var and__5043__auto__ = cljs.core.vector_QMARK_(path);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var fexpr__51293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__51293.cljs$core$IFn$_invoke$arity$1 ? fexpr__51293.cljs$core$IFn$_invoke$arity$1(op) : fexpr__51293.call(null,op));
})();
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),op))?(data == null):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3)));
if(and__5043__auto____$2){
if(cljs.core.truth_((function (){var fexpr__51294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__51294.cljs$core$IFn$_invoke$arity$1 ? fexpr__51294.cljs$core$IFn$_invoke$arity$1(op) : fexpr__51294.call(null,op));
})())){
return editscript.edit.valid_str_edits_QMARK_(data,op);
} else {
return true;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
editscript.edit.valid_edits_QMARK_ = (function editscript$edit$valid_edits_QMARK_(edits){
if(cljs.core.vector_QMARK_(edits)){
if(cljs.core.seq(edits)){
return cljs.core.every_QMARK_(editscript.edit.valid_edit_QMARK_,edits);
} else {
return true;
}
} else {
return null;
}
});
editscript.edit.count_str_ops = (function editscript$edit$count_str_ops(data,adds,dels,reps){
var seq__51300 = cljs.core.seq(data);
var chunk__51302 = null;
var count__51303 = (0);
var i__51304 = (0);
while(true){
if((i__51304 < count__51303)){
var d = chunk__51302.cljs$core$IIndexed$_nth$arity$2(null,i__51304);
if(cljs.core.vector_QMARK_(d)){
var G__51309_51454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__51309_51455__$1 = (((G__51309_51454 instanceof cljs.core.Keyword))?G__51309_51454.fqn:null);
switch (G__51309_51455__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51309_51455__$1)].join('')));

}


var G__51457 = seq__51300;
var G__51458 = chunk__51302;
var G__51459 = count__51303;
var G__51460 = (i__51304 + (1));
seq__51300 = G__51457;
chunk__51302 = G__51458;
count__51303 = G__51459;
i__51304 = G__51460;
continue;
} else {
var G__51462 = seq__51300;
var G__51463 = chunk__51302;
var G__51464 = count__51303;
var G__51465 = (i__51304 + (1));
seq__51300 = G__51462;
chunk__51302 = G__51463;
count__51303 = G__51464;
i__51304 = G__51465;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51300);
if(temp__5804__auto__){
var seq__51300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51300__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51300__$1);
var G__51466 = cljs.core.chunk_rest(seq__51300__$1);
var G__51467 = c__5568__auto__;
var G__51468 = cljs.core.count(c__5568__auto__);
var G__51469 = (0);
seq__51300 = G__51466;
chunk__51302 = G__51467;
count__51303 = G__51468;
i__51304 = G__51469;
continue;
} else {
var d = cljs.core.first(seq__51300__$1);
if(cljs.core.vector_QMARK_(d)){
var G__51310_51470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__51310_51471__$1 = (((G__51310_51470 instanceof cljs.core.Keyword))?G__51310_51470.fqn:null);
switch (G__51310_51471__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51310_51471__$1)].join('')));

}


var G__51474 = cljs.core.next(seq__51300__$1);
var G__51475 = null;
var G__51476 = (0);
var G__51477 = (0);
seq__51300 = G__51474;
chunk__51302 = G__51475;
count__51303 = G__51476;
i__51304 = G__51477;
continue;
} else {
var G__51478 = cljs.core.next(seq__51300__$1);
var G__51479 = null;
var G__51480 = (0);
var G__51481 = (0);
seq__51300 = G__51478;
chunk__51302 = G__51479;
count__51303 = G__51480;
i__51304 = G__51481;
continue;
}
}
} else {
return null;
}
}
break;
}
});
editscript.edit.count_ops = (function editscript$edit$count_ops(edits){
var adds = cljs.core.volatile_BANG_((0));
var dels = cljs.core.volatile_BANG_((0));
var reps = cljs.core.volatile_BANG_((0));
var seq__51314_51483 = cljs.core.seq(edits);
var chunk__51315_51484 = null;
var count__51316_51485 = (0);
var i__51317_51486 = (0);
while(true){
if((i__51317_51486 < count__51316_51485)){
var vec__51340_51487 = chunk__51315_51484.cljs$core$IIndexed$_nth$arity$2(null,i__51317_51486);
var __51488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_51487,(0),null);
var op_51489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_51487,(1),null);
var data_51490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_51487,(2),null);
var G__51344_51491 = op_51489;
var G__51344_51492__$1 = (((G__51344_51491 instanceof cljs.core.Keyword))?G__51344_51491.fqn:null);
switch (G__51344_51492__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_51490,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51344_51492__$1)].join('')));

}


var G__51495 = seq__51314_51483;
var G__51496 = chunk__51315_51484;
var G__51497 = count__51316_51485;
var G__51498 = (i__51317_51486 + (1));
seq__51314_51483 = G__51495;
chunk__51315_51484 = G__51496;
count__51316_51485 = G__51497;
i__51317_51486 = G__51498;
continue;
} else {
var temp__5804__auto___51499 = cljs.core.seq(seq__51314_51483);
if(temp__5804__auto___51499){
var seq__51314_51500__$1 = temp__5804__auto___51499;
if(cljs.core.chunked_seq_QMARK_(seq__51314_51500__$1)){
var c__5568__auto___51501 = cljs.core.chunk_first(seq__51314_51500__$1);
var G__51502 = cljs.core.chunk_rest(seq__51314_51500__$1);
var G__51503 = c__5568__auto___51501;
var G__51504 = cljs.core.count(c__5568__auto___51501);
var G__51505 = (0);
seq__51314_51483 = G__51502;
chunk__51315_51484 = G__51503;
count__51316_51485 = G__51504;
i__51317_51486 = G__51505;
continue;
} else {
var vec__51349_51506 = cljs.core.first(seq__51314_51500__$1);
var __51507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51349_51506,(0),null);
var op_51508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51349_51506,(1),null);
var data_51509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51349_51506,(2),null);
var G__51352_51510 = op_51508;
var G__51352_51511__$1 = (((G__51352_51510 instanceof cljs.core.Keyword))?G__51352_51510.fqn:null);
switch (G__51352_51511__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_51509,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51352_51511__$1)].join('')));

}


var G__51513 = cljs.core.next(seq__51314_51500__$1);
var G__51514 = null;
var G__51515 = (0);
var G__51516 = (0);
seq__51314_51483 = G__51513;
chunk__51315_51484 = G__51514;
count__51316_51485 = G__51515;
i__51317_51486 = G__51516;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(adds),cljs.core.deref(dels),cljs.core.deref(reps)], null);
});
/**
 * Create an EditScript instance from a vector of edits, like those obtained
 *   through calling `get-edits` on an EditScript
 */
editscript.edit.edits__GT_script = (function editscript$edit$edits__GT_script(edits){
if(cljs.core.truth_(editscript.edit.valid_edits_QMARK_(edits))){
} else {
throw (new Error(["Assert failed: ","Not a vector of valid edits","\n","(valid-edits? edits)"].join('')));
}

var vec__51356 = editscript.edit.count_ops(edits);
var adds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(0),null);
var dels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(1),null);
var reps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356,(2),null);
return editscript.edit.__GT_EditScript(edits,true,editscript.edit.sizing(edits),adds,dels,reps);
});
(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(o__$1.editscript$edit$IEditScript$get_edits$arity$1(null))], 0));
}));

//# sourceMappingURL=editscript.edit.js.map
