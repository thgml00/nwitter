import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD475cqEFc2Y8t3DJW2-T6UPPats8iuKLo",
  authDomain: "nwitter-48bcd.firebaseapp.com",
  projectId: "nwitter-48bcd",
  storageBucket: "nwitter-48bcd.appspot.com",
  messagingSenderId: "241562361155",
  appId: "1:241562361155:web:c807053b56f55a544023f6",
  measurementId: "G-5CXMSLYRYM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();