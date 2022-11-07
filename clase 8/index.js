const express = require("express");
const Contenedor = require('./Contenedor');
const app = express();
const PORT = 8080;

app.use(express.static("public"));
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const server = app.listen(PORT, () => {
    console.log("Servidor levantaddo en el puerto " + server.address().port)
});

const productos = async function () {
    try {
        const contenedor = new Contenedor("productos");

        const obtenerTodo = await contenedor.getAll();
        console.log(obtenerTodo);
    } catch (err) {
        console.log("error", err)
    }
}

const routerProductos = express.Router();

routerProductos.get("/", (req, res) => {
    res.json(productos);
})


app.use("/produc", routerProductos);


