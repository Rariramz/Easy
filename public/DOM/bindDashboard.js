import { ROOT_MAIN } from "../utils/roots.js";
import { renderDashboard } from "../components/Dashboard/dashboard.js";
import { bindSectionTags } from "./bindSectionTags.js";
import {
  getColor,
  renderDate,
  renderTask,
} from "../components/Dashboard/task.js";

export const bindDashboard = () => {
  ROOT_MAIN.innerHTML = renderDashboard();

  const allTasks = document.getElementsByClassName("task");
  [...allTasks].forEach((task) => {
    bindTask(task);
  });

  function bindTask(task) {
    const taskDescription = task.getElementsByClassName("task__description")[0];
    const taskDeleteBtn = task.getElementsByClassName("task__deleteBtn")[0];
    const details = taskDescription.getElementsByClassName("task__details")[0];
    const detailsBtns =
      taskDescription.getElementsByClassName("details__buttons")[0];
    const taskDate = task.getElementsByClassName("task__date")[0];

    taskDate.addEventListener("change", (e) => {
      e.preventDefault();
      taskDate.style.backgroundColor = getColor(taskDate.value);
    });

    bindCmdButtons([...detailsBtns.children], details);

    details.addEventListener("dblclick", (e) => {
      details.contentEditable = true;
      details.classList.add("task__details_active");
      detailsBtns.classList.remove("hidden");
    });
    details.addEventListener("blur", (e) => {
      if (e.relatedTarget === null) {
        details.contentEditable = false;
        details.classList.remove("task__details_active");
        detailsBtns.classList.add("hidden");
      }
    });

    taskDeleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // REMOVE FROM BD
      task.parentElement.removeChild(task);
    });
  }

  function bindCmdButtons(buttons, details) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        let command = btn.dataset["cmd"];
        switch (command) {
          case "paragraph": {
            const p = document.createElement("p");
            p.classList.add("task__paragraph");
            p.innerHTML = "New";
            details.append(p);
            break;
          }
          case "checkbox": {
            const ul =
              details.lastChild.tagName === "UL"
                ? details.lastChild
                : document.createElement("ul");
            ul.classList.add("task__subtasks");
            const li = document.createElement("li");
            li.classList.add("task__subtask");
            li.classList.add("subtask");
            li.innerHTML = `
            <input class="subtask__checkbox" type="checkbox">
            <label>New</label>`;
            ul.append(li);
            details.append(ul);
            break;
          }
        }
      });
    });
  }

  const allNotes = document.getElementsByClassName("note");

  [...allNotes].forEach((note) => {
    const noteAddBtn = note.getElementsByClassName("note__addBtn")[0];

    noteAddBtn.addEventListener("click", (e) => {
      // const sectionId = e.target.closest(".note").id;
      e.preventDefault();
      const divTasks = note.getElementsByClassName("note__tasks")[0];
      const newTask = new DOMParser().parseFromString(
        renderTask({
          summary: "New",
          details: [{ tag: "p", content: "New" }],
        }),
        "text/html"
      ).body.firstChild;
      divTasks.append(newTask);

      bindTask(newTask);
    });
  });

  // MEDIA QUERY
  const mediaQueryList = window.matchMedia("(max-width: 575px)");

  function screenTest(e) {
    if (e.matches) {
      bindSectionTags();
    } else {
      const divSections = document.getElementsByClassName("note");
      [...divSections].forEach((section) => section.classList.remove("hidden"));
    }
  }

  mediaQueryList.addListener(screenTest);
};
