import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignIn } from "../components/Authorization/signIn.js";
import { makeDashboard } from "./dashboard.js";
import { makeSignUp } from "./signUp.js";
import { signIn } from "../utils/api.js";

export const makeSignIn = () => {
  ROOT_MAIN.innerHTML = renderSignIn();

  const authLinkSignUp = document.getElementById("authLinkSignUp");
  const authInputSubmitSignIn = document.getElementById(
    "authInputSubmitSignIn"
  );
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const authorizationError = document.getElementById("authorizationError");

  const login = (email, password) => {
    if (email && password) {
      authorizationError.hidden = true;
      signIn(email, password);
      inputEmail.value = "";
      inputPassword.value = "";
      makeDashboard();
    } else {
      authorizationError.hidden = false;
      authorizationError.textContent = "Fill in all fields, please!";
    }
  };

  authLinkSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    makeSignUp();
  });
  authInputSubmitSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    login(inputEmail.value, inputPassword.value);
  });
};
