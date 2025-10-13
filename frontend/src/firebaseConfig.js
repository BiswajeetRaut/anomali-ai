// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5wY9Mu1OPOrtDtJiGc6lk6HOqIpubbyQ",
  authDomain: "anomali-ai.firebaseapp.com",
  projectId: "anomali-ai",
  storageBucket: "anomali-ai.firebasestorage.app",
  messagingSenderId: "913691888669",
  appId: "1:913691888669:web:75cdedcdf7539dc0c8caf4",
  measurementId: "G-V2R40H36PD"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
