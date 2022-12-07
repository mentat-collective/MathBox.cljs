goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61896 = arguments.length;
var i__4865__auto___61897 = (0);
while(true){
if((i__4865__auto___61897 < len__4864__auto___61896)){
args__4870__auto__.push((arguments[i__4865__auto___61897]));

var G__61898 = (i__4865__auto___61897 + (1));
i__4865__auto___61897 = G__61898;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61152){
var G__61153 = cljs.core.first(seq61152);
var seq61152__$1 = cljs.core.next(seq61152);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61153,seq61152__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61182 = cljs.core.seq(sources);
var chunk__61183 = null;
var count__61184 = (0);
var i__61185 = (0);
while(true){
if((i__61185 < count__61184)){
var map__61200 = chunk__61183.cljs$core$IIndexed$_nth$arity$2(null,i__61185);
var map__61200__$1 = cljs.core.__destructure_map(map__61200);
var src = map__61200__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61200__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61201){var e_61899 = e61201;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61899);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61899.message)].join('')));
}

var G__61900 = seq__61182;
var G__61901 = chunk__61183;
var G__61902 = count__61184;
var G__61903 = (i__61185 + (1));
seq__61182 = G__61900;
chunk__61183 = G__61901;
count__61184 = G__61902;
i__61185 = G__61903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61182);
if(temp__5753__auto__){
var seq__61182__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61182__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61182__$1);
var G__61905 = cljs.core.chunk_rest(seq__61182__$1);
var G__61906 = c__4679__auto__;
var G__61907 = cljs.core.count(c__4679__auto__);
var G__61908 = (0);
seq__61182 = G__61905;
chunk__61183 = G__61906;
count__61184 = G__61907;
i__61185 = G__61908;
continue;
} else {
var map__61208 = cljs.core.first(seq__61182__$1);
var map__61208__$1 = cljs.core.__destructure_map(map__61208);
var src = map__61208__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61208__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61210){var e_61909 = e61210;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61909);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61909.message)].join('')));
}

var G__61913 = cljs.core.next(seq__61182__$1);
var G__61914 = null;
var G__61915 = (0);
var G__61916 = (0);
seq__61182 = G__61913;
chunk__61183 = G__61914;
count__61184 = G__61915;
i__61185 = G__61916;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61225 = cljs.core.seq(js_requires);
var chunk__61226 = null;
var count__61227 = (0);
var i__61228 = (0);
while(true){
if((i__61228 < count__61227)){
var js_ns = chunk__61226.cljs$core$IIndexed$_nth$arity$2(null,i__61228);
var require_str_61917 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61917);


var G__61918 = seq__61225;
var G__61919 = chunk__61226;
var G__61920 = count__61227;
var G__61921 = (i__61228 + (1));
seq__61225 = G__61918;
chunk__61226 = G__61919;
count__61227 = G__61920;
i__61228 = G__61921;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61225);
if(temp__5753__auto__){
var seq__61225__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61225__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61225__$1);
var G__61922 = cljs.core.chunk_rest(seq__61225__$1);
var G__61923 = c__4679__auto__;
var G__61924 = cljs.core.count(c__4679__auto__);
var G__61925 = (0);
seq__61225 = G__61922;
chunk__61226 = G__61923;
count__61227 = G__61924;
i__61228 = G__61925;
continue;
} else {
var js_ns = cljs.core.first(seq__61225__$1);
var require_str_61926 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61926);


