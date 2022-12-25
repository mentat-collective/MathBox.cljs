import "./cljs_env.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52179 = arguments.length;
var i__5770__auto___52181 = (0);
while(true){
if((i__5770__auto___52181 < len__5769__auto___52179)){
args__5775__auto__.push((arguments[i__5770__auto___52181]));

var G__52182 = (i__5770__auto___52181 + (1));
i__5770__auto___52181 = G__52182;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51211){
var G__51212 = cljs.core.first(seq51211);
var seq51211__$1 = cljs.core.next(seq51211);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51212,seq51211__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51218 = cljs.core.seq(sources);
var chunk__51219 = null;
var count__51220 = (0);
var i__51221 = (0);
while(true){
if((i__51221 < count__51220)){
var map__51232 = chunk__51219.cljs$core$IIndexed$_nth$arity$2(null,i__51221);
var map__51232__$1 = cljs.core.__destructure_map(map__51232);
var src = map__51232__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51232__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51233){var e_52192 = e51233;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52192);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52192.message)].join('')));
}

var G__52193 = seq__51218;
var G__52194 = chunk__51219;
var G__52195 = count__51220;
var G__52196 = (i__51221 + (1));
seq__51218 = G__52193;
chunk__51219 = G__52194;
count__51220 = G__52195;
i__51221 = G__52196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51218);
if(temp__5804__auto__){
var seq__51218__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51218__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51218__$1);
var G__52199 = cljs.core.chunk_rest(seq__51218__$1);
var G__52200 = c__5568__auto__;
var G__52201 = cljs.core.count(c__5568__auto__);
var G__52202 = (0);
seq__51218 = G__52199;
chunk__51219 = G__52200;
count__51220 = G__52201;
i__51221 = G__52202;
continue;
} else {
var map__51235 = cljs.core.first(seq__51218__$1);
var map__51235__$1 = cljs.core.__destructure_map(map__51235);
var src = map__51235__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51236){var e_52207 = e51236;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52207);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52207.message)].join('')));
}

var G__52208 = cljs.core.next(seq__51218__$1);
var G__52209 = null;
var G__52210 = (0);
var G__52211 = (0);
seq__51218 = G__52208;
chunk__51219 = G__52209;
count__51220 = G__52210;
i__51221 = G__52211;
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
var seq__51243 = cljs.core.seq(js_requires);
var chunk__51244 = null;
var count__51245 = (0);
var i__51246 = (0);
while(true){
if((i__51246 < count__51245)){
var js_ns = chunk__51244.cljs$core$IIndexed$_nth$arity$2(null,i__51246);
var require_str_52214 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52214);


var G__52215 = seq__51243;
var G__52216 = chunk__51244;
var G__52217 = count__51245;
var G__52218 = (i__51246 + (1));
seq__51243 = G__52215;
chunk__51244 = G__52216;
count__51245 = G__52217;
i__51246 = G__52218;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51243);
if(temp__5804__auto__){
var seq__51243__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51243__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51243__$1);
var G__52219 = cljs.core.chunk_rest(seq__51243__$1);
var G__52220 = c__5568__auto__;
var G__52221 = cljs.core.count(c__5568__auto__);
var G__52222 = (0);
seq__51243 = G__52219;
chunk__51244 = G__52220;
count__51245 = G__52221;
i__51246 = G__52222;
continue;
} else {
var js_ns = cljs.core.first(seq__51243__$1);
var require_str_52223 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52223);


