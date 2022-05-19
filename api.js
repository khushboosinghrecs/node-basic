
const dbConnection = require('./mongodb');
const mongodb = require('mongodb');
const express = require("express");
const app= express();
app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    res.send(data);
})

app.post('/', async (req, res)=>{
    // console.log(req.body);
    // res.send(req.body);
    let data = await dbConnection();
    let result = await data.insertOne(req.body);
    console.log(result)
    res.send(result);
    
})

app.put("/", async (req, res)=>{
    let data = await dbConnection();
    let result =  await data.updateOne({name: req.body.name},
    {$set: req.body})
    res.send({result:"update"});
})

app.put("/:name", async (req, res)=>{
    let data = await dbConnection();
    let result =  await data.updateOne({name: req.params.name},
    {$set: req.body})
    res.send({result:"update"});
})

app.delete("/:id", async(req, res)=>{
    console.log(req.params.id);
    const data= await dbConnection();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})
app.listen(5000);