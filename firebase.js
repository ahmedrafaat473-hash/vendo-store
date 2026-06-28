import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNont3E4cuZpWdl4gZLxx7NCGB4i5NlKE",
  authDomain: "vendo-store.firebaseapp.com",
  projectId: "vendo-store",
  storageBucket: "vendo-store.appspot.com",
  messagingSenderId: "793255122662",
  appId: "1:793255122662:web:9e5c61de6bfb7d73db4d27"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
