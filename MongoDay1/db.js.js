const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
const connection = mongoose.connect("mongodb://localhost:27017/")

const MovieSchema= new Schema({
    title: {type: String,required: true },
    rating:Number,
    releaseDate: Date,
    earnings: {type: Number, default:1000,min:0,max:10000},
    cast: {type:[String]},
    language: {
        type:String,
        enum:['English', 'Hindi'] },
});

const Movie =  model("movie", MovieSchema)
module.exports={Movie,connection}

// const main=async()=>{
//     const connect = await connection;
//     console.log("connection successful");

// const movie = new Movie({
    
//     title: "Dr.strange",
//     rating:3.5,
//     releaseDate: new Date(),
//     earnings: 900,
//     cast: ["rakesh","Hritik","tony"],
//     language: "Hindi",

// });
// const movie = new Movie({

//     title: "dhoom",
//     rating:3.9,
//     releaseDate: new Date(),
//     earnings: 9000,
//     cast: ["rakesh","abishek","karan"],
//     language: "English",

// });
// const movie = new Movie({

//     title: "veer",
//     rating:4.9,
//     releaseDate: new Date(),
//     earnings: 980,
//     cast: ["salman","abishek","preity"],
//     language: "hindi",

// });
    // await movie.save();
    // await movie1.save();
    // await movie2.save();
//     console.log("movies save")  
//     connect.disconnect();
// }
// main();