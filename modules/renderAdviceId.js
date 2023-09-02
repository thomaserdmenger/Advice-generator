// DOM elements
const adviceIdEl = document.querySelector("[advice-id]");

// Render advice ID on screen
export default function renderAdviceId(data) {
  adviceIdEl.textContent = `#${data.slip.id}`;
}
