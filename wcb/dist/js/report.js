
(function(name,definition){
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
                var CTR=rD.list.nT-rD.list.sT;
                console.log(rD,CTR);
                //单位时间内页面刷新异常
                if(CTR>=config.ctr.page){
                    if(rD.list.s/(CTR/config.ctr.page)>=config.ctr.show){
                        console.log("单位时间内页面刷新异常");
                        isc=true;
                        rD.list.isc=isc;
                    }
                    if(rD.list.g/(CTR/config.ctr.api)>=config.ctr.show){
                        console.log("单位时间内接口亲求异常");
                        isc=true;
                        rD.list.isc=isc;
                       
                    }
                    rD.list.s=1;
                    rD.list.g=1;
                    rD.list.sT=new Date().getTime();
                    rD.list.nT=new Date().getTime(); 
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
            if (!cookieId) {
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
                if (!cookieId) {
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
        return isCheat;
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