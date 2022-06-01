// function sum(a,b,print){
//     print(a+b)
//     console.log("Sum done")
// }
// function print(data){
//     console.log(data)
//     // return data
// }
// sum(1,2,print)
// console.log("hi")
// const isEven = require("is-even")
// console.log(isEven(10))
// const {a}= require('./an')
// console.log(a)
const http=require("http");
const fs=require('fs')
const server = http.createServer((req, res) => {
    if(req.url==="/"){
         fs.readFile("./index.html",{encoding: 'utf8'},(err, data) => {
             if(err) throw err
                 res.write(data)
                 res.end("hi")
       })
    }
    if(req.url==="/products"){
        res.end("Hello")
    }
        
    })
//   
server.listen(8080,()=>{
    console.log("server started on http://localhost:8080/")
})