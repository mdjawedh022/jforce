const express=require("express");
const cors=require("cors");
const connnection = require("./util/db");
const { authRouter } = require("./routes/auth.routes");
require('dotenv').config();
const app=express();

app.get('/',(req,res)=>{
    res.send("hello world");
    
})

app.use(cors());
app.use(express.json())
app.use("/api", authRouter);
app.listen(process.env.port,async()=>{
    try{
        await connnection
        console.log("connection established")
    }catch(err){
        console.log("connection error",err)
    }

    console.log("server is running on port 800");
})