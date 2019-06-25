$(document).ready(function(){
    $.fn.exists = function(){
        return this.length > 0;
    };
    $.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };
    if($('span.linkrep').exists()){
        $('span.linkrep').each(function(){
            var elClass = '';
            elClass = $(this).attr('class');
            if($(this).hasAttr('title')){
                $(this).replaceWith("<a class = '"+ elClass +"' href='"+$(this).attr('title')+"'>"+$(this).html()+"</a>");
            }else{
                $(this).replaceWith("<a class = '"+ elClass +"'>"+$(this).html()+"</a>");
            }
        });
    }
});