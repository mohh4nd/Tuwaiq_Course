const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Fname: { type: String, required: true },
  FavFood: String, // String is shorthand for {type: String}
});
const User = mongoose.model("User", UserSchema);

module.exports = User;

















