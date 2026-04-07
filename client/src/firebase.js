// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-website-builder-a3a52.firebaseapp.com",
  projectId: "ai-website-builder-a3a52",
  storageBucket: "ai-website-builder-a3a52.firebasestorage.app",
  messagingSenderId: "126460701919",
  appId: "1:126460701919:web:82aed66c491ef39ff88d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}