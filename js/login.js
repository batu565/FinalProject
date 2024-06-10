// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');

//     loginForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
        
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         // Perform basic client-side validation
//         if (!email || !password) {
//             alert('Please enter both email and password.');
//             return;
//         }

//         try {
//             // Send login request to backend server (not implemented in this example)
//             const response = await fetch('/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (response.ok) {
//                 // Redirect user to home page after successful login
//                 window.location.href = '/index.html';
//             } else {
//                 const errorData = await response.json();
//                 alert(`Login failed: ${errorData.message}`);
//             }
//         } catch (error) {
//             console.error('Error during login:', error);
//             alert('An error occurred during login. Please try again later.');
//         }
//     });
// });

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})