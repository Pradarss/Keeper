const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  }));

mongoose.connect("mongodb://127.0.0.1:27017/keeperDB", {useNewUrlParser: true})
.then(function(){
    console.log("Successfully connected to mongoDB")
})
.catch(function(err){
    console.log(err);
})

const notesSchema = {
    title: String,
    content: String
  };

const Note = mongoose.model("Note", notesSchema);

app.get("/notes", function(req,res){
    Note.find()
    .then(function(foundNotes){
        res.json(foundNotes);
    })
    .catch(function(err){
        console.log(err);
    })
})

app.post("/notes", function(req,res){
    console.log(req.body)
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    })

    newNote.save()
    .then(function(savedNote){
        console.log("Note saved successfully");
        console.log(savedNote)
        res.json(savedNote);
    })
    .catch(function(err){
        console.log(err);
    })
})

app.listen(port, function() {
    console.log("Server started on port 5000");
  });