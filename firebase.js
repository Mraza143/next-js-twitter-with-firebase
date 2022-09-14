// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-f6e75.firebaseapp.com",
  projectId: "twitter-clone-f6e75",
  storageBucket: "twitter-clone-f6e75.appspot.com",
  messagingSenderId: "961811542358",
  appId: "1:961811542358:web:2d7dcb39f5a36b773b66f7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };