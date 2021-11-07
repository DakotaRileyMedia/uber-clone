// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHyadWqLFRootvFQf1r4nNM_IRtoEXbK8",
  authDomain: "uber-next-clone-live-3d125.firebaseapp.com",
  projectId: "uber-next-clone-live-3d125",
  storageBucket: "uber-next-clone-live-3d125.appspot.com",
  messagingSenderId: "257641361666",
  appId: "1:257641361666:web:4e3eaf6323f9debc9dd21b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }