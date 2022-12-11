// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app"; */
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDna-ZZQW3CGxiGQlWiQV_967-XwSqmU1A",
  authDomain: "docente-react-firebase.firebaseapp.com",
  projectId: "docente-react-firebase",
  storageBucket: "docente-react-firebase.appspot.com",
  messagingSenderId: "125211851931",
  appId: "1:125211851931:web:a04bbf08c9723cf27dda3e"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase }