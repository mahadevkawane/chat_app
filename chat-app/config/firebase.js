import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBSEQ-qdzbMEve5bUzGRqNRxUexDEEUPck",
  authDomain: "myproject-d563e.firebaseapp.com",
  databaseURL: "https://myproject-d563e-default-rtdb.firebaseio.com",
  projectId: "myproject-d563e",
  storageBucket: "myproject-d563e.appspot.com",
  messagingSenderId: "614852992128",
  appId: "1:614852992128:web:a8285411d8bf1a90c5da65",
  measurementId: "G-85EE9JHMVF"
};
// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();