var G__52224 = cljs.core.next(seq__51243__$1);
var G__52225 = null;
var G__52226 = (0);
var G__52227 = (0);
seq__51243 = G__52224;
chunk__51244 = G__52225;
count__51245 = G__52226;
i__51246 = G__52227;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51253){
var map__51254 = p__51253;
var map__51254__$1 = cljs.core.__destructure_map(map__51254);
var msg = map__51254__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51255(s__51256){
return (new cljs.core.LazySeq(null,(function (){
var s__51256__$1 = s__51256;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51256__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__51261 = cljs.core.first(xs__6360__auto__);
var map__51261__$1 = cljs.core.__destructure_map(map__51261);
var src = map__51261__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51261__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51261__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__51256__$1,map__51261,map__51261__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51254,map__51254__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51255_$_iter__51257(s__51258){
return (new cljs.core.LazySeq(null,((function (s__51256__$1,map__51261,map__51261__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51254,map__51254__$1,msg,info,reload_info){
return (function (){
var s__51258__$1 = s__51258;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51258__$1);
if(temp__5804__auto____$1){
var s__51258__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51258__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51258__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51260 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51259 = (0);
while(true){
if((i__51259 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__51259);
cljs.core.chunk_append(b__51260,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52238 = (i__51259 + (1));
i__51259 = G__52238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51260),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51255_$_iter__51257(cljs.core.chunk_rest(s__51258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51260),null);
}
} else {
var warning = cljs.core.first(s__51258__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51255_$_iter__51257(cljs.core.rest(s__51258__$2)));
}
} else {
return null;
}
break;
}
});})(s__51256__$1,map__51261,map__51261__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51254,map__51254__$1,msg,info,reload_info))
,null,null));
});})(s__51256__$1,map__51261,map__51261__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51254,map__51254__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51255(cljs.core.rest(s__51256__$1)));
} else {
var G__52252 = cljs.core.rest(s__51256__$1);
s__51256__$1 = G__52252;
continue;
}
} else {
var G__52257 = cljs.core.rest(s__51256__$1);
s__51256__$1 = G__52257;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51295_52261 = cljs.core.seq(warnings);
var chunk__51296_52262 = null;
var count__51297_52263 = (0);
var i__51298_52264 = (0);
while(true){
if((i__51298_52264 < count__51297_52263)){
var map__51311_52265 = chunk__51296_52262.cljs$core$IIndexed$_nth$arity$2(null,i__51298_52264);
var map__51311_52266__$1 = cljs.core.__destructure_map(map__51311_52265);
var w_52267 = map__51311_52266__$1;
var msg_52268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311_52266__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311_52266__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311_52266__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311_52266__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52271)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52269),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52270),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52268__$1)].join(''));


var G__52283 = seq__51295_52261;
var G__52284 = chunk__51296_52262;
var G__52285 = count__51297_52263;
var G__52286 = (i__51298_52264 + (1));
seq__51295_52261 = G__52283;
chunk__51296_52262 = G__52284;
count__51297_52263 = G__52285;
i__51298_52264 = G__52286;
continue;
} else {
var temp__5804__auto___52291 = cljs.core.seq(seq__51295_52261);
if(temp__5804__auto___52291){
var seq__51295_52292__$1 = temp__5804__auto___52291;
if(cljs.core.chunked_seq_QMARK_(seq__51295_52292__$1)){
var c__5568__auto___52297 = cljs.core.chunk_first(seq__51295_52292__$1);
var G__52298 = cljs.core.chunk_rest(seq__51295_52292__$1);
var G__52299 = c__5568__auto___52297;
var G__52300 = cljs.core.count(c__5568__auto___52297);
var G__52301 = (0);
seq__51295_52261 = G__52298;
chunk__51296_52262 = G__52299;
count__51297_52263 = G__52300;
i__51298_52264 = G__52301;
continue;
} else {
var map__51343_52302 = cljs.core.first(seq__51295_52292__$1);
var map__51343_52303__$1 = cljs.core.__destructure_map(map__51343_52302);
var w_52304 = map__51343_52303__$1;
var msg_52305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_52303__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_52303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_52303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51343_52303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52308)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52306),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52307),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52305__$1)].join(''));


