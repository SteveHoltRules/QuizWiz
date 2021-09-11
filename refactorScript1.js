//this sets the place where the quiz will land
const quizContainer = document.getElementById('quiz');
//this is where the results can be expected
const resultsContainer = document.getElementById('results');
//submit button
const submitButton = document.getElementById('submit');

//Quiz Questions:
const myQuestions = [
  {
    question: "Who invented the modern Internet?",
    answers: {
      a: "Al Gore",
      b: "Marc Andreessen",
      c: "Bill Gates",
      d: "Google"
    },
    correctAnswer: "b"
  },
  {
    question: "What are the different data types present in javascript?",
    answers: {
      a: "Trulean",
      b: "BigInt",
      c: "Defined",
      d: "Nolte"
    },
    correctAnswer: "b"
  },
  {
    question: "Is javascript a statically typed or a dynamically typed language?",
    answers: {
      a: "Static",
      b: "Dynmaic"
    },
    correctAnswer: "b"
  },
  {
    question: "In Javascript, primitive data types are passed by value and non-primitive data types are passed by reference.",
    answers: {
      a: "FALSE",
      b: "TRUE"
    },
    correctAnswer: "a"
  }
];

//startquiz button - this should be contained in the quiz
const startQuiz = function () {
  // $("#quiz").empty().addClass("mt-1 ml-2 question").append(myQuestions[0].question)
  for (var i = 0; i < myQuestions.length; i++) {
    //start out returning the questions - after a next button, then move onto the next
    $("#quiz").empty().addClass("mt-1 ml-2 question").append(myQuestions[i].question)
    console.log(myQuestions[i].question);
    for (j in myQuestions[i].answers) {
      //Why is this not going into the second loop?
      console.log("in second loop");
      var letter = myQuestions[i].answers[j];
      //this seems like an accessive amount of classes.
      var ansLi = $("<div>");
      ansli.addClass("form-check")
      ansli.text(`${myQuestions[i].answers[j]}`);
      $("#quiz").append(ansLi);
    }
  }
}

  startQuiz();
//Event listener for the button
// submitButton.addEventListener('click', showResults);