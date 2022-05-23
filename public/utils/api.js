import {
  COLOR_PALE_BLUE,
  COLOR_PALE_PURPLE,
  COLOR_PALE_GREEN,
  COLOR_PALE_YELLOW,
} from "./colors.js";
import {
  SECTION_TODO_ID,
  SECTION_INPROCESS_ID,
  SECTION_COMPLETED_ID,
  SECTION_ARCHIVED_ID,
  TAG_TODO_ID,
  TAG_INPROCESS_ID,
  TAG_COMPLETED_ID,
  TAG_ARCHIVED_ID,
} from "./dynamicIds.js";
import {
  CHOSEN_WORKSPACE_ID,
  CHOSEN_BOARD_ID,
  OPTIONS_WORKSPACE_ID,
  OPTIONS_BOARD_ID,
} from "./dynamicIds.js";

export const getSelects = () => {
  const SELECTS = [
    {
      name: "Workspace",
      idChosen: CHOSEN_WORKSPACE_ID,
      idOptions: OPTIONS_WORKSPACE_ID,
    },
    {
      name: "Board",
      idChosen: CHOSEN_BOARD_ID,
      idOptions: OPTIONS_BOARD_ID,
    },
  ];

  return SELECTS;
};

export const getOptions = (id) => {
  return ["Option1", "Option2", "Option3"];
};

export const getSections = () => {
  const SECTIONS = [
    {
      name: "To Do",
      id: SECTION_TODO_ID,
      color: COLOR_PALE_BLUE,
      tagId: TAG_TODO_ID,
    },
    {
      name: "In Process",
      id: SECTION_INPROCESS_ID,
      color: COLOR_PALE_PURPLE,
      tagId: TAG_INPROCESS_ID,
    },
    {
      name: "Completed",
      id: SECTION_COMPLETED_ID,
      color: COLOR_PALE_GREEN,
      tagId: TAG_COMPLETED_ID,
    },
    {
      name: "Archived",
      id: SECTION_ARCHIVED_ID,
      color: COLOR_PALE_YELLOW,
      tagId: TAG_ARCHIVED_ID,
    },
  ];

  return SECTIONS;
};

export const getSectionTasks = (id) => {
  return [
    {
      date: "18 мар",
      summary: "First task",
      details: [
        { tag: "p", content: "Useful description" },
        { tag: "p", content: "Even more useful description" },
        { tag: "ul", content: ["First subtusk", "Second subtask", "Third.."] },
        {
          tag: "p",
          content: "abc d efgh ijk l mnop q rstu vwx y z 1 2 3 4 5 6 7 8)",
        },
      ],
    },
    {
      date: "19 мар",
      summary: "Second task",
      details: [
        { tag: "ul", content: ["First subtusk", "Second subtask", "Third.."] },
        {
          tag: "p",
          content: "abc d efgh ijk l mnop q rstu vwx y z 1 2 3 4 5 6 7 8)",
        },
      ],
    },
    {
      date: "20 мар",
      summary: "Third task",
      details: [
        { tag: "p", content: "Useful description" },
        { tag: "p", content: "Even more useful description" },
      ],
    },
  ];
};

// AUTHORIZATION
export const signIn = (email, password) => {
  alert(`LOGGED IN: ${email}, ${password}`);
  // LOGIN
};

export const signUp = (email, password) => {
  alert(`REGISTERED: ${email}, ${password}`);
  // REGISTER
};
