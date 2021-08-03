// By using literal
let message = "Hello, By using String literal this is Primitive datatype";
console.log(typeof message);
console.log(message);

// By using String Construtor
let msg = new String("Hello, By using String Construtor NonPrimitive or Object datatype");
console.log(msg);
console.log(typeof msg);

// First Way Using Double quote
let cricketerName = "Mahindra Singh Dhoni";
// Second Way Using Single quote
let heroName = 'Jonny Deff';
// Third Way Using back tick
let moiveName = `Avengers
                 END GAME
                 My Favirote Moive
                 and all charactors inside in moive are fabulous. 
                 `; // multiple line String 

console.log(cricketerName);
console.log(heroName);
console.log(moiveName);

// String interpolution
var num1 = 202;
var num2 = 258;
var sum = 0;

sum = num1 + num2;

// concentate String resolve  this problem we use String interpolution
console.log("sum of " + num1 + " or " + num2 + " is " + sum);

console.log(`sum of ${num1} and ${num2} is ${sum + 20}`); //Correct way


console.log('-----------------------------------------Methods-----------------------------------------');

// 1. length property;
let greeting = "Hello , I love Java Programming";
console.log(greeting);
// Now check length
let l = greeting.length;
console.log(l);

// 2. toUpperCase();

let upper = greeting.toUpperCase();
console.log(upper);

// 3. toLowerCase();
let lower = greeting.toLowerCase();
console.log(lower);

// 4. Trim();
let t1 = accounceString = "                    remove sapce by using trim()                    "
let t2 = t1.trim();
console.log(t1);
console.log(t2);

// 5. concentate();
let greeting1 = "and Javascript";
// console.log(greeting + " " + greeting1);
let p = greeting.concat(" ", greeting1);
console.log(p);

// 6. charAt(index)
let ind = greeting.charAt(15);
console.log(ind);

// 7. indexOf();

let inof = greeting.indexOf('Java');
console.log(inof);

// 8. lastIndexOf();
let lastOf = greeting.lastIndexOf('a');
console.log(lastOf);

// 9. subString(start,ending);

let sub = greeting.substring(2, 6);
console.log(sub);

// 10. startWiith();
console.log(greeting.startsWith('I Love')); //false coz start with Hello

// 11. endsWith();
console.log(greeting.endsWith('Programming')); //true

// 12. spilt();

let sp = greeting.split(" ");
console.log(sp);
console.log(sp[0]);
console.log(sp[2]);
console.log(sp[3]);
console.log(sp[4]);
console.log(sp[5]);