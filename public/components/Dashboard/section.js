import { renderTask } from "./task.js";
import { getSectionTasks } from "../../utils/api.js";

export const renderSection = ({ name, id, color }) => {
  const tasks = getSectionTasks(id);

  return `
    <section class="notes__note note" style="background-color: ${color}">
        <h2 class="note__title">${name}</h2>
        <div class="note__tasks" id=${id}>
            ${tasks.map((task) => renderTask(task)).join("")}
        </div>
        <button id="noteAddBtn" class="note__addBtn">
            <img src="./images/note/add.svg">
        </button>
    </section>
    `;
};
