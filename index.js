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
    socket.on('Join', function (user) {
        room_users.push(socket.id);
        room_users[socket.id] = user;

        var data = "{ user : " + socket.id + " }";

        io.to(socket.id).emit("ReceiveUserID", data)
    });

    socket.on('SendInput', function(data) {
        io.to(display_user).emit('ReceiveInput', data);
    });

    socket.on('Display_User', function(data) {
        display_user = socket.id;
    });
});