var G__52309 = cljs.core.next(seq__51295_52292__$1);
var G__52310 = null;
var G__52311 = (0);
var G__52312 = (0);
seq__51295_52261 = G__52309;
chunk__51296_52262 = G__52310;
count__51297_52263 = G__52311;
i__51298_52264 = G__52312;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51252_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51252_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51361){
var map__51362 = p__51361;
var map__51362__$1 = cljs.core.__destructure_map(map__51362);
var msg = map__51362__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__51363 = cljs.core.seq(updates);
var chunk__51365 = null;
var count__51366 = (0);
var i__51367 = (0);
while(true){
if((i__51367 < count__51366)){
var path = chunk__51365.cljs$core$IIndexed$_nth$arity$2(null,i__51367);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51701_52316 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51705_52317 = null;
var count__51706_52318 = (0);
var i__51707_52319 = (0);
while(true){
if((i__51707_52319 < count__51706_52318)){
var node_52321 = chunk__51705_52317.cljs$core$IIndexed$_nth$arity$2(null,i__51707_52319);
if(cljs.core.not(node_52321.shadow$old)){
var path_match_52322 = shadow.cljs.devtools.client.browser.match_paths(node_52321.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52322)){
var new_link_52323 = (function (){var G__51858 = node_52321.cloneNode(true);
G__51858.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52322),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51858;
})();
(node_52321.shadow$old = true);

(new_link_52323.onload = ((function (seq__51701_52316,chunk__51705_52317,count__51706_52318,i__51707_52319,seq__51363,chunk__51365,count__51366,i__51367,new_link_52323,path_match_52322,node_52321,path,map__51362,map__51362__$1,msg,updates,reload_info){
return (function (e){
var seq__51869_52324 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51871_52325 = null;
var count__51872_52326 = (0);
var i__51873_52327 = (0);
while(true){
if((i__51873_52327 < count__51872_52326)){
var map__51889_52328 = chunk__51871_52325.cljs$core$IIndexed$_nth$arity$2(null,i__51873_52327);
var map__51889_52329__$1 = cljs.core.__destructure_map(map__51889_52328);
var task_52330 = map__51889_52329__$1;
var fn_str_52331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889_52329__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51889_52329__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52333 = goog.getObjectByName(fn_str_52331,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52332)].join(''));

(fn_obj_52333.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52333.cljs$core$IFn$_invoke$arity$2(path,new_link_52323) : fn_obj_52333.call(null,path,new_link_52323));


var G__52334 = seq__51869_52324;
var G__52335 = chunk__51871_52325;
var G__52336 = count__51872_52326;
var G__52337 = (i__51873_52327 + (1));
seq__51869_52324 = G__52334;
chunk__51871_52325 = G__52335;
count__51872_52326 = G__52336;
i__51873_52327 = G__52337;
continue;
} else {
var temp__5804__auto___52338 = cljs.core.seq(seq__51869_52324);
if(temp__5804__auto___52338){
var seq__51869_52339__$1 = temp__5804__auto___52338;
if(cljs.core.chunked_seq_QMARK_(seq__51869_52339__$1)){
var c__5568__auto___52340 = cljs.core.chunk_first(seq__51869_52339__$1);
var G__52341 = cljs.core.chunk_rest(seq__51869_52339__$1);
var G__52342 = c__5568__auto___52340;
var G__52343 = cljs.core.count(c__5568__auto___52340);
var G__52344 = (0);
seq__51869_52324 = G__52341;
chunk__51871_52325 = G__52342;
count__51872_52326 = G__52343;
i__51873_52327 = G__52344;
continue;
} else {
var map__51895_52345 = cljs.core.first(seq__51869_52339__$1);
var map__51895_52346__$1 = cljs.core.__destructure_map(map__51895_52345);
var task_52347 = map__51895_52346__$1;
var fn_str_52348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51895_52346__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51895_52346__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52350 = goog.getObjectByName(fn_str_52348,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52349)].join(''));

(fn_obj_52350.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52350.cljs$core$IFn$_invoke$arity$2(path,new_link_52323) : fn_obj_52350.call(null,path,new_link_52323));


var G__52351 = cljs.core.next(seq__51869_52339__$1);
var G__52352 = null;
var G__52353 = (0);
var G__52354 = (0);
seq__51869_52324 = G__52351;
chunk__51871_52325 = G__52352;
count__51872_52326 = G__52353;
i__51873_52327 = G__52354;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52321);
});})(seq__51701_52316,chunk__51705_52317,count__51706_52318,i__51707_52319,seq__51363,chunk__51365,count__51366,i__51367,new_link_52323,path_match_52322,node_52321,path,map__51362,map__51362__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52322], 0));

goog.dom.insertSiblingAfter(new_link_52323,node_52321);


var G__52355 = seq__51701_52316;
var G__52356 = chunk__51705_52317;
var G__52357 = count__51706_52318;
var G__52358 = (i__51707_52319 + (1));
seq__51701_52316 = G__52355;
chunk__51705_52317 = G__52356;
count__51706_52318 = G__52357;
i__51707_52319 = G__52358;
continue;
} else {
var G__52359 = seq__51701_52316;
var G__52360 = chunk__51705_52317;
var G__52361 = count__51706_52318;
var G__52362 = (i__51707_52319 + (1));
seq__51701_52316 = G__52359;
chunk__51705_52317 = G__52360;
count__51706_52318 = G__52361;
i__51707_52319 = G__52362;
continue;
}
} else {
var G__52363 = seq__51701_52316;
var G__52364 = chunk__51705_52317;
var G__52365 = count__51706_52318;
var G__52366 = (i__51707_52319 + (1));
seq__51701_52316 = G__52363;
chunk__51705_52317 = G__52364;
count__51706_52318 = G__52365;
i__51707_52319 = G__52366;
continue;
}
} else {
var temp__5804__auto___52367 = cljs.core.seq(seq__51701_52316);
if(temp__5804__auto___52367){
var seq__51701_52368__$1 = temp__5804__auto___52367;
if(cljs.core.chunked_seq_QMARK_(seq__51701_52368__$1)){
var c__5568__auto___52369 = cljs.core.chunk_first(seq__51701_52368__$1);
var G__52370 = cljs.core.chunk_rest(seq__51701_52368__$1);
var G__52371 = c__5568__auto___52369;
var G__52372 = cljs.core.count(c__5568__auto___52369);
var G__52373 = (0);
seq__51701_52316 = G__52370;
chunk__51705_52317 = G__52371;
count__51706_52318 = G__52372;
i__51707_52319 = G__52373;
continue;
} else {
var node_52374 = cljs.core.first(seq__51701_52368__$1);
if(cljs.core.not(node_52374.shadow$old)){
var path_match_52375 = shadow.cljs.devtools.client.browser.match_paths(node_52374.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52375)){
var new_link_52376 = (function (){var G__51915 = node_52374.cloneNode(true);
G__51915.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52375),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51915;
})();
(node_52374.shadow$old = true);

(new_link_52376.onload = ((function (seq__51701_52316,chunk__51705_52317,count__51706_52318,i__51707_52319,seq__51363,chunk__51365,count__51366,i__51367,new_link_52376,path_match_52375,node_52374,seq__51701_52368__$1,temp__5804__auto___52367,path,map__51362,map__51362__$1,msg,updates,reload_info){
return (function (e){
var seq__51916_52377 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51918_52378 = null;
var count__51919_52379 = (0);
var i__51920_52380 = (0);
while(true){
if((i__51920_52380 < count__51919_52379)){
var map__51939_52381 = chunk__51918_52378.cljs$core$IIndexed$_nth$arity$2(null,i__51920_52380);
var map__51939_52382__$1 = cljs.core.__destructure_map(map__51939_52381);
var task_52383 = map__51939_52382__$1;
var fn_str_52384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51939_52382__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51939_52382__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52386 = goog.getObjectByName(fn_str_52384,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52385)].join(''));

(fn_obj_52386.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52386.cljs$core$IFn$_invoke$arity$2(path,new_link_52376) : fn_obj_52386.call(null,path,new_link_52376));


var G__52387 = seq__51916_52377;
var G__52388 = chunk__51918_52378;
var G__52389 = count__51919_52379;
var G__52390 = (i__51920_52380 + (1));
seq__51916_52377 = G__52387;
chunk__51918_52378 = G__52388;
count__51919_52379 = G__52389;
i__51920_52380 = G__52390;
continue;
} else {
var temp__5804__auto___52391__$1 = cljs.core.seq(seq__51916_52377);
if(temp__5804__auto___52391__$1){
var seq__51916_52392__$1 = temp__5804__auto___52391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51916_52392__$1)){
var c__5568__auto___52393 = cljs.core.chunk_first(seq__51916_52392__$1);
var G__52394 = cljs.core.chunk_rest(seq__51916_52392__$1);
var G__52395 = c__5568__auto___52393;
var G__52396 = cljs.core.count(c__5568__auto___52393);
var G__52397 = (0);
seq__51916_52377 = G__52394;
chunk__51918_52378 = G__52395;
count__51919_52379 = G__52396;
i__51920_52380 = G__52397;
continue;
} else {
var map__51941_52398 = cljs.core.first(seq__51916_52392__$1);
var map__51941_52399__$1 = cljs.core.__destructure_map(map__51941_52398);
var task_52400 = map__51941_52399__$1;
var fn_str_52401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941_52399__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941_52399__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52403 = goog.getObjectByName(fn_str_52401,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52402)].join(''));

(fn_obj_52403.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52403.cljs$core$IFn$_invoke$arity$2(path,new_link_52376) : fn_obj_52403.call(null,path,new_link_52376));


var G__52404 = cljs.core.next(seq__51916_52392__$1);
var G__52405 = null;
var G__52406 = (0);
var G__52407 = (0);
seq__51916_52377 = G__52404;
chunk__51918_52378 = G__52405;
count__51919_52379 = G__52406;
i__51920_52380 = G__52407;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52374);
});})(seq__51701_52316,chunk__51705_52317,count__51706_52318,i__51707_52319,seq__51363,chunk__51365,count__51366,i__51367,new_link_52376,path_match_52375,node_52374,seq__51701_52368__$1,temp__5804__auto___52367,path,map__51362,map__51362__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52375], 0));

goog.dom.insertSiblingAfter(new_link_52376,node_52374);


var G__52408 = cljs.core.next(seq__51701_52368__$1);
var G__52409 = null;
var G__52410 = (0);
var G__52411 = (0);
seq__51701_52316 = G__52408;
chunk__51705_52317 = G__52409;
count__51706_52318 = G__52410;
i__51707_52319 = G__52411;
continue;
} else {
var G__52412 = cljs.core.next(seq__51701_52368__$1);
var G__52413 = null;
var G__52414 = (0);
var G__52415 = (0);
seq__51701_52316 = G__52412;
chunk__51705_52317 = G__52413;
count__51706_52318 = G__52414;
i__51707_52319 = G__52415;
continue;
}
} else {
var G__52416 = cljs.core.next(seq__51701_52368__$1);
var G__52417 = null;
var G__52418 = (0);
var G__52419 = (0);
seq__51701_52316 = G__52416;
chunk__51705_52317 = G__52417;
count__51706_52318 = G__52418;
i__51707_52319 = G__52419;
continue;
}
}
} else {
}
}
break;
}


