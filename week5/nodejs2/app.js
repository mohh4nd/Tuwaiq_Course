const express = require("express");
const app = express();
app.use(express.json());

const arr = [
  { name: "moh", id: "1" },
  { name: "ahmed", id: "2" },
  { name: "ali", id: "3" },
  { name: "shahad", id: "4" },
];

app.get("/all", (req, res) => {
  console.log("GET ALL ");
  //res.json("RES GET ALL");
  res.json(arr);
});

app.post("/newelem", (req, res) => {
  console.log("POST NEWELEM ");
  arr.push(req.body);
  console.log(req.body);
  res.json("RES POST NEWELEM");
});

app.delete("/deleteLasteElem", (req, res) => {
  arr.pop();
  console.log(req.body);
  res.json("RES DELETE LASTELEM");
});

app.put("/id/:index", (req, res) => {
  arr[req.params.index].id = req.body.changeID;
  console.log(req.body);
  res.json("RES CHANGE THE ID");
});

app.listen(3000, () => {
  console.log("server is working ...");
});
