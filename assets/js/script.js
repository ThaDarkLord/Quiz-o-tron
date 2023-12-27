
var elScoreKeep = document.getElementById("scoreKeep");
var elTimeClock = document.getElementById("timeClock");


var secondsRemaining = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        elTimeClock.textContent = "You have " + secondsRemaining + " seconds remaining..";

        if(secondsRemaining === 0){
            clearInterval(timerInterval)
        }

    }, 1000);
}

setTime();