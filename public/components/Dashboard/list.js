export const renderList = (content) => {
  return `
    ${content.map((liName) => renderListItem(liName)).join("")}
  `;
};

export const renderListItem = (liName) => {
  return `
  <li class="task__subtask subtask">
    <input class="subtask__checkbox" type="checkbox">
    <label>${liName}</label>
  </li>
`;
};
