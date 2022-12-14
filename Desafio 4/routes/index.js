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
    const id = await contenedor.post({title, price, thumbnail});
    res.send({message: `Producto agregado con el id: ${id}`});
})

// PUT api/productos/:id
router.put('/:id', async (req,res) =>{
    const {title, price, thumbnail} = req.body;
    const id = await contenedor.put(Number(req.params.id),
    {title, price, thumbnail});
    res.json(id)
})

// DELETE api/productos/:id
router.delete('/:id', async (req,res) =>{
    const borrar = await contenedor.deleteById(Number(req.params.id));
    res.json(
        borrar !== null ? {message: `Se elimnó el producto con id: ${borrar}`} : {error: "Producto no encontrado"}
    )
})









module.exports = router;