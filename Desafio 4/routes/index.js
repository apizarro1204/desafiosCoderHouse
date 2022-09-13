const express = require("express");
const router = express.Router();
const Contenedor = require("../Class/Contenedor");
const contenedor = new Contenedor("productos");


//GET /api/productos
router.get('/', async (req, res) => {
    const cont = await contenedor.getAll();
    res.json(cont);

});

//GET /api/productos/:id
router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const cont = await contenedor.getById(id);
    cont == null ? res.json({ error: "producto no encontrado" }) : res.json(cont);

});

//POST api/productos
router.post('/', async (req, res) => {
    const {title, price, thumbnail} = req.body;
    const id = await contenedor.save({title, price, thumbnail});
    res.send({message: `Producto agregado con el id: ${id}`});
})









module.exports = router;