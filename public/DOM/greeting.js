import { ROOT_MAIN } from "../utils/roots.js";
import { renderGreeting } from "../components/Greeting/greeting.js";
import { makeSignIn } from "./signIn.js";

export const makeGreeting = () => {
  ROOT_MAIN.innerHTML = renderGreeting();

  const greetingLinkUser = document.getElementById("greetingLinkUser");
  greetingLinkUser.addEventListener("click", (e) => {
    e.preventDefault();
    makeSignIn();
  });
};
