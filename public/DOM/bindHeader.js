import { ROOT_HEADER } from "../utils/roots.js";
import { renderHeader } from "../components/Header/header.js";
import { bindSignIn } from "./bindSignIn.js";
import { bindDashboard } from "./bindDashboard.js";
import {
  CHOSEN_WORKSPACE_ID,
  CHOSEN_BOARD_ID,
  OPTIONS_WORKSPACE_ID,
  OPTIONS_BOARD_ID,
} from "../utils/dynamicIds.js";

export const bindHeader = () => {
  ROOT_HEADER.innerHTML = renderHeader();

  const headerLinkLogo = document.getElementById("headerLinkLogo");
  const headerBtnNightMode = document.getElementById("headerBtnNightMode");
  const headerBtnUser = document.getElementById("headerBtnUser");
  const chosenWorkspace = document.getElementById(CHOSEN_WORKSPACE_ID);
  const chosenBoard = document.getElementById(CHOSEN_BOARD_ID);
  const workspaceOptions = document.getElementById(OPTIONS_WORKSPACE_ID);
  const boardOptions = document.getElementById(OPTIONS_BOARD_ID);
  const workspaceOptionsArray = workspaceOptions.getElementsByTagName("input");
  const boardOptionsArray = boardOptions.getElementsByTagName("input");

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      workspaceOptions.open = false;
      boardOptions.open = false;
    }
  });

  headerLinkLogo.addEventListener("click", (e) => {
    e.preventDefault();
    bindDashboard();
  });
  headerBtnNightMode.addEventListener("click", (e) => {
    e.preventDefault();
    const element = document.body;
    element.classList.toggle("dark-mode");
    alert("Dark Mode Soon!^");
  });
  headerBtnUser.addEventListener("click", (e) => {
    e.preventDefault();
    bindSignIn();
  });

  const addEventListenersOnOption = (option) => {
    option.addEventListener("dblclick", (e) => {
      const targetWorkspace = e.target;
      targetWorkspace.readOnly = false;
    });

    option.addEventListener("blur", (e) => {
      const targetWorkspace = e.target;
      targetWorkspace.readOnly = true;
    });
  };

  // WORKSPACE
  workspaceOptions.addEventListener("click", (e) => {
    switch (e.target.tagName) {
      case "INPUT": {
        const targetWorkspace = e.target.value;
        chosenWorkspace.textContent = targetWorkspace;
        // alert("CURRENT WORKSPACE: " + targetWorkspace);
        break;
      }
      case "IMG": {
        const newWorkspace = document.createElement("input");
        newWorkspace.value = "New";
        newWorkspace.readOnly = false;
        const addBtn = workspaceOptions.getElementsByTagName("button")[0];
        const div = workspaceOptions.getElementsByClassName("options")[0];
        div.insertBefore(newWorkspace, addBtn);
        newWorkspace.focus();

        addEventListenersOnOption(newWorkspace);
        break;
        // ADD NEW WORKSPACE TO DB
      }
    }
  });

  [...workspaceOptionsArray].forEach((option) =>
    addEventListenersOnOption(option)
  );

  // BOARD
  boardOptions.addEventListener("click", (e) => {
    switch (e.target.tagName) {
      case "INPUT": {
        const targetBoard = e.target.value;
        chosenBoard.textContent = targetBoard;
        break;
      }
      case "IMG": {
        const newBoard = document.createElement("input");
        newBoard.value = "New";
        newBoard.readOnly = false;
        const addBtn = boardOptions.getElementsByTagName("button")[0];
        const div = boardOptions.getElementsByClassName("options")[0];
        div.insertBefore(newBoard, addBtn);
        newBoard.focus();

        newBoard.addEventListener("dblclick", (e) => {
          newBoard.readOnly = false;
        });

        newBoard.addEventListener("blur", (e) => {
          newBoard.readOnly = true;
        });
        // ADD NEW BOARD TO DB
      }
    }
  });

  [...boardOptionsArray].forEach((option) => addEventListenersOnOption(option));
};
