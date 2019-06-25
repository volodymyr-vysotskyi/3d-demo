(function( $ ) {
    var defaults = {
        itemEl: '.portfolio-item',
        itemsPerPage: 2,
        showItemsCount: 0
    };

    function Portfolio(el, opts){
        var self = this;
        var openRequest = true;
        var defaultUrl = '/portfolio/pagination';

        this.init = function(){
            self.$el = $(el).find(".items");
            $(window).scroll(function () {
                if ($(window).scrollTop() >= $(document).height() - $(window).height() - 500 && openRequest) {
                    openRequest = false;
                    self.counterItems();

                    $.ajax({url: self.getPaginationUrl(), type: 'get', success: function(result){
                        if(result !== "") {
                            self.renderItems(result);
                            openRequest = true;
                        }
                    }});
                }
            });
        };

        this.renderItems = function(items){
            self.$el.append(items);
        };

        this.counterItems = function(){
            self.countElems = self.$el.find(opts.itemEl).length;
        };

        this.getPaginationUrl = function(){
            return defaultUrl + '?offset=' + self.countElems + '&limit=' + opts.itemsPerPage;
        };
    }

    // portfolio definition
    $.fn.portfolio = function(options){
        var opts = {};
        $.extend( opts, defaults, options );
        return new Portfolio(this, opts);
    };
})( jQuery );
