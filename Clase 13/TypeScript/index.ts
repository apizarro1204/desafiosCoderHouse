// Es recomendado indicar los tipos de datos que recibe una función y los que devuelve  ()

function generarColor(mensaje: string): number {
    console.log(mensaje);
    var x: number = Math.floor(Math.random() * 255 + 1);
    return x;
}

console.log(
    `RGB(${generarColor("hola")},${generarColor("hola")},${generarColor("hola")})`
);