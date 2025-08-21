const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
const {sendEmail} = require("./emailService");
const OtpLogs = require("../models/otpLogsModel")
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

const checkResendOtpRules = async(userData)=>{
    const otpLogsData = await OtpLogs.findOne({email:userData.email}).sort({createdAt:-1});
    console.log("otpLogsData======>",otpLogsData)
    if(otpLogsData){
        let otpResendTime=otpLogsData.otpResendTime;
        let otpResendCount = otpLogsData.otpResendCount
        if(otpResendTime){
            const timeDifference = commonHelper.checkTimeDifference(
                new Date(),
                otpResendTime
            )
        }
    }
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

