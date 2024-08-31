// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY_KEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN_KEY,
  // projectId: import.meta.env.VITE_PROJECTID_KEY,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET_KEY,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_KEY,
  // appId: import.meta.env.VITE_APPID_KEY,
  // measurementId: import.meta.env.VITE_MEASUREMENTID_KEY,

  apiKey: "AIzaSyB-36Wvv54q0fJEEMIS1gC0W4ZcexDjanQ",
  authDomain: "bistro-boss-6e8da.firebaseapp.com",
  projectId: "bistro-boss-6e8da",
  storageBucket: "bistro-boss-6e8da.appspot.com",
  messagingSenderId: "475281539339",
  appId: "1:475281539339:web:ca0e68e3d6a47e8aade20e",
  measurementId: "G-PHC5Y8J7SH"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
