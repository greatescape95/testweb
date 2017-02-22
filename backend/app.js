#!/usr/bin/env nodejs
var express = require("express");
var http = require('http');
var app = express();
var server = http.createServer( app );
var messages = require("./controllers/messages.js");
var x = require('./models/messages.js');
var bookshelf = require('./db/index.js').bookshelf;
var bodyParser = require('body-parser');
var Messages2 = bookshelf.model("Messages");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.post("/api", function( req, res ){
  console.log("Request for making contact");
  res.sendStatus( 200 );
  res.json({test: "test"});
});

app.use("/api", messages);

server.listen(3001, function(){
  console.log("Listening to port 3001");
});

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');
*/
