console.log("Week 4 - Day 1");

console.log("Tuwaiq Academy DOM JS");

const second_P = document.querySelector("#two");
const fifth_P = document.querySelector("#five");

second_P.innerText = "I am learning DOM";
fifth_P.innerText = "Try Change text";

console.log(second_P.innerText);

const parTest = document.querySelectorAll("p");

for (let i = 0; i < parTest.length; i++) {
  console.log(getComputedStyle(parTest[i]).color);
  console.log(getComputedStyle(parTest[i]).fontSize);
  console.log(getComputedStyle(parTest[i]).backgroundColor);
}

parTest[0].style.color = "pink";
parTest[2].style.backgroundColor = "grey";
parTest[1].style.fontSize = "30px";

console.clear();

const img = document.querySelector("#logo");
const anchor_1 = document.querySelector("#google");

img.setAttribute("src", "https://tuwaiq.edu.sa/assets/images/tuwaiq-logo.svg");
img.setAttribute("alt", "tuwaiq1000");
anchor_1.setAttribute("id", "tuwaiq1000");
console.log(anchor_1.getAttribute("id"));

//const anchor_2 = document.querySelector("#tuwaiq1000");
anchor_1.setAttribute(
  "href",
  "https://bootcamp.sa/#state=4671aab9-b5a8-446a-a925-39860914fed1&session_state=4aa36dd9-5fda-42d3-8546-385851a67286&code=2e6e16e6-215f-41ee-b8cb-bed53639fe9e.4aa36dd9-5fda-42d3-8546-385851a67286.b39ab801-5a9e-41c9-b344-13b8f13d7591"
);

const parg_1 = document.querySelector("#parg1");
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");

btn_1.addEventListener("click", () => {
  parg_1.style.color = "red";
});
btn_2.addEventListener("click", () => {
  parg_1.style.fontSize = "20px";
});
btn_3.addEventListener("click", () => {
  parg_1.style.fontFamily = "Courier New";
});
