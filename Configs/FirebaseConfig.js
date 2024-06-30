// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg9aMfMc1hKT1GNItbQs1X7vtU71PhEzQ",
  authDomain: "prince-raj-5ea17.firebaseapp.com",
  projectId: "prince-raj-5ea17",
  storageBucket: "prince-raj-5ea17.appspot.com",
  messagingSenderId: "854740968936",
  appId: "1:854740968936:web:2253ffaad214aad699b05d",
  measurementId: "G-WCET5E8G3B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app);
// const analytics = getAnalytics(app);