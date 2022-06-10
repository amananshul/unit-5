const User=require("../models/User")
const {Router}=require('mongoose')

const userRouter =Router()

userRouter.get("/:userId",async(req,res)=>{
    const {userId}=req.params
    const user=await User.findById(userId)
    res.send(user)
})
module.exports=userRouter