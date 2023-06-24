const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/mvp";
mongoose.set('strictQuery', false);


mongoose.connect(
    process.env.MONGODB_URI ||
  `mongodb://${mongoUri}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
)
const db = mongoose.connection;

module.exports = db