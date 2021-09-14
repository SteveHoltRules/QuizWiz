var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

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


const generateQuiz = () => {
  //I removed the submitButton from inside the generate quiz function. 
  //I am asking to display the questions 
  // showQuestions(myQuestions[buttonPressed], quizContainer);
  console.log("After the first show questions is called");
  console.log(myQuestions[buttonPressed]);
  //Submit button is called within he generate quiz and therefore the first call is not triggering
  output = [];
  showQuestions(myQuestions[buttonPressed], quizContainer);
  //roll through incrementing on the button press
  if (buttonPressed < myQuestions.length-1) {
    console.log(buttonPressed);
    //fix array to only be to the length of the questions...
    buttonPressed += 1;
  } else {
    showResults(myQuestions[buttonPressed], quizContainer, resultsContainer);
  }
};

submitButton.onclick = generateQuiz;

//This is causing an asynch problem...
const showQuestions = function(questions, quizContainer) {
  console.log("In Show Questions");
  console.log(questions[buttonPressed]);
  //stopping point - I don't konw why it doesn't like the questions.answer...
  // var results = questions[buttonPressed];
  // console.log(results);
  // console.log(questions.answers);

  // code will go here
  var answersArr = [];
  //This code doesn't like answers because questions[buttonPressed].answers["a"] returns the value not questions[buttonPressed].answers[0]
  //It doesn't like answers because answers isn't defined like Questions is...How do I define the answers of questions? 
  //If I swap questions for myQuestions then the code works...
  var answerKeys = Object.keys(questions[buttonPressed].answers);
  console.log(answerKeys);

  //for each answer
  //the code doesn't like the questions.answers

  for (letter in questions[buttonPressed].answers[letter]) {
    answersArr.push(
      `<label>
            <input type="radio" name=question[${buttonPressed}] value=${letter}>
            ${letter}:
            ${questions[buttonPressed].answers[letter]}
          </label>`
    );
  }
  //add question and answer to the output
  output.push(
    `<div class="question">
          ${questions.question}
        </div>
        <div class="answers"> ${answersArr.join("")}
        <div>`
  );

  answersOutput.push(
    `<div class="submittedQuestion">
          ${questions[buttonPressed]}
        </div>
        <div class="submittedAnswers"> ${answersArr.join("")}
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
