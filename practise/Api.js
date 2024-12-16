const express=require('express');
const users=require('./data.json');
const fs =require('fs');
const app=express();
const port=5000;


//middleware

app.use(express.urlencoded({extended:false}))

//custom middle ware
app.use((req,res,next)=>{
    let LogData=`\n${Date.now()} :${req.ip}:${req.method}`;
    fs.appendFile('./reqRecords.txt',LogData,(err,data)=>{
        console.log("Custom Middle Ware");
        next();
    })
})

//Routes

app.get('/',(req,res)=>{
    return res.send("Hello Users");
})
app.get('/users',(req,res)=>{
    let usersDetails=`
        <ul>
            <li>${users.map((user)=> `<li>${user.Fname}</li>`).join('')}
        </ul>

    `
    res.send(usersDetails)
})

app.get('/api/users',(req,res)=>{

     res.json(users);
 })

app
.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const userID=users.find(user => user.id === id);
    res.json(userID);
})
.put((req,res)=>{
    const updId=req.params.id; //get id
    let val=req.body; ///value from postMen
    const update=users.find(user => user.id === updId);
    users[update]={...update,id:updId};
    fs.writeFile('./data.json',JSON.stringify(users),(err,data)=>{

        res.send({ message: "User updated", updatedUser: users[update] });
    })


})



app.post('/api/users',(req,res)=>{
    let postMensVAL=req.body;
    users.push({...postMensVAL,id: users.length+1});
    fs.writeFile('./data.json',JSON.stringify(users),(err,data)=>{

        res.json({status : 'pending',id:users.length});
    })

    console.log(postMensVAL);
})

app.listen(port,()=>{
    console.log(`App is listining on port:http://localhost:${port}`)
})