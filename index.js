require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const github={"name":"yatish",
          "age" :"21"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send("enter login page");
})
app.get('/github',(req,res)=>{
  res.json(github);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})