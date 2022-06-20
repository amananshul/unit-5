const {Router}=require('express')
const News=require('../models/News')
const newsRouter=  Router()

newsRouter.post('/new',(req, res) =>{
  const news= new News(req.body)
news.save((err,succ)=>{
    if(err){ return res.status(500).send({message:error})}
    return res.status(201).send(news)
})

newsRouter.get('/',(req,res)=>{
  res.send("hello")
})
})

newsRouter.get('/new',async(req, res) =>{
 
 const signedNews= await News.find()
 return res.send(signedNews)

})



module.exports =newsRouter;