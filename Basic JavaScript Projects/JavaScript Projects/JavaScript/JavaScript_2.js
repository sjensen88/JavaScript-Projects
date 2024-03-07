function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out.");
        return false;
    }
}

function validateForm() {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Last name must be filled out.");
        return false;
    }
}

function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email name must be filled out.");
        return false;
    }
}

function validateForm() {
    let x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Phone number must be filled out.");
        return false;
    }
}