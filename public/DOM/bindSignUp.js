import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignUp } from "../components/Authorization/signUp.js";
import { bindDashboard } from "./bindDashboard.js";
import { bindSignIn } from "./bindSignIn.js";
import { signup, signin } from "../utils/firebase.js";

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
        await updateLocalStorage();
        inputEmail.value = "";
        inputPassword.value = "";
        // await signin(email, password);
        bindDashboard();
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

export const updateLocalStorage = async () => {
  // const uid = JSON.parse(localStorage.getItem("uid"));
  // const workspaces = await getWorkspaces(uid);
  // const boards = await getBoards(uid);
  // localStorage.setItem("workspaces", JSON.stringify(workspaces || {}));
  // localStorage.setItem("boards", JSON.stringify(boards || {}));
  // localStorage.setItem("currentWorkspace", JSON.stringify({}));
  // localStorage.setItem("currentBoard", JSON.stringify({}));
};
