const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String, default: "https://imgs.search.brave.com/kEWSBlr2b4ZM-avbVzKQXuXgf6yyo28XQvmvM86mVno/rs:fit:573:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/dWF0N3doYWQ5LWtj/SThfMUtIX3RRSGFH/SSZwaWQ9QXBp" }
},
    { timestamps: true })

const User = mongoose.model("User", userModel);

module.exports = User;
