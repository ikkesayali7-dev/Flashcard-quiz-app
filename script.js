let cards = [
  { question: "What is Java?", answer: "Java is a high-level, object-oriented programming language." },
  { question: "What is SQL?", answer: "SQL is used to store, retrieve and manage data in relational databases." },
  { question: "What is HTML?", answer: "HTML is the standard markup language used to create web pages." },
  { question: "What is CSS?", answer: "CSS is used to style and design HTML web pages." },
  { question: "What is JavaScript?", answer: "JavaScript is a programming language used to add interactivity to web pages." }
];

let current = 0;

function renderCard() {
  if (cards.length === 0) {
    document.getElementById("question").textContent = "No flashcards available";
    document.getElementById("answer").classList.add("hidden");
    document.getElementById("showBtn").style.display = "none";
    document.getElementById("progressText").textContent = "0 cards";
    document.getElementById("progressFill").style.width = "0%";
    return;
  }

  const card = cards[current];
  document.getElementById("question").textContent = card.question;
  document.getElementById("answer").textContent = card.answer;
  document.getElementById("answer").classList.add("hidden");
  document.getElementById("showBtn").textContent = "Show Answer";
  document.getElementById("showBtn").style.display = "inline-block";

  document.getElementById("progressText").textContent =
    `Card ${current + 1} of ${cards.length}`;

  document.getElementById("progressFill").style.width =
    `${((current + 1) / cards.length) * 100}%`;

  document.getElementById("message").textContent = "";
}

function showAnswer() {
  const answer = document.getElementById("answer");
  answer.classList.toggle("hidden");
  document.getElementById("showBtn").textContent =
    answer.classList.contains("hidden") ? "Show Answer" : "Hide Answer";
}

function nextCard() {
  if (cards.length === 0) return;
  current = (current + 1) % cards.length;
  renderCard();
}

function previousCard() {
  if (cards.length === 0) return;
  current = (current - 1 + cards.length) % cards.length;
  renderCard();
}

function addCard() {
  const question = prompt("Enter the question:");
  if (!question) return;

  const answer = prompt("Enter the answer:");
  if (!answer) return;

  cards.push({ question, answer });
  current = cards.length - 1;
  renderCard();
  document.getElementById("message").textContent = "Flashcard added successfully.";
}

function editCard() {
  if (cards.length === 0) return;

  const newQuestion = prompt("Edit question:", cards[current].question);
  if (!newQuestion) return;

  const newAnswer = prompt("Edit answer:", cards[current].answer);
  if (!newAnswer) return;

  cards[current] = { question: newQuestion, answer: newAnswer };
  renderCard();
  document.getElementById("message").textContent = "Flashcard updated successfully.";
}

function deleteCard() {
  if (cards.length === 0) return;

  const ok = confirm("Are you sure you want to delete this flashcard?");
  if (!ok) return;

  cards.splice(current, 1);
  if (current >= cards.length) current = Math.max(0, cards.length - 1);
  renderCard();
  document.getElementById("message").textContent = "Flashcard deleted successfully.";
}

renderCard();
