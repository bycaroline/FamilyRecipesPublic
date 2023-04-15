// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBZv3fbtRmCSnZx-WoRsUKCWju5rYvncJw",

    authDomain: "family-recepies-db.firebaseapp.com",

    projectId: "family-recepies-db",

    storageBucket: "family-recepies-db.appspot.com",

    messagingSenderId: "250491876026",

    appId: "1:250491876026:web:961ccf207c4bd1a4038883"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);