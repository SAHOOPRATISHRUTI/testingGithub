const mongoose = require('mongoose')
const db_url = `${process.env.DATABASE_LOCAL_URL}/${process.env.DB_NAME}`;
console.log("db_url=========",db_url)

const connectDB = async()=>{
try{
    const conn = await mongoose.connect(db_url)
    console.info(`DB connected:${conn.connection.host}`)

}
catch(error){
    console.log("============error",error)
    process.exit(1)
}
}
module.exports = connectDB;