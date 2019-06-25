$(document).ready(function(){

	var header = $('#header'),
	// navBlock = $('#navigation_block'),
	navBlock = $('#header-wrapper'),
	scrollDirection = '',
	downDirection = 'down',
	upDirection = 'up',
	previousScroll = 0,
	timeout = 0,
	fadeSpeed = 'fast',
	fadeTimeout = 250;

	/*$('#header-wrapper').hover(function(){
		timeout = setTimeout(function () {
			if(scrollDirection == downDirection){
				navBlock.slideDown(20);
			}
		}, fadeTimeout);
	},function(){
		clearTimeout(timeout);
		timeout = 0;
		if(scrollDirection == downDirection){
			setTimeout(function(){
				navBlock.slideUp(20);},300);
		}
	});
*/
	/*$(window).scroll(function(){
		var currentScroll = $(this).scrollTop();
		if(currentScroll >= 0){
			if (currentScroll > previousScroll){
				clearTimeout(timeout);
				timeout = 0;
				navBlock.slideUp(fadeSpeed);
				scrollDirection = downDirection;
			} else {
				if(timeout == 0){
					timeout = setTimeout(function () {
						navBlock.slideDown(fadeSpeed);
						scrollDirection = upDirection;
					}, fadeTimeout);
				}
			}
			previousScroll = currentScroll;
		}
	});*/
});
