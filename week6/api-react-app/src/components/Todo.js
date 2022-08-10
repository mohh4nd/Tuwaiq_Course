import React from "react";

function Todo({ title, completed }) {
  return (
    <div className="todo">
      <p>Title: {title}</p>
      <p> Status: {completed === true ? "done" : "pending"}</p>
    </div>
  );
}

export default Todo;
