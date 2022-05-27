import {
    createUser,
    setOnValueListeners,
    createWorkspace,
    createBoard,
    createSection,
    createTask,
    getWorkspace,
    getBoard,
    getSection,
    getTask,
    getWorkspaceBoards,
    getBoardSections,
    getSectionTasks,
    deleteWorkspace,
    deleteTask,
    deleteSection,
    deleteBoard,
    deleteUser,
    editWorkspace,
    editBoard,
    editSection,
    editTask,
} from "./firebase.js";
import { setLocalStorageItem } from "./localStorageMethods.js";

const userId = "user1_ID";

createUser(userId, "user1@mail.ru");
setOnValueListeners(userId)
const workspaceId =  await createWorkspace(userId, "workspace1");
const boardId =  await createBoard(userId, workspaceId, "board1(1)");
const sectionId =  await createSection(userId, boardId, "section1(1)", "#ffffff");
setTimeout(async () => {
    const workspaceId2 = await createWorkspace(userId, "workspace2");
    const boardId2 = await createBoard(userId, workspaceId2, "board1(2)");
    const sectionId2 = await createSection(userId, boardId2, "section1(2)", "#ffffff");
}, 2000);
const taskId = await createTask(userId, sectionId, "task1", [{tag: "p", content: "Some info"}]);
const taskId2 = await createTask(userId, sectionId, "task2", [
    {tag: "p", content: "Some info"},
    {tag: "p", content: "Some info 2"},
    {tag: "ul", content: [{tag: "li", content: "point 1"}, {tag: "li", content: "point 2"}]}
]);
const taskId3 = await createTask(userId, sectionId, "task3", [
    {tag: "p", content: "Some info"},
    {tag: "p", content: "Some info 2"},
    {tag: "ul", content: [{tag: "li", content: "point 1"}, {tag: "li", content: "point 2"}]}
]);
setTimeout(async () => await editTask(userId, sectionId, taskId, "name", "New name").then(console.log), 5000);

const currentWorkspace = await getWorkspace(userId, workspaceId);
setLocalStorageItem("currentWorkspace", currentWorkspace);
const currentWorkspaceBoards = await getWorkspaceBoards(userId, workspaceId);
console.log(currentWorkspaceBoards)
setLocalStorageItem("currentWorkspaceBoards", currentWorkspaceBoards);
const currentBoardSections = await getBoardSections(userId, boardId);
setLocalStorageItem("currentBoardSections", currentBoardSections);
const currentBoard = await getBoard(userId, workspaceId, boardId);
setLocalStorageItem("currentBoard", currentBoard);
const currentSection = await getSection(userId, boardId, sectionId);
setLocalStorageItem("currentSection", currentSection);
const currentTasks = await getSectionTasks(userId, sectionId);
setLocalStorageItem("currentTasks", currentTasks);
const currentTask = await getTask(userId, sectionId, taskId);
setLocalStorageItem("currentTask", currentTask);

