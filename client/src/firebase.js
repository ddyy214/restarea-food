import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfTAEsXpqBNDR8J5F0JzgXk0eNgzfXjW8",
    authDomain: "gudi-20230512.firebaseapp.com",
    projectId: "gudi-20230512",
    storageBucket: "gudi-20230512.appspot.com",
    messagingSenderId: "636200892633",
    appId: "1:636200892633:web:ef501c2e479d018a77e6c8",
    measurementId: "G-PLVHHC03Y4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);