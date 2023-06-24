const express = require("express");
const { getOne,login,register} = require("../controler/userControler");
// const isAuth = require("../middelwear/isAuth");

const router = express.Router();

//user router
router.get("/users/:id", getOne);
// router.post("/users/add", addUser);
router.post("/register",register)
router.post("/login",login)


module.exports = router;
