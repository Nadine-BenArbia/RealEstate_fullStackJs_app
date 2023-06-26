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
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.status(200).json({ post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).send({newPost});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id",req.params)
    await Post.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).json(error);
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