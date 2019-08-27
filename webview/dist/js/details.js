/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-30 13:50:27
 * @LastEditTime: 2019-08-26 17:53:14
 * @LastEditors: Please set LastEditors
 */

/**fanjiantao */
$(function () {
    var mescroll, errCode = 200, getType = ['page', 'down', 'up'],
        adConfig = ZZJK_adConfig,
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
        pageurl = 'http://news.zizhengjiankang.com/',
        clisturl = (function () {
            // this is window
            return "http://adapi.ydtad.com:8089/search/news/h5RecommendList";
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
            return "http://adapi.ydtad.com:8089/search/news/detailNew/" + utils.getUrlparam("", 'id') + "/" + utils.getUrlparam("", "pos");
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
        clipImg: function (imglist) {
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
            if (Math.random() < adConfig[CHANNEL_NAME].probability.details) {
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
            ZZJK_adConfig.hasOwnProperty('isc') || $('#pu-widget .linkAD').attr("href", adConfig[CHANNEL_NAME].linkAD.details);
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
            var url = pageurl + CHANNEL_NAME + "File/webview/detail.html?id=" + data.id + "&staticFile=" + CHANNEL_NAME + "File";
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
            var url = pageurl + CHANNEL_NAME + "File/webview/detail.html?id=" + data.id + "&staticFile=" + CHANNEL_NAME + "File";
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

})