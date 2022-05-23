export const renderList = (content) => {
  const renderListItem = (liName) => {
    return `
    <li class="task__subtask subtask">
      <input class="subtask__checkbox" type="checkbox">
      <label>${liName}</label>
    </li>
  `;
  };

  return `
  <ul class="task__subtasks">
    ${content.map((liName) => renderListItem(liName)).join("")}
  </ul>
  `;
};
