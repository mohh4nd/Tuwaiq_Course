console.log("Week 2 - Day 1");

console.log("Tuwaiq Academy Condition JS");

//----------------- Exercise 1 ---------------------

function compare(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "the numbers are equal";
  }
}

function greeting(str) {
  if (str == "JavaScript") {
    return "Welcome";
  } else {
    return "GoodBye";
  }
}

console.log(compare(5, 7));
console.log(compare(7, 5));
console.log(compare(5, 5));
console.log("--------------------------------");
console.log(greeting("Hi"));
console.log(greeting("JavaScript"));
console.log(greeting("javascript"));

//----------------- HW ---------------------
console.log("--------------------------------");

function eqution(a, b, sign) {
  if (sign == "-") {
    return a - b;
  } else if (sign == "+") {
    return a + b;
  } else if (sign == "/") {
    return a / b;
  } else if (sign == "*") {
    return a * b;
  } else {
    return "no sign";
  }
}
console.log(eqution(4, 8, "-"));
console.log(eqution(7, 3, "+"));
console.log(eqution(10, 2, "/"));
console.log(eqution(5, 5, "*"));
console.log(eqution(5, 5, ""));
