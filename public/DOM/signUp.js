import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignUp } from "../components/Authorization/signUp.js";
import { makeDashboard } from "./dashboard.js";
import { makeSignIn } from "./signIn.js";
import { signUp, signIn } from "../utils/api.js";

export const makeSignUp = () => {
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
      makeDashboard();
    } else {
      authorizationError.hidden = false;
      authorizationError.textContent = "Fill in all fields, please!";
    }
  };

  authLinkSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    makeSignIn();
  });
  authInputSubmitSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    register(inputEmail.value, inputPassword.value);
  });
};
