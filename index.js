const quizForm = document.querySelector("#quiz-form");

//Add an event listener to run this function on submit:

quizForm.addEventListener("submit", function(event){
  event.preventDefault(); // Prevents automatic reloading of the page caused by the submit event

  const numOfQuestions = 10;
  let totalScore = 0;
  let currentQuestion = "";

  for (let n = 1; n <= numOfQuestions; n++) {
    currentQuestion = document.querySelectorAll(".question-" + n); //Generates the selector for each question
    totalScore += scoreQuestion(currentQuestion);
  }
  
  //Hide the form and show results
  this.classList.toggle("hidden");
  selectResultMessage(totalScore).classList.toggle("hidden");

});


//The scoring process will be the same for every question (first answer always worth the same amount, etc.):

function scoreQuestion(radioBtnArray) {
  if (radioBtnArray[0].checked === true) {
    return 1;
  } else if (radioBtnArray[1].checked === true) {
    return 2;
  } else if (radioBtnArray[2].checked === true) {
    return 3;
  } else {
    return 0;
  }
}

// Find the selector for the result message:

function selectResultMessage(score) {
  if (score <= 16) {
    return document.querySelector("#result-1");
  } else if (score >= 17 && score <= 23) {
    return document.querySelector("#result-2");
  } else {
    return document.querySelector("#result-3");
  }
}