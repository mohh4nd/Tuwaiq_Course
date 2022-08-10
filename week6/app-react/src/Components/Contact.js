import React from "react";
const phoneNo = "0554433569";
const adress = "abdullah street";
const email = "muhannad@gmail.com";
export default function Contact() {
  return (
    <div className="Contact">
      <p>My phone NO: {phoneNo}</p>
      <p>My adress: {adress}</p>
      <p>My email: {email}</p>
    </div>
  );
}
