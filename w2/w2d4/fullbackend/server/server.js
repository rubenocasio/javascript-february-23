/*
    M = MongoDB
    E = Express
    R = React
    N = Nodejs
*/

//import express and store express in a variable
const express = require("express");

//initialize the express application and store it in a variable called 'app'
const app = express();

//intialize the port to 8000
const port = 8000;

//allow the application to parse json data (form information)
//allow the application to accept form information
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import mongoose
require('./config/mongoose.config')

// Import our Routes
const Routes = require('./routes/song.routes')
Routes(app)

app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port: ${port}` ))