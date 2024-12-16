const fs=require('fs');

// fs.writeFileSync('./example.txt',"This is example for file handling");    //write file Sync

// fs.writeFile('./example.txt',"This is example for file handling Async",(err)=>{});    //write file Async
// fs.writeFile('./example.txt',"This is example for file handling Async2",(err)=>{});    //write file Async



// const result = fs.readFileSync('./example.txt','utf-8');  //Read Sync
// console.log(result);


//---------Asunc Read
// fs.readFile('./example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Err",err);
//     }else{
        
//         console.log(data);
//     }
// }
// )