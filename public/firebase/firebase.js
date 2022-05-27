import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  remove,
  get,
  child,
  update,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
import { setLocalStorageItem } from "./localStorageMethods.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8d9ikvN454_r3ucdhY8Apij6EQQ1GdYU",
  authDomain: "easy-c3dab.firebaseapp.com",
  databaseURL: "https://easy-c3dab-default-rtdb.firebaseio.com",
  projectId: "easy-c3dab",
  storageBucket: "easy-c3dab.appspot.com",
  messagingSenderId: "921740334334",
  appId: "1:921740334334:web:bda48b038115c33c8101af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const userId = auth.currentUser.uid;

// AUTHORIZATION
export const signin = signInWithEmailAndPassword.bind(null, auth);
export const signup = createUserWithEmailAndPassword.bind(null, auth);
export const signout = async () => signOut.bind(null, auth);

export function createUser(userId, email) {
  return set(ref(db, `users/${userId}`), {
    email: email,
  })
  .then(() => true)
  .catch(() => false);
}

export function setOnValueListeners(userId) {
  onValue(ref(db, `users/${userId}/workspaces`), (snapshot) => {
    const workspaces = snapshot.val();
    setLocalStorageItem("workspaces", workspaces);
  });

  onValue(ref(db, `users/${userId}/boards`), (snapshot) => {
    const boards = snapshot.val();
    setLocalStorageItem("boards", boards);
    setLocalStorageItem("currentBoard", boards);
  });

  onValue(ref(db, `users/${userId}/sections`), (snapshot) => {
    const sections = snapshot.val();
    setLocalStorageItem("sections", sections);
  });

  onValue(ref(db, `users/${userId}/tasks`), (snapshot) => {
    const tasks = snapshot.val();
    setLocalStorageItem("tasks", tasks);
  });
}

export async function deleteUser(userId) {
  const userRef = ref(db,  `users/${userId}`);
  return remove(userRef)
  .then(() => true)
  .catch(() => false);
}

// WORKSPACES
export async function createWorkspace(userId, workspaceName) {  
  const newWorkspaceKey = push(child(ref(db), `users/${userId}/workspaces`)).key;

  const newWorkspace = {
    id: newWorkspaceKey,
    name: workspaceName
  };

  const updates = {};
  updates[`users/${userId}/workspaces/` + newWorkspaceKey] = newWorkspace;

  return update(ref(db), updates)
  .then(() => newWorkspaceKey)
  .catch(() => false);
}

