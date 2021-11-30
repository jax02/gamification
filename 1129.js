const firebaseConfig = {
    apiKey: "AIzaSyCy4KAcDzQl25dpVXl6F64H5iv2fWsOJNI",
    authDomain: "login-3d8d7.firebaseapp.com",
    databaseURL: "https://login-3d8d7-default-rtdb.firebaseio.com",
    projectId: "login-3d8d7",
    storageBucket: "login-3d8d7.appspot.com",
    messagingSenderId: "857894651276",
    appId: "1:857894651276:web:3a48b9edcb6deae43ac2a9",
    measurementId: "G-BRFBBS3VGR"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();



function save() {
    // let a = login();
    // console.log(a);
    let htmlCode = htmlEditor.getValue();
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    console.log(htmlCode);
    console.log(jsCode);

    database.ref('/').set({
        htmlCode: htmlCode,
        jsCode: jsCode
    });
};

function recover() {

    let recoverHtmlCode = firebase.database().ref('htmlCode');
    let recoverJsCode = firebase.database().ref('jsCode');
    recoverHtmlCode.once('value', function (snapshot) {
        let htmlData = snapshot.val();
        console.log(htmlData);
        recoverJsCode.once('value', function (snapshot) {
            let jsData = snapshot.val();
            console.log(jsData);

            let previewWindow = document.querySelector("#preview-window").contentWindow.document;
            previewWindow.open();
            previewWindow.write(htmlData + jsData);
            previewWindow.close();
        });
    });


};