var G__61927 = cljs.core.next(seq__61225__$1);
var G__61928 = null;
var G__61929 = (0);
var G__61930 = (0);
seq__61225 = G__61927;
chunk__61226 = G__61928;
count__61227 = G__61929;
i__61228 = G__61930;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61241){
var map__61242 = p__61241;
var map__61242__$1 = cljs.core.__destructure_map(map__61242);
var msg = map__61242__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61242__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61244(s__61245){
return (new cljs.core.LazySeq(null,(function (){
var s__61245__$1 = s__61245;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61245__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__61251 = cljs.core.first(xs__6308__auto__);
var map__61251__$1 = cljs.core.__destructure_map(map__61251);
var src = map__61251__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61251__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61251__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__61245__$1,map__61251,map__61251__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61242,map__61242__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61244_$_iter__61246(s__61247){
return (new cljs.core.LazySeq(null,((function (s__61245__$1,map__61251,map__61251__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61242,map__61242__$1,msg,info,reload_info){
return (function (){
var s__61247__$1 = s__61247;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__61247__$1);
if(temp__5753__auto____$1){
var s__61247__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61247__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__61247__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__61249 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__61248 = (0);
while(true){
if((i__61248 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__61248);
cljs.core.chunk_append(b__61249,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61933 = (i__61248 + (1));
i__61248 = G__61933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61249),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61244_$_iter__61246(cljs.core.chunk_rest(s__61247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61249),null);
}
} else {
var warning = cljs.core.first(s__61247__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61244_$_iter__61246(cljs.core.rest(s__61247__$2)));
}
} else {
return null;
}
break;
}
});})(s__61245__$1,map__61251,map__61251__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61242,map__61242__$1,msg,info,reload_info))
,null,null));
});})(s__61245__$1,map__61251,map__61251__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__61242,map__61242__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61244(cljs.core.rest(s__61245__$1)));
} else {
var G__61935 = cljs.core.rest(s__61245__$1);
s__61245__$1 = G__61935;
continue;
}
} else {
var G__61936 = cljs.core.rest(s__61245__$1);
s__61245__$1 = G__61936;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61256_61937 = cljs.core.seq(warnings);
var chunk__61257_61938 = null;
var count__61258_61939 = (0);
var i__61259_61940 = (0);
while(true){
if((i__61259_61940 < count__61258_61939)){
var map__61263_61942 = chunk__61257_61938.cljs$core$IIndexed$_nth$arity$2(null,i__61259_61940);
var map__61263_61943__$1 = cljs.core.__destructure_map(map__61263_61942);
var w_61944 = map__61263_61943__$1;
var msg_61945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263_61943__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263_61943__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263_61943__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263_61943__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61948)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61946),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61947),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61945__$1)].join(''));


var G__61949 = seq__61256_61937;
var G__61950 = chunk__61257_61938;
var G__61951 = count__61258_61939;
var G__61952 = (i__61259_61940 + (1));
seq__61256_61937 = G__61949;
chunk__61257_61938 = G__61950;
count__61258_61939 = G__61951;
i__61259_61940 = G__61952;
continue;
} else {
var temp__5753__auto___61954 = cljs.core.seq(seq__61256_61937);
if(temp__5753__auto___61954){
var seq__61256_61955__$1 = temp__5753__auto___61954;
if(cljs.core.chunked_seq_QMARK_(seq__61256_61955__$1)){
var c__4679__auto___61956 = cljs.core.chunk_first(seq__61256_61955__$1);
var G__61957 = cljs.core.chunk_rest(seq__61256_61955__$1);
var G__61958 = c__4679__auto___61956;
var G__61959 = cljs.core.count(c__4679__auto___61956);
var G__61960 = (0);
seq__61256_61937 = G__61957;
chunk__61257_61938 = G__61958;
count__61258_61939 = G__61959;
i__61259_61940 = G__61960;
continue;
} else {
var map__61264_61961 = cljs.core.first(seq__61256_61955__$1);
var map__61264_61962__$1 = cljs.core.__destructure_map(map__61264_61961);
var w_61963 = map__61264_61962__$1;
var msg_61964__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61264_61962__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61264_61962__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61264_61962__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61264_61962__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61967)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61965),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61966),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61964__$1)].join(''));