export async function getWorkspace(userId, workspaceId) {
  return get(child(ref(db), `users/${userId}/workspaces/${workspaceId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function editWorkspace(userId, workspaceId, fieldName, newValue ) {
  if (fieldName !== "id") {
    const updates = {};
    updates[`users/${userId}/workspaces/${workspaceId}/${fieldName}`] = newValue;

    return update(ref(db), updates)
    .then(() => true)
    .catch(() => false);
  }
}


export async function deleteWorkspace(userId, workspaceId) {
  const workspaceRef = ref(db,  `users/${userId}/workspaces/${workspaceId}`);
  const workspaceBoardsList = await getWorkspaceBoards(userId, workspaceId);
  Object.keys(workspaceBoardsList).forEach(boardId => deleteBoard(userId, workspaceId, boardId)); 
  return remove(workspaceRef)
  .then(() => true)
  .catch(() => false);
}

// BOARDS
export async function createBoard(userId, workspaceId, boardName) {
  const newBoardKey = push(child(ref(db), `users/${userId}/boards/${workspaceId}`)).key;

  const newBoard = {
    id: newBoardKey,
    name: boardName
  };

  const updates = {};
  updates[`users/${userId}/boards/${workspaceId}/` + newBoardKey] = newBoard;

  return update(ref(db), updates)
  .then(() => newBoardKey)
  .catch(() => false);
}

export async function getWorkspaceBoards(userId, workspaceId) {
  return get(child(ref(db), `users/${userId}/boards/${workspaceId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function getBoard(userId, workspaceId, boardId) {
  return get(child(ref(db), `users/${userId}/boards/${workspaceId}/${boardId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function editBoard(userId, workspaceId, boardId, fieldName, newValue ) {
  if (fieldName !== "id") {
    const updates = {};
    updates[`users/${userId}/boards/${workspaceId}/${boardId}/${fieldName}`] = newValue;

    return update(ref(db), updates)
    .then(() => true)
    .catch(() => false);
  }
}

export async function deleteBoard(userId, workspaceId, boardId) {
  const boardRef = ref(db,  `users/${userId}/boards/${workspaceId}/${boardId}`);
  const boardSectionsList = await getBoardSections(userId, boardId);
  Object.keys(boardSectionsList).forEach(sectionId => deleteSection(userId, boardId, sectionId)); 
  return remove(boardRef)
  .then(() => true)
  .catch(() => false);
}

// SECTIONS
export async function createSection(userId, boardId, sectionName, color) {
  const newSectionKey = push(child(ref(db), `users/${userId}/sections/${boardId}`)).key;

  const newSection = {
    id: newSectionKey,
    name: sectionName,
    color: color
  };

  const updates = {};
  updates[`users/${userId}/sections/${boardId}/` + newSectionKey] = newSection;

  return update(ref(db), updates)
  .then(() => newSectionKey)
  .catch(() => false);
}

export async function getBoardSections(userId, boardId) {
  return get(child(ref(db), `users/${userId}/sections/${boardId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function getSection(userId, boardId, sectionId) {
  return get(child(ref(db), `users/${userId}/sections/${boardId}/${sectionId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function editSection(userId, boardId, sectionId, fieldName, newValue ) {
  if (fieldName !== "id") {
    const updates = {};
    updates[`users/${userId}/sections/${boardId}/${sectionId}/${fieldName}`] = newValue;

    return update(ref(db), updates)
    .then(() => true)
    .catch(() => false);
  }
}

export async function deleteSection(userId, boardId, sectionId) {
  const sectionRef = ref(db,  `users/${userId}/sections/${boardId}/${sectionId}`);
  const sectionTasksList = await getSectionTasks(userId, sectionId);
  Object.keys(sectionTasksList).forEach(taskId => deleteTask(userId, sectionId, taskId)); 
  return remove(sectionRef)
  .then(() => true)
  .catch(() => false);
}

// TASKS
export async function createTask(userId, sectionId, taskName, details=[]) {
  const newTaskKey = push(child(ref(db), `users/${userId}/tasks/${sectionId}`)).key;  // Get a key for a new Post.

  const newTask = {
    id: newTaskKey,
    name: taskName,
    details: details
  };

  const updates = {};
  updates[`users/${userId}/tasks/${sectionId}/` + newTaskKey] = newTask;

  return update(ref(db), updates)
  .then(() => newTaskKey)
  .catch(() => false);
}

export async function getSectionTasks(userId, sectionId) {
  return get(child(ref(db), `users/${userId}/tasks/${sectionId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function getTask(userId, sectionId, taskId) {
  return get(child(ref(db), `users/${userId}/tasks/${sectionId}/${taskId}`))
  .then((snapshot) => snapshot.val())
  .catch(() => false);
}

export async function editTask(userId, sectionId, taskId, fieldName, newValue ) {
  if (fieldName !== "id") {
    const updates = {};
    updates[`users/${userId}/tasks/${sectionId}/${taskId}/${fieldName}`] = newValue;

    return update(ref(db), updates)
    .then(() => true)
    .catch(() => false);
  }
}

export async function deleteTask(userId, sectionId, taskId) {
  const taskRef = ref(db,  `users/${userId}/tasks/${sectionId}/${taskId}`);
  return remove(taskRef)
  .then(() => true)
  .catch(() => false);
}
