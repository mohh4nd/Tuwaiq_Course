import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Users from "./components/Users";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  //useEffect (callBack , array)
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);

  const getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  return (
    <div className="App">
      {/* we are using useEffect no need to call the data
       <button onClick={getdata}>bring data</button> */}
      {tasks.map((tasks, i) => (
        <Todo key={i} title={tasks.title} completed={tasks.completed} />
      ))}

      {users.map((users, i) => (
        <Users key={i} name={users.name} address={users.address} />
      ))}

      <p></p>
    </div>
  );
}

export default App;
