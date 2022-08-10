console.log("Week 1 - Day 4");

console.log("Tuwaiq Academy  Function JS");

//-------------- exercise 1 -----------------

function printMsg() {
  console.log("I like JS");
  console.log("I love JS");
  console.log("I use JS");
  console.log("I`m learning JS");
  console.log("I like JavaScript");
}

printMsg();

//-------------- exercise 2 -----------------

// this function print a name
function printName(name) {
  console.log(name);
}

let name1 = "Mohannad";
let name2 = "Ahmed";
let name3 = "Abdullah";

printName(name1);
printName(name2);
printName(name3);

// this function addition two number
function adding(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

let num1 = 5;
let num2 = 10;
let num3 = 22;
let num4 = 33;
let num5 = 44;
let num6 = 55;

adding(num1, num2);
adding(num3, num4);
adding(num5, num6);

//-------------- exercise 3 -----------------
console.log("-----------------------");
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sum(3, 4, 5));
console.log(sum(6, 7, 8));
console.log(sum(9, 9, 9));

function greeting(name) {
  return "hello " + name;
}

console.log(greeting("Ahmed"));
console.log(greeting("Khalid"));
console.log(greeting("Ali"));

//------------------- HW --------------------

function firstLetter(word) {
  return word[0];
}

function strLength(str) {
  return str.length;
}

console.log(firstLetter("why"));
console.log(strLength("hello world"));
