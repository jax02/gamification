let jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
    theme: "mdn-like",
    lineNumbers: true,
    mode: "javascript"
});
jsEditor.setSize("100%","400");
jsEditor.setValue(`var canvas = document.getElementById('fractal');
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
     var ctx =  canvas.getContext('2d');
     drawCircle( 160, 150, 135);
     ctx.strokeRect( 0, 0, 320, 300);
           function drawCircle( x, y, r){
              ctx.beginPath();
              ctx.arc( x, y, r, 0, 2*Math.PI);
              ctx.stroke();
   }` 
);
// 執行鈕監聽
const saveBtn=document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function () {

    let htmlCode = `<canvas id='fractal'></canvas>`;
    let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    console.log(htmlCode);
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlCode + jsCode);
    previewWindow.close();
    

});