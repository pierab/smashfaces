$(document).ready(function(){
    $('select').change(function(){
     var select = $('select').val(); 
    

var foto = generarAleatorio(48)

       
    if(select=='peru'){
        //peru[0].image
        $('#fotopais').attr('src','fotos/peru/'+ peru[foto].image);
    } else {
        //mexico[0].image ;
        $('#fotopais').attr('src','fotos/mexico/'+ mexico[foto].image);
    }
    });
});
var historial = []
function generarAleatorio(maximo) {
    var aleatorio
    var existe = true
    do {
        aleatorio = Math.floor(Math.random()*maximo)
        if (historial.length == maximo) {
            aleatorio = -1
            existe = false
        } else if (historial.length == 0) {
            historial.push(aleatorio)
            existe = false
        } else {
            var encontrado = historial.indexOf(aleatorio)
            if (encontrado < 0) {
                historial.push(aleatorio)
                existe = false  
            } else {
                alert("Se repite! -> " + aleatorio)
            }
        }
    } while (existe)
    return aleatorio
}


