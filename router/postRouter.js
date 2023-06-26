const express = require("express");
const {
  getAllPosts,
  deletePost,
  updatePost,
  createPost,
  getById
} = require("../controler/postControler");
// const isAuth = require("../middelwear/isAuth");

const router = express.Router();

//test
// router.get("/test", (req, res) => {
//   res.send("hello");
// });
router.get("/posts", getAllPosts);
router.get("/posts/:id",getById)
router.post("/post", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
