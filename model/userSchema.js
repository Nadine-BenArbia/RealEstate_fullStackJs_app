const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["visitor", "user"],
    default: "visitor",
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
