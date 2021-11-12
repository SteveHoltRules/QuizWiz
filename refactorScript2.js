var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

//Listeners


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

const generateQuiz = () => {
  $("quiz").empty();
  //roll through incrementing on the button press
  if (buttonPressed < myQuestions.length) {
   
    showQuestions(myQuestions[buttonPressed], quizContainer);
    // console.log("Length of MyQuestions: ", myQuestions.length);
    // console.log(buttonPressed);
    //fix array to only be to the length of the questions...
    
  } else {
    console.log("In Show Results");
    //I should be returning a contained that displays all of the questions
    //Then I should be looping through those questions to display the answers
    showResults(myQuestions, quizContainer, resultsContainer);
  }
};

submitButton.onclick = generateQuiz;

const showQuestions = function () {
  // console.log("In Show Questions: ", myQuestions[buttonPressed]);

  // code will go here
  var answersArr = [];
  var output = [];
  var questionObj = myQuestions[buttonPressed].question;
  var answerObj = myQuestions[buttonPressed].answers;
  var answerKeys = Object.keys(myQuestions[buttonPressed].answers);
  var answerSigns = [];
  console.log("answerObj: ", answerObj);

  console.log("AnswerKeys: ", answerKeys);

  for (var i = 0; i < answerKeys.length; i++) {
    //This for loop returns the answer keys - there does not seem to be down stream logic from it
    var getValue = document.innerHTML;
    document
      .getElementById(`question[${buttonPressed}][${answerKeys[i]}]`)
      .addEventListener("click", getValue);
    answersArr.push(
      `<label>
            <input type="radio" name=question[${buttonPressed}] value=${
        answerKeys[i]
      }>
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

  // console.log("Contained: ", contained);
  // console.log("MyQuestions.Question: ", myQuestions[buttonPressed].question);
  quizContainer.innerHTML = output.join("");
  console.log("Value: ", quizContainer.value);

  answersOutput.push(
    `<div class="submittedQuestion">
          ${questionObj}
        </div>
        <div class="submittedAnswers"> ${answersArr.join("")}
        </div>`
  );

  contained = answersOutput.join("");

  return buttonPressed++;
  
};

var showResults = function (questions, quizContainer, resultsContainer) {
  console.log("Questions: ", questions);
  //There is no returned value from checking the answer
  console.log("AnswersOutput: ", answersOutput);
  
  console.log("Contained: ", contained);
  quizContainer.innerHTML = contained;

  //How do I break up the contained answerOutput into an array
  var answerContainers = quizContainer.querySelectorAll(".submittedAnswers");

  console.log("Answer Containers Type Of :", typeof answerContainers);
  console.log("Answers Containers: " , answerContainers);
  //I found the submitted answers div but not the value. How do I return the value of the submitted answers?
  //The submitted answers is not falling in the right spot. 

  //keep track of user's answers
  var userAnswer = "";
  var numCorrect = 0;
  var questionsNumber = Object.keys(questions);
  var maxQuestions = (Math.max(...questionsNumber))+1;
  // console.log("Questions Number: ", questionsNumber);
  // console.log("Max Question: ", maxQuestions);
  //for each question
  for (var i = 0; i < answersOutput.length; i++) {
    //Need to have a cleaner array to evaluate the answers from
    // userAnswer = (answersOutput[i](`input[name=question${i}]:checked`) || {}).value;
    userAnswer = (answersOutput[i]);
    console.log("UserAnswer: ", userAnswer);
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
  resultsContainer.innerHTML = `${numCorrect} out of ${maxQuestions}`;
};

// generateQuiz;
