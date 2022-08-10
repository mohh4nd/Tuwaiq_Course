console.log("Week 3 - Day 1");

console.log("Tuwaiq Academy advance programming in JS");

console.clear();

//----------------- Exercise 1 ---------------------

let color_1 = ["red", "green", "pink", "grey", "white", "black"];

let num_1 = [1, 2, 3, 13, 15, 17, 22, 20, 33];

color_1.forEach((value, index) => {
  console.log(value, index);
});

console.log("-----------------------");

num_1.forEach((value, index) => {
  console.log(value * 2);
});

console.log("-----------------------");

let strMoreThan4 = color_1.filter((value, index) => {
  return value.length > 4;
});
console.log(strMoreThan4);
console.log("-----------------------");

let biggerThan3 = num_1.filter((value, index) => {
  return value > 3;
});

console.log(biggerThan3);

//----------------- Exercise 2 ---------------------

function mulitpleBy2(arr) {
  let output = arr.map((value) => {
    return value * 2;
  });
  return output;
}

mulitpleBy2(num_1);

function additionBy4(arr) {
  let output = arr.map((value) => {
    return value + 4;
  });
  return output;
}

additionBy4(num_1);

function findModBy5(arr) {
  let output = arr.find((value) => {
    return value % 5 === 0;
  });
  return output;
}

findModBy5(num_1);

function findStrMoreThan4(arr) {
  let output = arr.find((value) => {
    return value.length == 4;
  });
  return output;
}

findStrMoreThan4(color_1);