var G__61970 = cljs.core.next(seq__61256_61955__$1);
var G__61971 = null;
var G__61972 = (0);
var G__61973 = (0);
seq__61256_61937 = G__61970;
chunk__61257_61938 = G__61971;
count__61258_61939 = G__61972;
i__61259_61940 = G__61973;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61237_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61237_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61296){
var map__61297 = p__61296;
var map__61297__$1 = cljs.core.__destructure_map(map__61297);
var msg = map__61297__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61297__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__61298 = cljs.core.seq(updates);
var chunk__61301 = null;
var count__61302 = (0);
var i__61303 = (0);
while(true){
if((i__61303 < count__61302)){
var path = chunk__61301.cljs$core$IIndexed$_nth$arity$2(null,i__61303);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61606_61979 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61610_61980 = null;
var count__61611_61981 = (0);
var i__61612_61982 = (0);
while(true){
if((i__61612_61982 < count__61611_61981)){
var node_61984 = chunk__61610_61980.cljs$core$IIndexed$_nth$arity$2(null,i__61612_61982);
if(cljs.core.not(node_61984.shadow$old)){
var path_match_61986 = shadow.cljs.devtools.client.browser.match_paths(node_61984.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61986)){
var new_link_61987 = (function (){var G__61663 = node_61984.cloneNode(true);
G__61663.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61986),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61663;
})();
(node_61984.shadow$old = true);

(new_link_61987.onload = ((function (seq__61606_61979,chunk__61610_61980,count__61611_61981,i__61612_61982,seq__61298,chunk__61301,count__61302,i__61303,new_link_61987,path_match_61986,node_61984,path,map__61297,map__61297__$1,msg,updates,reload_info){
return (function (e){
var seq__61666_61988 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61668_61989 = null;
var count__61669_61990 = (0);
var i__61670_61991 = (0);
while(true){
if((i__61670_61991 < count__61669_61990)){
var map__61684_61992 = chunk__61668_61989.cljs$core$IIndexed$_nth$arity$2(null,i__61670_61991);
var map__61684_61993__$1 = cljs.core.__destructure_map(map__61684_61992);
var task_61994 = map__61684_61993__$1;
var fn_str_61995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684_61993__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_61996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61684_61993__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_61998 = goog.getObjectByName(fn_str_61995,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_61996)].join(''));

(fn_obj_61998.cljs$core$IFn$_invoke$arity$2 ? fn_obj_61998.cljs$core$IFn$_invoke$arity$2(path,new_link_61987) : fn_obj_61998.call(null,path,new_link_61987));


var G__61999 = seq__61666_61988;
var G__62000 = chunk__61668_61989;
var G__62001 = count__61669_61990;
var G__62002 = (i__61670_61991 + (1));
seq__61666_61988 = G__61999;
chunk__61668_61989 = G__62000;
count__61669_61990 = G__62001;
i__61670_61991 = G__62002;
continue;
} else {
var temp__5753__auto___62003 = cljs.core.seq(seq__61666_61988);
if(temp__5753__auto___62003){
var seq__61666_62004__$1 = temp__5753__auto___62003;
if(cljs.core.chunked_seq_QMARK_(seq__61666_62004__$1)){
var c__4679__auto___62005 = cljs.core.chunk_first(seq__61666_62004__$1);
var G__62006 = cljs.core.chunk_rest(seq__61666_62004__$1);
var G__62007 = c__4679__auto___62005;
var G__62008 = cljs.core.count(c__4679__auto___62005);
var G__62009 = (0);
seq__61666_61988 = G__62006;
chunk__61668_61989 = G__62007;
count__61669_61990 = G__62008;
i__61670_61991 = G__62009;
continue;
} else {
var map__61691_62010 = cljs.core.first(seq__61666_62004__$1);
var map__61691_62011__$1 = cljs.core.__destructure_map(map__61691_62010);
var task_62012 = map__61691_62011__$1;
var fn_str_62013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691_62011__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691_62011__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62015 = goog.getObjectByName(fn_str_62013,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62014)].join(''));

(fn_obj_62015.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62015.cljs$core$IFn$_invoke$arity$2(path,new_link_61987) : fn_obj_62015.call(null,path,new_link_61987));


var G__62016 = cljs.core.next(seq__61666_62004__$1);
var G__62017 = null;
var G__62018 = (0);
var G__62019 = (0);
seq__61666_61988 = G__62016;
chunk__61668_61989 = G__62017;
count__61669_61990 = G__62018;
i__61670_61991 = G__62019;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_61984);
});})(seq__61606_61979,chunk__61610_61980,count__61611_61981,i__61612_61982,seq__61298,chunk__61301,count__61302,i__61303,new_link_61987,path_match_61986,node_61984,path,map__61297,map__61297__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61986], 0));

goog.dom.insertSiblingAfter(new_link_61987,node_61984);


var G__62021 = seq__61606_61979;
var G__62022 = chunk__61610_61980;
var G__62023 = count__61611_61981;
var G__62024 = (i__61612_61982 + (1));
seq__61606_61979 = G__62021;
chunk__61610_61980 = G__62022;
count__61611_61981 = G__62023;
i__61612_61982 = G__62024;
continue;
} else {
var G__62025 = seq__61606_61979;
var G__62026 = chunk__61610_61980;
var G__62027 = count__61611_61981;
var G__62028 = (i__61612_61982 + (1));
seq__61606_61979 = G__62025;
chunk__61610_61980 = G__62026;
count__61611_61981 = G__62027;
i__61612_61982 = G__62028;
continue;
}
} else {
var G__62030 = seq__61606_61979;
var G__62031 = chunk__61610_61980;
var G__62032 = count__61611_61981;
var G__62033 = (i__61612_61982 + (1));
seq__61606_61979 = G__62030;
chunk__61610_61980 = G__62031;
count__61611_61981 = G__62032;
i__61612_61982 = G__62033;
continue;
}
} else {
var temp__5753__auto___62034 = cljs.core.seq(seq__61606_61979);
if(temp__5753__auto___62034){
var seq__61606_62035__$1 = temp__5753__auto___62034;
if(cljs.core.chunked_seq_QMARK_(seq__61606_62035__$1)){
var c__4679__auto___62036 = cljs.core.chunk_first(seq__61606_62035__$1);
var G__62037 = cljs.core.chunk_rest(seq__61606_62035__$1);
var G__62038 = c__4679__auto___62036;
var G__62039 = cljs.core.count(c__4679__auto___62036);
var G__62040 = (0);
seq__61606_61979 = G__62037;
chunk__61610_61980 = G__62038;
count__61611_61981 = G__62039;
i__61612_61982 = G__62040;
continue;
} else {
var node_62041 = cljs.core.first(seq__61606_62035__$1);
if(cljs.core.not(node_62041.shadow$old)){
var path_match_62042 = shadow.cljs.devtools.client.browser.match_paths(node_62041.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62042)){
var new_link_62043 = (function (){var G__61701 = node_62041.cloneNode(true);
G__61701.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62042),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61701;
})();
(node_62041.shadow$old = true);

(new_link_62043.onload = ((function (seq__61606_61979,chunk__61610_61980,count__61611_61981,i__61612_61982,seq__61298,chunk__61301,count__61302,i__61303,new_link_62043,path_match_62042,node_62041,seq__61606_62035__$1,temp__5753__auto___62034,path,map__61297,map__61297__$1,msg,updates,reload_info){
return (function (e){
var seq__61703_62044 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61705_62045 = null;
var count__61706_62046 = (0);
var i__61707_62047 = (0);
while(true){
if((i__61707_62047 < count__61706_62046)){
var map__61718_62048 = chunk__61705_62045.cljs$core$IIndexed$_nth$arity$2(null,i__61707_62047);
var map__61718_62049__$1 = cljs.core.__destructure_map(map__61718_62048);
var task_62050 = map__61718_62049__$1;
var fn_str_62051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718_62049__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61718_62049__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62055 = goog.getObjectByName(fn_str_62051,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62052)].join(''));

(fn_obj_62055.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62055.cljs$core$IFn$_invoke$arity$2(path,new_link_62043) : fn_obj_62055.call(null,path,new_link_62043));


var G__62057 = seq__61703_62044;
var G__62058 = chunk__61705_62045;
var G__62059 = count__61706_62046;
var G__62060 = (i__61707_62047 + (1));
seq__61703_62044 = G__62057;
chunk__61705_62045 = G__62058;
count__61706_62046 = G__62059;
i__61707_62047 = G__62060;
continue;
} else {
var temp__5753__auto___62061__$1 = cljs.core.seq(seq__61703_62044);
if(temp__5753__auto___62061__$1){
var seq__61703_62062__$1 = temp__5753__auto___62061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61703_62062__$1)){
var c__4679__auto___62063 = cljs.core.chunk_first(seq__61703_62062__$1);
var G__62064 = cljs.core.chunk_rest(seq__61703_62062__$1);
var G__62065 = c__4679__auto___62063;
var G__62066 = cljs.core.count(c__4679__auto___62063);
var G__62067 = (0);
seq__61703_62044 = G__62064;
chunk__61705_62045 = G__62065;
count__61706_62046 = G__62066;
i__61707_62047 = G__62067;
continue;
} else {
var map__61723_62069 = cljs.core.first(seq__61703_62062__$1);
var map__61723_62070__$1 = cljs.core.__destructure_map(map__61723_62069);
var task_62071 = map__61723_62070__$1;
var fn_str_62072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61723_62070__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61723_62070__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62074 = goog.getObjectByName(fn_str_62072,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62073)].join(''));

(fn_obj_62074.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62074.cljs$core$IFn$_invoke$arity$2(path,new_link_62043) : fn_obj_62074.call(null,path,new_link_62043));


var G__62075 = cljs.core.next(seq__61703_62062__$1);
var G__62076 = null;
var G__62077 = (0);
var G__62078 = (0);
seq__61703_62044 = G__62075;
chunk__61705_62045 = G__62076;
count__61706_62046 = G__62077;
i__61707_62047 = G__62078;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62041);
});})(seq__61606_61979,chunk__61610_61980,count__61611_61981,i__61612_61982,seq__61298,chunk__61301,count__61302,i__61303,new_link_62043,path_match_62042,node_62041,seq__61606_62035__$1,temp__5753__auto___62034,path,map__61297,map__61297__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62042], 0));

goog.dom.insertSiblingAfter(new_link_62043,node_62041);


var G__62080 = cljs.core.next(seq__61606_62035__$1);
var G__62081 = null;
var G__62082 = (0);
var G__62083 = (0);
seq__61606_61979 = G__62080;
chunk__61610_61980 = G__62081;
count__61611_61981 = G__62082;
i__61612_61982 = G__62083;
continue;
} else {
var G__62084 = cljs.core.next(seq__61606_62035__$1);
var G__62085 = null;
var G__62086 = (0);
var G__62087 = (0);
seq__61606_61979 = G__62084;
chunk__61610_61980 = G__62085;
count__61611_61981 = G__62086;
i__61612_61982 = G__62087;
continue;
}
} else {
var G__62088 = cljs.core.next(seq__61606_62035__$1);
var G__62089 = null;
var G__62090 = (0);
var G__62091 = (0);
seq__61606_61979 = G__62088;
chunk__61610_61980 = G__62089;
count__61611_61981 = G__62090;
i__61612_61982 = G__62091;
continue;
}
}
} else {
}
}
break;
}


