const mongoose=require("mongoose")

mongoose.connect(process.env.DB_CONNECTION).then((res)=>{
    console.log(`connected to MongoDB`);
}).catch((err)=>{
    console.log(err);
})