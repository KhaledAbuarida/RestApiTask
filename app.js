//import express package
const express = require('express');
//execute it
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//import routes
const usersRoutes = require('./routes/users')
app.use('/users',usersRoutes);
const idUsersRoutes = require('./routes/users');
app.use('./users/id', idUsersRoutes);



//ROUTES
app.get('/', (req,res) => {
    res.send("we are in Home");
});

app.get('/posts', (req,res) => {
    res.send("this is posts routs");
});

app.get('/posts/more', (req,res) => {
    res.send("this is more posts routs");
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION, ()=> console.log('connected!'));


//listening to the server
app.listen(4000);
