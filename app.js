const express = require('express');
const app = express();
const router = require('./routes/routes');

var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));
app.use(router);

// Database setup
require('./models/db.js');

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Express listening on port ${port}`);
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});







