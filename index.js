require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./routes/router')
require('./database/dbConnection')

const empServer=express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(router)


const PORT=3000 || process.env.PORT

empServer.listen(PORT,()=>{
    console.log(`Server Started at PORT ${PORT}`);
})

empServer.get('/',(req,res)=>{
    res.status(200).send('<h1 style="color:blue";>Server is Running<h1>')
})

// empServer.post('/',(req,res)=>{
//     res.status(200).send('POST REQUEST')
// })