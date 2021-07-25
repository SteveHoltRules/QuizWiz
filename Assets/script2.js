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
      var selector = `form-check-input[name=question${questionNumber}]:checked`;
      console.log(selector);
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