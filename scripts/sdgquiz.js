var add = true;
console.log(add);

function wrong(){
    document.getElementById("question").style.color = "red";
    add = false;
}
function right(){
    document.getElementById("question").style.color = "#90EE90";
    document.getElementById("correct").style.color = "#90EE90";

    nextq.style.display = "block";
    blurb.style.display = "block";

    $('.wrong').hide();

    if(add == true){
        sessionStorage.score = Number(sessionStorage.score)+1;
        console.log(sessionStorage.score);
    }

}

function score(){
    document.getElementById("displayScore").innerHTML = "You got " + sessionStorage.score + "!";

    if(sessionStorage.score <= 2){
        document.getElementById("feedback").innerHTML = "Try again! I believe in you!";
    }else if(sessionStorage.score >= 3 && sessionStorage.score < 5){
        document.getElementById("feedback").innerHTML = "So close!";
    }else if(sessionStorage.score == 5){
        document.getElementById("feedback").innerHTML = "You got a perfect score!";
    }
    sessionStorage.setItem("score", 0)
}