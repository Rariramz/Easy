import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignUp } from "../components/Authorization/signUp.js";
import { bindSignIn } from "./bindSignIn.js";
import { signup } from "../utils/firebase.js";

export const bindSignUp = () => {
  ROOT_MAIN.innerHTML = renderSignUp();

  const authLinkSignIn = document.getElementById("authLinkSignIn");
  const authInputSubmitSignUp = document.getElementById(
    "authInputSubmitSignUp"
  );
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const authorizationError = document.getElementById("authorizationError");

  const register = async (email, password) => {
    authorizationError.hidden = true;
    try {
      if (email && password) {
        const userCredentials = await signup(email, password);
        console.log(userCredentials);
        inputEmail.value = "";
        inputPassword.value = "";
        bindSignIn();
      } else {
        throw new Error("Fill in all fields, please!");
      }
    } catch (error) {
      authorizationError.hidden = false;
      authorizationError.textContent = `${error.message}`;
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
