import { renderDetail } from "./detail.js";

export const renderTask = ({ date, summary, details }) => {
  return `
    <div class="note__task task">
        <div class="task__tags">
            <time class="task__date">${date}</time>
            <div class="task__checkbox-div">
                <label for="a">1/3</label>
                <input class="task__checkbox" type="checkbox" id="a">
            </div>
        </div>
        <details id="taskDescription">
            <summary class="task__summary">${summary}</summary>
            <div class="task__details">
                ${
                  details &&
                  details.map((detail) => renderDetail(detail)).join("")
                }
            </div>
            <div class="task__buttons">
                <button id="taskEditBtn">
                    <img src="./images/note/edit.svg">
                </button>
                <button id="taskDeleteBtn">
                    <img src="./images/note/delete.svg">
                </button>
            </div>
        </details>
    </div>
    `;
};
