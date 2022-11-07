const express = require("express");
const PORT = 8080;

const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("./public"));
app.get("/", (req, res) => {res.sendFile("index.html");
});

io.on("connection", (socket) => {
    console.log("se conecto un usuario");

socket.emit("messages", messages);

socket.on("new-message", (data) => {
    messages.push(data);
    io.sockets.emit("messages", messages);
    
    });
});


const messages = [];

httpServer.listen(PORT, () => console.log("servidor Levantado"));