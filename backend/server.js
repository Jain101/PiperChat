const express = require("express")
const {chats} = require("./data/data")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const router = require('./routes/userRoutes')
const userRoutes = require("./routes/userRoutes")

const app = express();
dotenv.config();
connectDB();
app.use(express.json);

app.get("/",(req,res) => {
    res.send("API is running!!!");
});
/*app.get('/api/chats',(req,res) => {
    res.send(chats);
});
app.get('/api/chats/:id',(req,res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});*/

app.use('/api/user',userRoutes);

app.listen(PORT,console.log(`server started on port : ${PORT}`));

