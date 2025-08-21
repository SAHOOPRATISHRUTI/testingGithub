


const generateOtp = ()=>{
    return Math.floor(100000+Math.random()*900000);
}

const otpExpiryTime = (minutes)=>{
    let now = new Date();
    now.setMinutes(now.getMinutes()+minutes);
    return now;
}

const checkTimeDifference = (toTime,fromTime)=>{
    var difference = Math.abs(fromTime.getTime()-toTime.getTime());
    var resultinMinute = Math.round(difference/60000);
    return resultinMinute;
}


module.exports = {
  

  generateOtp,
  otpExpiryTime,
  checkTimeDifference,
}