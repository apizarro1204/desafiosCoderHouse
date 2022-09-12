const express = require("express");
const router = express.Router();
const Contenedor = require("../Class/Contenedor");
const contenedor = new Contenedor("productos");



router.get('/', async (req, res) => {
    contenedor.getAll()
    .then(a => res.json(a))
});

router.get('/:id', async(req,res)=>{
    
})

module.exports = router;