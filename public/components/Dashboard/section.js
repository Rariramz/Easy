import { renderTask } from "./task.js";

export const renderSection = ({ name }) => {
    let mockTasks = [
        {date: "18 мар", summary: "First task", details: [
            {tag: "p", content: "Useful description"},
            {tag: "p", content: "Even more useful description"},
            {tag: "ul", content: ["First subtusk", "Second subtask", "Third.."]},
        ]},
        {date: "19 мар", summary: "Second task", details: []},
        {date: "20 мар", summary: "Third task", details: []},
    ];
    const tasks = mockTasks;

    return `
    <section class="notes__note note">
        <h2 class="note__title">${name}</h2>
        <div class="note__tasks">
            ${tasks.map(task => renderTask(task)).join("")}
        </div>
        <button id="noteAddBtn" class="note__addBtn">
            <img src="./images/note/add.svg">
        </button>
    </section>
    `
};