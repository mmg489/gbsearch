const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//DB's data Structure

const BookSchema = new Schema({
    title:String,
    authors: String,
    rating: Number, 
    publisher: String,
    publishedDate: String, 
    description: String,
    thumbnail: String,
    price: Number,
    purchase: String,
});

//schema export 

module.exports = mongoose.model("Books", BookSchema);