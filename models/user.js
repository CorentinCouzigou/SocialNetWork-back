const mongoose = require('mongoose');


const user = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 60,
        minlength: 6
    },
    picture: {
        type: String,
        default: "../avatar.jpg"
    },
    bio:
    {
        type: String,
        max: 1024,
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    },
    likes: {
        type: [String]
    },

    timestamps: true,

});

const UserModel = mongoose.model("user", user);
module.exports = UserModel;