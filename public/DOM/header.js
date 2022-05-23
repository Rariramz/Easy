import { ROOT_HEADER } from "../utils/roots.js";
import { renderHeader } from "../components/Header/header.js";
import { makeSignIn } from "./signIn.js";
import { makeDashboard } from "./dashboard.js";
import {
  CHOSEN_WORKSPACE_ID,
  CHOSEN_BOARD_ID,
  OPTIONS_WORKSPACE_ID,
  OPTIONS_BOARD_ID,
} from "../utils/dynamicIds.js";

export const makeHeader = () => {
  ROOT_HEADER.innerHTML = renderHeader();

  const headerLinkLogo = document.getElementById("headerLinkLogo");
  const headerBtnNightMode = document.getElementById("headerBtnNightMode");
  const headerBtnUser = document.getElementById("headerBtnUser");
  const chosenWorkspace = document.getElementById(CHOSEN_WORKSPACE_ID);
  const chosenBoard = document.getElementById(CHOSEN_BOARD_ID);
  const workspaceOptions = document.getElementById(OPTIONS_WORKSPACE_ID);
  const boardOptions = document.getElementById(OPTIONS_BOARD_ID);

  headerLinkLogo.addEventListener("click", (e) => {
    e.preventDefault();
    makeDashboard();
  });
  headerBtnNightMode.addEventListener("click", (e) => {
    e.preventDefault();
    alert("NIGHT MODE");
  });
  headerBtnUser.addEventListener("click", (e) => {
    e.preventDefault();
    makeSignIn();
  });

  // WORKSPACE
  workspaceOptions.addEventListener("click", (e) => {
    boardOptions.removeAttribute("open");
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
        newWorkspace.readOnly = true;
        const addBtn = workspaceOptions.getElementsByTagName("button")[0];
        const div = workspaceOptions.getElementsByClassName("options")[0];
        div.insertBefore(newWorkspace, addBtn);
        // newWorkspace.focus();
        break;
        // ADD NEW WORKSPACE TO DB
      }
    }
  });

  workspaceOptions.addEventListener("dblclick", (e) => {
    if (e.target.tagName) {
      const targetWorkspace = e.target;
      targetWorkspace.readOnly = false;
    }
  });

  workspaceOptions.addEventListener("change", (e) => {
    if (e.target.tagName) {
      const targetWorkspace = e.target;
      // CHANGE NAME OF the workspace IN DB
      targetWorkspace.readOnly = true;
      chosenWorkspace.textContent = targetWorkspace.value;
      workspaceOptions.removeAttribute("open");
    }
  });

  // BOARD
  boardOptions.addEventListener("click", (e) => {
    workspaceOptions.removeAttribute("open");

    switch (e.target.tagName) {
      case "INPUT": {
        const targetBoard = e.target.value;
        chosenBoard.textContent = targetBoard;
        break;
      }
      case "IMG": {
        const newBoard = document.createElement("input");
        newBoard.value = "New";
        newBoard.readOnly = true;
        const addBtn = boardOptions.getElementsByTagName("button")[0];
        const div = boardOptions.getElementsByClassName("options")[0];
        div.insertBefore(newBoard, addBtn);
        newBoard.focus();
        break;
        // ADD NEW BOARD TO DB
      }
    }
  });

  boardOptions.addEventListener("dblclick", (e) => {
    if (e.target.tagName) {
      const targetBoard = e.target;
      targetBoard.readOnly = false;
    }
  });

  boardOptions.addEventListener("change", (e) => {
    if (e.target.tagName) {
      const targetBoard = e.target;
      // CHANGE NAME OF the board IN DB
      targetBoard.readOnly = true;
      chosenBoard.textContent = targetBoard.value;
    }
    boardOptions.removeAttribute("open");
  });
};
