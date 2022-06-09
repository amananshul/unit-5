const express=require('express')
const app = express()
const {Movie,connection}=require('./db.js')
app.use(express.urlencoded({ extended:true}))
app.use(express.json())

app.get("/movies",async(req,res)=>{
    const {page,perPage} =req.query;
    const LIMIT=2;
    const movies=await Movie.find().skip().
    limit(perPage);
    return res.json(movies)
})
app.post('/movies',async(req,res)=>{

    console.log("updated")
})
app.listen(8080,async()=>{
    await connection
    console.log("connected")
})