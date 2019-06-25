$(document).ready(function(){

	var currentIndex = null;
	var sliderClass = null;
	var countOfIndexBlocks = null;
	var activeSlider = null;
	var sliderBlockCount = null;
	var ourTeamNextBlockPadding = 0;
	var ourTeamBlocksPadding = 25;
	var itemBlock = $('.team > div');

	$.fn.ourTeamSlider = function(){
		sliderClass ="." + this.parent().attr('class');
		var indexObj = $(sliderClass).toArray();
		countOfIndexBlocks = indexObj.length;
		addIndexToBlock(indexObj);
		sliderLogic(this);
		$(window).on('resize', function() {
			addIndexToBlock(indexObj);
		});
	};

	function sliderLogic(link){

		link.click(function(){
			//if block is not active
			if($(this).attr('class').match('active') === null){

                //set padding for next team block

				var sliderBlock = $(this).find('.sliderBlock');
                var ourTeamNextBlockPadding = sliderBlock.outerHeight();
				ourTeamNextBlockPadding = ourTeamNextBlockPadding + ourTeamBlocksPadding;
				$(this).parent().animate({paddingBottom:ourTeamNextBlockPadding + 'px'},300);

				activeSlider = $(this).find('.sliderBlock').attr('data-slider');
				currentIndex = $(this).parents(sliderClass).data('index');
				//Hide by index
				for(var i = 0; i < countOfIndexBlocks; i++){
					if(i != currentIndex){
						var selector = $('[data-index="'+i+'"]');
						selector.find('.sliderBlock').hide();
						selector.animate({paddingBottom:'0px'},300);
					}else{
						$('.sliderBlock').hide().parents('.block').attr('class','block');
						$(this).addClass('active_'+activeSlider);
						$('.our-team-name').removeClass('active');
						$(this).find('.our-team-name').addClass('active');
					}
				}

				if($(this).find('.sliderBlock').css('display') != 'block'){
					$(this).find('.sliderBlock').fadeIn(300);
				}else{
					$(this).find('.sliderBlock').fadeOut(300);
					for(var i=0; i <= countOfIndexBlocks; i++){
						$(this).removeClass('active_' + i);
					}
					$('[data-index]').animate({paddingBottom:ourTeamBlocksPadding+'px'},300);
				}
			}
		})
	}
	function addIndexToBlock(obj){
		for(var i in obj){
			ourTeamNextBlockPadding = 0;
			$(obj[i]).attr('data-index',parseInt(i));
			var sliderBlocks = $(obj[i]).find('.sliderBlock').toArray();
			for(var j in sliderBlocks){
				$(sliderBlocks[j]).attr('data-slider',parseInt(j));
				sliderBlockCount = sliderBlocks.length;
				//get padding for next team block
				if(sliderBlocks[j].offsetHeight > ourTeamNextBlockPadding){
					ourTeamNextBlockPadding = sliderBlocks[j].offsetHeight;
				}
			}
			//get max info block height
			var infoBlocks = $(obj[i]).find('.info').toArray();
			var maxInfoBlockHeight = 0;
			for(var j in infoBlocks){
				infoBlocks[j].style.height = 'auto';
				if(infoBlocks[j].offsetHeight > maxInfoBlockHeight){
					maxInfoBlockHeight = infoBlocks[j].offsetHeight;
				}
			}
			//set max info block height
			maxInfoBlockHeight = maxInfoBlockHeight + ourTeamBlocksPadding;
			for(var j in infoBlocks){
				$(infoBlocks[j]).css('height',maxInfoBlockHeight + "px");
			}
		}
	}

	//Init slider
	itemBlock.ourTeamSlider();

	//Change images
	var imageLink = $('.avatar');
	var defaultImageClass = 'img.our-team-default-image';
	var activeImageClass = 'img.our-team-active-image';
	var nameLink = $('.our-team-name');
	nameLink.hover(function(){
		var parentBlock = $(this).parent().parent().parent();
		if(parentBlock.attr('class').match('active') === null){//Change if block not active
			parentBlock.find(defaultImageClass).hide();
			parentBlock.find(activeImageClass).show();
		}
	},function(){
		var parentBlock = $(this).parent().parent().parent();
		if(parentBlock.attr('class').match('active') === null){
			parentBlock.find(activeImageClass).hide();
			parentBlock.find(defaultImageClass).show();
		}
	});
	itemBlock.click(function(){
		$(imageLink).find(defaultImageClass).show();
		$(imageLink).find(activeImageClass).hide();
		$(this).find(defaultImageClass).hide();
		$(this).find(activeImageClass).show();
	});
	imageLink.hover(function(){
		if($(this).parent().attr('class').match('active') === null){//Change if block not active
			$(this).find(defaultImageClass).hide();
			$(this).find(activeImageClass).show();
		}
	},function(){
		if($(this).parent().attr('class').match('active') === null){
			$(this).find(activeImageClass).hide();
			$(this).find(defaultImageClass).show();
		}
	});
	//First item must be active
	var firstItem = $('.team > div:first').click();
	//Prevent change items by click on position
	$('.position').click(function(){return false;});
});
