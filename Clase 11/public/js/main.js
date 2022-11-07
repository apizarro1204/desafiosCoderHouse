const socket = io.connect();

const input = document.querySelector('input');

document.querySelector('button').addEventListener('click', () => {
    socket.emit('mensaje', input.value);
});


socket.on('mensajes', (data)=>{
    const mensajes = data.map((msj)=> `SocketId : ${msj.socketId} -> Mensaje: ${msj.mensaje}`).join('<br>');

    document.querySelector('p').innerHTML = mensajes;
});