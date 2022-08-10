import React from "react";

const myName = "muhannad";
const myAge = 23;
const FavFood = "Mandi";

export default function About() {
  return (
    <div className="About">
      <p>My name is: {myName}</p>
      <p>My age: {myAge}</p>
      <p>My Favorite Food: {FavFood}</p>
    </div>
  );
}
