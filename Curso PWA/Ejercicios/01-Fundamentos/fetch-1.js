//Asi se hacia de la forma de la vieja escuela.

var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function (state) {
    if ( request.readyState === 4 ){

        var resp = request.response;
        var respJson = JSON.parse(resp);

        console.log(respJson);
    }
};
