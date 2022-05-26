//!Async / Await
function descargandoNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 3000);

    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 1000);

    });
}

async function app(){
    try {
        // const clientes = await descargandoNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargandoNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();