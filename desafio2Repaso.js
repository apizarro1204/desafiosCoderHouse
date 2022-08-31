/* Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

ok | save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
ok | getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
ok | getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo.
 */



const fs = require("fs");
//const productos = llamar el contenido de productos con otro archivo.

class Contenedor {

    async save(producto) {
      const contenido = await this.getAll();
      const indice = contenido.sort((a,b) => b.id - a.id)[0].id;
      producto.id = indice + 1;
      contenido.push(producto);
      try{
        await fs.promises.writeFile("./productos.txt", JSON.stringify(producto, null, 2), "utf-8");
    }catch(err){
        console.log(err);
    }
}


    // getAll()

    async getAll(){
        try{
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
            console.log(contenido);
            return JSON.parse(contenido);
        } catch(err){
            console.log(err.message);
        }
    }
}


const contenedor = new Contenedor();

const productoNuevo = {
    title:"Lapiz",
    price: 60,
    thumbnail: "https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Pencil-256.png"
}


//contenedor.save(productoNuevo);
contenedor.getAll();





















/* >> Aspectos a incluir en el entregable: 
El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
El formato de cada producto será : */
