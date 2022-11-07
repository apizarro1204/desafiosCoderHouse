const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = app.listen(PORT, () => {
    console.log("servidor levantado");
});
const mascotas = [];
const personas = [];

const routerMascotas = express.Router();
const routerPersonas = express.Router();

routerMascotas.get("/", (req, res) => {
    res.json({ mascotas });
});

routerMascotas.post("/", (req, res) => {
    console.log(req.body);
    mascotas.push(req.body);
    res.json({ mensaje: "se agrego la mascota" });
});

routerPersonas.get("/", (req, res) => {
    res.json({ personas });
});

routerPersonas.post("/", (req, res) => {
    console.log(req.body);
    personas.push(req.body);
    res.json({ mensaje: "se agrego la persona" });
});

app.use("/personas", routerPersonas);
app.use("/mascotas", routerMascotas);