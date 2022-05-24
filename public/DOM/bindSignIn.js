import { ROOT_MAIN } from "../utils/roots.js";
import { renderSignIn } from "../components/Authorization/signIn.js";
import { bindDashboard } from "./bindDashboard.js";
import { bindSignUp } from "./bindSignUp.js";
import { signin, getWorkspaces } from "../utils/firebase.js";

export const bindSignIn = () => {
  ROOT_MAIN.innerHTML = renderSignIn();

  const authLinkSignUp = document.getElementById("authLinkSignUp");
  const authInputSubmitSignIn = document.getElementById(
    "authInputSubmitSignIn"
  );
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const authorizationError = document.getElementById("authorizationError");

  const updateLocalStorage = async () => {
    const uid = JSON.parse(localStorage.getItem("uid"));
    const workspaces = await getWorkspaces(uid);
    localStorage.setItem("workspaces", JSON.stringify(workspaces || {}));
    localStorage.setItem("currentWorkspace", JSON.stringify({}));
    localStorage.setItem("currentWorkspaceBoards", JSON.stringify({}));
    localStorage.setItem("currentBoard", JSON.stringify({}));
  };

  const login = async (email, password) => {
    authorizationError.hidden = true;
    try {
      if (email && password) {
        const userCredentials = await signin(email, password);
        console.log(userCredentials);
        localStorage.setItem("uid", JSON.stringify(userCredentials.user.uid));
        await updateLocalStorage();
        inputEmail.value = "";
        inputPassword.value = "";
        bindDashboard();
      } else {
        throw new Error("Fill in all fields, please!");
      }
    } catch (error) {
      authorizationError.hidden = false;
      authorizationError.textContent = `${error.message}`;
    }
  };

  authLinkSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    bindSignUp();
  });
  authInputSubmitSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    login(inputEmail.value, inputPassword.value);
  });
};
