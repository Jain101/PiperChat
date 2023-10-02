const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://jahashmi1910:ae3NzOctNGu9Y40I@cluster0.vsr3sfe.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connection Done!!!"); 
    }
    catch (error) {
        console.log("Error!!!");
        process.exit();
    }
};

module.exports = connectDB;