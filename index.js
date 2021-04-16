//cheaking weather the form is filled or not
$(document).ready(function (event) {

    $("#login-button").click(function () {
        
        event.preventDefault();
    });

});

function ValidateForm() {

    var formInvalid = false;
    $('form input').each(function () {
        if ($(this).val() == '') {
            formInvalid = true;
       }

    });

    if (formInvalid){
            alert('One or Two fields are empty. Please fill up all fields');
            return false;
    }
        return true;
}





//Hiding Thank you
$('.Thanks').hide();

$("#login-button").click(function sub(event) {
    ValidateForm();
    if(ValidateForm()){
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        $('.Thanks').show();
         //Adding data to firebase
         writeUserData();
    }


});

//Hiding form
$('#form').hide();

//Condition for showing form
//var count = 3;
function check() {
    var count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    //Showing the form
    setTimeout(function () {
        if (count == 3) {
            $('#form').show();
        }
    }, 3000);

}



//Connecting firebase
function writeUserData() {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    database.ref('scam/').push().set({
        name: Name,
        email: Email
    });
}



//Preventing checkbox to uncheck
$(".checkbox").click(function (e) {
    var checkbox = $(this);
    if (checkbox.is(":checked")) {
        //check it 
    } else {
        // prevent from being unchecked
        this.checked = !this.checked;
    }
});



