//!Programación Orientada a Objetos - POO

//*Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//*Object Constructor

function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} tiene ${this.edad} de edad.`;
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} cuesta ${this.precio}.`;
}

const producto2 = new Producto('Monito Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Miguel', 20);


console.log(producto2);
console.log(producto3);
console.log(cliente);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());