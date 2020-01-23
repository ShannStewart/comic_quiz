 const STORE = [
  //00
  {
    question: "When does Peter Parker become Spider-Man?",
    choices: ["13", "15", "10", "2"],
    answer: "15"
  },
  //01  
  {
    question: "What color was X-Men's Beast originally?",
    choices: ["Blue", "Gray", "Red", "Black"],
    answer: "Gray"
  },
  //02
  {
    question: "Wolverine was born in which country?",
    choices: ["United States", "France", "Canada", "Germany"],
    answer: "Canada"
  },
   //03
  {
    question: "Storm as a young girl trained as a ____",
    choices: ["Priestness", "Thief", "Juggler", "Clown"],
    answer: "Thief"
  },
   //04
  {
    question: "What is the 'scientific' name for muntant kind?",
    choices: ["Homo Supreme", "Homo Superb", "Homo Mutantis", "Homo Superior"],
    answer: "Homo Superior"
  },
]

let correctAnswers = 0;
let currentQuestion = 0;
let quizStart = false;

