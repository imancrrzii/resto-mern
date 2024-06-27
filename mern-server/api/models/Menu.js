const mongoose = require("mongoose");
const {Schema} = mongoose;

// create schema 
const menuSchema = new Schema({
    name: {
        type: String,
        required: true, 
        trim: true,
        minlength: 3,
    },
    recipe: String,
    image: String,
    category: String,
    price: Number
})

// create model
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;