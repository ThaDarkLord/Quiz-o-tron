var body = document.body;
var header = document.createElement("header");
var nav = document.createElement("nav");
var timeSlot = document.createElement("div");
var scoreSlot = document.createElement("a");
var button = document.createElement("button");
// creates h1 tag for page
var h1El = document.createElement("h1");
// creates a section where I will inclues directions and/or questions
var infoSec = document.createElement("section");
var infoSec2 = document.createElement("section");
// creates ordered list
var listEl = document.createElement("ol");
// creates list items
var item1 = document.createElement("li");
var item2 = document.createElement("li");
var item3 = document.createElement("li");
var item4 = document.createElement("li");

// adds text content to elements
timeSlot.textContent = 30;
scoreSlot.textContent = "View high score";
h1El.textContent = "Quizzle";
infoSec.textContent =
  'Welcome to Quizzle you will have 30 seconds to answer 5 random questions. If you get a question wrong 10 seconds will be deducted from the time remaining. Use precision and confidence to navigate this arena. Please click the "start button" below to begin. Best of luck!';
button.textContent = "Start Button";

// links the variables via ID
var elTimeClock = document.getElementById("timeClock");

// appends elements to page
body.appendChild(header);
header.appendChild(nav);
nav.appendChild(timeSlot);
nav.appendChild(scoreSlot);
body.appendChild(h1El);
body.appendChild(infoSec);
 var srtBtn = body.appendChild(button);

// styling
body.setAttribute("style", "text-align: center;");
h1El.setAttribute("style", "text-align: center; font-size: 50px; ");
header.setAttribute("style", "");
timeSlot.setAttribute("style", "text-align: right;");
scoreSlot.setAttribute("style", "text-align: left;");
infoSec.setAttribute(
  "style",
  "max-width: 50rem; text-align: center; margin: 5rem 12rem;"
);
button.setAttribute("style", "border-radius: 1rem; font-size: 1.5rem;");

//  question index
var questionIndex = 0;

// object with questions answers and the correct answer
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
    answers: [
        ".push", 
        ".replace", 
        ".sort", 
        ".pop"],
    correct: ".sort",
  },
  {
    question: "How can you change attributes using javacript?",
    answers: [
      "getAttribute",
      "setAttribute",
      "styleThis",
      "createAttribute",
    ],
    correct: 'setAttribute',
  },
  {
    question: "How do you copy all text using command keys?",
    answers: [
        "command x",
        "command z", 
        "command a", 
        "both a and b"],
    correct: 'command a',
  },
  {
    question: "How do you set a variable in css?",
    answers: [
        "--", 
        "*=", 
        "var =", 
        "you cannot"],
    correct: '--',
  },
];
// questionIndex++;


srtBtn.addEventListener('click', function(){
    // removes instructions of the game and start button. Creates h2 for question and appends to page. 
    infoSec.textContent = '';
    srtBtn.textContent = '';
    var questionText = document.createElement("h2");
    questionText.textContent = questionList[questionIndex].question;
    body.appendChild(questionText);
    // this for loop goes through the question answers and creates buttons elements and then appends to the page.
    for (var i = 0; i < questionList[0].answers.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = questionList[questionIndex].answers[i];
        body.appendChild(answerButton);
      }
    //   answerButton.setAttribute('style', '');
    


     


})

// questionList/length this function sets the 30 second time for the quiz and also applies the text and styles to the timer text.
// function setTime() {
//     var timerInterval = setInterval(function() {
//         timeSlot.textContent--;
//         console.log(timeSlot)
//         nav.setAttribute('style', 'text-align: right; font-size: 14px;')
//         nav.textContent = "You have " + timeSlot.textContent + " seconds remaining..";

//         // elScoreKeep.textContent = "View high scores";
//         // elScoreKeep.setAttribute('style', 'text-align: left;');

//         if(timeSlot.textContent === 0){
//             clearInterval(timerInterval)
//         }

//     }, 1000);
// }

// setTime();
