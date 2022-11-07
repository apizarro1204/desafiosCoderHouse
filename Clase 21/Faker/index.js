import { faker } from '@faker-js/faker';
import Express from "express";

const app = Express();

// Función para usar la librería faker
function generarRandomObj(id) {
    return {
        id: id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human(),
    }
}
app.get("/test", (req, res) => {
    let objetos = []
    const cantidadDatos = req.query.cant || 10
    for (let i = 0; i < cantidadDatos; i++) {
        objetos.push(generarRandomObj(i+1))
    }
    res.json(objetos)
})


const PORT = 8080;
const servidor = app.listen(PORT, () => { console.log(`Servidor Mock escuchando en el puerto: ${PORT}`); });
