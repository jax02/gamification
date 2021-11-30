let htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
    theme: "darcula",
    lineNumbers: true,
    mode: "xml"


});
htmlEditor.setSize("100%", "100%");
htmlEditor.setValue(
    "<canvas" + " " + "\n" + "id=" + "\"" + "fractal" + "\"" + " "
    + "\n" + "width=" + "\"" + "400" + "\"" + " "
    + "\n" + "height=" + "\"" + "210" + "\""
    + ">" + "\n" + "</canvas>"
);

// const cssEditor=CodeMirror(document.querySelector(".editor .code .css-code"),{
//     lineNumbers:true,
//     mode:"css"
// });
let jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
    theme: "darcula",
    lineNumbers: true,
    mode: "javascript"
});
jsEditor.setSize("100%", "100%");
jsEditor.setValue("var canvas = " + "document.getElementById(" + "\"" + "fractal" + "\"" + ");"
    + "\n" + "var ctx = " + "canvas.getContext(" + "\'" + "2d" + "\'" + ");"
    + "\n" + "drawCircle(" + "160," + "150," + "135);"
    + "\n" + "ctx.strokeRect(" + "0," + "0," + "320," + "300);"
    + "\n" + "\n" + "     function drawCircle(" + "x," + "y," + "r){"
    + "\n" + "         ctx.beginPath();"
    + "\n" + "         ctx.arc(" + "x," + "y," + "r," + "0," + "2*Math.PI);"
    + "\n" + "         ctx.stroke();"
    + "\n" + "        }"
);


//js

// ctx.lineWidth = 3
// //x軸
// ctx.beginPath();
// ctx.moveTo(10,10)
//  ctx.lineTo(300,10)
//  ctx.stroke()
// //Y軸
// ctx.beginPath();
//  ctx.moveTo(10,10)
// ctx.lineTo(10,200)
// ctx.stroke()

// drawX();
// drawY();

// function drawX() {
//    ctx.beginPath();
//     ctx.moveTo(290,10);
//     ctx.lineTo(270,0);
//     ctx.lineTo(270,20);
//     ctx.fill();
//   }
// function drawY() {
//    ctx.beginPath();
//     ctx.moveTo(10,200);
//     ctx.lineTo(0,180);
//     ctx.lineTo(20,180);
//     ctx.fill();
//   }

//
// document.querySelector("#run-btn").addEventListener('click',function(){
//     let htmlCode= htmlEditor.getValue();
//     console.log(htmlCode);
//     alert("click");
//     // let cssCode= "<style>" +cssEditor.getValue() + "</style>";
//     // let jsCode= "<scri" + "pt>" +jsEditor.getValue() + "</scri" + "pt>";
//     // let previewWindow = document.querySelector("preview-window").contentwindow.document;
//     // previewWindow.open();
//     // previewWindow.write(htmlCode + cssCode + jsCode);
//     // previewWindow.close();
// });
document.querySelector("#btn-run").addEventListener("click", function () {

    let htmlCode = htmlEditor.getValue();
    // let cssCode= "<style>" +cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + jsCode);
    previewWindow.close();

});

document.querySelector("#btn-reset").addEventListener("click", function () {
    htmlEditor.setValue(
        "<canvas" + " " + "\n" + "id=" + "\"" + "fractal" + "\"" + " "
        + "\n" + "width=" + "\"" + "400" + "\"" + " "
        + "\n" + "height=" + "\"" + "320" + "\""
        + ">" + "\n" + "</canvas>"
    );
    jsEditor.setValue("var canvas = " + "document.getElementById(" + "\"" + "fractal" + "\"" + ");"
        + "\n" + "var ctx = " + "canvas.getContext(" + "\'" + "2d" + "\'" + ");"
        + "\n" + "drawCircle(" + "160," + "150," + "135);"
        + "\n" + "ctx.strokeRect(" + "0," + "0," + "320," + "300);"
        + "\n" + "\n" + "     function drawCircle(" + "x," + "y," + "r){"
        + "\n" + "         ctx.beginPath();"
        + "\n" + "         ctx.arc(" + "x," + "y," + "r," + "0," + "2*Math.PI);"
        + "\n" + "         ctx.stroke();"
        + "\n" + "        }"
    );


    let htmlCode = htmlEditor.getValue();
    // let cssCode= "<style>" +cssEditor.getValue() + "</style>";
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + jsCode);
    previewWindow.close();
});