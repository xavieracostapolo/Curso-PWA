
// Ciclo de vida del SW

self.addEventListener('install', event => {

    const instalacion = new Promise( (resolve, reject) => {

        setTimeout(() => {
            //Descargar Assets
            //Crear Cache
            console.log('SW: Instalando service worker...');
            
            //No se recomienda usar, terminate sin control el anterior SW
            self.skipWaiting();

            resolve();
        }, 1);
    });

});

//Cuando el service worker toma el control de la aplicacion
self.addEventListener('activate', event => {

    //Borrar la cache viejas, del anterior SW
    console.log('SW: Activo y listo para controlar la aplicacion.');

});

//Manejo de las peticiones Http
self.addEventListener('fetch', event => {

 //   console.log('SW Fetch: ', event.request.url);
 //   if (event.request.url.includes('https://reqres.in')){
 //       
 //       const resp = new Response(`{ok: false, mensaje: 'jejejeje'}`);
 //       event.respondWith( resp );
 //   }

});

//Cuando recuperamos la conexion a Internet.
self.addEventListener('sync', event => {

    console.log('Tenemos conexion.');
    console.log(event);
    console.log(event.tag);

});

//Manejar las push notification
self.addEventListener('push', event => {

    console.log(event);
    console.log('Notificacion recibida.');

});