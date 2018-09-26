module.exports = function (data, global) {
    /*2018/7/30
     *说明：
     *author:lu
     *@param: data为
             * {
             "skuId": 1,
             "quantity": 100,
             "sku": "Z101",
             "originPrice": 7562.5,
             "activePrice": 7362.5,
             "discount": 0.75,
             "activityStatus": 4（0 初始化活动 ,1 活动结束,2 活动停止,3, 降价状态,4, 打折状态）
             }
     *
     *
     *
     *@param:global为全局对象；包含语言id、货币id、货币符号
     */

    data["activityStatus"] = data["activityStatus"] * 1;//转Number
    let result = {};
    if (data.activityStatus === 0) {//原始价格
        result.price = handlePrice(global, data.originPrice);
        result.price_line = null;
        result.discount = null;
    } else if (data.activityStatus === 3) {//活动价格
        result['price'] = handlePrice(global, data.activePrice);
        result['price_line'] = handlePrice(global, data.originPrice);
        result['discount'] = null;
    } else if (data.activityStatus === 4) {//降价
        result['price'] = handlePrice(global, data.activePrice);
        result['price_line'] = handlePrice(global, data.originPrice);
        result['discount'] = data.discount+"% OFF";
    } else {//商品出错
        result['price'] = null;
        result['price_line'] = null;
        result['discount'] = null;
    }
    return result
}

function handlePrice(global, price) {
    /*2018/7/16
     *说明：价格符号 正反拼接
     *author:lu
     */
    global.coinId = global.coinId * 1;
    if (global.coinId === 3 || global.coinId === 4) {
        return price + global.coinAb
    } else {
        return global.coinAb + price;
    }
}
