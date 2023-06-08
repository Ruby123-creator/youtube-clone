// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeMK60fce_lrzJ9brGrtfKbMq1NS1EBAs",
  authDomain: "clone-9ed31.firebaseapp.com",
  projectId: "clone-9ed31",
  storageBucket: "clone-9ed31.appspot.com",
  messagingSenderId: "698955343080",
  appId: "1:698955343080:web:235d4721ac933d1e2e955d"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
 export const auth = getAuth(FirebaseApp)
 export const db = getFirestore(FirebaseApp)