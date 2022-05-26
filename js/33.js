function obtenerEmpleados() {

    const archivo = 'empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            console.log(datos);
        })
}

obtenerEmpleados();