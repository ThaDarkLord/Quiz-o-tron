var body = document.body;
var main = document.getElementById("main");
var head = document.getElementById("head");
var nav = document.getElementById("nav");
var score = document.getElementById("score");
var content = document.getElementById("content");
var strtBtn = document.getElementById("strtBtn");
var scoreHolder = document.getElementById("endContent");
var choiceHolder = document.createElement("article");

head.textContent = "Quizzle";
nav.textContent = 'Time:' + 30 + "secs";
score.textContent = "High Scores";
content.textContent =
  'Welcome to Quizzle you will have 30 seconds to answer 5 random questions. If you get a question wrong 5 seconds will be deducted from the time remaining. Use precision and confidence to navigate this arena. Please click the "start button" below to begin. Best of luck!';
strtBtn.textContent = "Start Button";

body.appendChild(main);
main.appendChild(head);
main.appendChild(nav);
main.appendChild(score);
main.appendChild(content);
main.appendChild(strtBtn);

main.setAttribute("style", "text-align: center;");
nav.setAttribute("style", "text-align: right; font-size: 2rem;");
score.setAttribute("style", "text-align: left; font-size: 2rem;");
content.setAttribute("style", "margin: 1rem;");
strtBtn.setAttribute("style", "text-align: center;");
scoreHolder.setAttribute("style", "display: none;");
var timer = 30;

var questionIndex = 0;
var questionList = [
  {
    question: "What does the '=' sign mean in javascript?",
    answers: [
      "exactly equal to",
      "loosely equal to",
      "assignment character",
      "all of the above",
    ],
    correct: "assignment character",
  },
  {
    question: "How can you remove an item from the end of an array?",
    answers: [".push", ".replace", ".sort", ".pop"],
    correct: ".sort",
  },
  {
    question: "How can you change attributes using javacript?",
    answers: ["getAttribute", "setAttribute", "styleThis", "createAttribute"],
    correct: "setAttribute",
  },
  {
    question: "How do you copy all text using command keys?",
    answers: ["command x", "command z", "command a", "both a and b"],
    correct: "command a",
  },
  {
    question: "How do you set a variable in css?",
    answers: ["--", "*=", "var =", "you cannot"],
    correct: "--",
  },
];

strtBtn.addEventListener("click", function () {
  // removes instructions of the game and start button. Creates h2 for question and appends to page.
  strtBtn.setAttribute("style", "display: none;");
  content.textContent = "";
  setTime();
  currentQuest();
});

function currentQuest() {
  // var choiceHolder = document.createElement('article');
  content.textContent = questionList[questionIndex].question;
  content.appendChild(choiceHolder);
  choiceHolder.innerHTML = '';
  // this for loop goes through the question answers and creates buttons elements and then appends to the page.
  for (var i = 0; i < questionList[questionIndex].answers.length; i++) {
    var answer = questionList[questionIndex].answers[i]
    var answerButton = document.createElement("button");
    answerButton.setAttribute('class', 'buttonClass')
    answerButton.setAttribute('value', answer)
    // answerButton.textContent = questionList[questionIndex].answers[i];
    answerButton.textContent = i + 1 + '. ' + answer
    choiceHolder.appendChild(answerButton);
  }
  main.append(choiceHolder);
  if (questionIndex === 5) {
    console.log("hey");
    return;
  }
}

choiceHolder.addEventListener("click", function (event) {
  // srtBtn.setAttribute('style', 'display: none;');
  var buttonEl = event.target
  if (!buttonEl.matches('.buttonClass')){
    return;
  }
    if (buttonEl.value !== questionList[questionIndex].correct) {
        timer -= 5
        if(timer < 0){
            timer = 0

        }
        nav.textContent ='time:' + timer;
        
    }
    questionIndex++; 
    if(timer <= 0 || questionIndex === questionList.length){
        finalPage();
    } else{
        currentQuest();
    }
  }
);

function setTime() {
  var timerInterval = setInterval(function () {
    timer--;
    nav.textContent = 'Time: ' + timer;

    if (timer <= 0) {
      clearInterval(timerInterval);
      finalPage();
    }
  }, 1000);
}

function finalPage() {
    choiceHolder.innerHTML = '';
    timer = 0;
    nav.textContent = '';
  content.textContent = "All done!";
  content.setAttribute("style", "font-size: 3rem;");
}
