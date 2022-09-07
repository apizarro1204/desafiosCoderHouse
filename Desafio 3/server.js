const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const Contenedor = require('./Contenedor');

const contenedor = new Contenedor("productos");

const server = app.listen(PORT, () => { console.log("servidor iniciado"); });


app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
});

app.get("/productos", (req, resp) => {
    contenedor.getAll().then(productos => {
        resp.send(productos)
    })
});

app.get("/productosRandom", async (req, resp) => {
    await contenedor.getAll().then(async productos =>{
        const cantProd = productos.length;
        const idP = parseInt(Math.random(cantProd)*cantProd+1);
        await contenedor.getById(idP).then(productos =>{
            resp.send(productos);
        });
    })
});