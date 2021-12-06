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
    //hojas arbol de navidad:
    for (var i = 1; i <= altura; i++) {
        if (i == 1) {
            var piso = ancho;
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
        else {
            var piso = ancho;
            var contador = 1;
            for (var y = 1; y <= (contador + 2); y++) {
                piso = piso + "*";
                piso = piso + ancho;
                cadena = cadena + piso + "\n";
                piso = ancho;
            }
            ;
        }
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