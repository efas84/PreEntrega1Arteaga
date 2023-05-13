// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbSulJ6ODmYxHPJqHqurwX4nIakww9UcI",
  authDomain: "meatcomerce.firebaseapp.com",
  projectId: "meatcomerce",
  storageBucket: "meatcomerce.appspot.com",
  messagingSenderId: "18064936639",
  appId: "1:18064936639:web:a6ac1bb214c2c7bec2800a",
  measurementId: "G-FVNVJCB50L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);