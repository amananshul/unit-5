module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("provide age")
    }
    else if (req.query.age<18){
        res.send("You cant accept")
    }
    else{
        next()
    }
}
