console.log("Week 2 - Day 2");

console.log("Tuwaiq Academy loop & Array  JS");
console.clear();
//------------- Exercise 1 -----------------

let arr_1 = ["Moh", "jouza", "Swift", "Tuwaiq-1000"];

console.log(arr_1[1]);
console.log(arr_1[3]);
console.log(arr_1[2]);

arr_1[2] = "JavaScript";

console.log(arr_1.length);
console.log(arr_1);

arr_1.push(5);

console.log(arr_1);
arr_1.pop();

console.log(arr_1);
console.log("--------------------------");
//------------- Exercise 2 -----------------
console.clear();
let ex_2 = ["swift", "33", "Ali"];

console.log(ex_2);
ex_2.pop();
console.log(ex_2);
ex_2.push("Mohannad");
console.log(ex_2);
ex_2.shift();
console.log(ex_2);
ex_2.unshift("Java");
console.log(ex_2);

console.log("--------------------------");
//------------- HW -----------------
let arr_2 = [5, 7, 22, 32, 14, 66, 70, 1, 0, 100];
function printArr(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArr(arr_2);

console.log("--------------------------");

function printArr15(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 15) {
      console.log(array[i]);
    }
  }
  return console.log("done");
}

printArr15(arr_2);
