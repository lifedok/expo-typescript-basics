import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {Auth, getAuth} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
export const firebaseConfig = {
  measurementId: 'G-measurement-id',
  apiKey: "AIzaSyAVxR1p5C4KGvzsyosZ9Gh4AUL-U0BHEKo",
  authDomain: "fir-auth-10ebf.firebaseapp.com",
  projectId: "fir-auth-10ebf",
  storageBucket: "fir-auth-10ebf.appspot.com",
  messagingSenderId: "367153370816",
  appId: "1:367153370816:web:3edbfdd86ce9afbdfa3f25"
};

// const firebaseApp = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase
// let app;
// if(firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const auth = getAuth(firebaseApp);
//
// export {auth}
