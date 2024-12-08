const mongoose=require("mongoose")

const wishSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    },
    userId:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
})

const wishlists=new mongoose.model('wishlists',wishSchema)
module.exports=wishlists