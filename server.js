// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// Dependencies
var express = required("express");
var mysql = required("mysql");
var exphbs = required("express-handlebars");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  