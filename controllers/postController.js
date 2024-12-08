const products=require('../Models/postModel')

exports.getAllPost=async(req,res)=>{
    try{
        const allPosts=await products.find()
        res.status(200).json(allPosts)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

exports.getSpecificOne=async(req,res)=>{
    try{
        const {id}=req.params
        // console.log(id);
        const product=await products.findOne({_id:id})
        // console.log(product);
        
        res.status(200).json(product)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
   
}