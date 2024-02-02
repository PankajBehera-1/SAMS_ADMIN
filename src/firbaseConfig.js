// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdihgieT8l1w_b9KVGCsYCdnoWunyIPAQ",
  authDomain: "sams-cfb00.firebaseapp.com",
  projectId: "sams-cfb00",
  storageBucket: "sams-cfb00.appspot.com",
  messagingSenderId: "866726195779",
  appId: "1:866726195779:web:6347f208104868d77e5af6",
  measurementId: "G-W3G0KXZCFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getAnalytics(app);

export {storage};