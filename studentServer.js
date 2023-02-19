const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./studentBlog");
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const dataBaseURL = "mongodb+srv://router:1234567890@cluster0.qzenddh.mongodb.net/student-data-base?retryWrites=true&w=majority";
mongoose.connect(dataBaseURL, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
    let port = process.env.PORT || 3000
    app.listen(port);
    console.log("Connected to a database ");
})
.catch((err)=>{
    console.log(err);
})



app.get("/students/:id", (req, res)=>{
    Blog.findOne({"student_ID": req.params.id})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post("/students", async(req, res)=>{
    const newStudent = new Blog({
        student_ID: req.body.student_ID,
        fullName: req.body.fullName,
        course: req.body.course,
        level: req.body.level
    })

     await newStudent.save()
    .then((result)=>{
        res.json(result);
     
    })
    .catch((err)=>{
        console.log(err);
    })
})

