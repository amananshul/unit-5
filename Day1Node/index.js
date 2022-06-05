
// sum(1,2,print)
// console.log("hi")
// const isEven = require("is-even")
// console.log(isEven(10))
// const {a}= require('./an')
// console.log(a)
const fs=require('fs')
const http=require("http");

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url=='/'){
        res.setHeader("content-type", "text/plain")
     return   res.end("hello") 
    }
    if(req.url=='/prod'){
        res.setHeader("content-type", "application/json")
      return  res.end("[1,2,3,4,5]")

    }
    if(req.url=='/file'){
        const readStream=fs.createReadStream('./index.html')
        readStream.pipe(res)
        // const data= fs.readFile('./index.html',{encoding:'utf-8'},(err,data)=>{
        //     if(err) {console.log("error")}
        //     res.setHeader('Content-Type', 'text/html')
        //     return res.end(data)
        // })
    }
        
 })
  
server.listen(8080,()=>{
    console.log("server started on http://localhost:8080/")
})