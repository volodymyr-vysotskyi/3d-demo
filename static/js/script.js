var siteLibrary = function(){
       this.isAndroidDevice = false;
       this.domElements = {
            domBody             : 'body',
            lanBlock            : '#mobile_lan',
            searchBlock         : '#mobile_search_block',
            sharingBlock        : '#mobile_social_sharing',
            menuBlock           : '#mobi_navigation',
            mobileSearchBlock   : '.ic_search',
            tabletSearchIco     : '#ic_tablet_search',
            tabletSearchBlock   : '.search-form-holder',
            mobileLanguageBlock : '.ic_lan',
            mobileMenuBlock     : '.ic_menu',
            mobileNaviBlock     : '#mobile_navigation',
            mobileNaviHolder    : '.mobile-menu-holder',
            chatButton          : '.chat_icon',
            footerBlock         : '#footer',
            contentBlock        : '#content',
            contactForm         : '#ContactForm_file',
            mobileArrow         : '.mobile_arrow',
            galleryBool         : false,
	        headerMobileNavLinkFirstLvl :'#mobi_navigation .header-nav-first-lvl'
       };
       this.pluginsVariable = {
           chatBlock            : '#live_chat',
           vacancySlider        : '.vacancy h5',
           lastOpenElMenu       : null
       };
};

siteLibrary.prototype.setMenuHeight = function(){
    $(this.domElements.mobileNaviHolder).css('max-height', ($(this.domElements.domBody).height() - $(this.domElements.mobileNaviBlock).height()));
};

siteLibrary.prototype.call_mobileMenuLogic = function(){
    var that = this;
    var menuEl = $(this.domElements.mobileNaviBlock).find('li');
        menuEl.on('click',function(){
            var currentVal = that.pluginsVariable.lastOpenElMenu = $(this).attr('class');
            if(currentVal === 'ic_menu'){
                $(that.domElements.menuBlock).slideToggle();
                $(that.domElements.mobileNaviHolder).css('max-height', ($(that.domElements.domBody).height() - $(that.domElements.mobileNaviBlock).height()));
            }
            if(currentVal === 'ic_lan'){
                $(that.domElements.lanBlock).slideToggle();
            }
            if(currentVal === 'ic_search'){
                $(that.domElements.searchBlock).slideToggle();
            }
            if(currentVal === 'ic_sharing'){
                $(that.domElements.sharingBlock).slideToggle();
            }
    })
};

siteLibrary.prototype.call_tabletSearchLogic = function(){
    var that = this;
    var tabletEl = $(this.domElements.tabletSearchIco);
    tabletEl.on('click',function(){
        $(that.domElements.tabletSearchBlock).slideToggle();
    })
};

siteLibrary.prototype.call_vacancySlider = function(){
    $('.vacancy>li').first().find('h5').addClass('active');
    $(this.pluginsVariable.vacancySlider).on('click',function(){
        var _displayEl = $(this).next().css('display');
        var _elClass = $(this).attr('class');

        if( _elClass != 'active' && _displayEl != 'block'){
            $('.vacancy li>div').removeClass('active').slideUp();
            $('.vacancy span').parent().removeClass('active');
            $(this).addClass('active');
	        $(this).next().stop(true,false).slideDown(200, function(){
	            $('html, body').delay('200').animate({
	                scrollTop: $('.vacancy').parent().offset().top
	            }, 500);
	         });
        }

    });
};

siteLibrary.prototype.detectAndroid = function(){
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if(isAndroid) {
        this.isAndroidDevice = true;
        var linkToChatPage = $('.live_chat_menu').attr('href');
        var imgChat = $('#live_chat .chat_icon').find('img');
        $('#live_chat>div:first-child').remove();
        var cont = $('.chat_icon').append("<a href='" + linkToChatPage + "' class='android_chat_link'></a>");
        imgChat.appendTo(cont.find('a'));
        $('#header').css({position:"absolute",width:"100%"});
        $('#navigation .have_child').removeAttr('href');
    }else{
        this.isAndroidDevice = false
    }
};


