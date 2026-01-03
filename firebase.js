// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB7Dxf-0-WmC6bvTaIh2eRaLQyKjuBm4w",
  authDomain: "gdiary-7bf05.firebaseapp.com",
  databaseURL: "https://gdiary-7bf05-default-rtdb.firebaseio.com",
  projectId: "gdiary-7bf05",
  storageBucket: "gdiary-7bf05.firebasestorage.app",
  messagingSenderId: "862364422911",
  appId: "1:862364422911:web:7a0bf0fd890acf6565f2ca",
  measurementId: "G-5Y515F7DPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);