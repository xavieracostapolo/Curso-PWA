function sumarUno(numero, callback){
    //return numero + 1;
    setTimeout(function (){
        callback( numero + 1 );
    }, 3000);
}

sumarUno(5,function (newValue) {
    console.log(newValue);
})