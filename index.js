require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./connection/db')
const route=require('./routes/route')


const ekartServer=express()

ekartServer.use(cors())
ekartServer.use(express.json())
ekartServer.use(route)

const PORT=3000||process.env.PORT

ekartServer.listen(PORT,()=>{
    console.log(`server running @ port ${PORT}`);
})