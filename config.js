const config = {
    webview: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022638&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012794&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012786&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012787&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012795&h=120" },
            //预设代码位
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u1111111&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u2222222&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3333333&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4444444&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u5555555&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u6666666&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689775&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689774&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686137&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686127&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689774&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689775&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058041&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689770&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3651945&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058055&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058053&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058047&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058046&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058043&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058041&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058037&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058035&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058032&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058030&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058055&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058053&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058047&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058046&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058043&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4021427', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021427' },
                { uId: { id: 'u4021427', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021427' },
            ],
            picBottomAdId: [
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4021427', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021427' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //密钥相关
        appKey: '354418',
        appSecret: '3df60fef-2ff1-4b4e-a194-784e974c03c8',
        probability: {
            newsList: 0.5,
            details: 0.2,
        }
    },
    qkd1: {
        //新闻频道
        newsListAD: [
            // { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012794&h=120" },
            { type: 'ad', s:"xcAD",  smua: "d=m&s=b&u=u4077256&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012786&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012787&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012795&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4127484&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689775&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689774&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686137&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686127&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689774&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689775&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058041&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3689770&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3651945&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058055&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058053&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058047&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058046&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058043&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058041&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058037&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058035&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058032&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058030&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058055&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058053&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058047&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058046&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058043&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
           
            ],
            picBottomAdId: [
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' },
                { uId: { id: 'u3794541', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3794541' }
            ],
            picAdIdsList: [
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
                { uId: { id: 'u4141880', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141880' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //密钥相关
        appKey: '354418',
        appSecret: '3df60fef-2ff1-4b4e-a194-784e974c03c8'
    },
    yj: {
        //新闻频道
        newsListAD: [
            { type: "ad", s: "baiduAD", adid: "u4083114" },
            { type: "ad", s: "baiduAD", adid: "u4082203" },
            { type: "ad", s: "baiduAD", adid: "u4082206" },
            { type: "ad", s: "baiduAD", adid: "u4082208" },
            { type: "ad", s: "baiduAD", adid: "u4082210" }
        ],
        priclist: [
            { type: 'ad', s: 'baiduAD', adid: "u4082219" },
            { type: 'ad', s: 'baiduAD', adid: "u4082220" },
            { type: 'ad', s: 'baiduAD', adid: "u4082221" },
            { type: 'ad', s: 'baiduAD', adid: "u4082222" },
            { type: 'ad', s: 'baiduAD', adid: "u4082436" }
        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'baiduAD', adid: "u4082214" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'baiduAD', adid: "u4082445" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'baiduAD', adid: "u4082563" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'baiduAD', adid: "u4082063" },
                { type: 'ad', s: 'baiduAD', adid: "u4082173" },
                { type: 'ad', s: 'baiduAD', adid: "u4082178" },
                { type: 'ad', s: 'baiduAD', adid: "u4082182" },
                { type: 'ad', s: 'baiduAD', adid: "u4082184" },
                { type: 'ad', s: 'baiduAD', adid: "u4082186" },
                { type: 'ad', s: 'baiduAD', adid: "u4082188" },
                { type: 'ad', s: 'baiduAD', adid: "u4082189" },
                { type: 'ad', s: 'baiduAD', adid: "u4082190" },
                { type: 'ad', s: 'baiduAD', adid: "u4082191" },
                { type: 'ad', s: 'baiduAD', adid: "u4082192" },
                { type: 'ad', s: 'baiduAD', adid: "u4082193" },
                { type: 'ad', s: 'baiduAD', adid: "u4082194" },
                { type: 'ad', s: 'baiduAD', adid: "u4082195" },
                { type: 'ad', s: 'baiduAD', adid: "u4082196" }
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: "u4082424", type: 'lm', coverId: '', callBack: '', countId: 'lmu4082424' },
                { uId: "u4082424", type: 'lm', coverId: '', callBack: '', countId: 'lmu4082424' },
            ],
            picBottomAdId: [
                { uId: "u4082424", type: 'lm', coverId: '', callBack: '', countId: 'lmu4082424' },
                { uId: "u4082424", type: 'lm', coverId: '', callBack: '', countId: 'lmu4082424' },
            ],
            picAdIdsList: [
                { uId: "u4082383", type: 'lm', coverId: '', callBack: '', countId: 'lmu4082383' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292168',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292174'
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292168',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292174'
        },
        //密钥相关
        appKey: '513090',
        appSecret: 'f3b6500a-1c79-4eac-a65b-ffd024c636c1'
        // appKey: 'mingjie',
        // appSecret: 'mingjie_test123',

    },
    wcb: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4129066&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4129018&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686159&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686159&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144836&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141823&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058335&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058407&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058437&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058439&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058441&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058444&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058447&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058549&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058551&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058335&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272681',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272682',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272681',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272682',
        },
        //密钥相关
        appKey: '736594',
        appSecret: '194ad3bd-41e0-40c5-9be9-0e6371905b69'
    },
    qkd2: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012799&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012800&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012674&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012677&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012679&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117529&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117531&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117534&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117542&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117549&h=220" },
        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115874&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117562&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077241&h=400" },
            //推荐阅读列表广告
            RecommendList: [
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4075388&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4075385&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4073198&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4073195&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4073192&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115849&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115852&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115853&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115856&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115857&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115860&h=120"},
               {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4115874&h=120"},
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
                { uId: { id: 'u4115838', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115838' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
                { uId: { id: 'u4115845', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115845' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=271672',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=271673',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=271672',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=271673',
        },
        //密钥相关
        appKey: '379069',
        appSecret: '57f849ad-d9a9-4c3c-80e4-925527043616',
    },
    qkd3: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3821991&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3741342&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3821982&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4128938&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4128820&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3683000&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3678452&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3676246&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118258&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118263&h=220" }

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118225&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118251&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077243&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117385&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117387&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117390&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117393&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117398&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117401&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117405&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077246&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077248&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077251&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077253&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118223&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
              
            ],
            picBottomAdId: [
                { uId: { id: 'u4115842', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115842' },
                { uId: { id: 'u4115842', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115842' },
                { uId: { id: 'u4115842', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115842' },
                { uId: { id: 'u4115842', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115842' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
                { uId: { id: 'u4128817', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4128817' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291796',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291796',
        },
        //密钥相关
        appKey: '255683',
        appSecret: '8d0c7778-c59a-4fe9-9d37-02aa6acd77a8',
        // probability: {
        //     newsList: 0.5,
        //     details: 0.2,
        // }
    },
    jkd: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022423&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3821976&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3678639&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022293&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022392&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022420&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022421&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022423&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022423&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3678647&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3678648&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686125&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686116&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686111&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686098&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686090&h=220" },
         
        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4077267&h=120"},
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3683547&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077239&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069213&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069208&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069204&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069203&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069006&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4069002&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4068978&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4068974&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4068970&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4068967&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4077261&h=120"},
                {type:"ad",s:"xcAD",smua:"d=m&s=b&u=u4077265&h=120"}, 
            ]
        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' }
            ],
            picBottomAdId: [
                { uId: { id: 'u4077236', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077236' },
                { uId: { id: 'u4077236', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077236' },
                { uId: { id: 'u4077236', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077236' },
                { uId: { id: 'u4077236', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077236' }
            ],
            picAdIdsList: [
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' },
                { uId: { id: 'u4022421', h: 120 }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4022421' }
            ],
            linkList: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=15&business=money',
            linkDetail: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=16&business=money',
        },
        //红包链接
        linkAD: {
            newslist:'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=15&business=money',
            details: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=16&business=money',
        },
        //密钥相关
        appKey: '157410',
        appSecret: 'e3ef2133-a56f-4b35-a137-aa9c5b59ba4f'
    },
    qkd6: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132144&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117688&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117692&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117695&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117796&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117565&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117569&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117573&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117575&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132045&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075394&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117679&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077240&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077354&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077367&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077368&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077370&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077468&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4077573&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075416&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075414&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075412&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075404&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075399&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4075394&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4077237', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077237' },
                { uId: { id: 'u4077237', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077237' },
                { uId: { id: 'u4077237', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077237' },
                { uId: { id: 'u4077237', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4077237' },
                
            ],
            picAdIdsList: [
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
                { uId: { id: 'u3678357', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3678357' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292168',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292174',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292168',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292174',
        },
        //密钥相关
        appKey: '815949',
        appSecret: '0f171fc7-6a77-41c7-b3dd-f5a18d6e7ed2',
    },
    qkd5:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012796&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012797&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012798&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4022637&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4012796&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117801&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117802&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117806&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117809&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117812&h=220" },
          

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117286&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117814&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115060&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115880&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115882&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115884&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115888&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4115892&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117072&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117077&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117149&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117183&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117185&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117188&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4117286&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u3689779', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3689779' },
                { uId: { id: 'u3689779', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3689779' },
            ],
            picBottomAdId: [
                { uId: { id: 'u3860139', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3860139' },
                { uId: { id: 'u3860139', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3860139' },
            ],
            picAdIdsList: [
                { uId: { id: 'u3689779', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3689779' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292165',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=292167',
        },
        //密钥相关
        appKey: "524179",
        appSecret: "dc3d09a0-077c-4f3f-99bc-0f4ea3876387"
        // probability: {
        //     newsList: 0.5,
        //     details: 0.2,
        // }
    },
    qkd4:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3741919&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3821979&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3822514&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3822517&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3822518&h=120" },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118247&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118242&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118239&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144842&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141944&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118221&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141946&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118235&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118218&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118214&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118210&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118207&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118203&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118190&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118187&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118182&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118177&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118169&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118164&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4118155&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
            ],
            picBottomAdId: [
                { uId: { id: 'u3606638', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3606638' },
                { uId: { id: 'u3606638', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3606638' },
                { uId: { id: 'u3606638', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3606638' },
                { uId: { id: 'u3606638', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu3606638' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
                { uId: { id: 'u4141946', h: '220' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141946' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291797',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291798',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291797',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291798',
        },
        //密钥相关
        appKey: '366123',
        appSecret: '46b31aca-0574-47f4-842f-dcb85adbee78',
        // probability: {
        //     newsList: 0.3,
        //     details: 0.2,
        // }
    },
    qkd7: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s:"xcAD",  smua: "d=m&s=b&u=u4141985&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141983&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141979&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141973&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141970&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141944&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141946&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141948&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141950&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141953&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141117&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142288&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142247&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141427&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141497&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141537&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141542&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141546&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141557&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141610&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141625&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141632&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141635&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141642&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141651&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4141882', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141882' },
                { uId: { id: 'u4141882', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141882' },
                { uId: { id: 'u4141882', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141882' },
                { uId: { id: 'u4141882', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141882' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
                { uId: { id: 'u4141933', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4141933' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296213',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296214',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296213',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296214',
        },
        //密钥相关
        appKey: '001100-qkd7File',
        appSecret: '001100-qkd7File',
        probability: {
            newsList: 0.1,
            details: 0.2,
        }
    },
    jc3: {
        //新闻频道
        newsListAD: [
            { type: 'ad', s:"xcAD",  smua: "d=m&s=b&u=u4144994&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144993&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144989&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144987&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144985&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144957&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144855&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144854&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144849&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144846&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142423&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144964&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144289&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142427&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142431&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142455&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4143971&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4143972&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144039&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144057&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144223&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144273&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144274&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144277&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144279&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296281',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296282',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296281',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=296282',
        },
        //密钥相关
        appKey: '001100-jcFile',
        appSecret: '001100-jcFile'
    },
    jc4:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s:"xcAD",  smua: "d=m&s=b&u=u4144393&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144395&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144396&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144398&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144401&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144980&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144974&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144972&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144970&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144969&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142233&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144984&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144283&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132151&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4131678&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132154&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132158&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132160&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132166&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132170&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132173&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132175&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132176&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132222&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4132351&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            linkList: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=28&business=money',
            linkDetail: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=29&business=money',
        },
        //红包链接
        linkAD: {
            newslist: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=28&business=money',
            details: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=29&business=money',
        },
        //密钥相关
        appKey: '001100-jc4File',
        appSecret: '001100-jc4File'
    },
    jc5:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: "d=m&s=b&u=u4142392&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142398&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142406&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142409&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142418&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142329&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142339&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142346&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142353&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142358&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142158&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142319&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142247&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142162&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142167&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142171&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142173&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142175&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142177&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142178&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142179&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142183&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142187&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142190&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142198&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            linkList: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=24&business=money',
            linkDetail: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=25&business=money',
        },
        //红包链接
        linkAD: {
            newslist: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=24&business=money',
            details: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=25&business=money',
        },
        //密钥相关
        appKey: '001100-jc5File',
        appSecret: '001100-jc5File'
    },
    kh1:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: "d=m&s=b&u=u4142368&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142376&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142381&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142386&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142390&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142294&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142301&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142305&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142312&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142315&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4146922&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142288&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142254&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141997&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142005&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142011&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142018&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142025&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142027&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142032&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142135&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142142&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142145&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142151&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4142156&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' },
                { uId: { id: 'u4142448', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142448' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
                { uId: { id: 'u4142263', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4142263' },
            ],
            linkList: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=26&business=money',
            linkDetail: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=27&business=money',
        },
        //红包链接
        linkAD: {
            newslist: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=26&business=money',
            details: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=27&business=money',
        },
        //密钥相关
        appKey: '001100-kh1File',
        appSecret: '001100-kh1File'
    },
    yys:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: "d=m&s=b&u=u4155102&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155106&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155108&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155110&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155116&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154843&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154847&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154849&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154852&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154855&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154039&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154840&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154699&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154044&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154049&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154058&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154384&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154390&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154399&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154406&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154410&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154415&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154418&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154421&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154427&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
         
            ],
            picBottomAdId: [
                { uId: { id: 'u4154557', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154557' },
                { uId: { id: 'u4154557', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154557' },
                { uId: { id: 'u4154557', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154557' },
                { uId: { id: 'u4154557', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154557' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
                { uId: { id: 'u4154566', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154566' },
            ],
            linkList: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=5&business=money',
            linkDetail: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=6&business=money',
        },
        //红包链接
        linkAD: {
            newslist: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=5&business=money',
            details: 'https://i.fawulu.com/activities/?appKey=2c54107a85474325aa9c6b6f39eb31fe&appEntrance=6&business=money',
        },
        //密钥相关
        appKey: '336981',
        appSecret: '717fd702-e561-4a66-9e3f-25f29478733c'
    },
    yys2:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: "d=m&s=b&u=u4155074&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155076&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155081&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155094&h=120" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4155098&h=120" },

        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154710&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154712&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154811&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154821&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154837&h=220" },

        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153635&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154707&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154703&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153642&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153648&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153655&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153660&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153860&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153890&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4153891&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154001&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154014&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154022&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154026&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4154033&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
         
            ],
            picBottomAdId: [
                { uId: { id: 'u4154551', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154551' },
                { uId: { id: 'u4154551', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154551' },
                { uId: { id: 'u4154551', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154551' },
                { uId: { id: 'u4154551', h: '20:4' }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154551' }, 
            ],
            picAdIdsList: [
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
                { uId: { id: 'u4154589', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4154589' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291795',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291796',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291795',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=291796',
        },
        //密钥相关
        appKey: '601510',
        appSecret: 'c1af2be9-4f1c-427f-a50e-91c838f42757'
    },
    index:{
        //新闻频道
        newsListAD: [
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4129066&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4129018&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
            { type: 'ad', s: "xcAD", smua: 'd=m&s=b&u=u4141944&h=120' },
        ],
        priclist: [
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686159&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686159&h=220" },
            { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u3686145&h=220" },
        ],
        //新闻详情
        details: {
            //顶部广告
            topAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
            //内容底部广告
            bottomAD: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4144836&h=220" },
            //猜你喜欢5图广告
            IlickAd: { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4141823&h=400" },
            //推荐阅读列表广告
            RecommendList: [
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058335&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058407&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058437&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058439&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058441&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058444&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058447&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058549&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058551&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058334&h=120" },
                { type: 'ad', s: 'xcAD', smua: "d=m&s=b&u=u4058335&h=120" },
            ]

        },
        //图片详情
        picDetails: {
            picGroomIdsList: [
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
            ],
            picBottomAdId: [
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
                { uId: { id: 'u4021335', h: "20:4" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4021335' },
            ],
            picAdIdsList: [
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
                { uId: { id: 'u4115846', h: "20:15" }, type: 'xc', coverId: '', callBack: '', countId: 'xcu4115846' },
            ],
            linkList: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272681',
            linkDetail: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272682',
        },
        //红包链接
        linkAD: {
            newslist: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272681',
            details: 'http://engine.tuicoco.com/index/activity?appKey=KojNnfcjMmWb9NZaTbihqMwBRuc&adslotId=272682',
        },
        //密钥相关
        appKey:"index",
        appSecret: "f91d05d8-afa3-4804-9d00-8586fb2e27d0"
        
    }
}

module.exports = config;