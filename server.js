const express = require("express");
const connectDB = require("./config/connectDB");
const postRouter=require ('./router/postRouter')
const userRouter=require ('./router/userRouter')


require("dotenv").config();
// const jwt=require("jsonwebtoken")
//------

const app = express();
//-------
app.use(express.json())
//connect datebase
app.use('/',postRouter)
app.use('/',userRouter)
connectDB();
//PORT 
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running in PORT=  ${PORT}`)
);