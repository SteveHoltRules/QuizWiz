var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

const myQuestions = [
  {
    question: "Who governs Javascript?",
    answers: {
      a: "NASA",
      b: "ECMA",
      c: "FASB",
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
    question: "Is javascript a statically typed or a dynamically typed language?",
    answers: {
      a: "Static",
      b: "Dynmaic",
    },
    correctAnswer: "b",
  },
  {
    question: "In Javascript, primitive data types are passed by value and non-primitive data types are passed by reference.",
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

const generateQuiz = () => {
  showQuestions(myQuestions[buttonPressed], quizContainer);
  console.log("Length of MyQuestions: ", myQuestions.length)
  //roll through incrementing on the button press
  if (buttonPressed <= 1) {
    console.log(buttonPressed);
    //fix array to only be to the length of the questions...
    buttonPressed++;
  } else {
    showResults(myQuestions[buttonPressed], quizContainer, resultsContainer);
  }
};

submitButton.onclick = generateQuiz;

//This is causing an asynch problem...
const showQuestions = function () {
  console.log("In Show Questions");
  console.log(myQuestions[buttonPressed]);

  // code will go here
  var answersArr = [];
  var output = [];
  var questionObj = myQuestions[buttonPressed].question;
  var answerObj = myQuestions[buttonPressed].answers;
  var answerKeys = Object.keys(myQuestions[buttonPressed].answers);
  console.log("answerObj: ", answerObj);

  console.log("AnswerKeys: ", answerKeys);

  for (var i = 0; i < answerKeys.length; i++) {
    answersArr.push(
      `<label>
            <input type="radio" name=question[${buttonPressed}] value=${answerKeys[i]}>
            ${answerKeys[i]} :
            ${answerObj[answerKeys[i]]}
          </label>`
    );
  }

  //add question and answer to the output
  output.push(
    `<div class="question">
          ${myQuestions[buttonPressed].question}
        </div>
        <div class="answers"> ${answersArr.join("")}
        </div>`
  );



  contained = answersOutput.join("");
  console.log(contained);
  console.log("MyQuestions.Question: ", myQuestions[buttonPressed].question);
  console.log("AnswersArr: ", answersArr);
  quizContainer.innerHTML = output.join("");
  // quizContainer.innerHTML = contained;

  answersOutput.push(
      `<div class="submittedQuestion">
          ${questionObj}
        </div>
        <div class="submittedAnswers"> ${answersArr.join("")}
        </div>`
    );
};

var showResults = function(questions, quizContainer, resultsContainer) {
  // code will go here
  //This is over selecting...why? Is it an array function?
  quizContainer.innerHTML = contained;

  //How do I break up the contained answerOutput into an array
  var answerContainers = quizContainer.querySelectorAll(".answers");

  console.log("Answer Containers Type Of :", typeof answerContainers);

  //keep track of user's answers
  var userAnswer = "";
  var numCorrect = 0;

  //for each question
  for (var i = 0; i < answersOutput.length; i++) {
    userAnswer = (
      answersOutput[i](`input[name=question${i}]:checked`) || {}
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

// generateQuiz;

//How could I break up this program so that only one question is displayed at a time?
//I could put an if statement that surrounds the logic and waits on an answer before going to the next question
