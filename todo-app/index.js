const express = require('express');
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');

const mongoClient = require("mongodb").MongoClient

const app = express();


let dbase 

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    dbase = client.db("todo")
    console.log("Đã kết nối tới database")
})


app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs")

console.log("helalasldfads")

app.get("/", function(req,res){
    res.send("this is message from sever")
})


app.get("/about", function(req,res){
    res.send("<h1>this is message from sever</h1>")
})


let quotes = ["code html", "style css", "push code to github"]

app.get("/todo", function(request,response){

    let todoList = dbase.collection("newtodo").find().toArray().then(results => {console.log(results)}).catch(error =>{console.log(error)})


    // console.log(__dirname);

   

    response.render("index.ejs", {result: quotes})

    // res.sendFile(__dirname + "/index.html")
})



app.post("/newtodo", function(req,res){
   console.log("received", req.body)

    dbase.collection("newtodo").insertOne(req.body).then(results => {console.log(results)}).catch(error =>{console.log(error)})

    // let newtodo = req.body.title
    // quotes.push(newtodo)
})

app.listen(3000, function(){
    console.log("Hello World abcd")
});


