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
  if (quizStart == true) {
    console.log("fabricateQuiz ran");
    console.log("Question " + currentQuestion + " is loaded");

    let questionTitle = STORE[currentQuestion].question;

    let answerA = STORE[currentQuestion].choices[0]; 
    let answerB = STORE[currentQuestion].choices[1];
    let answerC = STORE[currentQuestion].choices[2];
    let answerD = STORE[currentQuestion].choices[3];  

      $(".quizSection").append(
        "<div class='quizSlide quizQuestion'><h1>" + questionTitle + "</h1></div> <div class='quizAnswers'> <button class='choice'>A: " + answerA + "</button> <button class='choice'>B: " + answerB + "</button> <button class='choice'>C: " + answerC + "</button> <button class='choice'>D: " + answerD + "</button> </div>"
      );
    
    currentQuestion++;

    console.log("Loading question " + currentQuestion + " next.");
    
  }

  //if there are no questions left go to final screen 
  // while CurrectQuestion < Store.Questions


  //recieve question and answers and feed into template below
  //STORE++ 

  //<div class="quizQuestion"><h1>What is this? Tell me now.</h1></div>
  //        <div class="quizAnswers">
  //        <button class="choice">A: Apple</button>
  //        <button class="choice">B: Balloon</button>
  //        <button class="choice">C: Cat</button>
  //         <button class="choice">D: Dunkaroos</button>
  //        </div>
}

function recieveAnswer(){

  $('.quizQuestion').on('click', '.choice', function(event){
      console.log("recieveAnswer ran");
      

    });

  //compare choice to answer 
  //if they match add point to score
  //if they match correct = true, if not correct = false
  //function displayAnswer
}

function displayAnswer(){
  console.log("displayAnswer ran");
  // add class rightAnswer to quiz section if correct = true
  // add class wrongAnswer to quizSection if correct = false
  // display answer
  // make <button class="continue">Next</button>
}

function continueQuiz(){
  console.log("continueQuiz ran");
  //quizSection.onclick 'continue'
  //run fabricateQuestion
}

function scoreBoard(){
  console.log("scoreBoard ran");
  //last screen
  //display correctAnswer
  //make restart button

  //restart on click, set currentQuestion = 0 and then go to fabricateQuestion


}


function handleQuiz(){
  console.log("handleQuiz ran");

  startQuiz();
  fabricateQuestion();
  recieveAnswer();
  displayAnswer();
  continueQuiz();
  scoreBoard();
}

$(handleQuiz);