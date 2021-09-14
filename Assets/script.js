//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//Build the quiz
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

function buildQuiz() {
  //variable to store the HTML output
  const output = [];

  //for each question
  for (var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i])
    const askQuestion = function (currentQuestion, questionNumber) {

      //variable to store teh list of possible answers - extend out to store the answer in local storage as answeri
      const answers = [];

      //and for each available answer
      for (letter in currentQuestion.answers) {

        //add an HTML radio button....(not sure I want this)
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value = "${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
        );
      }
    }

    // add this question and its answer to the output
    output.push(
      `<div class="question">${currentQuestion.question}</div><div class= "answers"> ${answers.join('')} </div>`
    );
  });
  //Combine output list inot one string of HTML
  quizContainer.innerHTML = output.join('')
}
}

function showResults() {
  //gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  //keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    //find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question${questionNumber}]:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if answer is correct 
    if (userAnswer === currentQuestion.correctAnswer) {
      //add to the number of correct answers
      numCorrect++;

      //color the answers green
      answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
    }
    //if answer is wrong or blank
    else {
      //color the answers red
      answerContainers[questionNumber].getElementsByClassName.color = 'red';
    }
  });
  resultsContainer.innerHTML = '${numCorrect} our of ${myQuestions.length}';
}

function nextQuestion() {
  //recall the next question
  for (var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i])
  }
  //after the question is called, wait on a response. After the response, then loop to the next question

}

//kick things off
buildQuiz();

//Event Listeners
submitButton.addEventListener('click', showResults);

//I need a button to start
//I need a button to progress after each question until the end
startBtn.onclick = buildQuiz;


quizBtn.onClick = nextQuestion;

