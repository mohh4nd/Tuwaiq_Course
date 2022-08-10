const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/data";
const db = mongoose.connection;

mongoose.connect(
  //"mongodb://localhost:27017/data"
  mongoURI,
  { useNewUrlParser: true },
  () => {
    console.log("connection established ...");
  }
);


db.on("error", (err) => {
  console.log(err + "MongoDB not running ");
});

db.on("connected", () => {
  console.log("MongoDB connected ");
});
