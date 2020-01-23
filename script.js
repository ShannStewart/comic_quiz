'use strict';

function startQuiz(){
    $('.quizSlide').on('click', '.startQuiz', function(event){
      console.log("startQuiz ran");
      $(this).closest('.quizSlide').remove();
      quizStart = true;
      fabricateQuestion();
    });
}

function fabricateQuestion(){
  //make question and answers appear
  //question h1
  //answers button class
  //var currentQuestion 

  if (currentQuestion == STORE.length){
    scoreBoard();
  }
  else if (quizStart == true) {
    console.log("fabricateQuiz ran");
    console.log("Question " + currentQuestion + " is loaded");

    let questionTitle = STORE[currentQuestion].question;

    let answerA = STORE[currentQuestion].choices[0]; 
    let answerB = STORE[currentQuestion].choices[1];
    let answerC = STORE[currentQuestion].choices[2];
    let answerD = STORE[currentQuestion].choices[3];  

      $(".quizSection").append(
        "<div class='quizQuestion quizSlide'><h1>" + questionTitle + "</h1> <div class='quizAnswers'> <button class='choice'>" + answerA + "</button> <button class='choice'>" + answerB + "</button> <button class='choice'>" + answerC + "</button> <button class='choice'>" + answerD + "</button> </div></div>"
      );
    
    $('.quizAnswers').on('click', '.choice', function(event){
      
      let playerAnswer = $(this).text();
      
      console.log(playerAnswer + " clicked");
      
      $(this).closest('.quizQuestion').remove();
      recieveAnswer(playerAnswer);
    });

  }

  //if there are no questions left go to final screen 
  // while CurrectQuestion < Store.Questions

}

function recieveAnswer(answer){

   if (quizStart == true) {

    let quizAnswer = STORE[currentQuestion].answer;

    var answerMatch;
    var result;

    if(answer == quizAnswer){
      answerMatch = true; 
      result = "rightAnswer";
      correctAnswers++;
      console.log("We got a match!");
      $(".quizSection").addClass("rightAnswer");
    }
      else{
        answerMatch = false; 
        result = "wrongAnswer";
        console.log("Wrongo");
        $(".quizSection").addClass("wrongAnswer");
      }

    console.log("displayAnswer ran");
    // add class rightAnswer to quiz section if correct = true
    // add class wrongAnswer to quizSection if correct = false
    
    $(".quizSection").append(
      "<div class='quizSlide'><h1>The answer was " + quizAnswer + "</h1><button class='continueQuiz'>Next Question</button></div>"
      );

      continueQuiz();
   }
  
}

function continueQuiz(){
  $('.quizSlide').on('click', '.continueQuiz', function(event){
  console.log("continueQuiz ran");

      $(".quizSection").removeClass("rightAnswer")
      $(".quizSection").removeClass("wrongAnswer")
       $(this).closest('.quizSlide').remove();
      
      currentQuestion++;
      console.log("Loading question " + currentQuestion + " next.");

      fabricateQuestion();
      });
}

function scoreBoard(){
  if (quizStart == true) {
  console.log("scoreBoard ran");
  
  $('.quizSection').append( 
    "<div class='quizSlide'><h1>" + correctAnswers + " out of " + STORE.length + " were answered correctly.</h1><button class='startQuiz'>Retry</button></div>"
    );

    correctAnswers = 0;
    currentQuestion = 0;

  startQuiz();
  //restart on click, set currentQuestion = 0 and then go to fabricateQuestion

  }
}


function handleQuiz(){
  console.log("handleQuiz ran");

  startQuiz();
  fabricateQuestion();
  recieveAnswer();
  continueQuiz();
  scoreBoard();
}

$(handleQuiz);