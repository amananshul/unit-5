const express=require('express')
const authRouter=require('./routes/auth')
const app=express();
const connection = require('./storage/db')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/auth', authRouter)

app.listen(8080,async()=>{
    await connection
    console.log("server started on http://localhost:8080")
})