import "./App.css";
import React, { useState } from "react";
import LikesCount from "./components/LikesCount";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLogin, setIslogin] = useState(true);
  const [user, setUser] = useState({
    email: "moh@gmail.com",
    password: "123456",
  });
  return (
    <div className="App">
      {isLogin ? (
        <>
          <Login userInfo={user} />
          <button
            onClick={() => {
              setIslogin(false);
            }}
          >
            Go to Register
          </button>
        </>
      ) : (
        <>
          <Register userInfo={setUser} />
          <button
            onClick={() => {
              setIslogin(true);
            }}
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
