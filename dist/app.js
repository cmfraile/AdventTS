"use strict";
console.clear();
var main = function (veces) {
    var precio = 12;
    var precioinfiel = 12 * veces;
    var preciofidelidad = 250;
    var precioida = precio;
    for (var i = 1; i <= veces; i++) {
        precioida == precioida * 0.75;
    }
    console.log(precioida);
    preciofidelidad += precioida;
    console.log({ precioinfiel: precioinfiel, preciofidelidad: preciofidelidad });
};
console.log(main(20));
//# sourceMappingURL=app.js.map