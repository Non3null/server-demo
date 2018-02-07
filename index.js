var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('io').listen(server);

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res) {
    console.log("client connecting");
    res.send("Hello express");
});