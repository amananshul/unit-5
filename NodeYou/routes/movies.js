const express=require('express');
// const movie = require('../models/movie');
const router=express.Router(); 
const Movie=require('../models/movies')

//create BOOks

router.post('/',(req,res)=>{
  const movie=new Movie({
        name: req.body.movieName,
        producer:{
           name:req.body.producerName,
           age:req.body.producerAge
        },
        genre:req.body.genre
    })

    movie.save()
    .then(movie=>{
        res.send(movie)
    }).catch(err=>{
        res.status(500).send('movie not found in db')
    })
})
module.exports=router;