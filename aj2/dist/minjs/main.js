var CHANNEL_NAME="aj2";
;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    
    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));    
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    // docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('data-dpr', 1);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }
    

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }



})(window, window['lib'] || (window['lib'] = {}));

;(function(name,definition){
    if (typeof define === 'function') {
        // AMD环境或CMD环境
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }

})("ZZJK_R",function (){
    //用户行为上报地址
    var reportURL = '/search/dg/uaReport';
    //用户停留时长上报地址
    var timeURL = "/search/news/timeOnPage";
    var isCheat=false;
    //获取cookie
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }
    //设置cookie
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + expiredays * 24 * 60 * 60 * 1000);
        document.cookie = c_name + "=" + escape(value) +
            ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
    }
    //生成唯一标识
    /**
     * 
     * @param {number} len  长度
     * @param {number} radix 进制
     */
    function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    }
    //设置cookie
    function setCookie(key, val, time) {
        time = time || 360;
        var date = new Date();
        date.setTime((new Date()).getTime() + 86400000 * time);
        document.cookie = key + '=' + escape(val) + ';path=/;expires=' + date.toGMTString();
    }
    //获取cookie

    function getCookie(key) {
        var arr = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
        return null != arr ? unescape(arr[2]) : null;
    }

    //监控配置参数
    var config={ctr:{
        page:10000,
        show:5,
        api:20,
    }}
    function isLimit(cookieId){
        var rD=JSON.parse(getCookie('postData'));
        rD.list.nT=new Date().getTime();
          //处理时间
          function ctr(){
                var isc=false;
                var iscS=false;
                var CTR=rD.list.nT-rD.list.sT;
                console.log(rD,CTR);
                //单位时间内页面刷新异常
                if(CTR>=config.ctr.page){
                    if(rD.list.s/(CTR/config.ctr.page)>=config.ctr.show){
                        console.log("单位时间内页面刷新异常");
                        isc=true;
                        rD.list.isc=isc;
                        rD.list.iscS=new Date().getTime();
                        // sessionStorage.removeItem('chechData');
                    }
                    if(rD.list.g/(CTR/config.ctr.api)>=config.ctr.show){
                        console.log("单位时间内接口请求异常");
                        isc=true;
                        rD.list.isc=isc;
                        rD.list.iscS=new Date().getTime();
                        // sessionStorage.removeItem('chechData');
                       
                    }
                    rD.list.s=1;
                    rD.list.g=1;
                    rD.list.sT=new Date().getTime();
                    rD.list.nT=new Date().getTime(); 
                }
                
                if(rD.list.hasOwnProperty('iscS') && (new Date().getTime()-rD.list.iscS)>60000){
                    rD.list.isc=false;
                    delete rD.list.iscS;
                    console.log('放出来了');
                }

                setCookie('postData',JSON.stringify(rD));
                setCookie('ZZJK_userID',cookieId);
                //是否触发
                isCheat=isc;
                return isc;
          }

          return ctr();
          
          //单位时间内接口请求次数
          //UA是否为电脑端模拟

    }

    var utils = {
        //注入用户标识
        cookieId: (function () {
            var cookieId = getCookie("ZZJK_userID");
            var c_data = getCookie('postData');
            if (!cookieId || !c_data) {
                cookieId = uuid(20, 10);
                setCookie('ZZJK_userID', cookieId);
                //注入cookie
                var startD={list:{s:1,isc:false,g:0,sT:new Date().getTime(),nT:new Date().getTime()}};
                setCookie('postData',JSON.stringify(startD));
            }
              var rD=JSON.parse(getCookie('postData'));
              rD.list.s=rD.list.s+1;
              setCookie('postData',JSON.stringify(rD));
            //去检测是否触发限制
             isLimit(cookieId);
            return cookieId;
        })(),
        //img上报
        report: function (url, data) {
            var defaultUrl = '/img';
            url = url || defaultUrl;
            url = url.replace(/^null/, defaultUrl);
            if (!url || !data) {
                return;
            }
            var image = document.createElement('img');
            var items = [];
            for (var key in data) {
                if (data[key] || data[key] === 0) {
                    items.push(key + '=' + encodeURIComponent(data[key]));
                }
            }
            image.onload = image.onerror = function () {
                image = image.onload = image.onerror = null;
            };
            image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
        },
        getUrlparam: function (url, param) {
            var url = url || window.location.href.toString();
            var parArr = "";
            if (url.split("?").length > 1) {
                parArr = url.split("?")[1].split("&");
            } else {
                return "";
            }
            for (var i = 0; i < parArr.length; i++) {
                if (parArr[i].indexOf(param) !== -1) {
                    return parArr[i].split("=")[1];
                }
            }
            return "";
        }
    }
    /*
     上报用户行为
    */

    //上报页面展现
    function showView() {
        
        // utils.report(reportURL,{"cid":utils.cookieId,"action_type":"rec_view","itemid":utils.getUrlparam("id"),"_":Math.random().toString(36).slice(2)});
    }

    // $('.mescroll .news-list').on('click','.n-item a',function(){
    //       //上报点击行为
    //     //   utils.report(reportUrl,{name:'fanjiantao',type:'type'});
    // });
    

    //对外输出接口
    function ZZJK_R(){}
    //记录接口（基础数据+1）
    ZZJK_R.prototype.setP=function(o){
                var cookieId = getCookie("ZZJK_userID");
                var c_data = getCookie('postData');
                if (!cookieId || !c_data) {
                    cookieId = uuid(20, 10);
                    setCookie('ZZJK_userID', cookieId);
                    //注入cookie
                    var startD={list:{s:1,isc:false,g:0,sT:new Date().getTime(),nT:new Date().getTime()}};
                    setCookie('postData',JSON.stringify(startD));
                }
                var rD=JSON.parse(getCookie('postData'));
                rD.list[o]+= 1;
                rD.list.nT=new Date().getTime();
                setCookie('postData',JSON.stringify(rD));
               
                //去检测是否触发限制       
    }
    //获取是否触发反作弊规则
    ZZJK_R.prototype.getP=function(){
        return JSON.parse(getCookie('postData')).list.isc;
    }
    ZZJK_R.prototype.setUp=function(){
        //上报接口获取
        this.setP("g");
    }
    ZZJK_R.prototype.setDown=function(){
        //下拉或者页面首屏展现
        this.setP("s");
    }
    return ZZJK_R
})
//创建广告类型
;(function (name, definition) {
    if (typeof define === 'function') {
        // AMD环境或CMD环境
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }
})('ZZJKAD', function () {
    var ZZJKAD = function () {
        var fan = this;
        this.sougou=false;
        this.baidu=false;
    }
    //依赖注入
    ZZJKAD.prototype.defineJS = function(a,b){

        //载入广告所依赖的js库
        var c = document.createElement("script");
        c.async = true,
        c.type = "text/javascript",
        c.src = a,
        c.onload = c.onreadystatechange = function() {
            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (this.onload = this.onreadystatechange = null, this.parentNode.removeChild(this), "function" == typeof b && b())
        },
        document.getElementsByTagName("head")[0].appendChild(c);
    }
    //搜狗广告
    ZZJKAD.prototype.sougoAD = function (domid, adid,async) {
        //搜狗广告依赖注入
        if(!this.sougou){
            this.sougou=true;
            console.log('搜狗依赖完成注入');
        }else{
            console.log('搜狗依赖已注入不再重复加载');
        }
        return '<script>(window.sogou_un=window.sogou_un || []).push({id:"' + adid + '",ele:"' + document.getElementById(domid) + '"});</script>'
    }
    //百度广告 测试成功
    ZZJKAD.prototype.baiduAD = function (domid, adid, async) {
        //百度广告依赖注入
        if(!this.baidu){
            this.baidu=true;
            console.log('百度赖完成注入');
        }else{
            console.log('百度依赖不在重复加载');
        }
        return '<script>(window.slotbydup=window.slotbydup || []).push({id:"' + adid + '",container:"' + domid + '"});</script>';
    }
    //星辰广告异步懒加载 测试成功
    ZZJKAD.prototype.xcAD = function (smua,async) { 
        return '<script type="text/javascript" smua="' + smua + '" '+(async?"data-":"")+'src="//www.smucdn.com/smu0/o.js" ></script>';
    }
    //百姓广告异步懒加载 测试成功
    ZZJKAD.prototype.bxAD = function (src,async) {
        return '<script type="text/javascript"  '+(async?"data-":"")+'src="'+src+'" ></script>';
    }
    //众盟广告异步按需加载  测试成功
    ZZJKAD.prototype.zmAD = function (domid, adid,async) {
        return '<script type="text/javascript"  '+(async?"data-":"")+'src="//i.hao61.net/d.js?cid=' + adid + '&_ct=' + domid + '"></script>';
    }

    ZZJKAD.prototype.init = function (data,async) {
        //返回需要的的广告代码进行填充（百度未支持懒加载）async默认异步,不异步则传入true
        var async=arguments.length>1?async:true;
        // console.log(async+"adtype"+JSON.stringify(data),'是否异步');
        //对参数进行过滤
        switch (data.s) {
            case "sougoAD":
                return this.sougoAD(data.domid,data.adid,async);
                break;
            case "baiduAD":
               return  this.baiduAD(data.domid,data.adid,async);
                break;
            case "xcAD":
               return this.xcAD(data.smua,async);
                break;
            case "bxAD":
               return this.bxAD(data.src,async);
                break;
            case "zmAD":
                return this.zmAD(data.domid,data.adid,async);
                break;
            default:
                return "<span>加载失败</span>"
        }
    }

    //返回实例方法支持cmd 和 amd引入
    return ZZJKAD;

})
/**fanjiantao */
;(function (window, $, undefined) {
    var mescroll, errCode = 200, getType = ['page', 'down', 'up'],BOXADID = [], ADCODE = [],
        adConfig = ZZJK_adConfig,//导入配置文件
        pageConfig = {
            s: 0,
            l: 5,
            c: 1,
            t: "asdf",
            sign: 'asdf',
            math: Math.random().toString(36).slice(2),
            appKey: adConfig[CHANNEL_NAME].appKey,
            appSecret: adConfig[CHANNEL_NAME].appSecret,
            cid: '1557922176194341',
            cnt: '10',
            scene_type: 'cs'
        },
        clisturl = (function () {
            return "http://www.huashengtoutiao.com/search/news/clistNew";
        })(),
        isStore=(function(){
            if(typeof sessionStorage === 'object'){
                 try{
                     sessionStorage.setItem('isStore',1);
                     sessionStorage.removeItem('isStore');
                     return true;
                 }catch(e){
                      alert('您正处于无痕模式浏览本站');
                      return false;
                 }
            }else{
                 return false;
            }
        })();
    //导航区域
    !function () {
        //渲染导航数据
        function navName(c_nav, crateId) {
            //缓存当前阅读频道频道
            pageConfig.c = crateId;
            sessionStorage.setItem("pagecount",c_nav);
            sessionStorage.setItem("crateId",crateId);
        }

        $(".find_nav_list").css("left", sessionStorage.getItem("left") + "px");
        $(".find_nav_list li").each(function () {

            if ($(this).find("a").text() == sessionStorage.getItem("pagecount")) {
                $(".sideline").css({
                    left: $(this).position().left + 13
                });
                $(".sideline").css({
                    width: $(this).outerWidth() - 26
                });
                $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
                navName(sessionStorage.getItem("pagecount"), $(this).find('a').attr('data-zzjkc-crate'));
                return false
            } else {
                $(".sideline").css({
                    left: 13
                });
                $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            }
        });
        var nav_w = $(".find_nav_list li").first().width();
        $(".sideline").width(nav_w - 26);
        $(".find_nav_list li").on('click', function () {
            window.document.title = $(this).find("a").text();
            nav_w = $(this).width();
            $(".sideline").stop(true);
            $(".sideline").css({
                left: $(this).position().left + 13
            });
            $(".sideline").css({
                width: nav_w - 26
            });
            $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            var fn_w = ($(".find_nav").width() - nav_w) / 2;
            var fnl_l;
            var fnl_x = parseInt($(this).position().left);
            if (fnl_x <= fn_w) {
                fnl_l = 0;
            } else if (fn_w - fnl_x <= flb_w - fl_w) {
                fnl_l = flb_w - fl_w;
            } else {
                fnl_l = fn_w - fnl_x;
            }
            $(".find_nav_list").animate({
                "left": fnl_l
            }, 300);
            sessionStorage.setItem("left",fnl_l);
            var c_nav = $(this).find("a").text();
            var c_id = $(this).find("a").attr('data-zzjkc-crate')
            navName(c_nav, c_id);

            //点击频道初始化频道数据
            pageConfig.c = Number(c_id);
            initPage(pageConfig);

        });
        var fl_w = $(".find_nav_list").width();
        var flb_w = $(".find_nav_left").width();
        $(".find_nav_list").on('touchstart', function (e) {
            var e = e || window.event;
            var touch1 = e.originalEvent.targetTouches[0];
            x1 = touch1.pageX;
            y1 = touch1.pageY;
            ty_left = parseInt($(this).css("left"));
        });
        $(".find_nav_list").on('touchmove', function (e) {
            var e = e || window.event;
            var touch2 = e.originalEvent.targetTouches[0];
            var x2 = touch2.pageX;
            var y2 = touch2.pageY;
            if (ty_left + x2 - x1 >= 0) {
                $(this).css("left", 0);
            } else if (ty_left + x2 - x1 <= flb_w - fl_w) {
                $(this).css("left", flb_w - fl_w);
            } else {
                $(this).css("left", ty_left + x2 - x1);
            }
            if (Math.abs(y2 - y1) > 0) {
                e.preventDefault();
            }
        });
    }();

    function configmescroll() {
        // init mescroll
        mescroll = new MeScroll("mescroll", {
            down: {
                auto: false,
                callback: downCallback
            },
            up: {
                auto: false,
                isBounce: false,
                callback: upCallback,
                offset: 500
                , lazyLoad: {
                    use: true,
                    attr: 'data-src',
                    offset: 300,

                },
                //监听滚动
                onScroll:onScroll, 
                
            },
            htmlNodata: '<p class="upwarp-nodata">-- 无更多相关了 --</p>',
            scrollbar: {
                use: true,
                barClass: "mescroll-bar",
            }
        });
        //下拉刷新回调
        function downCallback() {
            pageConfig.s +=5;
            downRef(pageConfig);

        }
        //上拉加载回调
        function upCallback(page) {
            pageConfig.s += 5;
            upref(pageConfig);
        }
        //滚动监听回调
        function onScroll(e){
            if(e.preScrollY>100){
                $('.scroll-top .icon-backTop').show();
            }else{
                $('.scroll-top .icon-backTop').hide();
            }
            
        }
    }
    //工具函数
    var utils = {
        showtips:function(msg){
            console.log(msg);
    
            $(".freshtip").html(msg).show();
            if(!$(".freshtip").is(':hidden')){
                setTimeout(function(){
                    $(".freshtip").hide();
                },1000);
            }              
        },
        //formmate
        timestampToTime:function(timestamp) {
                var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() < 10 ?  '0'+date.getDate()+ ' ' : date.getDate()+ ' ';
                var h = date.getHours() < 10 ? '0'+date.getHours()+ ':' : date.getHours()+ ':';
                var m = date.getMinutes() < 10 ? '0'+date.getMinutes()+ ':' : date.getMinutes()+ ':';
                var s = date.getSeconds()< 10 ? '0'+date.getSeconds() : date.getSeconds();
                return Y+M+D+h+m+s;
        },
        //合并对象
        mergeObj: function (a, b) {
            var result = {};
            for (var p in a) {
                if (a.hasOwnProperty(p)) {
                    result[p] = a[p];
                }
            }
            for (var q in b) {
                if (b.hasOwnProperty(q)) {
                    result[q] = b[q];
                }
            }
            return result;
        },
        //上报数据
        report: function (url, data) {
            var defaultUrl = '/img';
            url = url || defaultUrl;
            url = url.replace(/^null/, defaultUrl);
            if (!url || !data) {
                return;
            }
            var image = document.createElement('img');
            var items = [];
            for (var key in data) {
                if (data[key] || data[key] === 0) {
                    items.push(key + '=' + encodeURIComponent(data[key]));
                }
            }
            image.onload = image.onerror = function () {
                image = image.onload = image.onerror = null;
            };
            image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
        },
        //图片裁切优化
        clipImg(imglist) {
            //图片裁切方案
            imglist.each(function (index, img) {
                img.onload = function () {
                    var width = this.width;
                    var height = this.height;
                    if (width > height) {
                        this.classList.add('iMGAUTOheight');
                    } else if (width <= height) {
                        this.classList.add('iMGAUTOwidth');
                    } else {
                        this.style.width = '100%';
                        this.style.height = '100%';
                    }
                }

            })
        },
        //缓存数据
        chechData: function (key, type, data) {
            if (sessionStorage.getItem("chechData")) {
                var olddata = JSON.parse(sessionStorage.getItem("chechData")).data;
                // console.log(olddata,'合并前的缓存');
                if (type == getType[2]) {
                    olddata.push.apply(olddata, data);

                }
                sessionStorage.setItem("chechData",JSON.stringify({
                    key: key,
                    data: type == getType[0] ? data : type == getType[1] ? data : olddata,
                }));
            } else {

                sessionStorage.setItem("chechData",JSON.stringify({
                    key: key,
                    data: data,
                }));
            }

        }

    }

    //模版函数
    //调用逻辑 getdata(数据）->readAD(插广告数据)->render(渲染ui)
    var template = {
        formatDate:function(t){ 
            function getTime(t){
                var newtime= t.split('');
                newtime.splice(4,0,"/");
                newtime.splice(7,0,"/");
                newtime.splice(10,0,"/");
                newtime.splice(13,0,"/");
                newtime.splice(16,0,"/");
                var newarr=newtime.join('').split("/");
                return  new Date(newarr[0]+"/"+newarr[1]+"/"+newarr[2]).getTime()+newarr[3]*3600*1000+newarr[4]*60*1000+newarr[5]*1000;  
            }
            var time=getTime(t)
            var pubsh = new Date(time);    
            var pubshtime = parseInt(Date.parse(new Date(time))/1000);
            var now = parseInt(Date.parse(new Date())/1000);
            var nowtime = new Date();    
            var nowY=nowtime.getFullYear();
            var nowM=parseInt(nowtime.getMonth())+1;
            var nowD=nowtime.getDate();
            var todaytime = parseInt(Date.parse(new Date(nowY+"/"+nowM+"/"+nowD+" 00:00:00"))/1000); //今天0点0分时间戳
            var nowh=nowtime.getHours();
            var nowm=nowtime.getMinutes();
            var yesterdaytime = todaytime-24*60*60; //昨天0点0分时间戳
            var idate = '';
            if(pubshtime<yesterdaytime){
                idate = pubsh.getMonth()+"月"+pubsh.getDate()+"日";
            }else if(pubshtime>yesterdaytime && pubshtime<todaytime ){
                idate = '昨天 '+ ('0'+pubsh.getHours()).slice(-2) +':'+ ('0'+pubsh.getMinutes()).slice(-2) ;
            }else{
                var cha = now-pubshtime;
                if(cha<=60){
                    // idate = cha+'秒之前';
                    idate = '刚刚';
                }else if(cha>60 && cha<=3600){
                    idate = parseInt(cha/60)+'分钟前';
                }else if(cha>3600){
                    idate = parseInt(cha/3600)+'小时前';
                }
            }                
            return idate;
        },
        readAd: function (isAD, data, adIndex) {
            function shuffle(arr) { 
                var i = arr.length, t, j; 
                while (i) { 
                  j = Math.floor(Math.random() * i--); 
                  t = arr[i]; 
                  arr[i] = arr[j]; 
                  arr[j] = t; 
                } 
               return arr.slice(0,5);
              }
            var adIndex = adIndex || 1
            //读取广告配置并插入广告数据(列表轮换取代码)；
            var data = data.slice(), len = data.length, adlist = (pageConfig.c == '21' ? adConfig[CHANNEL_NAME].priclist : adConfig[CHANNEL_NAME].newsListAD);
            //var adlist = adlist.sort(function(){return 0.5-Math.random()}).slice(0,5);
            var adlist = shuffle(adlist);
            isAD && (function (that, data, adlist) {
                var i = 0;
                for (i; i < len; i++) {
                    if (adlist[i]) {
                        data.splice((adIndex + 1) * i, 0, adlist[i]);
                    }
                }
            }(this, data, adlist))

            return data;

        },
        getdata: function (url, data, type, callback) {
            //console.log(url, data, type, callback);
            var that = this;
            $.ajax({
                url: url,
                type: "post",
                dataType: "jsonp",
                data: data,
                timeout: 8000,
                jsonp: 'callback',
                success: function (res) {
                    if (res.code == errCode) {

                        //返回加载后的数据
                        callback.call(that, res.newsEntityList);

                    } else {
                       
                        mescroll.endSuccess();
                    }
                },
                error: function (e) {
                    mescroll.endErr();
                   
                }
            })
        },
        mistakeClick:function(){
            //读取配置概率
            var probability=adConfig[CHANNEL_NAME].probability.newsList;
            //信息流误点处理
            var arg_data=""
            if(arguments.length==1){
                arg_data=arguments[0];
                var listDom=arg_data.dom; 
                listDom.each(function(index,item){
                    if($(item).is('.AD-box')&&(Math.random()<=probability)&&index!==0){
                         $(listDom[index]).prev().append(item);
                          item.style.opacity="0.001";
                          item.style.position="absolute";
                          item.style.top="0px";
                          item.style.width="100%";
                          //执行后删除被替换广告的的dom节点
                          listDom.splice(index,1);
                    }
                });
                //返回新的信息流列表
                return listDom

            }else{
                return false;
            }
            
        },
        render: function () {
        
            var data = arguments[0], i = 0, str = "";
            
            if (!arguments[1]) {
                if(adConfig.hasOwnProperty('isc') || hasctr.getP()){
                    //进入了监控状态屏蔽广告
                }else{
                    data = this.readAd(true, data);//插入广告后的数据
                } 
            }
            
            //广告列表单页长度超过40启用懒加载加载广告
            var async=data.length>25?true:false;
            // console.log(data.length>30,'是否异步');
            //判断列表图片
            if (data.length > 0) {
                for (i; i < data.length; i++) {
                    if (data[i].category != "图片" && data[i].pics && data[i].pics.length < 3) {

                        str += this.styleimg1(data[i],i);
                    } else if (data[i].category != "图片" && data[i].pics && data[i].pics.length >= 3 && !data[i].type) {

                        str += this.styleimg3(data[i],i);
                    } else if (data[i].category == "图片") {

                        str += this.pricImg(data[i],i);
                    } else if (data[i].type = 'ad') {
                        if(adConfig.hasOwnProperty('isc') || hasctr.getP()){
                           
                        }else{
                            str += this.adStyle(data[i],i,async);
                        }
                    }
                }

            }
          
            //加入误点后的操作数据
            try {
                //读取误点配置
                var probability=adConfig[CHANNEL_NAME].probability.newsList;
            } catch (error) {
                console.warn(error);
                var probability="";
            }
          
            if(probability && typeof probability!=="{}"){
                //误点操作
                var newdom=this.mistakeClick.call(this,{ dom: $(str), data: data });
                return {dom:newdom,data:data}
            }else{
                return { dom: $(str), data: data }
            }

            //返回插入广告后的dom,和载入广告后的数据
            // return { dom: $(str), data: data }
        },
        styleimg3: function (data,i) {
            var url="http://bjyuedu.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
            return '<li class="n-item will-active news-item splitter container newsBox"><a tagid="'+i+'"' +
                '                    href="'+ url + '"' +
                '                    class="n-item-link n-multipic" title="' + data.title + '">' +
                '                    <div class="n-title element"><span>' + data.title + '</span></div>' +
                '                    <div class="n-img-wrapper">' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[0] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[1] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[2] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                    </div>' +
                '                    <div class="n-desc"><span class="info element"><span>' + (data.source=="undefined"?"":data.source) + '</span>' +
                '                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(data.createdatemmsshh)+'</span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:' + 10 + '元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                    </div>' +
                '                </a>' +
                '            </li>';
        },
        styleimg1: function (data,i) {
            var url="http://bjyuedu.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
            return '<li class="n-item will-active news-item splitter container single-pic-item newsBox"><a tagid="'+i+'" ' +
                '                    href="' + url + '"' +
                '                    class="n-item-link n-single-pic" title="' + data.title + '">' +
                '                    <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                        <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"' +
                '                              src="" data-src="' + data.pics[0] + '">' +
                '                        </div>' +
                '                    </div>' +
                '                    <div class="n-title element"><span>' + data.title + '</span></div>' +
                '                    <div class="n-desc"><span class="info element"><span>' + (data.source=="undefined"?"":data.source) + '</span>' +
                '                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(data.createdatemmsshh)+'</span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:' + 10 + '元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                    </div>' +
                '                </a>' +
                '  </li>';
        },
        pricImg: function (data,i) {
            var url="http://bjyuedu.com/"+CHANNEL_NAME+"File/webview/detail_img.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
            return '<li class="n-item container will-active splitter image-item big-pic-item"><a' +
                '                    href="' + url + '?type=pic"  class="n-item-link"' +
                '                    title="' + data.title + '" tagid="'+i+'">' +
                '                    <div class="n-title element"><span>' + data.title + '</span></div>' +
                '                    <div class="image-img img fixed-size size-2-1">' +
                '                        <div class="content"  data-image-count="' + data.imageCount + '"><img class="thumbnail-box"' +
                '                                src="" data-src="' + data.pics[0] + '">' +
                '                        </div>' +
                '                    </div>' +
                '                    <div class="n-desc"><span class="info element"><span style="color: #f96363;">' + (data.source=="undefined"?"":data.source) + '</span><span class="n-ptime" style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(data.createdatemmsshh)+'</span></span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:2.9元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                    </div>' +
                '                </a></li>';
        },
        adStyle: function (data,i,async) {
            var domid = data.s + "_" + Math.random().toString(16).slice(2);
            data.domid = domid;
            // BOXADID.push(domid);
            // ADCODE.push(crateAd.init(data, async));
            return '<li class="n-item will-active news-item splitter container AD-box"><a' +
                '                    href="javascript:;"' +
                '                    class="n-item-link n-multipic" tagid="'+i+'">' +
                '                    <div class="adbox" style="width:100%;position:relative;height:'+((pageConfig.c=='21')?'220px':'105px')+'" data-ZZJK-s=' + data.s + '><div id="' + domid + '">' +crateAd.init(data,async)+ '</div></div> ' +
                '                    <div class="n-desc"><span class="info element"><span></span>' +
                '                            <span class="n-ptime">刚刚</span></span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:' + 10 + '元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                    </div>' +
                '     </a>' +
                '</li>';
        }

    };
   
    //获取cookie
    function getCookie(c_name){
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return ""
    }

    //设置cookie
    function setCookie(c_name,value,expiredays){
        var exdate=new Date();
        exdate.setTime(exdate.getTime()+expiredays*24*60*60*1000);
        document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
    }
     //异步渲染js广告
     function asyncAD(t) {
        var t = t || 0
        for (var index = 0, len = BOXADID.length; index < len; index++) {
            (function (index) {
                setTimeout(function () {
                    $("#" + BOXADID[index]).append(ADCODE[index]);
                }, index * 10 + t);
            })(index)

        }
    }

    //初始化当前频道的数据
    function initPage(posdata) {
        //清空dom结构
        
        posdata.s = 0;
        $('#mescroll .news-list').empty();
        mescroll.showUpScroll();
        template.getdata(clisturl, posdata, getType[0], function (data) {
        //上报页面接口刷新
            hasctr.setDown();
            var runderData = this.render.apply(this, [data]);
            utils.chechData(pageConfig.c, getType[0], runderData.data);
            utils.clipImg(runderData.dom.find('img'));
            $(".ZZJK_L .news-list").prepend(runderData.dom);
           
            //完成下拉刷新；
            mescroll.endUpScroll();
            mescroll.lazyLoad(200);
            //处理首屏数据无法懒加载BUG
            // $('.mescroll').scrollTop(1);
        });
    }

    // 下拉刷新获取新数据
    function downRef(postdata) {
        template.getdata(clisturl, postdata, getType[1], function (data) {
            //上报页面接口刷新
            hasctr.setDown();
            $('#mescroll .news-list').empty();
            //The function return dom and listdata
            var runderData = this.render.apply(this, [data]);
            utils.chechData(postdata.c, getType[1], runderData.data);
            utils.clipImg(runderData.dom.find('img'));
            $(".ZZJK_L .news-list").prepend(runderData.dom);
           
            mescroll.lazyLoad(200);
            mescroll.endSuccess();
            utils.showtips('为你更新'+(runderData.data.length)+'条内容');
        });

    }

    //上拉加载数据
    function upref(postdata) {
        template.getdata(clisturl, postdata, getType[2], function (data) {
            //上报接口亲求
            hasctr.setUp();
            //The function return dom and listdata
            var runderData = this.render.apply(this, [data]);
            utils.chechData(postdata.c, getType[2], runderData.data);
            utils.clipImg(runderData.dom.find('img'));

            $(".ZZJK_L .news-list").append(runderData.dom);
           
            mescroll.lazyLoad(200);

            // //完成下拉刷新；
            mescroll.endSuccess();
        });
    }

    //渲染缓存数据
    function chechRender() {
        pageConfig.c = sessionStorage.getItem("crateId");
        var runderData = template.render.apply(template, [JSON.parse(sessionStorage.getItem("chechData")).data, true]);
        utils.clipImg(runderData.dom.find('img'));
        $(".ZZJK_L .news-list").append(runderData.dom);
       
        mescroll.lazyLoad(200);
        //解决懒加载bug
        sessionStorage.getItem("scrollTop") ? (Number(sessionStorage.getItem("scrollTop")) > 1 ? $('.mescroll').scrollTop(sessionStorage.getItem("scrollTop")) : $('.mescroll').scrollTop(1)) : $('.mescroll').scrollTop(1);

    }

    //初始化创建广告类型
    var crateAd = new ZZJKAD();
    //初始化页面反作弊
    /**
     * hasctr.getP() 获取是否作弊 return true and false
     * hasctr.setUp() 上报 上拉获取数据接口
     */
    var hasctr=new ZZJK_R();
    //渲染详情红包链接
    ZZJK_adConfig.hasOwnProperty('isc')||$('#pu-widget .linkAD').attr("href", adConfig[CHANNEL_NAME].linkAD.newslist);
    //检测频道id是否存在
    if (!sessionStorage.getItem("crateId") ||sessionStorage.getItem("crateId") == '') {
        sessionStorage.setItem("crateId",1);
        pageConfig.c = 1;
    }

    //初始化滚动容器
    configmescroll();//初始化下拉

    //初始化数据
    !sessionStorage.getItem("chechData") ? initPage(pageConfig) : chechRender();
    
    $("#mescroll .news-list").on('click',"li a",function(){
        //记录滚动的位置
        sessionStorage.setItem("scrollTop",$('.mescroll').scrollTop())
 
    })

    //离开当前页时存储数据
    window.onbeforeunload = function () {
        //缓存数据
        sessionStorage.setItem("scrollTop",$('.mescroll').scrollTop())
    }

    
})(window, jQuery, undefined)
/**fanjiantao */
;(function (window, undefined) {
    var mescroll, errCode = 200, getType = ['page', 'down', 'up'],
        adConfig = ZZJK_adConfig
    pageConfig = {
        s: 0,
        l: 15,
        c: 100,
        t: "asdf",
        sign: 'asdf',
        math: Math.random().toString(36).slice(2),
        appKey: ZZJK_adConfig[CHANNEL_NAME].appKey,
        appSecret: ZZJK_adConfig[CHANNEL_NAME].appSecret,
        cid: '1557922176194341',
        cnt: '10',
        scene_type: 'cs'
    },
        clisturl = (function () {
            // this is window
            return "http://www.huashengtoutiao.com/search/news/h5RecommendList";
        })(),
        //预防网站使用无痕浏览报错
        isStore = (function () {
            if (typeof sessionStorage === 'object') {
                try {
                    sessionStorage.setItem('isStore', 1);
                    sessionStorage.removeItem('isStore');
                    return true;
                } catch (e) {
                    alert('您正处于无痕模式浏览本站');
                    return false;
                }
            } else {
                return false;
            }
        })(),
        detailapi = function () {

            return "http://www.huashengtoutiao.com/search/news/detailNew/" + utils.getUrlparam("", 'id') + "/" + utils.getUrlparam("", "pos");

        };
    function configmescroll() {
        // init mescroll
        mescroll = new MeScroll("body", {
            down: {
                use: false,
            },
            up: {
                auto: false,
                isBounce: false,
                callback: upCallback,
                offset: 0
                , lazyLoad: {
                    use: true,
                    attr: 'data-src',
                    offset: 500,
                },
                onScroll: onScroll,
                htmlNodata: '<p class="upwarp-nodata">暂无更多相关</p>'

            },
            clearEmptyId: "dataList",
        });

        //上拉加载回调
        function upCallback(page) {
            // console.log("上拉加载");
            // mescroll.endSuccess();
            mescroll.showNoMore();
            // setTimeout(function () {
            //     mescroll.endErr();
            // }, 500)
            // pageConfig.s += 15;
            // console.log(pageConfig, "开始加载的下标");
            // upref(pageConfig);
        }
        //滚动监听回调
        function onScroll(e) {
            if (e.preScrollY > 100) {
                $('.scroll-top .icon-backTop').show();
            } else {
                $('.scroll-top .icon-backTop').hide();
            }

        }
    }
    //工具函数
    var utils = {
        //创建红包模块
        createlink: function () {

        },
        //创建
        getUrlparam: function (url, param) {
            var url = url || window.location.href.toString();
            var parArr = ""
            if (url.split("?").length > 1) {
                parArr = url.split("?")[1].split("&");
            } else {
                return ""
            }
            for (var i = 0; i < parArr.length; i++) {
                if (parArr[i].indexOf(param) !== -1) {
                    return parArr[i].split("=")[1];
                }
            }
            return ""
        },
        //合并对象
        mergeObj: function (a, b) {
            var result = {};
            for (var p in a) {
                if (a.hasOwnProperty(p)) {
                    result[p] = a[p];
                }
            }
            for (var q in b) {
                if (b.hasOwnProperty(q)) {
                    result[q] = b[q];
                }
            }
            return result;
        },
        //上报数据
        report: function (url, data) {
            var defaultUrl = '/img';
            url = url || defaultUrl;
            url = url.replace(/^null/, defaultUrl);
            if (!url || !data) {
                return;
            }
            var image = document.createElement('img');
            var items = [];
            for (var key in data) {
                if (data[key] || data[key] === 0) {
                    items.push(key + '=' + encodeURIComponent(data[key]));
                }
            }
            image.onload = image.onerror = function () {
                image = image.onload = image.onerror = null;
            };
            image.src = url + (url.indexOf('?') < 0 ? '?' : '&') + items.join('&');
        },
        //图片裁切优化获得合适的尺寸
        clipImg(imglist) {
            //图片裁切方案
            imglist.each(function (index, img) {
                img.onload = function () {
                    var width = this.width;
                    var height = this.height;
                    if (width > height) {
                        this.classList.add('iMGAUTOheight');
                    } else if (width <= height) {
                        this.classList.add('iMGAUTOwidth');
                    } else {
                        this.style.width = '100%';
                        this.style.height = '100%';
                    }
                }

            })
        },
        //缓存数据
        chechData: function (key, type, data) {
            if (sessionStorage.getItem("DchechData")) {
                var olddata = JSON.parse(sessionStorage.getItem("DchechData")).data;

                if (type == getType[2]) {
                    olddata.push.apply(olddata, data);
                }

                sessionStorage.setItem("DchechData", JSON.stringify({
                    key: key,
                    data: type == getType[0] ? data : type == getType[1] ? data : olddata,
                }));
            } else {

                sessionStorage.setItem("DchechData", JSON.stringify({
                    key: key,
                    data: data,
                }));
            }

        },
        //插入广告
        appendAD: function (id, ad, c) {

            $(id).prepend(ad);
            $(ad).on('load', function () {
                c ? c() : '';
            });
        }

    }

    //模版函数
    //调用逻辑 getdata(数据）->readAD(插广告)->render(渲染数据)
    var template = {
        //获取详情数据
        getdetails: function (url, data, callback) {
            var that = this;
            $.ajax({
                url: url,
                type: "post",
                dataType: "jsonp",
                data: data,
                timeout: 8000,
                jsonp: 'callback',
                success: function (res) {
                    if (res.code == errCode) {
                        //返回加载后的数据
                        callback.call(that, res);
                    }
                },
                error: function (e) {
                    mescroll.endErr();
                }
            })

        },
        //渲染详情页非列表区域广告;
        runderAD: function () {
            var dom = document.getElementById("track_AD");
            //添加头部广告
            adConfig[CHANNEL_NAME].details.topAD.domid = "topAD";
            utils.appendAD('#topAD', crateAd.init(adConfig[CHANNEL_NAME].details.topAD, false));
            var track_ADList = [adConfig[CHANNEL_NAME].details.bottomAD].concat(adConfig[CHANNEL_NAME].details.RecommendList);

            var track_AD_index = Math.floor(Math.random() * track_ADList.length);
            var track_AD = track_ADList[track_AD_index];
            //添加内容底部广告
            if (Math.random() < 0.3) {
                dom.style.position = "absolute";
                track_AD.domid = "track_AD2";
                utils.appendAD('#track_AD2', crateAd.init(track_AD, false));
            } else {
                dom.style.position = "";
                track_ADList.splice(track_AD_index, 1);
                track_AD.domid = "bottomAD";
                utils.appendAD('#bottomAD', crateAd.init(track_ADList[0], false));
            }
        
            // if(track_ADList>1){
            //      //内容广告展现曝光稀释点击稀释
            //     track_ADList.splice(track_AD_index,1);
            //     track_ADList[0].domid="contain_AD1";
            //     track_ADList[1].domid="contain_AD2";
            //     track_ADList[2].domid="contain_AD3";
            //     utils.appendAD('#contain_AD1',crateAd.init(track_ADList[0],false));
            //     utils.appendAD('#contain_AD2',crateAd.init(track_ADList[1],false));
            //     utils.appendAD('#contain_AD3',crateAd.init(track_ADList[2],false));
            // }

            // adConfig[CHANNEL_NAME].details.bottomAD.domid="bottomAD";
            // utils.appendAD('#bottomAD',crateAd.init(adConfig[CHANNEL_NAME].details.bottomAD,true));
            //渲染猜你喜欢5列表广告
            adConfig[CHANNEL_NAME].details.IlickAd.domid = "AD_Ilick";
            utils.appendAD('#AD_Ilick', crateAd.init(adConfig[CHANNEL_NAME].details.IlickAd, true));

            //渲染详情红包链接
            ZZJK_adConfig.hasOwnProperty('isc')||$('#pu-widget .linkAD').attr("href", adConfig[CHANNEL_NAME].linkAD.details);
        },
        runderDetails: function () {
            //添加非列表区域广告
            //this.runderAD();
            var data = arguments[0];
            //渲染详情title
            window.document.title = data.entity.title;
            $('.page-title').html(data.entity.title);
            //渲染详情内容
            //将详情内容图片转化位懒加载节省网络请求暂时不用
            var contentDom = $('<div>' + data.entity.content + '</div>');
            contentDom.find('img').each(function (index, item) {
                $(item).attr('data-src', item.src);
                item.src = '/dist/img/imgloading.jpg';
            });
            $('.article.container .a-art').html(contentDom);
            //渲染详情来源
            $('.page-info.container.splitter').html('<span class="element"><em class="source_name">来源：' + data.entity.source + '</em></span><span class="element">刚刚</span>');
            $('.copyright .element').html('<div class="element">版权声明：本文内容的组织和采编均来自' + data.entity.source + '。</div>');
            //处理点击展开全文
            if (!data.ready) {

                $('.article.container').height() > 500 ? $('.article.container').css({ height: '500px', display: 'block' }) : ($('.article.container').css({ height: "auto", display: 'block' }), $('._1Dz8F').hide());

            } else {

                $('.article.container').css({ height: "auto", display: 'block' });
                $('._1Dz8F').hide();

            }
            //初始化详情内容懒加载
            mescroll.lazyLoad(200);
            //展开按钮的处理
            $('._1Dz8F').on('click', function () {
                $(this).hide();
                $('.article.container').css({ height: "auto", display: 'block' });
                sessionStorage.getItem("Dcontent") && (function () {
                    var c = JSON.parse(sessionStorage.getItem("Dcontent"));
                    c.ready = true;
                    sessionStorage.setItem("Dcontent", JSON.stringify(c));
                })();
            })
            //给页面加上css动画处理闪屏问题
            $('body').addClass('pageShow');

            //返回原始数据
            return data;

        },
        //读取广告位信息插入列表
        readAd: function (isAD, data, adIndex) {
            var adIndex = adIndex || 2
            //读取广告配置并插入广告数据
            var data = data.slice(), len = data.length, adlist = adConfig[CHANNEL_NAME].details.RecommendList;//拷贝一份数据进行操作
            isAD && (function (that, data, adlist) {
                var i = 0;
                for (i; i < len; i++) {
                    if (adlist[i]) {
                        data.splice(adIndex * i, 0, adlist[i]);
                    }
                }
            }(this, data, adlist))

            return data;
        },
        //读取列表数据
        getdata: function (url, data, type, callback) {

            //console.log(url, data, type, callback);
            var that = this;
            $.ajax({
                url: url,
                type: "get",
                dataType: "jsonp",
                data: data,
                timeout: 8000,
                jsonp: 'callback',
                success: function (res) {
                    if (res.code == errCode) {
                        //返回加载后的数据
                        callback.call(that, res.newsEntityList);

                    } else {
                        //数据发生错误
                        mescroll.endErr();
                    }
                },
                error: function (e) {
                    mescroll.endErr();

                }
            });
        },
        render: function () {
            var data = arguments[0], i = 0, str = "";
            if (!arguments[1]) {
                data = this.readAd(true, data);//插入广告后的数据
            }
            // 重组数据列表（以数据渲染视图，提升广告载入效率）
            if (data.length > 0) {
                for (i; i < data.length; i++) {
                    if (data[i].pics && data[i].pics.length < 3) {

                        str += this.styleDetail(data[i]);

                    } else if (data[i].pics && data[i].pics.length >= 3 && !data[i].type) {

                        str += this.styleDetail(data[i]);

                    } else if (data[i].type = 'ad') {

                        str += this.adStyle(data[i]);
                    }
                }

            }
            //返回插入广告后的dom,和载入广告后的数据
            return { dom: $(str), data: data }
        },
        styleDetail: function (data) {
            var url = "http://bjyuedu.com/" + CHANNEL_NAME + "File/webview/detail.html?id=" + data.id + "&staticFile=" + CHANNEL_NAME + "File";
            //详情页推荐列表左图右文模版
            return '  <li class="n-item will-active news-item splitter container single-pic-item"><a' +
                '                href="' + url + (data.category == "图片" ? "?type=pic" : "") + '"' +
                '                class="n-item-link n-single-pic" title="' + data.title + '">' +
                '                <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                    <div class="content"><img class="thumbnail-box"' +
                '                            src="" data-src="' + data.pics[0] + '">' +
                '                    </div>' +
                '                </div>' +
                '                <div class="n-title element"><span>' + data.title + '</span></div>' +
                '                <div class="n-desc"><span class="info element"><span>' + (data.source == "undefined" ? "" : data.source) + '</span><span class="n-ptime">刚刚</span></span>' +
                '                </div>' +
                '            </a></li>';
        },
        styleimg3: function (data, i) {
            var url = "http://bjyuedu.com/" + CHANNEL_NAME + "File/webview/detail.html?id=" + data.id + "&staticFile=" + CHANNEL_NAME + "File";
            return '<li class="n-item will-active news-item splitter container newsBox"><a tagid="' + i + '"' +
                '                    href="' + url + '"' +
                '                    class="n-item-link n-multipic" title="' + data.title + '">' +
                '                    <div class="n-title element"><span>' + data.title + '</span></div>' +
                '                    <div class="n-img-wrapper">' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[0] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[1] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                        <div class="img fixed-size size-3-2" data-img-width="1/3">' +
                '                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"' +
                '                                  src=""  data-src="' + data.pics[2] + '">' +
                '                            </div>' +
                '                        </div>' +
                '                    </div>' +
                '                    <div class="n-desc"><span class="info element"><span>' + (data.source == "undefined" ? "" : data.source) + '</span>' +
                '                            <span class="n-ptime">刚刚</span></span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:' + 10 + '元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                    </div>' +
                '                </a>' +
                '            </li>';
        },
        //广告容器模版
        adStyle: function (data) {
            var domid = data.s + "_" + Math.random();
            data.domid = domid;
            return '<li class="n-item will-active news-item splitter container AD-box"><a target="_self"' +
                '                    href="javascript:;"' +
                '                    class="n-item-link n-multipic" style="overflow:hidden;">' +
                '                    <div data-ZZJK-s=' + data.s + ' style="height:104px;" id="' + domid + '">' + crateAd.init(data, true) + '</div> ' +
                '                    <div class="n-desc" style="display:none;"><span class="info element"><span></span>' +
                '                            <span class="n-ptime">刚刚</span></span>' +
                '                        <div class="cash element" style="display:none">' +
                '                            <div>已发放:' + 10 + '元</div>' +
                '                            <div>阅读赚钱</div>' +
                '                        </div>' +
                '                </div>' +
                '     </a>' +
                '</li>';
        }

    };
    //初始化详情内容数据
    function initContainer(postdata) {
        template.getdetails(detailapi(), postdata, function (data) {
            var data = this.runderDetails.apply(this, [data]);

            //缓存详情页内容信息信息
            //sessionStorage.setItem("Dcontent",JSON.stringify(data));

        });
    }

    //初始化首批推荐列表数据
    function initPage(posdata) {
        //清空dom结构
        posdata.s = 0;
        $('#dataList').empty();
        // mescroll.showUpScroll();
        template.getdata(clisturl, posdata, getType[0], function (data) {
            var runderData = this.render.apply(this, [data]);
            //缓存数据
            // utils.chechData(pageConfig.c, getType[0], runderData.data);
            //裁切不符合规范的图片
            utils.clipImg(runderData.dom.find('img'));
            $("#dataList").prepend(runderData.dom);
            //完成下拉刷新；
            // mescroll.endUpScroll();
            //直接显示暂无相关
            // mescroll.showNoMore();
            //处理首屏数据无法懒加载BUG
            $('#dataList').scrollTop(1);
        });
    }

    //上拉加载数据
    function upref(postdata) {
        template.getdata(clisturl, postdata, getType[2], function (data) {
            //The function return dom and listdata
            var runderData = this.render.apply(this, [data]);
            //缓存上拉数据
            // utils.chechData(postdata.c, getType[2], runderData.data);
            utils.clipImg(runderData.dom.find('img'));
            $("#dataList").append(runderData.dom);
            // //完成下拉刷新；
            mescroll.endSuccess();
        });
    }

    //渲染缓存数据
    function chechRender() {
        var runderData = template.render.apply(template, [JSON.parse(sessionStorage.getItem("DchechData")).data, true]);
        utils.clipImg(runderData.dom.find('img'));
        $("#dataList").append(runderData.dom);
        //解决懒加载bug
        $(window).scrollTop(1);
        //sessionStorage.getItem("DscrollTop") ? (Number(sessionStorage.getItem("DscrollTop")) > 1 && $(window).scrollTop(sessionStorage.getItem("DscrollTop"))) : $(window).scrollTop(1);

    }

    //初始化广告加载器 使用方法在模版渲染方法内（支持传入异步参数）
    var crateAd = new ZZJKAD();
    //初始化加载非列表页广告
    template.runderAD();
    //初始化滚动容器
    configmescroll();//初始化下拉

    //初始化详情数据
    initContainer({ page: 1 });
    //!sessionStorage.getItem("Dcontent")?initContainer({page:1}):(template.runderDetails(JSON.parse(sessionStorage.getItem("Dcontent")),true),removeItem());//true 代表缓存

    //初始化推荐列表数据
    initPage(pageConfig);
    //!sessionStorage.getItem("DchechData")?initPage(pageConfig) :chechRender();

    function removeItem() {
        //清除缓存
        sessionStorage.removeItem("Dcontent");
        sessionStorage.removeItem("DchechData");
        sessionStorage.removeItem("DscrollTop");
    }
    //离开当前页时存储数据
    // window.onbeforeunload = function (){
    //缓存上次数据浏览的高度
    //    sessionStorage.setItem("DscrollTop",$(window).scrollTop());
    //进入新闻列表记得删除此数据
    // }

    //拓展方法在此处去继承完成新模块，新功能的添加尽量别去修改原代码

})(window, undefined)