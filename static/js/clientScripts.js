$(document).ready(function() {
    initPortfolioSlider();
});

function initPortfolioSlider() {
    var oneItemClass = 'one-slide',
        loadingClass = 'loading',

        $sliderEl = $('.screen-slider'),
        $slides = $sliderEl.find('.slide');

    if ($slides.length > 1) {

        $sliderEl.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            prevArrow: '<span class="slide-nav slide-prev"></span>',
            nextArrow: '<span class="slide-nav slide-next"></span>'
        });

    } else {
        $sliderEl.addClass(oneItemClass);
    }

    // show slider after initialization
    $sliderEl.removeClass(loadingClass);
}