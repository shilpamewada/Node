// Login for login
let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let register= express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/fsd63",(err,db)=>{
        if(err){
            throw err
        }
        else{
            db.collection("company").find({"email":req.body.email}).toArray((err,result)=>{
                if(err){
                    throw err
                }
                else{
                    if(result.length >=1){
                        if(result[0].password === req.body.password){
                            res.send("Login Successfull")
                        }else{
                            res.send("Invalid password")
                        }
                    }else{
                        res.send("No User Found")
                    }
                }
            })
            // res.send("data connected")
        }
    })
    // res.send("fetching data")

})

module.exports = register;


// deleteOne({id:parseInt(req.params.id)},(err,result)=>{
   