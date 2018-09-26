module.exports = {
    index: async function (ctx, next) {
        console.log('进入购物车');
        await ctx.render("account/cart", {})
    }
}