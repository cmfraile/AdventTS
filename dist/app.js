"use strict";
console.clear();
var main = function (height) {
    if (height < 0 || height > 100) {
        return;
    }
    ;
    var hojas = 1;
    var ancho = height - 1;
    var cadena = "";
    //fabricamos las hojas:
    for (var i = 1; i <= height; i++) {
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
    var _loop_1 = function (i) {
        var fabricatronco = function () {
            var linea = "";
            for (var i_1 = 1; i_1 <= (height - 1); i_1++) {
                linea = linea + "_";
            }
            linea = linea + "#";
            for (var i_2 = 1; i_2 <= (height - 1); i_2++) {
                linea = linea + "_";
            }
            if (i == 1) {
                linea = linea + "\n";
            }
            else {
                linea = linea;
            }
            ;
            return linea;
        };
        cadena = cadena + fabricatronco();
    };
    //fabricamos el tronco:
    for (var i = 1; i <= 2; i++) {
        _loop_1(i);
    }
    console.log(cadena);
};
main(9);
//# sourceMappingURL=app.js.map