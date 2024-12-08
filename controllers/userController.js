const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')

exports.addUser=async(req,res)=>{
    try{
        const {username,password,email}=req.body
    const newUser=new users({
        username,password,email
    })
    await newUser.save()
    res.status(200).json(newUser)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    
}

exports.userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existing=await users.findOne({email,password})
        if(existing){
            const token=jwt.sign({userId:existing._id},process.env.secretKey)
            res.status(200).json({token ,username:existing.username})
        }else{
            res.status(400).json(`Invalid username or password`)
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
   
}