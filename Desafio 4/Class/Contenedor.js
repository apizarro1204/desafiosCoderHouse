const fs = require("fs");


class Contenedor {
    constructor(desafio) {
        this.desafio = desafio;

    }


    // Métodos
    async crearArchivo(productos) {
        // Crea un archivo con los productos.
        try {
            await fs.promises.writeFile("productos.txt", JSON.stringify(productos, null, 2), "utf-8");
        } catch (err) {
            console.log(err);
        }
    }


    // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

    async save(producto) {
        const contenido = await this.getAll();
        const indice = contenido.sort((a, b) => b.id - a.id)[0].id;
        producto.id = indice + 1;
        contenido.push(producto);
        this.crearArchivo(contenido);
        console.log("----Nuevo producto ingresado----");
        return producto.id;

    }

    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(id) {
        try {
            const contenido = await this.getAll();
            const productoBuscado = contenido.filter((producto) => producto.id == id);
            console.log(productoBuscado);
            return productoBuscado;
        } catch (err) {
            console.log("Producto no encontrado", err);
        }
    }

    // Devuelve un array con los objetos presentes en el archivo.
    async getAll() {
        try {
            const contenido = await fs.promises.readFile("productos.txt", "utf-8");
            //console.log(contenido);
            return JSON.parse(contenido);
        } catch (err) {
            console.log(err);
        }
    }

    async deleteById(id) {
        try {
            const contenido = await this.getAll();
            const idBuscado = contenido.filter((producto) => producto.id != id);
            this.crearArchivo(idBuscado);
            console.log("Producto eliminado");
        } catch (err) {
            console.log(err);
        }

    }

    async deleteAll() {
        try {
            await fs.promises.writeFile("productos.txt", JSON.stringify([]), "utf-8");
            //console.log("¡¡Has borrado la lista completa de productos!!");
        } catch (err) {
            console.log(err);
        }
    }

}
module.exports = Contenedor;
