
const express = require('express')
const reqFilter = require('./middleware')
const app= express()
const route = express.Router()
route.use(reqFilter)



app.get("/", (req,res) =>{
    res.send(" welcome Hello WOrld")
})
app.get("/about", (req,res) =>{
    res.send("Hello  about WOrld")
})
route.get("/user",(req,res) =>{
    res.send("Hello Myuser")
})
route.get("/contact",(req,res) =>{
    res.send("Hello contact")
})
app.use('/',route)
app.listen(8080)