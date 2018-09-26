(function (window, document) {
    var menuDom = document.querySelector(".s-nav-menu"),
        bgDom = document.querySelector(".s-menu-bg"),
        menu = document.querySelector("#menu")
    data_lang = menu.getAttribute("data-lang");

    menuDom.onclick = function () {
        bgDom.classList.toggle("h");
        animationHandle(data_lang, menu);

    }
    bgDom.onclick = function () {
        this.classList.toggle("h");
        animationHandle(data_lang, menu);
    }

    menu.onclick = function () {
        animationHandle(data_lang, this.classList);
        bgDom.classList.toggle("h");
    }

    function animationHandle(lang, dom) {
        lang = typeof lang === 'string' ? Number(lang) : lang;
        if (lang === 1) {
            dom.classList.toggle("s-l")
        } else {
            dom.classList.toggle("s-r")
        }

    }

    // console.log(menuDom);
})(window, document)