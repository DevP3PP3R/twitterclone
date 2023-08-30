import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvfLWLyABY3Fe1fqJiQc7ZhWq9CoeplAM",
  authDomain: "twitterclone-3ac31.firebaseapp.com",
  projectId: "twitterclone-3ac31",
  storageBucket: "twitterclone-3ac31.appspot.com",
  messagingSenderId: "413653793958",
  appId: "1:413653793958:web:3677899c9fe2a63c2b4867",
  measurementId: "G-VKF3X4H3B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth();