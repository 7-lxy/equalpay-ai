// /src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMXWyFvmRB1sAkf98PUGNJMIg4Wake2Vo",
  authDomain: "equalpay-bc955.firebaseapp.com",
  projectId: "equalpay-bc955",
  storageBucket: "equalpay-bc955.firebasestorage.app",
  messagingSenderId: "417428419591",
  appId: "1:417428419591:web:3140b4f2b9f0ad5dc166a2",
  measurementId: "G-RJT3M0NG6T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
