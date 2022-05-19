//!Metodos de propiedad
const reproductor = {
    reproducir: function (id) {
        console.log("Reproduciendo Canción con el ID:", id);
    },

    pausar: function () {
        console.log('Pausando...');
    },

    crearPlaylist: function (nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },

    reproducirPlaylist: function (nombre) {
        console.log(`Reproducir la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(2502);
reproductor.pausar();
reproductor.borrarCancion(2502);
reproductor.crearPlaylist('Rap');
reproductor.reproducirPlaylist('Rap');