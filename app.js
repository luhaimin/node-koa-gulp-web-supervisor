let Koa = require("koa2");
let app = new Koa();
let path = require("path");
let config = require("./config/index");




//国际化
let locale = require('koa-locale');
locale(app);

//TODO 设置ejs模板
var render = require('koa-swig');
var co = require("co");
/*let views = require("koa-views");//不能国际化，弃用
 app.use(views(path.join(__dirname, "views"), {
 extension: 'ejs'
 }))*/

app.context.render = co.wrap(render({
    root: __dirname + '/views',
    autoescape: true,
    cache: false, // cache:  false||默认'memory' ==>缓存
    ext: 'html'
}));


let i18n = require('koa-i18n');
app.use(i18n(app, {
    directory: './service/lang',
    locales: ['en', 'ar', 'zh'], //  en_US (美国) ,ar_SA(沙特阿拉伯),zh_CN 中文 (中国大陆)
    modes: [
        'cookie',               //`Cookie: locale=zh`   (cookie优先)
        'header',               // `Accept-Language: zh-CN,zh;q=0.5`
        'query',                //  optional detect querystring - `/?locale=en-US`
        'url',                  //  `/en`
        // 'subdomain',            // `zh-CN.koajs.com`  //子域名
        // 'tld',                  //  `skybay.cn`
        // function () {
        // }           //  自定义函数，绑定到koa的html,若出现未绑定页面会报错
    ]
}))

// app.use(function* (next) {
//  // this.body = this.i18n.__("locales.zh-CN");
//   this.body = this.i18n
//  });

//TODO 设置静态资源路径
let static = require('koa-static');
app.use(static(path.join(__dirname, "static"),{
    maxage: 365 * 24 * 60 * 60,
    gzip:true
}));

// app.use((ctx, next) => ctx.state = Object.assign(ctx.state, {key1: 'value1', key2: 'value2'}))

// TODO 路由
let routerRules = require("./router/router");


app
    .use(routerRules.routes())
    .use(routerRules.allowedMethods());

//TODO 错误URL跳转
app.use(async (ctx, next) => {
    let status = ctx.status;
    if (parseInt(status) === 404) {
        await ctx.render("error_page/error_url")
    }
})


//监听端口
console.log('环境', process.env.NODE_ENV);
console.log("http://localhost:" + config.port);

app.on('error', function (err, ctx) {
    if(err){
        console.log(err);
    }
});


app.listen(config.port)

