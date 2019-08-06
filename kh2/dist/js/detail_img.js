$(function(){
    var addNum = 1; //广告加载间隔时间
    var picBottomNum = 0; //广告轮换次数
    var getString = new GetQueryString();
    var count = 0;
    var page = 1;
    var title = '';
    var limit = 15;
    var appKey = ZZJK_adConfig[CHANNEL_NAME].appKey;
    var appSecret = ZZJK_adConfig[CHANNEL_NAME].appSecret;
    var picAdIdsList = ZZJK_adConfig[CHANNEL_NAME].picDetails.picAdIdsList;
    var picBottomAdId = ZZJK_adConfig[CHANNEL_NAME].picDetails.picBottomAdId;
    var picLastPageAdId = ZZJK_adConfig[CHANNEL_NAME].picDetails.picLastPageAdId;
    var groom = '';
    var swiper = null;
    var tapStatus = true; //点击切换
    var randomNum =  Math.random().toString().substring(2);
    var slideNum = 0;  //初始化显示位置
    var advertNum = 1;
    var addData = true; //重新加载资源开关
    var recRequestid = getString.rec_requestid;
    //var showArr = [1,4,7,10,13];
    //获取cid
    var cid = window.localStorage.getItem('deviceCid');
    if(!cid){
        cid = +new Date() + '' + Math.floor(Math.random()*1000);
        window.localStorage.setItem('deviceCid', cid);
    };
    leadInto[picBottomAdId[1].type]('pic_bottom', picBottomAdId[1].uId, picBottomAdId[1].coverId, picBottomAdId[1].callBack);
  
    function getUrlparam(url, param) {
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
    };
  
  
    function changeTitle(num, list){
        var dataNum = Number(list.slides[num].dataset.num);
        var dataCount = Number(list.slides[num].dataset.count);
        if(dataNum >= 0){ //滑动非广告
            document.getElementById("prev_v").style.pointerEvents="";
            document.getElementById("next_v").style.pointerEvents="";
            $('.pic_bottom').removeClass('pic_hide');
            $('.detail-page').text((dataNum + 1) + '/' + dataCount);
            $('#img_title').text(title);
            $('.detail-page').show();
            $('.slide-tip').hide();
            //滑动加载广告三插一
            if((dataNum+1) > 0 && (dataNum+1) % 3 == 0){
                var domId = $('.swiper-slide-next').find('div').attr('id');
                $('#'+domId).children().remove();
                var adindex=Math.floor(Math.random()*picAdIdsList.length);
                leadInto[picAdIdsList[adindex].type](domId, picAdIdsList[adindex].uId, picAdIdsList[adindex].coverId, picAdIdsList[adindex].callBack);
            }
            //重新加载资源
            var poorNum = dataCount - dataNum;
            if(addData && poorNum == 3){
                onRecommend();
            }else {
                addData = true;
            }
        }else{ 
            //滑动广告
            if(Math.random()<0.5){
                document.getElementById("prev_v").style.pointerEvents="none";
                document.getElementById("next_v").style.pointerEvents="none";
            }
            $('.pic_bottom').addClass('pic_hide');
            $('#img_title').text('');
            $('.detail-header').removeClass('show');
            tapStatus = false;
            $('.detail-page').hide();
            $('.slide-tip').show();
            if(picBottomNum <= 4){
                picBottomNum = picBottomNum==4?0:picBottomNum;
                var idNum = Math.random().toString().substring(2);
                $('.pic_bottom').children().remove();
                $('.pic_bottom').append('<div id="dg'+idNum+'"></div>');
                leadInto[picBottomAdId[picBottomNum].type](('dg'+idNum), picBottomAdId[picBottomNum].uId, picBottomAdId[picBottomNum].coverId, picBottomAdId[picBottomNum].callBack);
                picBottomNum++;
            }
        }
    }
    function tapChange(status, num, list){
        var dataNum = Number(list.slides[num].dataset.num);
        if(status){
            $('.detail-header').addClass('show');
            dataNum >= 0 && $('.pic_bottom').removeClass('pic_hide');
        }else{
            $('.detail-header').removeClass('show');
            $('.pic_bottom').addClass('pic_hide');
        }
    }
    function renderSwiper(num){
        swiper = new Swiper('.swiper-container', {
            initialSlide: num,
            observer:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observeParents:true,
            pagination: {
                type: 'fraction',
            },
            on: {
                slideNextTransitionStart: function() {
                    var num = Number($('.swiper-wrapper').children().length);
                    if(this.activeIndex == (num -1)){
                        $(window.parent.document).find(".selected").click();
                    }
                },
                slideNextTransitionEnd: function () {
                    changeTitle(this.activeIndex, this);
                    slideNum = this.activeIndex;
                },
                slidePrevTransitionEnd: function(){
                    changeTitle(this.activeIndex, this);
                    slideNum = this.activeIndex;
                },
                tap: function(event){
                    tapStatus = !tapStatus;
                    tapChange(tapStatus, this.activeIndex, this);
                }
            }
        });
    };
    //获取图片
    function getData(getId,changeNum){
        $.ajax({
            url: ctx + '/search/news/detail/' + getId + '/'+getUrlparam("","pos")+'?page=' + 1,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: "callback",
            success: function (data) {
                randomNum =  Math.random().toString().substring(2);
                if(data.code == 200){
                    advertNum++;
                    addData = false;
                    count =  data.entity.pageList.length>15?15:data.entity.pageList.length;
                    title = data.entity.title;
                    detailUploadData();
                    _czc.push(["_trackEvent","美女图片详情页pv统计", "刷新", "达观", 1, "details-container"]);
                    $('#img_title').text(title);
                    if(changeNum == 1){
                        $('.detail-page').text(page + '/' + count);
                    }
                    var list = '';
                    var advert = '';
                    data.entity.pageList.forEach(function(item, i){
                        if(i<15) {
                            if (i > 0 && (i+1) % 3 == 0) {
                                advert = '<div class="swiper-slide">' +
                                    '<section class="x-wrapper x-frame" style="width: 100%;">' +
                                    '<div style="width: 100%;overflow: hidden;position: relative;" id="pic_add_' +advertNum+'_'+i+ randomNum + '">'+
                                    '</div>' +
                                    '</section>' +
                                    '</div>';
                            } else {
                                advert = '';
                            }
                            list = '<div class="swiper-slide" data-num="' + i + '" data-count="'+ count+'">' +
                                '<div class="slide-change-img">' + item +
                                '</div></div>' + advert;
                            $('.swiper-wrapper').append(list);
                        }
                    })
                    if(changeNum == 1) {
                        renderSwiper(slideNum);
                    };
                }
            },
            error: function (err){
                console.log(err);
            }
        })
    };
    getData(getString.id,1);
    function onRecommend() { // 请求资源
        $.ajax({
            url: ctxv + '/search/news/detail/anyNew?cid='+ cid + '&action_type=rec_click&itemid=' + getString.id + (recRequestid ? '&rec_requestid=' + recRequestid : '')+ '&scene_type=' + CHANNEL_NAME,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: 'recommendBack',
            success: function (data) {
                if(data.code == 200){
                    recRequestid = data.rec_requestid;
                    var picId = data.id;
                    getData(picId, 0);
                    //var addAdvert = '';
                    //data.newsEntityList.map(function(item, i){
                    //    if(i == 2){
                    //        addAdvert = '<div style="position: relative;float:left;width: 100%;"><div id="advert-two"></div></div>';
                    //    }else{
                    //        addAdvert = '';
                    //    }
                    //    if(i<4){
                    //        groom += addAdvert + '<a href="'+ item.url+'?type=pic" class="detail-groom">' +
                    //                '<div><img src="'+ item.pics[0]+'" alt=""></div>'+
                    //                '<p>'+ item.title+'</p>'+
                    //            '</a>'
                    //    }
                    //})
                    //var listNum = $('.swiper-wrapper').children('.swiper-slide').length;
                    //$('.swiper-wrapper').find('.swiper-slide').eq(listNum-2).append('<div class="detail-groom-all clearFix">'+ groom +'</div>');
                    ////$('#advert-two').append('<script type="text/javascript" '+picLastPageAdId.attr+' src="'+picLastPageAdId.js+'"></script>');
                    //leadInto[picLastPageAdId.type]('advert-two', picLastPageAdId.uId, picLastPageAdId.coverId, picLastPageAdId.callBack);
                }
            },
            error: function(error){
                console.log(error);
            }
        })
    }
    //上报
    function detailUploadData(){
        var paraObj = getParamsCode();
        var rec_id = paraObj.rec_requestid;
        $.ajax({
            url: ctxv + '/search/dg/uaReport?cid='+ cid + '&action_type=rec_click&itemid=' + getString.id + (rec_id ? '&rec_requestid=' + rec_id : '')+ '&scene_type=' + CHANNEL_NAME,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (data) {}
        });
        $.ajax({
            url: ctxv + '/search/dg/uaReport?cid='+ cid + '&action_type=view&itemid=' + getString.id + (rec_id ? '&rec_requestid=' + rec_id : '')+ '&scene_type=' + CHANNEL_NAME,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: "callback",
            success: function (data) {}
        });
    
    }
    function getNewUrl2(){
        var paraObj = getParamsCode();
        var paraList = [];
        for(var key in paraObj){
            if(key != 'rec_requestid'){
                paraList.push(key + '=' + paraObj[key]);
            }
        }
        var newUrl = location.protocol + '//' + location.host + location.pathname + '?' + paraList.join('&');

        return newUrl;
    }
    $('.back').on('click', function(){
       window.history.go(-1);
    });
})

