var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "Who invented the modern Internet?",
    answers: {
      a: "Al Gore",
      b: "Marc Andreessen",
      c: "Bill Gates",
      d: "Google",
    },
    correctAnswer: "b",
  },
  {
    question: "What are the different data types present in javascript?",
    answers: {
      a: "Trulean",
      b: "BigInt",
      c: "Defined",
      d: "Nolte",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Is javascript a statically typed or a dynamically typed language?",
    answers: {
      a: "Static",
      b: "Dynmaic",
    },
    correctAnswer: "b",
  },
  {
    question:
      "In Javascript, primitive data types are passed by value and non-primitive data types are passed by reference.",
    answers: {
      a: "FALSE ",
      b: "TRUE",
    },
    correctAnswer: "b",
  },
];

var buttonPressed = 0;
var output = [];
var answersOutput = [];
var contained;
//clear everything with a new function

// when user clicks submit, show results
// put this at the bottom after finished
const generateQuiz = () =>
  showQuestions(myQuestions[buttonPressed], quizContainer);
submitButton.onclick = function () {
  output = [];
  showQuestions(myQuestions[buttonPressed], quizContainer);
  //roll through incrementing on the button press
  if (buttonPressed < myQuestions.length) {
    console.log(buttonPressed);
    buttonPressed += 1;
  } else {
    showResults(myQuestions[buttonPressed], quizContainer, resultsContainer);
  }
};

function showQuestions(questions, quizContainer) {
  console.log("In Show Questions");
  var results = questions.toString();
  console.log(results);
  console.log(questions.answers);
  // code will go here
  var answers = [];

  //for each answer
  //the code doesn't like the questions.answers
  for (letter in questions.answers) {
    answers.push(
      // why do I push instead of append?!
      `<label>
            <input type="radio" name=question[${buttonPressed}] value=${letter}>
            ${letter}:
            ${questions.answers[letter]}
          </label>`
    );
  }
  //add question and answer to the output
  output.push(
    `<div class="question">
          ${questions.question}
        </div>
        <div class="answers"> ${answers.join("")}
        <div>`
  );

  answersOutput.push(
    `<div class="submittedQuestion">
          ${questions.question}
        </div>
        <div class="submittedAnswers"> ${answers.join("")}
        <div>`
  );
  contained = answersOutput.join("");

  quizContainer.innerHTML = output.join("");
}

function showResults(questions, quizContainer, resultsContainer) {
  // code will go here
  //This is over selecting...why? Is it an array function?
  quizContainer.innerHTML = contained;

  //How do I break up the contained answerOutput into an array
  var answerContainers = quizContainer.querySelectorAll(".answers");

  console.log("Answer Containers Type Of");
  console.log(typeof answerContainers);

  //keep track of user's answers
  var userAnswer = "";
  var numCorrect = 0;

  //for each question
  for (var i = 0; i < answersOutput.length; i++) {
    userAnswer = (
      answersOutput[i].querySelector(`input[name=question${i}]:checked`) || {}
    ).value;

    //if answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      //add to teh number of correct answers
      numCorrect++;
    } else {
      //if the answer is wrong or blank
      answerContainers[i].style.color = "red";
    }
  }
  //defines the value of the results container...it is not appended yet
  resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

generateQuiz;

//How could I break up this program so that only one question is displayed at a time?
//I could put an if statement that surrounds the logic and waits on an answer before going to the next question
