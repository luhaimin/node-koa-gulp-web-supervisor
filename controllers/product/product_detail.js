let API = require("../../service/api");
let PriceRules = require("../public/priceRules");

module.exports = {
    index: async function (ctx, next) {
        //console.log('进入商品详情');
        let par = {
            productId: ctx.params.id
        }
        // console.log(ctx.state.G.m_requestMethods.post);
        /*let detail = await ctx.state.G.m_requestMethods.post(API.productDetail,par,ctx);//请求数据
         let detailData = detail.data;*/


        /*let detailData = {
         "defaultArea": null,
         "clickCount": 834,
         "skus": [{
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 359.98,
         "sku": "1000017",
         "skuId": 9,
         "attrs": [{
         "skuAttrId": 290,
         "valueId": 19,
         "valueName": "black",
         "keyName": "color",
         "keyId": 5,
         "sku": "1000017",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 291,
         "valueId": 388,
         "valueName": "8g",
         "keyName": "internal memory",
         "keyId": 6,
         "sku": "1000017",
         "mainAttrFlag": false
         }, {
         "skuAttrId": 292,
         "valueId": 385,
         "valueName": "1g",
         "keyName": "ram",
         "keyId": 333,
         "sku": "1000017",
         "mainAttrFlag": false
         }]
         }, {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 2809.91,
         "sku": "1000018",
         "skuId": 10,
         "attrs": [{
         "skuAttrId": 1846,
         "valueId": 20,
         "valueName": "white",
         "keyName": "color",
         "keyId": 5,
         "sku": "1000018",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 1847,
         "valueId": 388,
         "valueName": "8g",
         "keyName": "internal memory",
         "keyId": 6,
         "sku": "1000018",
         "mainAttrFlag": false
         }, {
         "skuAttrId": 1848,
         "valueId": 385,
         "valueName": "1g",
         "keyName": "ram",
         "keyId": 333,
         "sku": "1000018",
         "mainAttrFlag": false
         }]
         }, {
         "activePrice": null,
         "quantity": 2,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 4781.63,
         "sku": "1000019",
         "skuId": 11,
         "attrs": [{
         "skuAttrId": 672,
         "valueId": 21,
         "valueName": "gold",
         "keyName": "color",
         "keyId": 5,
         "sku": "1000019",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 673,
         "valueId": 388,
         "valueName": "8g",
         "keyName": "internal memory",
         "keyId": 6,
         "sku": "1000019",
         "mainAttrFlag": false
         }, {
         "skuAttrId": 674,
         "valueId": 385,
         "valueName": "1g",
         "keyName": "ram",
         "keyId": 333,
         "sku": "1000019",
         "mainAttrFlag": false
         }]
         }],
         "description": "<p><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\">&nbsp;Specifications:<br>8GB ROM, 1GB RAM<br>Dimension: 144.7*71.3*8.2MM&nbsp;<br>Platform: MTK6572 Dual core 1.3Ghz &nbsp;Processor<br>OS: android 4.4.2<br>flash memory: 1GB+8GB<br>Mode: dual sim dual standby<br>GSM: GSM85090018001900 WCDMA 850/2100<br>Screen: 5.0 inch QHD 540*960<br>GPS satellite positioning : yes<br>Wireless: WIFI,Bluetooth<br>Camera: front 30W ,back is 200 W<br>Flashlight: support&nbsp;<br>Torch: support&nbsp;<br>Speaker: Hi-Fi Stereo Speaker 1318<br>Media: FM Radio,MP3,MP4<br>Battery: 1400mAh battery<br>Memory Slot: Support the expansion, the largest support 32G<br>Color: black，white，gold<br>Package includes:<br>1*phone<br>1*earphone<br>1*USB line<br>1*charger<br>1*battery<br>1*box &nbsp; &nbsp;</font></font></font></font></font></font></font></font></p>",
         "pictures": [{
         "productId": 37,
         "smallImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100107192_K3iq_min.jpg",
         "largeImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100107192_K3iq.jpg",
         "mediumImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100107192_K3iq_mid.jpg",
         "proPictureId": 5442,
         "version": 41318
         }, {
         "productId": 37,
         "smallImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100108092_nfx0_min.jpg",
         "largeImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100108092_nfx0.jpg",
         "mediumImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-13/20170713100108092_nfx0_mid.jpg",
         "proPictureId": 5443,
         "version": 345
         }],
         "areaDeliveries": [{
         "deliveryMaxTime": "17/08/2018",
         "deliveryMax": 30,
         "areaId": 18590,
         "areaName": "Kuwait",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "27/07/2018",
         "deliveryMax": 9,
         "areaId": 18610,
         "areaName": "Oman",
         "quota": 329.96,
         "freight": 56.24,
         "deliveryMinTime": "25/07/2018",
         "deliveryMin": 7
         }, {
         "deliveryMaxTime": "30/07/2018",
         "deliveryMax": 12,
         "areaId": 18680,
         "areaName": "Qatar",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "28/07/2018",
         "deliveryMin": 10
         }, {
         "deliveryMaxTime": "02/08/2018",
         "deliveryMax": 15,
         "areaId": 18760,
         "areaName": "Saudi Arabia",
         "quota": 262.47,
         "freight": 56.24,
         "deliveryMinTime": "28/07/2018",
         "deliveryMin": 10
         }, {
         "deliveryMaxTime": "30/07/2018",
         "deliveryMax": 12,
         "areaId": 18770,
         "areaName": "Bahrain",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "29/07/2018",
         "deliveryMin": 11
         }, {
         "deliveryMaxTime": "02/08/2018",
         "deliveryMax": 15,
         "areaId": 18780,
         "areaName": "United Arab Emirates",
         "quota": 221.23,
         "freight": 37.50,
         "deliveryMinTime": "31/07/2018",
         "deliveryMin": 13
         }],
         "id": 37,
         "keyword": "Smart Phone",
         "seo": "G650 Smart Phone",
         "brandLogo": "/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg",
         "serviceTags": ["SOP", "COD", "Online Payment"],
         "brandName": "NULL",
         "brandSeo": "NULL",
         "updateTime": "2018-07-18T09:03:33.000+0000",
         "commentContent": {
         "averageStar": 4.7,
         "totalComments": 8,
         "comments": [{
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": "2017-11-04T01:40:02.000+0000",
         "imgCount": 0,
         "anonymous": true,
         "userName": "2***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "اعجبه جييدا",
         "child": []
         }, {
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": "2017-10-12T01:40:02.000+0000",
         "imgCount": 0,
         "anonymous": true,
         "userName": "b***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "جميل جدا",
         "child": []
         }, {
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": "2017-10-25T01:40:02.000+0000",
         "imgCount": 0,
         "anonymous": true,
         "userName": "e***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "الجهاز جميل و الشحن ممتاز و الهدية شكرا سغايباي",
         "child": []
         }],
         "hasComment": true
         },
         "specific": [{"values": "Android", "name": "Operating system"}],
         "attrs": [{
         "name": "color",
         "keyId": 5,
         "keySort": 1,
         "type": 1,
         "attrValues": [{
         "valueId": 19,
         "valueSort": 0,
         "skuPictures": [{
         "proAttrKeyId": 5,
         "proAttrValueId": 19,
         "productId": 37,
         "smallImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094709963_XlPW_min.jpg",
         "largeImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094709963_XlPW.jpg",
         "mediumImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094709963_XlPW_mid.jpg",
         "proPictureId": 1089,
         "version": null
         }],
         "value": "black"
         }, {
         "valueId": 20,
         "valueSort": 0,
         "skuPictures": [{
         "proAttrKeyId": 5,
         "proAttrValueId": 20,
         "productId": 37,
         "smallImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094839728_xTn1_min.jpg",
         "largeImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094839728_xTn1.jpg",
         "mediumImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094839728_xTn1_mid.jpg",
         "proPictureId": 1088,
         "version": null
         }],
         "value": "white"
         }, {
         "valueId": 21,
         "valueSort": 0,
         "skuPictures": [{
         "proAttrKeyId": 5,
         "proAttrValueId": 21,
         "productId": 37,
         "smallImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094833150_GGCg_min.jpg",
         "largeImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094833150_GGCg.jpg",
         "mediumImg": "https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2017-07-27/20170727094833150_GGCg_mid.jpg",
         "proPictureId": 1087,
         "version": null
         }],
         "value": "gold"
         }],
         "mainAttrFlag": true
         }, {
         "name": "internal memory",
         "keyId": 6,
         "keySort": 1,
         "type": 2,
         "attrValues": [{"valueId": 388, "valueSort": 21, "skuPictures": null, "value": "8g"}],
         "mainAttrFlag": false
         }, {
         "name": "ram",
         "keyId": 333,
         "keySort": 2,
         "type": 2,
         "attrValues": [{"valueId": 385, "valueSort": 23, "skuPictures": null, "value": "1g"}],
         "mainAttrFlag": false
         }],
         "brandShortName": "NULL",
         "createTime": "2017-07-21T07:43:45.000+0000",
         "specificsGroups": [{
         "groupName": "default group",
         "proAttrSpecificDtoList": [{"values": "Android", "name": "Operating system"}]
         }],
         "name": "G650 Smart Phone",
         "shareUrl": "null37",
         "couponCenterDtos": [],
         "favorite": false,
         "categoryId": 917,
         "favoriteCount": 646
         }*/

        let detailData = {
         "defaultArea": {
         "defaultAreaDeliveryMin": null,
         "defaultAreaDeliveryMaxTime": null,
         "defaultAreaDeliveryMax": null,
         "defaultAreaId": 415,
         "defaultAreaDeliveryMinTime": null,
         "defaultFreight": 56.24,
         "defaulArea": "Bahrain",
         "defaultQuota": 221.23
         },
         "clickCount": 2434,
         "attrs": [
         {
         "name": "Color",
         "keyId": 37087,
         "keySort": 1,
         "type": 1,
         "attrValues": [
         {
         "valueId": 429995,
         "valueSort": 0,
         "skuPictures": [
         {
         "proAttrKeyId": 37087,
         "proAttrValueId": 429995,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106158_XPeV_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106158_XPeV_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106158_XPeV_mid.jpg",
         "proPictureId": 193002,
         "version": null
         }],
         "value": "black"
         },
         {
         "valueId": 452342,
         "valueSort": 0,
         "skuPictures": [
         {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-23/20180423093013331_B6vT_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-23/20180423093013331_B6vT_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-23/20180423093013331_B6vT_mid.jpg",
         "proPictureId": 201431,
         "version": null
         }, {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106527_ImPr_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106527_ImPr_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082106527_ImPr_mid.jpg",
         "proPictureId": 201432,
         "version": null
         }, {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100348180_kF9E_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100348180_kF9E_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100348180_kF9E_mid.jpg",
         "proPictureId": 201433,
         "version": null
         }, {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100349019_IYYg_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100349019_IYYg_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100349019_IYYg_mid.jpg",
         "proPictureId": 201434,
         "version": null
         }, {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100409474_9ZP2_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100409474_9ZP2_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100409474_9ZP2_mid.jpg",
         "proPictureId": 201435,
         "version": null
         }, {
         "proAttrKeyId": 37087,
         "proAttrValueId": 452342,
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100350838_8phK_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100350838_8phK_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-04-08/20180408100350838_8phK_mid.jpg",
         "proPictureId": 201436,
         "version": null
         }],
         "value": "grey"
         }],
         "mainAttrFlag": true
         },
         {
         "name": "Size",
         "keyId": 37272,
         "keySort": 1,
         "type": 2,
         "attrValues": [{
         "valueId": 430010,
         "valueSort": 0,
         "skuPictures": null,
         "value": "39"
         }, {"valueId": 430013, "valueSort": 0, "skuPictures": null, "value": "41"}, {
         "valueId": 430016,
         "valueSort": 0,
         "skuPictures": null,
         "value": "42"
         }, {"valueId": 430019, "valueSort": 0, "skuPictures": null, "value": "43"}, {
         "valueId": 430022,
         "valueSort": 0,
         "skuPictures": null,
         "value": "44"
         }, {"valueId": 430025, "valueSort": 0, "skuPictures": null, "value": "45"}, {
         "valueId": 430028,
         "valueSort": 0,
         "skuPictures": null,
         "value": "46"
         }, {"valueId": 430032, "valueSort": 0, "skuPictures": null, "value": "40"}, {
         "valueId": 460910,
         "valueSort": 0,
         "skuPictures": null,
         "value": "47"
         }],
         "mainAttrFlag": false
         }],
         "skus": [
         {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235860",
         "skuId": 116671,
         "attrs": [
         {
         "skuAttrId": 285405,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235860",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285406,
         "valueId": 430028,
         "valueName": "46",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235860",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 1,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235858",
         "skuId": 116730,
         "attrs": [{
         "skuAttrId": 285505,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235858",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285506,
         "valueId": 430022,
         "valueName": "44",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235858",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 3,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235857",
         "skuId": 116760,
         "attrs": [{
         "skuAttrId": 285556,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235857",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285557,
         "valueId": 430019,
         "valueName": "43",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235857",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": 86.22,
         "quantity": 2,
         "activityStatus": 4,
         "discount": 0.53,
         "originPrice": 183.73,
         "sku": "1235856",
         "skuId": 116797,
         "attrs": [{
         "skuAttrId": 285616,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235856",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285617,
         "valueId": 430016,
         "valueName": "42",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235856",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 1,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235855",
         "skuId": 116831,
         "attrs": [{
         "skuAttrId": 285674,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235855",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285675,
         "valueId": 430013,
         "valueName": "41",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235855",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235854",
         "skuId": 116865,
         "attrs": [{
         "skuAttrId": 285730,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235854",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285731,
         "valueId": 430032,
         "valueName": "40",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235854",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 86.22,
         "sku": "1235853",
         "skuId": 116912,
         "attrs": [{
         "skuAttrId": 285804,
         "valueId": 452342,
         "valueName": "grey",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235853",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 285805,
         "valueId": 430010,
         "valueName": "39",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235853",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 104.97,
         "sku": "1235850",
         "skuId": 117120,
         "attrs": [
         {
         "skuAttrId": 286153,
         "valueId": 429995,
         "valueName": "black",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235850",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 286154,
         "valueId": 430025,
         "valueName": "45",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235850",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 1,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 104.97,
         "sku": "1235849",
         "skuId": 117196,
         "attrs": [{
         "skuAttrId": 286285,
         "valueId": 429995,
         "valueName": "black",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235849",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 286286,
         "valueId": 430022,
         "valueName": "44",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235849",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 0,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 104.97,
         "sku": "1235848",
         "skuId": 117267,
         "attrs": [{
         "skuAttrId": 286412,
         "valueId": 429995,
         "valueName": "black",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235848",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 286413,
         "valueId": 430019,
         "valueName": "43",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235848",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 2,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 104.97,
         "sku": "1235846",
         "skuId": 117392,
         "attrs": [{
         "skuAttrId": 286642,
         "valueId": 429995,
         "valueName": "black",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235846",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 286643,
         "valueId": 430013,
         "valueName": "41",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235846",
         "mainAttrFlag": false
         }]
         },
         {
         "activePrice": null,
         "quantity": 1,
         "activityStatus": 0,
         "discount": null,
         "originPrice": 104.97,
         "sku": "1235845",
         "skuId": 117451,
         "attrs": [{
         "skuAttrId": 286755,
         "valueId": 429995,
         "valueName": "black",
         "keyName": "Color",
         "keyId": 37087,
         "sku": "1235845",
         "mainAttrFlag": true
         }, {
         "skuAttrId": 286756,
         "valueId": 430032,
         "valueName": "40",
         "keyName": "Size",
         "keyId": 37272,
         "sku": "1235845",
         "mainAttrFlag": false
         }]
         }],
         "description": "<p><span style=\"font-size: 36px;\">Features:</span><br><span style=\"font-size: 36px;\">Get that quick first step with this super-light basketball shoe featuring a woven one-piece upper for a secure foundation on fast breaks.</span><br><span style=\"font-size: 36px;\">Fashion knitted upper for ultra-lightweight support and breathability can maximizes the upper surface, let your foot always keeps dry and cool.</span><br><span style=\"font-size: 36px;\">Stretch lining to increase comfort and breathability.</span><br><span style=\"font-size: 36px;\">Flexible outsole gives the foot maximum range in movement.</span><br><span style=\"font-size: 36px;\">Classic low-top sneaker featuring three-eyelet lace-up closure for easy on and off.</span><br><br><span style=\"font-size: 36px;\">Description:</span><br><span style=\"font-size: 36px;\">Rubber outsole offer enough flexibility and safety.</span><br><span style=\"font-size: 36px;\">Perfect choice to pair with any sport or casual assemble.</span><br><span style=\"font-size: 36px;\">The sporty casual look that is ideal for everyday wear, fitness, running, hiking.</span><br><br><span style=\"font-size: 36px;\">Specification:</span><br><span style=\"font-size: 36px;\">Material: rubber+mesh+cotton</span><br><span style=\"font-size: 36px;\">Color: black&amp;red, black&amp;blue, black&amp;white</span><br><span style=\"font-size: 36px;\">EU size 39 40 41 42 43 44 45 46 47</span><br><span style=\"font-size: 36px;\">US size 6.5 7 8 8.5 9.5 10 11 11.5 12.5</span><br><span style=\"font-size: 36px;\">Feet length(mm) 245 250 255 260 265 270 275 280 185</span><br><br><span style=\"font-size: 36px;\">Package included:</span><br><span style=\"font-size: 36px;\">1 pair shoes &nbsp; &nbsp;</span></p>",
         "pictures": [
         {
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094159490_BhvP_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094159490_BhvP_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094159490_BhvP_mid.jpg",
         "proPictureId": 766564,
         "version": 69571
         }, {
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094157974_J6KF_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094157974_J6KF_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-26/20180326094157974_J6KF_mid.jpg",
         "proPictureId": 766565,
         "version": 31010
         }, {
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005950_xFkf_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005950_xFkf_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005950_xFkf_mid.jpg",
         "proPictureId": 766566,
         "version": 82593
         }, {
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005294_Jkdh_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005294_Jkdh_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082005294_Jkdh_mid.jpg",
         "proPictureId": 766567,
         "version": 72228
         }, {
         "productId": 55213,
         "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082006269_2oyS_min.jpg",
         "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082006269_2oyS_max.jpg",
         "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-12-15/20171215082006269_2oyS_mid.jpg",
         "proPictureId": 766568,
         "version": 69772
         }],
         "areaDeliveries": [
         {
         "deliveryMaxTime": "07/08/2018",
         "deliveryMax": 20,
         "areaId": 18590,
         "areaName": "Kuwait",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "07/08/2018",
         "deliveryMax": 20,
         "areaId": 18770,
         "areaName": "Bahrain",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "07/08/2018",
         "deliveryMax": 20,
         "areaId": 18760,
         "areaName": "Saudi Arabia",
         "quota": 262.47,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "07/08/2018",
         "deliveryMax": 20,
         "areaId": 18680,
         "areaName": "Qatar",
         "quota": 221.23,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "07/08/2018",
         "deliveryMax": 20,
         "areaId": 18610,
         "areaName": "Oman",
         "quota": 329.96,
         "freight": 56.24,
         "deliveryMinTime": "02/08/2018",
         "deliveryMin": 15
         }, {
         "deliveryMaxTime": "28/07/2018",
         "deliveryMax": 10,
         "areaId": 18780,
         "areaName": "United Arab Emirates",
         "quota": 221.23,
         "freight": 37.50,
         "deliveryMinTime": "25/07/2018",
         "deliveryMin": 7
         }],
         "id": 55213,
         "keyword": "Men Fly Knitted Sports Sneakers Flexible Athletic Casual Lace-up Shoes QC36028",
         "seo": "Men Fly Knitted Sports Sneakers Flexible Athletic Casual Lace-up Shoes QC36028",
         "brandLogo": "/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg",
         "serviceTags": ["SOP", "COD", "Online Payment"],
         "brandName": "NULL",
         "brandSeo": "NULL",
         "updateTime": 1531868443000,
         "commentContent": {
         "averageStar": 4.4,
         "totalComments": 8,
         "comments": [
         {
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": 1512694452000,
         "imgCount": 0,
         "anonymous": true,
         "userName": "0***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "Good product as doing the job with leathers… Only rubber grip.",
         "child": []
         }, {
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": 1511830452000,
         "imgCount": 0,
         "anonymous": true,
         "userName": "z***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "جميل تظهر النتيجه وسعر مناسب جدا وتوصيل سريع.....",
         "child": []
         }, {
         "imgs": null,
         "star": 5,
         "productId": 0,
         "createTime": 1509324852000,
         "imgCount": 0,
         "anonymous": true,
         "userName": "O***",
         "type": 2,
         "foolr": 1,
         "userId": 0,
         "content": "توقعتها اكبر طلعت صغيرة بس يالله بجربها",
         "child": []
         }],
         "hasComment": true
         },
         "specific": [
         {"values": "Light Runing", "name": "Athletic Series"}, {
         "values": "QC36028",
         "name": "Model Number"
         }, {"values": "Advanced", "name": "Department Name"}, {
         "values": "Fall2017",
         "name": "Time to market"
         }, {"values": "Rubber+Mesh+Cotton", "name": "Material"}, {
         "values": "Men",
         "name": "Gender"
         }, {"values": "Stability", "name": "Function"}, {
         "values": "Outdoor Lawn",
         "name": "Applicable Place"
         }, {"values": "Lace-Up", "name": "Closure Type"}],
         "brandShortName": "NULL",
         "createTime": 1513298640000,
         "name": "Men Fly Knitted Sports Sneakers Flexible Athletic Casual Lace-up Shoes QC36028",
         "shareUrl": "https://www.skybaymall.com/detail/55213",
         "couponCenterDtos": [],
         "favorite": false,
         "categoryId": 1277,
         "favoriteCount": 49
         }

        /*let detailData= {
            "defaultArea": {
                "defaultAreaDeliveryMin": null,
                "defaultAreaDeliveryMaxTime": null,
                "defaultAreaDeliveryMax": null,
                "defaultAreaId": 415,
                "defaultAreaDeliveryMinTime": null,
                "defaultFreight": 56.24,
                "defaulArea": "Bahrain",
                "defaultQuota": 221.23
            },
            "clickCount": 3342,
            "attrs": [
                {
                    "name": "Color",
                    "keyId": 8331,
                    "keySort": 1,
                    "type": 1,
                    "attrValues": [
                        {
                            "valueId": 38476,
                            "valueSort": 0,
                            "skuPictures": [
                                {
                                    "proAttrKeyId": 8331,
                                    "proAttrValueId": 38476,
                                    "productId": 16430,
                                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093119117_h92G_min.jpg",
                                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093119117_h92G_max.jpg",
                                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093119117_h92G_mid.jpg",
                                    "proPictureId": 58502,
                                    "version": null
                                }],
                            "value": "pink"
                        },
                        {
                            "valueId": 52033,
                            "valueSort": 0,
                            "skuPictures": [{
                                "proAttrKeyId": 8331,
                                "proAttrValueId": 52033,
                                "productId": 16430,
                                "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118434_jJP9_min.jpg",
                                "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118434_jJP9_max.jpg",
                                "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118434_jJP9_mid.jpg",
                                "proPictureId": 58545,
                                "version": null
                            }],
                            "value": "black"
                        },
                        {
                            "valueId": 239200,
                            "valueSort": 0,
                            "skuPictures": [{
                                "proAttrKeyId": 8331,
                                "proAttrValueId": 239200,
                                "productId": 16430,
                                "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118825_eOLn_min.jpg",
                                "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118825_eOLn_max.jpg",
                                "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093118825_eOLn_mid.jpg",
                                "proPictureId": 58537,
                                "version": null
                            }],
                            "value": "Dark Blue"
                        },
                        {
                            "valueId": 239228,
                            "valueSort": 0,
                            "skuPictures": [{
                                "proAttrKeyId": 8331,
                                "proAttrValueId": 239228,
                                "productId": 16430,
                                "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093117964_uHB2_min.jpg",
                                "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093117964_uHB2_max.jpg",
                                "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093117964_uHB2_mid.jpg",
                                "proPictureId": 58553,
                                "version": null
                            }],
                            "value": "White"
                        }
                    ],
                    "mainAttrFlag": true
                },
                {
                    "name": "Size",
                    "keyId": 8332,
                    "keySort": 1,
                    "type": 2,
                    "attrValues": [
                        {"valueId": 38477, "valueSort": 3, "skuPictures": null, "value": "L"},
                        {
                            "valueId": 38488,
                            "valueSort": 4,
                            "skuPictures": null,
                            "value": "XL"
                        },
                        {"valueId": 61194, "valueSort": 2, "skuPictures": null, "value": "M"},
                        {
                            "valueId": 373578,
                            "valueSort": 5,
                            "skuPictures": null,
                            "value": "XXL"
                        }],
                    "mainAttrFlag": false
                }],
            "skus": [
                {
                    "activePrice": null,
                    "quantity": 30,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 48.72,
                    "sku": "1148391",
                    "skuId": 34494,
                    "attrs": [
                        {
                            "skuAttrId": 86912,
                            "valueId": 38476,
                            "valueName": "pink",
                            "keyName": "Color",
                            "keyId": 8331,
                            "sku": "1148391",
                            "mainAttrFlag": true
                        }, {
                            "skuAttrId": 86913,
                            "valueId": 38488,
                            "valueName": "XL",
                            "keyName": "Size",
                            "keyId": 8332,
                            "sku": "1148391",
                            "mainAttrFlag": false
                        }]
                },
                {
                    "activePrice": null,
                    "quantity": 37,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148389",
                    "skuId": 34512,
                    "attrs": [{
                        "skuAttrId": 86906,
                        "valueId": 38476,
                        "valueName": "pink",
                        "keyName": "Color",
                        "keyId": 8331,
                        "sku": "1148389",
                        "mainAttrFlag": true
                    }, {
                        "skuAttrId": 86907,
                        "valueId": 61194,
                        "valueName": "M",
                        "keyName": "Size",
                        "keyId": 8332,
                        "sku": "1148389",
                        "mainAttrFlag": false
                    }]
                },
                {
                    "activePrice": null,
                    "quantity": 20,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148387",
                    "skuId": 34535,
                    "attrs": [
                        {
                            "skuAttrId": 86902,
                            "valueId": 239200,
                            "valueName": "Dark Blue",
                            "keyName": "Color",
                            "keyId": 8331,
                            "sku": "1148387",
                            "mainAttrFlag": true
                        }, {
                            "skuAttrId": 86903,
                            "valueId": 38488,
                            "valueName": "XL",
                            "keyName": "Size",
                            "keyId": 8332,
                            "sku": "1148387",
                            "mainAttrFlag": false
                        }]
                },
                {
                    "activePrice": null,
                    "quantity": -1,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148386",
                    "skuId": 34542,
                    "attrs": [{
                        "skuAttrId": 86900,
                        "valueId": 239200,
                        "valueName": "Dark Blue",
                        "keyName": "Color",
                        "keyId": 8331,
                        "sku": "1148386",
                        "mainAttrFlag": true
                    }, {
                        "skuAttrId": 86901,
                        "valueId": 38477,
                        "valueName": "L",
                        "keyName": "Size",
                        "keyId": 8332,
                        "sku": "1148386",
                        "mainAttrFlag": false
                    }]
                },
                {
                    "activePrice": null,
                    "quantity": 30,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148385",
                    "skuId": 34547,
                    "attrs": [{
                        "skuAttrId": 86892,
                        "valueId": 239200,
                        "valueName": "Dark Blue",
                        "keyName": "Color",
                        "keyId": 8331,
                        "sku": "1148385",
                        "mainAttrFlag": true
                    }, {
                        "skuAttrId": 86893,
                        "valueId": 61194,
                        "valueName": "M",
                        "keyName": "Size",
                        "keyId": 8332,
                        "sku": "1148385",
                        "mainAttrFlag": false
                    }]
                },
                {
                    "activePrice": null,
                    "quantity": 32,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148378",
                    "skuId": 34561,
                    "attrs": [{
                        "skuAttrId": 86878,
                        "valueId": 239228,
                        "valueName": "White",
                        "keyName": "Color",
                        "keyId": 8331,
                        "sku": "1148378",
                        "mainAttrFlag": true
                    }, {
                        "skuAttrId": 86879,
                        "valueId": 38477,
                        "valueName": "L",
                        "keyName": "Size",
                        "keyId": 8332,
                        "sku": "1148378",
                        "mainAttrFlag": false
                    }]
                },
                {
                    "activePrice": null,
                    "quantity": 24,
                    "activityStatus": 0,
                    "discount": null,
                    "originPrice": 44.97,
                    "sku": "1148377",
                    "skuId": 34563,
                    "attrs": [{
                        "skuAttrId": 86875,
                        "valueId": 239228,
                        "valueName": "White",
                        "keyName": "Color",
                        "keyId": 8331,
                        "sku": "1148377",
                        "mainAttrFlag": true
                    }, {
                        "skuAttrId": 86876,
                        "valueId": 61194,
                        "valueName": "M",
                        "keyName": "Size",
                        "keyId": 8332,
                        "sku": "1148377",
                        "mainAttrFlag": false
                    }]
                }
            ],
            "description": "<p><span style=\"font-size: 36px;\">Features:</span></p><p><span style=\"font-size: 36px;\">The modern and sexy design makes your more beautiful.</span></p><p><span style=\"font-size: 36px;\">Special and modern design makes you more attractive, charming, fashion and chic.</span></p><p><span style=\"font-size: 36px;\">This bold, enticing costume is the beginning to an adventurous time.&nbsp;</span></p><p><span style=\"font-size: 36px;\">Its a good gift for your lover, family, friend ,best sexy gift for you.</span></p><p><span style=\"font-size: 36px;\">Very comfortable to touch and wear and one size fits for most people.</span></p><p><span style=\"font-size: 36px;\"><br></span></p><p><span style=\"font-size: 36px;\">Specifications:</span></p><p><span style=\"font-size: 36px;\">Size/ Chest/ Shoulder/ Length/ Sleeve</span></p><p><span style=\"font-size: 36px;\">M 114cm 57cm 87cm 24cm</span></p><p><span style=\"font-size: 36px;\">L 118cm 59cm 87cm 25cm</span></p><p><span style=\"font-size: 36px;\">XL 124cm 62cm 89cm 27cm</span></p><p><span style=\"font-size: 36px;\">XXL 134cm 67cm 89cm 29cm</span></p><p><span style=\"font-size: 36px;\"><br></span></p><p><span style=\"font-size: 36px;\">Package Contents:</span></p><p><span style=\"font-size: 36px;\">1 x Women Sleep Dress</span></p><div><br></div>",
            "pictures": [
                {
                    "productId": 16430,
                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111443997_q4L4_min.jpg",
                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111443997_q4L4_max.jpg",
                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111443997_q4L4_mid.jpg",
                    "proPictureId": 757942,
                    "version": 90338
                }, {
                    "productId": 16430,
                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111447067_lrl4_min.jpg",
                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111447067_lrl4_max.jpg",
                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2018-03-06/20180306111447067_lrl4_mid.jpg",
                    "proPictureId": 757943,
                    "version": 20404
                }, {
                    "productId": 16430,
                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093044288_IOTF_min.jpg",
                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093044288_IOTF_max.jpg",
                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093044288_IOTF_mid.jpg",
                    "proPictureId": 757944,
                    "version": 17347
                }, {
                    "productId": 16430,
                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093114658_Uyc3_min.jpg",
                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093114658_Uyc3_max.jpg",
                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093114658_Uyc3_mid.jpg",
                    "proPictureId": 757945,
                    "version": 55797
                }, {
                    "productId": 16430,
                    "smallImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093116621_Pbj7_min.jpg",
                    "largeImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093116621_Pbj7_max.jpg",
                    "mediumImg": "https://img.vipsouq.net/yks-resource/screen/2017-11-07/20171107093116621_Pbj7_mid.jpg",
                    "proPictureId": 757946,
                    "version": 82976
                }],
            "areaDeliveries": [
                {
                    "deliveryMaxTime": "08/08/2018",
                    "deliveryMax": 20,
                    "areaId": 18590,
                    "areaName": "Kuwait",
                    "quota": 221.23,
                    "freight": 56.24,
                    "deliveryMinTime": "03/08/2018",
                    "deliveryMin": 15
                }, {
                    "deliveryMaxTime": "08/08/2018",
                    "deliveryMax": 20,
                    "areaId": 18770,
                    "areaName": "Bahrain",
                    "quota": 221.23,
                    "freight": 56.24,
                    "deliveryMinTime": "03/08/2018",
                    "deliveryMin": 15
                }, {
                    "deliveryMaxTime": "08/08/2018",
                    "deliveryMax": 20,
                    "areaId": 18760,
                    "areaName": "Saudi Arabia",
                    "quota": 262.47,
                    "freight": 56.24,
                    "deliveryMinTime": "03/08/2018",
                    "deliveryMin": 15
                }, {
                    "deliveryMaxTime": "08/08/2018",
                    "deliveryMax": 20,
                    "areaId": 18680,
                    "areaName": "Qatar",
                    "quota": 221.23,
                    "freight": 56.24,
                    "deliveryMinTime": "03/08/2018",
                    "deliveryMin": 15
                }, {
                    "deliveryMaxTime": "08/08/2018",
                    "deliveryMax": 20,
                    "areaId": 18610,
                    "areaName": "Oman",
                    "quota": 329.96,
                    "freight": 56.24,
                    "deliveryMinTime": "03/08/2018",
                    "deliveryMin": 15
                }, {
                    "deliveryMaxTime": "29/07/2018",
                    "deliveryMax": 10,
                    "areaId": 18780,
                    "areaName": "United Arab Emirates",
                    "quota": 221.23,
                    "freight": 37.50,
                    "deliveryMinTime": "26/07/2018",
                    "deliveryMin": 7
                }],
            "id": 16430,
            "keyword": "Comfortable Women Sleep Dress Peacock Floral Printed Sexy Silk Sleepwear,Sleep Dress,Sleepwear,Silk",
            "seo": "Comfortable Women Sleep Dress Peacock Floral Printed Sexy Silk Sleepwear",
            "brandLogo": "/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg",
            "serviceTags": ["SOP", "COD", "Online Payment"],
            "brandName": "NULL",
            "brandSeo": "NULL",
            "updateTime": 1531958943000,
            "commentContent": {
                "averageStar": 5.0,
                "totalComments": 8,
                "comments": [{
                    "imgs": null,
                    "star": 5,
                    "productId": 0,
                    "createTime": 1508915082000,
                    "imgCount": 0,
                    "anonymous": true,
                    "userName": "P***",
                    "type": 2,
                    "foolr": 1,
                    "userId": 0,
                    "content": "جيد جدا والتعامل جدا",
                    "child": []
                }, {
                    "imgs": null,
                    "star": 5,
                    "productId": 0,
                    "createTime": 1506236682000,
                    "imgCount": 0,
                    "anonymous": true,
                    "userName": "C***",
                    "type": 2,
                    "foolr": 1,
                    "userId": 0,
                    "content": "عملية ومريحة واوفت بالغرض المطلوب",
                    "child": []
                }, {
                    "imgs": null,
                    "star": 5,
                    "productId": 0,
                    "createTime": 1506409482000,
                    "imgCount": 0,
                    "anonymous": true,
                    "userName": "Z***",
                    "type": 2,
                    "foolr": 1,
                    "userId": 0,
                    "content": "من أجمل المنتجات اللى إشتريتها من سوق بصراحه .. و شكرا على سرعة التوصيل والتغليف الرائع",
                    "child": []
                }],
                "hasComment": true
            },
            "specific": [
                {"values": "Full", "name": "Sleeve Length"}, {
                    "values": "silk",
                    "name": "Material Composition"
                }, {"values": "Animal", "name": "Pattern Type"}, {
                    "values": "Summer",
                    "name": "Season"
                }, {"values": "V-Neck", "name": "Collar"}, {"values": "120.0000", "name": "Weight"}],
            "brandShortName": "NULL",
            "createTime": 1510110817000,
            "name": "Comfortable Women Peacock Floral Printed Sexy Silk Sleepwear",
            "shareUrl": "https://www.skybaymall.com/detail/16430",
            "couponCenterDtos": [],
            "favorite": false,
            "categoryId": 1363,
            "favoriteCount": 414
        };*/
         // var detailData = {"defaultArea":null,"clickCount":948,"skus":[{"activePrice":null,"quantity":0,"activityStatus":0,"discount":null,"originPrice":1125.09,"sku":"1263835","skuId":1507,"attrs":[{"skuAttrId":4716,"valueId":170472,"valueName":"balabala","keyName":"Color","keyId":1277,"sku":"1263835","mainAttrFlag":true},{"skuAttrId":4717,"valueId":170471,"valueName":"kjaslsadlkdsjla;lkdsadlal?lksdjalas.","keyName":"狗狗test","keyId":24111,"sku":"1263835","mainAttrFlag":false}]},{"activePrice":null,"quantity":0,"activityStatus":0,"discount":null,"originPrice":43.08,"sku":"1263837","skuId":1508,"attrs":[{"skuAttrId":4710,"valueId":4247,"valueName":"Red","keyName":"Color","keyId":1277,"sku":"1263837","mainAttrFlag":true},{"skuAttrId":4711,"valueId":2701,"valueName":"XS","keyName":"Size","keyId":1278,"sku":"1263837","mainAttrFlag":false},{"skuAttrId":4712,"valueId":170465,"valueName":"Squirrel","keyName":"狗狗test","keyId":24111,"sku":"1263837","mainAttrFlag":false}]},{"activePrice":null,"quantity":0,"activityStatus":0,"discount":null,"originPrice":15.00,"sku":"1263838","skuId":1509,"attrs":[{"skuAttrId":4713,"valueId":31478,"valueName":"randomly delivered","keyName":"Color","keyId":1277,"sku":"1263838","mainAttrFlag":true},{"skuAttrId":4714,"valueId":2701,"valueName":"XS","keyName":"Size","keyId":1278,"sku":"1263838","mainAttrFlag":false},{"skuAttrId":4715,"valueId":170464,"valueName":"狗狗你好","keyName":"狗狗test","keyId":24111,"sku":"1263838","mainAttrFlag":false}]}],"description":"<p><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face='Arial' style=\"font-size: 36px;\"><font face=\"Arial\" style=\"font-size: 36px;\">啊狗啊猫<br></font></font></font></font></p>","pictures":[{"productId":1072,"smallImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162030543_5LVf_min.jpg","largeImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162030543_5LVf_max.jpg","mediumImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162030543_5LVf_mid.jpg","proPictureId":7943,"version":2112},{"productId":1072,"smallImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162042340_vKqU_min.png","largeImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162042340_vKqU_max.png","mediumImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162042340_vKqU_mid.png","proPictureId":7944,"version":17746}],"areaDeliveries":[{"deliveryMaxTime":"28/07/2018","deliveryMax":9,"areaId":18610,"areaName":"Oman","quota":329.96,"freight":56.24,"deliveryMinTime":"26/07/2018","deliveryMin":7},{"deliveryMaxTime":"31/07/2018","deliveryMax":12,"areaId":18680,"areaName":"Qatar","quota":221.23,"freight":56.24,"deliveryMinTime":"29/07/2018","deliveryMin":10},{"deliveryMaxTime":"03/08/2018","deliveryMax":15,"areaId":18760,"areaName":"Saudi Arabia","quota":262.47,"freight":56.24,"deliveryMinTime":"29/07/2018","deliveryMin":10},{"deliveryMaxTime":"31/07/2018","deliveryMax":12,"areaId":18770,"areaName":"Bahrain","quota":221.23,"freight":56.24,"deliveryMinTime":"30/07/2018","deliveryMin":11},{"deliveryMaxTime":"03/08/2018","deliveryMax":15,"areaId":18780,"areaName":"United Arab Emirates","quota":221.23,"freight":37.50,"deliveryMinTime":"01/08/2018","deliveryMin":13},{"deliveryMaxTime":"18/08/2018","deliveryMax":30,"areaId":18590,"areaName":"Kuwait","quota":221.23,"freight":56.24,"deliveryMinTime":"02/08/2018","deliveryMin":14}],"id":1072,"keyword":"啊狗啊猫","seo":"啊狗啊猫","brandLogo":"/yks-resource/screen/2018-01-12/20180112104637565_0cHR.png","serviceTags":["SOP","COD","Online Payment"],"brandName":"太阳的品牌en","brandSeo":"太阳的品牌en","updateTime":1531993067000,"commentContent":{"averageStar":4.9,"totalComments":8,"comments":[{"imgs":null,"star":5,"productId":0,"createTime":1523245853000,"imgCount":0,"anonymous":true,"userName":"6***","type":2,"foolr":1,"userId":0,"content":"جيد وممتاز...أجد فيه كل شيئ","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1520481053000,"imgCount":0,"anonymous":true,"userName":"e***","type":2,"foolr":1,"userId":0,"content":"ممتاز في الاستخدام","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1523591454000,"imgCount":0,"anonymous":true,"userName":"q***","type":2,"foolr":1,"userId":0,"content":"شكل جميل مواصفات حلوة","child":[]}],"hasComment":true},"specific":[{"values":"lkdsjalkdjlasdakdlka;,ldasldlaskd;laskd;ka;sd,;ldks;dk;akdlakd;akd;a;dk;adkas;dkaskd;ak;d;ad;ask;dalda;ld;alda;lda;d;ald;lad;;adada;lsd;ladal;d;lasdl;ak;dkaldl;askdakl;dka;dad;ladkl;akd;laldsas;ldad;ladk","name":"lksalpdjlkajalkda"},{"values":"Hoopet","name":"Brand Name"},{"values":"Print","name":"Pattern"},{"values":"Universal","name":"Applicable Dog Breed"},{"values":"within 6 kg","name":"Load"},{"values":"Leashes","name":"Type"},{"values":"420.0000","name":"Length"},{"values":"scratching hook","name":"Style"},{"values":"Cloth","name":"Material"},{"values":"Autumn/Winter","name":"Season"},{"values":"Eco-Friendly,Stocked","name":"Feature"},{"values":"kdaskjdslkjadjkajladjldajalk;kldjasljdkaljdljaldajdljlad'kldalkdkjdadakdla.lkdsalsdkaldsalsdaka`lkdjalkalkdlkada;lkdjalkkadlasldkadla.lkdaljdljajdklaljdkajdl?kdjaskldsklalkdjlkasjlkdsjaldjakadlj'lkdjaslkdlkalkdlakddlakldakladk.lkdjaskldlkjadlakdlkadkakdjakldak;dlkjsakljdlalkdkajdlajdkada;lkdjakldj1","name":"test002"},{"values":"123","name":"lksjaskldjljdslsajdajldalkasdjaslkdj"},{"values":"test","name":"test"},{"values":"kdaskjdslkjadjkajladjldajalk;kldjasljdkaljdljaldajdljlad'kldalkdkjdadakdla.lkdsalsdkaldsalsdaka`lkdjalkalkdlkada;lkdjalkkadlasldkadla.lkdaljdljajdklaljdkajdl?kdjaskldsklalkdjlkasjlkdsjaldjakadlj'lkdjaslkdlkalkdlakddlakldakladk.lkdjaskldlkjadlakdlkadkakdjakldak;dlkjsakljdlalkdkajdlajdkada;lkdjakldj1","name":"test001"},{"values":"1","name":"1"}],"attrs":[{"name":"Color","keyId":1277,"keySort":1,"type":1,"attrValues":[{"valueId":4247,"valueSort":0,"skuPictures":[{"proAttrKeyId":1277,"proAttrValueId":4247,"productId":1072,"smallImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102930925_IrKw_min.jpg","largeImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102930925_IrKw_max.jpg","mediumImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102930925_IrKw_mid.jpg","proPictureId":2324,"version":null}],"value":"Red"},{"valueId":31478,"valueSort":0,"skuPictures":[{"proAttrKeyId":1277,"proAttrValueId":31478,"productId":1072,"smallImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102920996_GwBo_min.jpg","largeImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102920996_GwBo_max.jpg","mediumImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-04-28/20180428102920996_GwBo_mid.jpg","proPictureId":2323,"version":null}],"value":"randomly delivered"},{"valueId":170472,"valueSort":0,"skuPictures":[{"proAttrKeyId":1277,"proAttrValueId":170472,"productId":1072,"smallImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162613230_LCFs_min.jpg","largeImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162613230_LCFs_max.jpg","mediumImg":"https://ceshi.fileresource.vipsouq.net/yks-resource/screen/2018-02-02/20180202162613230_LCFs_mid.jpg","proPictureId":2260,"version":null}],"value":"balabala"}],"mainAttrFlag":true},{"name":"Size","keyId":1278,"keySort":1,"type":2,"attrValues":[{"valueId":2701,"valueSort":0,"skuPictures":null,"value":"XS"}],"mainAttrFlag":false},{"name":"狗狗test","keyId":24111,"keySort":2,"type":2,"attrValues":[{"valueId":170464,"valueSort":0,"skuPictures":null,"value":"狗狗你好"},{"valueId":170465,"valueSort":0,"skuPictures":null,"value":"Squirrel"},{"valueId":170471,"valueSort":0,"skuPictures":null,"value":"kjaslsadlkdsjla;lkdsadlal?lksdjalas."}],"mainAttrFlag":false}],"brandShortName":"太阳的品牌en","createTime":1517559670000,"specificsGroups":[{"groupName":"default group","iconUrl":"https://ceshi.fileresource.vipsouq.netnull","proAttrSpecificDtoList":[{"values":"lkdsjalkdjlasdakdlka;,ldasldlaskd;laskd;ka;sd,;ldks;dk;akdlakd;akd;a;dk;adkas;dkaskd;ak;d;ad;ask;dalda;ld;alda;lda;d;ald;lad;;adada;lsd;ladal;d;lasdl;ak;dkaldl;askdakl;dka;dad;ladkl;akd;laldsas;ldad;ladk","name":"lksalpdjlkajalkda"},{"values":"Hoopet","name":"Brand Name"},{"values":"Print","name":"Pattern"},{"values":"Universal","name":"Applicable Dog Breed"},{"values":"within 6 kg","name":"Load"},{"values":"Leashes","name":"Type"},{"values":"420.0000","name":"Length"},{"values":"scratching hook","name":"Style"},{"values":"Cloth","name":"Material"},{"values":"Autumn/Winter","name":"Season"},{"values":"Eco-Friendly,Stocked","name":"Feature"},{"values":"kdaskjdslkjadjkajladjldajalk;kldjasljdkaljdljaldajdljlad'kldalkdkjdadakdla.lkdsalsdkaldsalsdaka`lkdjalkalkdlkada;lkdjalkkadlasldkadla.lkdaljdljajdklaljdkajdl?kdjaskldsklalkdjlkasjlkdsjaldjakadlj'lkdjaslkdlkalkdlakddlakldakladk.lkdjaskldlkjadlakdlkadkakdjakldak;dlkjsakljdlalkdkajdlajdkada;lkdjakldj1","name":"test002"},{"values":"123","name":"lksjaskldjljdslsajdajldalkasdjaslkdj"},{"values":"test","name":"test"},{"values":"kdaskjdslkjadjkajladjldajalk;kldjasljdkaljdljaldajdljlad'kldalkdkjdadakdla.lkdsalsdkaldsalsdaka`lkdjalkalkdlkada;lkdjalkkadlasldkadla.lkdaljdljajdklaljdkajdl?kdjaskldsklalkdjlkasjlkdsjaldjakadlj'lkdjaslkdlkalkdlakddlakldakladk.lkdjaskldlkjadlakdlkadkakdjakldak;dlkjsakljdlalkdkajdlajdkada;lkdjakldj1","name":"test001"},{"values":"1","name":"1"}]}],"name":"啊狗啊猫","shareUrl":"null1072","couponCenterDtos":[],"favorite":false,"categoryId":939,"favoriteCount":758}
       // var detailData = {"defaultArea":{"defaultAreaDeliveryMin":null,"defaultAreaDeliveryMaxTime":null,"defaultAreaDeliveryMax":null,"defaultAreaId":415,"defaultAreaDeliveryMinTime":null,"defaultFreight":56.24,"defaulArea":"Bahrain","defaultQuota":221.23},"clickCount":6069,"skus":[{"activePrice":null,"quantity":-6,"activityStatus":0,"discount":null,"originPrice":18.71,"sku":"1002100","skuId":2100,"attrs":[{"skuAttrId":405265,"valueId":652,"valueName":"Silver","keyName":"Color","keyId":366,"sku":"1002100","mainAttrFlag":true},{"skuAttrId":405266,"valueId":490,"valueName":"Female","keyName":"Watch Type","keyId":158,"sku":"1002100","mainAttrFlag":false}]}],"description":"<h2>Features:<br>Fashion Women's Girl's Snake Style Bangle Bracelet Quartz Wrist Watch Gift&nbsp;<br>This is a stylish bracelet watch. It perfectly matches the vintage and punk style outfit. It is a perfect gift to friends, colleagues, parents, kids. It will shine your wrist in the summer!<br>Stylish and unique design.<br>Not only a bracelet, but also a watch.<br>Snake style, both feminine and punk.<br>Vintage silver style decoration.<br>Don't need to adjust the length of watch band.<br>The bangle is flexible.<br>Amazing gift to your family and friends!<br><br><br>Specifications:<br>Material: stainless steel &nbsp;<br>Movement: Japanese movement quartz<br>Band width: about 0.5cm/0.2 inches in diameter of each strap<br>Battery included<br>Item size: 202*12*7mm<br>Net weight: 32g<br>Package weight: 42g<br><br><br>Pack Content:<br>1 x Bracelet Watch &nbsp; &nbsp;</h2>","pictures":[{"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-11/20171211143007108_j2SX_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-11/20171211143007108_j2SX_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-11/20171211143007108_j2SX_mid.jpg","proPictureId":669518,"version":41261},{"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092854983_zAfA_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092854983_zAfA_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092854983_zAfA_mid.jpg","proPictureId":669519,"version":59090},{"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092718446_9LlB_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092718446_9LlB_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092718446_9LlB_mid.jpg","proPictureId":669520,"version":60022},{"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092722581_n7oo_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092722581_n7oo_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092722581_n7oo_mid.jpg","proPictureId":669521,"version":61157},{"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092852608_SrjI_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092852608_SrjI_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814092852608_SrjI_mid.jpg","proPictureId":669522,"version":73838}],"areaDeliveries":[{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18590,"areaName":"Kuwait","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18770,"areaName":"Bahrain","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18760,"areaName":"Saudi Arabia","quota":262.47,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18680,"areaName":"Qatar","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18610,"areaName":"Oman","quota":329.96,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"29/07/2018","deliveryMax":10,"areaId":18780,"areaName":"United Arab Emirates","quota":221.23,"freight":37.50,"deliveryMinTime":"26/07/2018","deliveryMin":7}],"id":1459,"keyword":"Watch,Lady,Stylish,Gift,watch,jewelry watches,watches for women,women's watches,luxury watches,ladies watches,watches for girls","seo":"Lady Snake Style Bracelet Quartz Wrist Watch","brandLogo":"/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg","serviceTags":["SOP","COD","Online Payment"],"brandName":"NULL","brandSeo":"NULL","updateTime":1532001282000,"commentContent":{"averageStar":4.9,"totalComments":20,"comments":[{"imgs":null,"star":5,"productId":0,"createTime":1514374085000,"imgCount":0,"anonymous":true,"userName":"R***","type":3,"foolr":1,"userId":66032,"content":null,"child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1511935286000,"imgCount":0,"anonymous":true,"userName":"ع***","type":3,"foolr":1,"userId":8594,"content":null,"child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1514432527000,"imgCount":0,"anonymous":true,"userName":"ر***","type":3,"foolr":1,"userId":67435,"content":null,"child":[]}],"hasComment":true},"specific":[{"values":"Null","name":"MODEL"}],"attrs":[{"name":"Color","keyId":366,"keySort":1,"type":1,"attrValues":[{"valueId":652,"valueSort":7,"skuPictures":[{"proAttrKeyId":366,"proAttrValueId":652,"productId":1459,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814093053692_qdKm_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814093053692_qdKm.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-08-14/20170814093053692_qdKm_mid.jpg","proPictureId":2768,"version":null}],"value":"Silver"}],"mainAttrFlag":true},{"name":"Watch Type","keyId":158,"keySort":1,"type":2,"attrValues":[{"valueId":490,"valueSort":7,"skuPictures":null,"value":"Female"}],"mainAttrFlag":false}],"brandShortName":"NULL","createTime":1502688537000,"name":"Lady Snake Style Bracelet Quartz Wrist Watch","shareUrl":"https://www.skybaymall.com/detail/1459","couponCenterDtos":[],"favorite":false,"categoryId":343,"favoriteCount":572}
       //   var detailData = {"defaultArea":{"defaultAreaDeliveryMin":null,"defaultAreaDeliveryMaxTime":null,"defaultAreaDeliveryMax":null,"defaultAreaId":415,"defaultAreaDeliveryMinTime":null,"defaultFreight":56.24,"defaulArea":"Bahrain","defaultQuota":221.23},"clickCount":1384,"skus":[{"activePrice":null,"quantity":19,"activityStatus":0,"discount":null,"originPrice":23.59,"sku":"1160594","skuId":18798,"attrs":[{"skuAttrId":433204,"valueId":7969,"valueName":"black","keyName":"Color","keyId":1229,"sku":"1160594","mainAttrFlag":true}]},{"activePrice":null,"quantity":17,"activityStatus":0,"discount":null,"originPrice":23.59,"sku":"1160593","skuId":18801,"attrs":[{"skuAttrId":361579,"valueId":7956,"valueName":"blue","keyName":"Color","keyId":1229,"sku":"1160593","mainAttrFlag":true}]},{"activePrice":null,"quantity":28,"activityStatus":0,"discount":null,"originPrice":23.59,"sku":"1160592","skuId":18803,"attrs":[{"skuAttrId":433203,"valueId":24181,"valueName":"purple","keyName":"Color","keyId":1229,"sku":"1160592","mainAttrFlag":true}]}],"description":"<span style=\"font-size: 36px;\">Features:</span><br><span style=\"font-size: 36px;\">100% Brand new and high quality.</span><br><span style=\"font-size: 36px;\">Wonderful gifts for a loved one.</span><br><span style=\"font-size: 36px;\">Fashion design reveals your fashionable point of view.</span><br><span style=\"font-size: 36px;\">Suitable for wearing in any occasions.</span><br><span style=\"font-size: 36px;\">Good watch case and belt makes the watch more durable.</span><br><br><span style=\"font-size: 36px;\">Specifications:</span><br><span style=\"font-size: 36px;\">Material: pu leather and metal</span><br><span style=\"font-size: 36px;\">Color: white, red, purple, blue, black</span><br><span style=\"font-size: 36px;\">Diameter:2.7cm</span><br><span style=\"font-size: 36px;\">Width:1.2cm</span><br><span style=\"font-size: 36px;\">Thickness:0.8cm</span><br><span style=\"font-size: 36px;\">Length: 23cm</span><br><br><span style=\"font-size: 36px;\">Package included:</span><br><span style=\"font-size: 36px;\">1 x Watch</span><br><br><span style=\"font-size: 36px;\">Note：</span><br><span style=\"font-size: 36px;\">Due to the difference between different monitors, the picture may not reflect the actual color of the item. We guarantee the style is the same as shown in the pictures, but not the same performance on different bodies as on the model. Thank you!</span>","pictures":[{"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092912092_W6lZ_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092912092_W6lZ_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092912092_W6lZ_mid.jpg","proPictureId":808805,"version":39757},{"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092916595_ztE5_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092916595_ztE5_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092916595_ztE5_mid.jpg","proPictureId":808806,"version":83291},{"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142125810_zNuW_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142125810_zNuW_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142125810_zNuW_mid.jpg","proPictureId":808807,"version":38291},{"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142123360_ZzAM_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142123360_ZzAM_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-05-14/20180514142123360_ZzAM_mid.jpg","proPictureId":808808,"version":76375},{"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092914842_XvU0_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092914842_XvU0_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092914842_XvU0_mid.jpg","proPictureId":808809,"version":4839}],"areaDeliveries":[{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18590,"areaName":"Kuwait","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18770,"areaName":"Bahrain","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18760,"areaName":"Saudi Arabia","quota":262.47,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18680,"areaName":"Qatar","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18610,"areaName":"Oman","quota":329.96,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"29/07/2018","deliveryMax":10,"areaId":18780,"areaName":"United Arab Emirates","quota":221.23,"freight":37.50,"deliveryMinTime":"26/07/2018","deliveryMin":7}],"id":9940,"keyword":"Korean Fashionable Women Diamond Shape PU Leather Strap Quartz Wrist Watch","seo":"Korean Fashionable Women Diamond Shape PU Leather Strap Quartz Wrist Watch","brandLogo":"/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg","serviceTags":["SOP","COD","Online Payment"],"brandName":"NULL","brandSeo":"NULL","updateTime":1532001414000,"commentContent":{"averageStar":4.7,"totalComments":8,"comments":[{"imgs":null,"star":5,"productId":0,"createTime":1508050961000,"imgCount":0,"anonymous":true,"userName":"O***","type":2,"foolr":1,"userId":0,"content":"حلوه لكن ماتثبت بقوه لكن تمشي الحال وتريحك","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1506063761000,"imgCount":0,"anonymous":true,"userName":"X***","type":2,"foolr":1,"userId":0,"content":"احبه جيييدا","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1509346961000,"imgCount":0,"anonymous":true,"userName":"U***","type":2,"foolr":1,"userId":0,"content":"من أجمل المنتجات اللى إشتريتها من سوق بصراحه .. و شكرا على سرعة التوصيل والتغليف الرائع","child":[]}],"hasComment":true},"specific":[{"values":"pu leather and metal","name":"Material"},{"values":"24.0000","name":"Weight"}],"attrs":[{"name":"Color","keyId":1229,"keySort":1,"type":1,"attrValues":[{"valueId":6566,"valueSort":0,"skuPictures":[{"proAttrKeyId":1229,"proAttrValueId":6566,"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092921643_MxkA_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092921643_MxkA_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092921643_MxkA_mid.jpg","proPictureId":42701,"version":null}],"value":"red"},{"valueId":7956,"valueSort":0,"skuPictures":[{"proAttrKeyId":1229,"proAttrValueId":7956,"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922466_BCJc_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922466_BCJc_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922466_BCJc_mid.jpg","proPictureId":42697,"version":null}],"value":"blue"},{"valueId":7969,"valueSort":0,"skuPictures":[{"proAttrKeyId":1229,"proAttrValueId":7969,"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092923085_xFLu_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092923085_xFLu_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092923085_xFLu_mid.jpg","proPictureId":42694,"version":null}],"value":"black"},{"valueId":24181,"valueSort":0,"skuPictures":[{"proAttrKeyId":1229,"proAttrValueId":24181,"productId":9940,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922042_A1mr_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922042_A1mr_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-11-01/20171101092922042_A1mr_mid.jpg","proPictureId":42699,"version":null}],"value":"purple"}],"mainAttrFlag":true}],"brandShortName":"NULL","createTime":1509500543000,"name":"Korean Fashionable Women Diamond Shape PU Leather Strap Quartz Wrist Watch","shareUrl":"https://www.skybaymall.com/detail/9940","couponCenterDtos":[],"favorite":false,"categoryId":343,"favoriteCount":158}
       //  var detailData= {"defaultArea":{"defaultAreaDeliveryMin":null,"defaultAreaDeliveryMaxTime":null,"defaultAreaDeliveryMax":null,"defaultAreaId":415,"defaultAreaDeliveryMinTime":null,"defaultFreight":56.24,"defaulArea":"Bahrain","defaultQuota":221.23},"clickCount":9834,"skus":[{"activePrice":null,"quantity":6,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1216985","skuId":98483,"attrs":[{"skuAttrId":360455,"valueId":239222,"valueName":"Red","keyName":"Color","keyId":8331,"sku":"1216985","mainAttrFlag":true},{"skuAttrId":360456,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1216985","mainAttrFlag":false}]},{"activePrice":null,"quantity":8,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1216986","skuId":98410,"attrs":[{"skuAttrId":360457,"valueId":239195,"valueName":"Blue","keyName":"Color","keyId":8331,"sku":"1216986","mainAttrFlag":true},{"skuAttrId":360458,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1216986","mainAttrFlag":false}]},{"activePrice":null,"quantity":21,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1216987","skuId":98306,"attrs":[{"skuAttrId":360459,"valueId":239195,"valueName":"Blue","keyName":"Color","keyId":8331,"sku":"1216987","mainAttrFlag":true},{"skuAttrId":360460,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1216987","mainAttrFlag":false}]},{"activePrice":null,"quantity":15,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1216988","skuId":98120,"attrs":[{"skuAttrId":360461,"valueId":52033,"valueName":"black","keyName":"Color","keyId":8331,"sku":"1216988","mainAttrFlag":true},{"skuAttrId":360462,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1216988","mainAttrFlag":false}]},{"activePrice":null,"quantity":10,"activityStatus":0,"discount":null,"originPrice":29.96,"sku":"1285176","skuId":149500,"attrs":[{"skuAttrId":426491,"valueId":239222,"valueName":"Red","keyName":"Color","keyId":8331,"sku":"1285176","mainAttrFlag":true},{"skuAttrId":426492,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285176","mainAttrFlag":false}]},{"activePrice":null,"quantity":0,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285177","skuId":149501,"attrs":[{"skuAttrId":389247,"valueId":239220,"valueName":"Purple","keyName":"Color","keyId":8331,"sku":"1285177","mainAttrFlag":true},{"skuAttrId":389248,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285177","mainAttrFlag":false}]},{"activePrice":null,"quantity":8,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285178","skuId":149502,"attrs":[{"skuAttrId":389249,"valueId":239220,"valueName":"Purple","keyName":"Color","keyId":8331,"sku":"1285178","mainAttrFlag":true},{"skuAttrId":389250,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1285178","mainAttrFlag":false}]},{"activePrice":null,"quantity":4,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285179","skuId":149503,"attrs":[{"skuAttrId":389253,"valueId":52033,"valueName":"black","keyName":"Color","keyId":8331,"sku":"1285179","mainAttrFlag":true},{"skuAttrId":389254,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285179","mainAttrFlag":false}]},{"activePrice":null,"quantity":5,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285180","skuId":149504,"attrs":[{"skuAttrId":389255,"valueId":239228,"valueName":"White","keyName":"Color","keyId":8331,"sku":"1285180","mainAttrFlag":true},{"skuAttrId":389256,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285180","mainAttrFlag":false}]},{"activePrice":null,"quantity":9,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285181","skuId":149505,"attrs":[{"skuAttrId":401326,"valueId":239228,"valueName":"White","keyName":"Color","keyId":8331,"sku":"1285181","mainAttrFlag":true},{"skuAttrId":401327,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1285181","mainAttrFlag":false}]},{"activePrice":null,"quantity":15,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285182","skuId":149506,"attrs":[{"skuAttrId":389259,"valueId":38476,"valueName":"pink","keyName":"Color","keyId":8331,"sku":"1285182","mainAttrFlag":true},{"skuAttrId":389260,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285182","mainAttrFlag":false}]},{"activePrice":null,"quantity":12,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285183","skuId":149507,"attrs":[{"skuAttrId":401324,"valueId":38476,"valueName":"pink","keyName":"Color","keyId":8331,"sku":"1285183","mainAttrFlag":true},{"skuAttrId":401325,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1285183","mainAttrFlag":false}]},{"activePrice":null,"quantity":11,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285184","skuId":149508,"attrs":[{"skuAttrId":401328,"valueId":239224,"valueName":"Red Rose","keyName":"Color","keyId":8331,"sku":"1285184","mainAttrFlag":true},{"skuAttrId":401329,"valueId":61194,"valueName":"M","keyName":"Size","keyId":8332,"sku":"1285184","mainAttrFlag":false}]},{"activePrice":null,"quantity":10,"activityStatus":0,"discount":null,"originPrice":26.21,"sku":"1285185","skuId":149509,"attrs":[{"skuAttrId":401320,"valueId":239224,"valueName":"Red Rose","keyName":"Color","keyId":8331,"sku":"1285185","mainAttrFlag":true},{"skuAttrId":401321,"valueId":38477,"valueName":"L","keyName":"Size","keyId":8332,"sku":"1285185","mainAttrFlag":false}]}],"description":"<p><span style=\"font-size: 36px;\">Features:</span><br><span style=\"font-size: 36px;\">Perspective night skirt, sexy style.</span><br><span style=\"font-size: 36px;\">Big swing night skirt, good looking.</span><br><span style=\"font-size: 36px;\">Made from sexy lace.</span><br><span style=\"font-size: 36px;\">Lightweight and thin design.</span><br><span style=\"font-size: 36px;\">Wear comfortably.</span><br><br><span style=\"font-size: 36px;\">Description:</span><br><span style=\"font-size: 36px;\">Seven colors optional, you can choose your favorite style.</span><br><span style=\"font-size: 36px;\">Two different size for women.</span><br><span style=\"font-size: 36px;\">A good choice to enrich your life.</span><br><br><span style=\"font-size: 36px;\">Specifications:</span><br><span style=\"font-size: 36px;\">Material: lace</span><br><span style=\"font-size: 36px;\">Color: red, blue, purple, black, white, pink, rose red</span><br><span style=\"font-size: 36px;\">UK size&nbsp;&nbsp; Size &nbsp;&nbsp; Length(cm/inch) &nbsp;Bust(cm/inch)&nbsp;&nbsp; Waist(cm/inch)</span><br><span style=\"font-size: 36px;\"> &nbsp; 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; M &nbsp; &nbsp;&nbsp; 83/32.68 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33.5/13.19 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;22.5/8.86 </span><br><span style=\"font-size: 36px;\"> &nbsp; 12 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; L &nbsp; &nbsp; &nbsp;&nbsp; 83/32.68 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40/15.75 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 31/12.20 </span><br><br><span style=\"font-size: 36px;\">Package Include:</span><br><span style=\"font-size: 36px;\">1 X Lace night skirt</span><br><br><span style=\"font-size: 36px;\">Note:</span><br><span style=\"font-size: 36px;\">Due to the difference between different monitors, the picture may not reflect the actual color of the item. We guarantee the style is the same as shown in the pictures.</span><br><span style=\"font-size: 36px;\">There may be slight measurement errors, please understand. Thank you! &nbsp; &nbsp;</span></p>","pictures":[{"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133802684_KRvR_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133802684_KRvR_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133802684_KRvR_mid.jpg","proPictureId":696478,"version":23533},{"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803198_8xa2_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803198_8xa2_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803198_8xa2_mid.jpg","proPictureId":696479,"version":85664},{"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805397_c4KV_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805397_c4KV_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805397_c4KV_mid.jpg","proPictureId":696480,"version":48727},{"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803760_Fh4K_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803760_Fh4K_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133803760_Fh4K_mid.jpg","proPictureId":696481,"version":5178},{"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805991_5IN4_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805991_5IN4_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133805991_5IN4_mid.jpg","proPictureId":696482,"version":45349}],"areaDeliveries":[{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18590,"areaName":"Kuwait","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18770,"areaName":"Bahrain","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18760,"areaName":"Saudi Arabia","quota":262.47,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18680,"areaName":"Qatar","quota":221.23,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"08/08/2018","deliveryMax":20,"areaId":18610,"areaName":"Oman","quota":329.96,"freight":56.24,"deliveryMinTime":"03/08/2018","deliveryMin":15},{"deliveryMaxTime":"29/07/2018","deliveryMax":10,"areaId":18780,"areaName":"United Arab Emirates","quota":221.23,"freight":37.50,"deliveryMinTime":"26/07/2018","deliveryMin":7}],"id":50644,"keyword":"Big,Swing,Lace Perspective,Night,Skirt,Beautiful,Figure,Highlighting","seo":"Big Swing Lace Highlighting","brandLogo":"/yks-resource/screen/2017-07-11/20170711154855078_Fh8v.jpg","serviceTags":["SOP","COD","Online Payment"],"brandName":"NULL","brandSeo":"NULL","updateTime":1532001581000,"commentContent":{"averageStar":5.0,"totalComments":13,"comments":[{"imgs":null,"star":5,"productId":0,"createTime":1510588428000,"imgCount":0,"anonymous":true,"userName":"H***","type":2,"foolr":1,"userId":0,"content":"تصميم الجهاز الخارجي والداخلي ممتاز","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1511279628000,"imgCount":0,"anonymous":true,"userName":"q***","type":2,"foolr":1,"userId":0,"content":"وصلني كما في الصور.. منتج جودته عالية..","child":[]},{"imgs":null,"star":5,"productId":0,"createTime":1516526829000,"imgCount":0,"anonymous":false,"userName":"larzmaycapis@gmai.com","type":3,"foolr":17,"userId":74075,"content":"I want","child":[]}],"hasComment":true},"specific":[{"values":"Short","name":"Sleeve Length"},{"values":"Solid","name":"Pattern Type"},{"values":"Summer","name":"Season"},{"values":"lace","name":"Material Composition"},{"values":"50.0000","name":"Weight"}],"attrs":[{"name":"Color","keyId":8331,"keySort":1,"type":1,"attrValues":[{"valueId":38476,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":38476,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200207360_jJGo_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200207360_jJGo_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200207360_jJGo_mid.jpg","proPictureId":184680,"version":null},{"proAttrKeyId":8331,"proAttrValueId":38476,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200123412_NuW9_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200123412_NuW9_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200123412_NuW9_mid.jpg","proPictureId":184681,"version":null}],"value":"pink"},{"valueId":52033,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":52033,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813573_qEgO_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813573_qEgO_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813573_qEgO_mid.jpg","proPictureId":125970,"version":null}],"value":"black"},{"valueId":239195,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":239195,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813098_NXtz_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813098_NXtz_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133813098_NXtz_mid.jpg","proPictureId":126263,"version":null}],"value":"Blue"},{"valueId":239220,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":239220,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312195347960_J43m_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312195347960_J43m_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312195347960_J43m_mid.jpg","proPictureId":184677,"version":null}],"value":"Purple"},{"valueId":239222,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":239222,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133812427_GUQV_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133812427_GUQV_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2017-12-01/20171201133812427_GUQV_mid.jpg","proPictureId":126339,"version":null}],"value":"Red"},{"valueId":239224,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":239224,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200112401_E8ar_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200112401_E8ar_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200112401_E8ar_mid.jpg","proPictureId":184678,"version":null}],"value":"Red Rose"},{"valueId":239228,"valueSort":0,"skuPictures":[{"proAttrKeyId":8331,"proAttrValueId":239228,"productId":50644,"smallImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200220963_DQ1z_min.jpg","largeImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200220963_DQ1z_max.jpg","mediumImg":"https://img.vipsouq.net/yks-resource/screen/2018-03-12/20180312200220963_DQ1z_mid.jpg","proPictureId":184682,"version":null}],"value":"White"}],"mainAttrFlag":true},{"name":"Size","keyId":8332,"keySort":1,"type":2,"attrValues":[{"valueId":38477,"valueSort":3,"skuPictures":null,"value":"L"},{"valueId":61194,"valueSort":2,"skuPictures":null,"value":"M"}],"mainAttrFlag":false}],"brandShortName":"NULL","createTime":1513004932000,"name":"Big Swing Lace Perspective Night Skirt Beautiful Figure Highlighting","shareUrl":"https://www.skybaymall.com/detail/50644","couponCenterDtos":[],"favorite":false,"categoryId":1363,"favoriteCount":1040}

        detailData.description = detailData.description.replace(/[0-9]+px/ig,'12px;line-height:18px;')
        detailData["priceRules"] = PriceRules(detailData.skus[0], ctx.state.G);

        console.log(detailData["priceRules"]);
        await ctx.render("product/product_detail", {
            carousel: detailData.attrs[0].attrValues,
            detail: detailData
        })
    }
}