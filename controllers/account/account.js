module.exports = {
    index: async function (ctx, next) {
        console.log('进入个人中心');
        await ctx.render("account/account", {})
    }
}