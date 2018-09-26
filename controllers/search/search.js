module.exports = {
    index: async function (ctx, next) {
        console.log("===》进入搜索页");
        await ctx.render("search/search", {})
    }
}