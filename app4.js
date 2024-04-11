let express = require('express');
let bodyparser = require('body-parser');
let cors =require("cors")

let app = express();
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.post("/postdata",(req,res)=>{
    res.send(req.body)
})

 app.use('/fetchdata',require('./routes/fetch'))    //fetch 
 

app.use('/fetchbyid',require('./routes/fecthbyid'))   //fetch by id

app.use('/insert',require('./routes/res'))     //insert data

app.use('/delete',require('./routes/delete'))     //delete data

app.use('/update',require('./routes/upadte'))       //update data

app.use('/login',require('./routes/Login'))     //login
app.use('/register',require('./routes/Register'))  //Register
app.use('/form',require('./routes/Form'))

app.use('/fetchtable',require('./routes/table')) //table
app.listen(3004,(req,res)=>{
    console.log("Server running")
})
