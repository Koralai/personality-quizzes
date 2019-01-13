const quizForm = document.querySelector("#quiz-form");

//Add an event listener to run this function on submit:

quizForm.addEventListener("submit", function(event){
  event.preventDefault(); // Prevents automatic reloading of the page caused by the submit event

  const question1 = document.querySelectorAll(".first-question");
  const question2 = document.querySelectorAll(".second-question");

  const totalScore = scoreQuestion(question1) + scoreQuestion(question2);

  const quizResults = document.querySelector("#quiz-results");
  quizResults.textContent = "Your score is: " + totalScore;

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