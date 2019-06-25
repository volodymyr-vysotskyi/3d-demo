$(document).ready(function(){

    var itemBlock = $('.content-block ');

    var sliders = itemBlock.find('.gallery_block');

    var naviText = ["&#60;", "&#62;"];
    //Init sliders. Add autoplay to First slider
    $.each( sliders, function( key, value ) {
        $(sliders[key]).owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            lazyLoad:true,
            navigation:true,
            autoPlay: key == 0 ? 3000 : false,
            stopOnHover:true,
            navigationText : naviText
        });
    });


    //Show first 5. Hide others.
    var sliderBlocks = itemBlock.find('.portfolio_view');
    var itemsPerPage = 5;
    var totalItemsCount = sliderBlocks.length;
    var moreButton = $('#portfolio-more');
    moreButton.attr('data-from',itemsPerPage);
    moreButton.attr('data-to',itemsPerPage+itemsPerPage-1);
    if(totalItemsCount > itemsPerPage){
        moreButton.show();//Hided by default in css
    }
    $.each( sliderBlocks, function( key, value ) {
        if(key >= itemsPerPage){
            $(sliderBlocks[key]).hide();
        }
    });

    moreButton.on('click',function(){
        var from = parseInt($(this).attr('data-from'));
        var to = parseInt($(this).attr('data-to'));
        $.each( sliderBlocks, function( key, value ) {
            if(key >= from && key <= to){
                $(sliderBlocks[key]).show();
            }
        });
        from = to + 1;
        to = to + itemsPerPage;
        moreButton.attr('data-from',from);
        moreButton.attr('data-to',to);
        if(from >= totalItemsCount){
            moreButton.hide();
        }
    });

    //get carousel instance data and store it in variable owl
    //Stop autoplaying on hover. Option stopOnHover works only with pagination.
    var owl = $(".gallery_block").data('owlCarousel');
    $('.pr-galery-wrp').hover(function(){
            owl.stop();
        },
        function(){
            owl.play();
        });

    //Switch platforms
    $(document).on('click', '.platforms_block div', function(){
        var platform  = $(this).attr('data-platform');
        var parentBlock = $(this).parents('.portfolio_view');
        var disabledBlocks = parentBlock.find('.pr-galery-wrp');
        disabledBlocks.hide();
        parentBlock.find("."+platform+"-wrapper").css("display","inline-block");
    });

    //Show slider platform switcher if we have more than one platform
    var platformsBlock = $('.platforms_block');
    platformsBlock.each(function(){
        var _plLenght = $(this).find('li').toArray().length;
        if(_plLenght>1){
            $(this).show();
        }
    });

    //Prevent buttons moving on img loading
    $('.owl-pagination').css('display','none');
    $(window).load(function(){
        $('.owl-pagination').fadeIn('slow');
    });

    //If image not loaded yet - show ajax loader
    var imageItem = $(".owl-item img");
    imageItem.load(function() {
        $(this).parent().find('.ajax-loader').remove();
    });
    imageItem.error(function() {
        $(this).parent().append('<div class="ajax-loader"></div>');
    });
});