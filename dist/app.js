"use strict";
console.clear();
var carta = "bici coche (balón) bici coche peluche";
var main = function () {
    var esvalido = function (argumento) {
        var caso = true;
        if (argumento.inicio == -1 || argumento.fin == -1) {
            return false;
        }
        ;
        var cartatf = carta.split('');
        cartatf.forEach(function (x, index) { if (index < argumento.inicio) {
            cartatf.shift();
        } });
        for (var i = (argumento.longitud - argumento.fin); i >= 2; i--) {
            cartatf.pop();
        }
        ;
        cartatf.forEach(function (x, i) {
            if (x == '(' || x == ')' || x == ' ') {
                cartatf[i] = '';
            }
        });
        cartatf = cartatf.join('');
        if (cartatf !== '') {
            caso = true;
        }
        else {
            caso = false;
        }
        ;
        if (cartatf.match(/[\[\]\{\}]/)) {
            return false;
        }
        ;
        return caso;
    };
    var analizar = {
        carta: carta,
        inicio: carta.indexOf('('),
        fin: carta.indexOf(')'),
        longitud: carta.length
    };
    analizar.validez = esvalido(analizar);
    console.log(analizar);
    return analizar.validez;
};
console.log(main());
//# sourceMappingURL=app.js.map