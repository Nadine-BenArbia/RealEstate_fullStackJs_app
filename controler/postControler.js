const Post = require("../model/postSchema");
const User= require("../model/userSchema");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(201).json({ posts });
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  try {
    const posts = await Post.findById({_id:id});
    res.status(201).json({ posts });
  } catch (err) {
    console.log(err);
  }
};
const createPost = async (req, res) => {
  try {
    //find user id that he is going to post
    const findUser = await User.find({ _id:req.params.id });
    if (!findUser) {
      return res.status(403).send("user not found");
    }
    console.log('id',findUser[0])
    //create new post
    req.body.user=(findUser[0])
    const newPost = Post.create(req.body);
    
    res.status(201).send("posted succ");
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id",req.params)
    await Post.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update" });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    // Delete post by its ID
    const deleted = await Post.findByIdAndRemove({ _id: id });
    if (!deleted) {
      // If the post was not found
      return res.status(404).send("Item not found");
    }
    res.send(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};
module.exports={getAllPosts,getById,createPost,updatePost,deletePost}