import { getSections } from "../utils/api.js";

export const bindSectionTags = () => {
  const tagsDiv = document.getElementsByClassName("notes__tags")[0];
  const tags = tagsDiv.children;

  const showActive = (tag) => {
    [...tags].forEach((tag) => tag.classList.remove("notes__tag_active"));
    tag.classList.add("notes__tag_active");
    const divSections = document.getElementsByClassName("note");
    [...divSections].forEach((section) => section.classList.add("hidden"));

    const targetSectionObj = getSections().filter(
      (section) => section.tagId === tag.id
    )[0];
    const targetSectionDiv = document.getElementById(targetSectionObj.id);
    targetSectionDiv.closest(".note").classList.remove("hidden");
  };

  [...tags].forEach((tag) => {
    tag.addEventListener("click", (e) => showActive(e.target));
  });

  showActive(tags[0]);
};
