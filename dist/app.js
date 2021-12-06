"use strict";
console.clear();
var main = function (altura) {
    //let valor = Math.ceil((altura / 2));
    var cadena = "";
    var generarancho = function () {
        var caso = "";
        for (var i = 1; i <= altura; i++) {
            caso = caso + "_";
        }
        ;
        return caso;
    };
    var ancho = generarancho();
    /*
    for(let i = 1 ; i <= altura ; i++ ){
        let piso = "";
        for( let y = 0 ; y <= altura -1 ; y++ ){
            piso = piso + "*" ;
        }
        cadena = ancho + piso + ancho ;
        cadena = cadena + "\n";
    }
    */
    for (var i = 1; i <= altura; i++) {
        var piso = ancho;
        if (i == 1) {
            piso = piso + "*" + ancho;
            while (piso.length !== altura) {
                piso = piso.split('');
                piso.shift();
                piso.pop();
                piso = piso.join('');
            }
            ;
            cadena = piso + "\n" + cadena;
            piso = ancho;
        }
        for (var y = 1; y <= altura; y++) {
        }
        ;
    }
    //tronco del arbol de navidad:
    for (var i = 1; i <= 2; i++) {
        for (var y = 1; y <= altura; y++) {
            if (y == (Math.ceil(altura / 2))) {
                cadena = cadena + "#";
            }
            else {
                cadena = cadena + "_";
            }
        }
        cadena = cadena + "\n";
    }
    console.log(cadena);
};
main(5);
//# sourceMappingURL=app.js.map