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
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //variable to store teh list of possible answers
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

      // add this question and its answer to the output
      output.push(
        '<div class="question">${currentQuestion.question}</div><div class= "answers"> ${answers.join('')} </div>'
      );
    });
  //Combine output list inot one string of HTML
  quizContainer.innerHTML = output.join('')
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



//kick things off
buildQuiz();

//Event Listeners
submitButton.addEventListener('click', showResults);

//Functions
function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        // bootstrap has a seperatation from the label and the input whereas the example had an input only. How do I make this work with bootstrap?

        answers.push(
          `<div class="form-check">
            <input class="form-check-input" type="radio" name="question${questionNumber}" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>
          </input>
          </div>`
        );
      }
      // add this question and its answers to the output
      //${placeholder values} Template literals and multi-line and substitution for what is passed}
      //This is where the current question is passed and should be manipulated - alter the bootstrap here
      output.push(
        `<div class="mt-1 ml-2 question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`

      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  //fix the innerHTML and substitute if for something better....
  quizContainer.innerHTML = output.join('');
}

function showResults() {

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `form-check-input[name=question${questionNumber}]:checked`;
    console.log(selector);
    const userAnswer = (answerContainer.querySelectorAll(selector) || {}).value;
    //This is broken
    console.log(userAnswer);

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

// display quiz right away
buildQuiz();


// on submit, show results
submitButton.addEventListener('click', showResults);