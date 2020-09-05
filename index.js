const dotenv = require("dotenv");
dotenv.config();
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var router = require('./routes/router.js');

// Access public folder from root
app.use('/public', express.static('public'));
app.use('/public', express.static('views'));

const MY_PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if(req.headers.origin != undefined)
        res.setHeader('Access-Control-Allow-origin', req.headers.origin);
    else
        res.setHeader('Access-Control-Allow-origin', '*'); 
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
const path = require('path'); 

let sequelizeInstance = require('./config/connection');

// Add Route file with app
app.use('/', router); 

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//server port
http.listen(MY_PORT, function(){
  console.log('listening on *:3000');
});
