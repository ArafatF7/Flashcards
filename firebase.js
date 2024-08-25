// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd23geKOMaSbXdc6S52C5Jp17FUc5wyNY",
  authDomain: "flashcardsaas-c0586.firebaseapp.com",
  projectId: "flashcardsaas-c0586",
  storageBucket: "flashcardsaas-c0586.appspot.com",
  messagingSenderId: "564711448906",
  appId: "1:564711448906:web:116303105d3afc98ae61b3",
  measurementId: "G-0XBEQDYZ7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}