let express = require('express');
let bodyparser = require('body-parser')
let app = express();
app.use(bodyparser.json())
let data = require('./data.json')
app.get('/',(req,res)=>{
    res.send("welcome to the node js")
})
app.get('/login',(req,res)=>{
    res.send("welcome to login")

})
// get data
app.get('/getdata',(req,res)=>{
    res.send(data)
})
// insert data
app.post("/insertdata",(req,res)=>{
    data.push({"name":"amar",age:'23'})
    res.send(data)
})

// insert one
app.post("/insertOne",(req,res)=>{
    data.push(req.body)
    res.send(data)
})





app.listen(3008) 


// localhost:3008/login


// create a json file and saved the file with .json add array of object and handle request /get data ---res.send(data)
// when user want to insertdata handle the request using post method and the data into data variable