var quizBlock = document.querySelector(".quiz-block");
var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer-count");
var isWin;
var timer;

var questions = document.querySelector("#questions");

function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
    questionOne()
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
  

  function questionOne() {
    questions.innerHTML = "What is the selector for Class?";
    var ol = document.getElementById("answers");
   
    var li = document.createElement("button");
    var liTwo = document.createElement("button");
    var liThree = document.createElement("button");
    var liFour = document.createElement("button");
    
    li.setAttribute("style", "display: block");
    liTwo.setAttribute("style", "display: block");
    liThree.setAttribute("style", "display: block");
    liFour.setAttribute("style", "display: block");

    li.innerHTML = "#";
    ol.appendChild(li);
    
    liTwo.innerHTML = ".";
    ol.appendChild(liTwo);
    
    liThree.innerHTML = "%";
    ol.appendChild(liThree);
    liFour.innerHTML = "$";
    ol.appendChild(liFour);

  }


startButton.addEventListener("click", startGame);


