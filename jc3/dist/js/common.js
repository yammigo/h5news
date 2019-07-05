'use strict';

var toast = function toast(str) {
    var m = document.createElement('div');
    m.innerHTML = str;
    m.style.cssText = 'font-size:15px;width:70%; min-width:150px; background:#000; opacity:0.8; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; top:40%; left:15%; z-index:99999999; ';
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m);
        }, d * 1000);
    }, 2000);
};
//刷新提示
var newInfo = function newInfo(str) {
    var info = document.createElement('div');
    info.innerHTML = str;
    info.style.cssText = 'font-size:0.28rem;width:100%; background:rgba(221, 241, 255, 0.9);height:30px; color:#2a90d7; line-height:30px; text-align:center; position:fixed; top:80px; left:0; z-index:99999999; ';
    document.body.appendChild(info);
    setTimeout(function () {
        var d = 0.5;
        info.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        info.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(info);
        }, d * 500);
    }, 1000);
};
// 获取地址栏参数
var GetQueryString = function GetQueryString() {
    var value;
    var str = location.href;
    var num = str.indexOf('?');
    str = str.substr(num + 1); // 取得所有参数   stringvar.substr(start [, length ]
    var arr = str.split('&'); // 各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf('=');
        if (num > 0) {
            var name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
};
//下载唤起App
(function($){
    var isAndroid;
    var isIOS;
    $.fn.usrLoad = function(data){
        return new UsrLoad(this, data);
    }
    var UsrLoad = function(doucment,data){
        var ua = window.navigator.userAgent.toLowerCase();
        var u = navigator.userAgent;
        console.log(u)
        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var micromessenger = ua.match(/MicroMessenger/i);
        var weixin = micromessenger == 'micromessenger'?true:false;
        // 判断是否是微信内置浏览器
        if (weixin) {
            // 跳转链接
            // window.location.href = 'downLoad.html';
        }
        // Safari 浏览器跳转IOS下载页
        if(/webkit/i.test(ua) &&!(/chrome/i.test(ua) && /webkit/i.test(ua) && /mozilla/i.test(ua))){

            //苹果同事提供下载地址;
        }
        if(!weixin){
            //要监听的URL scheme协议
            if(isIOS){

            }else if(isAndroid){
                openApp('myapp://huasheng.com/openApp');
            }
        }

    }
    //判断手机上是否安装了app，如果安装直接打开，如果没安装，跳转到下载页面
    var openApp = function(url) {
        console.log('下载');
        if(isAndroid){
            var timeout, t = 1000, hasApp = true;
            var t1 = Date.now();
            var ifr = document.createElement("iframe");
            var openScript = setTimeout(function () {
                if (!hasApp) {
                    var durl = "http://api.xinguad.com/kk-api-v110/static/version.apk";
                    window.location.href=durl;
                }
                document.body.removeChild(ifr);
            }, 1500)
            ifr.setAttribute('src', url);
            ifr.setAttribute('style', 'display:none');
            document.body.appendChild(ifr);
            timeout = setTimeout(function () {
                var t2 = Date.now();
                if (!t1 || t2 - t1 < t + 100) {
                    hasApp = false;
                }
            }, t);
        }
        if(isIOS){
            console.log(url);
            window.location.href = url;
        }
    }
})(window.Zepto || window.jQuery);

// 广告应用
function addShow(domId, uId){ //搜狗广告补位
    return function(){
        $('#'+domId).addClass('build-adv-change');
        window.sogou_un.push({id: uId,ele:getId(domId)})
    }
}
function addBdShow(domId, uId) { //百度广告补位
    return function (){
        $.getScript("http://cbjs.baidu.com/js/m.js", function() {
            BAIDU_CLB_fillSlotAsync(uId,domId);
        });
    }
};
function addBdLast(domId, uId) { //百度广告封装补位
    return function (){
        $('#' + domId).append('<script type="text/javascript" smua="d=m&s=b&u='+uId+'&h=180" src="//www.smucdn.com/smu0/o.js"></script>');
    }
};
window.sogou_un = window.sogou_un || [];
function getId(id) {
    return document.getElementById(id);
}

//获取URL所有参数
function getParamsCode() {
  var paraObj = {};

  function getValue(paramStr){
    var searchData = [];
    if(paramStr){
      searchData = paramStr.split('&');
    }
    for(var i=0; i<searchData.length; i++){
        var paraArr = searchData[i].split('=');
        paraObj[paraArr[0]] = paraArr[1];
    }
  }
  
  var searchStr = location.search.replace(/\?*/g, '').replace(/\//g, '');
  getValue(searchStr);

  return paraObj;
}

/*
* 时间戳格式化
*/
Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
/*
*扩展删除数组某个元素的方法
 */
Array.prototype.removeByValue = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
};
//获取DOM元素
function getDomEle(id){
    return document.getElementById(id);
}
//点冠广告补位
function addDgShow(domId, uId) {
    return function (){
        $('#'+ domId).append('<script type="text/javascript" '+ uId.attr +' " src="'+uId.js+'"></script>');
    }
};
//点冠广告补位众盟
function addZmShow(domId, uId) {
    return function (){
        $('#'+ domId).append('<script type="text/javascript" '+ uId.attr +' " src="'+uId.js+'&_ct='+domId+'"></script>');
    }
};
//监测wap、pc端
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
/*
* 公共变量
* */
var ctx = 'http://www.huashengtoutiao.com';
var ctxv = 'http://www.huashengtoutiao.com';
var ctxs = 'http://api.zizhengjiankang.com/kk-api-v112';
// var ctx = 'http://39.105.1.181:8089';
// var ctxv = 'http://39.105.1.181:8089';
