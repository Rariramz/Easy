import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignUp } from "../components/Authorization/signUp.js";
import { bindDashboard } from "./bindDashboard.js";
import { bindSignIn } from "./bindSignIn.js";
import { signUp, signIn } from "../utils/api.js";

export const bindSignUp = () => {
  ROOT_MAIN.innerHTML = renderSignUp();

  const authLinkSignIn = document.getElementById("authLinkSignIn");
  const authInputSubmitSignUp = document.getElementById(
    "authInputSubmitSignUp"
  );
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const authorizationError = document.getElementById("authorizationError");

  const register = (email, password) => {
    authorizationError.hidden = true;

    if (email && password) {
      signUp(email, password);
      inputEmail.value = "";
      inputPassword.value = "";
      signIn(email, password);
      bindDashboard();
    } else {
      authorizationError.hidden = false;
      authorizationError.textContent = "Fill in all fields, please!";
    }
  };

  authLinkSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    bindSignIn();
  });
  authInputSubmitSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    register(inputEmail.value, inputPassword.value);
  });
};
