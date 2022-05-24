import { renderDetail } from "./detail.js";
import {
  COLOR_RED,
  COLOR_ORANGE,
  COLOR_YELLOW,
  COLOR_GREEN,
  COLOR_LIGHT_GREY,
} from "../../utils/colors.js";

export const getColor = (dateString) => {
  if (!dateString) return COLOR_LIGHT_GREY;

  let color = "";

  const deadline = new Date(dateString);
  const today = new Date();

  const daysDifference =
    (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

  if (daysDifference >= 14) {
    color = COLOR_GREEN;
  } else if (daysDifference >= 7) {
    color = COLOR_YELLOW;
  } else if (daysDifference >= 3) {
    color = COLOR_ORANGE;
  } else {
    color = COLOR_RED;
  }

  return color;
};

export const renderDate = (dateString = null) => {
  const deadline = new Date(dateString);
  const today = new Date();

  const getInFormat = (date) => {
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return yyyy + "-" + mm + "-" + dd;
  };

  let color = getColor(dateString);

  return dateString
    ? `
  <input type="date" class="task__date" value=${getInFormat(
    deadline
  )} min=${getInFormat(today)} style="background-color: ${color}">
    `
    : `
    <input type="date" class="task__date" min=${getInFormat(
      today
    )} style="background-color: ${color}">
    `;
};

export const renderTask = ({ summary, details, date = null }) => {
  return `
    <div class="note__task task">
        <div class="task__tags">
            ${renderDate(date)}
            <div class="task__checkbox-div">
                <label for="a">1/3</label>
                <input class="task__checkbox" type="checkbox" id="a">
            </div>
        </div>
        <details class="task__description">
            <summary class="task__summary">${summary}</summary>
            <div class="task__details details">
                ${
                  details &&
                  details.map((detail) => renderDetail(detail)).join("")
                }
            </div>
            <div class="task__buttons">
                <div class="details__buttons hidden">
                    <button data-cmd="checkbox">
                        <img src="./images/note/text-editing/subtask.png">
                    </button>
                    <button data-cmd="paragraph">
                        <img src="./images/note/text-editing/paragraph.png">
                    </button>
                </div>
                <div class="main__buttons">                    
                    <button class="task__deleteBtn">
                        <img src="./images/note/delete.svg">
                    </button>
                </div>
            </div>
        </details>
    </div>
    `;
};
