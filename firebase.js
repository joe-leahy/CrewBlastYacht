import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKOfUVbzYUI6WxF3Ofem2daUC-CdBJlNY",
  authDomain: "crewblast-yacht.firebaseapp.com",
  projectId: "crewblast-yacht",
  storageBucket: "crewblast-yacht.appspot.com",
  messagingSenderId: "348540446154",
  appId: "1:348540446154:web:784c263660bfd10f611b33",
  measurementId: "G-22BW6D303N"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
