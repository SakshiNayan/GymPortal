const mongoose=require("mongoose")

const Regschema=mongoose.Schema({
    Name:String,
    phone:Number,
    address:Array,
    age: Number,  
    userName : String,
    password:String,
    userType : String,
    
})
const UserModal=mongoose.model("Users",Regschema)
module.exports=UserModal