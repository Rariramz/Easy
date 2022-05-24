import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  remove,
  get,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

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

// AUTHORIZATION
export const signin = signInWithEmailAndPassword.bind(null, auth);
export const signup = createUserWithEmailAndPassword.bind(null, auth);
export const signout = async () => signOut.bind(null, auth);

// WORKSPACES
export const createWorkspace = async (userId, name) => {
  const refWorkspaces = "users" + "/" + userId + "/workspaces";
  const workspaceRef = ref(db, refWorkspaces + "/" + name);
  set(workspaceRef, {
    name,
  });
};

export const deleteWorkspace = async (userId, name) => {
  const refWorkspaces = "users" + "/" + userId + "/workspaces";
  const workspaceRef = ref(db, refWorkspaces + "/" + name);
  remove(workspaceRef);
};

export const getWorkspaces = async (userId) => {
  const refWorkspaces = "users" + "/" + userId + "/workspaces";
  const dbRef = ref(db);
  return get(child(dbRef, refWorkspaces)).then((snapshot) => snapshot.val());
};

export const getWorkspace = async (userId, name) => {
  const refWorkspaces = "users" + "/" + userId + "/workspaces";
  const dbRef = ref(db);
  return get(child(dbRef, refWorkspaces + "/" + name)).then((snapshot) =>
    snapshot.val()
  );
};

export const editWorkspace = async (userId, name, newName) => {
  const refWorkspaces = "users" + "/" + userId + "/workspaces";
  const dbRef = ref(db);
  const updates = {};
  updates[refWorkspaces + "/" + name + "/name"] = newName;
  return update(dbRef, updates);
};

// BOARDS
export const createBoard = async (userId, name, workspaceName) => {
  const refBoards =
    "users" + "/" + userId + "/workspaces" + "/" + workspaceName + "/boards";
  const boardRef = ref(db, refBoards + "/" + name);
  set(boardRef, {
    name,
  });
};

export const deleteBoard = async (userId, name, workspaceName) => {
  const refBoards =
    "users" + "/" + userId + "/workspaces" + "/" + workspaceName + "/boards";
  const boardRef = ref(db, refBoards + "/" + name);
  remove(boardRef);
};

export const getBoards = async (userId, workspaceName) => {
  const refBoards =
    "users" + "/" + userId + "/workspaces" + "/" + workspaceName + "/boards";
  const dbRef = ref(db);
  return get(child(dbRef, refBoards)).then((snapshot) => snapshot.val());
};

export const getBoard = async (userId, name, workspaceName) => {
  const refBoards =
    "users" + "/" + userId + "/workspaces" + "/" + workspaceName + "/boards";
  const dbRef = ref(db);
  return get(child(dbRef, refBoards + "/" + name)).then((snapshot) =>
    snapshot.val()
  );
};

export const editBoard = async (userId, name, newName) => {
  const refBoards =
    "users" + "/" + userId + "/workspaces" + "/" + workspaceName + "/boards";
  const dbRef = ref(db);
  const updates = {};
  updates[refBoards + "/" + name + "/name"] = newName;
  return update(dbRef, updates);
};

// SECTIONS

// TASKS

// SUBTASKS
