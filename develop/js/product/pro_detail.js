$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        lazy: {
            loadPrevNext: true,
        },

        autoplay: {
            delay: 4000,
            // disableOnInteraction: false
        },
        direction: 'horizontal',//vertical
        loop: true
    })
    /*console.log(attrs);
     console.log(skus);*/


    $(".icon-share").on("click", function () {
        console.log("分享");
    })

    $(".dt-wish").on("click", function () {
        console.log("收藏");
    })

    var detailCouponBackgrount = $(".dt-cp-bg");
    var detailCouponList = $(".dt-cp-list");

    $(".dt-coupon").on("click", function () {
        /*点击弹出优惠券选择列表*/
        detailCouponBackgrount.animate({
            opacity: 0.6
        }, 350).removeClass("d-n");

        detailCouponList.animate({
            bottom: 0
        }, 400, "ease-out")

    })

    detailCouponBackgrount.on("click", function () {
        /*点击背景*/
        detailCouponBackgrount.animate({
            opacity: 0
        }, 350)

        detailCouponList.animate({
            bottom: "-150%"
        })

        setTimeout(function () {
            detailCouponBackgrount.addClass(("d-n"))
        }, 350)
    })

    $(".icon-close").on("click", function () {
        /*点击优惠券列表关闭按钮*/
        detailCouponList.animate({
            bottom: "-150%"
        });
        detailCouponBackgrount.animate({
            opacity: 0
        }, 350)
        setTimeout(function () {
            detailCouponBackgrount.addClass(("d-n"))
        }, 350)
    })

    //领取优惠券
    $(".can-receive").on("click", function () {
        /*领取该优惠券,未登录跳转到登录页*/
        console.log("优惠券ID：" + $(this).attr("data-id"));
    })


    var mayTotal = 1;//所有组合 可能出现的总数
    everyMain = mayTotal / everyMain;//每个主属性会出现最大概率，如果sku总表里缺货、缺sku情况总数等于最大概率，则将主属性 置灰色


    //属性组合-----------------------------------------开始
    //主属性初始化,
    // var attr_ids = [];

    var everyMain = null;//每个主属性会出现的概率
    attrs.forEach(function (v, k) {
        mayTotal *= v.attrValues.length;
        if (v.mainAttrFlag) {
            everyMain = v.attrValues.length
        }
    })

    var skusString = JSON.stringify(skus);//将sku转成 字符串
    function initAttr() {
        attrs.forEach(function (val, key) {

            val.attrValues.forEach(function (v, k) {//循环主属性列表
                v.newSkus = [];
                v.newSkus2 = [];
                /*var valuesId = new RegExp(v.valueId, 'ig');
                 if (val.mainAttrFlag) {//如果为主属性
                 if (!valuesId.test(skusString)) {
                 $(".mainAttr").eq(k).addClass("dt-disable");
                 }
                 }*/
                // var count = 0;
                skus.forEach(function (skuVal, skuKey) {
                    skuVal.attrs.forEach(function (skuChildVal, skuChildKey) {

                        if (v.valueId === skuChildVal.valueId && skuVal.quantity > 0) {
                            v.newSkus.push(skuChildVal);
                            v.newSkus2.push(skuVal);
                        }

                        // console.log(v);
                        // console.log(skuChildVal);
                        /* if (val.mainAttrFlag) {//如果为主属性
                         console.log(skuChildVal.valueId === v.valueId && skuVal.quantity < 1);
                         if (skuVal.quantity === null || skuVal.quantity === undefined || skuVal.quantity === '') {
                         // 处理数量为null，undefined
                         skuVal.quantity = -1;
                         }
                         if (skuChildVal.valueId === v.valueId && skuVal.quantity < 1) {//主属性在sku库里面，库存小于1的

                         count++;
                         if (everyMain === count) {//如果所有属性缺货，出现最大概率
                         //     console.log($(".mainAttr").eq(k));
                         $(".mainAttr").eq(k).addClass("dt-disable");
                         // console.log(skuVal,count);
                         }
                         }*/
                        //console.log(v.valueId);
                        // } else {

                        if (skuKey === skus.length - 1 && skuChildKey === skuVal.attrs.length - 1 && v.newSkus.length < 1) {
                            //console.log(v);
                            $("#id" + v.valueId).addClass("dt-disable");
                        } else {
                            $("#id" + v.valueId).removeClass("dt-disable");
                        }
                        // }
                    })
                })

                //console.log(v.valueId);
            })


            /*if (val.quantity < 1) {//不显示主属性 缺货的sku

             $(".mainAttr").eq(key).addClass("dt-disable");
             val.attrs.forEach(function (cVal,cKey) {
             console.log(cVal.valueId);
             })
             }*/
        })
    }

    initAttr()
    $(".dt-attr-child").on("click", function () {
        var _this = $(this);
        var data_key = _this.attr("data-index");//主属性下标
        var attrKey = _this.attr("attr-key");//二级属性key
        var attrId = _this.attr("attr-id");//属性id
        var nowImg = null,
            nowImg_discri = null;
        // attrId

        // if (attr_ids.length < 1) {
        // attr_ids.push(attrId);
        // }

        if (data_key) {//点击主属性
            attrs.forEach(function (val, i) {
                //提取当前点击的图片 用于插入轮播图
                if (val.mainAttrFlag) {
                    nowImg = val.attrValues[data_key].skuPictures[0].smallImg;
                    nowImg_discri = val.attrValues[data_key].value;
                }
            })
            var addImgSrc = document.getElementsByClassName("add-silde-img")[0];
            if (addImgSrc) {//已经插入过，直接替换
                $(".add-silde-img").attr("src", nowImg);
                $(".add-silde-img").parent("a").attr("href", nowImg)
            } else {//未插入过，新增一个slide
                mySwiper.appendSlide('<div class="swiper-slide"><a href="' + nowImg + '"><img class="add-silde-img" src="' + nowImg + '" alt="' + nowImg_discri + '"></a></div>');
                mySwiper.pagination.render();
            }

            // 插入slide完毕，跳转到当前图片
            var pagination = $(".swiper-pagination-bullet");
            $(".swiper-pagination-bullet").eq(pagination.length - 1).trigger("click");
            /*skus.forEach(function (item, i) {//循环skus

             item.attrs.forEach(function (val, key) {//找到是否库存不足
             if (val.valueId == attrId) {



             //console.log(item);
             }

             })
             })*/

        }

        //清除 兄弟 节点样式

        if (_this.hasClass("dt-disable")) {
            //如果是禁用状态  则不变
            return
        }

        var siblingsDom = _this.siblings();
        siblingsDom.each(function (index, item) {
            $(item).removeClass("attr-select");
        })
        _this.toggleClass("attr-select");
        /*console.log(attrId);
         console.log(attrKey);*/
        var attr_ids = [];
        $(".attr-select").each(function (sKey, sDom) {
            attr_ids.push(sDom.getAttribute("attr-id"));
        })

        selectRules(attr_ids);//每次点击处理
    })

    /*   console.log(attrs);
     console.log(skus);*/
    function selectRules(ids) {
        /*
         * ids 为数组   ["239228", "38488"]
         * */
        console.log(ids);
        var temp = [],
            temp_index = "0";
        attrs.forEach(function (value, key) {
            // console.log(value);
            value.attrValues.forEach(function (val, k) {
                ids.forEach(function (idVal, idKey) {
                    if (idVal == val.valueId) {
                        //console.log(val);

                        val.newSkus2.forEach(function (v, k) {
                            v.attrs.forEach(function (vv, kk) {
                                //console.log(vv.valueId);
                                $("#id" + vv.valueId).removeClass("dt-disable")
                                if (vv.valueId != idVal) {
                                    //console.log($("#id" + vv.valueId));

                                    temp.push(vv.valueId);

                                    temp_index = key;
                                }
                            })
                        })


                    }
                })
            })


        })
        if (ids.length < 1) {
            initAttr();
            return
        }

        // console.log(temp.toString());
        temp = temp.toString();
        $(".dt-attr-child").not(".dt-disable").each(function (i, d) {
            var attr_id = d.getAttribute("attr-id"),
                attr_key = d.getAttribute("attr-key"),
                reg = new RegExp(attr_id, "ig"),
                reg_index = new RegExp(attr_key, "ig");
            //console.log(reg_index.test(temp_index));

            if (!reg.test(temp) && !(reg_index.test(temp_index))) {
                d.classList.add("dt-disable");
            }
            // console.log(d.getAttribute("attr-id"));
        })
    }