var G__62092 = seq__61298;
var G__62093 = chunk__61301;
var G__62094 = count__61302;
var G__62095 = (i__61303 + (1));
seq__61298 = G__62092;
chunk__61301 = G__62093;
count__61302 = G__62094;
i__61303 = G__62095;
continue;
} else {
var G__62096 = seq__61298;
var G__62097 = chunk__61301;
var G__62098 = count__61302;
var G__62099 = (i__61303 + (1));
seq__61298 = G__62096;
chunk__61301 = G__62097;
count__61302 = G__62098;
i__61303 = G__62099;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61298);
if(temp__5753__auto__){
var seq__61298__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61298__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61298__$1);
var G__62100 = cljs.core.chunk_rest(seq__61298__$1);
var G__62101 = c__4679__auto__;
var G__62102 = cljs.core.count(c__4679__auto__);
var G__62103 = (0);
seq__61298 = G__62100;
chunk__61301 = G__62101;
count__61302 = G__62102;
i__61303 = G__62103;
continue;
} else {
var path = cljs.core.first(seq__61298__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61734_62104 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61738_62105 = null;
var count__61739_62106 = (0);
var i__61740_62107 = (0);
while(true){
if((i__61740_62107 < count__61739_62106)){
var node_62109 = chunk__61738_62105.cljs$core$IIndexed$_nth$arity$2(null,i__61740_62107);
if(cljs.core.not(node_62109.shadow$old)){
var path_match_62110 = shadow.cljs.devtools.client.browser.match_paths(node_62109.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62110)){
var new_link_62111 = (function (){var G__61805 = node_62109.cloneNode(true);
G__61805.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62110),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61805;
})();
(node_62109.shadow$old = true);

(new_link_62111.onload = ((function (seq__61734_62104,chunk__61738_62105,count__61739_62106,i__61740_62107,seq__61298,chunk__61301,count__61302,i__61303,new_link_62111,path_match_62110,node_62109,path,seq__61298__$1,temp__5753__auto__,map__61297,map__61297__$1,msg,updates,reload_info){
return (function (e){
var seq__61808_62112 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61810_62113 = null;
var count__61811_62114 = (0);
var i__61812_62115 = (0);
while(true){
if((i__61812_62115 < count__61811_62114)){
var map__61820_62116 = chunk__61810_62113.cljs$core$IIndexed$_nth$arity$2(null,i__61812_62115);
var map__61820_62117__$1 = cljs.core.__destructure_map(map__61820_62116);
var task_62118 = map__61820_62117__$1;
var fn_str_62119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61820_62117__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61820_62117__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62121 = goog.getObjectByName(fn_str_62119,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62120)].join(''));

(fn_obj_62121.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62121.cljs$core$IFn$_invoke$arity$2(path,new_link_62111) : fn_obj_62121.call(null,path,new_link_62111));


var G__62122 = seq__61808_62112;
var G__62123 = chunk__61810_62113;
var G__62124 = count__61811_62114;
var G__62125 = (i__61812_62115 + (1));
seq__61808_62112 = G__62122;
chunk__61810_62113 = G__62123;
count__61811_62114 = G__62124;
i__61812_62115 = G__62125;
continue;
} else {
var temp__5753__auto___62126__$1 = cljs.core.seq(seq__61808_62112);
if(temp__5753__auto___62126__$1){
var seq__61808_62127__$1 = temp__5753__auto___62126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61808_62127__$1)){
var c__4679__auto___62128 = cljs.core.chunk_first(seq__61808_62127__$1);
var G__62129 = cljs.core.chunk_rest(seq__61808_62127__$1);
var G__62130 = c__4679__auto___62128;
var G__62131 = cljs.core.count(c__4679__auto___62128);
var G__62132 = (0);
seq__61808_62112 = G__62129;
chunk__61810_62113 = G__62130;
count__61811_62114 = G__62131;
i__61812_62115 = G__62132;
continue;
} else {
var map__61822_62133 = cljs.core.first(seq__61808_62127__$1);
var map__61822_62134__$1 = cljs.core.__destructure_map(map__61822_62133);
var task_62135 = map__61822_62134__$1;
var fn_str_62136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822_62134__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822_62134__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62139 = goog.getObjectByName(fn_str_62136,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62137)].join(''));

(fn_obj_62139.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62139.cljs$core$IFn$_invoke$arity$2(path,new_link_62111) : fn_obj_62139.call(null,path,new_link_62111));


var G__62140 = cljs.core.next(seq__61808_62127__$1);
var G__62141 = null;
var G__62142 = (0);
var G__62143 = (0);
seq__61808_62112 = G__62140;
chunk__61810_62113 = G__62141;
count__61811_62114 = G__62142;
i__61812_62115 = G__62143;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62109);
});})(seq__61734_62104,chunk__61738_62105,count__61739_62106,i__61740_62107,seq__61298,chunk__61301,count__61302,i__61303,new_link_62111,path_match_62110,node_62109,path,seq__61298__$1,temp__5753__auto__,map__61297,map__61297__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62110], 0));

goog.dom.insertSiblingAfter(new_link_62111,node_62109);


var G__62145 = seq__61734_62104;
var G__62146 = chunk__61738_62105;
var G__62147 = count__61739_62106;
var G__62148 = (i__61740_62107 + (1));
seq__61734_62104 = G__62145;
chunk__61738_62105 = G__62146;
count__61739_62106 = G__62147;
i__61740_62107 = G__62148;
continue;
} else {
var G__62149 = seq__61734_62104;
var G__62150 = chunk__61738_62105;
var G__62151 = count__61739_62106;
var G__62152 = (i__61740_62107 + (1));
seq__61734_62104 = G__62149;
chunk__61738_62105 = G__62150;
count__61739_62106 = G__62151;
i__61740_62107 = G__62152;
continue;
}
} else {
var G__62153 = seq__61734_62104;
var G__62154 = chunk__61738_62105;
var G__62155 = count__61739_62106;
var G__62156 = (i__61740_62107 + (1));
seq__61734_62104 = G__62153;
chunk__61738_62105 = G__62154;
count__61739_62106 = G__62155;
i__61740_62107 = G__62156;
continue;
}
} else {
var temp__5753__auto___62157__$1 = cljs.core.seq(seq__61734_62104);
if(temp__5753__auto___62157__$1){
var seq__61734_62159__$1 = temp__5753__auto___62157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61734_62159__$1)){
var c__4679__auto___62161 = cljs.core.chunk_first(seq__61734_62159__$1);
var G__62162 = cljs.core.chunk_rest(seq__61734_62159__$1);
var G__62163 = c__4679__auto___62161;
var G__62164 = cljs.core.count(c__4679__auto___62161);
var G__62165 = (0);
seq__61734_62104 = G__62162;
chunk__61738_62105 = G__62163;
count__61739_62106 = G__62164;
i__61740_62107 = G__62165;
continue;
} else {
var node_62166 = cljs.core.first(seq__61734_62159__$1);
if(cljs.core.not(node_62166.shadow$old)){
var path_match_62167 = shadow.cljs.devtools.client.browser.match_paths(node_62166.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62167)){
var new_link_62168 = (function (){var G__61834 = node_62166.cloneNode(true);
G__61834.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62167),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61834;
})();
(node_62166.shadow$old = true);

(new_link_62168.onload = ((function (seq__61734_62104,chunk__61738_62105,count__61739_62106,i__61740_62107,seq__61298,chunk__61301,count__61302,i__61303,new_link_62168,path_match_62167,node_62166,seq__61734_62159__$1,temp__5753__auto___62157__$1,path,seq__61298__$1,temp__5753__auto__,map__61297,map__61297__$1,msg,updates,reload_info){
return (function (e){
var seq__61836_62170 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__61838_62171 = null;
var count__61839_62172 = (0);
var i__61840_62173 = (0);
while(true){
if((i__61840_62173 < count__61839_62172)){
var map__61850_62174 = chunk__61838_62171.cljs$core$IIndexed$_nth$arity$2(null,i__61840_62173);
var map__61850_62175__$1 = cljs.core.__destructure_map(map__61850_62174);
var task_62176 = map__61850_62175__$1;
var fn_str_62177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850_62175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61850_62175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62179 = goog.getObjectByName(fn_str_62177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62178)].join(''));

(fn_obj_62179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62179.cljs$core$IFn$_invoke$arity$2(path,new_link_62168) : fn_obj_62179.call(null,path,new_link_62168));


var G__62180 = seq__61836_62170;
var G__62181 = chunk__61838_62171;
var G__62182 = count__61839_62172;
var G__62183 = (i__61840_62173 + (1));
seq__61836_62170 = G__62180;
chunk__61838_62171 = G__62181;
count__61839_62172 = G__62182;
i__61840_62173 = G__62183;
continue;
} else {
var temp__5753__auto___62184__$2 = cljs.core.seq(seq__61836_62170);
if(temp__5753__auto___62184__$2){
var seq__61836_62185__$1 = temp__5753__auto___62184__$2;
if(cljs.core.chunked_seq_QMARK_(seq__61836_62185__$1)){
var c__4679__auto___62186 = cljs.core.chunk_first(seq__61836_62185__$1);
var G__62187 = cljs.core.chunk_rest(seq__61836_62185__$1);
var G__62188 = c__4679__auto___62186;
var G__62189 = cljs.core.count(c__4679__auto___62186);
var G__62190 = (0);
seq__61836_62170 = G__62187;
chunk__61838_62171 = G__62188;
count__61839_62172 = G__62189;
i__61840_62173 = G__62190;
continue;
} else {
var map__61851_62191 = cljs.core.first(seq__61836_62185__$1);
var map__61851_62192__$1 = cljs.core.__destructure_map(map__61851_62191);
var task_62193 = map__61851_62192__$1;
var fn_str_62194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61851_62192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61851_62192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62197 = goog.getObjectByName(fn_str_62194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62195)].join(''));

(fn_obj_62197.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62197.cljs$core$IFn$_invoke$arity$2(path,new_link_62168) : fn_obj_62197.call(null,path,new_link_62168));


var G__62198 = cljs.core.next(seq__61836_62185__$1);
var G__62199 = null;
var G__62200 = (0);
var G__62201 = (0);
seq__61836_62170 = G__62198;
chunk__61838_62171 = G__62199;
count__61839_62172 = G__62200;
i__61840_62173 = G__62201;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62166);
});})(seq__61734_62104,chunk__61738_62105,count__61739_62106,i__61740_62107,seq__61298,chunk__61301,count__61302,i__61303,new_link_62168,path_match_62167,node_62166,seq__61734_62159__$1,temp__5753__auto___62157__$1,path,seq__61298__$1,temp__5753__auto__,map__61297,map__61297__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62167], 0));

