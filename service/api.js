module.exports = {
    index: "/gate/ablHome/content",//首页
    productDetail:"/gate/goods/detailNew"
}


/*
module.exports = {
    //!******************* 购物车模块 *******************
    CartCount: "/v1/cart/count",//购物车数量
    AddToCart: "/v1/cart/add",//添加商品到购物车
    UpdateCart: "/v1/cart/update",//更新购物车商品数量
    DeleteCartItem: "/v1/cart/delete",//删除购物车中的商品
    GetCartList: "/v1/cart/details",//获取购物车列表数据
    EditCartItem: "/v1/cart/change/sku",//修改购物车商品属性
    NoLoginList: "/v1/cart/not-login",//获取未登陆购物车列表数据
    BatchAddToCart: "/v1/cart/batch-add",//批量添加商品购物车
    CleanCartOutOfStock: "/v1/cart/cleanOutOfStock",//清空购物车无库存sku

//!******************* 评论接口 *******************!/
    AddReview: "/comment/add",//添加评论
    GetProductReviewList: "/comment/product/comments", //获取商品评论列表
    GetMyReviewList: "/comment/user/comments",//获取我的评论列表

//!******************* 订单 *******************!/
    OrderPrepare: "/v1/order/create/v1/prepare",//预计算订单信息(金额，运费等)
    CreateOrder: "/v1/order/v1/create",//新建订单
    GetOrderList: "/v1/order/orders",//获取订单列表
    GetOrderDetail: "/v1/order/detail/v1",//获取订单详情-v1
    BuyAgain: "/v1/order/detail/sku/to/cart",//再次购买(加入购物车)

//!******************* 地址模块 *******************!/
    GetUserDefaultAddress: "/v1/userGoodsReceipt/default",//获取用户默认收货地址
    GetUserAddress: "/v1/userGoodsReceipt/list",//获取用户收货地址列表
    AddUserAddress: "/v1/userGoodsReceipt/add",//新增用户收货地址
    EditUserAddress: "/v1/userGoodsReceipt/update",//修改用户收货地址
    DeleteUserAddress: "/v1/userGoodsReceipt/delete", //删除用户收货地址
    SetUserDefaultAddress: "/v1/userGoodsReceipt/setUpIsDefault",//设置默认用户收货地址
    GetCountryList: "/v1/area/getByLevel",//获取国家列表接口
    GetAreaList: "/v1/area/getByParentId",//获取地区接口
    GetCountryCodeList: "/country/phone/code/active/list",//获取国际码列表接口


//!***********************COD支付****************************
    COD_SendMsg: "/v1/order/send/sms/pay/cash",//确认订单发送短信(目前为确认订单货到付款)
    COD_SubmitOrder: "/v1/order/pay/cash",//确认订单(cod提交订单)
    CancelOrder: "/v1/order/cancel/allPayMethod",//取消订单接口
    ChangePayMethod: "/v1/order/paymethod/change", //未付款订单修改支付方式接口
    GetExpressInfo: "/transport/getByOrdersn",//获取订单物流信息



//!******************* 首页 *******************!/
    GetIndexRecommendsList: "/home/recommends",//获取首页推荐数据
    GetCustomCategoryList: "/ablCustomCatgory/customCategoryDetail",//获取自定义分类商品列表信息
    GetActivityList: "/ablActiv/minorList",//获取活动商品列表信息
    GetIndexDetail: "/ablHome/content", //获取首页API信息接口

//!******************* 用户模块 *******************!/
    Login: "/v1/user/login",//用户登录接口
    Register: "/v1/user/register",//用户注册接口
    Logout: "/v1/user/logout", //用户登出接口
    ThirdLogin: "/v1/thirdPartyAccount/login",//验证第三方账号登录
    ChangePassword: "/v1/user/changePassword",//用户修改密码接口
    ForgotPassword: "/v1/user/forgetPassWord", //忘记密码接口
    ResetPassword: "/v1/user/resetPassword",//重置密码接口
    GetUserInfo: "/v1/userExpandInfo/getUserInfo",//获取用户个人信息
    EditUserDisplayName: "/v1/userExpandInfo/updateDisplayName", //修改用户名称
    EditUserCountry: "/v1/userExpandInfo/updateCountry",//修改用户所属国家
    EditUserBirthday: "/v1/userExpandInfo/updateBirthday", //修改用户生日日期
    EditUserSex: "/v1/userExpandInfo/updateSex", //修改用户性别
    EditUserHeadPortrait: "/v1/userExpandInfo/updateHeadPortrait", //修改用户头像

//!******************* 收藏 *******************!/

    GetWishList: "/v1/userCollection/list",//获取用户收藏列表
    AddToWish: "/v1/userCollection/add", //添加商品到用户收藏列表
    DeleteWishItem: "/v1/userCollection/remove", //删除用户收藏列表商品
    NoLogin_WishList: "/v1/userCollection/not-login",//未登录通过SKU数组获取商品列表信息（收藏未登录界面）


//!******************* 用户反馈模块 *******************!/
    GetCODFeedbackList: "/v1/feedback/option/options",//获取COD反馈选项列表接口
    SendFeedbackContent: "/v1/feedback/add", //发送COD反馈信息接口

//!******************* 搜索模块 *******************!/
    GetHotSearchList: "/v1/hotSearch/list",//获取热搜词列表
    Search: "/goods/searcherV1", //搜索商品

//!******************* 支付 *******************!/
    GetPaymentToken: "/v1/pay/token",//获取paypal支付Token
    Payment: "/v1/pay/payment",//paypal支付
    GetCoinList: "/v1/coin/list",//获取币种列表接口
    GetCountryAndCoinList: "/v1/coin/sort/list", //获取选择国家获取币种列表接口（首页初次进入调用）


    //!******************* 商品模块 *******************!/
    GetProductRecommendList: "/noactk/ablRecommnd/product", //商品推荐列表接口(非首页推荐)
    GetProductDetail: "/goods/detailNew",   //商品详情
    GetCategoryList: "/category/tree",//商品分类接口
    GetCategoryChildList: "/goods/list", //分类对应商品列表接口


//!******************* skybay基础信息模块 *******************!/
    GetAboutCompanyInfo: "/v1/about/company", //获取关于公司信息接口
    GetFaqList: "/faq/list", //获取FAQ列表接口
    GetFaqDetail: "/gate/faq", //FAQ详情   标准 /api/gate/faq/{id}
    GetFaqTitle: "/gate/ablFaqType/list", //FAQ问题类型列表：（获取faq头部列表）
    GetLanguageList: "/language/active/list",//语言列表
    SubmitContactUsContent: "/v1/contactUs/add",//发送联系我们内容
    GetContactUsInfo: "/v1/contactUs/contact/way", //获取联系我们的信息接口

//!******************* 优惠券模块 *******************!/
    GetMyCouponsList: "/coupon/myCouponList",//我的优惠券列表接口
    GetMyUnuseCouponQuantity: "/coupon/countMyCoupon",//获取我的优惠券 可用数量 接口
    GetCouponDetail: "/coupon/detail",//优惠券详情接口
    GetThisCoupon: "/coupon/takeCoupon", //用户领取优惠券接口
    GetCouponCanReceiveQuantity: "/coupon/countMyCanReceive",//用户待领取优惠券数量接口
    GetNewUserCouponWorth: "/coupon/newUserCouponWorth", //新用户发放优惠券的价值总和（新用户注册配送,个人中心弹框）
    GetCouponCenterList: "/coupon/center",//获取领券中心列表接口    字段："consumeType": 1, //消费方式:(0:全场,1:指定品牌,2:商品分类,3:H5活动,4:原生活动；5.指定商品
    GetCouponProductList: "/coupon/getCouponProductList",//获取商品的优惠券列表接口


//!******************* 活动、专题模块*******************!/
    GetGeneralActivtyList: " gate/ablActiv/minorList", //通用活动
    GetTopicList: "/gate/ablTopic/topic", //web专题api


//!******************* 抽奖活动API *******************!/
    GetLotteryList: "/gate/ablBigWheel/noactk/lotteryInfo",    //抽奖活动内容列表，包含奖品列表、推荐SKU信息列表
    GetWinningResult: "/gate/ablBigWheel/lottery", //抽奖算法API，计算中奖概率
    GetOtherActivityUrl: "/gate/ablBigWheel/noactk/getSessionVenueUrls",    //分会场详情API，传活动id，返回活动url
    GetShareAfterLottery: "/gate/ablBigWheel/share",//分享API，分享之后计算中奖

// ConfirmReceived:"/v1/order/confirm",//确认收货
// Get:"/v1/order/reddot/hint", //获取我的界面订单红点信息
//GetEmailVerifyCode:"/v1/user/email/verify/code", //获取验证邮箱验证码
// RegisterEmailActivity:"/noactk/email/registerConfirm", //注册用户邮箱激活接口
}*/
