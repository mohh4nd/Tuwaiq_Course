import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Card from "./Components/Card";

function App() {
  const cardInfo = [
    { title: "horror ", img: "Image", color: "red" },
    { title: "comedy ", img: "Image", color: "green" },
    { title: "drama ", img: "Image", color: "yellow" },
  ];

  const cardMap = cardInfo.map((elem, i) => {
    return <Card obj={elem} key={i} />;
  });
  return (
    <div className="App">
      <h1 className="header">Tuwaiq Academy </h1>
      <About />
      <Contact />
      {cardMap}
    </div>
  );
}

export default App;
