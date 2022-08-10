import React from "react";
export default function Users(props) {
  return (
    <div className="users">
      <p>Name: {props.name}</p>
      <p> City: {props.address.city}</p>
    </div>
  );
}
