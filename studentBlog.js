const mongoose = require("mongoose");
const schema  = mongoose.Schema;



const blogSchema = new schema({
    student_ID: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    course:{
        type: String,
        required : true
    },
    level:{
        type: String,
        required: true
    }
}, {timestamp: true})

const Blog = mongoose.model("Blogs", blogSchema)
module.exports = Blog