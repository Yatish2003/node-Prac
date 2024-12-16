const http =require('http');
// const fs = require('fs');
const express=require('express');
const validation=require('./Home.js')
const port=5000;

const app=express();
app.use(express.json())

app.get('/login',(req,res)=>{
    return res.render('signUp')
})
app.get('/about',(req,res)=>{
    res.send("Hello This is About page" + 'hey' +req.query.name );
})

// function myHandler(req,res){
//     ((req,res)=>{
//         let logDaTa=`${Date.now()}:${req.method}${req.url}\n` ;
        
//         fs.appendFile('./reqRecords.txt',logDaTa,(err,data)=>{
    
//             res.end('server is listining')
//             switch (req.url){
//                 case '/':
//                     res.end('request on home page')
//                     break;
//                 case '/about':
//                     res.end('request on about page')
//                     break;
//             }
//         })
    
//     })
// }
const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`server is listining in http://localhost:${port}`)
})