
// Ciclo de vida del SW

self.addEventListener('install', event => {

    //Descargar Assets
    //Crear Cache
    console.log('SW: Instalando service worker...')
    console.log(event);

    //No se recomienda usar, terminate sin control el anterior SW
    self.skipWaiting();

});

//Cuando el service worker toma el control de la aplicacion
self.addEventListener('activate', event => {

    //Borrar la cache viejas, del anterior SW
    console.log('SW: Activo y listo para controlar la aplicacion.');
    console.log(event);

});