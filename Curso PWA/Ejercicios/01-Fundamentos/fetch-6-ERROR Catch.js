
fetch( 'https://reqres.in/api/users/100000')
.then( resp => {

    if ( resp.ok ){
        return resp.json();
    } else {
        throw new Error('No se encuentra la peticion.')
    }

})
.then( console.log )
.catch( error => {
    console.log('Error en la peticion');
    console.log(error);
});
