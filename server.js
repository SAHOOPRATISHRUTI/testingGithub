require("dotenv").config();
const express = require("express")
const cors = require('cors')
const connectDB = require("./dbLayer/connection")
const PORT = process.env.PORT || 8000
const app = express()
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("API is running")
})
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
connectDB();
