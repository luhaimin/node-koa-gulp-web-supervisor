const hostName = process.env.NODE_ENV === "production"
    ? "https://www.xxxxx.com"
    : "https://www.yyyy.com"      //TODO 测试环境（因目前无测试环境）

// https://www.yujiso.com/api/sites
//https://www.skybaymall.com
//https://ceshi.api.vipsouq.net
module.exports = {
    port: 3000,
    imgBasePath: "http://localhost:3000/img",            //图片域（只供图片URL拼接时使用）
    apiBasePath: hostName + "/api"      //请求域
}
