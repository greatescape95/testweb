var express = require('express');
var router = express.Router();
var bookshelf = require('../db/index.js').bookshelf;
require('../models/messages.js');
var Messages = bookshelf.model("Messages");
var message;
/*var sendmail = require('sendmail')();*/
/*var nodemailer = require("nodemailer");*/
/*
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: "winetastingbrac@gmail.com", // Your gmail address.                                        // Not @developer.gserviceaccount.com
      clientId: "91694279077-nh61fp4ujq1irkmhtg35h4qaskhvtfbd.apps.googleusercontent.com",
      clientSecret: "NyWguYvd2lG6Oi2TKBSRAV4g",
      refreshToken: "1/meLIb67CCZRihCLbRPxmu5XcEaP-MWySxbvbp0WvfGY"
    }
  }
});*/

router.get('/messages', function( req, res, next ){
  Messages.query().where("email", "=", "f").then( function( messages ) {
    res.json( messages );
    console.log("TEst", messages);
    console.log("Database test");
  });
});

router.post('/messages', function( req, res, next ){
  Messages.forge({
    contact_name: req.body.user.name,
    email: req.body.user.email,
    message_text: req.body.user.message,
  }).save()
  .then( function( data ){
    if( data ) message = data;
    if ( message ){
      console.log("test", req.body.user.hidden);
      console.log(message.attributes.contact_name);
    }/*
    if( !req.body.user.hidden ) {
      var template = "<p>Name:</p><br>"+
                      message.attributes.contact_name +
                      "<br><p>E-mail:</p><br>" +
                      message.attributes.email +
                      "<br><p>Message:</p><br>" +
                      message.attributes.message_text;

      var mailOptions = {
        from: "winetastingbrac@gmail.com",
        to: "toni.franulic@gmail.com",
        subject: "Contact" + message.attributes.message_id,
        generateTextFromHTML: true,
      //  text: message.attributes.contact_name,
        html: template
      };

      smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
          console.log(error);
        } else {
          console.log(response);
        }
        smtpTransport.close();
      });
    }

*/
    console.log("saved");
    res.json( data );
  }).catch( function(err){
    console.log(err);
  });
});










module.exports = router;
