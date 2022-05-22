import { renderList } from "./list.js";

export const renderDetail = ({ tag, content }) => {
    if (tag === "p") {
        return `
        <p class="task__paragraph">${content}</p>
        `;
    }
    if (tag === "ul") {
        return `
        <ul class="task__subtasks">${renderList(content)}</ul>
        `;
    }
};