// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9QjNSJuuomYN-_hEnLikwuSxcPqiaey4",
  authDomain: "hostel-managment-4756a.firebaseapp.com",
  projectId: "hostel-managment-4756a",
  storageBucket: "hostel-managment-4756a.appspot.com",
  messagingSenderId: "473241174818",
  appId: "1:473241174818:web:6638f020795de320b29b7b",
  measurementId: "G-90PY06VFMQ"
};


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebase_app);
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);

export default firebase_app;
