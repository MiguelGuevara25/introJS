//!This

//*window.nombre = 'Diego';

const reservacion = {
    nombre: 'Miguel',
    apellido: 'Guevara',
    total: 500,
    pagado: false,
    informacion: () => console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
}

const reservacion2 = {
    nombre: 'Nicol',
    apellido: 'Mejia',
    total: 500,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();