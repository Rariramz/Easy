import { renderSection } from "./section.js";
import { getSections } from "../../utils/api.js";

export const renderDashboard = () => {
  const sections = getSections();

  const renderTag = (tagId, color) => {
    return `
    <div class="notes__tag" id=${tagId} style="background-color: ${color}"></div>
    `;
  };

  return `
    <div class="notes">
        <div class="notes__tags">
           ${sections
             .map((section) => renderTag(section.tagId, section.color))
             .join("")}
        </div>
        ${sections.map((section) => renderSection(section)).join("")}
    </div>
    `;
};