goog.dom.insertSiblingAfter(new_link_62168,node_62166);


var G__62202 = cljs.core.next(seq__61734_62159__$1);
var G__62203 = null;
var G__62204 = (0);
var G__62205 = (0);
seq__61734_62104 = G__62202;
chunk__61738_62105 = G__62203;
count__61739_62106 = G__62204;
i__61740_62107 = G__62205;
continue;
} else {
var G__62207 = cljs.core.next(seq__61734_62159__$1);
var G__62208 = null;
var G__62209 = (0);
var G__62210 = (0);
seq__61734_62104 = G__62207;
chunk__61738_62105 = G__62208;
count__61739_62106 = G__62209;
i__61740_62107 = G__62210;
continue;
}
} else {
var G__62211 = cljs.core.next(seq__61734_62159__$1);
var G__62212 = null;
var G__62213 = (0);
var G__62214 = (0);
seq__61734_62104 = G__62211;
chunk__61738_62105 = G__62212;
count__61739_62106 = G__62213;
i__61740_62107 = G__62214;
continue;
}
}
} else {
}
}
break;
}


var G__62215 = cljs.core.next(seq__61298__$1);
var G__62216 = null;
var G__62217 = (0);
var G__62218 = (0);
seq__61298 = G__62215;
chunk__61301 = G__62216;
count__61302 = G__62217;
i__61303 = G__62218;
continue;
} else {
var G__62219 = cljs.core.next(seq__61298__$1);
var G__62220 = null;
var G__62221 = (0);
var G__62222 = (0);
seq__61298 = G__62219;
chunk__61301 = G__62220;
count__61302 = G__62221;
i__61303 = G__62222;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61855){
var map__61856 = p__61855;
var map__61856__$1 = cljs.core.__destructure_map(map__61856);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61856__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61858){
var map__61859 = p__61858;
var map__61859__$1 = cljs.core.__destructure_map(map__61859);
var _ = map__61859__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61859__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61860,done,error){
var map__61861 = p__61860;
var map__61861__$1 = cljs.core.__destructure_map(map__61861);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61861__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61864,done,error){
var map__61865 = p__61864;
var map__61865__$1 = cljs.core.__destructure_map(map__61865);
var msg = map__61865__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61865__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61867){
var map__61868 = p__61867;
var map__61868__$1 = cljs.core.__destructure_map(map__61868);
var src = map__61868__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61871 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61871) : done.call(null,G__61871));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61873){
var map__61874 = p__61873;
var map__61874__$1 = cljs.core.__destructure_map(map__61874);
var msg__$1 = map__61874__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61874__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61875){var ex = e61875;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61876){
var map__61877 = p__61876;
var map__61877__$1 = cljs.core.__destructure_map(map__61877);
var env = map__61877__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61877__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61884){
var map__61885 = p__61884;
var map__61885__$1 = cljs.core.__destructure_map(map__61885);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61885__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61885__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61889){
var map__61890 = p__61889;
var map__61890__$1 = cljs.core.__destructure_map(map__61890);
var svc = map__61890__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
