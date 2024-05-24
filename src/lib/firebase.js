import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6b35f.firebaseapp.com",
  projectId: "reactchat-6b35f",
  storageBucket: "reactchat-6b35f.appspot.com",
  messagingSenderId: "690688459783",
  appId: "1:690688459783:web:9082fbd0dbf0e591c4d6a2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
