var questionBank = [
  {
    Question: "What is the selector for class?",
    answers: [".", "#", "!", "*"],
    correct: ".",
  },

  {
    Question: "Where should the link to a script tag be place in an HTML document?",
    answers: ["Head", "Footer", "Div Tag", "Before closing tag"],
    correct: "Before closing tag",
  },
  {
    Question: "JavaScript is a ___ language",
    answers: ["funny", "objective", "object oriented", "confusing"],
    correct: "object oriented",
  },
  {
    Question: "Which of the following keywords lets you define a variable?",
    answers: ["begin", "ya", "var", "open"],
    correct: "var",
  },
  {
    Question: "What keyword is used to check whether a given property is valid or not?",
    answers: ["in", "exists", "is-in", "lies"],
    correct: "in",
  },
  {
    Question: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: ["parse()", "stringify()", "materialize()", "abracadabra()"],
    correct: "stringify()",
  },
  {
    Question: "Which of the following are closures in Javascript?",
    answers: ["objects", "variables", "functions", "all of the above"],
    correct: "all of the above",
  }
];

//html attributtes
var startScreen = document.querySelector(".start-screen");
var quizScreen = document.querySelector(".quiz-screen");
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var questionEl = document.querySelector(".question-text");
var answerEl = document.querySelector("#answers");
var nextButton = document.querySelector(".next");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");

// variables
var score = 0;
var indexholder = 0;
var time = 60;
var intervalId;

startButton.addEventListener("click", function () {
  startScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  
  intervalId = setInterval(function () {
    time--;
    timerElement.textContent = time;

    // Tests if time has run out
    if (time === 0 || time < 0) {
      // Clears interval
      gameOver();
    }
  }, 1000);

  renderQuiz();
});
var questionsAsked = [];
function renderQuiz() {
  // show question only by using the index variable
  //use for each to render every list items and make them a button with listners for right answer click
  // look up how to add values to button
  var questionIndex;
  // Get a random question
  var questionIndex =  Math.floor(Math.random() * questionBank.length);
  
  
  console.log(questionIndex);
  
  questionsAsked.push(questionIndex);
  // if questionIndex is not in questionsAsked, then you're good. Otherwise, choose again
  var notIncludesIndex = !questionsAsked.includes(questionIndex);
  if (notIncludesIndex === true) {
  return;
}else (notIncludesIndex === false) 
{
  questionIndex =  Math.floor(Math.random() * questionBank.length);
}
console.log(notIncludesIndex);
console.log(questionsAsked);

var question = questionBank[questionIndex].Question;
questionEl.innerHTML = question;

nextButton.setAttribute("style", "visibility: visible");

nextButton.innerHTML = "Next Question"
  nextButton.addEventListener("click", nextQuestion);
  
  /*  var answerOne = 
  document.createElement("li");
  li.setAttribute("data-index", 0);
  li.innerHTML = answer;
  */
 
 var li = document.createElement("button");
 var liTwo = document.createElement("button");
 var liThree = document.createElement("button");
 var liFour = document.createElement("button");

 var answerOne = questionBank[questionIndex].answers[0];
 var answerTwo = questionBank[questionIndex].answers[1];
 var answerThree = questionBank[questionIndex].answers[2];
 var answerFour = questionBank[questionIndex].answers[3];
 
 
 
 
 li.innerHTML = answerOne;
 liTwo.innerHTML = answerTwo;
 liThree.innerHTML = answerThree;
 liFour.innerHTML = answerFour;

li.setAttribute("data", "data-index: 0")
liTwo.setAttribute("data", "data-index: 1")
liThree.setAttribute("data", "data-index: 2")
liFour.setAttribute("data", "data-index: 3")

li.addEventListener("click",checkCorrect);
liTwo.addEventListener("click",checkCorrect);
liThree.addEventListener("click",checkCorrect);
liFour.addEventListener("click",checkCorrect);


 answerEl.appendChild(li);
 answerEl.appendChild(liTwo);
 answerEl.appendChild(liThree);
 answerEl.appendChild(liFour);
 
 function checkCorrect() {
   ind = Event.target.data-index;
 if (questionBank[questionIndex].answers[ind] === questionBank[questionIndex].correct) {
  window.alert("correct!");
 }else{
  time - 10;
 }
 }
  // Create elements (h3, ul, whatever)
  // ...
  // <li data-index="0">
  // ...
  // ind = event.target.attr('data-index')
  // q = questionBank[questionIndex]
  // q.answers[ind] === q.correct
  // Yay
  // else
  // sutract time
  // Set text, add listeners as necessary
  // add to DOM`

  // LISTENER
  // if correct, yay
  // if incorrect, time - X
}

function nextQuestion () {
  questionEl.innerHTML = "";
  answerEl.innerHTML = "";
  renderQuiz();
}

function gameOver() {
  clearInterval(intervalId);
}
