// PUG & EJS
const express = require("express");
const pug = require("pug");
const app = express();
const PORT = 8080;

const router = express.Router();
app.use(express.static("public"));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const server = app.listen(PORT, () => {
    console.log("Servidor levantaddo en el puerto " + server.address().port)
});

server.on("error", (error) => console.log(`hubo un error ${error}`));

// Configuración de PUG

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/datos",(req, res) => {
    res.render("meter.ejs",{
        min: req.query.min,
        max: req.query.max,
        nivel: req.query.nivel,
        titulo : req.query.titulo
    } );
})