import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYlFduZRfUte0pUnI1qRHP-yo44uLHDvw",
  authDomain: "expensiour.firebaseapp.com",
  projectId: "expensiour",
  storageBucket: "expensiour.firebasestorage.app",
  messagingSenderId: "449041964",
  appId: "1:449041964:web:b92782a96755075751a389",
  measurementId: "G-BQ70SQCG6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)