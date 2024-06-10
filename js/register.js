// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPdNazkqPaKaGuRGFhvqBcb4ou4ymnkjQ",
  authDomain: "news-portal-26ccb.firebaseapp.com",
  projectId: "news-portal-26ccb",
  storageBucket: "news-portal-26ccb.appspot.com",
  messagingSenderId: "375928713263",
  appId: "1:375928713263:web:7495d344f0a7f5fbd756da",
  measurementId: "G-4LGGVJ1LHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const submit=document.getElementById('submit').value;
submit.addEventListerner("click",function(event){
    event.preventDefault()
    alert(5)
})