const express = require("express");
const EventEmitter = require("events");
const { response } = require("express");
const app = express();
const event = new EventEmitter();

let count=0;
event.on("countApi", ()=>{
    console.log("event called", count);
})

app.get("/", (req, res)=>{
    count++;
    res.send("home called");
    event.emit("countApi");
})

app.get("/search", (req, res)=>{
    res.send("search called");
})

app.get("/api", (req, res)=>{
    res.send("api called");
})
app.listen(4000);