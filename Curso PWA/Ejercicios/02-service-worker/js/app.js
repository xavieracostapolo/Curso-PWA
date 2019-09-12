//Se valida que el service worker se pueda ejecutar
if ( navigator.serviceWorker ){
    
    //Instalar el service worker
    navigator.serviceWorker.register('/sw.js');

}