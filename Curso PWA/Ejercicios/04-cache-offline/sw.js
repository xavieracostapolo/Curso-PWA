self.addEventListener('fetch', event => {

    const respOffLine = new Response(`
        Bienvenido a mi pagina web.

        Debe tener conexion para poder usarla.
    `);

    const resp = fetch(event.request)
                    .catch( () => respOffLine);

    event.respondWith(resp);

});


