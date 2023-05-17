
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA20-i1riV9ciUAkHVZqnXL8M30fa80w2g",
  authDomain: "social-network-ae9a5.firebaseapp.com",
  projectId: "social-network-ae9a5",
  storageBucket: "social-network-ae9a5.appspot.com",
  messagingSenderId: "107159919771",
  appId: "1:107159919771:web:5c9a80699849bbe7aefa3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)