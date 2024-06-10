import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
let userLoggedIn=false;
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

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                console.log("a")
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;
                console.log(userLoggedIn)
                userLoggedIn=true;
                navlogindisplay();
                console.log(userLoggedIn)
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
        userLoggedIn=false;
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

  document.addEventListener('DOMContentLoaded', function() {
    // Simulate a user login state
    console.log("b");
    if (userLoggedIn) {
        // Fetch user details from a hypothetical API or storage
        

        
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('login-button').style.display = 'none';
    } else {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('login-button').style.display = 'block';
    }
});

function navlogindisplay(){
    if (userLoggedIn) {
        // Fetch user details from a hypothetical API or storage
        

        
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('login-button').style.display = 'none';
    } else {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('login-button').style.display = 'block';
    }

}