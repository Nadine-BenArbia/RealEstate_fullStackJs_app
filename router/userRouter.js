const express = require("express");
const { getAll, addUser } = require("../controler/userControler");
// const isAuth = require("../middelwear/isAuth");

const router = express.Router();

//user router
router.get("/users", getAll);
router.post("/users/add", addUser);
// router.delete("/:id", deletePost);
// router.put("/:id", updatePost);

module.exports = router;