//属性组合-----------------------------------------结束
    var max_quantity = 5;
    $(".icon-comp").on("click", function () {
        /*
         * 数量增减
         * */


        var __this = $(this),
            this_id = __this.attr("id"),
            quantirySelect = $(".dt-quantity").val();
        if (1 < quantirySelect < max_quantity) {
            $("#sub").removeClass("dt-min-sub");
            $("#add").removeClass("dt-min-sub");
        }
        if (this_id === "add") {//增加

            if (quantirySelect >= max_quantity) {
                __this.addClass("dt-min-sub")
                return
            }

            if (quantirySelect && quantirySelect > 0) {
                quantirySelect++;
                $(".dt-quantity").val(quantirySelect)
            }
        } else if (this_id === "sub") {//减少
            quantirySelect = --quantirySelect
            if (quantirySelect < 1) {
                $(".dt-quantity").val(1);
                $("#sub").addClass("dt-min-sub");
                return
            }
            $(".dt-quantity").val(quantirySelect)
        }
    })

    $(".dt-quantity").on("blur", function () {
        /*
         * input失去焦点；限制只能为数字；且不能为负数
         * */
        var value = (this.value).trim(),
            valueReg = /^[0-9]+$/g;
        if (value < 0 || !value || !(valueReg.test(value)) || value > max_quantity) {
            this.value = 1;
        }
    })

    $(".dt-spec-title").on("click", function (e) {
        /*
         * 点击规格 描述 评论切换样式；以及跳转到相应的内容位置
         * */
        var contentTop = $("#"+e.target.getAttribute("data-attr")).offset().top;

        $(window).scrollTo({
            toT: contentTop-80
        }, 500)


        $(".dt-spec-active").removeClass("dt-spec-active");
        $(this).addClass("dt-spec-active");
    })
    var specTop = $(".dt-spec-nav").offset().top,
        fixedTopTimer = null;

    $(window).scroll(function () {
        /*
         * 滚动监听；超过body高度时固定顶部
         *
         * */
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      /*  clearTimeout(fixedTopTimer);
        fixedTopTimer = setTimeout(function () {
        //节流函数，加上会闪动

        }, 300)*/

        if (scrollTop >= specTop) {
            $(".dt-spec-nav").addClass("dt-spec-fixed");
        } else {
            $(".dt-spec-nav").removeClass("dt-spec-fixed");
        }

    })


    /*  $(function () {
     $.ajax({
     type:"POST",
     dataType: 'json',
     contentType: 'application/json;charset=utf-8',
     url:window.location.origin + "/api/sites/goodsCategory/listGoodsCategory",
     data:JSON.stringify({"orderByField":"id","lng":1}),
     success:function (res) {
     console.log(res);
     },
     error: function(xhr, type){
     alert('Ajax error!')
     }
     })
     })*/


})