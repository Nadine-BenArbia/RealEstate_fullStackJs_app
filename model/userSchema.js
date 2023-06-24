const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: Number,
  email: String,
  role: { type: String, enum: ["user", "guest"] },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
