/*
$("#login-button").click(function(event){
    event.preventDefault();

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});
*/

//Hiding form
$('#form').hide();

//Condition for showing form
//var count = 3;
function check(){
    var count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    //Showing the form
    setTimeout(function(){
         if(count ==3){
        $('#form').show();
    } }, 3000);
    
}



//Connecting firebase
function writeUserData() {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    database.ref('scam/').push().set({
        name : Name,
        email: Email
    });
  }



