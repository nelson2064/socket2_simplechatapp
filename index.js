const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { join } = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', function(socket) {
    socket.on('chat', function(msg) {
        io.sockets.emit('chat_send', msg);
    });
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
