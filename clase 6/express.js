// Clase 6 Servidores Web

const express = require("express");
const app = express();

const PORT = 8080;
let contador = 0;

const server = app.listen(PORT, () => {
	console.log("servidor iniciado");
});

app.get("/", (req, resp) => {
	contador++;
	resp.send(`<h1 style='color:blue'> Bienvenido a mi servidor en express</h1>`);
});

app.get("/visitas", (req, resp) => {
	resp.send(
		`<h1 style='color:blue'>La cantidad de visitas es ${contador}</h1>`
	);
});

app.get("/fechayhora", (req, resp) => {
	contador++;
	const fecha = new Date();
	resp.send(
		`<h1 style='color:blue'>La fecha es ${fecha.toLocaleDateString()} 
        y la hora es ${fecha.toLocaleTimeString()}</h1>`
	);
});
