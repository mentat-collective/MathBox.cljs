import "./cljs_env.js";
goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__51828 = script;
var G__51830 = path_SINGLEQUOTE_;
var G__51831 = va;
var G__51832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__51833 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51828,G__51830,G__51831,G__51832,G__51833) : editscript.diff.quick.diff_STAR_.call(null,G__51828,G__51830,G__51831,G__51832,G__51833));
} else {
var G__51836 = script;
var G__51837 = path_SINGLEQUOTE_;
var G__51838 = va;
var G__51839 = editscript.edit.nada();
var G__51840 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51836,G__51837,G__51838,G__51839,G__51840) : editscript.diff.quick.diff_STAR_.call(null,G__51836,G__51837,G__51838,G__51839,G__51840));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__51841 = script;
var G__51842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__51843 = editscript.edit.nada();
var G__51844 = vb;
var G__51845 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51841,G__51842,G__51843,G__51844,G__51845) : editscript.diff.quick.diff_STAR_.call(null,G__51841,G__51842,G__51843,G__51844,G__51845));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
var edits = editscript.util.common.vec_edits(a,b,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51848,op){
var vec__51849 = p__51848;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51849,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51849,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51849,(2),null);
var G__51852 = op;
var G__51852__$1 = (((G__51852 instanceof cljs.core.Keyword))?G__51852.fqn:null);
switch (G__51852__$1) {
case "-":
var G__51853_52038 = script;
var G__51854_52039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51855_52040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__51856_52041 = editscript.edit.nada();
var G__51857_52042 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51853_52038,G__51854_52039,G__51855_52040,G__51856_52041,G__51857_52042) : editscript.diff.quick.diff_STAR_.call(null,G__51853_52038,G__51854_52039,G__51855_52040,G__51856_52041,G__51857_52042));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__51859_52043 = script;
var G__51860_52044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51861_52045 = editscript.edit.nada();
var G__51862_52046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__51863_52047 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51859_52043,G__51860_52044,G__51861_52045,G__51862_52046,G__51863_52047) : editscript.diff.quick.diff_STAR_.call(null,G__51859_52043,G__51860_52044,G__51861_52045,G__51862_52046,G__51863_52047));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__51864_52049 = script;
var G__51865_52050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__51866_52051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__51867_52052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__51868_52053 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51864_52049,G__51865_52050,G__51866_52051,G__51867_52052,G__51868_52053) : editscript.diff.quick.diff_STAR_.call(null,G__51864_52049,G__51865_52050,G__51866_52051,G__51867_52052,G__51868_52053));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),edits);
}
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__51876_52055 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__51877_52056 = null;
var count__51878_52057 = (0);
var i__51879_52058 = (0);
while(true){
if((i__51879_52058 < count__51878_52057)){
var va_52059 = chunk__51877_52056.cljs$core$IIndexed$_nth$arity$2(null,i__51879_52058);
var G__51896_52060 = script;
var G__51897_52061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_52059);
var G__51898_52062 = va_52059;
var G__51899_52063 = editscript.edit.nada();
var G__51900_52064 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51896_52060,G__51897_52061,G__51898_52062,G__51899_52063,G__51900_52064) : editscript.diff.quick.diff_STAR_.call(null,G__51896_52060,G__51897_52061,G__51898_52062,G__51899_52063,G__51900_52064));


var G__52065 = seq__51876_52055;
var G__52066 = chunk__51877_52056;
var G__52067 = count__51878_52057;
var G__52068 = (i__51879_52058 + (1));
seq__51876_52055 = G__52065;
chunk__51877_52056 = G__52066;
count__51878_52057 = G__52067;
i__51879_52058 = G__52068;
continue;
} else {
var temp__5804__auto___52069 = cljs.core.seq(seq__51876_52055);
if(temp__5804__auto___52069){
var seq__51876_52070__$1 = temp__5804__auto___52069;
if(cljs.core.chunked_seq_QMARK_(seq__51876_52070__$1)){
var c__5568__auto___52071 = cljs.core.chunk_first(seq__51876_52070__$1);
var G__52072 = cljs.core.chunk_rest(seq__51876_52070__$1);
var G__52073 = c__5568__auto___52071;
var G__52074 = cljs.core.count(c__5568__auto___52071);
var G__52075 = (0);
seq__51876_52055 = G__52072;
chunk__51877_52056 = G__52073;
count__51878_52057 = G__52074;
i__51879_52058 = G__52075;
continue;
} else {
var va_52076 = cljs.core.first(seq__51876_52070__$1);
var G__51901_52078 = script;
var G__51902_52079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_52076);
var G__51903_52080 = va_52076;
var G__51904_52081 = editscript.edit.nada();
var G__51905_52082 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51901_52078,G__51902_52079,G__51903_52080,G__51904_52081,G__51905_52082) : editscript.diff.quick.diff_STAR_.call(null,G__51901_52078,G__51902_52079,G__51903_52080,G__51904_52081,G__51905_52082));


