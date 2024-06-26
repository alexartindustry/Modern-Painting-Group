$("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
       // submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

 $('.button-form').on('click', function(e) {

    var email = $('#email').val();
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var pattern2 = /^\d+$/;


    $(".req").each(function(index) {
        if ($(this).val() == '') {
            $(this).css('border', '2px solid red');
            $(this).css('background', '#fbe5e5');
        } else {
            if($(this).attr('id')=='email') {
                if(pattern.test(email)) {
                   $('#email').css('border', '2px solid #f5f1ec'); 
                   $('#email').css('background', '#f5f1ec'); 
                 } else {
                   $('#email').css('border', '2px solid red');
                   $('#email').css('background', '#fbe5e5');
                }
            } /*else if($(this).attr('id')=='phonenum') {
                if(pattern2.test(phonenum)) {
                   $('#phonenum').css('border', '1px solid #a1b2bd');  
                } else {
                   $('#phonenum').css('border', '1px solid red');
                }
            }*/
            else {
              $(this).css('border', '2px solid #f5f1ec');
              $(this).css('background', '#f5f1ec'); 
            }
        }
    });
           
});

function submitForm(){
    // Initiate Variables With Form Content
    var yourname = $("#yourname").val(),
        email = $("#email").val(),
        address = $("#address").val(),
        message = $("#message").val();
  
    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "&yourname=" + yourname + "&email=" + email + "&address=" + address + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Thank you. We'll contact you soon!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated form-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 tc text-success";
    } else {
        var msgClasses = "h3 tc text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}