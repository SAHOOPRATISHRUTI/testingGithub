const mongoose = require('mongoose')
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
      email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
      },
      default: null,
      required: true,
      index: true,
    },
    profilePicture: { 
        type: String,
         default: "" 
        },
    password :{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model('User',userSchema)