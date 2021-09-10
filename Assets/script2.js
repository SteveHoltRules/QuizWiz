//Functions
function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    // console.log("in My questions each");
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];
      var singleAnswer = $("#answer").val()
      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        // bootstrap has a seperatation from the label and the input whereas the example had an input only. How do I make this work with bootstrap?

        answers.push(
          `<div class="form-check">
          <label class="form-check-label" for="flexRadioDefault1">
            <input class="form-check-input" type="radio" name="question${questionNumber}" id="flexRadioDefault1" checked value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>
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
      
      document.getElementById('answers', singleAnswer);
      localStorage.setItem('answers');
      console.log("in build Quiz");
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  //fix the innerHTML and substitute if for something better....
  quizContainer.innerHTML = output.join('');
}

function showResults() {
  console.log("in show results");

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;
  //can I replace the forEach with a map function or a filter function?
  //How do I isolate the element of the object? 
  // var answersToQs = myQuestions.map(function(currentQuestion)){
  //   return currentQuestion.value;
  // }

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    console.log(answerContainer);
    //The form check label has the value. Here I am searching for the check at this question. It finds the check
    const selector = `form-check-input[name=question${questionNumber}]:checked`;
    const label = `form-check-label[name=quesiton${currentQuestion}]`;
    console.log(selector);
    console.log(label);
    const userAnswer = (answerContainer.querySelectorAll(selector) || {}).value;
    //This is broken
    console.log(answerContainer.value);
    
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

// display quiz right away
buildQuiz();
const answerKey = document.getElementsByTagName('form-check-input');
console.log(answerKey);

// on submit, show results
submitButton.addEventListener('click', showResults);