const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    age:Number,
    role:{
        type:Number,
        default:0
    }
});
module.exports= mongoose.model("User",userSchema)