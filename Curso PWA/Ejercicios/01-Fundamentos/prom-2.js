function sumarUno(numero){

    var promesa = new Promise( function (resolve, reject) {
        
        if (numero >= 9) {
            reject('ERROR DE NUMERO.');
        }

        setTimeout(function () {
            resolve(numero +1);
        }, 800);

    });

    return promesa;
}

sumarUno(5).then( nuevoValor => {
    console.log(nuevoValor);
    return sumarUno(nuevoValor);
})
.then( sumarUno )
.then( nuevoValor => {
    console.log(nuevoValor);
    return sumarUno(nuevoValor);
})
.then( nuevoValor => {
    console.log(nuevoValor);
    return sumarUno(nuevoValor);
})
.catch( error => {
    console.log('ERROR EN LA PROMESA');
    console.log(error);
});