const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
const {sendEmail} = require("./emailService");

const verifyEmail = async(email)=>{
    console.log("email =======",email)
    return await User.findOne(
        {email,isActive:true},
        {_id:1,name:1,email:1}
    )
}
const generateOtp = ()=>Math.floor(1000 +Math.random()*9000).toString();

const generateToken = (userId)=>{
    return jwt.sign({id:userId},process.env.JWT.SECRET,{expiresIn:"1d"})
}

const validateSendingOtp = async (userData,email)=>{
    let otpResendTime;
    let otpResendCount;
    const rulesData = await checkResendOtpRules(userData);
    console.log("rulssssData",rulesData);
    
}

const sendOtp = async(email,ipAddress)=>{
    const userData = await verifyEmail(email);
    console.log("userData=====",userData)
    return await validateSendingOtp(userData,"Send OTP")
}

module.exports ={
    generateOtp,
    generateToken,
    sendOtp
}

