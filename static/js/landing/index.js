$(document).ready(function() {
    "use strict";

    function initPage(){
        fonts();
        initTabs();
        openPopup();
        initSlider();
        initVideoSlider();
        initAnimation();
        counter();
        initAnimations();
        fileUpload();
        scrollTo();
    }
    function scrollTo () {
        $('.link-scroll').on('click', function(e){
            var elementClick = $(this).attr("href"),
                destination = $(elementClick).offset().top;
            $('html,body').stop().animate({ scrollTop: destination }, 500);
            e.preventDefault();
        });
    }
    function initAnimations () {
        var $window =  $(window),
            $elements = $('.animated-block');

        function check_if_in_view() {
            var windowHeight = $window.height(),
                windowTopPosition = $window.scrollTop(),
                windowBottomPosition = (windowTopPosition + windowHeight);

            $elements.each(function() {
                var $element = $(this),
                    elementHeight = $element.outerHeight(),
                    elementTopPosition = $element.offset().top,
                    elementBottomPosition = (elementTopPosition + elementHeight),
                    animationOffset = windowHeight/2;

                if($element.hasClass('nda-block')) animationOffset = windowHeight/6;

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
            addToParent:true
        });
    }

    // tabs init
    function openPopup() {
        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true
        });
    }

    // activate counter
    function counter() {
        var time = 2, start = true, isRunning = false;
        $(window).scroll(function(){
            $('#counter').each(function(){
                var cPos = $(this).offset().top,
                    topWindow = $(window).scrollTop();
                if (cPos < topWindow + 700) {
                    if (start && !isRunning) {
                        isRunning = true;
                        $('.qty').addClass('viz');
                        $('em').each(function(){
                            var
                                i = 1,
                                num = $(this).data('num'),
                                step = 1000 * time / num,
                                that = $(this),
                                int = setInterval(function(){
                                    if (i <= num) {
                                        that.html(i);
                                    }
                                    else {
                                        start = false;
                                        isRunning = false;
                                        clearInterval(int);
                                    }
                                    i++;
                                }, step);
                        });
                    }
                }
            });
        });
    }

    // animation init
    function initAnimation() {
        AdobeEdge.loadComposition('../upload/landing/js/Animation1_31', 'EDGE-10513714', {
            scaleToFit: "width",
            centerStage: "none",
            minW: "768px",
            maxW: "1920px",
            width: "1920px",
            height: "810px"
        }, {"dom":{}}, {"dom":{}});
    }

    function initSlider()  {
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

    function fileUpload(){
        var wrapper = $( ".file-upload" ),
            inp = wrapper.find( "input" ),
            btn = wrapper.find( "button" );

        btn.click(function(){
            inp.click();
        });

        var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){

            var file_name;
            if( file_api && inp[ 0 ].files[ 0 ] ){
                file_name = inp[ 0 ].files[ 0 ].name;
            }
            /*else
             file_name = inp.val().replace( "C:\\fakepath\\", '' );*/
            if( !file_name || !file_name.length ) return;
            btn.text( file_name );
        }).change();
    }

    function initVideoSlider()  {
        var $thumbItems = $('.thumbs li'),
            slider = $('#videoSlider').lightSlider({
                item: 1,
                loop: true,
                slideMargin: 0,
                thumbItem: 9,
                onBeforeSlide: function(slider) {
                    $thumbItems.removeClass('active');
                    $thumbItems.eq(slider.getCurrentSlideCount()-1).addClass('active');
                }
            });

        $('.thumbs').on('click', 'li', function() {
            var $thumb = $(this);
            slider.goToSlide($thumb.index() + 1);
        });
    }

    if(window.addEventListener) window.addEventListener('load', initPage, false);
    else if(window.attachEvent) window.attachEvent('onload', initPage);

    const slideHeight = $('.slider-bg').height();
    $('.pg_android-development .landing-slider').style('height', slideHeight, 'important');

});

