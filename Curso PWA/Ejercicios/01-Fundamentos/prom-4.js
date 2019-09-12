function sumarLento( numero ) {

    return new Promise(function( resolve, reject ) {

        setTimeout(function () {
            resolve(numero + 1);
        }, 800);
    });
}

let sumarRapido = (numero) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 300);
    });
}

let sumarConError = () => {
    return new Promise( (resolve, reject) => {
        reject('Error en la promesa');
    });
}

//Pone a competir las promesas que entran como parametro y la respuesta es de la primera que responde
Promise.race([ sumarLento(5), sumarRapido(10), sumarConError() ])
.then( respuesta => {
    console.log(respuesta);
})
.catch( console.log );