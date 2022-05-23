import { ROOT_MAIN } from "../utils/roots.js";
import { renderDashboard } from "../components/Dashboard/dashboard.js";

export const makeDashboard = () => {
  ROOT_MAIN.innerHTML = renderDashboard();

  const taskDescription = document.getElementById("taskDescription");
  const summary = taskDescription.getElementsByClassName("task__summary")[0];
  const details = taskDescription.getElementsByClassName("task__details")[0];
  const taskEditBtn = document.getElementById("taskEditBtn");
  const taskDeleteBtn = document.getElementById("taskDeleteBtn");
  const noteAddBtn = document.getElementById("noteAddBtn");

  taskEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    summary.classList.toggle("task__summary_active");
    details.classList.toggle("task__details_active");
    // EDIT TASK
  });
  taskDeleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // DELETE TASK
  });
  noteAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // CREATE NEW
  });
};
