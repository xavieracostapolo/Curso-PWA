console.log('Test.');

/**
 * Clase de manejo de errores, el 400 no lo maneja el catch
 */
/*
self.addEventListener('fetch', event => {

    const resp = fetch(event.request)
        .then( resp => {

            if (resp.ok) {
                return resp;
            } else {
                return fetch('img/main.jpg');
            }

        });

    event.respondWith(resp);
});

/***
 *Clase de interceptar el request de la img y devolver una diferente 
 */
/*
self.addEventListener('fetch', event => {
    if (event.request.url.includes('.jpg')){
        console.log(event.request.url);
        let image = fetch('img/main-patas-arriba.jpg');
        event.respondWith(image);
    }
});

/***
 * CLASE De interceptar la peticion CSS y cambiar la respuesta
 */
/*
self.addEventListener('fetch', event => {
    if (event.request.url.includes('style.css')){
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
        `, {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        event.respondWith(respuesta);
    }
});
*/
/****
 * CLASE NUMER0 1
 */
/*
self.addEventListener('fetch', event => {
    
    //Response 
    //event.respondWith( fetch( event.request ));

    console.log(event.request.url);

    if (event.request.url.includes('.jpg')){

        //let fotoReq = fetch('img/main.jpg');
        let fotoReq = fetch(event.request.url);
        //let fotoReq = fetch(event.request);

        event.respondWith( fotoReq );
    }

});
*/