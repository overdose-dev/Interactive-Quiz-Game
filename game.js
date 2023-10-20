const questions = [
  {
    question: "Who built this quiz?",
    answers: [
      { text: "Olanrewaju Folarin", correct: false },
      { text: "Chinaza", correct: true },
      { text: "Oyedeji Pelumi", correct: false },
      { text: "Vivian Afolabi", correct: false },
    ],
  },
  {
    question: "Pick out the odd one?",
    answers: [
      { text: "Facebook", correct: false },
      { text: "X (Twitter)", correct: true },
      { text: "WhatsApp", correct: false },
      { text: "Instagram", correct: false },
    ],
  },
  {
    question: "What is the Capital of Abuja?",
    answers: [
      { text: "Akure", correct: false },
      { text: "Gbagada", correct: false },
      { text: "Ojo", correct: false },
      { text: "None of the above", correct: true },
    ],
  },
  {
    question: "Pick the odd one here?",
    answers: [
      { text: "Konoha", correct: false },
      { text: "Cave", correct: false },
      { text: "Orthodox", correct: true },
      { text: "Billionaire Club", correct: false },
    ],
  },
];

const question = document.querySelector(".question");
const options = document.getElementById("options");
const answerStatus = document.querySelector(".answerStatus");
const nextButton = document.getElementById("next-btn");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
var currentQuestionNumber = document.getElementById("question-numb");
var Q1 = document.querySelector(".Q1");
var scoreElement = document.getElementById("score");

let shuffleQuestions, currentQuestionIndex;

let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = shuffleQuestions[currentQuestionIndex];
  currentQuestionNumber.textContent = currentQuestionIndex + 1;
  Q1.textContent = `Q${currentQuestionIndex + 1}`;
  question.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-options");
    options.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    answerStatus.textContent = "Correct Answer";
    answerStatus.style.display = "block";
    answerStatus.style.color = "green";
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    answerStatus.textContent = "Wrong Answer";
    answerStatus.style.display = "block";
    answerStatus.style.color = "red";
  }
  Array.from(options.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  answerStatus.style.display = "none";
  nextButton.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    window.location.href = `score.html?score=${encodeURIComponent(score)}`;
  }
});

function showScore() {
  resetState();
  scoreElement.textContent = `You scored: ${score}`;
  scoreElement.style.display = "block";
}

startQuiz();
