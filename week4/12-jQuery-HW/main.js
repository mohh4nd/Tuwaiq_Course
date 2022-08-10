console.log("Week 4 - Day 3");

console.log("Tuwaiq Academy jQuery-HW JS");

$(document).ready(function () {
  const users = [
    { user: "Moh", password: "1234" },
    { user: "Jouza", password: "5678" },
  ];

  const status = $("#pargLogin");
  const username = $("#user");
  const password = $("#pass");
  const loginBtn = $("#loginBtn");

  function verify() {
    for (let i = 0; i < users.length; i++) {
      if (
        username.val() === users[i].user &&
        password.val() === users[i].password
      ) {
        status.text("Login Success");
        status.css("background-color", "green");
        return;
      }
    }
    status.text("Login Fail");
    status.css("background-color", "red");
    return;
  }
  loginBtn.click(verify);
});
