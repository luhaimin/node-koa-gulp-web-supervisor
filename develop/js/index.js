$(function () {
    new Swiper('.swiper-container-tip', {
        autoplay: {
            disableOnInteraction:false,
            delay: 3000
        },
        direction: 'vertical',//vertical
        loop: true
    })
    new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction:false
        },
        direction: 'horizontal',//vertical
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
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