var G__52420 = seq__51363;
var G__52421 = chunk__51365;
var G__52422 = count__51366;
var G__52423 = (i__51367 + (1));
seq__51363 = G__52420;
chunk__51365 = G__52421;
count__51366 = G__52422;
i__51367 = G__52423;
continue;
} else {
var G__52424 = seq__51363;
var G__52425 = chunk__51365;
var G__52426 = count__51366;
var G__52427 = (i__51367 + (1));
seq__51363 = G__52424;
chunk__51365 = G__52425;
count__51366 = G__52426;
i__51367 = G__52427;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51363);
if(temp__5804__auto__){
var seq__51363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51363__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51363__$1);
var G__52428 = cljs.core.chunk_rest(seq__51363__$1);
var G__52429 = c__5568__auto__;
var G__52430 = cljs.core.count(c__5568__auto__);
var G__52431 = (0);
seq__51363 = G__52428;
chunk__51365 = G__52429;
count__51366 = G__52430;
i__51367 = G__52431;
continue;
} else {
var path = cljs.core.first(seq__51363__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51942_52432 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51946_52433 = null;
var count__51947_52434 = (0);
var i__51948_52435 = (0);
while(true){
if((i__51948_52435 < count__51947_52434)){
var node_52436 = chunk__51946_52433.cljs$core$IIndexed$_nth$arity$2(null,i__51948_52435);
if(cljs.core.not(node_52436.shadow$old)){
var path_match_52437 = shadow.cljs.devtools.client.browser.match_paths(node_52436.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52437)){
var new_link_52438 = (function (){var G__52029 = node_52436.cloneNode(true);
G__52029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52437),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52029;
})();
(node_52436.shadow$old = true);

(new_link_52438.onload = ((function (seq__51942_52432,chunk__51946_52433,count__51947_52434,i__51948_52435,seq__51363,chunk__51365,count__51366,i__51367,new_link_52438,path_match_52437,node_52436,path,seq__51363__$1,temp__5804__auto__,map__51362,map__51362__$1,msg,updates,reload_info){
return (function (e){
var seq__52030_52440 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52032_52441 = null;
var count__52033_52442 = (0);
var i__52034_52443 = (0);
while(true){
if((i__52034_52443 < count__52033_52442)){
var map__52054_52445 = chunk__52032_52441.cljs$core$IIndexed$_nth$arity$2(null,i__52034_52443);
var map__52054_52446__$1 = cljs.core.__destructure_map(map__52054_52445);
var task_52447 = map__52054_52446__$1;
var fn_str_52448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52054_52446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52054_52446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52450 = goog.getObjectByName(fn_str_52448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52449)].join(''));

(fn_obj_52450.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52450.cljs$core$IFn$_invoke$arity$2(path,new_link_52438) : fn_obj_52450.call(null,path,new_link_52438));


var G__52451 = seq__52030_52440;
var G__52452 = chunk__52032_52441;
var G__52453 = count__52033_52442;
var G__52454 = (i__52034_52443 + (1));
seq__52030_52440 = G__52451;
chunk__52032_52441 = G__52452;
count__52033_52442 = G__52453;
i__52034_52443 = G__52454;
continue;
} else {
var temp__5804__auto___52455__$1 = cljs.core.seq(seq__52030_52440);
if(temp__5804__auto___52455__$1){
var seq__52030_52456__$1 = temp__5804__auto___52455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52030_52456__$1)){
var c__5568__auto___52457 = cljs.core.chunk_first(seq__52030_52456__$1);
var G__52458 = cljs.core.chunk_rest(seq__52030_52456__$1);
var G__52459 = c__5568__auto___52457;
var G__52460 = cljs.core.count(c__5568__auto___52457);
var G__52461 = (0);
seq__52030_52440 = G__52458;
chunk__52032_52441 = G__52459;
count__52033_52442 = G__52460;
i__52034_52443 = G__52461;
continue;
} else {
var map__52077_52462 = cljs.core.first(seq__52030_52456__$1);
var map__52077_52463__$1 = cljs.core.__destructure_map(map__52077_52462);
var task_52464 = map__52077_52463__$1;
var fn_str_52465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077_52463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52077_52463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52467 = goog.getObjectByName(fn_str_52465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52466)].join(''));

(fn_obj_52467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52467.cljs$core$IFn$_invoke$arity$2(path,new_link_52438) : fn_obj_52467.call(null,path,new_link_52438));


var G__52468 = cljs.core.next(seq__52030_52456__$1);
var G__52469 = null;
var G__52470 = (0);
var G__52471 = (0);
seq__52030_52440 = G__52468;
chunk__52032_52441 = G__52469;
count__52033_52442 = G__52470;
i__52034_52443 = G__52471;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52436);
});})(seq__51942_52432,chunk__51946_52433,count__51947_52434,i__51948_52435,seq__51363,chunk__51365,count__51366,i__51367,new_link_52438,path_match_52437,node_52436,path,seq__51363__$1,temp__5804__auto__,map__51362,map__51362__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52437], 0));

goog.dom.insertSiblingAfter(new_link_52438,node_52436);


var G__52472 = seq__51942_52432;
var G__52473 = chunk__51946_52433;
var G__52474 = count__51947_52434;
var G__52475 = (i__51948_52435 + (1));
seq__51942_52432 = G__52472;
chunk__51946_52433 = G__52473;
count__51947_52434 = G__52474;
i__51948_52435 = G__52475;
continue;
} else {
var G__52476 = seq__51942_52432;
var G__52477 = chunk__51946_52433;
var G__52478 = count__51947_52434;
var G__52479 = (i__51948_52435 + (1));
seq__51942_52432 = G__52476;
chunk__51946_52433 = G__52477;
count__51947_52434 = G__52478;
i__51948_52435 = G__52479;
continue;
}
} else {
var G__52480 = seq__51942_52432;
var G__52481 = chunk__51946_52433;
var G__52482 = count__51947_52434;
var G__52483 = (i__51948_52435 + (1));
seq__51942_52432 = G__52480;
chunk__51946_52433 = G__52481;
count__51947_52434 = G__52482;
i__51948_52435 = G__52483;
continue;
}
} else {
var temp__5804__auto___52484__$1 = cljs.core.seq(seq__51942_52432);
if(temp__5804__auto___52484__$1){
var seq__51942_52485__$1 = temp__5804__auto___52484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51942_52485__$1)){
var c__5568__auto___52486 = cljs.core.chunk_first(seq__51942_52485__$1);
var G__52487 = cljs.core.chunk_rest(seq__51942_52485__$1);
var G__52488 = c__5568__auto___52486;
var G__52489 = cljs.core.count(c__5568__auto___52486);
var G__52490 = (0);
seq__51942_52432 = G__52487;
chunk__51946_52433 = G__52488;
count__51947_52434 = G__52489;
i__51948_52435 = G__52490;
continue;
} else {
var node_52491 = cljs.core.first(seq__51942_52485__$1);
if(cljs.core.not(node_52491.shadow$old)){
var path_match_52492 = shadow.cljs.devtools.client.browser.match_paths(node_52491.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52492)){
var new_link_52493 = (function (){var G__52109 = node_52491.cloneNode(true);
G__52109.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52492),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52109;
})();
(node_52491.shadow$old = true);

(new_link_52493.onload = ((function (seq__51942_52432,chunk__51946_52433,count__51947_52434,i__51948_52435,seq__51363,chunk__51365,count__51366,i__51367,new_link_52493,path_match_52492,node_52491,seq__51942_52485__$1,temp__5804__auto___52484__$1,path,seq__51363__$1,temp__5804__auto__,map__51362,map__51362__$1,msg,updates,reload_info){
return (function (e){
var seq__52112_52494 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52114_52495 = null;
var count__52115_52496 = (0);
var i__52116_52497 = (0);
while(true){
if((i__52116_52497 < count__52115_52496)){
var map__52123_52498 = chunk__52114_52495.cljs$core$IIndexed$_nth$arity$2(null,i__52116_52497);
var map__52123_52499__$1 = cljs.core.__destructure_map(map__52123_52498);
var task_52500 = map__52123_52499__$1;
var fn_str_52501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52499__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123_52499__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52503 = goog.getObjectByName(fn_str_52501,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52502)].join(''));

(fn_obj_52503.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52503.cljs$core$IFn$_invoke$arity$2(path,new_link_52493) : fn_obj_52503.call(null,path,new_link_52493));


var G__52504 = seq__52112_52494;
var G__52505 = chunk__52114_52495;
var G__52506 = count__52115_52496;
var G__52507 = (i__52116_52497 + (1));
seq__52112_52494 = G__52504;
chunk__52114_52495 = G__52505;
count__52115_52496 = G__52506;
i__52116_52497 = G__52507;
continue;
} else {
var temp__5804__auto___52508__$2 = cljs.core.seq(seq__52112_52494);
if(temp__5804__auto___52508__$2){
var seq__52112_52509__$1 = temp__5804__auto___52508__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52112_52509__$1)){
var c__5568__auto___52510 = cljs.core.chunk_first(seq__52112_52509__$1);
var G__52511 = cljs.core.chunk_rest(seq__52112_52509__$1);
var G__52512 = c__5568__auto___52510;
var G__52513 = cljs.core.count(c__5568__auto___52510);
var G__52514 = (0);
seq__52112_52494 = G__52511;
chunk__52114_52495 = G__52512;
count__52115_52496 = G__52513;
i__52116_52497 = G__52514;
continue;
} else {
var map__52124_52516 = cljs.core.first(seq__52112_52509__$1);
var map__52124_52517__$1 = cljs.core.__destructure_map(map__52124_52516);
var task_52518 = map__52124_52517__$1;
var fn_str_52519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52517__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52517__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52521 = goog.getObjectByName(fn_str_52519,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52520)].join(''));

(fn_obj_52521.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52521.cljs$core$IFn$_invoke$arity$2(path,new_link_52493) : fn_obj_52521.call(null,path,new_link_52493));


var G__52522 = cljs.core.next(seq__52112_52509__$1);
var G__52523 = null;
var G__52524 = (0);
var G__52525 = (0);
seq__52112_52494 = G__52522;
chunk__52114_52495 = G__52523;
count__52115_52496 = G__52524;
i__52116_52497 = G__52525;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52491);
});})(seq__51942_52432,chunk__51946_52433,count__51947_52434,i__51948_52435,seq__51363,chunk__51365,count__51366,i__51367,new_link_52493,path_match_52492,node_52491,seq__51942_52485__$1,temp__5804__auto___52484__$1,path,seq__51363__$1,temp__5804__auto__,map__51362,map__51362__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52492], 0));

