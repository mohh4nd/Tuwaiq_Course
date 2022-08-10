import React from "react";

export default function Card(porps) {
  return (
    <div className="Card">
      <p style={{ backgroundColor: porps.obj.color }}>
        Title: {porps.obj.title} <br />
        <img src="{porps.obj.img" />
      </p>
    </div>
  );
}
