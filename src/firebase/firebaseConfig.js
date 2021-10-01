import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC16TLXmUFyz9uh3Lm5lQGGSTQWA5wdINM",
  authDomain: "react-app-cursos-ed58d.firebaseapp.com",
  projectId: "react-app-cursos-ed58d",
  storageBucket: "react-app-cursos-ed58d.appspot.com",
  messagingSenderId: "333853471035",
  appId: "1:333853471035:web:eeb00dac5b5fbd9154871e"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}