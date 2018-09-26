let Request = require("../../service/request");

module.exports = {
    index: async function (ctx, next) {
        let par = {"orderByField": "id", "lng": 1}
        console.log("===》进入列表页");
        // {"uuid":null,"osType":2,"chn":"h5","versionCode":23,"phoneId":2,"accessToken":"fd5fb0f7-3240-4c55-9f98-3c78b8654a65","languageId":1,"coinId":3}
        let requestData = await Request.post("/goodsCategory/listGoodsCategory", par,ctx);
        await ctx.render("product/product_list", {requestData:requestData.data.list})
    }
}