// Example 1

let a = 20;
let b = 20;
console.log(a == b); //true


let x = 20;
let y = '20';
console.log(x === y); //false

// // Example 2

let num = 250;
// console.log(isNan(num));

// Example 3
let s1 = { name: 'Deendayal' };
let s2 = { name: 'Deendayal' };

console.log(s1 == s2); //false

// Example 4

// Global variable Scope
function globalFunction() {
    console.log(a);
}

// Function or local variable Scope
function localFunction() {
    let p = 20;
    console.log(p);
}

// Block Scope
function blockFunction() {
    let num = 2;
    for (let i = 0; i <= 10; i++) {
        console.log(num * i);
    }
}

globalFunction();
localFunction();
blockFunction();