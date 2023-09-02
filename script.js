// Imports
import getData from "./modules/fetchData.js";
import renderAdvice from "./modules/renderAdvice.js";

// DOM elements
const buttonEl = document.querySelector("[advice-button]");

buttonEl.addEventListener("click", () => {
  getData();
});
