// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkfdyAlvODhgbdbj9NP-K3YyfNALTyjXQ",
  authDomain: "signform-beeb7.firebaseapp.com",
  projectId: "signform-beeb7",
  storageBucket: "signform-beeb7.appspot.com",
  messagingSenderId: "896379531383",
  appId: "1:896379531383:web:113f3a968802d763601672",
  measurementId: "G-0ZKC2N6CXB"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;