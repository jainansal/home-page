const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static("public"));

var data = 
[
    {
        tagName: "Physics assignment",
        subject: "Physics",
        deadline: "5 days",
        description: "To check ASAP",
        mediaSrc: "/images/001.jpg",
        mediaType: "image"
    },
    {
        tagName: "Maths assignment",
        subject: "Maths",
        deadline: "4 days",
        description: "To check ASAP",
        mediaSrc: "/images/002.jpg",
        mediaType: "image"
    },
    {
        tagName: "Physics exam",
        subject: "Physics",
        deadline: "5 days",
        description: "To check ASAP",
        mediaSrc: "/images/003.jpg",
        mediaType: "image"
    },
    {
        tagName: "Maths exam",
        subject: "Maths",
        deadline: "5 days",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "image"
    },
    {
        tagName: "Timetable",
        subject: "Notices",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/005.jpg",
        mediaType: "image"
    },
    {
        tagName: "Exam schedule",
        subject: "Notices",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/dummy-files/book.pdf",
        mediaType: "pdf"
    },
    {
        tagName: "OS worksheet",
        subject: "Operating System",
        deadline: "3 days",
        description: "To check ASAP",
        mediaSrc: "/images/006.jpg",
        mediaType: "doc"
    },
    {
        tagName: "OS practical file",
        subject: "Operating System",
        deadline: "10 days",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "pdf"
    },
    {
        tagName: "DSA Cheatsheet",
        subject: "DSA",
        deadline: "5 days",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "image"
    },
    {
        tagName: "DSA Guidelines",
        subject: "DSA",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "DSA Assignment-1",
        subject: "DSA",
        deadline: "5 days",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "pdf"
    },
    {
        tagName: "Physics Assignment - 2",
        subject: "Physics",
        deadline: "15 days",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Physics pyq 1",
        subject: "Physics",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Physics class notes",
        subject: "Physics",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Physics main book",
        subject: "Physics",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "pdf"
    },
    {
        tagName: "College guidelines",
        subject: "Notices",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Hostel Allotment",
        subject: "Notices",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "image"
    },
    {
        tagName: "Maths crossword puzzle",
        subject: "Maths",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "pdf"
    },
    {
        tagName: "Physics new w/s",
        subject: "Physics",
        deadline: "1 day",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Physics self-notes",
        subject: "Physics",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "OS new assignment",
        subject: "Operating System",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    },
    {
        tagName: "Semester schedule",
        subject: "Notices",
        deadline: "none",
        description: "To check ASAP",
        mediaSrc: "/images/004.jpg",
        mediaType: "doc"
    }
]

var subjectList = ["Maths", "Physics", "Operating System", "DSA"];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login-pg/login.html");
})

app.get("/home", (req,res) => {
    res.render("view", {userData: data, subjects: subjectList})
})

app.get("/popup", (req,res) => {
    console.log(req.bodyParser);
})

app.get("/logout", (req,res) => {
    res.redirect("/");
})

app.listen(3000);