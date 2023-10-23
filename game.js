const questions = [
  {
    question: "Who built this quiz?",
    answers: [
      { text: "Olanrewaju Folarin", correct: false },
      { text: "Chinazaekpere", correct: true },
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
    question: "How many bones are there in the human body?",
    answers: [
      { text: "50", correct: false },
      { text: "200", correct: false },
      { text: "206", correct: true },
      { text: "300", correct: false },
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
    question: "What is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question:
      "Which is the only planet in our solar system that rotates on its side?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
      { text: "Uranus", correct: true },
      { text: "Mars", correct: false },
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
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
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
