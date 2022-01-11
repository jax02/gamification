// console.log('test');
// let htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
//     theme: "darcula",
//     lineNumbers: true,
//     mode: "xml"


// });
// htmlEditor.setSize("100%", "100%");
// htmlEditor.setValue(
//     "<canvas" + " " + "\n" + "id=" + "\"" + "fractal" + "\"" + " "
//     + "\n" + "width=" + "\"" + "400" + "\"" + " "
//     + "\n" + "height=" + "\"" + "320" + "\""
//     + ">" + "\n" + "</canvas>"
// );

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