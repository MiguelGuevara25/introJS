const carrito = [{
        nombre: 'Monitor 20 pulgadas',
        precio: 500
    },
    {
        nombre: 'Televisión 50 pulgadas',
        precio: 700
    },
    {
        nombre: 'Tablet',
        precio: 300
    },
    {
        nombre: 'Audífonos',
        precio: 200
    },
    {
        nombre: 'Teclado',
        precio: 50
    },
    {
        nombre: 'Celular',
        precio: 500
    },
    {
        nombre: 'Bocina',
        precio: 300
    },
    {
        nombre: 'Laptop',
        precio: 800
    }
];

//!ForEach

carrito.forEach(producto => console.log(producto.nombre));

//!Map

const array1 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(array1);