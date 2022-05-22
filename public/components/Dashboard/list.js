export const renderList = (content) => {
    const getListItem = (liName) => {
        return `
        <li class="task__subtask subtask">
            <input class="subtask__checkbox" type="checkbox">
            <label>${liName}</label>
        </li>
        `
    };

    return `
    <ul class="task__subtasks">
        ${content.map(liName => getListItem(liName)).join("")}
    </ul>
        `;
};