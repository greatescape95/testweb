var express = require('express');
var router = express.Router();
var bookshelf = require('../db/index.js').bookshelf;
require('../models/messages.js');
var Messages = bookshelf.model("Messages");

router.get('/messages', function( req, res, next ){
  Messages.query().where("email", "=", "f").then( function( messages ) {
    res.json( messages );
    console.log("TEst", messages);
    console.log("Database test");
  });
});

router.post('/messages', function( req, res, next ){
  console.log( req  );
  Messages.forge({
    contact_name: req.body.user.name,
    email: req.body.user.email,
    message_text: req.body.user.message
  }).save()
  .then( function( data ){
    console.log("saved");
    console.log( data );
  }).catch( function(err){
    console.log(err);
  });
});

module.exports = router;
