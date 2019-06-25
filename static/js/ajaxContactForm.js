$(document).ready(function(){
    var form = $('#ajax-contact-form');
    if(form.length){
        $(form).submit(function(e){
            e.preventDefault();
            $('.contact-form-success').html('');
            $('#ajax-contact-form input[type="submit"]').attr('disabled','disabled');
            var inputs = $('#ajax-contact-form :input');
            var values = {};
            inputs.each(function() {
                values[this.name] = $(this).val();
            });
            $.ajax({
                url: '/contact/ajaxContactForm',
                data: values,
                type: 'POST',
                dataType: 'json',
                cache: false,
                success: function(response){
                    $('#ajax-contact-form input[type="submit"]').removeAttr('disabled');
                    $('.errorMessage').hide();
                    if(response.status){
                        handleSuccess(response.message);
                    }else{
                        handleErrors(response.message);
                    }
                }
            });
        });
    }
});

function handleErrors(response){
    var name = $('#ajax-contact-form #ContactForm_name_em_'),
        description = $('#ajax-contact-form #ContactForm_description_em_'),
        email = $('#ajax-contact-form #ContactForm_email_em_');
    if(response.name){
        $(name).html(response.name[0]);
        $(name).show();
    }
    if(response.description){
        $(description).html(response.description[0]);
        $(description).show();
    }
    if(response.email){
        $(email).html(response.email[0]);
        $(email).show();
    }
}

function handleSuccess(message){
    $(":input").not(":button, :submit, :reset, :hidden").each( function() {this.value = this.defaultValue;});
    $(".contact-form-success").append("<p>"+ message +"</p>")
}