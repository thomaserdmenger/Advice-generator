// Imports
import renderAdvice from "./renderAdvice.js";
import renderAdviceId from "./renderAdviceId.js";

// Get data from API
export default async function getData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Resource or server issue)");
    }

    const data = await response.json();

    renderAdvice(data);
    renderAdviceId(data);
  } catch (error) {
    console.log(error);
  }
}
