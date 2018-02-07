var express = require('express');
var app = express();

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res) {
    console.log("client connecting");
    res.send("Hello express");
});