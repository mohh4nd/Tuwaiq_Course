import React, { useState } from "react";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="register">
      <h1>Register</h1>
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
            props(email);
            props(password);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
