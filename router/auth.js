const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/conn");
const Register = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

router.get("/", (req,res)=>{
    console.log("hello server page");
    res.send("Hello world from server page");
});



router.post("/register", async(req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(400).json({error:"fill fields properly"});
    }
      
    try{
        const userExist = await Register.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User already exists"});
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords are not matching"});
        }else{
            const reg = new Register({name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword});
            await reg.save();
            res.status(201).json({message:"user registered successfully"});
        }

     }catch(err){
        console.log(err);
    }

    
});

// login route

router.post("/signin", async (req,res)=>{
try{
    const{email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({error:"plz fill data"});
    }

    const userLogin=await Register.findOne({email:email});
    if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password);
        const token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
           expires:new Date(Date.now() + 25892000000),
           httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({error:"Invalid credentials"});
        }else{
            res.json({message:"sign in successful"});
        }
    }else{
        res.status(400).json({error:"Invalid credentials"});
    }
    
    
}catch(err){
    console.log(err);
}
});

// about us

router.get("/about",authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log(req.rootUser);
});

// to get user data for contact and home page

router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
    console.log(req.rootUser);
});

//contact us page
router.post('/contact',authenticate,async (req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
        if(!name||!email||!phone||!message){
            return res.json({error:"plz fill contact form"});
        }

        const usersContact=await Register.findOne({_id:req.userId});
        if(usersContact){
            const userMessage=await usersContact.addMessage(name,email,phone,message);
            await usersContact.save();
            res.status(201).json({message:"successful"});
        }
    }catch(err){
        console.log(err);
    }
})

router.get("/logout",(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("User Logout");
});
module.exports = router;