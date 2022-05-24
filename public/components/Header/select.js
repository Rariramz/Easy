export const renderSelect = ({ name, idChosen, idOptions, options }) => {
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
            ${Object.values(options)
              .map((option) => renderOption(option.name))
              .join("")}
            <button class="options__addBtn">
                <img class="options__addBtn" src="./images/note/add.svg">
            </button>
        </div>
    </details>
  </div>
  `;
};
