import { getOptions } from "../../utils/api.js";

export const renderSelect = ({ name, idChosen, idOptions }) => {
  const options = getOptions(idChosen);

  const renderOption = (option) => {
    return `
    <input value=${option} readonly>
    `;
  };

  return `
  <div class="header__pseudo-select pseudo-select">
    <label class="pseudo-select__name">${name}</label>
    <details id=${idOptions} class="pseudo-select__content">
        <summary class="pseudo-select__chosen"><span id=${idChosen}>Work</span><img src="./images/arrow.svg"></summary>
        <div class="pseudo-select__options options">
            ${options.map((option) => renderOption(option)).join("")}
            <button>
                <img src="./images/note/add.svg">
            </button>
        </div>
    </details>
  </div>
  `;
};
