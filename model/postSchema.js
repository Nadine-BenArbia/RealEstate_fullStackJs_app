const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    title: String,
    img: String,
    desc: String,
    location: String,
    availableAt:Date,
    price:Number,
    room:Number,
    bathrooms:Number,
    status: {
      type: String,
      enum: ['For Sale', 'Pending', 'Sold'],
      default:"For sale"
    },
    user:{type:mongoose.Types.ObjectId ,ref:'User'}

})
const Post = mongoose.model("Post", postSchema)

module.exports=Post;
