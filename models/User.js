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
      unique:true,
      required: true,
      index: true,
    },
       isActive: {
      type: Boolean,
      required: true,
      index: true,
      default: true,
    },
    phone:{
      type:String,
      required:true,
      unique:true
    },
    profilePicture: { 
        type: String,
         default: "" 
        },
    password :{
        type:String,
        required:true
    },
    //OTP 
    otp:{
      type:String,
      default:null,
    },
    otpExpiry:{
      type:Date,
      default:null
    },
    otpResendCount:{
      type:Number,
      default:0
    },
    isVerified:{
      type:Boolean,
      default:false,
    },
    //Google Auth
    googleId:{
      type:String,
      default:null
    }

},{timestamps:true})

module.exports = mongoose.model('User',userSchema)