goog.dom.insertSiblingAfter(new_link_52493,node_52491);


var G__52526 = cljs.core.next(seq__51942_52485__$1);
var G__52527 = null;
var G__52528 = (0);
var G__52529 = (0);
seq__51942_52432 = G__52526;
chunk__51946_52433 = G__52527;
count__51947_52434 = G__52528;
i__51948_52435 = G__52529;
continue;
} else {
var G__52530 = cljs.core.next(seq__51942_52485__$1);
var G__52531 = null;
var G__52532 = (0);
var G__52533 = (0);
seq__51942_52432 = G__52530;
chunk__51946_52433 = G__52531;
count__51947_52434 = G__52532;
i__51948_52435 = G__52533;
continue;
}
} else {
var G__52534 = cljs.core.next(seq__51942_52485__$1);
var G__52535 = null;
var G__52536 = (0);
var G__52537 = (0);
seq__51942_52432 = G__52534;
chunk__51946_52433 = G__52535;
count__51947_52434 = G__52536;
i__51948_52435 = G__52537;
continue;
}
}
} else {
}
}
break;
}


var G__52538 = cljs.core.next(seq__51363__$1);
var G__52539 = null;
var G__52540 = (0);
var G__52541 = (0);
seq__51363 = G__52538;
chunk__51365 = G__52539;
count__51366 = G__52540;
i__51367 = G__52541;
continue;
} else {
var G__52542 = cljs.core.next(seq__51363__$1);
var G__52543 = null;
var G__52544 = (0);
var G__52545 = (0);
seq__51363 = G__52542;
chunk__51365 = G__52543;
count__51366 = G__52544;
i__51367 = G__52545;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52126){
var map__52128 = p__52126;
var map__52128__$1 = cljs.core.__destructure_map(map__52128);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52128__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52138){
var map__52139 = p__52138;
var map__52139__$1 = cljs.core.__destructure_map(map__52139);
var _ = map__52139__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52141,done,error){
var map__52142 = p__52141;
var map__52142__$1 = cljs.core.__destructure_map(map__52142);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52142__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52145,done,error){
var map__52146 = p__52145;
var map__52146__$1 = cljs.core.__destructure_map(map__52146);
var msg = map__52146__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52147){
var map__52148 = p__52147;
var map__52148__$1 = cljs.core.__destructure_map(map__52148);
var src = map__52148__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52148__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52149 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52149) : done.call(null,G__52149));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52150){
var map__52151 = p__52150;
var map__52151__$1 = cljs.core.__destructure_map(map__52151);
var msg__$1 = map__52151__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52151__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52152){var ex = e52152;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52153){
var map__52154 = p__52153;
var map__52154__$1 = cljs.core.__destructure_map(map__52154);
var env = map__52154__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52154__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52159){
var map__52160 = p__52159;
var map__52160__$1 = cljs.core.__destructure_map(map__52160);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52161){
var map__52162 = p__52161;
var map__52162__$1 = cljs.core.__destructure_map(map__52162);
var svc = map__52162__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52162__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
