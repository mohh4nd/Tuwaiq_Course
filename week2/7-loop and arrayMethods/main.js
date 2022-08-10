console.log("Week 2 - Day 3");

console.log("Tuwaiq Academy loop & arrayMethods JS");
console.clear();
//-------------- Exercise 1 ----------------------

let Exer_1 = ["Raghad", "Khalid", "Suhaib", "Asma"];

function printArray_1(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray_1(Exer_1);

function greeting(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Welcome " + array[i]);
  }
}
console.log("-----------------------------------");
greeting(Exer_1);

//-------------- Exercise 2 ----------------------
console.log("-----------------------------------");

let Exer_2 = ["Raghad", "Khalid", "Suhaib", "Asma"];

function strLength(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + " = " + array[i].length);
  }
}

strLength(Exer_2);

function addGreeting(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = "Welcome " + array[i];
  }
}

console.log("-----------------------------------");
addGreeting(Exer_2);
console.log(Exer_2);

let Exer_3 = [17, 15, 8, 12, 7, 25, 24];

function divideBy3(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      console.log(array[i]);
    }
  }
}

console.log("-----------------------------------");
divideBy3(Exer_3);

//-------------- Exercise 3 ------------------------

let students_1 = ["Raghad", "Khalid", "Suhaib", "Asma"];
let students_2 = ["Ahmed", "Ali", "Moh"];

function concatArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3;
}

function reverseArray(arr) {
  return arr.reverse();
}

function includeArray(arr, obj) {
  return arr.includes(obj);
}

function joinArray(arr) {
  return arr.join(",");
}

function splitArray(arr) {
  return arr.split(" ");
}
