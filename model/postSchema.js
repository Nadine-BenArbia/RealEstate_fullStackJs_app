const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    title: String,
    img: String,
    desc: String,
    location: String,
    availableAt:Date,
    price:Number,
    category:[String],
    user:{type:mongoose.Types.ObjectId ,ref:'User'}

})
const Post = mongoose.model("Post", postSchema)

module.exports=Post;
