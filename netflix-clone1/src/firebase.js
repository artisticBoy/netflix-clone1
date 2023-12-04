// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUyw-8JujqmwXlh5-al6MQKq0WWI8tONo",
  authDomain: "netflix-clone1-819a2.firebaseapp.com",
  projectId: "netflix-clone1-819a2",
  storageBucket: "netflix-clone1-819a2.appspot.com",
  messagingSenderId: "179496344955",
  appId: "1:179496344955:web:58442bf0444aaebfd9f1de",
  measurementId: "G-2KVBHBGK5K",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

const auth = getAuth();

export { auth };
// export default db;
