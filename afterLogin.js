
const content = document.querySelectorAll(".content");
content.forEach(item => item.style.display = 'none');


const logOut=document.querySelector('.logOut');
const signUp=document.querySelector('.signUp');
logOut.style.display='none';

const myModal = document.querySelector('#login')
const myInput = document.querySelector('#LoginEmail')
console.log(myModal,myInput);
myModal.addEventListener('shown.bs.modal', function (e) {
  myInput.focus();
  
})

// 初始狀態
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log(user);
//         // User is signed in, see docs for a list of available properties

//         // const user = firebase.auth().currentUser;
//         // if (user !== null) {
//         //     const displayName = user.displayName;
//         //     const email = user.email;
//         //     alert(email);
//         //     document.getElementById("user_para").innerHTML = "Welcome user :" + email;
//         // }
//     } else {
//         // User is signed out
//         // content.forEach(item => item.style.display = 'none');
//         // document.querySelector('.backgroung').innerHTML = `<h5 class="text-center pt-5">Loggin To View course</h5>`;
//     }
// });
// 註冊
function sighUp(){
    const email = document.querySelector("#signUpEmail").value;
    const password = document.querySelector("#signUpPassword").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
        const user = userCredential.user;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    // ..
    });
}
// 登入驗證
function login() {
    const userEmail = document.querySelector("#LoginEmail").value;
    const userPass = document.querySelector("#LoginPassword").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            console.log(userCredential.user.email);
            content.forEach(item => item.style.display = 'block');
            logOut.style.display='block';
            signUp.style.display='none';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.querySelector('.backgroung').innerHTML = `<h5 class="text-center pt-5">Loggin To View course</h5>`;
        });
}