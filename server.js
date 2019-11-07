var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});

io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
    socket.emit('test event', 'soy el server jellouuuuu');
});

app.use(express.static('public'));