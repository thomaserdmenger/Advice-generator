// DOM elements
const adviceEl = document.querySelector("[advice]");

// Render random advice on screen
export default function renderAdvice(data) {
  adviceEl.textContent = data.slip.advice;
}
