module.exports = {
    index: async function (ctx, next) {
        console.log('进入商品详情');
        await ctx.render("account/wish", {})
    }
}