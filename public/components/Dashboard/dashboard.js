import { renderSection } from "./section.js";

export const renderDashboard = () => {
    const sections = [
        {name: "To Do"},
        {name: "In Process"},
        {name: "Completed"},
        {name: "Archived"},
    ];

    return `
    <div class="notes">
        <div class="notes__tags">
            <div class="notes__tag">
            </div>
            <div class="notes__tag notes__tag_active">
            </div>
            <div class="notes__tag">
            </div>
            <div class="notes__tag">
            </div>
        </div>
        ${sections.map(section => renderSection(section)).join("")}
    </div>
    `
};