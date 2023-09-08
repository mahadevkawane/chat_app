import firebase from "firebase/compat";
//import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import 'firebase/compat/auth'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
const firebaseConfig = {
  apiKey: "AIzaSyA1Eu8xyx7OAQ8y4ng-Fu6phrCWJWHiYlc",
  authDomain: "trial-b04e6.firebaseapp.com",
  databaseURL: "https://trial-b04e6-default-rtdb.firebaseio.com",
  projectId: "trial-b04e6",
  storageBucket: "trial-b04e6.appspot.com",
  messagingSenderId: "870551973559",
  appId: "1:870551973559:web:151d8cb3f567a01109e732",
  measurementId: "G-HM63X09XYF"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default { firebase, db };
export const auth = getAuth();
export const database = getFirestore();