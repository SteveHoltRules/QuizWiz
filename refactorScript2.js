var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


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
      a: "FALSE ",
      b: "TRUE"
    },
    correctAnswer: "b"
  }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    // code will go here
    var output = [];
    var answers;

    //for each question
    for(var i=0; i<questions.length; i++) {

      //reset the answers
      answers = [];

      //for each answer
      for(letter in questions[i].answers) { 
        answers.push(
          // why do I push instead of append?!
          `<label>
            <input type="radio" name=question${i} value=${letter}>
            ${letter}:
            ${questions[i].answers[letter]}
          </label>`
        );
      }
      //add question and answer to the output
      output.push(
        `<div class="question">
          ${questions[i].question}
        </div>
        <div class="answers"> ${answers.join('')}
        <div>`
      );
    }

    //Combine 
    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // code will go here
    //This is over selecting...why? Is it an array function?
    var answerContainers = quizContainer.querySelectorAll('.answers');

    console.log("Answer Containers Type Of");
    console.log(typeof answerContainers);

    //keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    //for each question
    for(var i = 0; i<questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value; 

      //if answer is correct
      if(userAnswer === questions[i].correctAnswer){
        //add to teh number of correct answers
        numCorrect++;
      } else {
        //if the answer is wrong or blank
        answerContainers[i].style.color='red';
      }
    }
    //defines the value of the results container...it is not appended yet
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
  }

  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  }
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//How could I break up this program so that only one question is displayed at a time?
//I could put an if statement that surrounds the logic and waits on an answer before going to the next question