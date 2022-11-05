import { faker } from '@faker-js/faker';
import Express from "express";

const app = Express();

// Función para usar la librería faker
function generarRandomObj() {
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.color.human(),
    }
}
app.get("/test", (req, res) => {
    let objetos = []
    for (let i = 0; i < 10; i++) {
        objetos.push(generarRandomObj())
    }
    res.json(objetos)
})


const PORT = 8080;
const servidor = app.listen(PORT, () => { console.log(`Servidor Mock escuchando en el puerto: ${PORT}`); });
