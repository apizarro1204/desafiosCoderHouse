const express = require("express");

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app  = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'));

const mensajes = [];

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.emit('mensajes', mensajes);

    socket.on('mensaje', (data) =>{
        mensajes.push({socketId: socket.id, mensaje: data});
        console.log(mensajes);
        io.sockets.emit('mensajes', mensajes);
    })
})

const connectedServer = httpServer.listen(8080, ()=>{
    console.log('Servidor levantado');
});