var G__52083 = cljs.core.next(seq__51876_52070__$1);
var G__52084 = null;
var G__52085 = (0);
var G__52086 = (0);
seq__51876_52055 = G__52083;
chunk__51877_52056 = G__52084;
count__51878_52057 = G__52085;
i__51879_52058 = G__52086;
continue;
}
} else {
}
}
break;
}

var seq__51906 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__51907 = null;
var count__51908 = (0);
var i__51909 = (0);
while(true){
if((i__51909 < count__51908)){
var vb = chunk__51907.cljs$core$IIndexed$_nth$arity$2(null,i__51909);
var G__51928_52087 = script;
var G__51929_52088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51930_52089 = editscript.edit.nada();
var G__51931_52090 = vb;
var G__51932_52091 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51928_52087,G__51929_52088,G__51930_52089,G__51931_52090,G__51932_52091) : editscript.diff.quick.diff_STAR_.call(null,G__51928_52087,G__51929_52088,G__51930_52089,G__51931_52090,G__51932_52091));


var G__52092 = seq__51906;
var G__52093 = chunk__51907;
var G__52094 = count__51908;
var G__52095 = (i__51909 + (1));
seq__51906 = G__52092;
chunk__51907 = G__52093;
count__51908 = G__52094;
i__51909 = G__52095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51906);
if(temp__5804__auto__){
var seq__51906__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51906__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51906__$1);
var G__52096 = cljs.core.chunk_rest(seq__51906__$1);
var G__52097 = c__5568__auto__;
var G__52098 = cljs.core.count(c__5568__auto__);
var G__52099 = (0);
seq__51906 = G__52096;
chunk__51907 = G__52097;
count__51908 = G__52098;
i__51909 = G__52099;
continue;
} else {
var vb = cljs.core.first(seq__51906__$1);
var G__51934_52100 = script;
var G__51935_52101 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__51936_52102 = editscript.edit.nada();
var G__51937_52103 = vb;
var G__51938_52104 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__51934_52100,G__51935_52101,G__51936_52102,G__51937_52103,G__51938_52104) : editscript.diff.quick.diff_STAR_.call(null,G__51934_52100,G__51935_52101,G__51936_52102,G__51937_52103,G__51938_52104));


var G__52105 = cljs.core.next(seq__51906__$1);
var G__52106 = null;
var G__52107 = (0);
var G__52108 = (0);
seq__51906 = G__52105;
chunk__51907 = G__52106;
count__51908 = G__52107;
i__51909 = G__52108;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,_,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,p__51952){
var map__51953 = p__51952;
var map__51953__$1 = cljs.core.__destructure_map(map__51953);
var opts = map__51953__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51953__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__51955 = editscript.edit.get_type(a);
var G__51955__$1 = (((G__51955 instanceof cljs.core.Keyword))?G__51955.fqn:null);
switch (G__51955__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__51962 = editscript.edit.get_type(b);
var G__51962__$1 = (((G__51962 instanceof cljs.core.Keyword))?G__51962.fqn:null);
switch (G__51962__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__51965 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__51965.cljs$core$IFn$_invoke$arity$5 ? fexpr__51965.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51965.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__51973 = editscript.edit.get_type(b);
var G__51973__$1 = (((G__51973 instanceof cljs.core.Keyword))?G__51973.fqn:null);
switch (G__51973__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__51978 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__51978.cljs$core$IFn$_invoke$arity$5 ? fexpr__51978.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51978.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__51981 = editscript.edit.get_type(b);
var G__51981__$1 = (((G__51981 instanceof cljs.core.Keyword))?G__51981.fqn:null);
switch (G__51981__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__51983 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__51983.cljs$core$IFn$_invoke$arity$5 ? fexpr__51983.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__51983.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__51992 = editscript.edit.get_type(b);
var G__51992__$1 = (((G__51992 instanceof cljs.core.Keyword))?G__51992.fqn:null);
switch (G__51992__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__52004 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__52004.cljs$core$IFn$_invoke$arity$5 ? fexpr__52004.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__52004.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))){
return editscript.diff.quick.diff_val(script,path,a,b);
} else {
var G__52009 = editscript.edit.get_type(b);
var G__52009__$1 = (((G__52009 instanceof cljs.core.Keyword))?G__52009.fqn:null);
switch (G__52009__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__52014 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,161,161,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),new cljs.core.Symbol(null,"str-diff","str-diff",-1414820963,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),0.2], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__52014.cljs$core$IFn$_invoke$arity$5 ? fexpr__52014.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__52014.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51955__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__52027 = arguments.length;
switch (G__52027) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.quick.js.map
