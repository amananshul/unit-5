const express= require('express');
const app=express();
const mongoose = require('mongoose')
require('dotenv').config()
const movieRoute=require('./routes/movies')

const PORT=process.env.PORT||8080
// app.get('/',(req,res)=>{
//     res.send('hello')
// })
app.use(express.urlencoded({ extended:true}))
app.use(express.json());
app.use('/api/movies',movieRoute)

mongoose.connect
(process.env.MONGO_URL
,{useNewUrlParser:true})
.then(()=>{
    console.log('connected to atlas')
}).catch((error)=>{
    console.log('error connecting to atlas',error)
})



app.listen(PORT, ()=>{
    console.log('listening on port',PORT)
})

