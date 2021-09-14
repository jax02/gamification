var firebaseConfig = {
  apiKey: "AIzaSyCy4KAcDzQl25dpVXl6F64H5iv2fWsOJNI",
authDomain: "login-3d8d7.firebaseapp.com",
projectId: "login-3d8d7",
storageBucket: "login-3d8d7.appspot.com",
messagingSenderId: "857894651276",
appId: "1:857894651276:web:3a48b9edcb6deae43ac2a9",
measurementId: "G-BRFBBS3VGR"
};
firebase.initializeApp(firebaseConfig);

// function state()
// {
//   firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     document.getElementById("login_div").style.display="none";
//     document.getElementById("user_div").style.display="block";
//     const user = firebase.auth().currentUser;
//      if (user !== null) {
//         const displayName = user.displayName;
//         const email = user.email;
//         alert(email);
//        document.getElementById("user_para").innerHTML="Welcome user :"  + email;
//     } 
//   } else {
//     // User is signed out
//      window.alert("logout");
//   }
// });
// }
firebase.auth().onAuthStateChanged((user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  document.getElementById("login_div").style.display="none";
  document.getElementById("user_div").style.display="block";
  const user = firebase.auth().currentUser;
   if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      alert(email);
     document.getElementById("user_para").innerHTML="Welcome user :"  + email;
     window.location.href="0823.html";
  } 
} else {
  // User is signed out
  document.getElementById("login_div").style.display="block";
  document.getElementById("user_div").style.display="none";
   window.alert("logout");
}
});
function login(){
var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
.then((userCredential) => {
  // Signed in
// state();
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("error :"+ errorMessage);
});
}
//state();
function logout(){
firebase.auth().signOut();
// document.getElementById("login_div").style.display="block";
//   document.getElementById("user_div").style.display="none";
}