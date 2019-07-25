//创建广告类型
(function (name, definition) {
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
        return '<script async="async" defer="defer" type="text/javascript" smua="' + smua + '" '+(async?"data-":"")+'src="//www.smucdn.com/smu0/o.js" ></script>';
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