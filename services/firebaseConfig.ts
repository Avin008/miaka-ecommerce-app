// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuwlJpbSkqQl2yXyh7-neascbkDx-BZ6w",
  authDomain: "miaka-ecommerce-app.firebaseapp.com",
  projectId: "miaka-ecommerce-app",
  storageBucket: "miaka-ecommerce-app.appspot.com",
  messagingSenderId: "809948949200",
  appId: "1:809948949200:web:fefb961731d8dbe23d8cd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
