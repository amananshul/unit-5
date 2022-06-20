const {Router}=require('express')
const express=require('express')
const newsRouter=require('./routes/news')
const app=express();
const connection = require('./storage/db')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/news', newsRouter)

app.listen(8080,async()=>{
    await connection
    console.log("server started on http://localhost:8080")
})