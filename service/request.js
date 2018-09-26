const Axios = require("axios");
const Config = require("../config/index");

module.exports = {
    get: function () {

    },
    post: async function (api, opt, ctx) {

         //错误码处理
         //ctx.redirect("https://www.baidu.com");

        //大数据基础参数
        opt.uuid = null;//固定null
        opt.chn = "h5";//固定为h5
        opt.osType = 2;//2为h5   1为ios  0为Android
       // opt.phoneId = 2;//固定2
        opt.versionCode = 28;//java版本至少28以上

        //用户信息
        opt.languageId = ctx.state.G.lang;
        opt.coinId = ctx.state.G.coinId;
        if (ctx.state.G.token) {
            opt.token = ctx.state.G.token;
            opt.userId = ctx.state.G.userId;
        }
        if (process.env.NODE_ENV === "develop") {
            console.log('请求', opt);
        }


        return await new Promise(function (resolve, reject) {
            if (process.env.NODE_ENV === "develop") {
                console.log("请求API----", Config.apiBasePath + api);
            }

            Axios.post(Config.apiBasePath + api, opt)
                .then(response => {
                    /*
                     *若是未登录，可以在此实现
                     * */
                    // console.log(response);
                    resolve(response.data)
                })
        })

    }
}