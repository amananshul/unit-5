// const express=require('express')
const { Router } = require('express')
const groceryRouter=Router()

groceryRouter.get('/',(req,res)=>{
    res.send("grocery list:1,2,3,4")
})
module.exports =groceryRouter;