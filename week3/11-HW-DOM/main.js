console.log("Week 4 - Day 2");

console.log("Tuwaiq Academy DOM-HW JS");

const users = [
  { user: "Moh", password: "1234" },
  { user: "Jouza", password: "5678" },
];

const loginBtn = document.querySelector("#loginBtn");
const pargLogin = document.querySelector("#pargLogin");
const username = document.querySelector("#user");
const pass = document.querySelector("#pass");

loginBtn.addEventListener("click", () => {
  for (let i = 0; i < users.length; i++) {
    if (username.value === users[i].user && pass.value === users[i].password) {
      //console.log("success");
      pargLogin.style.backgroundColor = "green";
      pargLogin.innerText = "LOGIN Success";
      return;
    }
  }
  pargLogin.style.backgroundColor = "red";
  pargLogin.innerText = "LOGIN Fail";
  //console.log("fail");
  return;
});