siteLibrary.prototype.renderChat = function(){
    this.detectAndroid();
    if(!this.isAndroidDevice){
        this.chatToggle();
    }
};

siteLibrary.prototype.contactFormLogic = function(){
	//Show attached file name
    $(this.domElements.contactForm).change(function(){
        var message = '';
        var fileNameEl = $('#fileName'),
            fileParent = fileNameEl.parent();
        console.log('fileParent = ', fileParent);
        fileNameEl.html(message);
        var fileSize = this.files[0].size/1024/1024;
        if (fileSize > 20){
            message = '<div class="errorMessage">Too large file. Maximum size is 20 mb</div>';
            $('input[type=file]').val('');
        } else{
            message = $('input[type=file]').val().split('\\').pop();
        }
        console.log(fileParent);
        fileParent.addClass('uploaded');
        fileNameEl.html(message);
    });
};

siteLibrary.prototype.initIpad = function(){
    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    if(isiPad){
        $('#header').css({position:"absolute",width:"100%"});
        $('#navigation .have_child').removeAttr('href');
    }
};

siteLibrary.prototype.clearField = function(selector){
    //selector.append('<div class="clear"></div>');
    selector.find('form').append('<div class="clear"></div>');
    selector.find('.clear').click(function(){
        selector.find('input').val(" ");
    });
};

siteLibrary.prototype.domManipulation = function(){
//  HIDE AND SHOW DOM ELEMENTS
    this.clearField($('#mobile_search_block'));
    this.call_vacancySlider();
    this.call_mobileMenuLogic();
    this.call_tabletSearchLogic();
    // this.contactFormLogic();

    $('.result_block').last().css('background','none');

//  FASTCLICK PLUGIN FOR MOBILE DEVICES
    FastClick.attach(document.body);

};


siteLibrary.prototype.footerPadding = function(){
    $(this.domElements.contentBlock).css('padding-bottom',22 + $(this.domElements.footerBlock).height());
};

siteLibrary.prototype.chatToggle = function(){
    var chatBlockWidth = $(this.pluginsVariable.chatBlock).width();
    if( !this.isAndroidDevice ){
        $(this.domElements.chatButton).on('click',function(){
            if($(this).parent().data('index') == true){
                $(this).parent().animate({
                    right:0
                },400);
                $(this).parent().data('index',false);
            }
            else if($(this).parent().data('index') != 1) {
                $(this).parent().animate({
                    right:-chatBlockWidth
                },400);
                $(this).parent().data('index',true);
            }
        });
    }
};

siteLibrary.prototype.initialization = function(){
    this.initIpad();
    this.renderChat();
    this.domManipulation();
    this.footerPadding();
};



$(function(){
    var siteLib = new siteLibrary();

    siteLib.initialization();

    $(window).resize(function(){
        var searchBlock = $('.search-form-holder');
        window.innerWidth >= 1100 ? searchBlock.css('display', 'block') : searchBlock.css('display', 'none');
        siteLib.footerPadding();
        siteLib.setMenuHeight();
    });

    $(window).bind('orientationchange', function() {
        siteLib.footerPadding();
        siteLib.setMenuHeight();
    });

    var defineAcccordeon = $('#mobi_navigation .have_child,.mobile_arrow');

    $.fn.accordeon = function(){
        var clickableRegion = this.parent().find('a');
        this.removeAttr("href").parent().removeClass('active');
        clickableRegion.on("click",function(){
            var slideBlock = $(this).next().find('.js-slide-content'),
                context = $(this).parent(),
                slideOff = function(){
                    context.removeClass('active');
                    slideBlock.stop(true,false).slideUp('slow');
                },
                slideOn = function(){
                    context.addClass('active');
                    slideBlock.stop(true,true).slideDown('slow');
                };
            context.hasClass('active')?slideOff():slideOn();

        });
    };

    defineAcccordeon.accordeon();

});