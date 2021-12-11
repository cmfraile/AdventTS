"use strict";
console.clear();
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
};
main(pricesDoge);
//# sourceMappingURL=app.js.map