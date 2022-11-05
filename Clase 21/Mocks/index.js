import Express from "express";
const app = Express();

//DATA MOCKS
const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];

//Función que saca un elemento de los arreglos de arriba
function generarRandomItem(nombreArreglo) {
    return nombreArreglo[Math.floor(Math.random() * nombreArreglo.length)]
}
//Función que define en cada key un dato retornado de la función de arriba
function generarRandomObj() {
    return {
        nombre: generarRandomItem(nombres),
        apellido: generarRandomItem(apellidos),
        color: generarRandomItem(colores),
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
