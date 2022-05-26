//!Classes
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} cuesta $${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 49"', 800);

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '931130017');

console.log(libro.formatearProducto());
console.log(producto.formatearProducto());