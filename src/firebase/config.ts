import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiXWmVryD5NFc97_w5P4cME-VxT98JpaI",
    authDomain: "badasstodo-6b75a.firebaseapp.com",
    projectId: "badasstodo-6b75a",
    storageBucket: "badasstodo-6b75a.appspot.com",
    messagingSenderId: "869769282233",
    appId: "1:869769282233:web:38ef899d5956a2fdb45168"
}

// Initialize Firebase
initializeApp(firebaseConfig)

//get auth

const auth = getAuth()

export { auth }