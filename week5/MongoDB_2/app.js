const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());

const Users = require("./model/Users");

//this POST function to create a new user in the mongoDB
app.post("/createUser", (req, res) => {
  Users.create(req.body, (err, newData) => {
    if (err) {
      return handleError(err);
    }
    res.json("create user successfully");
  });
});

//this GET function to find all the users in the mongoDB
app.get("/findAll", (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      return handleError(err);
    }
    //console.log("DATA", users);
    res.json(users);
  });
});

//this GET function to find all the users less than 20 years old in the mongoDB
app.get("/findAll/ageLessThan20", (req, res) => {
  Users.find({ Age: { $lte: 20 } }, (err, users) => {
    if (err) {
      return handleError(err);
    }

    res.json(users);
  });
});

//this DELETE function to remove FirstUser from the mongoDB
app.delete("/deleteUser", (req, res) => {
  Users.deleteOne({}, (err, users) => {
    if (err) {
      return res.status(500).json("there is a problem in DB");
    }

    res.status(200).json("Deleted user successfully");
  });
});

//this DELETE function to remove all the users have FavFood is rice from the mongoDB
app.delete("/deleteUser/FavFoodRice", (req, res) => {
  Users.deleteMany({ FavFood: "rice" }, (err, users) => {
    if (err) {
      return res.status(500).json("there is a problem in DB");
    }
    res.status(200).json("Deleted Users successfully");
  });
});

//this UPDATE function to modify user from the mongoDB
app.put("/updateUser/:UserName", (req, res) => {
  //           the element to change , the modify element
  Users.updateOne(
    { FName: req.params.UserName },
    { FName: req.body.FName, FavFood: req.body.FavFood },
    (err, updateObj) => {
      if (err) {
        return res.status(500).json("there is a problem in DB");
      }
      if (updateObj.matchedCount === 0) {
        return res.status(404).json("User not found");
      }
      res.status(200).json("updated user successfully");
    }
  );
});

app.listen(3000, () => {
  console.log("3000 server conected ...");
});
