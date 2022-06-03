const express=require('express')
const groceryRouter=require('./grocery.route')

const app= express()

app.get('/',(req,res)=>{res.send("hello")})
app.post('/post',(req,res)=>{res.send("hello")})
app.put('/put',(req,res)=>{res.send("hello")})
// app.use("/",groceryRouter)
app.listen(8080)