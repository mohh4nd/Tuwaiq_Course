const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  FName: { type: String, required: true },
  FavFood: String, // String is shorthand for {type: String}
  Age: Number,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
