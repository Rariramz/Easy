import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
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
const database = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// AUTHORIZATION
export const signin = signInWithEmailAndPassword.bind(null, auth);
export const signup = createUserWithEmailAndPassword.bind(null, auth);
export const signout = async () => signOut.bind(null, auth);
