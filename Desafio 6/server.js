const express = require("express");
const Contenedor = require("./api/productos.js");
const router = express.Router();

// Configuración Websocket

const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const PORT = 8080;



// Objeto donde se guardan los mensajes

const messages = [];

// Métodos de la clase
let productos = new Contenedor();

// ---------------------------------
// Conectamos websocket

io.on("connection", (socket) => {
	console.log("se conecto un usuario");

	socket.emit("messages", messages);

	socket.on("new-message", (data) => {
		messages.push(data);
		io.sockets.emit("messages", messages);

	});

})

//--------------------------------------------
//establecemos la configuración de ejs

app.set("view engine", "ejs");
app.set("views", "./views");
//--------------------------------------------



app.use(express.static("public")); //quiza views?


app.use("/", router);


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/productos/listar", (req, res) => {
	res.json(productos.getAll());
});

router.get("/productos/listar/:id", async (req, res) => {
	const id = Number(req.params.id);
	const cont = await productos.getById(id);
	cont == null ? res.json({ error: "producto no encontrado" }) : res.json(cont);
});

router.post("/", (req, res) => {
	const producto = req.body;
	productos.post(producto);
	res.redirect("/");
});

router.put("/productos/actualizar/:id", async (req, res) => {
	const { title, price, thumbnail } = req.body;
	const id = await productos.put(Number(req.params.id),
		{ title, price, thumbnail });
	res.json(id)
});

router.delete("/productos/borrar/:id", async (req, res) => {
	const borrar = await productos.deleteById(Number(req.params.id));
	res.json(
		borrar !== null ? { message: `Se elimnó el producto con id: ${borrar}` } : { error: "Producto no encontrado" }
	)
});

router.get("/", (req, res) => {
	const prods = productos.getAll();

	res.render("layouts/index", {
		productos: prods,
		hayProductos: prods.length,
	});
});

httpServer.listen(PORT, () => console.log("servidor Levantado"));

// const server = app.listen(PORT, () => {
// 	console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
// });
// server.on("error", (error) => console.log(`Error en servidor ${error}`));
