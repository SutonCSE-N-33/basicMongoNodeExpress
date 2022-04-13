const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express()
app.use(cors());
app.use(bodyParser.json())

const user = ["Nazrul islam","Saiful islam","Taherul islam","Thowhidul islam","Resatul islam","Tahmidul islam"];

app.get('/',(req, res)=> {
    const fruits={
        name:"ada",
        price:"30tk"
    }
  res.send(fruits);
})

app.get('/fruits/banana',(req,res)=>{
    res.send({fruitName:"Banana",quantity:"30pz",price:"3000"})
})

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const userName = user[id];
   console.log(id,user)
    res.send({id,userName})
})

app.post('/addUser',(req,res)=>{
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(5000,()=>console.log("listening port to 5000"))
