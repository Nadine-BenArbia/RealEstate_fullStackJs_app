const express = require("express");
const connectDB = require("./config/connectDB");
const postRouter = require('./router/postRouter');
const userRouter = require('./router/userRouter');
const session = require('express-session');
const cors = require('cors'); 

require("dotenv").config();

const app = express();

app.use(express.json());
//CORS
app.use(cors({
  origin: 'http://localhost:3000' 
})); 

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use('/', postRouter);
app.use('/', userRouter);
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on PORT: ${PORT}`)
);
