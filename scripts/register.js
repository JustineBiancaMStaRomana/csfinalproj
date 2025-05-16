let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let why = document.getElementById("why");
let sex = "";

var sexcycle = document.getElementsByName("sex");

let cycle = [fName, lName, email, pass, why];
let required = document.getElementsByClassName("required");

var x;
var y = 0;

function toSubmit(){
    localStorage.firstName = fName.value;
    localStorage.lastName = lName.value;
    localStorage.emailAdd = email.value;
    localStorage.support = why.value;
    localStorage.sexorgen = sex;

    console.log(localStorage.firstName + localStorage.lastName + localStorage.emailAdd + localStorage.support + sex);

    window.location.href = "profile.html";

    return false;
}

function requiredShow(){
    for(x = 0; x<cycle.length; x++){
        if(cycle[x].value === "" || cycle[x].value == undefined){
            console.log(cycle[x].value);
            required[x].style.display = "inline";
        }
    }

    for (x = 0; x < sexcycle.length; x++) {
        if (!sexcycle[x].checked) {
            y++;
        }else{
            sex = sex+sexcycle[x].value;
            break;
        }
    }
    if(y == 3){
        document.getElementById("separate").style.display = "inline";
    }
}

function infoLoad(){
    document.getElementById("name").innerHTML = "Name: " + localStorage.firstName + " " + localStorage.lastName;
    document.getElementById("emailAdd").innerHTML = "Email Address: " + localStorage.emailAdd;
    document.getElementById("sex").innerHTML = "Sex: " + localStorage.sexorgen;
    document.getElementById("whytho").innerHTML = "Why you Joined: " + localStorage.support;
}