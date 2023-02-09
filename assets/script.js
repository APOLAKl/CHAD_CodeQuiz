var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var startContainer = document.querySelector("#start-container");
var endContainer = document.querySelector("#end-container");
var questionsContainer = document.querySelector("#questions-container");
var questionText = document.querySelector("#question-text");
var option1Btn = document.querySelector("#option-1")
var option2Btn = document.querySelector("#option-2")
var option3Btn = document.querySelector("#option-3")
var option4Btn = document.querySelector("#option-4")

var timeleft;
var gameover;
timerEl.innerText = 0;

var currentIndex = 0;

var questions = [
  {
    text: "What is JavaScript?",
    options: [
      "a) JavaScript is a scripting language used to make the website interactive",
      "b) JavaScript is an assembly language used to make the website interactive",
      "c) JavaScript is a compiled language used to make the website interactive",
      "d) None of the mentioned",
    ],
    answer:
      "a) JavaScript is a scripting language used to make the website interactive",
  },
  {
    text: "Which of the following is correct about JavaScript?",
    options: [
      "a) JavaScript is an Object-Based language",
      "b) JavaScript is Assembly-language",
      "c) JavaScript is an Object-Oriented language",
      "d) JavaScript is a High-level language",
    ],
    answer: "a) JavaScript is an Object-Based language",
  },
  {
  text: "Arrays in JavaScript are defined by which of the following statements?",
  options: [
    "a) It is an ordered list of values",
    "b) It is an ordered list of objects",
    "c) It is an ordered list of string",
    "d) It is an ordered list of functions",
  ],
  answer: "a) It is an ordered list of values",
  },
];

var setTime = function () {
  timeleft = 30;

  var timercheck = setInterval(function () {
    timerEl.innerText = timeleft;
    timeleft--;

    if (gameover) {
      clearInterval(timercheck);
    }
  }, 1000);
};

var displayQuestion = function () {
  questionText.textContent = questions[currentIndex].text;
  option1Btn.textContent = questions[currentIndex].options[0]
  option2Btn.textContent = questions[currentIndex].options[1]
  option3Btn.textContent = questions[currentIndex].options[2]
  option4Btn.textContent = questions[currentIndex].options[3]
}

var nextQuestion = function () {
  currentIndex++;
  if(currentIndex < questions.length) {
    displayQuestion()
  } else {
    endQuiz();
  }
}

var startQuiz = function () {
  startContainer.classList.add("hide");
  questionsContainer.classList.remove("hide");
  setTime();
  displayQuestion()
};

var endQuiz = function () {
  endContainer.classList.remove("hide");
  questionsContainer.classList.add("hide");
}

startBtn.addEventListener("click", startQuiz);
option1Btn.addEventListener("click", nextQuestion)
option2Btn.addEventListener("click", nextQuestion)
option3Btn.addEventListener("click", nextQuestion)
option4Btn.addEventListener("click", nextQuestion)

// example questions


// 4. Which of the following is not javascript data types?
// a) Null type
// b) Undefined type
// c) Number type
// d) All of the mentioned

// Answer: d

// 5. What is the basic difference between JavaScript and Java?
// a) Functions are considered as fields
// b) Functions are values, and there is no hard distinction between methods and fields
// c) Variables are specific
// d) There is no difference

// Answer: b
