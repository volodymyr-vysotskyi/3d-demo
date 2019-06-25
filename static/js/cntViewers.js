$(document).ready(function(){
    $.fn.exists = function(){
        return this.length > 0;
    }
    $.fn.getMetaValue = function(){
        return this.attr("content");
    }
    updateCntViewers();
});

var isNewStorage = function(uid, code){
    var isNew = true,
        key = localStorage.getItem(uid);
    if(key && key == code){
        isNew = false;
    }

    return isNew;
}

// update views count of current page
function updateCntViewers(){
    if(window.localStorage){
        var type = $('meta[name=type]').getMetaValue(),
            uid = $('meta[name=uid]').getMetaValue(),
            code = $('meta[name=code]').getMetaValue();
        if(type.length){
            if(isNewStorage(uid, code)){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: '/blog/UpdatePostViewsCounter',
                    data:{'data':{'type':type, 'uid':uid, 'code':code}},
                    cache: false,
                    success: function(response){
                        if(response){
                            localStorage.setItem(uid, code);
                        }
                    }
                });
            }
        }
    }
}


