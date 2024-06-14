const express = require('express');
const authModel = require('../model/auth.model');
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
authRouter=express.Router();


authRouter.get('/',async(req,res)=>{
    try{
   let auth=await authModel.find()
     res.send(auth)
   
    }catch(err){
        res.send({msg:"somthing went wrong",err:err});
    }
})

// -----------registers------------------

authRouter.post("/register",async(req,res)=>{
    let {username,password,email,phone} = req.body
   try{
    bcrypt.hash(password, 4, async (err, hash) => {
        
      const user = new authModel({ username, password: hash, email, phone });
      await user.save();
      res.send({ msg: "user has been registered" });
    });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err.message });
    console.log(err);
  }


})
// ---------------login -----------------
authRouter.post("/login",async(req,res)=>{
    let {username,password} = req.body;
   try {
    const user = await authModel.find({ username });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "jforce");
          res.send({
            msg: "Login Successfully",
            token: token,
            user: user[0].username
          
          });
        } else {
          res.send({ msg: "Wrong Credntials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credntials", err: err.message });
    }
  } catch (err) {
    res.send({ msg: "Something went Wrong", error: err.message });
  }
});
module.exports = {authRouter};

// process.env.JWT_SECRET