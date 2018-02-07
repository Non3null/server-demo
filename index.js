var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('io').listen(server);

app.set('port', process.env.PORT || 8080);
app.get('/', function(req, res) {
    console.log("client connecting")
    res.send("Hello express");
});

var room_users = [];
var display_user;

io.on('connection', function (socket) {
    socket.on('join', function(user) {
        room_users[user] = ""
    });

    socket.on('sendInput', function(data) {
        io.to(display_user).emit('receiveInput', data);
    });

    socket.on('Display_User', function(data) {
        display_user = socket.id;
    });
});