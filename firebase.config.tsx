import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  measurementId: 'G-measurement-id',
  apiKey: "AIzaSyAVxR1p5C4KGvzsyosZ9Gh4AUL-U0BHEKo",
  authDomain: "fir-auth-10ebf.firebaseapp.com",
  projectId: "fir-auth-10ebf",
  storageBucket: "fir-auth-10ebf.appspot.com",
  messagingSenderId: "367153370816",
  appId: "1:367153370816:web:3edbfdd86ce9afbdfa3f25"
};

const app = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(app);
const firebaseAuth = getAuth(app);

export { firebaseDb, firebaseAuth };
