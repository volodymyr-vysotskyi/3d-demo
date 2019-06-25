var THEME_ORANGE = 'theme-orange';

$(document).ready(function () {
    "use strict";

    FastClick.attach(document.body);
    prepareIntroVideo();
    fonts();
    initTabs();
    openPopup();
    initSlider();
    initVideoSlider();
    initAnimation();
    counter();
    initAnimations();
    fileUpload();
    clickToScroll();
});

function prepareIntroVideo() {
    var video = document.getElementById('mobidev-intro');
    var hasMetaData = 1;
    if (!video) {
        return;
    }

    if (video.readyState == hasMetaData) {
        video.className = 'has-metadata';
    } else {
        video.addEventListener('loadedmetadata', function () {
            video.className = 'has-metadata';
        });
    }
}

function clickToScroll() {
    $('.link-scroll').on('click', function (e) {
        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;
        $('html,body').stop().animate({scrollTop: destination}, 500);
        e.preventDefault();
    });
}
function initAnimations() {
    var $window = $(window),
        $elements = $('.animated-block');

    function check_if_in_view() {
        var windowHeight = $window.height(),
            windowTopPosition = $window.scrollTop(),
            windowBottomPosition = (windowTopPosition + windowHeight);

        $elements.each(function () {
            var $element = $(this),
                elementHeight = $element.outerHeight(),
                elementTopPosition = $element.offset().top,
                elementBottomPosition = (elementTopPosition + elementHeight),
                animationOffset = windowHeight / 2;

            if ($element.hasClass('nda-block')) animationOffset = windowHeight / 6;

            // animationOffset is needed to run animation only when
            // at least big part of the block is visible
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition - animationOffset)) {
                $element.addClass('is-visible');
            } else {
                $element.removeClass('is-visible');
            }
        });
    }

    $window.on('scroll', check_if_in_view);
}

function fonts() {
    var link_element = document.createElement("link"),
        s = document.getElementsByTagName("script")[0];
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
        link_element.href = "http:";
    }
    link_element.href += "//fonts.googleapis.com/css?family=Roboto:100italic,100,300italic,300,400italic,400,500italic,500,700italic,700,900italic,900";
    link_element.rel = "stylesheet";
    link_element.type = "text/css";
    s.parentNode.insertBefore(link_element, s);
}

// tabs init
function initTabs() {
    $('ul.landing-tabs').contentTabs({
        addToParent: true
    });
}

// tabs init
function openPopup() {
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
}

// activate counter
function counter() {
    var time = 2, start = true, isRunning = false;
    $(window).scroll(function () {
        $('#counter').each(function () {
            var cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 700) {
                if (start && !isRunning) {
                    isRunning = true;
                    $('.qty').addClass('viz');
                    $('em').each(function () {
                        var
                            stepSize = $(this).data('metric') || 1,
                            i = +stepSize,
                            that = $(this),
                            num = $(this).data('num'),
                            step = (1000 * time) / (num / i);


                        var int = setInterval(function () {
                            if (i <= num) {
                                that.html(stepSize < 1 ? i.toFixed(1) : i);
                            }
                            else {
                                start = false;
                                isRunning = false;
                                clearInterval(int);
                            }
                            i = i + stepSize;
                        }, step);
                    });
                }
            }
        });
    });
}

// animation init
function initAnimation() {
    var animationFile =
        $(document.body).hasClass(THEME_ORANGE) ? 'animation_orange' : 'animation';

    AdobeEdge.loadComposition('../static/promotions/js/' + animationFile, 'EDGE-10513714', {
        scaleToFit: "width",
        centerStage: "none",
        minW: "768px",
        maxW: "1920px",
        width: "1920px",
        height: "810px"
    }, {"dom": {}}, {"dom": {}});
}

function initSlider() {
    $("#lightSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 0,

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

function fileUpload() {
    var wrapper = $(".file-upload"),
        inp = wrapper.find("input"),
        btn = wrapper.find("button");

    btn.click(function () {
        inp.click();
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function () {

        var file_name;
        if (file_api && inp[0].files[0]) {
            file_name = inp[0].files[0].name;
        }
        /*else
         file_name = inp.val().replace( "C:\\fakepath\\", '' );*/
        if (!file_name || !file_name.length) return;
        btn.text(file_name);
    }).change();
}

function initVideoSlider() {
    var $thumbItems = $('.thumbs li'),
        slider = $('#videoSlider').lightSlider({
            item: 1,
            loop: true,
            slideMargin: 0,
            onBeforeSlide: function (slider) {
                $thumbItems.removeClass('active');
                $thumbItems.eq(slider.getCurrentSlideCount() - 1).addClass('active');
            }
        });

    $('.thumbs').on('click', 'li', function () {
        var $thumb = $(this);
        slider.goToSlide($thumb.index() + 1);
    });
}

