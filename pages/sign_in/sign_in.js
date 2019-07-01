
function validateForm() {
    let x = document.forms["input_details"]["fname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    if(!allLetter(x)){
        alert("First name must contain only letters");
        return false;
    }

    x = document.forms["input_details"]["lname"].value;
    if (x == "") {
        alert("Last name must be filled out");
        return false;
    }
    if(!allLetter(x)){
        alert("Last name must contain only letters");
        return false;
    }

    x = document.forms["input_details"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
    if(!RightEmail(x)){
        alert("Please write a valid mail address");
        return false;
    }

    x = document.forms["input_details"]["uname"].value;
    if (x == "") {
        alert("Username must be filled out");
        return false;
    }

    x = document.forms["input_details"]["password"].value;
    if (x == "") {
        alert("Password must be filled out");
        return false;
    }

    let y = document.forms["input_details"]["second_password"].value;
    if (x == "") {
        alert("Confirm password must be filled out");
        return false;
    }
    if (y != x){
        alert("Confirm password again");
        return false;
    }

}

function allLetter(inputtxt)
{
    const letters = /^[A-Za-z]+$/;
    if(letters.test(inputtxt))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function RightEmail(inputtxt)
{
    const letters =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ;
    if(letters.test(inputtxt))
    {
        return true;
    }
    else
    {
        return false;
    }
}
