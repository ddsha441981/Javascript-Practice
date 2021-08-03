/*
use global variable in java script and we can accessing by using window object
like window.msg = "";
*/

let msg = "Calling a function";
document.write("<h1>" + msg + "</h1>");

function clickMe() {
    document.write("Hi There method is calling");
    readingData();
}

function readingData() {
    window.msg = "Another Method is Calling"
    alert(window.msg);
}