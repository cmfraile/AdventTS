"use strict";
console.clear();
var main = function (altura) {
    var hojas = 1;
    var ancho = altura - 1;
    var cadena = "";
    //fabricamos las hojas:
    for (var i = 1; i <= altura; i++) {
        var linea = "";
        for (var y = 1; y <= ancho; y++) {
            linea = linea + "_";
        }
        for (var y = 1; y <= hojas; y++) {
            linea = linea + "*";
        }
        for (var y = 1; y <= ancho; y++) {
            linea = linea + "_";
        }
        cadena = cadena + linea + "\n";
        ancho--;
        hojas = hojas + 2;
    }
    //fabricamos el tronco:
    for (var i = 1; i <= 2; i++) {
        var fabricatronco = function () {
            var linea = "";
            for (var i_1 = 1; i_1 <= (altura - 1); i_1++) {
                linea = linea + "_";
            }
            linea = linea + "#";
            for (var i_2 = 1; i_2 <= (altura - 1); i_2++) {
                linea = linea + "_";
            }
            linea = linea + "\n";
            return linea;
        };
        cadena = cadena + fabricatronco();
    }
    console.log(cadena);
};
main(5);
//# sourceMappingURL=app.js.map