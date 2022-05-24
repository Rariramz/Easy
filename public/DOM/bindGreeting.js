import { ROOT_MAIN } from "../utils/roots.js";
import { renderGreeting } from "../components/Greeting/greeting.js";
import { bindSignIn } from "./bindSignIn.js";

export const bindGreeting = () => {
  ROOT_MAIN.innerHTML = renderGreeting();

  const greetingLinkUser = document.getElementById("greetingLinkUser");
  greetingLinkUser.addEventListener("click", (e) => {
    e.preventDefault();
    bindSignIn();
  });
};
