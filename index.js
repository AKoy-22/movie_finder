'use strict';
const express= require('express');
const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//Define routes
app.get('/welcome', (req, res)=>{
    res.send("Welcome");
});

app.get('/home', (req, res)=>{
    res.render('index', {message:"This is the home page"})
})

//Start server
app.listen(PORT, ()=>{
    console.log(`Server is running of port ${PORT}`);
})
