"use strict";
console.clear();
<<<<<<< HEAD
var pricesBtc = [39, 18, 29, 25, 34, 32, 5];
var pricesDoge = [18, 15, 12, 11, 9, 7];
var main = function (prices) {
    var criterio = { compra: null, vende: null, beneficio: -1 };
    for (var x = 0; x <= prices.length; x++) {
        for (var y = 0; y <= prices.length; y++) {
            if (x !== y && x <= y) {
                if ((prices[y] - prices[x]) > criterio.beneficio) {
                    criterio.compra = prices[x];
                    criterio.vende = prices[y];
                    criterio.beneficio = prices[y] - prices[x];
                }
            }
            ;
        }
    }
    return criterio.beneficio;
=======
var main = function (altura) {
    var cadena = "";
    var hojas = 1;
    var ancho = (altura * 2) - 1;
    for (var i = 1; i <= altura; i++) {
        var piso = "";
        for (var y = 1; y <= ancho; y++) {
            if (y < )
                ;
        }
    }
>>>>>>> master
};
main(pricesDoge);
//# sourceMappingURL=app.js.map