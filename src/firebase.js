// firebase.js
// Initializes firebase database with our unique API parameters
// Import firebase module from firebase/app
import firebase from 'firebase/app';
// Import firebase database info. from firebase module
import 'firebase/firebase-database';

// Unique web app Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiV7CY-IPdrW55_cqGyxrI0APGNkwi93A",
    authDomain: "dreamingly-64425.firebaseapp.com",
    projectId: "dreamingly-64425",
    storageBucket: "dreamingly-64425.appspot.com",
    messagingSenderId: "578865089337",
    appId: "1:578865089337:web:104e24c5adc6d9a07d76e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the firebase app to allow access by other components after configuring firebase with firebaseconfig parameters
export default firebase;