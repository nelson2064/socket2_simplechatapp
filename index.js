const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { join } = require('path');

const app = express();
const server = createServer(app);
const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });



io.on('connection',function(socket){
    socket.join('kitchen-room'); //room 1
    let sizeOfKitchen = io.sockets.adapter.rooms.get("kitchen-room").size; //to calcuate how many user is inside a room
    io.sockets.in('kitchen-room').emit('cooking',"Fried rice cooking = " + sizeOfKitchen);  
    io.sockets.in('kitchen-room').emit('boiling',"boiling water");

    socket.join('bed-room'); //room 2
    io.sockets.in('kitchen-room').emit('sleep',"i am sleeping");
})

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});


































// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require('express');
// const { createServer } = require('http');
// const { Server } = require('socket.io');
// const { join } = require('path');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// io.on('connection', function(socket) {
//     socket.on('chat', function(msg) {
//         io.sockets.emit('chat_send', msg);
//     });
// });

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });
