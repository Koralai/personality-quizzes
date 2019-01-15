const quizForm = document.querySelector("#quiz-form");

//Add an event listener to run this function on submit:

quizForm.addEventListener("submit", function(event){
  event.preventDefault(); // Prevents automatic reloading of the page caused by the submit event

  // Calculate the quiz-taker's total score

  const numOfQuestions = document.querySelectorAll(".question").length;
  let totalScore = 0;
  let currentQuestion = "";

  for (let n = 1; n <= numOfQuestions; n++) {
    currentQuestion = document.querySelectorAll(".question-" + n); //Generates the selector for each question, based on class names in the HTML.
    totalScore += scoreQuestion(currentQuestion);
  }
  
  //Hide the form and show results
  this.classList.toggle("hidden");

  const finalMessage = selectResultMessage(totalScore, numOfQuestions);
  finalMessage.classList.toggle("hidden");
  finalMessage.classList.toggle("animate-fadein");
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

// Divide the potential score range into 3 levels and find the DOM selector for the user's result:

function selectResultMessage(score, numberOfQuestions) {
  
  const minScore = 1 * numberOfQuestions;
  const maxScore = 3 * numberOfQuestions;
  const resultInterval = Math.floor((maxScore - minScore) / 3);
  

  // Use two values as dividers to separate the score range into three levels. Here I used the ceiling of level 1 and the floor of level 3.

  const ceilLevel1 = minScore + resultInterval; 
  const floorLevel3 = maxScore - resultInterval;

  if (score <= ceilLevel1) {
    return document.querySelector("#result-1");
  } else if (score > ceilLevel1 && score < floorLevel3) {
    return document.querySelector("#result-2");
  } else {
    return document.querySelector("#result-3");
  }
}