"use strict";
console.clear();
var main = function (altura) {
    //let valor = Math.ceil((altura / 2));
    var cadena = "";
    for (var i = 1; i <= altura; i++) {
        for (var y = 0; y <= altura - 1; y++) {
            cadena = cadena + "_";
        }
        cadena = cadena + "\n";
    }
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