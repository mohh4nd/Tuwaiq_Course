import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setvalidation] = useState("");
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="">
        <label className="loginInput">
          Email:
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="loginInput">
          Password:
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (
              email === props.userInfo.email &&
              password === props.userInfo.password
            ) {
              setvalidation(true);
            } else {
              setvalidation(false);
            }
          }}
        >
          Login
        </button>
      </form>
      {validation === true && (
        <p style={{ backgroundColor: "green" }}>correct information </p>
      )}
      {validation === false && (
        <p style={{ backgroundColor: "red" }}>wrong email or password </p>
      )}
    </div>
  );
}

export default Login;
