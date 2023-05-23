// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBT3VgycvpngBl8OrnE62mkPo8sje9kCXQ",
    authDomain: "clgcomm-472e2.firebaseapp.com",
    projectId: "clgcomm-472e2",
    storageBucket: "clgcomm-472e2.appspot.com",
    messagingSenderId: "38414378555",
    appId: "1:38414378555:web:6becc1eb553fead4c41e1e",
    measurementId: "G-79W83DJ2HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = { getAuth };
const provider = new GoogleAuthProvider();

export { auth, provider }