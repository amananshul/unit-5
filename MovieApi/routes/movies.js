const express=require('express');
const router=express.Router(); 
const Movie=require('../models/movies')

//create BOO
router.post('/new',(req, res) =>{
    const movie= new Movie(req.body)

  movie.save((err,succ)=>{
      if(err){ return res.status(500).send({message:error})}
      return res.status(201).send(movie)
  })
})
router.get("/",(req,res)=>{
   Movie.find()
   .then((movies)=>res.send(movies))
   .catch((error)=>{
    res.status(500).send("something went wrong")
    console.log("error")
})
})

router.get("/:movieId",async(req,res)=>{
   const movie= await Movie.findById(req.params.movieId)
   if(!movie) res.send("movie not found")
    res.send(movie)

    // We can do it by .then catch too
    // .then((movie)=>{
        // if(movie) res.send(movie)
        // res.status(403).send("movie not found")
        // }).catch((error)=>{
        //     res.status(500).send(error.message)
        // });
})
router.put("/:movieId",async(req,res)=>{
   const update = await Movie.findByIdAndUpdate(
    req.params.movieId,
    {
        name:req.body.movieName,
        actor:{
            name:req.body.actorName,
            age:req.body.actorAge,
        },
        genre:req.body.genre
    }, {new:true} );
  if(!update) res.status(404).send("not found")
  res.send(update)
})

router.delete("/:movieId",async(req,res)=>{
    const deleteMovie =await Movie.findByIdAndDelete(req.params.movieId)
    if(!deleteMovie) res.status(404).res.send("Cant")
    res.send(deleteMovie)
})
module.exports=router;