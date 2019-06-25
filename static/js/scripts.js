$(document).ready(function(){
	initScrollTopBtn();
    initFixedBlocks();
    rssWidgetSuccessMessage();
    initVideoOverlay();
    fixInVisionDisplay();
});

// Used to hide keyboard on mobile devices when user try to play video
function initVideoOverlay() {
    var $overlays = $('.embed-overlay');
    var $mobileSearch = $('#mobile_search');

    $mobileSearch.on('focus', function() {
        $overlays.show();
    }).on('blur', function() {
        $overlays.hide();
    });
}

// Show simple link instead of inVision embed code on mobile devices
function fixInVisionDisplay() {
    var inVisionApps = document.querySelectorAll('.in-vision');

    function isMobile() {
        return !!( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
    }

    if (inVisionApps.length && isMobile()) {
        for (var i = 0; i < inVisionApps.length; i++) {
            inVisionApps[i].className += ' show-invision-link';
        }
    }
}

function rssWidgetSuccessMessage(){
    var successMessage = $('.rss-widget .successMessage'),
        rssWidget = $('.rss-widget');
    if(rssWidget.length){
        $('.rss-form input[type="text"]').each(function(){
            var $this = $(this);
            $this.on('focus', function(){
                if(successMessage.length){
                    successMessage.hide();
                }
            })
        })
    }
}

function initScrollTopBtn() {
	var btn = $('#scroll-btn'),
		headerHeight = 82,
		scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


	// need this to show the button if page was reloaded or loaded with scrollY > 0
	if(scrollY > headerHeight){
		btn.addClass('active');
	}else{
		btn.removeClass('active');
	}
	


	$(window).on('scroll', function () {
		scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if(scrollY > headerHeight){
			btn.addClass('active');
		}else{
			btn.removeClass('active');
		}
	});

	btn.on('click', function () {
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});
}

function initRssWidget(){
    if($('.rss-widget').length){
        var rssBlock = $('.rss-widget'),
            leftSidebar = $('.left_sidebar');
        $(window).on('scroll', function () {
            var diff = leftSidebar.height(),
                scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if(!rssBlock.hasClass('fixed')){
                diff = leftSidebar.height() - rssBlock.outerHeight();
            }
            if(scrollY >= diff){
                rssBlock.addClass('fixed');
            }else{
                rssBlock.removeClass('fixed');
            }
        });
    }
}

function setFloatingPanelPosition(){
    if($('.floating-panel').length){
        var floatingPanel = $('.floating-panel'),
            footer = $('#footer'),
            content = $('#content'),
            header = $('#header'),
            navigationBlock = $('#navigation_block'),
            floatingPanelTop = parseFloat(floatingPanel.css('top')),
            footerMarginTop = 20,
            headerHeight = header.outerHeight(),
            navigationBlockHeight = navigationBlock.outerHeight(),
            summaryHeaderHeight = headerHeight + navigationBlockHeight,
            floatingPanelHeight = floatingPanel.outerHeight(),
            contentMarginTop = parseFloat(content.css('marginTop')),
            floatingPanelCssDiff = (contentMarginTop + headerHeight) - floatingPanelTop;

        $(window).on('scroll', function () {
            var scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
                footerTop = footer.offset().top,
                asideHeightDiff = footerTop - (scrollY + floatingPanelHeight);
            if(scrollY >= summaryHeaderHeight){
                if(asideHeightDiff <= floatingPanelTop){
                    var asideMargin = asideHeightDiff - footerMarginTop;
                    floatingPanel.css('top', asideMargin + 'px');
                }else{
                    floatingPanel.css('top',  (contentMarginTop + $('#header').outerHeight()) - floatingPanelCssDiff + 'px');
                }

                if($('.rss-widget').length){
                    var rssWidget = $('.rss-widget'),
                        rssWidgetHeight = rssWidget.outerHeight();
                    if(asideHeightDiff <= floatingPanelTop){
                        rssWidget.css('top', (footerTop - (scrollY + rssWidgetHeight)) - footerMarginTop + 'px');
                    }else{
                        rssWidget.css('top', contentMarginTop + headerHeight + 'px');
                    }
                }
            }
        });
    }
}
function initFixedBlocks() {
    var $fixedBlocks = $('.rss-widget, .floating-panel'),
        $content = $('#content'),
        $footer = $('#footer'),
        $window = $(window),

        bottomPadding = 22; // bottom space between main content and footer

    function setBlockPos($block, minScrollY) {
        var scrollTop = $window.scrollTop(),
            contentOffset = $content.offset(),
            maxScrollY;

        if (!$block.is(":visible")) {
            return;
        }

        maxScrollY = $footer.offset().top - $block.outerHeight() - contentOffset.top - bottomPadding;

        if (scrollTop < minScrollY && $block.fixedTo) {
            // reset styles to default
            $block.fixedTo = '';
            $block.css({
                position: '',
                top: '',
                bottom: '',
                width: '',
                marginTop: ''
            });
        } else if (scrollTop > minScrollY && scrollTop < maxScrollY && $block.fixedTo !== 'top') {
            $block.fixedTo = 'top';
            $block.css({
                position: 'fixed',
                top: contentOffset.top + 'px',
                bottom: 'auto',
                width: $block.outerWidth() + 'px',
                marginTop: 0
            });
        } else if (scrollTop > maxScrollY && $block.fixedTo !== 'bottom') {
            $block.fixedTo = 'bottom';
            $block.css({
                position: 'absolute',
                top: 'auto',
                bottom: ($footer.outerHeight() + bottomPadding) + 'px',
                width: $block.outerWidth() + 'px',
                marginTop: 0
            });

        }
    }

    // init all blocks
    $fixedBlocks.each(function(index, block){
        var $block = $(block),
            minScrollY = $block.is(":visible") ? $block.offset().top - $content.offset().top : null;

        $block.fixedTo = ''; // used to define current alignment: top or bottom
        $block.elIndex = index; // internal counter


        setBlockPos($block, minScrollY); // init block position after page load

        // update block position on scroll event
        $window.on('scroll', function () {
            setBlockPos($block, minScrollY);
        });

        if (!minScrollY) {
            // renew minScroll value for case when media queries was applied first (if block was hidden during initialization)
            $window.on('resize.block_'+index, function () {
                if ($block.is(":visible")) {
                    // remove event handler for current block
                    $window.off('resize.block_'+$block.elIndex);

                    minScrollY = $block.offset().top - $content.offset().top;

                    $window.on('resize', function () {
                        setBlockPos($block, minScrollY);
                    });
                }
            });
        } else {
            $window.on('resize', function () {
                setBlockPos($block, minScrollY);
            });
        }

    });

}
