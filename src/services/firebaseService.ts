// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCozLnAwBO6pLlTRimyOAhRGr-aUOuZ7W8",
  authDomain: "afonseca-animewiki.firebaseapp.com",
  projectId: "afonseca-animewiki",
  storageBucket: "afonseca-animewiki.appspot.com",
  messagingSenderId: "694067102305",
  appId: "1:694067102305:web:07c97dc9a0861eccdf6020",
  measurementId: "G-S40WC3EDTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
