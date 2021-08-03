/*
Primitive data type.
Memory Allocation inside in Stack Memory
Stack Memory is fixed
1. number
2. string
3. boolean
4. null
5. undefined
*/

/*
NoPrimitive DataType Referance DataType
Memory Allocation inside in Heap Memory
Heap Memory is not fixed
1. Array
2. Object
3. Date
4. function
5. Map
6. Set
7. etc....
*/

console.log("--------------Primitive datatype--------------");
var a = 50;
var namE = "Ddd";
let isActive = false;

console.log(typeof(a)); //Number
console.log(typeof(namE)); //String
console.log(typeof(isActive)); // boolean


console.log("--------------Referance datatype--------------");

// Referance datatype
// Array
let names = ['FirstName', 'SecondName', 'Username'];
console.log(typeof(names)); // object
let xa = [23];
let aa = [23];
console.log(xa == aa); // false coz its referance and matching address not data in heap meomory

// Object
let student = {
    firstName: 'Deendayal',
    lastName: 'Kumawat',
    address: 'Jaipur',
    phone: '123467952'
};

console.table(student);
console.log(typeof student); //Object

// Date
let d = new Date();
console.log(d);
console.log(typeof d);

// Clearing Console
setTimeout(() => {
    console.clear();
}, 10000);