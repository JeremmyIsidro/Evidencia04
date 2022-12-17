
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAhqlOH-dab_KOatJNzUfrIFfU-EeIcKQc",
    authDomain: "semana-13-14.firebaseapp.com",
    projectId: "semana-13-14",
    storageBucket: "semana-13-14.appspot.com",
    messagingSenderId: "195368988386",
    appId: "1:195368988386:web:358de2f2c073aa6237b8bb"
  };

  // Initialize Firebase y autenticacion de cuenta
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  document.getElementById("ingresar5").addEventListener("click", function(){
  const email = document.getElementById("email5"). value;  
  const pass = document.getElementById("pass5"). value;

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("La cuenta se creó existosamente")
    window.open("https://semana-13-14.web.app")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Ese correo ya es utlizado intente otro")
  });
  // ---------------------------
})
