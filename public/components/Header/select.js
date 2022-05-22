import { renderOption } from "./option.js";

export const renderSelect = ({ name, options }) => {
    return `
    <div class="header__select select required">
        <label class="select__label">${name}</label>
        <select class="select__options">
            ${options.map(option => renderOption(option)).join("")}
        </select>
    </div>
    `
};