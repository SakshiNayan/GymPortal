const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require('cors')
const registerController = require('./routes/register')


//middileware
app.use(cors());
app.use(express.json({limit:"30mb",extended:true}))
app.use(urlencoded({extended: false}))


app.listen(3002,(err)=>{
    if(!err){
        console.log("Server is running on 3002")
    }
    else{
        console.log(err)
    }
})

const db= "mongodb+srv://Sakshi09:test123@instaclone.gwk4cly.mongodb.net/gymPortal?retryWrites=true&w=majority"
mongoose.connect(db,(data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});

app.use('/user', registerController);

app.get("/",(req,res)=>{
    res.status(200).send("GYM Portal")
},(err)=>{
    console.log(err)
})