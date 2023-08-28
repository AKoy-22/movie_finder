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

app.get('/', (req,res)=>{
    const url = 'https://api.themoviedb.org/3/account/20363388';
    const options ={
        method:'GET',
        headers:{
            accept: 'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzE2NzRiYjA3ODUxOGYwZDI5NjczOWU2ODkxZmY3OCIsInN1YiI6IjY0ZWJmYTU2YzNjODkxMDBlMzYxMmNmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hb7VHFB0oSPNbjEbBekaeIFLySCk1L9nPCczryaO1gU',
        }
    };

    fetch(url, options)
    .then(response=>response.json())
    .then(json=> res.json(json))
    .catch(err=>res.status(500).json({error:'An error occured'}));
})

//Start server
app.listen(PORT, ()=>{
    console.log(`Server is running of port ${PORT}`);
})


