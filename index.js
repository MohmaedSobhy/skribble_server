const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

var server = http.createServer(app);
var io = require('socket.io')(server);

// Middleware
app.use(express.json());

// Connect to MongoDB
const DB = 'mongodb+srv://ZEX99:HV9OBXqrdanBUA4e@cluster0.dcdsqou.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log(e);
});

server.listen(port, '0.0.0.0', () => {
    console.log('server running on port ' + port);
});