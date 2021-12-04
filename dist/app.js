"use strict";
console.clear();
var carta = 'bici coche balón _playstation bici coche peluche'.split(' ');
var main = function () {
    var regexp = new RegExp(/[^a-zA-Záéíóú]/g);
    carta.forEach(function (undefined, index) { if (!!carta[index].match(regexp)) {
        carta.splice(index, 1);
    } });
    var cartaobjeto = {};
    carta.forEach(function (obj) {
        if (cartaobjeto[obj]) {
            cartaobjeto[obj]++;
        }
        else {
            cartaobjeto[obj] = 1;
        }
        ;
    });
    console.log(cartaobjeto);
};
main();
//# sourceMappingURL=app.js.map