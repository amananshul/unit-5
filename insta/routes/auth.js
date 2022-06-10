const {Router}=require('express')
const User=require('../models/User')
const authRouter=  Router()

authRouter.post('/signup',(req, res) =>{
  const user= new User(req.body)
user.save((err,succ)=>{
    if(err){ return res.status(500).send({message:error})}
    return res.status(201).send({message:"succ",user:succ["doc"]})
})
})
authRouter.post('/login',async(req, res) =>{
 const{username,password}=req.body;
 const ValidUser= await User.find({username,password})
 return res.send(ValidUser)

})

module.exports =authRouter;