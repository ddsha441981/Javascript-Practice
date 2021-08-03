/*
let has has block scope.
var global or function scope and var has no block scope, redeclaration
const final
*/


// Swap Number
let a = 10;
let b = 20;
let temp = 0;

// Main Logic 
document.write("<h1> Before Swap Number is " + " a = > " + a + " b => " + b + "</h1>");
temp = a;
a = b;
b = temp;
document.write("<h1> After Swap Number is " + " a = > " + a + " b => " + b + "</h1>");

document.write("--------------------------------------------------------------<h4>Number Swap Without third Variable</h4>--------------------------------------------------------------");

// Without third variable
document.write("<h1> Before Swap Number is " + " a = > " + a + " b => " + b + "</h1>");
a = a + b;
b = a - b;
a = a - b;
document.write("<h1> Before Swap Number is " + " a = > " + a + " b => " + b + "</h1>");