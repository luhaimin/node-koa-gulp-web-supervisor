/**
 * Created by 62766 on 2018/7/7.
 * 轮播图跳转规则
 */

function routerRules(type, opt) {
    //1：商品, 2：专题, 3：活动(不分享), 4：分类, 5：Web URL, 6：优惠券，7：自定义分类 0 不跳转

    type = typeof type === "string" ? Number(type) : type;

    switch (type) {
        case 1:
            jump("https://www.skybaymall.com/#/goodsdetail?goodId=13339")
            break;
    }

}

function jump(url) {
    window.location.href = url;
}