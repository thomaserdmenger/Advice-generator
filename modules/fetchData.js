// Imports
import renderAdvice from "./renderAdvice.js";

export default async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  renderAdvice(data);
}
