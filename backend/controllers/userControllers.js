const asynchandler = require('express-async-handler')
const User = require('../Models/userModel')
const generateToken = require("../config/generateToken")

const registerUser = asynchandler(async(req,res,next) => {
    const {name_,email,password,pic} = req.body;
    if(!name_ || !email || !password){
        res.status(400);
        throw new Error("Throw error message");
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({name,email,password,pic});
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(400);
        throw new Error("Failed to cretae a new user");
    }
});

module.exports = {registerUser};