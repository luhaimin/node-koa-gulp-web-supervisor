let globalParams = require("../service/global");
let IndexController = require("../controllers/index/index");
let ProductListController = require("../controllers/product/product_list");
let ProductDetailController = require("../controllers/product/product_detail");
let SearchController = require("../controllers/search/search");

let Account = require("./account/index")

//路由
let router = require('koa-router')();
router.use(globalParams);

/*router.use(async (ctx, next) => {
 let lang = ctx.cookies.get("lang");
 let coinId = ctx.cookies.get("coinId") || 1;
 let coinAb = ctx.cookies.get("coinAb") || "$";

 if (lang) {
 ctx.state.lang = ctx.cookies.get("lang");
 }
 if (coinId) {
 ctx.state.coinId = ctx.cookies.get("coinId");
 ctx.state.coinId = ctx.cookies.get("coinAb");
 }


 await  next()
 });*/

router
    .get("/", IndexController.index)
    .get("/search",SearchController.index)//搜索
    .get("/detail/:id", ProductDetailController.index)//商品详情
    .get("/list/:id", ProductListController.index)//商品列表
    .get("/account",Account.account)//个人中心
    .get("/wish",Account.wish)//收藏夹
    .get("/cart",Account.cart)//收藏夹
    .get("/jsonp",async (ctx)=>{
         // ctx.response.body = "11111"

        var data = {'data':'world'};
        console.log(ctx.query);
        if(ctx.query.callback){
            console.log("jsonp回调");
            console.log(ctx.query.callback);
            //jsonp
            var str = ctx.query.callback + '(' + JSON.stringify(data) + ')';
             ctx.response.body = str
        } else {
            ctx.response.body = "错误"
        }

    })


module.exports = router;