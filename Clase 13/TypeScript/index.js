// Es recomendado indicar los tipos de datos que recibe una función y los que devuelve  ()
function generarColor(mensaje) {
    console.log(mensaje);
    var x = Math.floor(Math.random() * 255 + 1);
    return x;
}
console.log("RGB(".concat(generarColor("hola"), ",").concat(generarColor("hola"), ",").concat(generarColor("hola"), ")"));
