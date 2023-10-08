// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// apiKey: process.env.REACT_APP_API_KEY,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_SENDER_ID,
// appId: process.env.REACT_APP_ID,
// measurementId: process.env.REACT_APP_MEASUREMENT_ID,

const firebaseConfig = {
  apiKey: "AIzaSyA-YgIAWwsb7h8o-vF37FKJr_M8ZGJFVL8",
  authDomain: "harmis-aa877.firebaseapp.com",
  projectId: "harmis-aa877",
  storageBucket: "harmis-aa877.appspot.com",
  messagingSenderId: "212760187247",
  appId: "1:212760187247:web:dae2784fd9a0ccb586d89a",
  measurementId: "G-J6ZTY88EES",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
