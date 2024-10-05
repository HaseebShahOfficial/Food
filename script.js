function togglediv(){
    var div=document.getElementById("mydiv");
    div.classList.toggle("show");
}


function validateForm(event) {
    event.preventDefault();

    clearErrors();

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var order = document.getElementById("order").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var isValid = true;

    if (name === "") {
        showError("nameError", "Please enter your name");
        isValid = false;
    }

    if (number === "" || isNaN(number)) {
        showError("numberError", "Please enter a valid number");
        isValid = false;
    }

    if (email === "" || !emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address");
        isValid = false;
    }

  
    if (address === "") {
        showError("addressError", "Please enter your address");
        isValid = false;
    }


    if (order === "") {
        showError("orderError", "Please enter your order");
        isValid = false;
    }

  
    if (isValid) {
        window.location.href = "learn.html";
    }
}


function showError(id, message) {
    var element = document.getElementById(id);
    element.innerHTML = message;

    var inputField = element.previousElementSibling;
    inputField.classList.add("error-border");
}

function clearErrors() {
    var errors = document.getElementsByClassName("error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-border");
    }
}