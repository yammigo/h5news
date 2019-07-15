/**fanjiantao */
!function (window, $, undefined) {
    var mescroll, errCode = 200, getType = ['page', 'down', 'up'],
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
        })()
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
            // var arr=[23,56,1,8,32,4,13,28,7,3,60,103];
            // var arr1=arr.sort(function(){return 0.5-Math.random()}).slice(0,5);
            // console.log(arr1);
            var adIndex = adIndex || 1
            //读取广告配置并插入广告数据
            var data = data.slice(), len = data.length, adlist = (pageConfig.c == '21' ? adConfig[CHANNEL_NAME].priclist : adConfig[CHANNEL_NAME].newsListAD);
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
                data = this.readAd(true, data);//插入广告后的数据
            }
            //广告列表单页长度超过40启用懒加载加载广告
            var async=data.length>15?true:false;
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

                        str += this.adStyle(data[i],i,async);
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
          
            if(probability&&typeof probability!=="{}"){
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
            var url="http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
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
            var url="http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
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
            var url="http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail_img.html?id="+data.id+"&staticFile="+CHANNEL_NAME+"File";
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
            var domid = data.s + "_" + Math.random();
            data.domid = domid;
            return '<li class="n-item will-active news-item splitter container AD-box"><a' +
                '                    href="javascript:;"' +
                '                    class="n-item-link n-multipic" tagid="'+i+'">' +
                '                    <div class="adbox" style="width:100%;position:relative;height:'+((pageConfig.c=='21')?'220px':'105px')+'" data-ZZJK-s=' + data.s + '><div id="' + domid + '">' + crateAd.init(data,async) + '</div></div> ' +
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
            // runderData.dom.each(function(index,item){
            //     // console.log(item,"dom元素");
            //     $(".ZZJK_L .news-list").append(item);
            // })
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
            // runderData.dom.each(function(index,item){
            //     // console.log(item,"dom元素");
            //     $(".ZZJK_L .news-list").append(item);
            // })
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
            // runderData.dom.each(function(index,item){
            //     // console.log(item,"dom元素");
            //     $(".ZZJK_L .news-list").append(item);
            // })
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
    $('#pu-widget .linkAD').attr("href", adConfig[CHANNEL_NAME].linkAD.newslist);

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
        // alert('页面离开记录滚动位置');
        // alert($('.mescroll').scrollTop());
        // console.log()
        //缓存数据
        sessionStorage.setItem("scrollTop",$('.mescroll').scrollTop())
    }
    //拓展方法在此处去继承完成新模块，新功能的添加尽量别去修改原代码
    // function removeItem(){
    //     if(sessionStorage.getItem("Dcontent")&&sessionStorage.getItem("Dcontent")!==""){
    //         sessionStorage.Dcontent=""
    //         sessionStorage.removeItem("Dcontent");
           
    //     }
    //     if(sessionStorage.getItem("DchechData")&&sessionStorage.getItem("DchechData")!==""){
    //         sessionStorage.DchechData=""
    //         sessionStorage.removeItem("DchechData");
            
    //     }
    //     if(sessionStorage.getItem("DscrollTop")&&sessionStorage.getItem("DscrollTop")!==""){
    //         sessionStorage.DscrollTop=""
    //         sessionStorage.removeItem("DscrollTop");
    //     }
    // }
    // //销毁详情页缓存
    // removeItem();
   
    
}(window, jQuery, undefined)