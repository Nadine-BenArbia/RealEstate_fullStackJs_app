const User = require("../model/userSchema");



const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const {email, password } = req.body;

    // Check if the email already exists
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({ errors: [{ msg: "Email is already registered" }] });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;

    // Save the user
    await newUser.save();

    res.status(200).json({ msg: "Registration successful", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: [{ msg: "Could not register the user" }] });
  }
};




const login= async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Set the user's role in the session
    req.session.role = user.role;

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getOne = async (req, res) => {
  try {
   const {id}=req.params
   console.log('id',req.params)
    const users = await User.findById(id);
    console.log("user", users);
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// const addUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);

//     res.status(201).json({ newUser });
//   } catch (err) {
//     res.status(404).json(res);
//   }
// };
module.exports = { getOne,login,register };
