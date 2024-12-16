const express = require('express');
const app=express();
const port=3000;
const {add,mul}=require('./modules');
console.log(mul(4,5));
// const api=[
//     {
//         "name":"nishant",
//         "age":"21"
//     },{
//         "name":"vishal",
//         "age":"22"
//     },{
//         "name":"aayush",
//         "age":"18"
//     }
// ];

// app.get('/',(req,res)=>{
//     res.send("<h1>love U</h1>")
// });
// app.get('/api',(req,res)=>{
//     res.json(api)
// })

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
// })