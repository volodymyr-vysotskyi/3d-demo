var owl = $('#gallery_block');
owl.owlCarousel({
    slideSpeed: 300,
    paginationSpeed: 300,
    autoPlay: true,
    transitionStyle: 'fadeUp',
    singleItem: true,
    responsive: true,
    lazyLoad: true,
    responsiveRefreshRate: 200
    //stopOnHover:true,

});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('slide_video', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var done = false;

function onPlayerStateChange(event) {
    console.log(event.data == 2);
    if (event.data == 0 || event.data === 2) {
        startCarousel();
    } else {
        stopCarousel();
    }


}

function stopCarousel() {
    console.log('stop');
    owl.trigger('owl.stop');
}

function startCarousel() {
    owl.trigger('owl.play',3000);
}


src = "https://www.youtube.com/iframe_api";