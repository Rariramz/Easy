import { renderSelect } from "./select.js";

export const renderHeaderExtra = () => {
    const selects = [
        {name: "Workspace", options: ["Work", "Study"]},
        {name: "Board", options: ["Project One", "Project Two"]},
    ];

    return `
    <div class="container">
        <nav class="header__selects">
            ${selects.map(select => renderSelect(select)).join("")}
        </nav>
    </div>
    `
};