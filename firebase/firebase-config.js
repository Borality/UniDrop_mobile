// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTPuApztFtZB_GD00rWdtKuC_DEXvjKw8",
  authDomain: "unidrop-43573.firebaseapp.com",
  projectId: "unidrop-43573",
  storageBucket: "unidrop-43573.appspot.com",
  messagingSenderId: "994677445774",
  appId: "1:994677445774:web:95baafaa97907d4d83e5df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);