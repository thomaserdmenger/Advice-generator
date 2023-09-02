// DOM elements
const adviceEl = document.querySelector("[advice]");

export default function renderAdvice(data) {
  adviceEl.textContent = data.slip.advice;
}
