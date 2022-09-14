const fs = require("fs");

let listaProductos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
]

class Contenedor {
    constructor(desafio) {
        this.desafio = desafio;
        this.itemList = listaProductos;

    }


    // Métodos

    // Recibe un producto y lo agrega al array itemList
    async post(producto) {
        const contenido = await this.getAll();
        const indice = contenido.sort((a, b) => b.id - a.id)[0].id;
        producto.id = indice + 1;
        contenido.push(producto);
        this.itemList = contenido;
        console.log("----Nuevo producto ingresado----");
        return producto.id;

    }

    // Reemplaza un producto en base a su id
    async put(id, producto) {
        try {
            const contenido = await this.getAll();
            const index = contenido.findIndex((p) => p.id === id);
            if(index >= 0){
                contenido.splice(index,1,{...producto, id});
                this.itemList = contenido;
                return producto;
            }else{
                console.log(`Producto con id: ${producto.id} no existe`)
                return null;
            }      
        }
        catch (err) {
            console.log("No se encontró un producto con ese id");
            return err;
        }


    }

    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(id) {
        try {
            const contenido = await this.getAll();
            const productoBuscado = contenido.filter((producto) => producto.id == id);
            if (productoBuscado != 0) {
                return productoBuscado;
            } else {
                //console.log(productoBuscado);
                console.log("Producto no encontrado");
                return null;
            }
        } catch (err) {
            console.log("Producto no encontrado", err);
            return err;
        }
    }

    // Devuelve un array con los objetos presentes en el archivo.
    async getAll() {
        try {
            const contenido = this.itemList;
            //console.log(contenido);
            return  contenido;
        } catch (err) {
            console.log(err);
        }
    }

    async deleteById(id) {
        try {
            const contenido = await this.getAll();
            const idBuscado = contenido.filter((producto) => producto.id != id);
            this.itemList = idBuscado;
            console.log("Producto eliminado");
            return id;
        } catch (err) {
            console.log(err);
        }

    }


}
module.exports = Contenedor;