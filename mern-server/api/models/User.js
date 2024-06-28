const mongoose = require("mongoose");
const {Schema} = mongoose;

// create schema
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    photoURL: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

// create model
const User = mongoose.model("User", userSchema);
module.exports = User