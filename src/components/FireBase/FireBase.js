// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdDBt2uyD8sD-GBM3XD4mbbgqVtevL64",
  authDomain: "nester-ec93a.firebaseapp.com",
  projectId: "nester-ec93a",
  storageBucket: "nester-ec93a.appspot.com",
  messagingSenderId: "103313543671",
  appId: "1:103313543671:web:da8d5976742b95073bdef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth}
