const socket = io.connect();
// Conectamos el cliente y escuchamos el evento messages
socket.on("messages", (data) => {
    render(data);
});

function render(data) {
    const html = data.map((elemento) => {
        // Obtiene el valor del objeto donde se asigna el autor y el texto
        return `<div>
        <strong>${elemento.author}</strong>:
        <em>${elemento.text}</em>
        </div>`;
    })
        .join(" "); // Acá separa por espacios el chat

    document.getElementById("mensajes").innerHTML = html; // Obtenemos el objeto mensajes

}
// El objeto message en server.js se encuentra vacío, pero esta función le agrega los parámetros al objeto y crea tanto el author como el text.
function addMessage(e) {
    const mensaje = { author: document.getElementById("username").value, text: document.getElementById("texto").value, };
    document.getElementsByClassName("form-control")[0].value = "";
    document.getElementsByClassName("form-control")[1].value = "";


    socket.emit("new-message", mensaje);

    return false;
}