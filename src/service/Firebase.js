
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHSrT77LBTddNPJ1QPuhECWbWd9eRWjPM",
  authDomain: "proyectocoder-667fa.firebaseapp.com",
  projectId: "proyectocoder-667fa",
  storageBucket: "proyectocoder-667fa.appspot.com",
  messagingSenderId: "1060954336968",
  appId: "1:1060954336968:web:9d9df50e4bedce5c0d7ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)