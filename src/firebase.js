// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLMzQAts9cRkuCZkjNvh-sBmB55ouoyFs",
  authDomain: "crowdeo-58882.firebaseapp.com",
  projectId: "crowdeo-58882",
  storageBucket: "crowdeo-58882.appspot.com",
  messagingSenderId: "135307793888",
  appId: "1:135307793888:web:4e9a49264c0eb87f2dc785",
  measurementId: "G-288BKMNWBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app 
