var form = document.getElementById("contact-form");
form.addEventListener('submit',function(event) {
    event.preventDefault();
    var passwordValue = document.getElementById("exampleInputPassword1").value;
    var emailValue = document.getElementById("exampleInputEmail1").value;
    if (emailValue == "" || passwordValue == "" ) {
       alert("Please Enter Complete Details");
    }

})