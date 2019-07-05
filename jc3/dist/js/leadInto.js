//点冠广告补位赢纳
function coverYn(domId, uId) {
    return function (){
        $('#'+ domId).append('<script type="text/javascript" data-yn="codeId='+uId+'&node=false&adStyle=emf" src="//un.dnskuu.com/yn/moblie.min.js"></script>');
    }
};
//点冠广告补位众盟
function coverZm(domId, uId) {
    return function (){
        $('#'+ domId).append('<script type="text/javascript" src="//i.hao61.net/d.js?cid='+uId+'&_ct='+domId+'"></script>');
    }
};
(function(){
    window.sogou_un = window.sogou_un || [];
    /**
     * zm :众盟广告
     * yn: 赢纳广告
     * lm: 百度联盟广告
     * dg: 点冠广告
     * sg: 搜狗广告
     * xc: 星辰广告
     * bx: baixing广告
     * cs: 测试广告
     * @type {{zm: leadInto.zm}}
     */
    var leadInto = {
        zm: function(domId, uId, coverId, callBack){
            return $('#'+ domId).append('<script type="text/javascript" src="//i.hao61.net/d.js?cid='+uId+'&_ct='+domId+'"></script>');
        },
        yn: function(domId, uId, coverId, callBack){
            return $('#'+ domId).append('<script type="text/javascript" data-yn="codeId='+uId+'&node=false&adStyle=emf" src="//un.dnskuu.com/yn/moblie.min.js"></script>');
        },
        lm: function(domId, uId, coverId, callBack){
            return (window.slotbydup = window.slotbydup || []).push({id: uId,container:  domId});
        },
        dg: function(domId, uId, coverId, callBack){
            return _aisdk.init(uId, domId,callBack(domId, coverId));
        },
        sg: function(domId, uId, coverId, callBack){
            var sogou_div = document.getElementById(domId);
            return  window.sogou_un.push({id: uId.id,ele:sogou_div,w:uId.w,h:uId.h});
        },
        xc: function(domId, uId, coverId, callBack){
            return $('#'+ domId).append('<script type="text/javascript" smua="d=m&s=b&u='+uId.id+'&h='+uId.h+'" src="//www.smucdn.com/smu0/o.js"></script>')
        },
        bx: function(domId, uId, coverId, callBack){
            var od = document.getElementById(domId);
            var script = document.createElement('script');
            script.src = '//tu.baixing.com/widget/script/'+uId.id+'.js?autosize='+uId.size;
            od.appendChild(script);
            //return $('#'+ domId).append('<script src="//tu.baixing.com/widget/script/'+uId.id+'.js?autosize='+uId.size+'"></script>')
        },
        cs: function(domId, uId, coverId, callBack){
            return $('#'+ domId).append('<script zmua="d=m&s=b&u='+uId.id+'&w='+uId.w+'&h='+uId.h+'" src="http://js.jjyoutiao.com/x.js"></script>');
        },
        sougou:function(domId,uId){
            //hello sougou
            return $('#'+domId).append('<script type="text/javascript">var sogou_ad_id='+uId.id+';var sogou_ad_content_height='+uId.h+';</script><script type="text/javascript" src="'+uId.url+'"></script>');
        }
    }
    window.leadInto = leadInto;
})()