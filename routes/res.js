let express = require('express');
let mongodb = require('mongodb');
let client = mongodb.MongoClient;

let fetch = express.Router().post("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/fsd63",(err,db)=>{
        if(err){
            throw err
        }
        else{
            db.collection("company").insertOne(req.body,(err,result)=>{
                if(err){
                    throw err
                }
                else{
                    res.send(result)
                }
            })
            // res.send("data connected")
        }
    })
    // res.send("fetching data")

})


            
               
module.exports = fetch;

// deleteOne({id:parseInt(req.params.id)},(err,result)=>{
