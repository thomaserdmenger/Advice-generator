// Imports
import renderAdvice from "./renderAdvice.js";
import renderAdviceId from "./renderAdviceId.js";

// Get data from API
export default async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  renderAdvice(data);
  renderAdviceId(data);
}
