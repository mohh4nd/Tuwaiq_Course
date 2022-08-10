const express = require("express");
const app = express();
app.use(express.json());
const arr = [];

app.get("/all", (req, res) => {
  console.log("GET /all");
  res.json(arr);
});

app.post("/newElem", (res, req) => {
  console.log(req.body);
  arr.push(req.body);
  console.log("POST newElem");
});

app.listen(5000, () => {
  console.log("server working ...");
});
