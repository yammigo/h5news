!function(s,t){var n,o=["page","down","up"],l=ZZJK_adConfig;pageConfig={s:0,l:15,c:100,t:"asdf",sign:"asdf",math:Math.random().toString(36).slice(2),appKey:ZZJK_adConfig[CHANNEL_NAME].appKey,appSecret:ZZJK_adConfig[CHANNEL_NAME].appSecret,cid:"1557922176194341",cnt:"10",scene_type:"cs"},clisturl="http://www.huashengtoutiao.com/search/news/h5RecommendList",isStore=function(){if("object"!=typeof sessionStorage)return!1;try{return sessionStorage.setItem("isStore",1),sessionStorage.removeItem("isStore"),!0}catch(t){return alert("您正处于无痕模式浏览本站"),!1}}(),detailapi=function(){return"http://www.huashengtoutiao.com/search/news/detailNew/"+c.getUrlparam("","id")+"/"+c.getUrlparam("","pos")};var c={createlink:function(){},getUrlparam:function(t,e){var i="";if(!(1<(t=t||s.location.href.toString()).split("?").length))return"";i=t.split("?")[1].split("&");for(var a=0;a<i.length;a++)if(-1!==i[a].indexOf(e))return i[a].split("=")[1];return""},mergeObj:function(t,e){var i={};for(var a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);for(var s in e)e.hasOwnProperty(s)&&(i[s]=e[s]);return i},report:function(t,e){var i="/img";if((t=(t=t||i).replace(/^null/,i))&&e){var a=document.createElement("img"),s=[];for(var n in e)(e[n]||0===e[n])&&s.push(n+"="+encodeURIComponent(e[n]));a.onload=a.onerror=function(){a=a.onload=a.onerror=null},a.src=t+(t.indexOf("?")<0?"?":"&")+s.join("&")}},clipImg:function(t){t.each(function(t,e){e.onload=function(){var t=this.width,e=this.height;e<t?this.classList.add("iMGAUTOheight"):t<=e?this.classList.add("iMGAUTOwidth"):(this.style.width="100%",this.style.height="100%")}})},chechData:function(t,e,i){if(sessionStorage.getItem("DchechData")){var a=JSON.parse(sessionStorage.getItem("DchechData")).data;e==o[2]&&a.push.apply(a,i),sessionStorage.setItem("DchechData",JSON.stringify({key:t,data:e==o[0]?i:e==o[1]?i:a}))}else sessionStorage.setItem("DchechData",JSON.stringify({key:t,data:i}))},appendAD:function(t,e,i){$(t).prepend(e),$(e).on("load",function(){i&&i()})}},e={getdetails:function(t,e,i){var a=this;$.ajax({url:t,type:"post",dataType:"jsonp",data:e,timeout:8e3,jsonp:"callback",success:function(t){200==t.code&&i.call(a,t)},error:function(t){n.endErr()}})},runderAD:function(){var t=document.getElementById("track_AD");l[CHANNEL_NAME].details.topAD.domid="topAD",c.appendAD("#topAD",d.init(l[CHANNEL_NAME].details.topAD,!1));var e=[l[CHANNEL_NAME].details.bottomAD].concat(l[CHANNEL_NAME].details.RecommendList),i=Math.floor(Math.random()*e.length),a=e[i];Math.random()<.2?(t.style.position="absolute",a.domid="track_AD2",c.appendAD("#track_AD2",d.init(a,!1)),0<i&&(l[CHANNEL_NAME].details.bottomAD.domid="bottomAD",c.appendAD("#bottomAD",d.init(l[CHANNEL_NAME].details.bottomAD,!1)))):(t.style.position="",l[CHANNEL_NAME].details.bottomAD.domid="bottomAD",c.appendAD("#bottomAD",d.init(l[CHANNEL_NAME].details.bottomAD,!1))),l[CHANNEL_NAME].details.IlickAd.domid="AD_Ilick",c.appendAD("#AD_Ilick",d.init(l[CHANNEL_NAME].details.IlickAd,!0)),$("#pu-widget .linkAD").attr("href",l[CHANNEL_NAME].linkAD.details)},runderDetails:function(){var t=arguments[0];s.document.title=t.entity.title,$(".page-title").html(t.entity.title);var e=$("<div>"+t.entity.content+"</div>");return e.find("img").each(function(t,e){$(e).attr("data-src",e.src),e.src="/dist/img/imgloading.jpg"}),$(".article.container .a-art").html(e),$(".page-info.container.splitter").html('<span class="element"><em class="source_name">来源：'+t.entity.source+'</em></span><span class="element">刚刚</span>'),$(".copyright .element").html('<div class="element">版权声明：本文内容的组织和采编均来自'+t.entity.source+"。</div>"),t.ready?($(".article.container").css({height:"auto",display:"block"}),$("._1Dz8F").hide()):500<$(".article.container").height()?$(".article.container").css({height:"500px",display:"block"}):($(".article.container").css({height:"auto",display:"block"}),$("._1Dz8F").hide()),n.lazyLoad(200),$("._1Dz8F").on("click",function(){var t;$(this).hide(),$(".article.container").css({height:"auto",display:"block"}),sessionStorage.getItem("Dcontent")&&((t=JSON.parse(sessionStorage.getItem("Dcontent"))).ready=!0,sessionStorage.setItem("Dcontent",JSON.stringify(t)))}),$("body").addClass("pageShow"),t},readAd:function(t,e,s){s=s||2;var n=(e=e.slice()).length,i=l[CHANNEL_NAME].details.RecommendList;return t&&function(t,e,i){for(var a=0;a<n;a++)i[a]&&e.splice(s*a,0,i[a])}(0,e,i),e},getdata:function(t,e,i,a){var s=this;$.ajax({url:t,type:"get",dataType:"jsonp",data:e,timeout:8e3,jsonp:"callback",success:function(t){200==t.code?a.call(s,t.newsEntityList):n.endErr()},error:function(t){n.endErr()}})},render:function(){var t=arguments[0],e=0,i="";if(arguments[1]||l.hasOwnProperty("isc")||r.getP()||(t=this.readAd(!0,t)),0<t.length)for(;e<t.length;e++)t[e].pics&&t[e].pics.length<3?i+=this.styleDetail(t[e]):t[e].pics&&3<=t[e].pics.length&&!t[e].type?i+=this.styleDetail(t[e]):(t[e].type="ad")&&(i+=this.adStyle(t[e]));return{dom:$(i),data:t}},styleDetail:function(t){return'  <li class="n-item will-active news-item splitter container single-pic-item"><a                href="'+("http://m.ydtad.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+t.id+"&staticFile="+CHANNEL_NAME+"File")+("图片"==t.category?"?type=pic":"")+'"                class="n-item-link n-single-pic" title="'+t.title+'">                <div class="img fixed-size size-3-2" data-img-width="1/3">                    <div class="content"><img class="thumbnail-box"                            src="" data-src="'+t.pics[0]+'">                    </div>                </div>                <div class="n-title element"><span>'+t.title+'</span></div>                <div class="n-desc"><span class="info element"><span>'+("undefined"==t.source?"":t.source)+'</span><span class="n-ptime">刚刚</span></span>                </div>            </a></li>'},styleimg3:function(t,e){return'<li class="n-item will-active news-item splitter container newsBox"><a tagid="'+e+'"                    href="'+("http://m.ydtad.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+t.id+"&staticFile="+CHANNEL_NAME+"File")+'"                    class="n-item-link n-multipic" title="'+t.title+'">                    <div class="n-title element"><span>'+t.title+'</span></div>                    <div class="n-img-wrapper">                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+t.pics[0]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+t.pics[1]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+t.pics[2]+'">                            </div>                        </div>                    </div>                    <div class="n-desc"><span class="info element"><span>'+("undefined"==t.source?"":t.source)+'</span>                            <span class="n-ptime">刚刚</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a>            </li>'},adStyle:function(t){var e=t.s+"_"+Math.random().toString(36).slice(2);return t.domid=e,'<li class="n-item will-active news-item splitter container AD-box"><a target="_self"                    href="javascript:;"                    class="n-item-link n-multipic" style="overflow:hidden;">                    <div data-ZZJK-s='+t.s+' style="height:104px;" id="'+e+'">'+d.init(t,!0)+'</div>                     <div class="n-desc" style="display:none;"><span class="info element"><span></span>                            <span class="n-ptime">刚刚</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                </div>     </a></li>'}};var i,a,d=new ZZJKAD,r=new ZZJK_R;l.hasOwnProperty("isc")||r.getP()||e.runderAD(),n=new MeScroll("body",{down:{use:!1},up:{auto:!1,isBounce:!1,callback:function(t){n.showNoMore()},offset:0,lazyLoad:{use:!0,attr:"data-src",offset:500},onScroll:function(t){100<t.preScrollY?$(".scroll-top .icon-backTop").show():$(".scroll-top .icon-backTop").hide()},htmlNodata:'<p class="upwarp-nodata">暂无更多相关</p>'},clearEmptyId:"dataList"}),i={page:1},e.getdetails(detailapi(),i,function(t){t=this.runderDetails.apply(this,[t])}),(a=pageConfig).s=0,$("#dataList").empty(),e.getdata(clisturl,a,o[0],function(t){var e=this.render.apply(this,[t]);c.clipImg(e.dom.find("img")),$("#dataList").prepend(e.dom),$("#dataList").scrollTop(1)})}(window);