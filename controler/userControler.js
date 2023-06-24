const User = require("../model/userSchema");

const getAll = async (req, res) => {
  try {
    console.log("hello");
    const users = await User.find();
    console.log("user", users);
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({ newUser });
  } catch (err) {
    res.status(404).json(res);
  }
};
module.exports = { getAll, addUser };
