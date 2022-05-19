//!Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// const disponibleProducto = producto.disponible;

// console.log(precioProducto);
// console.log(nombreProducto);
// console.log(disponibleProducto);


//?Destructuring

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
