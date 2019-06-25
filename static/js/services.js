
$(document).ready(function () {
    "use strict";

    FastClick.attach(document.body);
    initSlider();
});

function initSlider() {
    $("#lightSlider, #lightSlider1, #lightSlider2").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 0,
        adaptiveHeight:true,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease',
        easing: 'linear',

        speed: 400,
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: true,
        controls: true
    });
}
