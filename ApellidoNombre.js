class Usuario{
    constructor(nombre, apellido, mascotas, libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas || [];
        this.libros = libros || [];
    }

// Métodos

getFullName(){
    return console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
}

addMascota(nuevaMascota){
    this.mascotas.push(nuevaMascota);
}

countMascota(){
        return console.log(`La cantidad de mascotas es ${this.mascotas.length}`);
}

addBook(nombre, autor){
    this.libros.push({nombre:nombre, autor:autor});

}
getBookNames(){
    const nombreLibro = []
    this.libros.map(libro=>
        nombreLibro.push(libro.nombre)
    )
    return console.log(`Los libros son: ${nombreLibro}`);
    
}
}


const usuario = new Usuario('Alexis', 'Pizarro', ['Gato', 'Perro'], [{nombre: 'Misery', autor: 'Stephen King'},{nombre: 'Dark Tower', autor: 'Stephen King'}]);

usuario.getFullName();
usuario.addMascota('Tortuga');
console.log(usuario.mascotas);
usuario.countMascota();
usuario.addBook('Gracia y el forastero', 'Guillermo Blanco');
usuario.getBookNames();






