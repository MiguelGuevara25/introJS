// "user strict"; Correr en JS en modo estricto
//!Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

Object.seal(producto);

producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto));

console.log(producto);