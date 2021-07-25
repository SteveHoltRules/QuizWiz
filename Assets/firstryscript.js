//Timer Function for each button

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message = "Good Luck!"


//How many questions are there?

var questions = 5;

function questions() {
  var questions = document.getElementById("questionNumb").placeholder;
  document.getElementById("5").innerHTML=x;
}
let questionAmount = document.querySelector("#questionNumb");
questionAmount.value = questions

$(.questionNumb)


//timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  //User the 'setInterval() method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //As long as 'timeLeft is greater than 1
    if (timeLeft > 1) {
      //set the 'textContent' of 'timerEl' to show the remaining time
      timerEl.textContent = timeLeft + ' seconds remaining'
      //decrement 'timeLeft' by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      //When 'timeLeft' is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
    // The set interval method takes two inputs, one is a function that does something and the other is the timing of that thing...
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;

// The array of questions for the game.
$(".question").on("blur", "input[type='text']", function () {
  //get current text
  var date = $(this)
    .val()
    .trim();
});



var questions = [
  { q: 'The sky is blue.', a: 't' },
  { q: 'There are 365 days in a year.', a: 't' },
  { q: 'There are 42 ounces in a pound.', a: 'f' },
  { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
  { q: 'Bananas are vegetables.', a: 'f' }
];

// We start the game with a score of 0.
var score = 0;

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // Increase score
    score++;
    // Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}

// Show total at end
alert('You got ' + score + '/' + questions.length);

var createTask



//Modal - modals are forms of pop-ups that are triggered when something is selected - I don't need any of this. 
$("#task-form-modal .btn-primary").click(function () {
  //get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    //close modal
    $("#task-form-modal").modal("hide");

    //save in tasks array 
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });
    saveTasks();
  }
});

$("#remove-tasks").on("click", function () {
  for (var key in tasks) {
    tasks[keys].length = 0;
    $("#list-" + key).empty();
  }
  saveTasks();
});

//load tasks for the first time
loadTasks();
