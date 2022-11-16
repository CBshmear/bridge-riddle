var quizBlock = document.querySelector(".quiz-block");
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var questionEl = document.querySelector("#questions-card");
var answerEl = document.querySelector("#answers");
var nextButton = document.querySelector("#next");

var isWin;
var timer;



 /*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
*/


function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.setAttribute("style", "display: none");
    startTimer()
    questionsGo()
  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }
  // create an array where each question and answer can be selected 
var questionBank = [
  {
     Question: "What is the selector for class?",
     answers: {
        a: "!",
        b: "#",
        c: ".",
        d: "."
     },
     correct: 
  },

  {
     Question: "How old am I?",
     answers: {
        a: "20",
        b: "30",
        c: "29",
        d: "50"
     }
  },
  {
     Question: "Whats my dog's name?",
     answers: {
        a: "penny",
        b: "spot",
        c: "jake",
        d: "Gus"
     }
    
  } 
  
]


function questionsGo () {
  startButton
  questionEl.innerHTML = "";
  nextButton.setAttribute("style", "visibility: visible");
  nextButton.innerHTML = "Next";
  var questionAns = questionBank[Math.floor(Math.random() * questionBank.length)];

  console.log(questionAns);

  var question = questionAns.Question;
  console.log(question);
  questionEl.innerHTML = question;

  var answer1 = questionAns.answers.a;
  console.log(answer1);
  
  var answer2 = questionAns.answers.b;
  console.log(answer2);

  var answer3 = questionAns.answers.c;
  console.log(answer3);
  var answer4 = questionAns.answers.d;
  console.log(answer4);

    var li = document.createElement("button");
    var liTwo = document.createElement("button");
    var liThree = document.createElement("button");
    var liFour = document.createElement("button");

    li.innerHTML = answer1;
    liTwo.innerHTML = answer2;
    liThree.innerHTML = answer3;
    liFour.innerHTML = answer4;

    answerEl.appendChild(li);
    answerEl.appendChild(liTwo);
    answerEl.appendChild(liThree);
    answerEl.appendChild(liFour);

    li.setAttribute("style", "display: block",);
    liTwo.setAttribute("style", "display: block");
    liThree.setAttribute("style", "display: block");
    liFour.setAttribute("style", "display: block");

}

function nextQuestion () {
  questionEl.innerHTML = "";
  answerEl.innerHTML = "";
  questionsGo();
}



nextButton.addEventListener("click", nextQuestion);

startButton.addEventListener("click", startGame);


