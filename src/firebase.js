// /src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzWUoSRL5KctUYsDur-KGfWXiYTrprPtY",
  authDomain: "equalpay-ai.firebaseapp.com",
  projectId: "equalpay-ai",
  storageBucket: "equalpay-ai.firebasestorage.app",
  messagingSenderId: "11869460046",
  appId: "1:11869460046:web:ce643ca9cfe96ce58b151f",
  measurementId: "G-WNGH2VEX09"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

