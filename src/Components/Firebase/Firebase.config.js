import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCm_nEhycvCTgQtlhaiy_WnO93tLHV9M2w",
    authDomain: "practic-project-12-22-2022.firebaseapp.com",
    projectId: "practic-project-12-22-2022",
    storageBucket: "practic-project-12-22-2022.appspot.com",
    messagingSenderId: "612611264195",
    appId: "1:612611264195:web:5fb4f0a37ffb09be381c76"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
