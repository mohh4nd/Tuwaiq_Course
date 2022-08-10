const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());

const User = require("./model/User");


//this GET function to find all the users in the mongoDB
app.get("/all", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return handleError(err);
    }
    //console.log("DATA", users);
    res.json(users);
  });
});

//this POST function to create a new user in the mongoDB
app.post("/insert", (req, res) => {
  User.create(
    {
      Fname: "Moh",
      FavFood: "Burger",
    },
    (err, newData) => {
      if (err) {
        return handleError(err);
      }
      res.json("create user successfully");
    }
  );
});

//this DELETE function to remove FirstUser from the mongoDB
app.delete("/deleteUser", (req, res) => {
  User.deleteOne({}, (err, users) => {
    if (err) {
      return handleError(err);
    }
    //console.log("DATA", users);
    res.json("delete user successfuly");
  });
});

//this UPDATE function to modify user from the mongoDB
app.put("/updateUser", (req, res) => {

  //           the element to change , the modify element
  User.updateOne({ FavFood: "lamb" }, { Fname: "fahad" }, (err, users) => {
    if (err) {
      return handleError(err);
    }
    //console.log("DATA", users);
    res.json("update user successfuly");
  });
});

app.listen(3000, () => {
  console.log("server is working on 3000 ...");
});
