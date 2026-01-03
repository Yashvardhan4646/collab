// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
