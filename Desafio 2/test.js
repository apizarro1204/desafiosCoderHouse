const Contenedor = require('./desafio2');



const archivo = [
    {
        title: 'Escuadra',
        price: 123.45,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
        id: 1
    },
    {
        title: 'Calculadora',
        price: 234.56,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
        id: 2
    },
    {
        title: 'Globo Terráqueo',
        price: 345.67,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
        id: 3
    }
];

//const usuario = new Contenedor("productos");
// Ejemplo de producto nuevo
const productoNuevo = {
    title: "Mochila",
    price: 100,
    thumbnail: "https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Pencil-256.png"
};


async function test(){
    try{
    const contenedor = new Contenedor("productos");

    let crear = await contenedor.crearArchivo(archivo);


    let producto = await contenedor.save(productoNuevo);
    console.log(`El producto con id ${producto} fue ingresado con éxito`);

    let buscarId = await contenedor.getById(3);
    console.log("El elemento buscado es: ", buscarId);

    let borrarId = await contenedor.deleteById(2);
    console.log("El elemento fue borrado con exito");

    let obtenerTodo = await contenedor.getAll();
    console.log("El documento contiene lo siguiente: ", obtenerTodo);

    // let borrarTodo = await contenedor.deleteAll();
    // console.log("---CUIDADO---\n Se han eliminado todos los productos" );
    
    } catch(err){
        console.log("Sucedió un error", err);
    }

}

test();

//usuario.crearArchivo(archivo);
//usuario.save(productoNuevo);
//usuario.getById(3);
//usuario.deleteById(3);
//usuario.deleteAll();
