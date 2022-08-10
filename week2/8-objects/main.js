console.log("Week 2 - Day 4");

console.log("Tuwaiq Academy Objects JS");

console.clear();
//------------- Exercise 1 ------------------------

// object
let per_1 = {
  Fname: "Moh",
  Lname: "Abdullah",
  age: 23,
  FavFood: "burger",
  job: "student",
};

let per_2 = {
  Fname: "Ali",
  Lname: undefined,
  age: undefined,
  FavFood: "pizza",
  job: "parista",
};

//------------- Exercise 2 ------------------------

let per_3 = {
  Fname: "Ali",
  Lname: "khalid",
  age: 30,
  FavFood: "pizza",
  job: "parista",
  salary: 1000,
  increaseSalary: function () {
    this.salary = this.salary + 100;
    return this.salary;
  },
  changeFName: function (newName) {
    this.Fname = newName;
    return this.Fname;
  },
};

//------------- Exercise 3 ------------------------

let per_4 = {
  Fname: "Ali",
  Lname: "khalid",
  age: 30,
  FavFood: "pizza",
  job: "parista",
  salary: 1000,
};

for (let key in per_4) {
  console.log(key, per_4[key]);
}
console.log("----------------------------");

function addToObject(obj, newKey, keyValue) {
  obj[newKey] = keyValue;
  return obj;
}

addToObject(per_4, "hobby", "tennis");

function changeKeyObject(obj, Key, keyValue) {
  obj[Key] = keyValue;
  return obj;
}

changeKeyObject(per_4, "Fname", "Mohannad");

function printObject(obj) {
  for (let key in obj) {
    console.log(key, " = ", obj[key]);
  }
}

printObject(per_4);
console.log("----------------------------");
