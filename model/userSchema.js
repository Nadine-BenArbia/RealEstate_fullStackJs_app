const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String},
  phoneNumber: { type: Number},
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["visitor", "user"],
    default: "visitor"
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
