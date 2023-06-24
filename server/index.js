const express= require('express')
 
const db = require("./dataBase");

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;