var getmac = require('getmac');
var post = require("../service/request")

module.exports = async function (ctx, next) {

    // 判断是手机、PC端
    let device_userAgent = ctx.request.header["user-agent"].toLowerCase();
    let phone_reg = /(iphone|ipod|ipad|android)/g;
    let phone = device_userAgent.match(phone_reg);
    if (process.env.NODE_ENV === "develop") {
        if (phone) {
            console.log("手机类型：" + phone);
        } else {
            console.log("pc端访问");
        }
    }


    /*
     //获取mac地址
     getmac.getMac(function(err, macAddress){
     if (err)  throw err
     console.log('macAddress',macAddress)
     })
     console.log("设置全局参数");*/

    let lang = ctx.cookies.get("lang") || 1;
    let coinId = ctx.cookies.get("coinId") || 1;
    let coinAb = ctx.cookies.get("coinAb") || "$";
    let token = ctx.cookies.get("token");
    let userId = ctx.cookies.get("userId");
    let G = {};
    G.lang = lang;
    G.coinId = coinId;
    G.coinAb = coinAb;
//若用户登录
    if (token && token.length > 0 && userId) {
        G.token = token;
        G.userId = userId;
    }
    G.m_requestMethods = post;

    ctx.state.G = G;
    await next()
}

