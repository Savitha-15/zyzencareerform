import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAS6nEVs6ptsZoT4R_UpYZPtJ5eeqLeHw",
  authDomain: "zyzencareerpage.firebaseapp.com",
  projectId: "zyzencareerpage",
  storageBucket: "zyzencareerpage.firebasestorage.app",
  messagingSenderId: "515553099051",
  appId: "1:515553099051:web:3edc9cfbb5d40e2bf2196e",
  measurementId: "G-FSRZRS2FM8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
